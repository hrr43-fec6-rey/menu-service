/* eslint-disable import/extensions */
import Title from './Title.jsx';
import Menu from './Menu.jsx';

const React = require('react');
const ReactDOM = require('react-dom');

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

ReactDOM.render(<Title id={id} />, document.getElementById('title'));
ReactDOM.render(<Menu id={id} />, document.getElementById('root'));
