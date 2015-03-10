Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});


Router.route('/',{
  name: 'dashboard',
  waitOn: function(){
    return Meteor.subscribe('motorTemperatures');
  },
  data: function() { return MotorTemperatures.find();}
});
