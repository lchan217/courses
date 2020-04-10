import React from "react";

const ShowCourse = props => {
  const { title } = props.location.state.course;
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default ShowCourse;
