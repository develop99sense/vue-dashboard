function handleFacebookChart() {
    // console.log($('#visitors-facebook-chart'));
    // color(d3.scale.ordinal().range(["#000", "#fff"]).range());
    nv.addGraph(function() {
        var chart = nv.models.scatterChart()
                    .showDistX(true)    //showDist, when true, will display those little distribution lines on the axis.
                    .showDistY(true)
                    .duration(350)
                    // .showControls(true)/
                    .color(d3.scale.ordinal().range(["rgb(46, 187, 213)", "rgb(71, 73, 180)", "rgb(71, 73, 180)", "rgb(158, 104, 197)"]).range());
    
      //Axis settings
      chart.xAxis.tickFormat(d3.format('.02f'));
      chart.yAxis.tickFormat(d3.format('.02f'));

      var myData = randomData(4,20);

      d3.select('#visitors-facebook-chart')
          .append('svg')
          .datum(myData)
           // .showControls(true)
          .call(chart);

        d3.select(".nv-legendWrap")
            .attr("transform", "translate(30,-40)");

        d3.select(".nv-wrap")
            .attr("transform", "translate(75, 45)");

      nv.utils.windowResize(chart.update);

      return chart;
    });
};

var handleStackedBarChart = function() {
    "use strict";
    
    var stackedBarChartData = [{
        key: 'Stream 1',
        'color' : '#2ebbd5',
        values: [
            { x:1, y: 10}, { x:2, y: 15}, { x:3, y: 16}, { x:4, y: 20}, { x:5, y: 57}, { x:6, y: 42}, { x:7, y: 12}, { x:8, y: 65}, { x:9, y: 34}, { x:10, y: 52}, 
            { x:11, y: 23}, { x:12, y: 12}, { x:13, y: 22}, { x:14, y: 22}, { x:15, y: 48}, { x:16, y: 54}, { x:17, y: 32}, { x:18, y: 13}, { x:19, y: 21}, { x:20, y: 12}
        ]   
    },{
        key: 'Stream 2',
        'color' : '#d4f1f7',
        values: [
            { x:1, y: 10}, { x:2, y: 15}, { x:3, y: 16}, { x:4, y: 45}, { x:5, y: 67}, { x:6, y: 34}, { x:7, y: 43}, { x:8, y: 65}, { x:9, y: 32}, { x:10, y: 12}, 
            { x:11, y: 43}, { x:12, y: 45}, { x:13, y: 32}, { x:14, y: 32}, { x:15, y: 38}, { x:16, y: 64}, { x:17, y: 42}, { x:18, y: 23}, { x:19, y: 31}, { x:20, y: 22}
        ]
    }];

    nv.addGraph({
        generate: function() {
            var stackedBarChart = nv.models.multiBarChart()
                .stacked(true)
                .showControls(true);
            
            var svg = d3.select('#nv-stacked-bar-chart').append('svg').datum(stackedBarChartData);
            svg.transition().duration(0).call(stackedBarChart);
           
            stackedBarChart.legend.margin({top: 0, right: 0, left: 0, bottom: 5})
            d3.select(".nv-multiBarWithLegend")
                .attr("transform", "translate(30,40)");

            // d3.select("g.nv-legendWrap.nvd3-svg")
                // .attr("transform", "translate(220, -40)");                 

            // d3.select(".nv-controlsWrap")
                // .attr("transform", "translate(-20, -40)"); 
           
            return stackedBarChart;
        }
    });
};

