import React, {useState} from "react";
import "./form.css";
import Weather from './weather.js'

export default function Form({values, handleChange, handleSubmit, submitted, options}) {
    const [formButton, setFormButton] = useState(false)


const handleSubmitButtonForm = () => {
    setFormButton(true)
}

  return (
    <div className="form-container">
      
       
      {submitted && <div class='success-message'>Success! Thank you !</div>}

        <label > Name  
            <input
          id="first-name"
          className="form-field"
          type="text"
          minLength="3"
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}  
            />
        </label>
        {formButton && !values.firstName && <span id="first-name-error">Please enter a first name</span>}
        
        <label > Email  
            <input
            id="last-name"
            className="form-field"
            type="text"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            />
        </label>
       {formButton && !values.email && <span id="email-error">Please enter an email address</span>}
        
        <label > Select Options </label >
            <select id="option-change" name="options" value={values.options} onChange={handleChange} className="form-field" > 
            <option value="">Select Options</option>
            {options.map((item) => (<option key={item}>{item}</option>))}
            </select>
        <button className="form-field" onClick={handleSubmitButtonForm}>Submit</button>
        
        {formButton && values.options === "Current Weather" && values.firstName && values.email? (
        <Weather values={values} />):  null}
        
     
    </div>
  );
}