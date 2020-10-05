$(document).ready(function () {
  $("#myCarousel").carousel({ interval: 2000 });
  $("#carousel-pause").click(function () {
    $("#myCarousel").carousel("pause");
  });
  $("#carousel-play").click(function () {
    $("#myCarousel").carousel("cycle");
  });
});
