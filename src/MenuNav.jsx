/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
const React = require('react');

class MenuNav extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleView = this.handleView.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKeyPress2 = this.handleKeyPress2.bind(this);
  }

  handleClick(index) {
    this.props.action(index);
  }

  handleKeyPress(index, e) {
    if (e.key === 'Enter' || e.key === ' ') {
      this.props.action(index);
    }
  }

  handleView() {
    this.props.actionView();
  }

  handleKeyPress2(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      this.props.actionView();
    }
  }

  render() {
    if (!this.props.menus) return null;

    const viewClass = this.props.viewFull ? ' full-view' : '';

    return (
      <div className={`menu-and-nav${viewClass}`}>
        <div className="menu-nav">
          {this.props.menus.map((menu, index) => (
            <div
              className={`menu-nav-item${index === this.props.menuSelected ? ' menu-nav-item-selected' : ''}`}
              key={index}
              role="button"
              tabIndex="0"
              onClick={this.handleClick.bind(this, index)}
              onKeyPress={this.handleKeyPress.bind(this, index)}
            >
              {menu.title}
            </div>
          ))}
        </div>
        <div className="menu-menu-description">
          {this.props.menus[this.props.menuSelected].description}
        </div>

        {this.props.menus[this.props.menuSelected].sections.map((section, index) => (
          <div className="menu-section" key={index}>
            <div className="menu-section-title">
              {section.title}
            </div>
            <div className="menu-items">
              {section.items.map((item, index2) => (
                <div className="menu-item" key={index2}>
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
              ))}
            </div>
          </div>
        ))}
        <div className="menu-collapse">
          {this.props.viewFull ? null : <div className="menu-collapse1" />}
          <div className="menu-collapse2">
            <div className="container1">
              <div
                key="mykey"
                className="menu-view"
                role="button"
                tabIndex="0"
                onClick={this.handleView}
                onKeyPress={this.handleKeyPress2}
              >
                {this.props.viewFull ? 'Collapse menu' : 'View full menu'}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuNav;
