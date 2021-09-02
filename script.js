//select page elements
var pixarIntro = $("#pixar")[0];
var marvelIntro = $("#marvel")[0];
var disneyIntro = $("#disneyIntro")[0];

//play pixar intro song on hover
$(".pixar").mouseenter(function(){
  pixarIntro.play();
})
$(".pixar").mouseout(function(){
  pixarIntro.pause()
})

//play marvel intro song on hover
$(".marvel").mouseenter(function(){
  marvelIntro.play();
})
$(".marvel").mouseout(function(){
  marvelIntro.pause()
})

//play dinsey intro song on hover
$(".disney").mouseenter(function(){
  disneyIntro.play();
})
$(".disney").mouseout(function(){
  disneyIntro.pause();
})