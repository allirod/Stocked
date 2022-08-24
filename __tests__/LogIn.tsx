import { prettyDOM, render, screen } from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from "react-router-dom";

import LogIn from "../src/client/Components/LogIn";

describe('Login Page', () => {
    let loginPage;
    const props ={};
    beforeEach(() => {
        loginPage = render(<LogIn {...props}/>, {wrapper: MemoryRouter});
    })
    
    it('Has submit button', () => {
        const btnArray = loginPage.getAllByRole('button');
        expect(btnArray.length).toBe(1);
        expect(btnArray[0]).toHaveTextContent('Submit');
    })

    it('Contains signup link', () => {
        expect(screen.getByText(/Create an account/i)).toHaveAttribute('href');
    })

    it('Re-directs to signup on click', async() => {
        const user = userEvent.setup();
        user.click(screen.getByText(/Create an account/i));
        console.log(window.location.href);
        //expect(screen.getByText(/Signup here!/i)).toBeInTheDocument();
    })
})