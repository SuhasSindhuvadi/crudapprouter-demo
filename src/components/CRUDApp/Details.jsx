import React from 'react';
import { useNavigate } from 'react-router-dom';

function Details({ data, setSelectedPerson, deletePerson }) {
  const navigate = useNavigate();

  const navigateToEditPage = (person) => {
    setSelectedPerson(person);
    navigate('/edit');
  };

  const navigateToAddPage = () => {
    setSelectedPerson(null);
    navigate('/edit');
  };

  return (
    <div className="details-container">
      <button className="add-button" onClick={navigateToAddPage}>Add New Person</button>
      {data.map(person => (
        <div className="person-card" key={person.id}>
          <p><strong>Name:</strong> {person.name}</p>
          <p><strong>Age:</strong> {person.age}</p>
          <div className="button-group">
            <button className="edit-button" onClick={() => navigateToEditPage(person)}>Edit</button>
            <button className="delete-button" onClick={() => deletePerson(person.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Details;
