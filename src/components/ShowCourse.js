import React from "react";
import { Icon, Image } from "semantic-ui-react";

const ShowCourse = props => {
  const {
    title,
    author,
    shortDescription,
    duration,
    durationPeriod,
    imgUrl,
    level,
    url
  } = props.location.state.course;
  return (
    <div>
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
    </div>
  );
};

export default ShowCourse;
