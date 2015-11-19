Meteor.publish("framboisiers", function () {
  return Framboisiers.find();
});