Template.tempChart.helpers({
  actualTemp: function(){return Session.get("actualMotorTemp");}
});



//Chart
Template.tempChart.rendered = function () {

  var chart = nv.models.lineChart()
    .margin({left: 100})  //Adjust chart margins to give the x-axis some breathing room.
    .useInteractiveGuideline(true)  //We want nice looking tooltips and a guideline!
//    .transition().duration(350)  //how fast do you want the lines to transition?
    .showLegend(true)       //Show the legend, allowing users to turn on/off line series.
    .showYAxis(true)        //Show the y-axis
    .showXAxis(true)        //Show the x-axis
  ;

  nv.addGraph(function() {
    chart.xAxis.axisLabel('Time (ms)').tickFormat(d3.format('d'));
    chart.yAxis.axisLabel('Temperature (F)').tickFormat(d3.format('d'));

    d3.select('#tempChart svg').datum(
      [{ values: MotorTemperatures.find().fetch(), key: 'timestamp' }]
    ).transition().duration(300).call(chart);

    nv.utils.windowResize(function() { chart.update(); });

    return chart;

  });

  this.autorun(function () {
    d3.select('#tempChart svg').datum(
      [{ values: MotorTemperatures.find().fetch(), key: 'timestamp' }]
    ).transition().duration(300).call(chart);

    chart.update();
  });

};
