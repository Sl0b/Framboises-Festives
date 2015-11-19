Template.nav.events({
  "click .nav": function() {
    var menu = document.querySelector(".menu");
    menu.classList.toggle("hidden");
  }
})