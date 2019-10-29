import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import TreeReducer from './TreeReducer'
import App from './App'
import './App.css'

const store = createStore(TreeReducer)
  
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )