/* eslint-disable react/prop-types */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';

const Overlay = ({ toggleClass, closeOverlayFunc }) => (
  <div className={`main-overlay ${toggleClass}`}>
    <h1>Hey I am overlay</h1>
    <button type="button" className="btns" onClick={closeOverlayFunc}>Stop the session</button>
  </div>
);

export default Overlay;
