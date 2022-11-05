chrome.storage.onChanged.addListener(function (changes, namespace) {
  for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
    console.log(
      `Storage key "${key}" in namespace "${namespace}" changed.`,
      `Old value was "${oldValue}", new value is "${newValue}".`);
  }
});

chrome.runtime.onInstalled.addListener(function (details) {
  chrome.contextMenus.create({
    title: 'Hello World!',
    id: '1234',
    contexts: ['editable'],
    type: 'normal',
    visible: true,
  }, function () {
    if (chrome.extension.lastError) {
      console.log("Got expected error: " + chrome.extension.lastError.message);
    }
  });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  console.log(info);
  console.log(tab);
});
