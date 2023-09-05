
function Song(title, artist) {
    this.title = title;
    this.artist = artist;
  }
  
 
  Song.prototype.play = function () {
    console.log(`Playing: ${this.title} by ${this.artist}`);
  };
  
  
  const song1 = new Song("Money", "Lisa");
  const song2 = new Song("ชีวิตยังคงสวยงาม", "body slam");
  
 
  song1.play(); 
  song2.play(); 
  