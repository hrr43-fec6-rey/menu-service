/* eslint-disable import/extensions */
import './Menu.css';
import MenuNav from './MenuNav.jsx';

const React = require('react');
const $ = require('jquery');


class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: null,
      menuSelected: 0,
      viewFull: false,
    };
    this.selectMenu = this.selectMenu.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  componentDidMount() {
    console.log('requesting');
    $.ajax({
      url: '/getmenu/2',
      success: (restaurant) => {
        this.setState({ menus: restaurant[0].menus });
        console.log(`menus = ${restaurant[0].menus.length}`);
      },
      error: () => {
        console.log('Error getting restaurant');
      },
    });
  }

  selectMenu(index) {
    this.setState({
      menuSelected: index,
    });
  }

  changeView() {
    const { viewFull } = this.state;
    this.setState({ viewFull: !viewFull });
  }

  render() {
    const { menus, menuSelected, viewFull } = this.state;
    return (
      <div className="menu-main">
        <div className="menu-title">Menu</div>
        <MenuNav
          menus={menus}
          menuSelected={menuSelected}
          viewFull={viewFull}
          action={this.selectMenu}
          actionView={this.changeView}
        />
      </div>
    );
  }
}

export default Menu;
