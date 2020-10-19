import React from 'react'
import './style.css'
function Services() {
    return (
        <div className="services" id="services">
            <label>What We Do</label>
            <p>
                At Softimpact, we develop innovative and creative products and services
                that provide total communication and information solutions. Among a plethora
                 of services. Satisfied clients around the globe bear testimony to the quality of
                   our work.
                       </p>
            <div className="flip-card-main">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className="icon">
                                <img src={require('./images/icon1.png')} />
                            </div>
                            <h3 className="flip-h3">DESIGN</h3>
                            <p>"Don’t bunt. Aim out of the ballpark.
                                Aim for the company of immortals.
                                " -- David Ogilvy, advertising tycoon,
                                known as the "Father of Advertising"</p>
                        </div>
                        <div className="flip-card-back">
                            <img src={require('./images/4.jpg')} />
                            <h3>Muhammad Omer</h3>
                            <p>UI Designer</p>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className="icon">
                            <img src={require('./images/icon2.png')} />
                            </div>
                            <h3 className="flip-h3">DEVELOPMENT</h3>
                            <p>"Don’t bunt. Aim out of the ballpark.
                                Aim for the company of immortals.
                                " -- David Ogilvy, advertising tycoon,
                                known as the "Father of Advertising"</p>
                        </div>
                        <div className="flip-card-back">
                        <img src={require('./images/5.JPEG')} />
                            <h3>Muhammad Usman</h3>
                            <p>FrontEnd_Developer</p>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className="icon">
                            <img src={require('./images/icon3.png')} />
                            </div>
                            <h3 className="flip-h3">BRANDING</h3>
                            <p>"Don’t bunt. Aim out of the ballpark.
                                Aim for the company of immortals.
                                " -- David Ogilvy, advertising tycoon,
                                known as the "Father of Advertising"</p>
                        </div>
                        <div className="flip-card-back">
                        <img src={require('./images/9.jpg')} />
                            <h3>Hayat Khan</h3>
                            <p>BRANDING</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
