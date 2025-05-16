import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  React,
  Scripts,
  ScrollRestoration,
  init_react
} from "/build/_shared/chunk-HDUZ7ZCG.js";

// browser-route-module:/home/yash.chaudhary@brainvire.com/htdocs/remixing-wordpress/app/root.jsx?browser
init_react();

// app/root.jsx
init_react();

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-2T6UQH3N.css";

// app/root.jsx
var links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
var meta = () => ({
  charset: "utf-8",
  title: "Remixing WordPress",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(Outlet, null), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-TH2BF4X6.js.map
