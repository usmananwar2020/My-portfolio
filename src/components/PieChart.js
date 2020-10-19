import React from 'react'
import { Pie } from 'react-chartjs-2'
import './chart.css'
function PieChart() {
    const data = {
        labels: ['muharam', 'safer', 'rabiulawal', 'rabiusani', 'jamadiuawal', 'jamadiusani'],
        datasets: [
            {
                label: 'sales in 2010 (M)',
                data: [3, 2, 5, 5, 6, 4],
                backgroundColor: ['#FF3535', 
                '#EAFF35',
                '#4DFF35',
                '#35FFEA',
                '#353BFF',
                '#FF35ED'
            ]
            }
        ]
    }
    
    return (
        <div className="PieChart">
            <Pie data={data} />
        </div>
    )
}

export default PieChart
