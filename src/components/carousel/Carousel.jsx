import React, { useEffect, useState } from 'react';

import css from './Carousel.module.css';
import { ReactComponent as IconLeft } from './images/arrow-left.svg';
import { ReactComponent as IconRight } from './images/arrow-right.svg';
import { serviceImages } from './api';

export const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [img, setImg] = useState([]);

  useEffect(() => {
    const getImg = async () => {
      try {
        const { hits } = await serviceImages();
        console.log(hits);
        setImg(
          hits.map(image => ({
            id: image.id,
            largeImageURL: image.largeImageURL,
            webformatURL: image.webformatURL,
          }))
        );
      } catch (error) {
        console.error(error.message);
      }
    };

    getImg();
  }, []);

  const nextSlide = () => {
    setCurrent((current + 1) % img.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + img.length) % img.length);
  };

  return (
    <>
      <h1 className={css.topic}>Project 1 - Carousel</h1>
      <div className={css.slider}>
        <div className={css['left-arrow']} onClick={nextSlide}>
          <IconLeft />
        </div>
        <div className={css['right-arrow']} onClick={prevSlide}>
          <IconRight />
        </div>

        {img.map(
          ({ id, webformatURL }, idx) =>
            current === idx && (
              <div key={id} id={id}>
                <img src={webformatURL} alt="images" width={500} height={300} />
              </div>
            )
        )}
      </div>
    </>
  );
};
