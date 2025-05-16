import {
  Header
} from "/build/_shared/chunk-PBAJSXHD.js";
import {
  useLoaderData
} from "/build/_shared/chunk-QGBLHN5G.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// browser-route-module:/home/mohd.ehtishamuddin@brainvire.com/remixing-wordpress/app/routes/posts/$slug.jsx?browser
init_react();

// app/routes/posts/$slug.jsx
init_react();
function Slug() {
  const post = useLoaderData();
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
export {
  Slug as default
};
//# sourceMappingURL=/build/routes/posts/$slug-H6IF2ZSM.js.map
