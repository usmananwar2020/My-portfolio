import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import About from './About';
import Services from './Services';
import Achievements from './Achievements';
import Portfolio from './Portfolio';
import './style.css'
function Home() {
    // <script type="text/javascript">
    useEffect(() => {
        window.addEventListener('scroll', function () {
            var header = document.getElementById('header');
            header.classList.toggle('sticky', window.scrollY > 0);

            var topBtn = document.getElementById('top-btn');
            topBtn.classList.toggle('topBtnShow', window.scrollY > 500);
        }
        )
    }, [])
    // </script>
    return (
        <div>
            <div className="Container" id="home">
                <div className="navbar" id='header'>
                    <div className="logo" >MY WORK</div>
                    <div className="menu" > <Router><ul ><li ><Link smooth to='#home'>Home</Link></li>
                        <li ><Link smooth to='#about'> About</Link></li>
                        <li ><Link smooth to='#services'>Services</Link></li>
                        <li ><Link smooth to='#achievements'>Achievements</Link></li>
                        <li ><Link smooth to='#portfolio'>Portfolio</Link> </li> </ul></Router>
                    </div>
                </div>
                <h1 className="slider-heading">We Are <br /><br /><p><br />Professional<br /></p><br /><br /> Web Developers</h1>
                < About />
                <Services />
                <Achievements />
                <Portfolio />
            </div>
            <div className="top-btn" id='top-btn'>
                <Router>
                    <Link smooth to='#home'>
                        <img src={require("./images/top.png")}></img></Link></Router>
            </div>
        </div>
    )

}

export default Home
