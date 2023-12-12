import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-NEJNOPWD.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-OUSFLI64.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/styles/note-details.css
var note_details_default = "/build/_assets/note-details-BRVJV52J.css";

// app/routes/$noteId.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\$noteId.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\$noteId.jsx"
  );
}
function NoteDetailsPage() {
  _s();
  const note = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { id: "note-details", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/notes", children: "Back to all Notes" }, void 0, false, {
        fileName: "app/routes/$noteId.jsx",
        lineNumber: 30,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/$noteId.jsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: note.title }, void 0, false, {
        fileName: "app/routes/$noteId.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/$noteId.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { id: "note-details-content", children: note.content }, void 0, false, {
      fileName: "app/routes/$noteId.jsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/$noteId.jsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_s(NoteDetailsPage, "DI4FmUNnI0E+EOY/0c1VWCZfGBk=", false, function() {
  return [useLoaderData];
});
_c = NoteDetailsPage;
function links() {
  return [{
    rel: "stylesheet",
    href: note_details_default
  }];
}
function meta({
  data
}) {
  return [{
    title: data.title,
    description: "todas las notas eduardo"
  }];
}
var _c;
$RefreshReg$(_c, "NoteDetailsPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  NoteDetailsPage as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/$noteId-DUZVURKG.js.map
