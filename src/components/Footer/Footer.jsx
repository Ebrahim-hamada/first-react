import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook ,faTwitter ,faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="row m-4">
                <div className="col-12 col-md-4">
                    <div className=" text-center p-4">
                        <h3>LOCATION</h3>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                </div>

                <div className="col-12 col-md-4">
                    <div className=" text-center p-4">
                        <h3>AROUND THE WEB</h3>
                        <div className="icons d-flex justify-content-center align-items-center">
                        <ul className="d-flex mt-2 p-0">
                                <li className="ico-circle-box pe-2">
                                     <a href="" className="icon-social">
                                        <span className="ico-circle">
                                            <FontAwesomeIcon icon={faFacebook} />
                                        </span>
                                    </a>
                                </li>
                                <li className="ico-circle-box pe-2">
                                    <a href="">
                                        <span className="ico-circle">
                                            <FontAwesomeIcon icon={faGlobe} />
                                        </span>
                                    </a>
                                </li>
                                <li className="ico-circle-box pe-2">
                                    <a href="">
                                        <span className="ico-circle">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </span>
                                    </a>
                                </li>
                                <li className="ico-circle-box pe-2">
                                    <a href="">
                                        <span className="ico-circle">
                                            <FontAwesomeIcon icon={faLinkedin} />
                                        </span>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-4">
                    <div className=" text-center p-4">
                        <h3>ABOUT FREELANCER</h3>
                        <p> Freelance is a free to use, licensed Bootstrap theme created by Route </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer2 text-white">
            <p className="p-3 m-0 text-center">Copyright © Your Website 2021</p>
        </div>
    </>
  )
}

export default Footer
