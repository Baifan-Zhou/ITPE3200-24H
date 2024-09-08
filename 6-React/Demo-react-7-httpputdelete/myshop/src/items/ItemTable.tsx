import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Item } from '../types/item';
import { Link } from 'react-router-dom';

interface ItemTableProps {
  items: Item[];
  apiUrl: string;
  onItemDeleted: (itemId: number) => void;
}

const ItemTable: React.FC<ItemTableProps> = ({ items, apiUrl, onItemDeleted }) => {
  const [showImages, setShowImages] = useState<boolean>(true);
  const [showDescriptions, setShowDescriptions] = useState<boolean>(true);
  const toggleImages = () => setShowImages(prevShowImages => !prevShowImages);
  const toggleDescriptions = () => setShowDescriptions(prevShowDescriptions => !prevShowDescriptions);

  return (
    <div>
      <Button onClick={toggleDescriptions} className="btn btn-secondary mb-3 me-2">
        {showDescriptions ? 'Hide Descriptions' : 'Show Descriptions'}
      </Button>
      <Button onClick={toggleImages} className="btn btn-secondary mb-3">
        {showImages ? 'Hide Images' : 'Show Images'}
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            {showDescriptions && <th>Descriptions</th>}
            {showImages && <th>Images</th>}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.itemId}>
              <td>{item.itemId}</td>
              <td>{item.name}</td>
              <td>{item.price} NOK</td>
              {showDescriptions && <td>{item.description}</td>}
              {showImages && (
                <td>
                  {showImages && <img src={`${apiUrl}${item.imageUrl}`} alt={item.name} width="120" />}
                </td>
              )}
              <td className="text-center">
                <Link to={`/itemupdate/${item.itemId}`}>Update</Link>
                <Link to="#"
                  onClick={(event) => onItemDeleted(item.itemId)}
                  className="btn btn-link text-danger"
                >Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ItemTable;
