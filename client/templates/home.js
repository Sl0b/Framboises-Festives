Meteor.subscribe("framboisiers");

Template.home.helpers({
  framboisiers: function() {
    return Framboisiers.find();
  }
})
