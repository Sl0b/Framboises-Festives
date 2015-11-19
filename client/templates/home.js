Meteor.subscribe("framboisiers");

Template.home.helpers({
  framboisiers: function() {
    return Framboisiers.find({}, {sort: {date: 1}});
  }
})

Template.home.events({
  "click .card": function (event) {
    
    Router.go('/' + this._id);
  }
})
