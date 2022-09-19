import React, {useState, useEffect} from 'react';
import { NavItem } from 'reactstrap';

const Users = () => {

    const [users, setUsers] = useState([])
    const [value, setValue] = useState({name: '', email: '', id:''})
    const [deleteId, setDeleteId] = useState("")

    const getUsers = () => {
      fetch('http://localhost:2001')
        .then((res) => res.json())
        .then((data) => setUsers(data));
      };
    getUsers()

    const handleInputChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    }

    // using post request to post data to backend and then fetching the response and setting the new users and also resetting the form
    const handleSubmit = async(e) => {
        e.preventDefault();
        const newUser = { id: value.id, name: value.name, email: value.email };
        console.log(newUser)
        const rawResponse = await fetch("http://localhost:2001", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    });
    const content = await rawResponse.json();
    setUsers([...users, content]); 
    setValue({name: '', email: '', id:''})   
      };

      // handling delete button by filtering out id
    const handleDeleteButton = async (e) => {
      e.preventDefault();
      console.log(deleteId)
   
      // Simple DELETE HTTP request with async await
      let response = await fetch(`http://localhost:2001/${deleteId}`, {method: "DELETE"})
       console.log(response)
       
      }

  return (
    <>
    <section className="user-management">
            <h2>User Management</h2>   
            {users.map((val) => (
            <div class="list-wrapper"><ul class="list">
            <li class="list-item">{val.name}<br/>
            {val.email}</li></ul></div>))}

            <div>
              <h3>Add User</h3>
              <form onSubmit={handleSubmit} id="add-user" action="#">
                <fieldset>
                  <label>Name</label>
                  <input name="name" value={value.name} onChange={handleInputChange}type="text" id="add-user-name" />
                  <label>Email</label>
                  <input name="email"
                  value={value.email} onChange={handleInputChange} type="text" id="add-user-email" />
                  <label>ID</label>
                  <input name="id" 
                  value={value.id} onChange={handleInputChange}type="number" id="add-user-id" />
                </fieldset>
                <input type="submit" value="Add" />
              </form>
            </div>

            <div>
              <h3>Delete User</h3>
              <form id="delete-user" onSubmit={handleDeleteButton} action="#">
                <fieldset>
                  <label>User ID</label>
                  <input name="deleting" onChange={(e)=> setDeleteId(e.target.value)}
                  type="number" id="delete-user-id" />
                </fieldset>
                <input type="submit" />
              </form>
            </div>
          </section>
          </>
  )
};

export default Users;