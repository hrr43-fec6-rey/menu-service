const React = require('react');

const MenuNav = ({menus}) => {
  return (
    <div className="menu-nav">
      {menus.map(menu =>
        <div className="menu-nav-item" key={menu.title}>
          {menu.title}
        </div>
      )}
    </div>
  );
}

export default MenuNav;