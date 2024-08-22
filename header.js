



(function () {
  function controls() {
    $(this).addClass("selected").siblings("button").removeClass("selected");
    $(".dots-container").animate(
      {
        top: -$(".container").height() * $(this).index(),
      },
      450
    );
  }

 
  const runCode = () => {
    const button = document.querySelectorAll(".button");
    if (button) {
      for (var i = 0; i < button.length; i++) {
        button[i].addEventListener("click", controls, false);
      }
    }
  }
  runCode();
})();
