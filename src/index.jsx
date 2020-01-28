// eslint-disable-next-line import/extensions
import Menu from './Menu.jsx';

const React = require('react');
const ReactDOM = require('react-dom');

const id = document.getElementById('root').getAttribute('data-id');

ReactDOM.render(<Menu id={id} />, document.getElementById('root'));
