import React from 'react';
import Chart from 'chart.js';
import Icon from '~/icons/icon';

require('./analytics.scss');

class Analytics extends React.Component {

    constructor(props) {
        super(props);
        this.populateChart1 = this.populateChart1.bind(this);
    }

    componentDidMount() {
        this.populateChart1();
    }

    populateChart1() {
        Chart.defaults.global.legend.display = false;

        const context = document.getElementById('chart1');
        const chart = new Chart(context, {
            type: 'bar',
            data: {
                labels: ['Sundays', 'Mondays', 'Tuesdays', 'Wednesdays', 'Thursdays', 'Fridays', 'Saturdays'],
                datasets: [{
                    data: [12, 1, 3, 5, 2, 3, 19],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(54, 162, 235, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }

    render() {
        return (
            <div id="analytics">
                <div className="row">
                    <div className="col-md-12">
                        <h1>
                            <Icon glyph="area-chart" />
                            Analytics
                        </h1>

                        <h2>Overview</h2>

                        <table className="table table-striped">
                            <tbody>
                                <tr>
                                    <td>Member since</td>
                                    <td>August 18, 2016</td>
                                </tr>
                                <tr>
                                    <td>Tasks completed</td>
                                    <td>275 / 302 (91.1%)</td>
                                </tr>
                                <tr>
                                    <td>Current oldest incomplete task</td>
                                    <td>Do the thing (2w 4d)</td>
                                </tr>
                                <tr>
                                    <td>All-time oldest incomplete task</td>
                                    <td>Do some other thing (3w 1d)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="col-md-4">
                        <h2>Task Completion by Day of the Week</h2>
                        <canvas id="chart1"></canvas>
                    </div>
                </div>
            </div>
        );
    }
}

export default Analytics;
