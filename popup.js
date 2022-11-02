console.log(CodeMirror.version);

CodeMirror.commands.save = function (editor) {
  chrome.storage.local.set({
    value: editor.doc.getValue(),
  }, function () {
    console.log('Saving');
  });
};

const textarea = window.document.getElementById('editor');
const editor = CodeMirror.fromTextArea(textarea, {
  matchBrackets: true,
  showCursorWhenSelecting: true,
  inputStyle: "contenteditable",
  theme: 'solarized dark',
  keyMap: 'vim',
  lineWrapping: true,
  lineNumbers: true,
  spellcheck: true,
  autocorrect: true,
});
editor.on('change', function (instance, changeObj) {
  // console.log(instance);
  // console.log(changeObj);
});
editor.setSize('100%', '100%');
editor.refresh();
editor.focus();

chrome.storage.local.get('value', function (result) {
  editor.doc.setValue(result.value);
});
