Template.appBody.events({
  "click .blur": function() {
    hide();
  },
  "click .menu a": function() {
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
  menu.classList.toggle("hidden");
  blur.classList.toggle("hidden");
}