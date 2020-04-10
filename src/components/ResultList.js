import React from "react";
import { Link } from "react-router-dom";

const ResultList = props => {
  return (
    <div>
      {props.course.title} -{" "}
      <Link to={`${props.course.courseId}`}>More Detail</Link>
    </div>
  );
};

export default ResultList;
