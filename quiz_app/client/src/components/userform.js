import { useState } from "react";

const UserForm = ({grabUser}) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    grabUser(value);
    console.log(value);
    setValue("");
  };



  return (
      <div className= "header">
        <form  onSubmit={handleSubmit}>
          <input 
            type="text"
            placeholder="Please enter your name"
            className="input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
  );
};

export default UserForm;