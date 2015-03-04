Meteor.startup(function () {
    if (MotorTemperatures.find().count() === 0) {

      for(i=1; i<50; i++){
        MotorTemperatures.insert({value: _.random(-10, 150) , timestamp : Date.now()});
      }

    }
  });
