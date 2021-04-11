import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"


const theme = extendTheme({
  Trigger: {
    Popover: {
      variants: {
        responsive: {
          popper: {
            maxWidth: 'unset',
            width: 'unset',
            maxHeight: 'unset',
            height: 'unset'
          }
        }
      }
    }
  }
});


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <ChakraProvider theme={theme} >
            <App />
          </ChakraProvider>
        </Provider>
      </PersistGate>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
