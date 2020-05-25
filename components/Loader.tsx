import React from "react";
import Spinner from "./Spinner";

/**
 * A load indicator
 */
const Loader = () => {
  return (
    <div key="loading" className="bg-white rounded-full py-3 px-5 shadow flex">
      <Spinner className="mr-2" />
      Loading
    </div>
  );
};

export default Loader;
