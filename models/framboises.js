Framboises = new Mongo.Collection('framboises');

Meteor.methods({
  sendPay: function(framboisierId, owner, username, payValue) {
    var obj = {};
    obj[username] = payValue;
    Framboisiers.update(framboisierId, {$push: {holdingPayments: obj } })
  },
  validatePayment: function(framboisierId, obj) {
    Framboisiers.update(framboisierId, {$pull: {holdingPayments: obj } })
    Framboisiers.update(framboisierId, {$push: {closedPayments: obj } })
  }
});