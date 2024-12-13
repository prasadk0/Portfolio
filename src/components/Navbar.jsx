import React, { useContext, useReducer, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faUser } from '@fortawesome/free-solid-svg-icons';
import { DialogContext } from "./DialogContent";
import Content from './Content'
import Project from "./Projects";
import ContactUs from "./ContactUs";
import SocialMediaLinks from "./SocialMediaLinks";

const reducer = (state,action)=>{
   switch(action.type){
    case 'SET_SECTION':
    return { ...state, activeSection: action.section };
    default:
    return state;
   }
}
const initialState = { activeSection: 'about' };
export default function Navbar({darkMode,setDarkMode}){
    const [state,dispatch]=useReducer(reducer,initialState)
    const {openDialog}= useContext(DialogContext);
    return(
    <>
    <div className={`flex flex-row justify-between`}>
        <p className="underline">Portfolio
        <button onClick={() => setDarkMode((prevMode) => !prevMode)}>
        <FontAwesomeIcon className="px-4" icon={darkMode ? faSun : faMoon} style={{ color: darkMode ? 'yellow' : 'gray' }} />
        </button>
        </p>
       <div className="flex flex-row">
       <p className="p-2 cursor-pointer" onClick={() => { dispatch({ type: 'SET_SECTION', section: 'contact' })}} >Contact</p>
        <p className="p-2 cursor-pointer" onClick={() => { dispatch({ type: 'SET_SECTION', section: 'project' })}} >Projects</p>
        <p className="p-2 cursor-pointer"   onClick={()=>{openDialog()}}><FontAwesomeIcon className="px-2" icon={faUser} />Prasad Khairnar</p>
       </div>
    </div> 
    <div>
    <Content/>
    <div>{state.activeSection === 'project' && <Project/>}</div>
    <div>{state.activeSection === 'contact' && <ContactUs/>}</div>
    </div>
    <SocialMediaLinks/>
    </>
    )
}