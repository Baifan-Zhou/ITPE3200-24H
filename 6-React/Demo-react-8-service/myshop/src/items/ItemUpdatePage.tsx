import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ItemForm from './ItemForm';
import { Item } from '../types/item';
import * as ItemService from './ItemService';

const ItemUpdatePage: React.FC = () => {
  const { itemId } = useParams<{ itemId: string }>(); // Get itemId from the URL
  const navigate = useNavigate(); // Create a navigate function
  const [item, setItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const data = await ItemService.fetchItemById(itemId);
        setItem(data);
      } catch (error) {
        setError('Failed to fetch item');
        console.error('There was a problem with the fetch operation:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [itemId]);

  const handleItemUpdated = async (item: Item) => {

    try {
      const data = await ItemService.updateItem(item.itemId, item);
      console.log('Item updated successfully:', data);
      navigate('/items'); // Navigate back after successful creation
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!item) return <p>No item found</p>;
  
  return (
    <div>
      <h2>Update Item</h2>
      <ItemForm onItemChanged={handleItemUpdated} itemId={item.itemId} isUpdate={true} initialData={item} />
    </div>
  );
};

export default ItemUpdatePage;
