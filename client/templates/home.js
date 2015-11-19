Meteor.subscribe("framboisiers");

Template.home.helpers({
  isOpen: function() {
  },
  framboisiers: function() {
    return Framboisiers.find();
  }
})
