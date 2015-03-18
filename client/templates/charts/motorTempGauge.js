/*
 * Call the function to built the chart when the template is rendered
 */
Template.motorTempGauge.rendered = function () {
    builtGauge();

    /*
     * Change value when new temperature is added
     */
    this.autorun(function () {
        var chart = $('#container-gauge').highcharts(),
            point,
            newVal

        if (chart) {
            point = chart.series[0].points[0];

            Measures.motorTemperatures().observe({
                added : function(motorTemperature){ newVal = motorTemperature.value}
            });

            point.update(newVal);
        }

    });

}



/*
 * Function to draw the gauge
 */
function builtGauge() {

    $('#container-gauge').highcharts({
        chart: {
            type: 'solidgauge'
        },

        title: null,

        pane: {
            center: ['50%', '85%'],
            size: '140%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: false
        },

        yAxis: {
            min: 0,
            max: 200,
            title: {
                text: 'Speed'
            },

            stops: [
                [0.1, '#55BF3B'],
                [0.5, '#DDDF0D'],
                [0.9, '#DF5353']
            ],
            lineWidth: 0,
            minorTickInterval: null,
            tickPixelInterval: 400,
            tickWidth: 0,
            title: {
                y: -70
            },
            labels: {
                y: 16
            }
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        },

        credits: {
            enabled: false
        },

        series: [{
            name: 'MotorTemperature',
            data: [80],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:#7e7e7e">{y}</span><br/>' +
                '<span style="font-size:12px;color:silver">F</span></div>'
            },
            tooltip: {
                valueSuffix: ' F'
            }
        }]
    });
}




