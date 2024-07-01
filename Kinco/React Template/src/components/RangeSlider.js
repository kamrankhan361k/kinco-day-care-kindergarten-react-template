import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import React, { Fragment } from "react";

class RangeSlider extends React.Component {
  state = {
    textValue: null,
    percent: null,
    start: 20,
    end: 800,
  };

  onSlide = (render, handle, value, un, percent) => {
    this.setState({
      textValue: value[0].toFixed(2),
      percent: percent[0].toFixed(2),
    });
  };
  updateValues = (value) => {
    this.setState({
      start: value[0],
      end: value[1],
    });
  };
  render() {
    const { start, end } = this.state;
    return (
      <Fragment>
        <Nouislider
          connect
          range={{ min: 5, max: 5960 }}
          start={[5, 5960]}
          step={1}
          onSlide={this.onSlide}
          onUpdate={(value) => this.updateValues(value)}
          id="slider-range"
          className="mb-3"
        />
        {start && end && (
          <div className="slider-labels flex">
            <div className="caption">
              <span id="slider-range-value1">${start}</span>
              <span id="slider-range-value2">${end}</span>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

export default RangeSlider;
