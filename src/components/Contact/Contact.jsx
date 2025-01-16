import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    username: '',
    useremail: '',
    userage: '',
    userpassword: '',
  });

  const [errors, setErrors] = useState({});

  const placeholders = {
    username: 'userName',
    useremail: 'userEmail',
    userage: 'userAge',
    userpassword: 'userPassword',
  };

  const regexValidators = {
    username: /^[a-zA-Z ]{3,}$/,
    useremail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    userage: /^[1-9][0-9]?$/,
    userpassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
  };

  const errorMessages = {
    username: 'Name must be at least 3 characters.',
    useremail: 'Enter a valid email address.',
    userage: 'Age must be a number between 1 and 99.',
    userpassword: 'Password must have at least 8 characters, including uppercase and lowercase letters.',
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });

    if (regexValidators[field]) {
      if (!regexValidators[field].test(value)) {
        setErrors((prev) => ({ ...prev, [field]: errorMessages[field] }));
      } else {
        setErrors((prev) => ({ ...prev, [field]: '' }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    for (const field in formData) {
      if (regexValidators[field] && !regexValidators[field].test(formData[field])) {
        newErrors[field] = errorMessages[field];
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert('Form submitted successfully!');
    } else {
      alert('Please fix the errors before submitting.');
    }
  };

  return (
    <>
      <div className="my-5">
        <div className="text-center">
          <div className="text-center pt-4">
            <h1 className="sizing text-uppercase mt-5">Contact Section</h1>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="line me-3 bg-black"></div>
              <FontAwesomeIcon icon={faStar} />
              <div className="line ms-3 bg-black"></div>
            </div>
          </div>
        </div>
        <div className="row m-0">
          <div className="col-lg-6 offset-lg-3">
            <form onSubmit={handleSubmit}>
              {Object.keys(formData).map((field) => (
                <div key={field} className="position-relative my-5">
                  {formData[field] && (
                    <label htmlFor={field} className="form-label">
                      {placeholders[field]}
                    </label>
                  )}
                  <input
                    type={field === 'userpassword' ? 'password' : field === 'userage' ? 'number' : 'text'}
                    id={field}
                    className={`form-control border-0 border-bottom py-2 position-relative ${
                      errors[field] ? 'is-invalid' : ''
                    }`}
                    placeholder={!formData[field] ? placeholders[field] : ''}
                    value={formData[field]}
                    onChange={(e) => handleInputChange(field, e.target.value)}
                  />
                  {errors[field] && <div className="invalid-feedback">{errors[field]}</div>}
                </div>
              ))}
              <button type="submit" className="btn btn-success">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
