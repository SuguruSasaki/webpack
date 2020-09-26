import React from 'react'
import ReactDOM from "react-dom";
import Header from './header'
import './css/style.css'


ReactDOM.render(
  <div>
    <Header name="Suguru sasaki" />
    <div>Test</div>
  </div>,
  document.getElementById('app')
)