import React, {useState} from 'react'
import AddEvent from './addevent';



const Events = () => {

    const [events, setEvents] = useState("")

    const getEvents = () => {
      fetch('http://localhost:2001/events')
        .then((res) => res.json())
        .then((data) => setEvents(data.events));
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
    console.log("eventcontent" , eventcontent)    
   
      }

      const handleDeleteButton = async (deleteId) => {
        console.log(deleteId)
        let response = await fetch(`http://localhost:2001/events/${deleteId}`, {method: "DELETE"})
        console.log(response)
        }


  return (
    <>
        <div className="user-and-events">
          <section className="event-management">
            <h2>Event Management</h2>
            <div>
              <h3>All Events</h3>
              
              {Object.values(events).map((val) => (<div class="card"><input id="star1" class="star" type="checkbox" title="bookmark page"/><br/><br/><strong>{val.name}</strong><br/>
            {val.date}<br/>{val.category}<br/><button type="delete" onClick={() => handleDeleteButton(val.id)}>Delete</button ><button type="edit">Edit</button> </div>))}
            </div>
            
          </section>
        </div>

        <AddEvent handleAddEvent={handleAddEvent} />

        <div>
    
        <aside className="search-toolbar">
          <div>
            <h3>Find Events</h3>
            <form id="search" action="#">
              <fieldset>
                <label htmlFor="date-search">Date</label>
                <input type="text" id="date-search" placeholder="YYYY-MM-DD" />
              </fieldset>
              <fieldset>
                <label htmlFor="category-search">Category</label>
                <input type="text" id="category-search" />
              </fieldset>

              <input type="submit" value="Search" />
            </form>
          </div>
        </aside>
        </div>
    </>
  )
}


export default Events