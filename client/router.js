Router.configure({
  layoutTemplate: 'appBody',
  notFoundTemplate: 'notFound'
});

Router.route('/', function () {
  this.render('Home', {
    data: function () {
      
    }
  });
});

Router.route('plantage', {
  path: '/jardin/plantage'
});

Router.route('notifications');

Router.route('jardin');

Router.route('framboisiers');

Router.route('compte');