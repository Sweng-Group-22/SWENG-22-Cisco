import {React, useState} from 'react'
import "../styles/Search.css";
import Select from "react-select";

export default function Search(){
    // Manage selected options
    const [selectedOptions, setSelectedOptions] = useState({});
    // Array of options
    const optionList = [
        { value: "irish", label: "Gaeilge (Irish)" },
        { value: "english", label: "English" },
        { value: "spanish", label: "Español (Spanish)" },
        { value: "french", label: "Français (French)" },
        { value: "german", label: "Deutsch (German)" },
        { value: "russian", label: "Русский (Russian)" },
        { value: "mandarin", label: "普通话 (Mandarin)" }
    ];
    // Function triggered on selection
    function handleSelect(data) {
        setSelectedOptions(data);
    }
    return (
        <div className="search">
            <h2>Choose your language</h2>
            <div className="dropdown-container">
                <Select 
                    options={optionList}
                    placeholder="Select language"
                    value={selectedOptions}
                    onChange={handleSelect}
                    isSearchable={true}
                />
            </div>
        </div>
    );
}