Meteor.subscribe("framboisiers");

Template.oneFramboisier.helpers({
  framboisiers: function() {
    return Framboisiers.findOne({_id: Router.current().params.id});
  },
  isOwner: function() {
    var actualFramboisier = Framboisiers.findOne({_id: Router.current().params.id});
    return actualFramboisier.participants.indexOf(Meteor.user().username) == -1 ? false : true;
  }
})

Template.oneFramboisier.events({
  "click .inscription": function(event) {
    Meteor.call('addParticipant', Router.current().params.id, Meteor.user().username);
  },
  "click .desinscription": function(event) {
    Meteor.call('removeParticipant', Router.current().params.id, Meteor.user().username);
  },
  "submit .payer": function(event) {
    event.preventDefault();
    console.log(framboisiers.owner);
    Meteor.call('sendNotif', framboisiers.owner, event.target.pay.value);
  }
})