// npm modules
import React from 'React';
import Chart from 'chart.js';

// styles
require('./task-completion.scss');

class TaskCompletion extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            completionPercentage: 0
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (
            nextProps.isVisible &&
            (
                this.props.completedTaskCount != nextProps.completedTaskCount ||
                this.props.totalTaskCount != nextProps.totalTaskCount
            )
        );
    }

    componentWillUpdate(nextProps, nextState) {
        this.state.completionPercentage = (
            nextProps.totalTaskCount > 0
            ? (nextProps.completedTaskCount / nextProps.totalTaskCount) * 100
            : 0
        );
    }

    componentDidMount() {
        this.generateVisualization();
    }

    componentDidUpdate(prevProps, prevState) {
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
                <p style={{float: 'right'}}>{this.state.completionPercentage}%</p>
            </div>
        );
    }
}

TaskCompletion.propTypes = {
    completedTaskCount: React.PropTypes.number.isRequired,
    totalTaskCount: React.PropTypes.number.isRequired,
    isVisible: React.PropTypes.bool.isRequired
};

export default TaskCompletion;
