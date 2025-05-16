import {
  Form
} from "/build/_shared/chunk-KVVRN5OB.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// browser-route-module:/home/mohd.ehtishamuddin@brainvire.com/remixing-wordpress/app/routes/contacts.$contactID.tsx?browser
init_react();

// app/routes/contacts.$contactID.tsx
init_react();
function Contact() {
  const contact = {
    first: "Your",
    last: "Name",
    avatar: "https://placecats.com/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true
  };
  return /* @__PURE__ */ React.createElement("div", {
    id: "contact"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    alt: `${contact.first} ${contact.last} avatar`,
    key: contact.avatar,
    src: contact.avatar
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, contact.first || contact.last ? /* @__PURE__ */ React.createElement(React.Fragment, null, contact.first, " ", contact.last) : /* @__PURE__ */ React.createElement("i", null, "No Name"), " ", /* @__PURE__ */ React.createElement(Favorite, {
    favorite: contact.favorite
  })), contact.twitter ? /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("a", {
    href: `https://twitter.com/${contact.twitter}`
  }, contact.twitter)) : null, contact.notes ? /* @__PURE__ */ React.createElement("p", null, contact.notes) : null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Form, {
    action: "edit"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Edit")), /* @__PURE__ */ React.createElement(Form, {
    action: "destroy",
    method: "post",
    onSubmit: (event) => {
      const response = confirm("Please confirm you want to delete this record.");
      if (!response) {
        event.preventDefault();
      }
    }
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Delete")))));
}
function Favorite({ favorite }) {
  return /* @__PURE__ */ React.createElement(Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", {
    "aria-label": favorite ? "Remove from favorites" : "Add to favorites",
    name: "favorite",
    value: favorite ? "false" : "true"
  }, favorite ? "\u2605" : "\u2606"));
}
export {
  Contact as default
};
//# sourceMappingURL=/build/routes/contacts.$contactID-E3JXSEFR.js.map
