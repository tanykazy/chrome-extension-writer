CodeMirror.commands.save = function (editor) {
  chrome.storage.local.set({
    value: editor.doc.getValue(),
  }, function () {
    console.log('Saving');
  });
};

const editor = CodeMirror(window.document.getElementById('editor'), {
  matchBrackets: true,
  showCursorWhenSelecting: true,
  scrollbarStyle: 'null',
  inputStyle: "contenteditable",
  theme: 'solarized dark',
  keyMap: 'vim',
  lineWrapping: true,
  lineNumbers: true,
  spellcheck: true,
  autocorrect: true,
});
editor.setSize('100%', '100%');
editor.refresh();
editor.focus();

chrome.storage.local.get('value', function (items) {
  editor.doc.setValue(items.value);
});
