import { useState } from "react";

const UserForm = ({value, handleFormInputChange, handleSubmit}) => {
    const categoryOptions = [{label:"General Knowledge", optionValue: 9}, {label:"Science", optionValue:19}, {label:"Sports", optionValue:21}, {label:"Animals", optionValue:27}, {label:"Celebrities", optionValue:26}]


  return (
      <div className= "header">
        <form onSubmit={handleSubmit}>
         <label>Name:</label>
          <input type="text" name="name" placeholder="Please enter your name" className="input" value={value.name} onChange={handleFormInputChange}
          />
        <label>Number of Questions:</label>
          <input type="text" name="numberOfQuestions" className="input" value={value.numberOfQuestions} onChange={handleFormInputChange}
          />
        <label>Select Category:</label>
          <select name="category" className="input" value={value.category} onChange={handleFormInputChange} required>
        
        {categoryOptions.map((preference) => (
          <option value={preference.optionValue} key={preference.label}>{preference.label} </option>
        ))}
        </select>

        <button type="submit" >Submit</button>
        </form>
      </div>
  );
};

export default UserForm;