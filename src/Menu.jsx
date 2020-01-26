const React = require('react');
const $ = require('jquery');
import css from './Menu.css';
import MenuNav from './MenuNav.jsx';
import MenuMenu from './MenuMenu.jsx';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: null,
      menuSelected: 0
    };
    this.selectMenu = this.selectMenu.bind(this);
  }

  componentDidMount() {
    console.log('requesting')
    $.ajax({
      url: '/getmenu/2',
      success: (restaurant) => {
        this.setState({menus: restaurant[0].menus});
        console.log('menus = ' + restaurant[0].menus.length);
      },
      error: () => {
        console.log("Error getting restaurant");
      }
    });
  }

  selectMenu(index) {
    var temp = this.state.menus[index];
    this.setState({
      menuSelected: index
    });
  }

  render() {
    return (
      <div className="menu-main">
        <div className="menu-title">Menu</div>
        <MenuNav
          menus={this.state.menus}
          menuSelected={this.state.menuSelected}
          action={this.selectMenu}
        />
      </div>
    );
  }
}

export default Menu;