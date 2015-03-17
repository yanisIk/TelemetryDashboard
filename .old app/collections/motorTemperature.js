MotorTemperatures = new Mongo.Collection('MotorTemperatures');
// fields : value, timestamp

MotorTemperatures.allow({
  insert: function(userid, temp){return true;} //for now
});

Meteor.methods({

  motorTemperatureInsert: function(temp) {
      check(temp,Match.Integer);

      var tempObject = {
        value: temp,
        timestamp: Date.now()
      };
      MotorTemperatures.insert(tempObject);
  }

});

if(Meteor.isClient){

  Session.set("actualMotorTemp",MotorTemperatures.find({}, {sort: {timestamp: -1}, limit:1}).fetch()[0]);
  motorTemps = [];
  Session.set("motorTemps", motorTemps);

  MotorTemperatures.find().observe({
    added: function(temp){
      Session.set("actualMotorTemp",temp);
      var localMotorTemps = Session.get("motorTemps");
      localMotorTemps.push({x:temp.timestamp, y:temp.value});
      if(localMotorTemps.length > 50){
        localMotorTemps.shift();
      }
      Session.set("motorTemps", localMotorTemps);
    }
  });

}
