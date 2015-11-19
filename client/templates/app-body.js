Template.appBody.events({
  "click .blur": function() {
    var menu = document.querySelector(".menu");
    var blur = document.querySelector(".blur");
    menu.classList.toggle("hidden");
    blur.classList.toggle("hidden");
  }
})