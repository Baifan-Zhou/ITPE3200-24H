import React from 'react';
import { useNavigate } from 'react-router-dom';
import ItemForm from './ItemForm';
import { Item } from '../types/item';
import * as ItemService from './ItemService';

const ItemCreatePage: React.FC = () => {
  const navigate = useNavigate(); // Create a navigate function

  const handleItemCreated = async (item: Item) => {
    try {
      const data = await ItemService.createItem(item);
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
