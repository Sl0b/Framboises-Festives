Meteor.subscribe("framboisiers");

Template.jardin.helpers({
  framboisiers: function() {
    return Framboisiers.find({owner: Meteor.userId()});
  }
})
