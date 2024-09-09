import React from 'react';
import { Link } from 'react-router-dom';

const Pill = ({ quantity }) => {
    return (
        <span className="pill"> { quantity } </span>
    );
};

export default Pill;
