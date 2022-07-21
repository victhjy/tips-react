import React from "react";
export default class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.theLi = React.createRef();
  }
  state = {
    l: [1, "ss 20220720", 34],
    r: [11, 22, 33],
  };
  render() {
    return (
      <div id="nav">
        Hello{this.state.l[0]}
      </div>
    );
  }
}
