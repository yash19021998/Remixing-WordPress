// components/Page.jsx
export default function Page({ page }) {
    return (
      <main className="bg-gray-100 container mx-auto mt-6 p-6 rounded-lg">
        <h1 className="text-4xl">{page.title.rendered}</h1>
        <div className="text-2xl mt-4">
          {new Date(page.date).toLocaleDateString()}
        </div>
        <article
          className="mt-4 space-y-2"
          dangerouslySetInnerHTML={{ __html: page.content.rendered }}
        ></article>
      </main>
    );
  }
  