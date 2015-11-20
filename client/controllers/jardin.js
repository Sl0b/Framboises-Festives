Meteor.subscribe("framboisiers");

Template.jardin.helpers({
  framboisiers: function() {
    return Framboisiers.find({owner: Meteor.userId()});
  }
});

Template.jardin.events({
  "click .card": function (event) {
    
    Router.go('/' + this._id);
  }
});