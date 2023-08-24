import React, { Component } from "react";

const WithLogging = (WrappedComponent) => {
  return class extends Component {
    render() {
      console.log("Component rendered:", WrappedComponent.name);
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default WithLogging;
