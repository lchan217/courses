import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

class ResultList extends Component {
  render() {
    return (
      <div>
        {this.props.course.title} -{" "}
        <Link
          to={{
            pathname: `${this.props.course.courseId}`
          }}
        >
          <Button>More Detail</Button>
        </Link>
      </div>
    );
  }
}

export default ResultList;
