var progBar = 0;


$('.btn_1').on('click', function() {
   progBar = progBar + 1
  console.log('progBar', progBar);
  $('.progress-bar').attr("style", "width: " + progBar + "%");
});

$('.btn_3').on('click', function() {
   progBar = progBar + 3
   $('.progress-bar')
  console.log('progBar', progBar);
  $('.progress-bar').attr("style", "width: " + progBar + "%");
});

$('.btn_7').on('click', function() {
   progBar = progBar + 7
  console.log('progBar', progBar);
  $('.progress-bar').attr("style", "width: " + progBar + "%");
});
