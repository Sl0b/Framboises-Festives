Framboises = new Mongo.Collection('framboises');

Meteor.methods({
  sendPay: function(framboisierId, owner, username, payValue) {
    var obj = {};
    obj[username] = payValue;
    Framboisiers.update(framboisierId, {$push: {holdingPayments: obj } })
  }
});