import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { Item } from '../types/item';

interface ItemGridProps {
  items: Item[];
  apiUrl: string;
  onItemDeleted: (itemId: number) => void;
}

const ItemGrid: React.FC<ItemGridProps> = ({ items, apiUrl, onItemDeleted }) => {

  return (
    <div>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {items.map(item => (
          <Col key={item.itemId}>
            <Card>
              <Card.Img variant="top" src={`${apiUrl}${item.imageUrl}`} alt={item.name} />
              <Card.Body>
                <Card.Title>{item.itemId} {item.name}</Card.Title>
                <Card.Text>
                  {item.description}
                </Card.Text>
                <Card.Text>
                  Price: {item.price} NOK
                </Card.Text>
                <div className="d-flex justify-content-between">
                    <Button href={`/itemupdate/${item.itemId}`} variant="primary">Update</Button>
                    <Button onClick={(event) => onItemDeleted(item.itemId)} variant="danger">Delete</Button>                    
                </div>                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ItemGrid;
