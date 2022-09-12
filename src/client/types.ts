import { MutableRefObject } from "react";

export type AppProps = {};

export type LogInProps = {};

export type SignUpProps = {};

export type InputBoxProps = {
    type?: 'text' | 'password',
    label: string,
    id: string,
    htmlRef: MutableRefObject<null | HTMLInputElement>,
}