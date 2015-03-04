Meteor.publish('motorTemperatures', function(){
  return MotorTemperatures.find();
});
