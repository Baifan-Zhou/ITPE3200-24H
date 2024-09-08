import React from 'react';
import { Table } from 'react-bootstrap';

const ItemListPage= () => {
  // Mock data
  const items = [
    {
      ItemId: 1,
      Name: "Fried Chicken Leg",
      Price: 20,
      Description: "Crispy and succulent chicken leg that is deep-fried to perfection, often served as a popular fast food item.",
      ImageUrl: "/images/chickenleg.jpg"
    },
    {
      ItemId: 2,
      Name: "Fish and Chips",
      Price: 180,
      Description: "Classic British dish featuring battered and deep-fried fish served with thick-cut fried potatoes.",
      ImageUrl: "/images/fishandchips.jpg"
    }
  ];

  return (
    <div>
      <h1>Items</h1>
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
          <tr key={item.ItemId}>
            <td>{item.ItemId}</td>
            <td>{item.Name}</td>
            <td>{item.Price} NOK</td>
            <td>{item.Description}</td>
            <td><img src={item.ImageUrl} alt={item.Name} width="120" /></td>
          </tr>
        ))}
      </tbody>
      </Table>
    </div>
  );
};

export default ItemListPage;
