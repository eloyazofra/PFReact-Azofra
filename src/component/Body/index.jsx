import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css';
import { image } from '../../assets/Products/image.js';
import { db } from '../../config/firebase.config.js'; 
import { collection, getDocs } from 'firebase/firestore';

const Products = () => {
  const [items, setItems] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'items')); 
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); 
        setItems(data); 
      } catch (error) {
        console.error('Error al obtener los datos de Firestore:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  const groupedData = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredItems = selectedCategory === 'All'
    ? items
    : items.filter(item => item.category === selectedCategory);

  const categoriesToDisplay = selectedCategory === 'All'
    ? Object.keys(groupedData)
    : [selectedCategory];


  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <main>
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
            {filteredItems
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
    </main>
  );
};

export default Products;
