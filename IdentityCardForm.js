import React, { useState } from 'react';

function IdentityCardForm({ onChange }) {
  const [formData, setFormData] = useState({
    name: '',
    idNumber: '',
    photo: '',
    dob: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    onChange({ ...formData, [name]: value });
  };

  return (
    <div>
      <h2>Identity Card Form</h2>
      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />
      <label>ID Number:</label>
      <input type="text" name="idNumber" value={formData.idNumber} onChange={handleChange} />
      <label>Photo URL:</label>
      <input type="text" name="photo" value={formData.photo} onChange={handleChange} />
      <label>Date of Birth:</label>
      <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
      <label>Address:</label>
      <input type="text" name="address" value={formData.address} onChange={handleChange} />
    </div>
  );
}

export default IdentityCardForm;