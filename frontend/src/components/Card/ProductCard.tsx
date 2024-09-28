import React, { useState } from 'react';
import ModalWin from "../ModalWin/ModalWin.tsx";

interface ProductCardProps {
    card_title: string;
    description: string;
    price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ card_title, description, price }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleBuyClick = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{card_title}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="text-gray-900 font-bold text-lg">{price}₽</span>
            </div>
            <div className="px-6 pb-4">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                    onClick={handleBuyClick}
                >
                    Купить
                </button>
            </div>
            {isModalOpen && (
                <ModalWin tg_user="" onClose={handleCloseModal} card_title={card_title} />
            )}
        </div>
    );
};

export default ProductCard;
