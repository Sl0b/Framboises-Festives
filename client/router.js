Router.configure({
  layoutTemplate: 'appBody',
  notFoundTemplate: 'notFound'
});

Router.route('/', function () {
  this.render('Home', {
    data: function () {
      console.log("coucou")
    }
  });
});

Router.route('plantage', {
  path: '/jardin/plantage'
});