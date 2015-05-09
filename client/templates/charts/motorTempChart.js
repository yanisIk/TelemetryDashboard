/*
 * Call the function to build the chart when the template is rendered
 */
Template.motorTempChart.rendered = function () {
    buildChart();

    /*
     * add point when new temperature is added
     */
    this.autorun(function () {            
        if(typeof(motorTemperatureChart) !== "undefined"){
            Measures.find({type: "motorTemperature"}).observe({
            added : function(temperature){ 
                var series = motorTemperatureChart.series[0],
                shift = series.data.length > 20; // shift if the series is 
                                                 // longer than 20

                var point = {x: temperature.timestamp, y: temperature.value};
                // add the point
                motorTemperatureChart.series[0].addPoint(point, true, shift);
            }
        });
        }      
    });

}



/*
 * Function to draw the graph
 */
function buildChart() {

    motorTemperatureChart = new Highcharts.Chart({
        chart: {
            renderTo: 'motorTempChart',
            defaultSeriesType: 'spline'
        },
        title: {
            text: 'Motor Temperatures'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            maxZoom: 20 * 1000
        },
        yAxis: {
            minPadding: 0.2,
            maxPadding: 0.2,
            title: {
                text: 'Value',
                margin: 80
            }
        },
        series: [{
            name: 'Temperature',
            data: []
        }]
    }); 
}




