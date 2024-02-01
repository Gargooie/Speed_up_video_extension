function speedUp() {
    javascript:document.getElementsByClassName("video-stream html5-main-video")[0].playbackRate = 1.5;
  }
  
  chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: speedUp
    });
  });
  