var handleVisitorsAreaChart = function() {
    var handleGetDate = function(minusDate) {
        var d = new Date();
            d = d.setDate(d.getDate() - minusDate);
        return d;
    };

    var visitorAreaChartData = [{
        'key' : 'Unique Visitors',
        'color' : COLOR_AQUA,
        'values' : [ 
            [handleGetDate(77), 13], [handleGetDate(76), 13], [handleGetDate(75), 6 ], 
            [handleGetDate(73), 6 ], [handleGetDate(72), 6 ], [handleGetDate(71), 5 ], [handleGetDate(70), 5 ], 
            [handleGetDate(69), 5 ], [handleGetDate(68), 6 ], [handleGetDate(67), 7 ], [handleGetDate(66), 6 ], 
            [handleGetDate(65), 9 ], [handleGetDate(64), 9 ], [handleGetDate(63), 8 ], [handleGetDate(62), 10], 
            [handleGetDate(61), 10], [handleGetDate(60), 10], [handleGetDate(59), 10], [handleGetDate(58), 9 ], 
            [handleGetDate(57), 9 ], [handleGetDate(56), 10], [handleGetDate(55), 9 ], [handleGetDate(54), 9 ], 
            [handleGetDate(53), 8 ], [handleGetDate(52), 8 ], [handleGetDate(51), 8 ], [handleGetDate(50), 8 ], 
            [handleGetDate(49), 8 ], [handleGetDate(48), 7 ], [handleGetDate(47), 7 ], [handleGetDate(46), 6 ], 
            [handleGetDate(45), 6 ], [handleGetDate(44), 6 ], [handleGetDate(43), 6 ], [handleGetDate(42), 5 ], 
            [handleGetDate(41), 5 ], [handleGetDate(40), 4 ], [handleGetDate(39), 4 ], [handleGetDate(38), 5 ], 
            [handleGetDate(37), 5 ], [handleGetDate(36), 5 ], [handleGetDate(35), 7 ], [handleGetDate(34), 7 ], 
            [handleGetDate(33), 7 ], [handleGetDate(32), 10], [handleGetDate(31), 9 ], [handleGetDate(30), 9 ], 
            [handleGetDate(29), 10], [handleGetDate(28), 11], [handleGetDate(27), 11], [handleGetDate(26), 8 ], 
            [handleGetDate(25), 8 ], [handleGetDate(24), 7 ], [handleGetDate(23), 8 ], [handleGetDate(22), 9 ], 
            [handleGetDate(21), 8 ], [handleGetDate(20), 9 ], [handleGetDate(19), 10], [handleGetDate(18), 9 ], 
            [handleGetDate(17), 10], [handleGetDate(16), 16], [handleGetDate(15), 17], [handleGetDate(14), 16], 
            [handleGetDate(13), 17], [handleGetDate(12), 16], [handleGetDate(11), 15], [handleGetDate(10), 14], 
            [handleGetDate(9) , 24], [handleGetDate(8) , 18], [handleGetDate(7) , 15], [handleGetDate(6) , 14], 
            [handleGetDate(5) , 16], [handleGetDate(4) , 16], [handleGetDate(3) , 17], [handleGetDate(2) , 7 ], 
            [handleGetDate(1) , 7 ], [handleGetDate(0) , 7 ]
        ]
    }, {
        'key' : 'Page Views',
        'color' : COLOR_BLUE,
        'values' : [ 
            [handleGetDate(77), 14], [handleGetDate(76), 13], [handleGetDate(75), 15], 
            [handleGetDate(73), 14], [handleGetDate(72), 13], [handleGetDate(71), 15], [handleGetDate(70), 16], 
            [handleGetDate(69), 16], [handleGetDate(68), 14], [handleGetDate(67), 14], [handleGetDate(66), 13], 
            [handleGetDate(65), 12], [handleGetDate(64), 13], [handleGetDate(63), 13], [handleGetDate(62), 15], 
            [handleGetDate(61), 16], [handleGetDate(60), 16], [handleGetDate(59), 17], [handleGetDate(58), 17], 
            [handleGetDate(57), 18], [handleGetDate(56), 15], [handleGetDate(55), 15], [handleGetDate(54), 15], 
            [handleGetDate(53), 19], [handleGetDate(52), 19], [handleGetDate(51), 18], [handleGetDate(50), 18], 
            [handleGetDate(49), 17], [handleGetDate(48), 16], [handleGetDate(47), 18], [handleGetDate(46), 18], 
            [handleGetDate(45), 18], [handleGetDate(44), 16], [handleGetDate(43), 14], [handleGetDate(42), 14], 
            [handleGetDate(41), 13], [handleGetDate(40), 14], [handleGetDate(39), 13], [handleGetDate(38), 10], 
            [handleGetDate(37), 9 ], [handleGetDate(36), 10], [handleGetDate(35), 11], [handleGetDate(34), 11], 
            [handleGetDate(33), 11], [handleGetDate(32), 10], [handleGetDate(31), 9 ], [handleGetDate(30), 10], 
            [handleGetDate(29), 13], [handleGetDate(28), 14], [handleGetDate(27), 14], [handleGetDate(26), 13], 
            [handleGetDate(25), 12], [handleGetDate(24), 11], [handleGetDate(23), 13], [handleGetDate(22), 13], 
            [handleGetDate(21), 13], [handleGetDate(20), 13], [handleGetDate(19), 14], [handleGetDate(18), 13], 
            [handleGetDate(17), 13], [handleGetDate(16), 19], [handleGetDate(15), 21], [handleGetDate(14), 22],
            [handleGetDate(13), 25], [handleGetDate(12), 24], [handleGetDate(11), 24], [handleGetDate(10), 22], 
            [handleGetDate(9) , 16], [handleGetDate(8) , 15], [handleGetDate(7) , 12], [handleGetDate(6) , 12], 
            [handleGetDate(5) , 15], [handleGetDate(4) , 15], [handleGetDate(3) , 15], [handleGetDate(2) , 18], 
            [handleGetDate(2) , 18], [handleGetDate(0) , 17]
        ]
    }];

    nv.addGraph(function() {
        var stackedAreaChart = nv.models.stackedAreaChart()
            .useInteractiveGuideline(true)
            .x(function(d) { return d[0] })
            .y(function(d) { return d[1] })
            .pointSize(0.5)
            .margin({'left':35,'right': 25,'top': 20,'bottom':20})
            .controlLabels({stacked: 'Stacked'})
            .showControls(true)
            // .legendPosition("bottom")
            .duration(300);

        stackedAreaChart.xAxis.tickFormat(function(d) { 
            var monthsName = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
            d = new Date(d);
            d = d.getDate() + '/' + monthsName[d.getMonth()];
            return d ;
        });
        // stackedAreaChart.legend.rightAlign(false);

        stackedAreaChart.legend.margin({top: 0, right: 0, left: 0, bottom: 5})
        d3.select('#visitors-line-chart-test')
            .append('svg')
            .datum(visitorAreaChartData)
            .transition().duration(1000)
            .call(stackedAreaChart)
            // .showControls(true)
            .each('start', function() {
                setTimeout(function() {
                    d3.selectAll('#visitors-line-chart-test *').each(function() {
                        if(this.__transition__)
                            this.__transition__.duration = 1;
                    })
                }, 0)
            });
       
        nv.utils.windowResize(stackedAreaChart.update);
        return stackedAreaChart;
    });
};

