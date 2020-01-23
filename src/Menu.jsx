const React = require('react');
import css from './Menu.css';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="menu-main">
        <h1>Menu</h1>
      </div>
    );
  }
}

export default Menu;