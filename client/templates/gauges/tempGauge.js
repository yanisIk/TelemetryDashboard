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


    //Create jqxGauge
    $('#tempGaugeJqx').jqxGauge({
        ranges: [{ startValue: 0, endValue: 5, style: { fill: '#e2e2e2', stroke: '#e2e2e2' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 },
            { startValue: 5, endValue: 10, style: { fill: '#f6de54', stroke: '#f6de54' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 },
            { startValue: 10, endValue: 15, style: { fill: '#db5016', stroke: '#db5016' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 },
            { startValue: 15, endValue: 20, style: { fill: '#d02841', stroke: '#d02841' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 },
        ],
        cap: { radius: 0.04 },
        caption: { offset: [0, -25], value: 'Pressure (PSI)', position: 'bottom' },
        value: 0,
        style: { stroke: '#ffffff', 'stroke-width': '1px', fill: '#ffffff' },
        animationDuration: 1500,
        colorScheme: 'scheme04',
        min: 0,
        max: 20,
        labels: { visible: true, position: 'inside' },
        ticksMinor: { interval: 5, size: '5%' },
        ticksMajor: { interval: 10, size: '10%' }
    });




  this.autorun(function () {
    g.refresh(Session.get("actualMotorTemp").value);
      $('#gauge').jqxGauge('setValue', Session.get("actualMotorTemp").value);
  });

};
