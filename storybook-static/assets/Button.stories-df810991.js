import { j as s } from "./jsx-runtime-6eef64cc.js";
import { c as R } from "./index-778010da.js";
import "./index-c013ead5.js";
import "./_commonjsHelpers-725317a4.js";
const K = "_button_jrfsf_1",
  X = "_text_jrfsf_19",
  z = "_mainFont_jrfsf_23",
  J = "_low_jrfsf_31",
  Q = "_medium_jrfsf_35",
  Z = "_high_jrfsf_40",
  $ = "_withMinWidth_jrfsf_44",
  tt = "_withLeftIcon_jrfsf_48",
  et = "_withRightIcon_jrfsf_52",
  nt = "_leftIcon_jrfsf_56",
  rt = "_rightIcon_jrfsf_60",
  ot = "_iconPadding_jrfsf_64",
  it = "_primary_jrfsf_68",
  at = "_secondary_jrfsf_73",
  ct = "_pale_jrfsf_78",
  e = {
    button: K,
    text: X,
    mainFont: z,
    low: J,
    medium: Q,
    high: Z,
    withMinWidth: $,
    withLeftIcon: tt,
    withRightIcon: et,
    leftIcon: nt,
    rightIcon: rt,
    iconPadding: ot,
    primary: it,
    secondary: at,
    pale: ct,
  };
var r = ((t) => (
    (t.FORWARD = "forward"),
    (t.BACK = "back"),
    (t.SELECT = "select"),
    (t.CANCEL = "cancel"),
    (t.OTHER = "other"),
    t
  ))(r || {}),
  o = ((t) => ((t.LOW = "low"), (t.MEDIUM = "medium"), (t.HIGH = "high"), t))(
    o || {},
  ),
  i = ((t) => (
    (t.PRIMARY = "primary"), (t.SECONDARY = "secondary"), (t.PALE = "pale"), t
  ))(i || {}),
  n = ((t) => ((t.LEFT = "leftIcon"), (t.RIGHT = "rightIcon"), t))(n || {});
const p = (t) => {
  const {
      className: N = "",
      height: x,
      withMinWidth: Y = !1,
      color: q,
      icon: c = null,
      iconSide: a = "",
      iconAlt: g = "",
      mainFont: D = !1,
      feature: _,
      title: V,
      ...U
    } = t,
    k = R({
      [N]: !0,
      [e.button]: !0,
      [e[x]]: !0,
      [e.withMinWidth]: Y,
      [e[q]]: !0,
      [e.withLeftIcon]: a === n.LEFT,
      [e.withRightIcon]: a === n.RIGHT,
      [e.mainFont]: D,
    }),
    I = R({ [e[a]]: !0, [e.iconPadding]: _ === r.CANCEL });
  return s.jsxs("button", {
    "data-testid": _,
    type: "button",
    className: k,
    ...U,
    children: [
      c && a === n.LEFT && s.jsx("img", { src: c, alt: g, className: I }),
      s.jsx("span", { className: e.text, children: V }),
      c && a === n.RIGHT && s.jsx("img", { src: c, alt: g, className: I }),
    ],
  });
};
try {
  (p.displayName = "Button"),
    (p.__docgenInfo = {
      description: "",
      displayName: "Button",
      props: {
        className: {
          defaultValue: null,
          description: "",
          name: "className",
          required: !1,
          type: { name: "string" },
        },
        height: {
          defaultValue: null,
          description: "",
          name: "height",
          required: !0,
          type: {
            name: "enum",
            value: [
              { value: '"low"' },
              { value: '"medium"' },
              { value: '"high"' },
            ],
          },
        },
        withMinWidth: {
          defaultValue: null,
          description: "",
          name: "withMinWidth",
          required: !1,
          type: { name: "boolean" },
        },
        color: {
          defaultValue: null,
          description: "",
          name: "color",
          required: !0,
          type: {
            name: "enum",
            value: [
              { value: '"primary"' },
              { value: '"secondary"' },
              { value: '"pale"' },
            ],
          },
        },
        icon: {
          defaultValue: null,
          description: "",
          name: "icon",
          required: !1,
          type: { name: "string" },
        },
        iconAlt: {
          defaultValue: null,
          description: "",
          name: "iconAlt",
          required: !1,
          type: { name: "string" },
        },
        iconSide: {
          defaultValue: null,
          description: "",
          name: "iconSide",
          required: !1,
          type: {
            name: "enum",
            value: [{ value: '"leftIcon"' }, { value: '"rightIcon"' }],
          },
        },
        rightPadding: {
          defaultValue: null,
          description: "",
          name: "rightPadding",
          required: !1,
          type: { name: "boolean" },
        },
        mainFont: {
          defaultValue: null,
          description: "",
          name: "mainFont",
          required: !1,
          type: { name: "boolean" },
        },
        feature: {
          defaultValue: null,
          description: "",
          name: "feature",
          required: !0,
          type: {
            name: "enum",
            value: [
              { value: '"forward"' },
              { value: '"back"' },
              { value: '"select"' },
              { value: '"cancel"' },
              { value: '"other"' },
            ],
          },
        },
        title: {
          defaultValue: null,
          description: "",
          name: "title",
          required: !0,
          type: { name: "string" },
        },
      },
    });
} catch {}
const G = "" + new URL("icon-arrow right-e474c94f.svg", import.meta.url).href,
  st = "" + new URL("icon-arrow left-8df2ff7c.svg", import.meta.url).href,
  lt = "" + new URL("X-73136ee9.svg", import.meta.url).href,
  ft = {
    title: "ui/Button",
    component: p,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
  },
  l = {
    args: {
      type: "button",
      feature: r.FORWARD,
      height: o.HIGH,
      color: i.PRIMARY,
      icon: G,
      iconSide: n.RIGHT,
      iconAlt: "Стрелка вправо",
      title: "Продолжить",
      withMinWidth: !0,
    },
  },
  u = {
    args: {
      type: "button",
      feature: r.BACK,
      height: o.HIGH,
      color: i.SECONDARY,
      icon: st,
      iconSide: n.LEFT,
      iconAlt: "Стрелка влево",
      title: "Назад",
      withMinWidth: !0,
    },
  },
  d = {
    args: {
      type: "button",
      feature: r.FORWARD,
      height: o.MEDIUM,
      color: i.PRIMARY,
      icon: G,
      iconSide: n.RIGHT,
      iconAlt: "Стрелка вправо",
      title: "Войти",
    },
  },
  m = {
    args: {
      type: "button",
      feature: r.OTHER,
      height: o.HIGH,
      color: i.PRIMARY,
      title: "Пройти квиз!",
      withMinWidth: !0,
    },
  },
  h = {
    args: {
      type: "button",
      feature: r.SELECT,
      height: o.LOW,
      color: i.PALE,
      title: "Футбол",
      mainFont: !0,
    },
  },
  f = {
    args: {
      type: "button",
      feature: r.CANCEL,
      height: o.LOW,
      color: i.PRIMARY,
      icon: lt,
      iconSide: n.RIGHT,
      iconAlt: "Крестик",
      title: "Футбол",
      mainFont: !0,
    },
  };
