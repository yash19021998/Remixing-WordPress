var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/home/yash.chaudhary@brainvire.com/htdocs/remixing-wordpress/app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-2T6UQH3N.css";

// route:/home/yash.chaudhary@brainvire.com/htdocs/remixing-wordpress/app/root.jsx
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
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// route:/home/yash.chaudhary@brainvire.com/htdocs/remixing-wordpress/app/routes/pages/$slug.jsx
var slug_exports = {};
__export(slug_exports, {
  default: () => Slug,
  loader: () => loader
});
var import_react3 = require("@remix-run/react");

// app/components/Header.jsx
function Header({ title }) {
  return /* @__PURE__ */ React.createElement("header", {
    className: "relative w-full p-6 h-85px mx-auto bg-slate-200"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl"
  }, "Remixing WordPress"));
}

// app/components/Page.jsx
function Page({ page }) {
  return /* @__PURE__ */ React.createElement("main", {
    className: "bg-gray-100 container mx-auto mt-6 p-6 rounded-lg"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl"
  }, page.title.rendered), /* @__PURE__ */ React.createElement("div", {
    className: "text-2xl mt-4"
  }, new Date(page.date).toLocaleDateString()), /* @__PURE__ */ React.createElement("article", {
    className: "mt-4 space-y-2",
    dangerouslySetInnerHTML: { __html: page.content.rendered }
  }));
}

// route:/home/yash.chaudhary@brainvire.com/htdocs/remixing-wordpress/app/routes/pages/$slug.jsx
async function loader({ params }) {
  const slug = params.slug;
  const baseUrl = process.env.WORDPRESS_API_URL;
  if (!baseUrl) {
    throw new Error("WORDPRESS_API_URL is not defined in the environment.");
  }
  const wordpressApiUrl = `${baseUrl}/pages?slug=${slug}`;
  try {
    const response = await fetch(wordpressApiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch page from WordPress.");
    }
    const pages = await response.json();
    return pages.length > 0 ? pages[0] : null;
  } catch (error) {
    console.error("Error fetching page from WordPress:", error);
    return null;
  }
}
function Slug() {
  const page = (0, import_react3.useLoaderData)();
  if (!page) {
    return /* @__PURE__ */ React.createElement("div", null, "Page not found!");
  }
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Header, {
    title: page.title.rendered
  }), /* @__PURE__ */ React.createElement(Page, {
    page
  }));
}

// route:/home/yash.chaudhary@brainvire.com/htdocs/remixing-wordpress/app/routes/posts/$slug.jsx
var slug_exports2 = {};
__export(slug_exports2, {
  default: () => Slug2,
  loader: () => loader2
});
var import_react4 = require("@remix-run/react");
async function loader2({ params }) {
  const slug = params.slug;
  const baseUrl = process.env.WORDPRESS_API_URL;
  if (!baseUrl) {
    throw new Error("WORDPRESS_API_URL is not defined in the environment.");
  }
  const wordpressApiUrl = `${baseUrl}/posts?slug=${slug}`;
  try {
    const response = await fetch(wordpressApiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch posts from WordPress.");
    }
    const posts = await response.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error("Error fetching WordPress posts:", error);
    return null;
  }
}
function Slug2() {
  const post = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Header, {
    title: "Home Page"
  }), /* @__PURE__ */ React.createElement("main", {
    className: "bg-gray-100 container mx-auto mt-6 p-6 rounded-lg"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl"
  }, post.title.rendered), /* @__PURE__ */ React.createElement("div", {
    className: "text-2xl mt-4"
  }, new Date(post.date).toLocaleDateString()), /* @__PURE__ */ React.createElement("article", {
    className: "mt-4 space-y-2",
    dangerouslySetInnerHTML: { __html: post.content.rendered }
  })));
}

// route:/home/yash.chaudhary@brainvire.com/htdocs/remixing-wordpress/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader3
});

// app/components/Post.jsx
var import_react5 = require("@remix-run/react");
function Post({ post }) {
  return /* @__PURE__ */ React.createElement(import_react5.Link, {
    prefetch: "render",
    to: `/posts/${post.slug}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex \n            items-center \n            bg-gradient-to-r\n            from-cyan-500 \n            to-blue-500 \n            p-8 \n            rounded-lg \n            text-white \n            transition-all \n            hover:-translate-y-1 \n            hover:scale-105"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", {
    className: "font-semibold text-2xl"
  }, post.title.rendered), /* @__PURE__ */ React.createElement("p", null, new Date(post.date).toLocaleDateString()))));
}

// route:/home/yash.chaudhary@brainvire.com/htdocs/remixing-wordpress/app/routes/index.jsx
var import_react6 = require("@remix-run/react");
async function loader3() {
  const baseUrl = process.env.WORDPRESS_API_URL;
  if (!baseUrl) {
    throw new Error("WORDPRESS_API_URL is not defined in the environment.");
  }
  const wordpressApiUrl = `${baseUrl}/posts`;
  try {
    const response = await fetch(wordpressApiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch posts from WordPress.");
    }
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error("Error fetching WordPress posts:", error);
    return [];
  }
}
function Index() {
  const posts = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Header, {
    title: "Home Page"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "grid gap-8 grid-cols-1 lg:grid-cols-3 p-6"
  }, posts.map((post) => /* @__PURE__ */ React.createElement(Post, {
    post,
    key: post.id
  }))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "1134eecb", "entry": { "module": "/build/entry.client-KA2DWAA5.js", "imports": ["/build/_shared/chunk-HDUZ7ZCG.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-TH2BF4X6.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-2UGRSRJK.js", "imports": ["/build/_shared/chunk-7AZGMFEM.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/pages/$slug": { "id": "routes/pages/$slug", "parentId": "root", "path": "pages/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/pages/$slug-WR4UQNGL.js", "imports": ["/build/_shared/chunk-7AZGMFEM.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/$slug": { "id": "routes/posts/$slug", "parentId": "root", "path": "posts/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/$slug-C7LXEZAV.js", "imports": ["/build/_shared/chunk-7AZGMFEM.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-1134EECB.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/pages/$slug": {
    id: "routes/pages/$slug",
    parentId: "root",
    path: "pages/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/posts/$slug": {
    id: "routes/posts/$slug",
    parentId: "root",
    path: "posts/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map
