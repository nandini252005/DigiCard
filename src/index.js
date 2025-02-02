import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './index.css'

const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.Fragment>
  <Header />
  <Main />
  <Footer />
  </React.Fragment>
)