const sidebarToggle = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector('.aside-overlay');

// sidebar toggle
sidebarToggle.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");

  if (sidebar.classList.contains('show-sidebar')) {
    overlay.classList.add('show-overlay');
  } 

});

// close sidebar with overlay
overlay.addEventListener('click', ()=>{
  if (overlay){
    sidebar.classList.remove('show-sidebar');
    overlay.classList.remove('show-overlay');
  }
})

// close sidebar
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
  if(closeBtn) {
    overlay.classList.remove('show-overlay');
  }

});

// nested links
const nestedLinks = document.querySelector(".nested-links");
const nested = document.querySelectorAll(".nested");
nested.forEach(function (items) {
  items.addEventListener("click", function () {
    const btn = items.lastChild.previousSibling;
    if (btn.classList.contains("features")) {
      btn.classList.toggle("show-features");
    } else {
      btn.classList.toggle("show-company");
    }
   
  });
  
});

