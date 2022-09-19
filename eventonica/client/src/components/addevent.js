import React, {useReducer} from 'react'

const AddEvent = ({handleAddEvent}) => {
    const initialState = {
        name: "",
        date: "",
        description: "",
        category: ""
      };

      const reducer = (state, action) => {
        switch (action.type) {
          case "editName":
            return { ...state, name: action.payload };
    
          case "editDescription":
            return { ...state, description: action.payload };
    
          case "editCategory":
            return { ...state, category: action.payload };
    
          case "editDate":
            return { ...state, date: action.payload };
    
          default:
            return state;
        }
      };

    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
    <h3>Add Event</h3>
      <form
        id="add-event"
        action="#"
        onSubmit={(ev) => {
          ev.preventDefault();
          handleAddEvent(state);
          
        }}
      >
        <fieldset>
          
        <label>Event Name</label>   
          <input
            type="text"
            id="add-event-name"
            value={state.name || ""}
            onChange={(e) =>
              dispatch({
                type: "editName",
                payload: e.target.value
              })
            }
            required
          />
            <label>Date</label>
          <input
            type="date"
            id="add-event-date"
            value={state.date || ""}
            onChange={(e) =>
              dispatch({
                type: "editDate",
                payload: e.target.value
              })
            }
            required
          />
        <label>Category</label>
          <input
            type="text"
            id="add-event-category"
            value={state.category || ""}
            onChange={(e) =>
              dispatch({
                type: "editCategory",
                payload: e.target.value
              })
            }
          />
        <label>Description</label>
          <input
            type="text"
            id="add-event-description"
            value={state.description || ""}
            onChange={(e) =>
              dispatch({
                type: "editDescription",
                payload: e.target.value
              })
            }
          />
        </fieldset>
        <button >Submit</button>
      </form>
    </div>
  )
}

export default AddEvent