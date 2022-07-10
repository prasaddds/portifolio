import React from "react";
import Card2 from "./Components/Card2";
import contacts2 from "./Components/Contact2";
function createCard(contact)
{
    return <Card2
    key={contact.id}
    name={contact.name}
    info={contact.info }
    imgURL={contact.imgURL}
    
/>
}
function App2() {
 return (
 <div 
 
 >
 {contacts2.map(createCard)}
 </div>
 );
}
export default App2;