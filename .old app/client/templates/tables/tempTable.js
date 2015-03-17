Template.tempTable.helpers({
  motorTemperatures: function(){
    return Session.get("motorTemps");
  }
})
