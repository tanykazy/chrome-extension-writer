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

chrome.storage.onChanged.addListener(function (changes, namespace) {
  for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
    console.log(
      `Storage key "${key}" in namespace "${namespace}" changed.`,
      `Old value was "${oldValue}", new value is "${newValue}".`
    );
  }
});