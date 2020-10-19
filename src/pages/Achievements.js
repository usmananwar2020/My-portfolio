import React from 'react'
import './style.css'
import CountUp from 'react-countup';
function Achievements() {
    return (
        <div className="achievements-main">
            <div className="achievements" >
                <label id="achievements">Our Achievements</label>
                <p>
                    At Softimpact, we develop innovative and creative products and services
                    that provide total communication and information solutions. Satisfied clients around the globe bear testimony to the quality of
                       our work.</p>
            </div>
            <div className="counter">
                <div className="countUp"><CountUp end={1200} duration={4} suffix="+"></CountUp><p>PROJECTS</p></div>
                <div className="countUp"><CountUp end={800} duration={4} suffix="+"></CountUp><p> HAPPY CLIENTS </p></div>
                <div className="countUp"><CountUp end={150} duration={3} suffix="+"></CountUp> <p>COUNTIES</p></div>
                <div className="countUp"> <CountUp end={50} duration={2} suffix="+"></CountUp><p> AWARDS</p></div>
            </div>
        </div>
    )
}

export default Achievements
