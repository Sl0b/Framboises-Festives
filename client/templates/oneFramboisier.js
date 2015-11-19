Meteor.subscribe("framboisiers");

Template.oneFramboisier.helpers({
  framboisiers: function() {
    return Framboisiers.findOne({_id: Router.current().params.id});
  }
})