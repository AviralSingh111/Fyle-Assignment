import React, { useState } from 'react';

const ContactUsModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    mobileNumber: '',
    agreement: false,
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    }
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    if (!formData.mobileNumber) {
      newErrors.mobileNumber = 'Mobile number is required';
    }
    if (!formData.agreement) {
      newErrors.agreement = 'You must agree to the terms';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      
      const endpoint = 'https://getform.io/f/pbgxwgma';
      
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        if (response.ok) {
          setSuccess('Form submitted successfully');
          closeModal();
        } else {
          setSuccess('Failed to submit form');
        }
      } catch (error) {
        setSuccess('Failed to submit form');
      }
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-lg relative w-[450px] h-[330px] flex flex-col space-y-4 px-8">
      <button onClick={closeModal} className="absolute top-2 right-2">
        &times;
      </button>
      <h2 className='text-xl font-semibold'>Talk to Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Work email'
            className="w-full border-b-[1px] border-gray-300 text-gray-700 focus:outline-none focus:border-blue-500 placeholder-gray-300"
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
        </div>
        <div className='flex gap-8 mt-6'>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='Name'
            className="w-full border-b-[1px] border-gray-300 text-gray-700 focus:outline-none focus:border-blue-500 placeholder-gray-300"
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder='Mobile Number'
            className="w-full border-b-[1px] border-gray-300 text-gray-700 focus:outline-none focus:border-blue-500 placeholder-gray-300"
          />
          {errors.mobileNumber && <p className="text-red-500 text-xs">{errors.mobileNumber}</p>}
        </div>
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            name="agreement"
            checked={formData.agreement}
            onChange={handleChange}
            className="mr-2 custom-checkbox"
          />
          <label className="text-gray-400 text-sm mt-4">I agree to Fyle's terms and conditions, and provide consent to send me communication.</label>
          {errors.agreement && <p className="text-red-500 text-xs ml-2">{errors.agreement}</p>}
        </div>
        <button
          type="submit"
          className="bg-[#FF3366] w-full text-center text-white px-4 py-2 rounded"
        >
          Contact Us
        </button>
        {success && <p className="text-green-500 text-xs mt-2">{success}</p>}
      </form>
    </div>
  );
};

export default ContactUsModal;
