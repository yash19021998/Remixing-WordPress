import {
  Header
} from "/build/_shared/chunk-PBAJSXHD.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-ZJ3JM4BB.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// browser-route-module:/home/mohd.ehtishamuddin@brainvire.com/remixing-wordpress/app/routes/index.jsx?browser
init_react();

// app/routes/index.jsx
init_react();

// app/components/Post.jsx
init_react();
function Post({ post }) {
  return /* @__PURE__ */ React.createElement(Link, {
    prefetch: "render",
    to: `/posts/${post.slug.rendered}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex \n            items-center \n            bg-gradient-to-r\n            from-cyan-500 \n            to-blue-500 \n            p-8 \n            rounded-lg \n            text-white \n            transition-all \n            hover:-translate-y-1 \n            hover:scale-105"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", {
    className: "font-semibold text-2xl"
  }, post.title.rendered), /* @__PURE__ */ React.createElement("p", null, new Date(post.date.rendered).toLocaleDateString()))));
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
//# sourceMappingURL=/build/routes/index-M2T7BZHA.js.map
