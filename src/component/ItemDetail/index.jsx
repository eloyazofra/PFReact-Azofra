import React, { useState, useEffect } from 'react';
import './index.css';
import { image } from '../../assets/Products/image.js';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../../config/firebase.config.js'; 
import { doc, getDoc } from 'firebase/firestore';
import Spinner from 'react-bootstrap/Spinner'; 

const ItemDetail = ({ addToCart }) => {
  const { id } = useParams(); 
  const [item, setItem] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const itemDoc = doc(db, 'items', id);
        const itemSnapshot = await getDoc(itemDoc);

        if (itemSnapshot.exists()) {
          setItem({ id: itemSnapshot.id, ...itemSnapshot.data() });
        } else {
          console.log('No such document!');
          setItem(null);
        }
      } catch (error) {
        console.error('Error fetching item: ', error);
        setItem(null);
      } finally {
        setLoading(false); 
      }
    };

    fetchItem();
  }, [id]);

  const handleAddToCart = (item) => {
    addToCart(item);
    setAddedToCart(true); 
    setTimeout(() => {
      setAddedToCart(false); 
    }, 2000); 
  };

  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="text-center">
        <h3>Item no encontrado</h3>
        <img src={image.notFound} alt="Item No Encontrado" />
      </div>
    );
  }

  return (
    <div className="container mt-4 text-center">
      <section className="item-detail-section">
        <div>
          <h2 className="item-detail__name">{item.name}</h2>
          <img src={image[item.image]} alt={item.name} className="item-detail__image" />
          <p className="item-detail__price">Precio ${item.price}</p>
        </div>
        <div>
        <h3 className="item-detaildescription-title">Descripción del Producto</h3>
        <p className="item-detaildescription">
        {item.description.split('. ').map((sentence, index) => (
        <React.Fragment key={index}>
        {sentence.trim()}
        <br />
    </React.Fragment>
      ))}
      </p>
          <button
            className={`item-detail__add-to-cart ${addedToCart ? 'disabled' : ''}`} 
            onClick={() => handleAddToCart(item)}
            disabled={addedToCart} 
          >
            {addedToCart ? 'Producto agregado al carrito' : 'Agregar al carrito'}
          </button>
          <div>
            <button 
              className="item-detail__add-to-cart"
              onClick={() => navigate('/')}
            >
              Ir al inicio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItemDetail;
