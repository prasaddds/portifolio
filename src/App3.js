import React from "react";
import Card3 from "./Components/Card3";
import contacts3 from "./Components/Contact3";
function createCard(contact3)
{
    return <Card3
    key={contact3.id}
    name={contact3.name}
    info={contact3.info }
    imgURL={contact3.imgURL}
    // github={contact3.github}
/>
}
function App3() {
 return (
 <div 
 
 >
 {contacts3.map(createCard)}
 </div>
 );
}
export default App3;