import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddEvent from "../addevent";
import Events from "../events";

describe("Events", ()=> {
    it('should render add event component and display form fields and a button', () => {
        const mockEventForm = jest.fn();
        render(<AddEvent />)
        expect(screen.getByText("Event Name")).toBeInTheDocument();
    });
    it('should render new event added and display new event when clicked on submit button', () => {
        const mockEventForm = jest.fn();
        render(<Events />)
        const buttonElement = screen.getByRole("button", {name: /Submit/i })
        const inputEventElement = screen.getByTestId("add-event-name")
        fireEvent.change(inputEventElement, {target: {value:"Thanksgiving Party"}})
        const inputDateElement = screen.getByTestId("add-event-date")
        fireEvent.change(inputDateElement, {target: {value:"2022-10-20"}})
        fireEvent.click(buttonElement)
        const newEventCreated = screen.getByDisplayValue(/Thanksgiving Party/i)
        const newEventDateCreated = screen.getByDisplayValue(/2022-10-20/i)
        
    });

})