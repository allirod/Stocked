import { MutableRefObject, ReactComponentElement } from "react";

export type AppProps = {};

export type LogInProps = {
    loggedIn: boolean,
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
};

export type SignUpProps = {
    loggedIn: boolean,
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
};

export type InputBoxProps = {
    type?: 'text' | 'password',
    label: string,
    id: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}