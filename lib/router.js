Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return [Meteor.subscribe('motorTemperatures')];
  }
});


Router.route('/',{
  name: 'dashboard',
  waitOn: function(){
    return Meteor.subscribe('motorTemperatures');
  },
  data: function() { return MotorTemperatures.find();}
});
