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
      participants: [Meteor.user().username]
    });
  },
  addParticipant: function(framboisierId, username) {
    var framboisier = Framboisiers.findOne(framboisierId);
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
