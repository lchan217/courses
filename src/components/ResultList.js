import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import "../css/ResultList.css";

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

  handleOnTag = tag => {
    this.props.receiveTag(tag);
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
          <Card className='course-card'>
            <Image src={course.imgUrl} />
            <Card.Content>
              <Card.Header>{course.title}</Card.Header>
              <Card.Meta>Author: {course.author}</Card.Meta>
              <Card.Description>
                {course.shortDescription.slice(0, 300)}
              </Card.Description>
              <br />
              <Button primary onClick={() => this.handleOnClick(course)}>
                More Detail
              </Button>
            </Card.Content>
            <Card.Content extra>
              {course.quzeTags &&
                course.quzeTags
                  .split(",")

                  .map(tag => {
                    return (
                      <Button
                        size='tiny'
                        basic
                        color='grey'
                        onClick={() => this.handleOnTag(tag)}
                        className='tag-button'
                      >
                        {tag}
                      </Button>
                    );
                  })}
            </Card.Content>
          </Card>
        );
      });
    }

    return (
      <div>
        {" "}
        <Card.Group>{data}</Card.Group>
      </div>
    );
  }
}

export default ResultList;
