import { Outlet } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from "@fortawesome/free-solid-svg-icons"

const Home = () => {
  return (
    <>
    <div className="section d-flex justify-content-center align-items-center text-white vh-100">
        <div className="text-center pt-5">
            <img src="public/img/avataaars.svg"  className="mb-3 main-photo" alt="image" />
            <div className="pt-4">
                <h1 className="sizing text-uppercase">start Framework</h1>
                <div className="d-flex align-items-center justify-content-center mb-3">
                    <div className="line me-3 bg-white"></div>                    
                    <FontAwesomeIcon icon={faStar} />             
                     <div className="line ms-3 bg-white"></div>
                </div>
            </div>
            <div>Graphic Artist - Web Designer - Illustrator</div>
        </div>
    </div>
    <Outlet/>
    </>
  )
}

export default Home
