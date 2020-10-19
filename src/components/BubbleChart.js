import React from 'react'
import { Bubble } from 'react-chartjs-2'
import './chart.css'
function BubbleChart() {
    const data = {
        labels: ['muharam', 'safer', 'rabiulawal', 'rabiusani', 'jamadiuawal', 'jamadiusani'],
        datasets: [
            {
                label: 'sales in 2010 (M)',
                borderColor: ' #9b93ee',
                backgroundColor: '#bbb7e6',
                pointBackgroundColor: '#3030b4',
                pointBorderColor: 'bule',
                data: [{ x: 5, y: 5, r: 50 }]
            }, {
                label: 'sales in 2011 (M)',
                data: [{ x: 4, y: 2, r: 30 }],
                borderColor: '#6ff2a1 ',
                backgroundColor: '#aaf0c5',
                pointBackgroundColor: '#71bdbd',
                pointBorderColer: 'green'
            }, {
                label: 'sales in 2012 (M)',
                data: [{ x: 1, y: 2, r: 10 }],
                borderColor: '#f7ee5c ',
                backgroundColor: '#e8e38c',
                pointBackgroundColor: '#a6ac3a',
                pointBorderColer: 'yellow'
            },{
                label: 'sales in 2013 (M)',
                data: [{ x: 3.5, y: 3.5, r: 25 }],
                borderColor: '#ff9393 ',
                backgroundColor: '#fab2b2',
                pointBackgroundColor: '#a6ac3a',
                pointBorderColer: 'yellow'
            }
        ]
    }
    const option = {
        title:{
            display : true,
            text : 'Bubble Chart'
        },
        scales:{
            xAxes:[
                {
                    ticks:{
                        min:0,
                        max:6,
                        stepSize:1
                    }
                }
            ],
            yAxes:[
                {
                    ticks:{
                        min:0,
                        max:8,
                        stepSize:1
                    }
                }
            ]
        }
    }
    return (
        <div className="BubbleChart">
            <Bubble data={data} options={option} />
        </div>
    )
}

export default BubbleChart
