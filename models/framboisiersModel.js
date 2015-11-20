Framboisiers = new Mongo.Collection('framboisiers');

Meteor.methods({
  addFramboisier: function (data) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
 
    Framboisiers.insert({
      owner: Meteor.userId(),
      title: data.title,
      createdAt: new Date(),
      date: data.date,
      private: data.private,
      paying: data.paying,
      maxParticipants: data.maxParticipants,
      description: data.description,
      participants: [Meteor.user().username],
      holdingPayments: [],
      closedPayments: []
    });
  },
  addParticipant: function(framboisierId, username) {
    var framboisier = Framboisiers.findOne(framboisierId);
    var today = new Date();
    var framboisierDate = new Date(framboisier.date);
    
    if (today.getFullYear() > framboisierDate.getFullYear() ||
        today.getMonth()+1 > framboisierDate.getMonth()+1 ||
        today.getDate() > framboisierDate.getDate()) {
      return alert('Ce Framboisier est deja terminé');
    }
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId() || framboisier.participants.indexOf(Meteor.user().username) >= 0) {
      throw new Meteor.Error("not-authorized");
    }
    if (framboisier.maxParticipants > 0) {
      if (framboisier.participants.length >= framboisier.maxParticipants) {
        return alert('Le nombre de participants maximum a deja ete atteint');
      }
    }
    
    Framboisiers.update(framboisierId, {$push: {participants: username} })
  },
  removeParticipant: function(framboisierId, username) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    
    Framboisiers.update(framboisierId, {$pull: {participants: username} })
  },
  deleteFramboisier: function (framboisierId) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    
    Framboisiers.remove(framboisierId);
  }
});
