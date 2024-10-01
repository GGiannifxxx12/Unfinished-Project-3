chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'changeThumbnail') {
        const thumbnailUrl = request.url;
        const thumbnailElement = document.querySelector('ytd-thumbnail img');
        
        if (thumbnailElement) {
            thumbnailElement.src = thumbnailUrl;
        }
    }
});
