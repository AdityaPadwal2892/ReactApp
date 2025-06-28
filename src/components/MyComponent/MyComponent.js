import React    from "react";
import template from "./MyComponent.jsx";

class MyComponent extends React.Component {
  render() {
    return template.call(this);
  }
}

export default MyComponent;
