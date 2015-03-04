MotorTemperatures = new Mongo.Collection('MotorTemperatures');
// fields : value, timestamp

MotorTemperatures.allow({
  insert: function(userid, temp){return true;} //for now
});

Meteor.methods({

  motorTemperatureInsert: function(temp) {
      check(temp,{
        value: Number
      });
      temp.timestamp = new Date();
      MotorTemperatures.insert(temp)
  }

});
