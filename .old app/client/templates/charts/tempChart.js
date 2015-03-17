Template.tempChart.helpers({
  actualTemp: function(){return Session.get("actualMotorTemp");}
});

Template.tempChart.events({
  'click #pushTemp': function(event, template){
    var temp = parseInt($('input[name=temperature]:text').val());
    Meteor.call('motorTemperatureInsert', temp);
    console.log("new temp = "+temp);
  },
  'click #pushRandomTemp': function(event, template){
    var temp = _.random(0,100);
    Meteor.call('motorTemperatureInsert', temp);
    console.log("new temp = "+temp);
  }
});


//Chart
Template.tempChart.rendered = function () {

    var data = [];

  var chart = nv.models.stackedAreaChart()
    //.margin({left: 100})  //Adjust chart margins to give the x-axis some breathing room.
    .useInteractiveGuideline(true)  //We want nice looking tooltips and a guideline!
    .interpolate("linear")  //how fast do you want the lines to transition?
    .showLegend(true)       //Show the legend, allowing users to turn on/off line series.
    .showYAxis(true)        //Show the y-axis
    .showXAxis(true)        //Show the x-axis
    .clipEdge(true)
  ;

  nv.addGraph(function() {
    chart.xAxis.axisLabel('Time (ms)').tickFormat(d3.format('d'));
    chart.yAxis.axisLabel('Temperature (F)').tickFormat(d3.format('d'));

      d3.select('#tempChart svg').datum(
          [{ values: data, key: 'Motor temperature' }]
      ).transition().duration(100).call(chart);

    nv.utils.windowResize(function() { chart.update(); });

    return chart;

  });

  this.autorun(function () {
      var actualTemp = Session.get("actualMotorTemp");
      data.push({x: actualTemp.timestamp, y:actualTemp.value});
    chart.update();
  });



};
