import React, { Component } from 'react';
import { connect } from 'react-redux';
import objectAssign from 'object-assign';

import { getBoundActions } from '../store/actions';
import HelloComponent from './HelloComponent';

class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HelloComponent {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {
    hello: state.hello
  };
}
function mapDispatchToProps(dispatch) {
  return objectAssign({},
    getBoundActions(dispatch).hello()
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
