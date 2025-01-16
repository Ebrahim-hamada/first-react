import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from "@fortawesome/free-solid-svg-icons"

const About = () => {
  return (
    <>
    <div className="section d-flex justify-content-center align-items-center text-white mt-5 pt-5 vh-100">
        <div className="text-center">
            <div className="text-center pt-4">
                <h1 className="sizing text-uppercase">About component</h1>
                <div className="d-flex align-items-center justify-content-center mb-3">
                    <div className="line me-3 bg-white"></div>                    
                    <FontAwesomeIcon icon={faStar} />             
                     <div className="line ms-3 bg-white"></div>
                </div>
            </div>
            <div className="w-75 m-auto">
              <div className="row m-0">
                <div className="col-md-6 ">
                  <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className="col-md-6">
                  <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About