var handleVisitorsAreaChartStat = function() {
    var handleGetDate = function(minusDate) {
        var d = new Date();
            d = d.setDate(d.getDate() - minusDate);
        return d;
    };

    var visitorAreaChartData = [{
        'key' : 'Unique Visitors',
        'color' : COLOR_AQUA,
        'values' : [ 
            [handleGetDate(77), 13], [handleGetDate(76), 13], [handleGetDate(75), 6 ], 
            [handleGetDate(73), 6 ], [handleGetDate(72), 6 ], [handleGetDate(71), 5 ], [handleGetDate(70), 5 ], 
            [handleGetDate(69), 5 ], [handleGetDate(68), 6 ], [handleGetDate(67), 7 ], [handleGetDate(66), 6 ], 
            [handleGetDate(65), 9 ], [handleGetDate(64), 9 ], [handleGetDate(63), 8 ], [handleGetDate(62), 10], 
            [handleGetDate(61), 10], [handleGetDate(60), 10], [handleGetDate(59), 10], [handleGetDate(58), 9 ], 
            [handleGetDate(57), 9 ], [handleGetDate(56), 10], [handleGetDate(55), 9 ], [handleGetDate(54), 9 ], 
            [handleGetDate(53), 8 ], [handleGetDate(52), 8 ], [handleGetDate(51), 8 ], [handleGetDate(50), 8 ], 
            [handleGetDate(49), 8 ], [handleGetDate(48), 7 ], [handleGetDate(47), 7 ], [handleGetDate(46), 6 ], 
            [handleGetDate(45), 6 ], [handleGetDate(44), 6 ], [handleGetDate(43), 6 ], [handleGetDate(42), 5 ], 
            [handleGetDate(41), 5 ], [handleGetDate(40), 4 ], [handleGetDate(39), 4 ], [handleGetDate(38), 5 ], 
            [handleGetDate(37), 5 ], [handleGetDate(36), 5 ], [handleGetDate(35), 7 ], [handleGetDate(34), 7 ], 
            [handleGetDate(33), 7 ], [handleGetDate(32), 10], [handleGetDate(31), 9 ], [handleGetDate(30), 9 ], 
            [handleGetDate(29), 10], [handleGetDate(28), 11], [handleGetDate(27), 11], [handleGetDate(26), 8 ], 
            [handleGetDate(25), 8 ], [handleGetDate(24), 7 ], [handleGetDate(23), 8 ], [handleGetDate(22), 9 ], 
            [handleGetDate(21), 8 ], [handleGetDate(20), 9 ], [handleGetDate(19), 10], [handleGetDate(18), 9 ], 
            [handleGetDate(17), 10], [handleGetDate(16), 16], [handleGetDate(15), 17], [handleGetDate(14), 16], 
            [handleGetDate(13), 17], [handleGetDate(12), 16], [handleGetDate(11), 15], [handleGetDate(10), 14], 
            [handleGetDate(9) , 24], [handleGetDate(8) , 18], [handleGetDate(7) , 15], [handleGetDate(6) , 14], 
            [handleGetDate(5) , 16], [handleGetDate(4) , 16], [handleGetDate(3) , 17], [handleGetDate(2) , 7 ], 
            [handleGetDate(1) , 7 ], [handleGetDate(0) , 7 ]
        ]
    }, {
        'key' : 'Page Views',
        'color' : COLOR_BLUE,
        'values' : [ 
            [handleGetDate(77), 14], [handleGetDate(76), 13], [handleGetDate(75), 15], 
            [handleGetDate(73), 14], [handleGetDate(72), 13], [handleGetDate(71), 15], [handleGetDate(70), 16], 
            [handleGetDate(69), 16], [handleGetDate(68), 14], [handleGetDate(67), 14], [handleGetDate(66), 13], 
            [handleGetDate(65), 12], [handleGetDate(64), 13], [handleGetDate(63), 13], [handleGetDate(62), 15], 
            [handleGetDate(61), 16], [handleGetDate(60), 16], [handleGetDate(59), 17], [handleGetDate(58), 17], 
            [handleGetDate(57), 18], [handleGetDate(56), 15], [handleGetDate(55), 15], [handleGetDate(54), 15], 
            [handleGetDate(53), 19], [handleGetDate(52), 19], [handleGetDate(51), 18], [handleGetDate(50), 18], 
            [handleGetDate(49), 17], [handleGetDate(48), 16], [handleGetDate(47), 18], [handleGetDate(46), 18], 
            [handleGetDate(45), 18], [handleGetDate(44), 16], [handleGetDate(43), 14], [handleGetDate(42), 14], 
            [handleGetDate(41), 13], [handleGetDate(40), 14], [handleGetDate(39), 13], [handleGetDate(38), 10], 
            [handleGetDate(37), 9 ], [handleGetDate(36), 10], [handleGetDate(35), 11], [handleGetDate(34), 11], 
            [handleGetDate(33), 11], [handleGetDate(32), 10], [handleGetDate(31), 9 ], [handleGetDate(30), 10], 
            [handleGetDate(29), 13], [handleGetDate(28), 14], [handleGetDate(27), 14], [handleGetDate(26), 13], 
            [handleGetDate(25), 12], [handleGetDate(24), 11], [handleGetDate(23), 13], [handleGetDate(22), 13], 
            [handleGetDate(21), 13], [handleGetDate(20), 13], [handleGetDate(19), 14], [handleGetDate(18), 13], 
            [handleGetDate(17), 13], [handleGetDate(16), 19], [handleGetDate(15), 21], [handleGetDate(14), 22],
            [handleGetDate(13), 25], [handleGetDate(12), 24], [handleGetDate(11), 24], [handleGetDate(10), 22], 
            [handleGetDate(9) , 16], [handleGetDate(8) , 15], [handleGetDate(7) , 12], [handleGetDate(6) , 12], 
            [handleGetDate(5) , 15], [handleGetDate(4) , 15], [handleGetDate(3) , 15], [handleGetDate(2) , 18], 
            [handleGetDate(2) , 18], [handleGetDate(0) , 17]
        ]
    }];

    nv.addGraph(function() {
        var stackedAreaChart = nv.models.stackedAreaChart()
            .useInteractiveGuideline(true)
            .x(function(d) { return d[0] })
            .y(function(d) { return d[1] })
            .pointSize(0.5)
            .margin({'left':35,'right': 25,'top': 20,'bottom':20})
            .controlLabels({stacked: 'Stacked'})
            .showControls(true)
            // .legendPosition("bottom")
            .duration(300);

        stackedAreaChart.xAxis.tickFormat(function(d) { 
            var monthsName = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
            d = new Date(d);
            d = d.getDate() + '/' + monthsName[d.getMonth()];
            return d ;
        });
        // stackedAreaChart.legend.rightAlign(false);

        stackedAreaChart.legend.margin({top: 0, right: 0, left: 0, bottom: 5})
        d3.select('#visitors-line-chart-stat')
            .append('svg')
            .datum(visitorAreaChartData)
            .transition().duration(1000)
            .call(stackedAreaChart)
            // .showControls(true)
            .each('start', function() {
                setTimeout(function() {
                    d3.selectAll('#visitors-line-chart-stat *').each(function() {
                        if(this.__transition__)
                            this.__transition__.duration = 1;
                    })
                }, 0)
            });
       
        nv.utils.windowResize(stackedAreaChart.update);
        return stackedAreaChart;
    });
};

