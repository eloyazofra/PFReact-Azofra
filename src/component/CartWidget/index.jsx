import { Icon } from '@iconify/react';
import Pill from '../Pill';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
        <div className='cart-widget'>
            <Pill quantity={1} />
            <Icon className='cart-widget__cart' icon="f7:cart-fill" />
        </div>
    );
};

export default CartWidget;
