document.addEventListener("DOMContentLoaded", function () {
    var player = videojs("player", {
        controls: true,
        autoplay: false,
        preload: "auto"
    });

    // Check if playlist.m3u exists
    fetch("playlist.m3u")
        .then(response => {
            if (!response.ok) {
                throw new Error("Playlist not found");
            }
            return response.text();
        })
        .then(data => {
            console.log("Playlist loaded successfully!");
        })
        .catch(error => {
            console.error("Error loading playlist:", error);
        });
});
