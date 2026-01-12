document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     ICON ACTIVE TOGGLE (GENERIC)
  =============================== */
  document.querySelectorAll(".icon-item").forEach(icon => {
    icon.addEventListener("click", e => {
      e.stopPropagation();
      document.querySelectorAll(".icon-item").forEach(i => i.classList.remove("active"));
      icon.classList.add("active");
    });
  });

  document.addEventListener("click", () => {
    document.querySelectorAll(".icon-item").forEach(i => i.classList.remove("active"));
  });


  /* ===============================
     NAV ACTIVE LINK (URL BASED)
  =============================== */
  const currentPath = window.location.pathname;
  document.querySelectorAll(".nav-link-custom").forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });


  /* ===============================
     MEGA MENU (CLICK + OUTSIDE)
  =============================== */
  const megaParent = document.querySelector(".mega-menu-parent");
  const megaToggle = document.querySelector(".mega-toggle");

  if (megaParent && megaToggle) {
    megaToggle.addEventListener("click", e => {
      e.preventDefault();
      e.stopPropagation();
      megaParent.classList.toggle("active");
    });

    megaParent.querySelector(".mega-menu")?.addEventListener("click", e => {
      e.stopPropagation();
    });

    document.addEventListener("click", () => {
      megaParent.classList.remove("active");
    });
  }


  /* ===============================
     HEADER SCROLL EFFECT
  =============================== */
  const header = document.querySelector(".Main-Header");
  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > 2);
    });
  }


  /* ===============================
     VIDEO MODAL
  =============================== */
  const openBtn = document.getElementById("howItWorks");
  const modal = document.getElementById("videoModal");
  const closeBtn = document.querySelector(".modal-close-icon");

  if (openBtn && modal && closeBtn) {
    openBtn.onclick = () => modal.style.display = "flex";
    closeBtn.onclick = () => modal.style.display = "none";
  }


  /* ===============================
     BOOTSTRAP DROPDOWNS (ICON BASED)
  =============================== */
  const dropdownTriggers = document.querySelectorAll(
    ".Usernotification-icon, .Userwishlist-icon, .Userprofile-icon"
  );

  dropdownTriggers.forEach(trigger => {
    trigger.addEventListener("click", e => {
      e.stopPropagation();

      const current = bootstrap.Dropdown.getOrCreateInstance(trigger);

      document.querySelectorAll('[data-bs-toggle="dropdown"]').forEach(el => {
        if (el !== trigger) {
          bootstrap.Dropdown.getInstance(el)?.hide();
        }
      });

      current.toggle();
    });
  });

  document.addEventListener("click", () => {
    document.querySelectorAll('[data-bs-toggle="dropdown"]').forEach(el => {
      bootstrap.Dropdown.getInstance(el)?.hide();
    });
  });


  /* ===============================
     HEART TOGGLE
  =============================== */
  document.querySelectorAll(".Heart").forEach(heart => {
    const icon = heart.querySelector("i");
    heart.addEventListener("click", () => {
      icon.classList.toggle("bi-heart");
      icon.classList.toggle("bi-heart-fill");
    });
  });


  /* ===============================
     TABS WITH CURVE INDICATOR
  =============================== */
  const tabs = document.querySelectorAll("#nav-tab .nav-link");
  const panes = document.querySelectorAll(".tab-pane");
  const curve = document.querySelector(".mini-curve-line-tabs");

  if (curve) {
    const activeTab = document.querySelector("#nav-tab .nav-link.active");
    activeTab?.appendChild(curve);

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        tab.appendChild(curve);

        panes.forEach(p => p.classList.remove("active"));
        document.querySelector(tab.dataset.target)?.classList.add("active");
      });
    });
  }


  /* ===============================
     LANGUAGE DROPDOWN
  =============================== */
  const langDropdown = document.querySelector(".lang-dropdown");
  const langToggle = document.querySelector(".lang-toggle");
  const langMenu = document.querySelector(".lang-menu");

  if (langDropdown && langToggle && langMenu) {

    langToggle.addEventListener("click", e => {
      e.preventDefault();
      e.stopPropagation();
      langMenu.classList.toggle("open");
      langToggle.classList.toggle("active");
    });

    langMenu.querySelectorAll("a").forEach(item => {
      item.addEventListener("click", e => {
        e.preventDefault();
        langToggle.textContent = item.dataset.lang;
        langMenu.classList.remove("open");
        langToggle.classList.remove("active");
      });
    });

    document.addEventListener("click", e => {
      if (!e.target.closest(".lang-dropdown")) {
        langMenu.classList.remove("open");
        langToggle.classList.remove("active");
      }
    });

    langDropdown.addEventListener("mouseleave", () => {
      langMenu.classList.remove("open");
      langToggle.classList.remove("active");
    });
  }


  /* ===============================
     NAV ICON ACTIVE STATE
  =============================== */
  const navIcons = document.querySelectorAll(".nav-icon");
  navIcons.forEach(icon => {
    icon.addEventListener("click", () => {
      navIcons.forEach(i => i.classList.remove("active"));
      icon.classList.add("active");
    });
  });

});

