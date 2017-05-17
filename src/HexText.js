import React, { Component } from 'react';

const styles = {
  fontSize: '24px',
  fontFamily: 'monospace',
  color: '#b6b6b6',
  display: 'inline-block',
  marginTop: '20px',
  textAlign: 'center',
  width: '100%',
}

export default class HexText extends Component {
  render() {
    return (
      <div style={{ ...styles }}>
        { this.props.text }
      </div>
    );
  }
}