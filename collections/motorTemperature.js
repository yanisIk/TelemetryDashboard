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

if(Meteor.isClient){

  Session.set("actualMotorTemp",MotorTemperatures.find({}, {sort: {timestamp: -1}, limit:1}).fetch()[0])

  MotorTemperatures.find().observe({
    added: function(temp){
      Session.set("actualMotorTemp",temp);
    }
  });

}