document.addEventListener("DOMContentLoaded", () => {

  const nav = document.querySelector(".Navbar ul");
  const iconBar = document.querySelector(".icon-bar");

  const loginItem = document.getElementById("login-item");
  const signupItem = document.getElementById("signup-item");
  const credentialsLink = document.getElementById("credentials-link");

  // helper: find <li> by link text
  const getNavItemByText = (text) => {
    return [...nav.querySelectorAll("li")]
      .find(li => li.textContent.trim().startsWith(text));
  };

  const homeItem = getNavItemByText("Home");
  const aboutItem = getNavItemByText("About");
  const categoriesItem = nav.querySelector(".mega-menu-parent");
  const corporatesItem = getNavItemByText("For Corporates");

  const loginBtn = loginItem.querySelector("a");
  const signupBtn = signupItem.querySelector("a");

  /* ===============================
     DEFAULT STATE (LOGGED OUT)
  =============================== */
 function setLoggedInUI() {
  homeItem.style.display = "none";
  aboutItem.style.display = "none";
  categoriesItem.style.display = "none";
  corporatesItem.style.display = "none";

  loginItem.style.display = "none";
  signupItem.style.display = "none";

  iconBar.style.display = "flex"; // ✅ visible + flex layout

  credentialsLink.textContent = "My Credentials";
}


  /* ===============================
     POST LOGIN STATE
  =============================== */
function setLoggedOutUI() {
  homeItem.style.display = "block";
  aboutItem.style.display = "block";
  categoriesItem.style.display = "block";
  corporatesItem.style.display = "block";

  loginItem.style.display = "block";
  signupItem.style.display = "block";

  iconBar.style.display = "none"; 

  credentialsLink.textContent = "Credentials";
}


/*Logout*/

const logoutLink = document.getElementById("logout-link");

if (logoutLink) {
  logoutLink.addEventListener("click", (e) => {
    e.preventDefault();
    setLoggedOutUI();
  });
}


  /* ===============================
     CLICK HANDLERS
  =============================== */
  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    setLoggedInUI();
  });

  signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    setLoggedInUI();
  });

  /* ensure correct initial state */
  setLoggedOutUI();

});




function sharePage() {
  if (navigator.share) {
    navigator.share({
      title: "Master in UI/UX Design",
      text: "Check out this course!",
      url: window.location.href
    }).catch(err => console.log(err));
  } else {
    navigator.clipboard.writeText(window.location.href)
      .then(() => alert("Link copied to clipboard"))
      .catch(() => alert("Copy failed"));
  }
}



const btn = document.getElementById("atcBtn");

btn.addEventListener("click", () => {
  btn.classList.add("added");

  const icon = btn.querySelector("i");
  icon.classList.remove("bi-cart");
  icon.classList.add("bi-cart-check");

  btn.disabled = true;
});
