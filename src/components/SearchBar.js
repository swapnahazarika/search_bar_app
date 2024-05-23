import React, {useEffect, useState} from "react";

const SearchBar = ({onSearch}) => {
    const[searchTerm, setSearchTerm] = useState('');
    const handleChange =(event) => {
        setSearchTerm(event.target.value);
    };
    useEffect(() => {
        onSearch(searchTerm);
    },[searchTerm,onSearch])
    return(
        <input type="text" placeholder="Search..." value={searchTerm} onChange={handleChange}/>
    );
}
export default SearchBar;