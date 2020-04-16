import React from 'react';
import Donate from './donate.js';
import sliderStyles from '../scss/slider.module.scss';
import Carousel from 'react-multi-carousel';
import useBaseUrl from '@docusaurus/useBaseUrl';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 520, min: 0 },
    items: 3,
  },
}

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const { carouselState: { currentSlide } } = rest;
  return (
    <div className={sliderStyles.buttons}>
      <button className={sliderStyles.button__left} onClick={() => previous()} />
      <button className={sliderStyles.button__right}onClick={() => next()} />
    </div>
  );
};

const Slider = (props) => {
  if(!props.light) {
    return (
      <div className={`${sliderStyles.slider} ${sliderStyles.dark}`}>
        <Carousel 
          containerClass={sliderStyles.carousel}
          itemClass={sliderStyles.item}
          responsive={responsive}
          draggable={false}
          arrows={false}
          infinite={true}
          renderButtonGroupOutside={true} 
          customButtonGroup={<ButtonGroup />}>
          <div><img src={useBaseUrl('img/st-mule.png')} alt="sticker-mule" /></div>
          <div><img src={useBaseUrl('img/st-mule.png')} alt="sticker-mule" /></div>
          <div><img src={useBaseUrl('img/st-mule.png')} alt="sticker-mule" /></div>
          <div><img src={useBaseUrl('img/st-mule.png')} alt="sticker-mule" /></div>
          <div><img src={useBaseUrl('img/st-mule.png')} alt="sticker-mule" /></div>
        </Carousel>
        <Donate />
      </div>
    )
  } return (
      <div className={`${sliderStyles.slider} ${sliderStyles.light}`}>
        <Carousel
          containerClass={sliderStyles.carousel}
          itemClass={sliderStyles.item}
          responsive={responsive}
          arrows={false}
          draggable={false}
          infinite={true}
          renderButtonGroupOutside={true} 
          customButtonGroup={<ButtonGroup />}>
          <div><img src={useBaseUrl('img/blaine.png')} alt="blaine" /></div>
          <div><img src={useBaseUrl('img/blaine.png')} alt="blaine" /></div>
          <div><img src={useBaseUrl('img/blaine.png')} alt="blaine" /></div>
          <div><img src={useBaseUrl('img/blaine.png')} alt="blaine" /></div>
          <div><img src={useBaseUrl('img/blaine.png')} alt="blaine" /></div>
        </Carousel>
      </div>
  )
}

export default Slider;