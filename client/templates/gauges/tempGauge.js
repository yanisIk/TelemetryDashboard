Template.tempGauge.helpers({
  actualTemp: function(){return MotorTemperatures.findOne();}
});



//Gauge
Template.tempGauge.rendered = function () {

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
    d3.select('#tempGauge svg').datum(
      [{ values: MotorTemperatures.find().fetch(), key: 'timestamp' }]
    ).call(chart);
    nv.utils.windowResize(function() { chart.update(); });
    return chart;
  });

  this.autorun(function () {
    d3.select('#tempGauge svg').datum(
      [{ values: MotorTemperatures.find().fetch(), key: 'timestamp' }]
    ).call(chart);
    chart.update();
  });

    /*
    var svg, width = 500, height = 75, x, y;

    var yScale = d3.scale.linear()
                        .domain([-30,200])
                        .range([10,60]);


    var xScale = d3.scale.linear()
                        .domain([-30,200])
                        .range([10,60]);

    svg = d3.select('#tempGauge').append('svg')
      .attr('width', width)
      .attr('height', height);

    var drawGauge = function (update) {
      var value = MotorTemperature.findOne().value;
      var gauge = svg.select('gauge').data(value);
      if (!update) {
        gauge = tempChart.enter().append('gauge')
          .attr('cx', function (d, i) { return x(i); })
          .attr('cy', height / 2);
      } else {
        gauge = gauge.transition().duration(1000);
      }
      gauge.attr('r', function (d) { return d; });
    };

    MotorTemperatures.find().observe({
      added: function () {
        x = d3.scale.ordinal()
          .domain(d3.range(MotorTemperatures.findOne().value))
          .rangePoints([0, width], 1);
        drawGauge(false);
      }
    });
    */
};
