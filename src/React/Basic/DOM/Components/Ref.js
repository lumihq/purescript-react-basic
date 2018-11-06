"use strict";

var React = require("react");

exports.mkRef = function(toMaybe) {
  var Ref = function(_props) {
    this.state = { node: null };
    this.ref = React.createRef();
    return this;
  };

  Ref.prototype = Object.create(React.Component.prototype);

  Ref.displayName = "Ref";

  Ref.prototype.syncRef = function() {
    if (this.state.node !== this.ref.current) {
      this.setState({ node: this.ref.current });
    }
  };

  Ref.prototype.componentDidMount = function() {
    this.syncRef();
  };

  Ref.prototype.componentDidUpdate = function() {
    this.syncRef();
  };

  Ref.prototype.render = function() {
    return React.createElement(
      "react-basic-ref",
      { ref: this.ref },
      this.props.render(toMaybe(this.state.node))
    );
  };

  return Ref;
};
