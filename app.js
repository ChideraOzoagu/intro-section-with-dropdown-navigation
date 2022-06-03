const sidebarToggle = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

// sidebar toggle
sidebarToggle.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

// close sidebar
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

// nested links
const nestedLinks = document.querySelector(".nested-links");
const nested = document.querySelectorAll(".nested");

nested.forEach(function (items) {
  items.addEventListener("click", function (e) {
    const btn = e.currentTarget.lastChild.previousSibling;
    console.log(btn);
    if (btn.classList.contains("features")) {
      btn.classList.toggle("show-features");
    } else {
      btn.classList.toggle("show-company");
    }
  });
});
