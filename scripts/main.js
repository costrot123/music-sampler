
let musicDivs = document.querySelectorAll('.music');
let coverImages = document.querySelectorAll('.cover');

let players = document.querySelectorAll('audio');

//stops current music from playing whenever another album cover is clicked
function stopMusic() {
  players.forEach(function(el) {
    el.pause();
    el.currentTime = 0;
  });
}



// this function hides the music players
function hideAll() {
  musicDivs.forEach(function(el) {
    el.style.display = 'none';
  });
}

// hides all visible music players
hideAll();

coverImages.forEach(function(el) {
  el.onclick = (e) => {

    hideAll();
    stopMusic();

    switch (e.target.getAttribute('id')) {
      case 'co-wakingup':
        document.querySelector('#mu-wakingup')
        	.style.display = 'block';
        break;
      case 'co-human':
        document.querySelector('#mu-human')
        	.style.display = 'block';
        break;
      case 'co-ohmy':
        document.querySelector('#mu-ohmy')
        .style.display = 'block';
        break;
      case 'co-native':
        document.querySelector('#mu-native')
        .style.display = 'block';
        break;
    }

  }

});
