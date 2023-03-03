import {React, useState} from 'react'
import { Dropdown } from "rsuite";
import "rsuite/dist/rsuite.min.css";

export default function SelectLanguage(){
    return (
        <div className="select-box">
            <h3>Choose your language</h3><br/>
            <Dropdown title="Language">
                <Dropdown.Item as="a" href=
                "http://localhost:3000/phrase/phrase1">
                    Gaeilge (Irish)
                </Dropdown.Item>
                <Dropdown.Item>Español (Spanish)</Dropdown.Item>
                <Dropdown.Item>Français (French)</Dropdown.Item>
                <Dropdown.Item>Deutsch (German)</Dropdown.Item>
                <Dropdown.Item>Русский (Russian)</Dropdown.Item>
                <Dropdown.Item>普通话 (Mandarin)</Dropdown.Item>
            </Dropdown>
            <br/>
        </div>
    );
}