import React, { useState } from 'react';
import Heading from './components/Heading'
import Card from './components/Card'
import profileUsers from './profileUsers'


function App() {
  const [search, setSearch] = useState("")


  
  const filteredUsers = profileUsers.filter((user)=>{
    const fullName = `${user.title} ${user.firstName} ${user.lastName}`;
    return (
      fullName.toLowerCase().includes(search.toLowerCase())
    )
  })
 
  const handleSearch =(e)=>{
    setSearch(e.target.value)
  }
  const allUsers = (contacts)=>{

    return(
      <Card
      key = {contacts.id}
      picture = {contacts.picture}
      id ={contacts.id}
      firstName ={contacts.firstName}
      lastName = {contacts.lastName}
      title = {contacts.title}

      />
    )
  }

    return (
    
    <div className="App ">

      <Heading/>
      <form>
        <input onChange={handleSearch} value={search} type= "text"  placeholder='search user here' />
      </form>
      {filteredUsers.map(allUsers)}
    </div>
  );
}

export default App;
