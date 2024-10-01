document.getElementById('changeThumbnail').addEventListener('click', () => {
    const thumbnailUrl = document.getElementById('thumbnailUrl').value;
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'changeThumbnail', url: thumbnailUrl });
    });
});
