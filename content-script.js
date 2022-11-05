function onClicked(event) {
    CodeMirror.commands.save = function (editor) {
        editor.save();
    };

    CodeMirror.Vim.defineEx('quit', 'q', function (editor, params) {
        editor.toTextArea();
    });

    const editor = CodeMirror.fromTextArea(event.target, {
        matchBrackets: true,
        showCursorWhenSelecting: true,
        inputStyle: "contenteditable",
        keyMap: 'vim',
        lineWrapping: true,
        lineNumbers: true,
        spellcheck: true,
        autocorrect: true,
    });

    editor.setSize('100%', '100%');
    editor.refresh();
    editor.focus();
}

const textarea = window.document.getElementsByTagName('textarea');
for (const element of textarea) {
    element.addEventListener('click', onClicked);
}
