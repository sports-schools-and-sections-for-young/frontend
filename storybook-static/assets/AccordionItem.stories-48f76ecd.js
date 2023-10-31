import { j as r } from "./jsx-runtime-6eef64cc.js";
import { c as y } from "./index-778010da.js";
import "./index-c013ead5.js";
import "./_commonjsHelpers-725317a4.js";
const i = {},
  a = (e) => {
    const { state: n, title: g, desctiption: E } = e,
      _ = y({ [i.item]: !0, [i[n]]: !0 });
    return r.jsxs("li", {
      className: _,
      children: [
        r.jsx("h3", { className: "title", children: g }),
        n === "opened" && r.jsx("p", { className: "description", children: E }),
      ],
    });
  };
try {
  (a.displayName = "AccordionItem"),
    (a.__docgenInfo = {
      description: "",
      displayName: "AccordionItem",
      props: {
        state: {
          defaultValue: null,
          description: "",
          name: "state",
          required: !0,
          type: { name: "string" },
        },
        title: {
          defaultValue: null,
          description: "",
          name: "title",
          required: !0,
          type: { name: "string" },
        },
        desctiption: {
          defaultValue: null,
          description: "",
          name: "desctiption",
          required: !0,
          type: { name: "string" },
        },
      },
    });
} catch {}
var o = ((e) => ((e.CLOSED = "closed"), (e.OPENED = "opened"), e))(o || {});
const I = {
    title: "ui/AccordionItem",
    component: a,
    parameters: { parameters: { layout: "centered" } },
    tags: ["autodocs"],
  },
  t = {
    args: {
      state: o.CLOSED,
      title: "Тестовый заголовок",
      desctiption:
        "Тестовое описание,  тест тест тест тест тест тест тест тест тест тест тест тест тест тест тест тест",
    },
  },
  s = {
    args: {
      state: o.OPENED,
      title: "Тестовый заголовок",
      desctiption:
        "Тестовое описание,  тест тест тест тест тест тест тест тест тест тест тест тест тест тест тест тест",
    },
  };
var c, d, p;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((c = t.parameters) == null ? void 0 : c.docs),
    source: {
      originalSource: `{
  args: {
    state: AccordionItemState.CLOSED,
    title: "Тестовый заголовок",
    desctiption: "Тестовое описание,  тест тест тест тест тест тест тест тест тест тест тест тест тест тест тест тест"
  }
}`,
      ...((p = (d = t.parameters) == null ? void 0 : d.docs) == null
        ? void 0
        : p.source),
    },
  },
};
var l, m, u;
s.parameters = {
  ...s.parameters,
  docs: {
    ...((l = s.parameters) == null ? void 0 : l.docs),
    source: {
      originalSource: `{
  args: {
    state: AccordionItemState.OPENED,
    title: "Тестовый заголовок",
    desctiption: "Тестовое описание,  тест тест тест тест тест тест тест тест тест тест тест тест тест тест тест тест"
  }
}`,
      ...((u = (m = s.parameters) == null ? void 0 : m.docs) == null
        ? void 0
        : u.source),
    },
  },
};
const C = ["Closed", "Opened"];
export { t as Closed, s as Opened, C as __namedExportsOrder, I as default };
//# sourceMappingURL=AccordionItem.stories-48f76ecd.js.map
