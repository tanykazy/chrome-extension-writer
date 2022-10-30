const textarea = window.document.getElementById('editor');

console.log(CodeMirror.version);
const editor = CodeMirror.fromTextArea(textarea, {
  theme: 'solarized dark',
  keyMap: 'vim',
  lineWrapping: true,
  lineNumbers: true,
  spellcheck: true,
  autocorrect: true
});
editor.setSize('100%', '100%');
editor.refresh();
editor.focus();