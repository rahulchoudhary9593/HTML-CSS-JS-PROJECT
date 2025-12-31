// Author : Rahul Choudhary

function formatViews(views) {
    if (views >= 1000000) {
        return (views / 1000000).toFixed(1).replace(".0", "") + "M";
    } 
    else if (views >= 1000) {
        return (views / 1000).toFixed(1).replace(".0", "") + "K";
    } 
    else {
        return views.toString();
    }
}

function addVideo(thumbnail, title, channel, views, time, duration) {
    const videoList = document.getElementById("videoList");

    if (!videoList) {
        console.error("videoList div not found");
        return;
    }

    const videoCard = document.createElement("div");
    videoCard.className = "yt-card";

    videoCard.innerHTML = `
        <div class="thumb-box">
            <img src="${thumbnail}">
            <span class="time">${duration}</span>
        </div>

        <div class="video-text">
            <h3 class="title">${title}</h3>
            <p class="meta">
                <span class="channel">${channel}</span> •
                <span class="views">${formatViews(views)} views</span> •
                <span class="date">${time}</span>
            </p>
        </div>
    `;

    videoList.appendChild(videoCard);
}

addVideo(
    "https://i.ytimg.com/vi/HcOc7P5BMi4/hqdefault.jpg",
    "Sigma Web Development Course | Video #2",
    "CodeWithHarry",
    7288000,
    "1 year ago",
    "7:00"
);

addVideo(
    "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg",
    "JavaScript Tutorial in Hindi",
    "CodeWithHarry",
    1200,
    "8 months ago",
    "12:45"
);
