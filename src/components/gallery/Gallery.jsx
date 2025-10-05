import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Gallery.scss";

const Gallery = ({ images }) => {
    const [current, setCurrent] = useState(0);
    const thumbnailsRef = useRef([]);
    const thumbnailsContainerRef = useRef(null);

    const prevImage = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextImage = () => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    // Автопрокрутка миниатюр
    useEffect(() => {
        const activeThumb = thumbnailsRef.current[current];
        const container = thumbnailsContainerRef.current;
        if (activeThumb && container) {
            const containerRect = container.getBoundingClientRect();
            const thumbRect = activeThumb.getBoundingClientRect();

            // Проверяем, видно ли миниатюру — если нет, прокручиваем контейнер
            if (thumbRect.left < containerRect.left || thumbRect.right > containerRect.right) {
                container.scrollTo({
                    left:
                        activeThumb.offsetLeft -
                        container.offsetLeft -
                        container.clientWidth / 2 +
                        activeThumb.clientWidth / 2,
                    behavior: "smooth",
                });
            }
        }
        console.log(container.scrollLeft)
    }, [current]);

    return (
        <div className="gallery">
            <div className="gallery__thumbnails" ref={thumbnailsContainerRef}>
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img.src}
                        alt={img.alt}
                        className={`gallery__thumb ${index === current ? "active" : ""}`}
                        onClick={() => setCurrent(index)}
                        ref={(el) => (thumbnailsRef.current[index] = el)}
                    />
                ))}
            </div>

            <div className="gallery__main-wrapper">
                <button className="gallery__nav gallery__nav--prev" onClick={prevImage}>
                    <FaArrowLeft />
                </button>

                <div className="gallery__image-container">
                    <img
                        src={images[current].src}
                        alt={images[current].alt}
                        className="gallery__image"
                    />
                    <div className="gallery__caption">{images[current].alt}</div>
                </div>

                <button className="gallery__nav gallery__nav--next" onClick={nextImage}>
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default Gallery;