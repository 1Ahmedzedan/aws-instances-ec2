import { render, screen } from "@testing-library/react";
import SignupForm from "../components/SignupForm.jsx" ; 
import { MemoryRouter } from 'react-router-dom';


test("render login form fieldes" , ()=>{
    render(<MemoryRouter><SignupForm/></MemoryRouter>) ; 

    const UserNameInput = screen.getByPlaceholderText("Enter your username") ;
    const EmailInput = screen.getByPlaceholderText("Enter your Email") ; 
    const PasswordInput = screen.getByPlaceholderText("Enter your password") ;
    const ConfirmPasswordInput = screen.getByPlaceholderText("confirm your password") ;
    const  MaleRadio = screen.getByLabelText("Male") ; 
    const  FeMaleRadio = screen.getByLabelText("Female") ; 
    const SubmitBtn = screen.getByRole('button' , {name: "Submit"}) ; 

    expect(UserNameInput).toBeInTheDocument() ; 
    expect(EmailInput).toBeInTheDocument() ; 
    expect(PasswordInput).toBeInTheDocument() ; 
    expect(ConfirmPasswordInput).toBeInTheDocument() ; 
    expect(MaleRadio).toBeInTheDocument() ; 
    expect(FeMaleRadio).toBeInTheDocument() ; 
    expect(SubmitBtn).toBeInTheDocument() ; 
});