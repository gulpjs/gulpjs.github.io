import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Donate from './donate.js';

import Carousel from 'react-multi-carousel';
import useBaseUrl from '@docusaurus/useBaseUrl';

const SliderContainer = styled.div`
  @font-face{font-family:"revicons";fallback:fallback;src:url("./revicons.woff") format('woff'),url("./revicons.ttf") format('ttf'),url("./revicons.eot") format('ttf')}.react-multi-carousel-list{display:flex;align-items:center;overflow:hidden;position:relative}.react-multi-carousel-track{list-style:none;padding:0;margin:0;display:flex;flex-direction:row;position:relative;transform-style:preserve-3d;backface-visibility:hidden;will-change:transform,transition}.react-multiple-carousel__arrow{position:absolute;outline:0;transition:all .5s;border-radius:35px;z-index:1000;border:0;background:rgba(0,0,0,0.5);min-width:43px;min-height:43px;opacity:1;cursor:pointer}.react-multiple-carousel__arrow:hover{background:rgba(0,0,0,0.8)}.react-multiple-carousel__arrow::before{font-size:20px;color:#fff;display:block;font-family:revicons;text-align:center;z-index:2;position:relative}.react-multiple-carousel__arrow--left{left:calc(4% + 1px)}.react-multiple-carousel__arrow--left::before{content:"\e824"}.react-multiple-carousel__arrow--right{right:calc(4% + 1px)}.react-multiple-carousel__arrow--right::before{content:"\e825"}.react-multi-carousel-dot-list{position:absolute;bottom:0;display:flex;left:0;right:0;justify-content:center;margin:auto;padding:0;margin:0;list-style:none;text-align:center}.react-multi-carousel-dot button{display:inline-block;width:12px;height:12px;border-radius:50%;opacity:1;padding:5px 5px 5px 5px;box-shadow:none;transition:background .5s;border-width:2px;border-style:solid;border-color:grey;padding:0;margin:0;margin-right:6px;outline:0;cursor:pointer}.react-multi-carousel-dot button:hover:active{background:#080808}.react-multi-carousel-dot--active button{background:#080808}.react-multi-carousel-item{transform-style:preserve-3d;backface-visibility:hidden}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.react-multi-carousel-item{flex-shrink:0 !important}.react-multi-carousel-track{overflow:visible !important}}
  
  position: relative;
  color: ${props => props.theme.color};
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: "footer footer" "nav content";
  align-items: center;

  @media(min-width: 768px) {
    width: 100vw;
    grid-template-columns: 15% 41% 41%;
    grid-template-areas: "nav content footer";
  }

  @media(min-width: 1200px) {
    grid-template-columns: 8% 37% 30%;
  }

  .react-multi-carousel-list {
    background: ${props => props.theme.background};
    grid-area: content;
    min-height: 18vh;
    padding: 0 var(--tiny);

    img {
      width: ${props => props.theme.imageWidth};
      max-width: 100%;
      border-radius: ${props => props.theme.borderRadius};
    }
  }

  .buttons {
    grid-area: nav;
    background: ${props => props.theme.background};
    min-height: 18vh;
    padding: 0 var(--tiny);
    display: flex;
    align-items: inherit;

     button {
      background-color: transparent;
      border: none;
      outline: none;
      width: 48px;
      height: 48px;

      :first-child {
        border-right: 1px solid ${props => props.theme.color};
        background: url('${props => props.theme.buttonLeft}') no-repeat;
        background-position: 0% 40%;
      }

      :last-child {
        background: url('${props => props.theme.buttonRight}') no-repeat;
        background-position: 100% 40%;
      }
    }
  }
`

SliderContainer.defaultProps = {
  theme: {
    background: 'var(--black)',
    color: 'var(--light-gray)',
    borderRadius: '0',
    buttonLeft: 'img/arrow-left.svg',
    buttonRight: 'img/arrow-right.svg',
    imageWidth: 'var(--huge)'
  }
}

const theme = {
  background: 'var(--light-gray)',
  color: 'var(--black)',
  borderRadius: '100%',
  buttonLeft:'img/arrow-left-dark.svg',
  buttonRight: 'img/arrow-right-dark.svg',
  imageWidth: '3.5rem'
}

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
    <div className="buttons">
      <button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
      <button onClick={() => next()} />
    </div>
  );
};

const Slider = (props) => {
  if(!props.themed) {
    return (
      <SliderContainer>
        <Carousel 
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
      </SliderContainer>
    )
  } return (
    <ThemeProvider theme={theme}>
      <SliderContainer>
        <Carousel 
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
      </SliderContainer>
    </ThemeProvider>
  )
}

export default Slider;