var A, w, y;
l.parameters = {
  ...l.parameters,
  docs: {
    ...((A = l.parameters) == null ? void 0 : A.docs),
    source: {
      originalSource: `{
  args: {
    type: "button",
    feature: ButtonFeature.FORWARD,
    height: ButtonHeight.HIGH,
    color: ButtonColor.PRIMARY,
    icon: rightArrow,
    iconSide: IconSide.RIGHT,
    iconAlt: "Стрелка вправо",
    title: "Продолжить",
    withMinWidth: true
  }
}`,
      ...((y = (w = l.parameters) == null ? void 0 : w.docs) == null
        ? void 0
        : y.source),
    },
  },
};
var H, E, L;
u.parameters = {
  ...u.parameters,
  docs: {
    ...((H = u.parameters) == null ? void 0 : H.docs),
    source: {
      originalSource: `{
  args: {
    type: "button",
    feature: ButtonFeature.BACK,
    height: ButtonHeight.HIGH,
    color: ButtonColor.SECONDARY,
    icon: leftArrow,
    iconSide: IconSide.LEFT,
    iconAlt: "Стрелка влево",
    title: "Назад",
    withMinWidth: true
  }
}`,
      ...((L = (E = u.parameters) == null ? void 0 : E.docs) == null
        ? void 0
        : L.source),
    },
  },
};
var M, S, C;
d.parameters = {
  ...d.parameters,
  docs: {
    ...((M = d.parameters) == null ? void 0 : M.docs),
    source: {
      originalSource: `{
  args: {
    type: "button",
    feature: ButtonFeature.FORWARD,
    height: ButtonHeight.MEDIUM,
    color: ButtonColor.PRIMARY,
    icon: rightArrow,
    iconSide: IconSide.RIGHT,
    iconAlt: "Стрелка вправо",
    title: "Войти"
  }
}`,
      ...((C = (S = d.parameters) == null ? void 0 : S.docs) == null
        ? void 0
        : C.source),
    },
  },
};
var F, W, b;
m.parameters = {
  ...m.parameters,
  docs: {
    ...((F = m.parameters) == null ? void 0 : F.docs),
    source: {
      originalSource: `{
  args: {
    type: "button",
    feature: ButtonFeature.OTHER,
    height: ButtonHeight.HIGH,
    color: ButtonColor.PRIMARY,
    title: "Пройти квиз!",
    withMinWidth: true
  }
}`,
      ...((b = (W = m.parameters) == null ? void 0 : W.docs) == null
        ? void 0
        : b.source),
    },
  },
};
var v, j, T;
h.parameters = {
  ...h.parameters,
  docs: {
    ...((v = h.parameters) == null ? void 0 : v.docs),
    source: {
      originalSource: `{
  args: {
    type: "button",
    feature: ButtonFeature.SELECT,
    height: ButtonHeight.LOW,
    color: ButtonColor.PALE,
    title: "Футбол",
    mainFont: true
  }
}`,
      ...((T = (j = h.parameters) == null ? void 0 : j.docs) == null
        ? void 0
        : T.source),
    },
  },
};
var B, P, O;
f.parameters = {
  ...f.parameters,
  docs: {
    ...((B = f.parameters) == null ? void 0 : B.docs),
    source: {
      originalSource: `{
  args: {
    type: "button",
    feature: ButtonFeature.CANCEL,
    height: ButtonHeight.LOW,
    color: ButtonColor.PRIMARY,
    icon: cross,
    iconSide: IconSide.RIGHT,
    iconAlt: "Крестик",
    title: "Футбол",
    mainFont: true
  }
}`,
      ...((O = (P = f.parameters) == null ? void 0 : P.docs) == null
        ? void 0
        : O.source),
    },
  },
};
const pt = ["Forward", "Back", "Login", "WithoutIcon", "Select", "Cancel"];
export {
  u as Back,
  f as Cancel,
  l as Forward,
  d as Login,
  h as Select,
  m as WithoutIcon,
  pt as __namedExportsOrder,
  ft as default,
};
//# sourceMappingURL=Button.stories-df810991.js.map
