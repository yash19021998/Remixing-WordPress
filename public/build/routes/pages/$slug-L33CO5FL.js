import {
  Header
} from "/build/_shared/chunk-7AZGMFEM.js";
import {
  React,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-HDUZ7ZCG.js";

// browser-route-module:/home/mohd.ehtishamuddin@brainvire.com/remixing-wordpress/app/routes/pages/$slug.jsx?browser
init_react();

// app/routes/pages/$slug.jsx
init_react();

// app/components/Page.jsx
init_react();
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

// app/routes/pages/$slug.jsx
function Slug() {
  const page = useLoaderData();
  if (!page) {
    return /* @__PURE__ */ React.createElement("div", null, "Page not found!");
  }
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Header, {
    title: page.title.rendered
  }), /* @__PURE__ */ React.createElement(Page, {
    page
  }));
}
export {
  Slug as default
};
//# sourceMappingURL=/build/routes/pages/$slug-L33CO5FL.js.map
