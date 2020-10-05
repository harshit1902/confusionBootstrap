$(document).ready(function () {
  //for login modal
  $("#loginButton").click(function () {
    $("#loginModal").modal("show");
  });
  $("#reserveButton").click(function () {
    $("#reservationModal").modal("show");
  });
  $("#loginClose").click(function () {
    $("#loginModal").modal("hide");
  });

  //for carousel play and pause button
  $("#myCarousel").carousel({ interval: 2000 });
  $("#carouselButton").click(function () {
    if ($("#carouselButton").children("span").hasClass("fa-pause")) {
      $("#myCarousel").carousel("pause");
      $("#carouselButton").children("span").removeClass("fa-pause");
      $("#carouselButton").children("span").addClass("fa-play");
      return;
    }
    $("#myCarousel").carousel("cycle");
    $("#carouselButton").children("span").removeClass("fa-play");
    $("#carouselButton").children("span").addClass("fa-pause");
    return;
  });
});
