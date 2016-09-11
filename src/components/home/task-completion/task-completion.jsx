// npm modules
import React from 'React';
import Chart from 'chart.js';

// styles
require('./task-completion.scss');

class TaskCompletion extends React.Component {

    componentDidMount() {
        this.generateVisualization();
    }

    generateVisualization() {
        Chart.defaults.global.legend.display = false;

        const ctx = document.getElementById('task-completion-canvas');
        const myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Tasks Completed', 'Tasks Remaining'],
                datasets: [{
                    data: [this.props.completedTaskCount, this.props.totalTaskCount - this.props.completedTaskCount],
                    backgroundColor: [
                        '#5e804d'
                    ]
                }]
            },
            options: {
                cutoutPercentage: 75
            }
        });
    }

    render() {
        return (
            <div id="task-completion">
                <canvas id="task-completion-canvas" />
                <p>{this.props.completedTaskCount} / {this.props.totalTaskCount}</p>
            </div>
        );
    }
}

TaskCompletion.propTypes = {
    completedTaskCount: React.PropTypes.number.isRequired,
    totalTaskCount: React.PropTypes.number.isRequired
};

export default TaskCompletion;
