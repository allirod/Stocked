import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from "./NavBar";
import '../styles/MainContent.scss';

const MainContent = () => {
    return(
        <div className='main_content_div'>
            <NavBar/>
            <Outlet/>
        </div>
    )
}

export default MainContent;

