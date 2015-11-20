Meteor.subscribe("framboisiers");

Template.oneFramboisier.helpers({
  framboisiers: function() {
    return Framboisiers.findOne({_id: Router.current().params.id});
  },
  isParticipant: function() {
    var actualFramboisier = Framboisiers.findOne({_id: Router.current().params.id});
    return actualFramboisier.participants.indexOf(Meteor.user().username) == -1 ? false : true;
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
  "click .inscription": function(event) {
    Meteor.call('addParticipant', Router.current().params.id, Meteor.user().username);
  },
  "click .desinscription": function(event) {
    Meteor.call('removeParticipant', Router.current().params.id, Meteor.user().username);
  },
  "submit .payer": function(event) {
    var framboisier = Framboisiers.findOne({_id: Router.current().params.id});
    event.preventDefault();
    Meteor.call('sendPay', framboisier._id, framboisier.owner, Meteor.user().username, event.target.pay.value);
    event.target.pay.value = "";
  }
})