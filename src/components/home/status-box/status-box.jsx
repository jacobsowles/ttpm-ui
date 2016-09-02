// npm modules
import React from 'react';
import Chart from 'chart.js';

// styles
require('./status-box.scss');

class StatusBox extends React.Component {

    componentDidMount() {
        this.generateStatusBox();
    }

    generateStatusBox() {
        Chart.defaults.global.legend.display = false;

        const ctx = document.getElementById('status-box-canvas');
        const myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Points Earned', 'Points Remaining'],
                datasets: [{
                    data: [150, 200],
                    backgroundColor: [
                        '#5e804d'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                cutoutPercentage: 95
            }
        });
    }

    render() {
        return (
            <div id="status-box">
                <canvas id="status-box-canvas" width="150" height="150"></canvas>
            </div>
        );
    }
}

StatusBox.propTypes = {
    currentPoints: React.PropTypes.number.isRequired,
    maxPoints: React.PropTypes.number.isRequired,
    level: React.PropTypes.number.isRequired
};

export default StatusBox;
