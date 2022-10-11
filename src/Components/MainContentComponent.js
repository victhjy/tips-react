import React from "react";
export default class MainContentComponent extends React.Component {
    state = {
        curTime:new Date().toLocaleDateString()
      }

  render() {
    return <div id="content">
        <div>访问日期  {this.state.curTime}</div>
        <div>from Signal</div>
    </div>;
  }
}
