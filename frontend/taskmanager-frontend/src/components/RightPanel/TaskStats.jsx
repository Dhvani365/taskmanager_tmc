import { Chart, registerables } from 'chart.js';
import { useEffect } from 'react';

Chart.register(...registerables);

export default function TaskStats() {
  useEffect(() => {
    const ctxPriority = document.getElementById('priorityChart').getContext('2d');
    const ctxStatus = document.getElementById('statusChart').getContext('2d');
    const ctxCompletion = document.getElementById('completionChart').getContext('2d');
    const ctxCompletionTime = document.getElementById('completionTimeChart').getContext('2d');

    // 1. Tasks by Priority (Bar Chart)
    const priorityChart = new Chart(ctxPriority, {
      type: 'bar',
      data: {
        labels: ['High', 'Medium', 'Low'], // Task priorities
        datasets: [{
          label: 'Number of Tasks',
          data: [5, 8, 3], // Example data: replace with dynamic data
          backgroundColor: ['#FF5733', '#FFBD33', '#75FF33'],
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Priority',
              color: '#FDFFFC',
            },
            ticks: {
              color: '#FDFFFC',
            }
          },
          y: {
            title: {
              display: true,
              text: 'Tasks Count',
              color: '#FDFFFC',
            },
            ticks: {
              color: '#FDFFFC',
            },
            beginAtZero: true,
          }
        },
        plugins: {
          legend: {
            labels: {
              color: '#FDFFFC',
            }
          }
        }
      }
    });

    // 2. Task Completion Rate (Doughnut Chart)
    const completionChart = new Chart(ctxCompletion, {
      type: 'doughnut',
      data: {
        labels: ['Completed', 'Pending'],
        datasets: [{
          label: 'Task Completion Rate',
          data: [10, 5], // Example data: replace with dynamic data
          backgroundColor: ['#4CAF50', '#F44336'],
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: '#FDFFFC',
            }
          },
        }
      }
    });

    // 3. Tasks by Status (Pie Chart)
    const statusChart = new Chart(ctxStatus, {
      type: 'pie',
      data: {
        labels: ['Pending', 'In Progress', 'Completed'],
        datasets: [{
          label: 'Task Status',
          data: [3, 4, 8], // Example data: replace with dynamic data
          backgroundColor: ['#FFEB3B', '#03A9F4', '#4CAF50'],
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: '#FDFFFC',
            }
          },
        }
      }
    });

    // 4. Task Completion Over Time (Line Chart)
    const completionTimeChart = new Chart(ctxCompletionTime, {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'], // Weeks/Time periods
        datasets: [{
          label: 'Tasks Completed',
          data: [5, 7, 3, 10], // Example data: replace with dynamic data
          fill: false,
          borderColor: '#FF5733',
          tension: 0.1,
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Week',
              color: '#FDFFFC',
            },
            ticks: {
              color: '#FDFFFC',
            }
          },
          y: {
            title: {
              display: true,
              text: 'Completed Tasks',
              color: '#FDFFFC',
            },
            ticks: {
              color: '#FDFFFC',
            },
            beginAtZero: true,
          }
        },
        plugins: {
          legend: {
            labels: {
              color: '#FDFFFC',
            }
          }
        }
      }
    });

    // Cleanup function to destroy charts when component unmounts
    return () => {
      priorityChart.destroy();
      completionChart.destroy();
      statusChart.destroy();
      completionTimeChart.destroy();
    };
  }, []);

  return (
    <div className="task-stats bg-[#011627] text-[#FDFFFC] p-4 rounded-lg shadow-lg">
      <div className="chart-container mb-8">
        <h3 className="text-lg font-semibold mb-2">Tasks by Priority</h3>
        <canvas id="priorityChart" width="400" height="200"></canvas>
      </div>

      <div className="chart-container mb-8">
        <h3 className="text-lg font-semibold mb-2">Task Completion Rate</h3>
        <canvas id="completionChart" width="400" height="200"></canvas>
      </div>

      <div className="chart-container mb-8">
        <h3 className="text-lg font-semibold mb-2">Tasks by Status</h3>
        <canvas id="statusChart" width="400" height="200"></canvas>
      </div>

      <div className="chart-container mb-8">
        <h3 className="text-lg font-semibold mb-2">Task Completion Over Time</h3>
        <canvas id="completionTimeChart" width="400" height="200"></canvas>
      </div>
    </div>
  );
}