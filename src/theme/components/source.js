import React from 'react';
import styled from 'styled-components';

const SourceContainer = styled.div`
  font-size: 14px;
  line-height: 1.2;
  background: var(--light-gray);
  padding: var(--tiny) 0;
`

const Source = (props) => {
  return (
    <SourceContainer><pre>{`
    const { src, dest, parallel } = require('gulp');
    const pug = require('gulp-pug');
    const less = require('gulp-less');
    const minifyCSS = require('gulp-csso');
    const concat = require('gulp-concat');

    function html() {
      return src('client/templates/*.pug')
        .pipe(pug())
        .pipe(dest('build/html'))
    }

    function css() {
      return src('client/templates/*.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(dest('build/css'))
    }

    function js() {
      return src('client/javascript/*.js', { sourcemaps: true })
        .pipe(concat('app.min.js'))
        .pipe(dest('build/js', { sourcemaps: true }))
    }

    exports.js = js;
    exports.css = css;
    exports.html = html;
    exports.default = parallel(html, css, js);
    `}
  </pre></SourceContainer>
  )
}

export default Source;