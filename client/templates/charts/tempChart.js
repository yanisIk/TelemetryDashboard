Template.tempChart.helpers({
  actualTemp: function(){return MotorTemperatures.findOne();}
});



//Chart
Template.tempChart.rendered = function () {

  var chart = nv.models.lineChart()
    .margin({left: 100})  //Adjust chart margins to give the x-axis some breathing room.
    .useInteractiveGuideline(true)  //We want nice looking tooltips and a guideline!
    .transitionDuration(350)  //how fast do you want the lines to transition?
    .showLegend(true)       //Show the legend, allowing users to turn on/off line series.
    .showYAxis(true)        //Show the y-axis
    .showXAxis(true)        //Show the x-axis
  ;

  nv.addGraph(function() {
    chart.xAxis.axisLabel('Time').tickFormat(d3.format('d'));
    chart.yAxis.axisLabel('Temperature').tickFormat(d3.format('d'));
    d3.select('#tempChart svg').datum(
      [{ values: MotorTemperatures.find().fetch(), key: 'timestamp' }]
    ).call(chart);
    nv.utils.windowResize(function() { chart.update(); });
    return chart;
  });

  this.autorun(function () {
    d3.select('#tempChart svg').datum(
      [{ values: MotorTemperatures.find().fetch(), key: 'timestamp' }]
    ).call(chart);
    chart.update();
  });

};
