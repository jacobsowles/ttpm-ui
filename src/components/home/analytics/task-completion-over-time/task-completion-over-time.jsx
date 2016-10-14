import React, { Component, PropTypes } from 'React';
import Chart from 'chart.js';

class TaskCompletionOverTime extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return (
            nextProps.isVisible &&
            this.props.completionCountsForWeek != nextProps.completionCountsForWeek
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

        const ctx = document.getElementById('task-completion-over-time-canvas');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                datasets: [{
                    label: 'Tasks Completed',
                    data: this.props.completionCountsForWeek,
                    lineTension: 0,
                    pointBackgroundColor: '#5e804d',
                    fill: false
                }]
            }
        });
    }

    render() {
        console.log(this.props.completionCountsForWeek);
        return (
            <div id="task-completion-over-time">
                <canvas id="task-completion-over-time-canvas" />
            </div>
        );
    }
}

TaskCompletionOverTime.propTypes = {
    completionCountsForWeek: PropTypes.arrayOf(PropTypes.number).isRequired,
    isVisible: PropTypes.bool.isRequired
};

export default TaskCompletionOverTime;
