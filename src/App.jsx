import React, { useState } from 'react'
import initialData from './components/CRUDApp/InitialData'
import NavBar from './components/CRUDApp/NavBar'
import Details from './components/CRUDApp/Details'
import Edit from './components/CRUDApp/Edit'

import { Route, Routes } from 'react-router-dom'

function App() {
  const [data, setData] = useState(initialData)
  const [selectedPerson, setSelectedPerson] = useState(null)


  const addPerson = (newPerson) => {
    setData([...data, { ...newPerson, id: data.length + 1 }])
  }

  const updatePerson = (updatedPerson) => {
    setData(data.map((person) => (person.id === updatedPerson.id ? updatedPerson : person)));
  };

  const deletePerson = (id) => {
    setData(data.filter((person) => person.id !== id));
  };
  return (
    <div>
    
        <NavBar />
        <Routes>
          <Route path="/" element={<h1 style={{textAlign:"center"}}>Home Page</h1>} />
          <Route
            path="/details"
            element={
              <Details
                data={data}
                setSelectedPerson={setSelectedPerson}
                deletePerson={deletePerson}
              />
            }
          />
          <Route
            path="/edit"
            element={
              <Edit
                person={selectedPerson}
                updatePerson={updatePerson}
                addPerson={addPerson}
                isNew={selectedPerson === null}
              />
            }
          />
        </Routes>
    </div>
  )
}

export default App