import React from 'react';
import './Menu.css';

const Menu = () => {
    const menuItems = [
        { id: 1, name: 'Classic Burger', price: '$12.99', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
        { id: 2, name: 'Spicy Fries', price: '$5.99', image: 'https://images.pexels.com/photos/1586942/pexels-photo-1586942.jpeg' },
        { id: 3, name: 'Vegan Delight', price: '$14.99', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
        { id: 4, name: 'Double Trouble', price: '$16.99', image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    ];

    return (
        <section className="section-padding menu-section" id="menu">
            <div className="container">
                <h2 className="section-title center">Browse our menu</h2>
                <div className="menu-grid">
                    {menuItems.map(item => (
                        <div key={item.id} className="menu-item-card">
                            <div className="menu-image-container">
                                <img src={item.image} alt={item.name} className="menu-image" />
                            </div>
                            <div className="menu-details">
                                <h3 className="menu-name">{item.name}</h3>
                                <span className="menu-price">{item.price}</span>
                                <button className="button-primary menu-button">Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menu;
