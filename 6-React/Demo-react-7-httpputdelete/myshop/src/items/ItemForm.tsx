import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { Item } from '../types/item';

// import API_URL from '../apiConfig';

interface ItemFormProps {
  onItemChanged: (newItem: Item) => void;
  itemId?: number;
  isUpdate?: boolean;
  initialData?: Item;
}

const ItemForm: React.FC<ItemFormProps> = ({
  onItemChanged, 
  itemId, 
  isUpdate = false,
  initialData}) => {
  const [name, setName] = useState<string>(initialData?.name || '');
  const [price, setPrice] = useState<number>(initialData?.price || 0);
  const [description, setDescription] = useState<string>(initialData?.description || '');
  const [imageUrl, setImageUrl] = useState<string>(initialData?.imageUrl || '');
  // const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const onCancel = () => {
    navigate(-1); // This will navigate back one step in the history
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const item: Item = { itemId, name, price, description, imageUrl };
    onItemChanged(item); // Call the passed function with the item data
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formItemName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          pattern="[0-9a-zA-ZæøåÆØÅ. \-]{2,20}" // Regular expression pattern
          title="The Name must be numbers or letters and between 2 to 20 characters."
        />       
      </Form.Group>

      <Form.Group controlId="formItemPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter item price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          required
          min="0.01"
          step="0.01"
        />
      </Form.Group>

      <Form.Group controlId="formItemDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter item description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formItemImageUrl">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">{isUpdate ? 'Update Item' : 'Create Item'}</Button>
      <Button variant="secondary" onClick={onCancel} className="ms-2">Cancel</Button>
    </Form>
  );
};

export default ItemForm;
