import React,{useState,useEffect} from 'react'
import './NavBar.css'
function NavBar() {
    const [show,handleShow] = useState(false)
    
    const transitionNavBar = () => {
        if (window.scrollY > 100){
            handleShow(true)
        }else{
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',transitionNavBar)
        return () => window.removeEventListener('scroll',transitionNavBar)
    }, [])


    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__content">
            <img className="nav__logo" src="https://www.pngjoy.com/pngm/537/8356716_netflix-logo-graphic-design-transparent-png.png" alt="no image" />
            
            <img className="nav__avatar" src="https://i.pinimg.com/originals/1b/54/ef/1b54efef3720f6ac39647fc420d4a6f9.png" alt="no image" />
            </div>
        </div>
    )
}

export default NavBar
