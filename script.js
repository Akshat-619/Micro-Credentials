





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




  const header = document.querySelector(".Main-Header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });


  const openBtn = document.getElementById("howItWorks");
const modal = document.getElementById("videoModal");
const closeBtn = document.querySelector(".modal-close-icon");

openBtn.onclick = () => modal.style.display = "flex";
closeBtn.onclick = () => modal.style.display = "none";
