import React from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import {Image} from 'react-bootstrap';

const ReactGridLayout = WidthProvider(RGL);

export default class NoDraggingLayout extends React.PureComponent {
  static defaultProps = {
    className: "layout",
    isDraggable: false,
    isResizable: false,
    items: 20,
    cols: 6,
    rowHeight: 20,
    onLayoutChange: function() {}
  };

  constructor(props) {
    super(props);

    const layout = this.generateLayout();
    this.state = { layout };
  }

  generateDOM() {
    // return _.map(_.range(this.props.items), function(i) {
    //   return (
    //     <div key={i}>
    //       <span className="text">{i}</span>
    //     </div>
    //   );
    // });
    return this.props.pics.map((pic,i) => {
      return (
        <div key={i}>
          {/* <span className="text">{i}</span> */}
          <Image src={pic} style={{'height':'inherit','width':'inherit'}}/>
        </div>
      );
    });
  }

  generateLayout() {
    const p = this.props;
    // return _.map(new Array(p.items), function(item, i) {
    //   var y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
    //   return {
    //     x: (i * 2) % 12,
    //     y: Math.floor(i / 6) * y,
    //     w: 2,
    //     h: y,
    //     i: i.toString()
    //   };
    // });
    return this.props.pics.map((pic, i) => {
      var y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
      
      return {
        x: (i * 2) % this.props.cols,
        y: Math.floor(i / this.props.cols) * y,
        w: 2,
        h: y,
        i: i.toString()
      };
    });
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  }

  render() {
    return (
      <ReactGridLayout
        layout={this.state.layout}
        onLayoutChange={this.onLayoutChange}
        {...this.props}
      >
        {this.generateDOM()}
      </ReactGridLayout>
    );
  }
}

// if (process.env.STATIC_EXAMPLES === true) {
//   import("../test-hook.jsx").then(fn => fn.default(NoDraggingLayout));
// }