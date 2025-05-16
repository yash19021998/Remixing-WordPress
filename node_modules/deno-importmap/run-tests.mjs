import { readdirSync } from 'fs'
import { types } from 'util'
import { resolve } from 'path'

const regex = /__tests__|(\.|_)(test|spec).(j)sx?$|test\..?.s/m
const arg = process.argv.slice(2)[0]
const dir = resolve(process.cwd(), arg ? arg : '')
console.log('Running tests in', dir)
const files = readdirSync(dir).filter((file) => regex.test(file))
const tests = []

globalThis.Deno = {}
globalThis.Deno.test = function test(name, fn) {
  tests.push({ name, fn })
}

async function run() {
  await Promise.all(files.map((file) => import('file://' + dir + '/' + file))).catch((e) =>
    console.log(e)
  )
  tests.forEach((t) => {
    if (types.isAsyncFunction(t.fn)) {
      t.fn()
        .then(() => console.log('✅', t.name))
        .catch((e) => {
          console.log('❌', t.name)
          console.log(e.stack)
        })
    } else {
      try {
        t.fn()
        console.log('✅', t.name)
      } catch (e) {
        console.log('❌', t.name)
        console.log(e.stack)
      }
    }
  })
}

run()
