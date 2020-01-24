const React = require('react');
const $ = require('jquery');
import css from './Menu.css';
import MenuNav from './MenuNav.jsx';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: []
    };
  }

  componentDidMount() {
    console.log('requesting')
    $.ajax({
      url: '/getmenu/1',
      success: (restaurant) => {
        this.setState({menus: restaurant[0].menus});
        console.log('menus = ' + restaurant[0].menus.length);
      },
      error: () => {
        console.log("Error getting restaurant");
      }
    });
  }

  render() {
    return (
      <div className="menu-main">
        <h1>Menu</h1>
        <MenuNav menus={this.state.menus} />
      </div>
    );
  }
}

export default Menu;