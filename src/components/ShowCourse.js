import React, { Component } from "react";
import { Container, Button, Icon, Image } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

class ShowCourse extends Component {
  previousPage = () => {
    window.location.href = "/";
  };
  render() {
    const {
      title,
      author,
      shortDescription,
      duration,
      durationPeriod,
      imgUrl,
      level,
      url
    } = this.props.location.state.course;

    return (
      <Container>
        <Button floated='right' onClick={this.previousPage}>
          Back
        </Button>
        <h1>{title}</h1>
        <h3>By: {author}</h3>
        <Image src={imgUrl} size='medium' />
        <div>
          {shortDescription}{" "}
          <a href={url}>
            {" "}
            <Icon name='angle double right'></Icon>
          </a>
        </div>
        <div>
          Time: {duration} {durationPeriod}
        </div>
        <div>Level: {level}</div>
      </Container>
    );
  }
}
export default ShowCourse;
