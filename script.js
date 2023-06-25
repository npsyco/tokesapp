document.addEventListener('DOMContentLoaded', function() {
    var playButton = document.querySelector('.play-button');
    var isPlaying = false;
    var broadcastId = 'YOUR_BROADCAST_ID'; // Replace with your Azurecast broadcast ID
  
    playButton.addEventListener('click', function() {
      if (isPlaying) {
        stopBroadcast();
        playButton.textContent = '▶'; // ASCII play symbol
      } else {
        listenBroadcast();
        playButton.textContent = '■'; // ASCII stop symbol
      }
  
      isPlaying = !isPlaying;
    });
  
    function listenBroadcast() {
      // Listen to Azurecast broadcast
      fetch('https://api.azurecast.com/v1/broadcasts/' + broadcastId + '/listen', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + YOUR_API_KEY, // Replace with your Azurecast API key
        }
      })
      .then(response => {
        if (response.ok) {
          console.log('Listening to broadcast');
        } else {
          console.error('Failed to listen to broadcast');
        }
      })
      .catch(error => {
        console.error('Error listening to broadcast:', error);
      });
    }
  
    function stopBroadcast() {
      // Stop Azurecast broadcast
      fetch('https://api.azurecast.com/v1/broadcasts/' + broadcastId + '/stop', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + YOUR_API_KEY, // Replace with your Azurecast API key
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          console.log('Broadcast stopped');
        } else {
          console.error('Failed to stop broadcast');
        }
      })
      .catch(error => {
        console.error('Error stopping broadcast:', error);
      });
    }
  });
  