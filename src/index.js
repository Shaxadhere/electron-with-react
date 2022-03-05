import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react'
import './index.css';
import MyRouter from './config/routes';

ReactDOM.render(
  <ChakraProvider>
    <MyRouter />
  </ChakraProvider>,
  document.getElementById('root')
);