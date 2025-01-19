import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar , faPlus} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";

const Protfolio = () => {

  const [popupImage, setPopupImage] = useState(null);

  const images = [
    { id: 1, src: "public/img/poert1.png", alt: "House" },
    { id: 2, src: "public/img/port2.png", alt: "cake" },
    { id: 3, src: "public/img/port3.png", alt: "tent" },
  ];

  const showImage = (imageSrc) => {
    setPopupImage(imageSrc);
  };

  const hideImage = () => {
    setPopupImage(null);
  };


  return (
    <>
    <div>
      <div className="text-center mt-5">
            <div className="text-center pt-4">
                <h1 className="sizing text-uppercase mt-5 fa-2">portfolio component</h1>
                <div className="d-flex align-items-center justify-content-center mb-3">
                    <div className="line me-3 bg-black"></div>                    
                    <FontAwesomeIcon icon={faStar} />             
                     <div className="line ms-3 bg-black"></div>
                </div>
            </div>
      </div>
      <div className="container mb-4">   
        <div className="row g-4">
                {images.map((image) => (
                  <div key={image.id} className="col-lg-4 col-md-6" onClick={() => showImage(image.src)}>
                    <div className="parent">
                    <img src={image.src} alt={image.alt} className="responsive-img" />
                      <div className="overlay fs-5 ">
                       <FontAwesomeIcon icon={faPlus} className='faPlus' />
                      </div> 
                    </div>  
                  </div>
                ))}
                {images.map((image) => (
                  <div key={image.id} className="col-lg-4 col-md-6" onClick={() => showImage(image.src)}>
                    <div className="parent">
                    <img src={image.src} alt={image.alt} className="responsive-img" />
                      <div className="overlay fs-5 ">
                       <FontAwesomeIcon icon={faPlus} className='faPlus' />
                      </div> 
                    </div>  
                  </div>
                ))}
        </div>           
        {popupImage && (
          <div className="popup" onClick={hideImage}>
            <div className="popup-content">
              <img src={popupImage} alt="Popup" />
            </div>
          </div>
        )}
      </div>
    </div>
       </>
  )
}

export default Protfolio
