import {React, useState} from 'react'
import "../styles/SelectBox.css";
import Select from "react-select";

export default function SelectPhrase(){
    // Manage selected options
    const [selectedOptions, setSelectedOptions] = useState({});
    // Array of options
    const phraseList = [
        { value: "cameraOn", label: "Turn on Camera" },
        { value: "cameraOff", label: "Turn off Camera" },
        { value: "mute", label: "Mute" },
        { value: "unmute", label: "Unmute" },
        { value: "handOn", label: "Raise Hand" },
        { value: "handOff", label: "Lower Hand" },
        { value: "openChat", label: "Chat" }
    ];
    // Function triggered on selection
    function handleSelect(data) {
        setSelectedOptions(data);
    }
    return (
        <div className="select-box">
            <h2>Select a phrase</h2>
            <div className="dropdown-container">
                <Select 
                    options={phraseList}
                    placeholder="Select phrase"
                    value={selectedOptions}
                    onChange={handleSelect}
                    isSearchable={true}
                />
            </div>
        </div>
    );
}