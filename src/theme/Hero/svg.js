import React from "react";
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './svg.module.scss';

function Svg() {
  return (
    <svg
      className={styles.visual}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="582"
      height="306"
      fill="none"
      viewBox="0 0 582 306"
    >
      <path fill="#E5E5E5" d="M0 0H582V306H0z"></path>
      <g>
        <path fill="#fff" d="M0 0H582V306H0z"></path>
        <g>
          <path fill="#fff" d="M8 2H576V305H8z"></path>
          <path stroke="#CF4647" strokeWidth="2" d="M8 3L576 3"></path>
          <g>
            <path stroke="#CF4647" strokeWidth="2" d="M8 303L572 303"></path>
          </g>
          <path
            stroke="#0A0908"
            strokeWidth="6"
            d="M66 4L66 118"
            opacity="0.1"
          ></path>
          <path
            stroke="#CF4647"
            strokeWidth="6"
            d="M66 4L66 118"
            className={styles.line_up_anim}
          ></path>
          <path
            stroke="#0A0908"
            strokeWidth="6"
            d="M281 4L281 99"
            opacity="0.1"
          ></path>
          <path
            stroke="#CF4647"
            strokeWidth="6"
            d="M281 4L281 99"
            className={styles.line_up_anim}
          ></path>
          <path
            stroke="#0A0908"
            strokeWidth="6"
            d="M293 191L293 304"
            opacity="0.1"
          ></path>
          <path
            stroke="#CF4647"
            strokeWidth="6"
            d="M293 191L293 304"
            className={styles.line_down_anim}
            opacity="0.1"
          ></path>
          <path
            stroke="#0A0908"
            strokeWidth="6"
            d="M63 121L267 121"
            opacity="0.1"
          ></path>
          <path
            stroke="#CF4647"
            strokeWidth="6"
            d="M63 121L267 121"
            className={`${styles.line_up_anim} ${styles.second}`}
          ></path>
          <path
            stroke="#0A0908"
            strokeWidth="6"
            d="M0 -3L114 -3"
            opacity="0.1"
            transform="matrix(0 1 1 0 509 4)"
          ></path>
          <path
            stroke="#CF4647"
            strokeWidth="6"
            d="M0 -3L114 -3"
            className={styles.line_up_anim}
            transform="matrix(0 1 1 0 509 4)"
          ></path>
          <path
            stroke="#0A0908"
            strokeWidth="6"
            d="M0 -3L191 -3"
            opacity="0.1"
            transform="matrix(-1 0 0 1 509 124)"
          ></path>
          <path
            stroke="#CF4647"
            strokeWidth="6"
            d="M0 -3L191 -3"
            className={`${styles.line_up_anim} ${styles.second}`}
            opacity="0.1"
            transform="matrix(-1 0 0 1 509 124)"
          ></path>
          <path
            stroke="#0A0908"
            strokeWidth="6"
            d="M278 183H98"
            opacity="0.1"
          ></path>
          <path
            stroke="#CF4647"
            strokeWidth="6"
            d="M278 183H98"
            className={styles.line_down_anim}
            opacity="0.1"
          ></path>
          <path
            stroke="#0A0908"
            strokeWidth="6"
            d="M101.216 186L101 302"
            opacity="0.1"
          ></path>
          <path
            stroke="#CF4647"
            strokeWidth="6"
            d="M101.216 186L101 302"
            className={`${styles.line_down_anim} ${styles.second}`}
            opacity="0.1"
          ></path>
          <path
            stroke="#0A0908"
            strokeWidth="6"
            d="M304 154l162 .003"
            opacity="0.1"
          ></path>
          <path
            stroke="#CF4647"
            strokeWidth="6"
            d="M304 154l162 .003"
            className={styles.line_down_anim}
            opacity="0.1"
          ></path>
          <path
            stroke="#0A0908"
            strokeWidth="6"
            d="M463 157l.3 147"
            opacity="0.1"
          ></path>
          <path
            stroke="#CF4647"
            strokeWidth="6"
            d="M463 157l.3 147"
            className={`${styles.line_down_anim} ${styles.second}`}
            opacity="0.1"
          ></path>
          <g filter="url(#filter0_d)">
            <path fill="#F6F8FA" d="M210 57H374V221H210z"></path>
          </g>
          <path fill="url(#pattern0)" d="M260 64H320V201H260z"></path>
          <path
            stroke="#CF4647"
            strokeWidth="6"
            d="M210.5 56.5H373.5V220.5H210.5z"
            className={styles.line_rectangle}
          ></path>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d"
          width="172"
          height="172"
          x="208"
          y="56"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dx="2" dy="3"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          ></feBlend>
        </filter>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use
            transform="matrix(.00448 0 0 .00196 -.01 0)"
            xlinkHref="#image0"
          ></use>
        </pattern>
        <image
          id="image0"
          width="228"
          height="510"
          data-name="gulp-2x.png"
          xlinkHref={useBaseUrl('img/gulp-2x.png')}
        ></image>
      </defs>
    </svg>
  );
}

export default Svg;
