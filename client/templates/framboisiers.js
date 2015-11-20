Meteor.subscribe("framboisiers");

Template.framboisiers.helpers({
  framboisiers: function() {
    return Framboisiers.find({
      participants: Meteor.user().username
    });
  }
});

Template.framboisiers.events({
  "click .card": function (event) {
    
    Router.go('/' + this._id);
  }
})