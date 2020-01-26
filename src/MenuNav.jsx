const React = require('react');

class MenuNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    this.props.action(index);
  }

  render() {
    if (!this.props.menus) return null;
    return (
      <div className="menu-and-nav">
        <div className="menu-nav">
          {this.props.menus.map((menu, index) =>
            <div
              className={'menu-nav-item' + (index === this.props.menuSelected ? ' menu-nav-item-selected':'')}
              key={index}
              onClick={this.handleClick.bind(this, index)}
            >
              {menu.title}
            </div>
          )}
        </div>
        <div className="menu-menu-description">
          {this.props.menus[this.props.menuSelected].description}
        </div>

        {this.props.menus[this.props.menuSelected].sections.map((section, index) =>
        <div className="menu-section" key={index}>
          <div className="menu-section-title">
            {section.title}
          </div>
          <div className="menu-items">
            {section.items.map((item, index) =>
              <div className="menu-item" key={index}>
                <div className="menu-item-title">
                  <div className="menu-item-title-name">
                    {item.title}
                  </div>
                  <div className="menu-item-title-price">
                    {item.price}
                  </div>
                </div>
                <div className="menu-item-description">
                  {item.description}
                </div>
              </div>
            )}
          </div>
        </div>
        )}
        <div className="menu-collapse">
          <div className="menu-collapse1"></div>
          <div className="menu-collapse2">
            <div className="container1">
              <div className="menu-view">View full menu</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuNav;