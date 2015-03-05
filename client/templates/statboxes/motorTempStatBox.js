Template.motorTempStatBox.helpers({
  motorTemps: function(){
    var temps = Session.get("motorTemps");
    temps.slice(temps.length - 5, temps.length);
    return temps;
  },
  actualMotorTemp: function(){ return Session.get("actualMotorTemp");}
});
