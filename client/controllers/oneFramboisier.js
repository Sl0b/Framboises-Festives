Meteor.subscribe("framboisiers");

Template.oneFramboisier.helpers({
  framboisiers: function() {
    return Framboisiers.findOne({_id: Router.current().params.id});
  },
  isParticipant: function() {
    var actualFramboisier = Framboisiers.findOne({_id: Router.current().params.id});
    return actualFramboisier.participants.indexOf(Meteor.user().username) == -1 ? false : true;
  },
  isOwner: function() {
    var actualFramboisier = Framboisiers.findOne({_id: Router.current().params.id});
    return actualFramboisier.owner == Meteor.userId() ? true : false;
  },
  hasPayed: function(user) {
    var actualFramboisier = Framboisiers.findOne({_id: Router.current().params.id});
    for (var i = 0; i < actualFramboisier.holdingPayments.length; i++) {
      for (key in actualFramboisier.holdingPayments[i]) {
        if (key == user) {
          return true;
        }
      }
    }
  }
})

Template.oneFramboisier.events({
  "click .inscription": function() {
    Meteor.call('addParticipant', Router.current().params.id, Meteor.user().username);
  },
  "click .desinscription": function() {
    Meteor.call('removeParticipant', Router.current().params.id, Meteor.user().username);
  },
  "submit .payer": function(event) {
    var framboisier = Framboisiers.findOne({_id: Router.current().params.id});
    event.preventDefault();
    Meteor.call('sendPay', framboisier._id, framboisier.owner, Meteor.user().username, event.target.pay.value);
    event.target.pay.value = "";
  },
  "click .taboulet .nav li": function(event) {
    var li = document.querySelectorAll("li");
    var participants = document.querySelector(".participants");
    var annoncements = document.querySelector(".annoncements");
    for (var i = 0; i < li.length; i++)
      li[i].classList.remove("active");
    event.currentTarget.classList.toggle("active");
    if (event.currentTarget.textContent == "Participants") {
      participants.classList.remove("hidden");
      annoncements.classList.add("hidden");
    } else {
      participants.classList.add("hidden");
      annoncements.classList.remove("hidden");
    }
    },
    "submit .sendAnnoncement": function(event) {
      var framboisier = Framboisiers.findOne({_id: Router.current().params.id});
      event.preventDefault();
      Meteor.call('addAnnouncement', framboisier._id, event.target.title.value, event.target.text.value);
      event.target.title.value = "";
      event.target.text.value = "";
  }
})