import React from 'react';
import { Link } from 'react-router';

export default class NotFound extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
        <h3>Sorry that page does not exist</h3>
        <Link className="btn btn-warning" to="/">Back</Link>
        </div>
      </div>
    );
  }
}
