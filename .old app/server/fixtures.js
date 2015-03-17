Meteor.startup(function () {


    Meteor.setInterval(function(){
        MotorTemperatures.insert({value: _.random(0, 100) , timestamp : Date.now()});
    }, 2000)


  });
