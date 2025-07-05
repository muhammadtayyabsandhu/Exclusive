import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, addToCart } from '../Features/cartSlice';

export default function CartItem({ item }) {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeFromCart(item.id));
    };

    const increaseQuantity = () => {
        dispatch(addToCart({ id: item.id, name: item.name, price: item.price }));
    };

    return (
        <div className="grid grid-cols-5  items-center border-b py-4 text-center">
            <p>{item.name}</p>
            <p>${item.price}</p>

            {/* Quantity Section - Improved Alignment */}
            <div className="flex items-center justify-center gap-2">
                <button 
                    onClick={increaseQuantity} 
                    className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
                >
                    +
                </button>
                <p className="w-6 text-center">{item.quantity}</p>
                <button 
                    onClick={handleRemove} 
                    className="bg-red-500 text-white px-3 py-1 rounded text-sm"
                >
                    -
                </button>
            </div>

            <p>${(item.price * item.quantity).toFixed(2)}</p>

            <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-500 cursor-pointer"
            >
                Remove
            </button>
        </div>
    );
}
