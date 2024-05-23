import React from "react";
const ContactList = ({contacts}) => {
    return(
        <div>
            {contacts.map((contact,index) => (
            <div key ={index}>
            <img src= {contact.picture.thumbnail} alt="ThumbNail" />
            <p>Name: {contact.name.title}{contact.name.first}{contact.name.last}</p>
            <p>Cell: {contact.cell}</p>
            </div>
            ))}
        </div>
    );

};
export default ContactList;