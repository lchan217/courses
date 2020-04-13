import React, { Component } from "react";
import { Container, Button, Icon, Image } from "semantic-ui-react";

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
      url,
      programType
    } = this.props.location.state.course;

    return (
      <Container>
        <Button floated='right' onClick={this.previousPage}>
          Home
        </Button>
        <h1>{title}</h1>
        <h3>By: {author}</h3>
        <Image src={imgUrl} size='medium' />
        <br />
        <div>
          {shortDescription}{" "}
          <a href={url}>
            {" "}
            Learn More<Icon name='angle double right'></Icon>
          </a>
        </div>
        <div>
          <b>Time:</b> {duration} {durationPeriod}
        </div>
        <div>
          <b>Level:</b> {level}
        </div>
        <div>
          <b>Program Type:</b> {programType}
        </div>
      </Container>
    );
  }
}
export default ShowCourse;
