const React = require('react');

class MenuNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewFull: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  handleClick(index) {
    this.props.action(index);
  }

  changeView() {
    this.props.actionView();
  }

  render() {
    if (!this.props.state.menus) return null;

    let viewClass = this.props.state.viewFull ? ' full-view' : '';

    return (
      <div className={'menu-and-nav' + viewClass}>
        <div className="menu-nav">
          {this.props.state.menus.map((menu, index) =>
            <div
              className={'menu-nav-item' + (index === this.props.state.menuSelected ? ' menu-nav-item-selected':'')}
              key={index}
              onClick={this.handleClick.bind(this, index)}
            >
              {menu.title}
            </div>
          )}
        </div>
        <div className="menu-menu-description">
          {this.props.state.menus[this.props.state.menuSelected].description}
        </div>

        {this.props.state.menus[this.props.state.menuSelected].sections.map((section, index) =>
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
          {this.props.state.viewFull ? null : <div className="menu-collapse1"></div>}

          <div className="menu-collapse2">
            <div className="container1">
              <div
                className="menu-view"
                onClick={this.changeView}
              >
                {this.props.state.viewFull ? 'Collapse menu' : 'View full menu'}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuNav;