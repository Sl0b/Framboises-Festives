Template.appBody.events({
  "click .blur": function() {
    hide();
  },
  "click .link": function() {
    hide();
  }
})

Template.appBody.helpers({
  
})

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});

function hide() {
  var menu = document.querySelector(".menu");
  var blur = document.querySelector(".blur");
  menu.classList.toggle("hide");
  blur.classList.toggle("hide");
    menu.classList.toggle("visible");
    blur.classList.toggle("visible");
  menu.style.webkitTransform = "";
}