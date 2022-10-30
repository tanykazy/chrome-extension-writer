// chrome.action.onClicked.addListener((tab) => {
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     files: ['content-script.js']
//   });
// });

chrome.runtime.onConnect.addListener(function (port) {
  console.log('background listener!!');

  console.assert(port.name === "knockknock");

  port.onMessage.addListener(function (msg) {
    console.log('background message listener!!');
    console.log(msg);

    // chrome.action.openPopup();
  });
});
