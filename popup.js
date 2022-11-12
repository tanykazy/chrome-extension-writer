const require = { paths: { vs: 'third-party/node_modules/monaco-editor/min/vs' } };

const editor = monaco.editor.create(document.getElementById('container'), {
  value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
  language: 'javascript',
  automaticLayout: true,
  padding: {
    top: 0,
    bottom: 0,
  },
  theme: 'vs-dark'
});

editor.focus();

// const containerDomNode = editor.getContainerDomNode();
// console.log(containerDomNode);

// const domNode = editor.getDomNode();
// console.log(domNode);

// const model = editor.getModel();
// console.log(model);

// CodeMirror.commands.save = function (editor) {
//   chrome.storage.local.set({
//     value: editor.doc.getValue(),
//   }, function () {
//     console.log('Saving');
//   });
// };

// const editor = CodeMirror(window.document.getElementById('editor'), {
//   matchBrackets: true,
//   showCursorWhenSelecting: true,
//   scrollbarStyle: 'null',
//   inputStyle: "contenteditable",
//   theme: 'solarized dark',
//   keyMap: 'vim',
//   lineWrapping: true,
//   lineNumbers: true,
//   spellcheck: true,
//   autocorrect: true,
// });
// editor.setSize('100%', '100%');
// editor.refresh();
// editor.focus();

// chrome.storage.local.get('value', function (items) {
//   editor.doc.setValue(items.value);
// });
