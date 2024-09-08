import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';

const API_URL = 'http://localhost:5043'

const ItemListPage= () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchItems = async () => {
    setLoading(true); // Set loading to true when starting the fetch
    setError(null);   // Clear any previous errors

    try {
      const response = await fetch(`${API_URL}/api/itemapi/itemlist`); 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setItems(data);
      console.log(data);
    } catch (error) {
      console.error(`There was a problem with the fetch operation: ${error.message}`);
      setError('Failed to fetch items.');
    } finally {
      setLoading(false); // Set loading to false once the fetch is complete
    }
  };  
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h1>Items</h1>
      <Button onClick={fetchItems} className="btn btn-primary mb-3" disabled={loading}>
        {loading ? 'Loading...' : 'Refresh Items'}
      </Button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Descriptions</th>
          <th>Images</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.itemId}>
            <td>{item.itemId}</td>
            <td>{item.name}</td>
            <td>{item.price} NOK</td>
            <td>{item.description}</td>
            <td><img src={`${API_URL}${item.imageUrl}`} alt={item.name} width="120" /></td>
          </tr>
        ))}
      </tbody>
      </Table>
    </div>
  );
};

export default ItemListPage;
