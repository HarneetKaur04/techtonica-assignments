import React, {useState} from 'react'
import AddEvent from './addevent';



const Events = () => {

    const [events, setEvents] = useState([])
    const [filteredData,setFilteredData] = useState(events);
    const [search, setsearch] = useState(false)


    const getEvents = () => {
      fetch('http://localhost:2001/events')
        .then((res) => res.json())
        .then((data) => setEvents(data));
      };
      getEvents()

    const handleAddEvent = async (newEvent) => {
      const eventresponse = await fetch("http://localhost:2001/events", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEvent)
    });
    const eventcontent = await eventresponse.json(); 
    setEvents([...events, eventcontent]) 
   
      }

    const handleDeleteButton = async (deleteId) => {
        console.log(deleteId)
        let response = await fetch(`http://localhost:2001/events/${deleteId}`, {method: "DELETE"})
        console.log(response)
        }
      
    const handleSearch = async(event) => {
      setsearch(true)
      let value = event.target.value;
      let result = [];
      console.log(value);
      result = events.filter((data) => {
      return data.category.toLowerCase().startsWith(value.toLowerCase());
      });
      setFilteredData(result);

        }


  return (
    <>
        <div className="user-and-events">
          <section className="event-management">
            <h2>Event Management</h2>
            <div class="wrap">
   <div class="search">
      <input type="text" class="searchTerm" placeholder="What category are you looking for?" onChange={(handleSearch)}/>
      <button type="submit" class="searchButton">
      <i class="fa-solid fa-magnifying-glass"></i>
     </button>
   </div>
</div>
            <div>
              <h3>Your Events Details</h3>
              {search? (filteredData.map((val) => (<div class="card"><input id="star1" class="star" type="checkbox" title="bookmark page"/><br/><br/><strong>{val.name}</strong><br/>
            {val.date}<br/>Category: {val.category}<br/>{val.description}<br/><button type="delete" onClick={() => handleDeleteButton(val.id)}>Delete</button ><button type="edit">Edit</button> </div>))): (events.map((val) => (<div class="card"><input id="star1" class="star" type="checkbox" title="bookmark page"/><br/><br/><strong>{val.name}</strong><br/>
            {val.date}<br/>Category: {val.category}<br/>{val.description}<br/><button type="delete" onClick={() => handleDeleteButton(val.id)}>Delete</button ><button type="edit">Edit</button> </div>)))}
              
            </div>
            
          </section>
        </div>


        <AddEvent handleAddEvent={handleAddEvent} />

        
    </>
  )
}


export default Events