import React, {useState} from 'react';
import { NavItem } from 'reactstrap';
const marlin = { name: 'Marlin', email: 'marlin@gmail.com', id: '1' };
    const nemo = { name: 'Nemo', email: 'nemo@gmail.com', id: '2' };
    const dory = { name: 'Dory', email: 'dory@gmail.com', id: '3' };
const Users = () => {
    const [users, setUsers] = useState([marlin, nemo, dory])
    const [value, setValue] = useState({name: '', email: '', id: ''})
    const [deleteId, setDeleteId] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const handleInputChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { id: value.id, name: value.name, email: value.email };
        setValue({name: '', email: '', id: ''})
        setUsers([...users, newUser]);
        
      };
    const handleDeleteButton = (e) => {
      e.preventDefault();
      console.log(deleteId)
      const newUsers = users.filter((i) => i.id !== deleteId);
      setUsers(newUsers);
      }
    


  return (
    <>
    <section className="user-management">
            <h2>User Management</h2>   
            {Object.values(users).map((val, index) => (index={index} , <li>{val.name}<br/>
            {val.email}</li>))}

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
                  value={value.id} onChange={handleInputChange}type="text" id="add-user-id" />
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
                  type="text" id="delete-user-id" />
                </fieldset>
                <input type="submit" />
              </form>
            </div>
          </section>
          </>
  )
};

export default Users;