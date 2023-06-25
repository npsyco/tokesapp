document.addEventListener('DOMContentLoaded', function() {
    var playButton = document.querySelector('.play-button');
    var audioPlayer = document.getElementById('audio-player');
    var isPlaying = false;
  
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
      audioPlayer.play();
      console.log('Playback started');
    }
  
    function stopPlayback() {
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
      console.log('Playback stopped');
    }
  });
  