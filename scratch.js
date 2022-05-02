var audio = new Audio('./scratchh.wav');


 $("#card").wScratchPad({
    size: 100, // The size of the brush/scratch.
    bg:  './400.png', // Background (image path or hex color).
    realtime    : true, 
    fg: './overlay.png', // Foreground (image path or hex color).
    scratchMove: function (e, percent) {
      if ((percent > 50)) {
        $('#fireworksDiv').removeClass('d-none');
      }
      if(percent < 99){
        audio.play();
        setTimeout(() => {
          audio.pause();
        }, 1000)
      } else {
        audio.pause();
      }
      
    },
    'cursor': 'url("./coin1.png") 5 5, default',
    
  });