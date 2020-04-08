import React from "react"
import { usePromiseTracker } from "react-promise-tracker"
import "./spinner.css"

export const Spinner = (props) => {
  const { promiseInProgress } = usePromiseTracker({area: props.area, delay: 0});
    console.log(props)
  return (
    promiseInProgress && (
      <div className="spinner">
        Loading...
      </div>
    )
  );
};