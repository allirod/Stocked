import { prettyDOM, render, screen } from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";

import LogIn from "../src/client/Components/LogIn";
import App from "../src/client/Containers/App";
import {store} from '../src/client/reducers/index';

describe('Login Page', () => {
    let loginPage;
    const props ={};
    beforeEach(() => {
        loginPage = render(<LogIn {...props}/>, {wrapper: BrowserRouter});
    })
    
    it('Has submit button', () => {
        const btnArray = loginPage.getAllByRole('button');
        expect(btnArray.length).toBe(1);
        expect(btnArray[0]).toHaveTextContent('Submit');
    })

    it('Contains signup link', () => {
        expect(screen.getByText(/Create an account/i)).toHaveAttribute('href');
    })
})

describe('Login Routing', () => {
    it('Routes to signup', async () => {
        const props = {};
        const app = render(<Provider store={store}><App {...props} /></Provider>);

        const user = userEvent.setup();
        expect(screen.getByText(/Create an account/i)).toBeInTheDocument();
        await user.click(screen.getByText("Create an account"));
        expect(screen.getByText(/Signup here!/i)).toBeInTheDocument();
    })
})