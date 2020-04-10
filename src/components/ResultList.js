import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import ShowCourse from "./ShowCourse";

class ResultList extends Component {
  constructor() {
    super();
    this.state = {
      showCourse: false,
      course: {}
    };
  }

  handleOnClick = course => {
    this.setState({ showCourse: true, course: course });
  };

  render() {
    let data;
    if (this.state.showCourse) {
      data = <ShowCourse course={this.state.course} />;
    } else {
      data = this.props.courses.map(course => {
        return (
          <li>
            {course.title} -{" "}
            <Button onClick={() => this.handleOnClick(course)}>
              More Detail
            </Button>
          </li>
        );
      });
    }

    return <div>{data}</div>;
  }
}

export default ResultList;
