import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";

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
      data = (
        <Redirect
          to={{
            pathname: `${this.state.course.courseId}`,
            state: { course: this.state.course }
          }}
        />
      );
    } else {
      data = this.props.courses.map(course => {
        return (
          <Card>
            <Image src={course.imgUrl} />
            <Card.Content>
              <Card.Header>{course.title}</Card.Header>
              <Card.Meta>Author: {course.author}</Card.Meta>
              <Card.Description>
                {course.shortDescription.slice(0, 300)}
              </Card.Description>
              <br />
              <Button onClick={() => this.handleOnClick(course)}>
                More Detail
              </Button>
            </Card.Content>
          </Card>
        );
      });
    }

    return (
      <div>
        {" "}
        <Card.Group itemsPerRow={3}>{data}</Card.Group>
      </div>
    );
  }
}

export default ResultList;
