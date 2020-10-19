import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import './chart.css'
function DoughnutChart() {
    const data = {
        labels: ['muharam', 'safer', 'rabiulawal', 'rabiusani', 'jamadiuawal', 'jamadiusani'],
        datasets: [
            {
                label: 'sales in 2010 (M)',
                data: [3, 2, 5, 2, 6, 4],
                backgroundColor: [
                    '#FE35ED',
                    '#EAEF35',
                    '#35FEEA',
                    '#353BEF',
                    '#4DFE35',
                    '#FE3535'
                ]
            }
        ]
    }
    
    return (
        <div className="DoughnutChart">
            <Doughnut data={data} />
        </div>
    )
}

export default DoughnutChart
