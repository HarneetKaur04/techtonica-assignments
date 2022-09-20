import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Users from "../users";

describe("Users", ()=> {
    it('should render add user component and display form fields and a button', () => {
        const mockAddForm = jest.fn();
        render(<Users />)
        expect(screen.getByText("Name")).toBeInTheDocument();
        expect(screen.getByText("Email")).toBeInTheDocument();
        expect(screen.getByText("ID")).toBeInTheDocument();
        expect(screen.getByText("Add")).toBeInTheDocument();
    });
    it('user add form should be able to type into input', () => {
        const mockForm = jest.fn();
        render(<Users value={[]} setValue={mockForm}/>)
        const nameInput = screen.getByTestId("add-user-name")
        fireEvent.change(nameInput, {target: { value: "Mona" }})
        expect(nameInput.value).toBe("Mona");
    });

})