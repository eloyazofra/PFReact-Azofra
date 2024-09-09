import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './index.css';
import { image } from '../../assets/Products/image.js';
import data from '../../assets/Products/data.json';

const Products = () => {
  const [item, setItem] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    setItem(data);
  }, []);

  const groupedData = data.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredItem = selectedCategory === 'All'
    ? item
    : item.filter(item => item.category === selectedCategory);

  const categoriesToDisplay = selectedCategory === 'All'
    ? Object.keys(groupedData)
    : [selectedCategory];

  return (
    <div className="container mt-4">
      <div className="item__category-button-container text-center">
        <button 
          className={`item__category-button ${selectedCategory === 'All' ? 'active' : ''}`} 
          onClick={() => handleCategoryClick('All')}
        >
          Todos
        </button>
        {Object.keys(groupedData).map((category) => (
          <button 
            key={category} 
            className={`item__category-button ${selectedCategory === category ? 'active' : ''}`} 
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {categoriesToDisplay.map((category) => (
        <div key={category} className="item__category text-center">
          <h3 className="item__category-title">{category}</h3>
          <Row>
            {filteredItem
              .filter(item => item.category === category)
              .slice(0, 3)
              .map((item) => (
                <Col md={4} className="mb-4" key={item.id}>
                  <Link to={`/item/${item.id}`}>
                    <Card className="text-center">
                      <Card.Img variant="top" src={image[item.image]} alt={item.name}/>
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>Precio ${item.price}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))}
          </Row>
        </div>
      ))}
    </div>
  );
};

export default Products;
