/*
 * Call the function to build the gauge when the template is rendered
 */
Template.motorTempGauge.rendered = function () {
    buildGauge();

    /*
     * Change value when new temperature is added
     */
    this.autorun(function () {            
        if(typeof(motorTemperatureGauge) !== "undefined"){
            Measures.find({type: "motorTemperature"}).observe({
                added : function(temperature){ 
                    var point = motorTemperatureGauge.series[0].points[0];

                    var value =  temperature.value;
                    // update the point
                    point.update(value);
                }
            });
        }       
    });

}



/*
 * Function to draw the gauge
 */
function buildGauge() {

    motorTemperatureGauge = new Highcharts.Chart({
        chart: {
            type: 'gauge',
            renderTo: 'motorTempGauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: 'Motor Temperature'
        },

        pane: {
            startAngle: -120,
            endAngle: 120,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: 0,
            max: 100,

            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto'
            },
            title: {
                text: 'C'
            },
            plotBands: [{
                from: 0,
                to: 50,
                color: '#55BF3B' // green
            }, {
                from: 50,
                to: 75,
                color: '#DDDF0D' // yellow
            }, {
                from: 75,
                to: 100,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Temperature',
            data: [],
            tooltip: {
                valueSuffix: ' C'
            }
        }]
    }); 
}




