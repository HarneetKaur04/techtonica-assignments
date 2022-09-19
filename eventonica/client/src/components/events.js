import React, {useState} from 'react'
import AddEvent from './addevent';

const event1 = {
    id: "1",
    name: "Birthday",
    date: "2022-09-01",
    description: "A birthday party for my best friend",
    category: "Celebration",
  };
  
  const event2 = {
    id: "2",
    name: "Graduation",
    date: "2022-08-01",
    description: "The class of 2021 graduates from East High",
    category: "Education",
  };
  
  const event3 = {
    id: "3",
    name: "JS Study Session",
    date: "2022-10-01",
    description: "A chance to practice Javascript interview questions",
    category: "Education",
  };

const Events = () => {

    const [events, setEvents] = useState([event1, event2, event3])
    const [deleteId, setDeleteId] = useState("")

    const handleAddEvent = (newEvent) => {
        // const newEvent = {id, name, date, description, category}
        setEvents([...events, newEvent]);

      }

      const handleDeleteButton = (deleteId) => {
        console.log(deleteId)
        const filteredEvents = events.filter((i) => i.id !== deleteId);
        setEvents(filteredEvents);
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