document.addEventListener('DOMContentLoaded', function() {
    var playButton = document.querySelector('.play-button');
    var audioPlayer = null;
    var isPlaying = false;
    var audioUrl = 'https://142.93.230.38:8000/radio.mp3'; // Replace with your Azurecast stream URL
  
    playButton.addEventListener('click', function() {
      if (isPlaying) {
        stopPlayback();
        playButton.textContent = '▶'; // ASCII play symbol
      } else {
        startPlayback();
        playButton.textContent = '■'; // ASCII stop symbol
      }
  
      isPlaying = !isPlaying;
    });
  
    function startPlayback() {
      audioPlayer = new Howl({
        src: [audioUrl],
        html5: true
      });
  
      audioPlayer.play();
      console.log('Playback started');
    }
  
    function stopPlayback() {
      if (audioPlayer) {
        audioPlayer.stop();
        audioPlayer.unload();
        audioPlayer = null;
      }
  
      console.log('Playback stopped');
    }
  });
  