var handleVisitorsDonutChart = function() {
    var visitorDonutChartData = [
        { 'label': 'Return Visitors', 'value' : 784466, 'color': COLOR_BLUE }, 
        { 'label': 'New Visitors', 'value' : 416747, 'color': COLOR_GREEN }
    ];
    var arcRadius = [
        { inner: 0.65, outer: 0.93 },
        { inner: 0.6, outer: 1 }
    ];

    nv.addGraph(function() {
      var donutChart = nv.models.pieChart()
          // .x(function(d) { return d.label })
          .y(function(d) { return d.value })
          .margin({'left': 10,'right':  10,'top': 10,'bottom': 10})
          .showLegend(false)
          .donut(true) 
          .growOnHover(false)
          .arcsRadius(arcRadius)
          .donutRatio(0.5);
        
        donutChart.labelFormat(d3.format('.02f'));
              // chart.xAxis.tickFormat(d3.format('.02f'));
      // chart.yAxis.tickFormat(d3.format('.02f'));
        d3.select('#visitors-donut-chart').append('svg')
            .datum(visitorDonutChartData)
            .transition().duration(3000)
            .call(donutChart);

        // d3.select('.nv-pieLabels').attr('transform', 'none');     
        
        return donutChart;
    });
};

var handleVectorMap = function() {
    if (('#world-map').length !== 0) {
        $('#world-map').vectorMap({
        map: 'world_mill_en',
        scaleColors: ['#2EBBD5', '#D4F1F7'],
        normalizeFunction: 'polynomial',
        hoverOpacity: 0.5,
        hoverColor: false,
        markerStyle: {
            initial: {
                fill: 'rgb(158, 104, 197)',
                stroke: '#fff',
                r: 5
            }
        },
        regionStyle: {
            initial: {
                fill: '#2EBBD5',
                "fill-opacity": 1,
                stroke: 'none',
                "stroke-width": 0.4,
                "stroke-opacity": 1
            },
            hover: {
                "fill-opacity": 0.8
            },
            selected: {
                fill: 'yellow'
            },
            selectedHover: {
            }
        },
        focusOn: {
            x: 0.5,
            y: 0.5,
            scale: 2
        },
        backgroundColor: '#D4F1F7',
        markers: [
            {latLng: [41.90, 12.45], name: 'Vatican City'},
            {latLng: [43.73, 7.41], name: 'Monaco'},
            {latLng: [-0.52, 166.93], name: 'Nauru'},
            {latLng: [-8.51, 179.21], name: 'Tuvalu'},
            {latLng: [43.93, 12.46], name: 'San Marino'},
            {latLng: [47.14, 9.52], name: 'Liechtenstein'},
            {latLng: [7.11, 171.06], name: 'Marshall Islands'},
            {latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis'},
            {latLng: [3.2, 73.22], name: 'Maldives'},
            {latLng: [35.88, 14.5], name: 'Malta'},
            {latLng: [12.05, -61.75], name: 'Grenada'},
            {latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines'},
            {latLng: [13.16, -59.55], name: 'Barbados'},
            {latLng: [17.11, -61.85], name: 'Antigua and Barbuda'},
            {latLng: [-4.61, 55.45], name: 'Seychelles'},
            {latLng: [7.35, 134.46], name: 'Palau'},
            {latLng: [42.5, 1.51], name: 'Andorra'},
            {latLng: [14.01, -60.98], name: 'Saint Lucia'},
            {latLng: [6.91, 158.18], name: 'Federated States of Micronesia'},
            {latLng: [1.3, 103.8], name: 'Singapore'},
            {latLng: [1.46, 173.03], name: 'Kiribati'},
            {latLng: [-21.13, -175.2], name: 'Tonga'},
            {latLng: [15.3, -61.38], name: 'Dominica'},
            {latLng: [-20.2, 57.5], name: 'Mauritius'},
            {latLng: [26.02, 50.55], name: 'Bahrain'},
            {latLng: [0.33, 6.73], name: 'São Tomé and Príncipe'}
        ]
        });
    }
};

var handleScheduleCalendar = function() {
    var monthNames = ["January", "February", "March", "April", "May", "June",  "July", "August", "September", "October", "November", "December"];
    var dayNames = ["S", "M", "T", "W", "T", "F", "S"];

    var now = new Date(),
        month = now.getMonth() + 1,
        year = now.getFullYear();

    var events = [
        [
            '2/' + month + '/' + year,
            'Popover Title',
            '#',
            COLOR_GREEN,
            'Some contents here'
        ],
        [
            '5/' + month + '/' + year,
            'Tooltip with link',
            'http://www.seantheme.com/',
            COLOR_BLACK
        ],
        [
            '18/' + month + '/' + year,
            'Popover with HTML Content',
            '#',
            COLOR_BLACK,
            'Some contents here <div class="text-right"><a href="http://www.google.com">view more >>></a></div>'
        ],
        [
            '28/' + month + '/' + year,
            'Color Admin V1.3 Launched',
            'http://www.seantheme.com/color-admin-v1.3',
            COLOR_BLACK,
        ]
    ];
    var calendarTarget = $('#schedule-calendar');
    $(calendarTarget).calendar({
        months: monthNames,
        days: dayNames,
        events: events,
        popover_options:{
            placement: 'top',
            html: true
        }
    });
    $(calendarTarget).find('td.event').each(function() {
        var backgroundColor = $(this).css('background-color');
        $(this).removeAttr('style');
        $(this).find('a').css('background-color', backgroundColor);
    });
    $(calendarTarget).find('.icon-arrow-left, .icon-arrow-right').parent().on('click', function() {
        $(calendarTarget).find('td.event').each(function() {
            var backgroundColor = $(this).css('background-color');
            $(this).removeAttr('style');
            $(this).find('a').css('background-color', backgroundColor);
        });
    });
};


var handleCustomChart = function() {

    var n = 4, // The number of series.
    m = 58; // The number of values per series.

    var xz = d3.range(m),
        yz = d3.range(n).map(function() { return bumps(m); }),
        y01z = d3.range(n),
        yMax = d3.max(yz, function(y) { return d3.max(y); }),
        y1Max = d3.max(y01z, function(y) { return d3.max(y, function(d) { return d[1]; }); });

    var svg = d3.select("#custom-chart-map svg"),
        margin = {top: 40, right: 10, bottom: 20, left: 10},
        width = +svg.attr("width") - margin.left - margin.right,
        height = +svg.attr("height") - margin.top - margin.bottom,
        g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var x = d3.scaleBand()
        .domain(xz)
        .rangeRound([0, width])
        .padding(0.08);

    var y = d3.scaleLinear()
        .domain([0, y1Max])
        .range([height, 0]);

    var color = d3.scaleOrdinal()
        .domain(d3.range(n))
        .range(d3.schemeCategory20c);

    var series = g.selectAll(".series")
      .data(y01z)
      .enter().append("g")
        .attr("fill", function(d, i) { return color(i); });

    var rect = series.selectAll("rect")
      .data(function(d) { return d; })
      .enter().append("rect")
        .attr("x", function(d, i) { return x(i); })
        .attr("y", height)
        .attr("width", x.bandwidth())
        .attr("height", 0);

    rect.transition()
        .delay(function(d, i) { return i * 10; })
        .attr("y", function(d) { return y(d[1]); })
        .attr("height", function(d) { return y(d[0]) - y(d[1]); });

    g.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x)
            .tickSize(0)
            .tickPadding(6));

    d3.selectAll("input")
        .on("change", changed);

    var timeout = d3.timeout(function() {
      d3.select("input[value=\"grouped\"]")
          .property("checked", true)
          .dispatch("change");
    }, 2000);

    function changed() {
      timeout.stop();
      if (this.value === "grouped") transitionGrouped();
      else transitionStacked();
    }

    function transitionGrouped() {
      y.domain([0, yMax]);

      rect.transition()
          .duration(500)
          .delay(function(d, i) { return i * 10; })
          .attr("x", function(d, i) { return x(i) + x.bandwidth() / n * this.parentNode.__data__.key; })
          .attr("width", x.bandwidth() / n)
        .transition()
          .attr("y", function(d) { return y(d[1] - d[0]); })
          .attr("height", function(d) { return y(0) - y(d[1] - d[0]); });
    }

    function transitionStacked() {
      y.domain([0, y1Max]);

      rect.transition()
          .duration(500)
          .delay(function(d, i) { return i * 10; })
          .attr("y", function(d) { return y(d[1]); })
          .attr("height", function(d) { return y(d[0]) - y(d[1]); })
        .transition()
          .attr("x", function(d, i) { return x(i); })
          .attr("width", x.bandwidth());
    }
    function bumps(m) {
      var values = [], i, j, w, x, y, z;

      // Initialize with uniform random values in [0.1, 0.2).
      for (i = 0; i < m; ++i) {
        values[i] = 0.1 + 0.1 * Math.random();
      }

      // Add five random bumps.
      for (j = 0; j < 5; ++j) {
        x = 1 / (0.1 + Math.random());
        y = 2 * Math.random() - 0.5;
        z = 10 / (0.1 + Math.random());
        for (i = 0; i < m; i++) {
          w = (i / m - y) * z;
          values[i] += x * Math.exp(-w * w);
        }
      }

      // Ensure all values are positive.
      for (i = 0; i < m; ++i) {
        values[i] = Math.max(0, values[i]);
      }

      return values;
    }

};



/**************************************
 * Simple test data generator
 */

function randomData(groups, points) { //# groups,# points per group
  var data = [],
      shapes = ['circle'],
      random = d3.random.normal();

  for (i = 0; i < groups; i++) {
    data.push({
      key: 'Group ' + i,
      values: []
    });

    for (j = 0; j < points; j++) {
      data[i].values.push({
        x: random(), 
        y: random(), 
        size: Math.random(),   //Configure the size of each scatter point,
        shape: (Math.random() > 0.95) ? shapes[j % 6] : "circle"  //Configure the shape of each scatter point.
      });
    }
  }
  return data;
}


var app = function () {
  "use strict";
  // console.log($('#visitors-facebook-chart'));
  handleFacebookChart();
  handleStackedBarChart();
  handleVisitorsAreaChart();
  handleVisitorsDonutChart();
  handleVectorMap();
  handleScheduleCalendar();
  // handleCustomChart();
  handleVisitorsAreaChartStat();
  // ChartNvd3.init();
}();