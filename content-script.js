// console.log('content-script.js run!!');

function onfocus(event) {
    console.log('focus!!');
    console.log(event);

    const port = chrome.runtime.connect({
        name: "knockknock"
    });
    port.postMessage({
        joke: "Knock knock"
    });
    port.onMessage.addListener(function (msg) {
        console.log('content-script message listener!!');
        console.log(msg);
    });
}

const input = window.document.getElementsByTagName('input');
// console.log(input);
const textinput = [];
for (const element of input) {
    const type = element.getAttribute('type');
    // console.log(type);

    if (type === 'text') {
        textinput.push(element);
    }
}
// console.log(textinput);

const textarea = window.document.getElementsByTagName('textarea');
// console.log(textarea);

for (const element of textinput) {
    element.addEventListener('focus', onfocus);
}

for (const element of textarea) {
    element.addEventListener('focus', onfocus);
}
