import React,{useState,useEffect} from 'react';
import SearchBar from "./SearchBar";
import ContactList from './ContactList';

const ImplSearchBar = () => {
    const [contacts , setContacts] = useState([]);
    const[filteredContacts , setFilteredContacts] = useState([]);
    useEffect(() => {

        fetch("https://randomuser.me/api/?results=20&inc=name,picture,id,cell&nat=in")
        .then(response => response.json())
        .then(data => {
            setContacts(data.results);
            setFilteredContacts(data.results);
        })
        .catch(error => console.error("Error Fetching Data:" , error));
    },[]);

    const handleSearch = (searchTerm) => {
        const filtered = contacts.filter(contact =>
          `${contact.name.first} ${contact.name.last}`.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredContacts(filtered);
      };
    return(
        <div>
            <h1>Contact Search</h1>
            <SearchBar onSeaech={handleSearch}/>
            <ContactList contacts={filteredContacts}/>
        </div>
    );

}
export default ImplSearchBar;