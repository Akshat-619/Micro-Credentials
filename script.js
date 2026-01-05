


  document.addEventListener("DOMContentLoaded", () => {

    const loginItem = document.getElementById("login-item");
    const signupItem = document.getElementById("signup-item");
    const userIcons = document.getElementById("user-icons");

    if (!loginItem || !signupItem || !userIcons) {
      console.error("Navbar elements not found");
      return;
    }

    function switchToUserUI(e) {
      e.preventDefault();

      // hide login & signup
      loginItem.classList.add("d-none");
      signupItem.classList.add("d-none");

      // show user icons
      userIcons.classList.remove("d-none");
    }

    loginItem.querySelector("a").addEventListener("click", switchToUserUI);
    signupItem.querySelector("a").addEventListener("click", switchToUserUI);
  });





  const links = document.querySelectorAll(".nav-link-custom");
  const currentPath = window.location.pathname;

  links.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
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
    if (window.scrollY > 2) {
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


document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(
    ".Usernotification-icon, .Userwishlist-icon, .Userprofile-icon"
  );

  toggles.forEach(toggle => {
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();

      const dropdown = toggle.closest(".dropdown");
      const menu = dropdown.querySelector(".dropdown-menu");

      // Close all other dropdowns
      document.querySelectorAll(".dropdown-menu.show").forEach(openMenu => {
        if (openMenu !== menu) {
          openMenu.classList.remove("show");
        }
      });

      // Toggle current one
      menu.classList.toggle("show");
    });
  });

  // Close when clicking outside
  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown-menu.show").forEach(menu => {
      menu.classList.remove("show");
    });
  });
});




document.addEventListener("DOMContentLoaded", function () {

  const triggers = document.querySelectorAll(
    ".Usernotification-icon, .Userwishlist-icon, .Userprofile-icon"
  );

  triggers.forEach(trigger => {
    trigger.addEventListener("click", function (e) {
      e.stopPropagation();

      const currentDropdown = bootstrap.Dropdown.getOrCreateInstance(trigger);

      // Close all other dropdowns
      document
        .querySelectorAll('[data-bs-toggle="dropdown"]')
        .forEach(el => {
          if (el !== trigger) {
            const instance = bootstrap.Dropdown.getInstance(el);
            if (instance) instance.hide();
          }
        });

      // Toggle current dropdown
      currentDropdown.toggle();
    });
  });

  // Click outside → close all
  document.addEventListener("click", function () {
    document
      .querySelectorAll('[data-bs-toggle="dropdown"]')
      .forEach(el => {
        const instance = bootstrap.Dropdown.getInstance(el);
        if (instance) instance.hide();
      });
  });

});


document.querySelectorAll(".Heart").forEach((heart) => {
  const icon = heart.querySelector("i");

  heart.addEventListener("click", () => {
    if (icon.classList.contains("bi-heart-fill")) {
      icon.classList.remove("bi-heart-fill");
      icon.classList.add("bi-heart");
    } else {
      icon.classList.remove("bi-heart");
      icon.classList.add("bi-heart-fill");
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll("#nav-tab .nav-link");
  const panes = document.querySelectorAll(".tab-pane");
  const curve = document.querySelector(".mini-curve-line-tabs");

  // place curve under initially active tab
  const activeTab = document.querySelector("#nav-tab .nav-link.active");
  if (activeTab) {
    activeTab.appendChild(curve);
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // switch active tab
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      // move curve
      tab.appendChild(curve);

      // switch content
      panes.forEach(p => p.classList.remove("active"));
      const target = tab.dataset.target;
      document.querySelector(target).classList.add("active");
    });
  });
});


