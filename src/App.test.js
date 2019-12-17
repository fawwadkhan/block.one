import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import BlockInfo from './components/commons/BlockInfo';
import { JsonRpc } from 'eosjs';
import endpoint from './endpoint/endpoint';
import block_response from './block-mock';

const URL = endpoint;
const jsonRpc=new JsonRpc(URL);

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Navbar component renders without crashing', () =>{
  const div = document.createElement('div');
  ReactDOM.render(<Navbar />, div);
  ReactDOM.unmountComponentAtNode(div);
})

it('Landing component renders without crashing', () =>{
  const div = document.createElement('div');
  ReactDOM.render(<Landing />, div);
  ReactDOM.unmountComponentAtNode(div);
})

it('Footer component renders without crashing', () =>{
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
  ReactDOM.unmountComponentAtNode(div);
})

it('BlockInfo component renders without crashing', () =>{
  const div = document.createElement('div');
  ReactDOM.render(<BlockInfo information={block_response} />, div);
  ReactDOM.unmountComponentAtNode(div);
})

it('JsonRpc Doesnt crash', () => {
  expect(JsonRpc).toBeTruthy();
});
