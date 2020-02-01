/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Menu.css';
import MenuNav from './MenuNav.jsx';

const Menu = ({ id }) => {
  const [menus, setMenus] = useState([{ description: '', sections: [] }]);
  const [menuSelected, setMenuSelected] = useState(0);
  const [viewFull, setViewFull] = useState(false);

  useEffect(() => {
    fetch(`/getmenu/${id}`)
      .then((response) => response.json())
      .then((myJson) => {
        setMenus(myJson[0].menus);
        console.log(`menus = ${myJson[0].menus.length}`);
      });
  }, []);

  function selectMenu(index) {
    setMenuSelected(index);
  }

  function changeView() {
    setViewFull(!viewFull);
  }
  return (
    <div className="menu-main">
      <div className="menu-title">Menu</div>
      <MenuNav
        menus={menus}
        menuSelected={menuSelected}
        viewFull={viewFull}
        action={selectMenu}
        actionView={changeView}
      />
    </div>
  );
};

Menu.defaultProps = {
  id: '1',
};

Menu.propTypes = {
  id: PropTypes.string,
};

export default Menu;
