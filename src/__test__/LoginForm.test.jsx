import { fireEvent, render, screen } from "@testing-library/react";
import LoginForm from "../components/LoginForm.jsx" ; 
import { MemoryRouter } from 'react-router-dom';


test("render sign up form fieldes" , ()=>{
    render(<MemoryRouter><LoginForm/></MemoryRouter>) ; 

    const UserNameInput = screen.getByPlaceholderText("Enter your username") ;
    const PasswordInput = screen.getByPlaceholderText("Enter your password") ;
    const LoginBtn = screen.getByRole('button' , {name: "Login"}) ; 

    expect(UserNameInput).toBeInTheDocument() ; 
    expect(PasswordInput).toBeInTheDocument() ; 
    expect(LoginBtn).toBeInTheDocument() ; 
});

test("login state update", ()=>{
    render(<MemoryRouter><LoginForm/></MemoryRouter>) ;

    const UserNameInput = screen.getByPlaceholderText("Enter your username") ;
    const PasswordInput = screen.getByPlaceholderText("Enter your password") ;

    fireEvent.change(UserNameInput , { target: { value: "noran" } }) ; 
    fireEvent.change(PasswordInput , { target: { value: "12345678" } }) ; 

    expect(UserNameInput.value).toBe('noran') ; 
    expect(PasswordInput.value).toBe('12345678') ; 
});