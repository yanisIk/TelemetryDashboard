Meteor.publish('motorTemperatures', function(){
  return MotorTemperatures.find({}, {sort: {timestamp: -1},  timestamp: { $gt: Date.now() } });
});
