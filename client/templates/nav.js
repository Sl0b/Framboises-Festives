Template.nav.events({
  "click .glyphicon-tasks": function() {
    var menu = document.querySelector(".menu");
    var blur = document.querySelector(".blur");
    menu.classList.toggle("hide");
    blur.classList.toggle("hide");
    menu.classList.toggle("visible");
    blur.classList.toggle("visible");
    menu.style.webkitTransform = "";
  }
})