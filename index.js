document.addEventListener("DOMContentLoaded", function () {
  
  document.querySelectorAll(".menu-ellipse").forEach(function (ellipse) {
    ellipse.addEventListener("click", function () {
      document.querySelectorAll(".menu-ellipse").forEach(function (e) {
        e.classList.remove("active");
      });
      ellipse.classList.add("active");
    });
  });

  
  const headerDots = document.querySelectorAll(".dots-container .ellipse");
  headerDots.forEach((dot) => {
    dot.addEventListener("click", () => {
      headerDots.forEach((d) => d.classList.remove("active"));
      dot.classList.add("active");
    });
  });

  
  const newsDots = document.querySelectorAll(".slider-dots .dot");
  newsDots.forEach((dot) => {
    dot.addEventListener("click", () => {
      newsDots.forEach((d) => d.classList.remove("active"));
      dot.classList.add("active");
    });
  });

  
  var map = L.map("map").setView([51.505, -0.09], 13);

 
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
  }).addTo(map);

  
  var contactForm = document.querySelector(".contact-form-container");


  contactForm.style.display = "none";

  var currentMarker = null;

  
  function addMarker(latlng) {
    if (currentMarker) {
      
      map.removeLayer(currentMarker);
      contactForm.style.opacity = "0";
      contactForm.style.visibility = "hidden";
      setTimeout(function () {
        contactForm.style.display = "none";
      }, 500); 
      currentMarker = null;
    } else {
      
      currentMarker = L.marker(latlng).addTo(map);

      currentMarker.on("click", function () {
        if (
          contactForm.style.display === "none" ||
          contactForm.style.opacity === "0"
        ) {
          contactForm.style.display = "block";
          contactForm.style.opacity = "1";
          contactForm.style.visibility = "visible";
        } else {
          contactForm.style.opacity = "0";
          contactForm.style.visibility = "hidden";
          setTimeout(function () {
            contactForm.style.display = "none";
          }, 500);
          map.removeLayer(currentMarker);
          currentMarker = null;
        }
      });

      contactForm.style.display = "block";
      contactForm.style.opacity = "1";
      contactForm.style.visibility = "visible";
    }
  }

  
  map.on("click", function (e) {
    var latlng = e.latlng;
    addMarker(latlng);
  });

 
  map.on("click", function (e) {
    if (currentMarker && !currentMarker.getLatLng().equals(e.latlng)) {
      map.removeLayer(currentMarker); 
      currentMarker = null;
      contactForm.style.opacity = "0";
      contactForm.style.visibility = "hidden";
      setTimeout(function () {
        contactForm.style.display = "none";
      }, 500); 
    }
  });
});
