class media {
    constructor(info) {
        this.publishDate = info.publishDate;
        this.name = info.name;
    }
}

class song extends media {
    constructor(songData) {
        super(songData);
        this.artist = songData.artist;
    }
}

const mySong = new song({
    artist: "Queen",
    name: "Bohemian Rhapsody",
    publishDate: "1975"
});   

console.log(mySong);