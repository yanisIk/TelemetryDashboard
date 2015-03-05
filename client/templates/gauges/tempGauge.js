Template.tempGauge.helpers({
  actualTemp: function(){return Session.get("actualMotorTemp");}
});



//Gauge
Template.tempGauge.rendered = function () {

  var g = new JustGage({
   id: "tempGauge",
   value: 0,
   min: 0,
   max: 100,
   title: "Motor Temperature"
  });


  this.autorun(function () {
    g.refresh(Session.get("actualMotorTemp").value);
  });

};
