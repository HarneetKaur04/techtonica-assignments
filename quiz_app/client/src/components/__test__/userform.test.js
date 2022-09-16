import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserForm from '../userform';


describe("UserForm", () => {
    it('should render UserForm component and display form fields and a button', () => {
        const mockForm = jest.fn();
        render(<UserForm value={[]} setValue={mockForm}/>)
        expect(screen.getByText("Name:")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Please enter your name")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
    });
    it('should be able to type into input', () => {
        const mockForm = jest.fn();
        render(<UserForm value={[]} setValue={mockForm}/>)
        const nameInput = screen.getByPlaceholderText("Please enter your name")
        fireEvent.change(nameInput, {target: { value: "Harneet" }})
        expect(nameInput.value).toBe("Harneet");
    });

})