import React, {PropTypes} from 'react';

export default class HelloComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  sayHello() {
    this.props.sayHello("Hello World!");
  }

  sayHelloAsync() {
    this.props.sayHelloAsync("Hello World Async!");
  }

  render() {
    let message = this.props.hello.pending ? 'Please wait...' : this.props.hello.message;
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <h1>Hello App</h1>

            <button className="btn btn-default"
                disabled={this.props.hello.pending}
                onClick={this.sayHello.bind(this)}>
                Say Hello
            </button>

            <button style={{marginLeft: '1em'}}
                disabled={this.props.hello.pending}
                onClick={this.sayHelloAsync.bind(this)} className="btn btn-default">
                Say Hello Async
            </button>

          </div>
        </div>
        <div className="row" style={{marginTop: '1em'}}>
          <div className="col-md-12">
            {message}
          </div>
        </div>
      </div>
    );
  }
}

HelloComponent.propTypes = {
  hello: PropTypes.object,
  sayHello: PropTypes.func,
  sayHelloAsync: PropTypes.func,
  pending: PropTypes.bool,
  message: PropTypes.string
};
