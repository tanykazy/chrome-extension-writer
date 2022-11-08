var require = { paths: { vs: 'third-party/node_modules/monaco-editor/min/vs' } };

var editor = monaco.editor.create(document.getElementById('container'), {
  value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
  language: 'javascript'
});
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
