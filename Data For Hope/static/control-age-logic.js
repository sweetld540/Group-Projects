anychart.onDocumentReady(function () {
    // create data set on our data
    var dataSet = anychart.data.set([
        ['Debt Bondage',4.37,4.59],
		['Takes Earnings',8.73,5.12],
		['Restricts Financial Access',0.27,0.07],
		['Threats',9.55,8.64],
		['Psychological Abuse',10.85,12.14],
		['Physical Abuse',8.38,9.46],
		['Sexual Abuse',3.42,7.54],
		['False Promises',8.09,6.25],
		['Psychoactive Substances',4.37,9.19],
		['Restricts Movement',10.64,8.75],
		['Restricts Medical Care',4.85,3.99],
		['Excessive Working Hours',7.24,4.38],
		['Uses Children',0.28,0.01],
		['Threat Of Law Enforcement',3.29,3.97],
		['Withholds Necessities',4.5,5.16],
		['Withholds Documents',7.09,3.85],
		['Other',4.07,6.88]
    ]);

    // map data for the first series, take x from the zero column and value from the first column of data set
    var seriesData_1 = dataSet.mapAs({'x': 0, 'value': 1});

    // map data for the second series, take x from the zero column and value from the second column of data set
    var seriesData_2 = dataSet.mapAs({'x': 0, 'value': 2});

    // create column chart
    var chart = anychart.column();

    // turn on chart animation
    chart.animation(true);

    // set chart title text settings
    chart.title('Means of Control by Age Group');

    // temp variable to store series instance
    var series;

    // helper function to setup label settings for all series
    var setupSeries = function (series, name) {
        series.name(name);
        series.selected()
                .fill('#f48fb1 0.8')
                .stroke('1.5 #c2185b');
    };

    // create first series with mapped data
    series = chart.column(seriesData_1);
    series.xPointPosition(0.45);
    setupSeries(series, 'Adult');

    // create second series with mapped data
    series = chart.column(seriesData_2);
    series.xPointPosition(0.25);
    setupSeries(series, 'Child');

    // set chart padding
    chart.barGroupsPadding(0.3);

    // format numbers in y axis label to match browser locale
    chart.yAxis().labels().format('{%Value}{groupsSeparator: }%');

    // set titles for Y-axis
    chart.yAxis().title('Percentage');

    // turn on legend
    chart.legend()
            .enabled(true)
            .fontSize(13)
            .padding([0, 0, 20, 0]);

    chart.interactivity().hoverMode('single');

    chart.tooltip().format('{%Value}{groupsSeparator: }%');

    // set container id for the chart
    chart.container('container');

    // initiate chart drawing
    chart.draw();
});