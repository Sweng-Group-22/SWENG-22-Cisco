import React from 'react'
import { Dropdown } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import '../styles/SelectLanguage.css'

export default function SelectLanguage(){
    return (
        <div className="select-box">
            <h className='choose-language'>Choose your language</h><br/>
            <Dropdown title="Language">
                <Dropdown.Item as="a" href=
                "http://localhost:3000/phrase/get">
                    Gaeilge (Irish)
                </Dropdown.Item>
            </Dropdown>
            <br/>
        </div>
    );g
}