function onClicked(event) {
    const rect = event.target.getBoundingClientRect();

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

    editor.on('vim-command-done', function (editor, event) {
        const registerController = CodeMirror.Vim.getRegisterController();
        const register = registerController.getRegister(0);

        navigator.clipboard.writeText(register).then(() => {
            /* clipboard successfully set */
        }, () => {
            /* clipboard write failed */
        });
    });

    editor.setSize(rect.width, rect.height);
    editor.refresh();
    editor.focus();
}

const textarea = window.document.getElementsByTagName('textarea');
for (const element of textarea) {
    element.addEventListener('click', onClicked);
}
