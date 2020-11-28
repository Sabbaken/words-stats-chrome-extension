console.log("content")
chrome.runtime.onMessage.addListener(function (request, sender, callback) {
  console.log("GOT MESSAGE")
  if (request.type === 'getPage') {
    console.log("OK")
    callback(document.getElementsByTagName('body')[0].innerHTML);
  }
})
