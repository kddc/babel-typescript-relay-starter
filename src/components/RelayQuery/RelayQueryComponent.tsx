import React from 'react';

interface Props {
  links: any
}

interface State {
}

class RelayQueryComponent extends React.Component<Props, State> {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        Relay Query Result
        {this.props.links.map((link: any) => (
          <div key={link.node.id} style={{ marginTop: 16 }}>{link.node.id}</div>
        ))}
      </div>
    );
  }
}

export default RelayQueryComponent;
