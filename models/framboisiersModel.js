Framboisiers = new Mongo.Collection('framboisiers');

Meteor.methods({
  addFramboisier: function (data) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
 
    Framboisiers.insert({
      title: data.title,
      createdAt: new Date(),
      date: data.date,
      private: data.private,
      paying: data.paying,
      maxParticipants: data.maxParticipants,
      description: data.description
    });
  },
  deleteFramboisier: function (framboisierId) {
    Framboisiers.remove(framboisierId);
  }
});