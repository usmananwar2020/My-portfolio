import React from 'react'
import './style.css'
function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
                <label>Recent Work</label>
                <p>
                    At Softimpact, we develop innovative and creative products and services
                    that provide total communication and information solutions. Among a plethora
                     of services.
                       </p>
                <div className="flip-card-main">
                    <div className="flip-card-port">
                        <div className="flip-card-inner">
                        <a href="https://react-with-redux1.vercel.app/" target="_blank">
                            <div className="flip-card-front">
                                <div className="icon">
                                <img src={require('./images/icon4.png')} />
                                </div>
                                <h3 className="h3-title">WORLD BIGGEST IMAGES POOL</h3>
                            </div>
                            </a>
                        </div>
                    </div>
                    <div className="flip-card-port">

                        <div className="flip-card-inner">
                            <a href="https://recipe-app-psi.vercel.app/" target="_blank">
                                <div className="flip-card-front">
                                    <div className="icon">
                                    <img src={require('./images/icon5.jpg')} />
                                    </div>
                                    <h3 className="h3-title">HOW TO COOK DELICIOUS</h3>
                                </div>
                            </a></div>

                    </div>
                    <div className="flip-card-port">
                        <div className="flip-card-inner">
                        <a href="https://react-with-redux1.vercel.app/" target="_blank">
                            <div className="flip-card-front">
                                <div className="icon">
                                <img src={require('./images/icon6.png')} />
                                </div>
                                <h3 className="h3-title">FOOD RECIPE WEB_APP</h3>
                            </div>
                            </a>
                        </div>
                    </div>
                    <div className="flip-card-port">
                        <div className="flip-card-inner">
                        <a href="https://weather-app-gamma-azure.vercel.app/" target="_blank">
                            <div className="flip-card-front">
                                <div className="icon">
                                <img src={require('./images/icon7.png')} />
                                </div>
                                <h3 className="h3-title">WEATHER CHEAKER</h3>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flip-card-main">
                    <div className="flip-card-port">
                        <div className="flip-card-inner">
                        <a href="https://user-info.vercel.app/" target="_blank">
                            <div className="flip-card-front">
                                <div className="icon">
                                <img src={require('./images/icon8.png')} />
                                </div>
                                <h3 className="h3-title">USER MANAGEMENT</h3>
                            </div>
                            </a>
                        </div>
                    </div>
                    <div className="flip-card-port">
                        <div className="flip-card-inner">
                        <a href="https://user-info.vercel.app/" target="_blank">
                            <div className="flip-card-front">
                                <div className="icon">
                                <img src={require('./images/icon9.png')} />
                                </div>
                                <h3 className="h3-title">EMPLOYEE RECORD MANAGER</h3>
                            </div>
                            </a>
                        </div>
                    </div>
                    <div className="flip-card-port">
                        <div className="flip-card-inner">
                        <a href="https://user-info.vercel.app/" target="_blank">
                            <div className="flip-card-front">
                                <div className="icon">
                                <img src={require('./images/icon10.png')} />
                                </div>
                                <h3 className="h3-title">CONTECT MANAGER</h3>
                            </div>
                            </a>
                        </div>
                    </div>
                    <div className="flip-card-port">
                        <div className="flip-card-inner">
                        <a href="#" target="_blank">
                            <div className="flip-card-front">
                                <div className="icon">
                                <img src={require('./images/icon11.png')} />
                                </div>
                                <h3 className="h3-title">ANIMATED WEBSITE</h3>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
    )
}

export default Portfolio
