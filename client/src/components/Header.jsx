const React = require('react');

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <div className="header">
        <h1 className="header-text">Hack Reactor Helpdesk Monitoring</h1>
      </div>
    )
  }
};

module.exports = {
  Header
};
