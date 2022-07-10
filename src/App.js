import React from "react";
import Card from "./Components/Card";
import contacts from "./Components/Contact";
function createCard(contact)
{
    return <Card  
    key={contact.id}
    name={contact.name}
    info={contact.info }
    imgURL={contact.imgURL}
    
/>
}
function App() {
 return (
 <div 
 
 >
 {contacts.map(createCard)}
 </div>
 );
}
export default App;