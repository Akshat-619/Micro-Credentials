document.getElementById("sign-in").addEventListener("click", () => {
  document.getElementById("auth-buttons").classList.add("d-none");
  document.getElementById("user-icons").classList.remove("d-none");
});






  const navLinks = document.querySelectorAll(".nav-link-custom");

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      // remove active from all
      navLinks.forEach(l => l.classList.remove("active"));

      // add active to clicked link
      this.classList.add("active");
    });
  });

const megaParent = document.querySelector(".mega-menu-parent");
const megaToggle = document.querySelector(".mega-toggle");

// open / close on click
megaToggle.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation(); // VERY IMPORTANT
  megaParent.classList.toggle("active");
});

// prevent closing when clicking inside menu
megaParent.querySelector(".mega-menu").addEventListener("click", function (e) {
  e.stopPropagation();
});

// close when clicking outside
document.addEventListener("click", function () {
  megaParent.classList.remove("active");
});
