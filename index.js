document.querySelectorAll(".menu-ellipse").forEach(function (ellipse) {
  ellipse.addEventListener("click", function () {
    document.querySelectorAll(".menu-ellipse").forEach(function (e) {
      e.classList.remove("active");
    });
    ellipse.classList.add("active"); 
  });
});

document.querySelectorAll(".ellipse").forEach(function (ellipse, index) {
  ellipse.addEventListener("click", function () {
    document.querySelectorAll(".ellipse").forEach(function (e) {
      e.classList.remove("active");
    });
    ellipse.classList.add("active");


  });
});
