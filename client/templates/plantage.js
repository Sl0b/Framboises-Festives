Meteor.subscribe("framboisiers");

Template.plantage.events({
  "submit .form-plantage": function (event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    var data = {};
    $(".form-plantage").serializeArray().map(function(x){data[x.name] = x.value;});
    if(data.maxParticipants === "") { data.maxParticipants = 0; }
    console.log(data);
    
    Meteor.call('addFramboisier', data);
  }
})