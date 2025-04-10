import './carouselOne.css';
import { useState } from 'react';

const CarouselOne = ({ images = [] }) => {

    const activeImages = images.filter(image => image.active);

    if (activeImages.length === 0) {
        return <p>No hay imágenes activas para mostrar.</p>;
    };

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? activeImages.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === activeImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="carouselOne">
            <div className="carouselOne-slide">
                <img src={activeImages[currentIndex].url} alt="carouselManuel" />
            </div>
            <button className="carouselOne-button prev" onClick={prevSlide}>
                {'<'}
            </button>
            <button className="carouselOne-button next" onClick={nextSlide}>
                {'>'}
            </button>
        </div>
    );
};

export default CarouselOne;
