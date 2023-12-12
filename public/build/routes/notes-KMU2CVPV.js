import {
  Form,
  Link,
  useActionData,
  useCatch,
  useLoaderData,
  useTransition
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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// app/routes/notes.jsx
var import_node = __toESM(require_node());

// app/components/NewNote.css
var NewNote_default = "/build/_assets/NewNote-HBKIPWFQ.css";

// app/components/NewNote.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\NewNote.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\NewNote.jsx"
  );
}
function NewNote() {
  _s();
  const data = useActionData();
  const navigation = useTransition();
  const isSubmiting = navigation.state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", id: "note-form", children: [
    (data == null ? void 0 : data.message) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: data.message }, void 0, false, {
      fileName: "app/components/NewNote.jsx",
      lineNumber: 29,
      columnNumber: 31
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "title", children: "Title" }, void 0, false, {
        fileName: "app/components/NewNote.jsx",
        lineNumber: 31,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "title", name: "title", required: true }, void 0, false, {
        fileName: "app/components/NewNote.jsx",
        lineNumber: 32,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/NewNote.jsx",
      lineNumber: 30,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "content", children: "Content" }, void 0, false, {
        fileName: "app/components/NewNote.jsx",
        lineNumber: 35,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "content", id: "title", name: "content", rows: "5", required: true }, void 0, false, {
        fileName: "app/components/NewNote.jsx",
        lineNumber: 36,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/NewNote.jsx",
      lineNumber: 34,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-actions", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { disabled: isSubmiting, children: isSubmiting ? "Adding.." : "Add note" }, void 0, false, {
      fileName: "app/components/NewNote.jsx",
      lineNumber: 40,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/NewNote.jsx",
      lineNumber: 39,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/NewNote.jsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_s(NewNote, "VraVGAL90gV7Flw0Yv7Vhlrbn+U=", false, function() {
  return [useActionData, useTransition];
});
_c = NewNote;
var NewNote_default2 = NewNote;
function links() {
  return [{
    rel: "stylesheet",
    href: NewNote_default
  }];
}
var _c;
$RefreshReg$(_c, "NewNote");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/NoteList.css
var NoteList_default = "/build/_assets/NoteList-KS7CKPGL.css";

// app/components/NoteList.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\NoteList.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\NoteList.jsx"
  );
}
function NoteList({
  notes
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { id: "note-list", children: notes.map((note, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "note", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/" + note.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("article", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "note-meta", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: [
          "#",
          index + 1
        ] }, void 0, true, {
          fileName: "app/components/NoteList.jsx",
          lineNumber: 32,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("time", { dateTime: note.id, children: new Date(note.id).toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit"
        }) }, void 0, false, {
          fileName: "app/components/NoteList.jsx",
          lineNumber: 34,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/components/NoteList.jsx",
          lineNumber: 33,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/NoteList.jsx",
        lineNumber: 31,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { children: note.title }, void 0, false, {
        fileName: "app/components/NoteList.jsx",
        lineNumber: 45,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/NoteList.jsx",
      lineNumber: 30,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: note.content }, void 0, false, {
      fileName: "app/components/NoteList.jsx",
      lineNumber: 47,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/NoteList.jsx",
    lineNumber: 29,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/components/NoteList.jsx",
    lineNumber: 27,
    columnNumber: 17
  }, this) }, note.id, false, {
    fileName: "app/components/NoteList.jsx",
    lineNumber: 26,
    columnNumber: 41
  }, this)) }, void 0, false, {
    fileName: "app/components/NoteList.jsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c2 = NoteList;
var NoteList_default2 = NoteList;
function links2() {
  return [{
    rel: "stylesheet",
    href: NoteList_default
  }];
}
var _c2;
$RefreshReg$(_c2, "NoteList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/notes.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\notes.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
var _s22 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\notes.jsx"
  );
  import.meta.hot.lastModified = "1694737574326.4343";
}
function NotesPage() {
  _s2();
  const notes = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NewNote_default2, {}, void 0, false, {
      fileName: "app/routes/notes.jsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NoteList_default2, { notes }, void 0, false, {
      fileName: "app/routes/notes.jsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/notes.jsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_s2(NotesPage, "lCYwax5cFMe1PUxNanskqlEV3FQ=", false, function() {
  return [useLoaderData];
});
_c3 = NotesPage;
function links3() {
  return [...links(), ...links2()];
}
function meta() {
  return [{
    title: "Alls notes",
    description: "todas las notas eduardo"
  }];
}
function CatchBoundary() {
  var _a;
  _s22();
  const caughtResponse = useCatch();
  const message = ((_a = caughtResponse.data) == null ? void 0 : _a.message) || "Data not found.";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NewNote_default2, {}, void 0, false, {
      fileName: "app/routes/notes.jsx",
      lineNumber: 90,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "info-message", children: message }, void 0, false, {
      fileName: "app/routes/notes.jsx",
      lineNumber: 91,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/notes.jsx",
    lineNumber: 89,
    columnNumber: 10
  }, this);
}
_s22(CatchBoundary, "aC0yisvsYUE46qxyVmeMcDtCdmM=", false, function() {
  return [useCatch];
});
_c22 = CatchBoundary;
function ErrorBoundary({
  error
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: "error", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "An error related to your notes occurred!" }, void 0, false, {
      fileName: "app/routes/notes.jsx",
      lineNumber: 102,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: error.message }, void 0, false, {
      fileName: "app/routes/notes.jsx",
      lineNumber: 103,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
      "Back to ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/", children: "safety" }, void 0, false, {
        fileName: "app/routes/notes.jsx",
        lineNumber: 105,
        columnNumber: 17
      }, this),
      "!"
    ] }, void 0, true, {
      fileName: "app/routes/notes.jsx",
      lineNumber: 104,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/notes.jsx",
    lineNumber: 101,
    columnNumber: 10
  }, this);
}
_c32 = ErrorBoundary;
var _c3;
var _c22;
var _c32;
$RefreshReg$(_c3, "NotesPage");
$RefreshReg$(_c22, "CatchBoundary");
$RefreshReg$(_c32, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  CatchBoundary,
  ErrorBoundary,
  NotesPage as default,
  links3 as links,
  meta
};
//# sourceMappingURL=/build/routes/notes-KMU2CVPV.js.map
