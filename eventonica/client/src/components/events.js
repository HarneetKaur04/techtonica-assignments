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

      const handleDeleteButton = (e) => {
        e.preventDefault();
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
              <ul id="events-list">
              {Object.values(events).map((val) => (<li>{val.name}<br/>
            {val.date}<br/>{val.category}<br/>*******</li>))}
              </ul>
            </div>
          </section>
        </div>

        <AddEvent handleAddEvent={handleAddEvent} />

        <div>
          <h3>Delete Event</h3>
          <form id="delete-event" onSubmit={handleDeleteButton} action="#">
            <fieldset>
              <label>Event ID</label>
              <input type="number" min="1" id="delete-event-id" onChange={(e)=> setDeleteId(e.target.value)}/>
            </fieldset>
            <input type="submit" />
          </form>
        </div>
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
    </>
  )
}

export default Events