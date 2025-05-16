import {
  Header
} from "/build/_shared/chunk-7AZGMFEM.js";
import {
  Link,
  React,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-HDUZ7ZCG.js";

// browser-route-module:/home/yash.chaudhary@brainvire.com/htdocs/remixing-wordpress/app/routes/index.jsx?browser
init_react();

// app/routes/index.jsx
init_react();

// app/components/Post.jsx
init_react();
function Post({ post }) {
  return /* @__PURE__ */ React.createElement(Link, {
    prefetch: "render",
    to: `/posts/${post.slug}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex \n            items-center \n            bg-gradient-to-r\n            from-cyan-500 \n            to-blue-500 \n            p-8 \n            rounded-lg \n            text-white \n            transition-all \n            hover:-translate-y-1 \n            hover:scale-105"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", {
    className: "font-semibold text-2xl"
  }, post.title.rendered), /* @__PURE__ */ React.createElement("p", null, new Date(post.date).toLocaleDateString()))));
}

// app/routes/index.jsx
function Index() {
  const posts = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Header, {
    title: "Home Page"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "grid gap-8 grid-cols-1 lg:grid-cols-3 p-6"
  }, posts.map((post) => /* @__PURE__ */ React.createElement(Post, {
    post,
    key: post.id
  }))));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-VBUWLYRX.js.map
