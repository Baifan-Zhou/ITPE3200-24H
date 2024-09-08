import React from 'react';
import { useNavigate } from 'react-router-dom';
import ItemForm from './ItemForm';
import { Item } from '../types/item';
import API_URL from '../apiConfig';
// const API_URL = 'http://localhost:5043'

const ItemCreatePage: React.FC = () => {
  const navigate = useNavigate(); // Create a navigate function

  const handleItemCreated = async (item: Item) => {
    try {
      const response = await fetch(`${API_URL}/api/itemapi/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Item created successfully:', data);
      navigate('/items'); // Navigate back after successful creation
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  return (
    <div>
      <h2>Create New Item</h2>
      <ItemForm onItemChanged={handleItemCreated}/>
    </div>
  );
};

export default ItemCreatePage;
