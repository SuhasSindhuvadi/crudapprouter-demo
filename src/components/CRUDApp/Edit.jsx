import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Edit({ person, updatePerson, addPerson, isNew }) {
  const [formData, setFormData] = useState({ id: '', name: '', age: '' });
  const navigate = useNavigate();

  useEffect(() => {
    if (person) {
      setFormData(person);
    } else {
      setFormData({ id: '', name: '', age: '' }); 
    }
  }, [person]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isNew) {
      addPerson(formData); 
    } else {
      updatePerson(formData); 
    }
    navigate('/details'); 
  };

  return (
    <div className="edit-container">
      <h2>{isNew ? 'Add New Person' : 'Edit Details'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit" className="save-button">Save</button>
      </form>
    </div>
  );
}

export default Edit;

