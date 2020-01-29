/* eslint-disable import/extensions */
// const $ = require('jquery');
// import axios from 'axios';
import './Menu.css';
import MenuNav from './MenuNav.jsx';

const React = require('react');
// const $ = require('jquery');

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
    const { id } = this.props;
    console.log(`requesting ${id}`);
    // $.ajax({
    //   url: `/getmenu/${id}`,
    //   success: (restaurant) => {
    //     this.setState({ menus: restaurant[0].menus });
    //     console.log(`menus = ${restaurant[0].menus.length}`);
    //   },
    //   error: () => {
    //     console.log('Error getting restaurant');
    //   },
    // });
    // axios.get(`/getmenu/${id}`)
    //   .then((result) => {
    //     this.setState({ menus: result.data[0].menus });
    //     console.log(`menus = ${result.data[0].menus.length}`);
    //   });
    fetch(`/getmenu/${id}`)
      .then((response) => response.json())
      .then((myJson) => {
        this.setState({ menus: myJson[0].menus });
        console.log(`menus = ${myJson[0].menus.length}`);
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
