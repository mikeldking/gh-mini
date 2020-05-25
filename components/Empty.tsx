import React from "react";

/**
 * Displays to the user that there are no results
 * @param {object} props
 * @param [string] props.message - the message that will be displayed in the component
 */
const Empty = ({ message = "No Results Found" }: { message?: string }) => {
  return (
    <div className="m-auto text-center text-gray-600  my-5">{message}</div>
  );
};

export default Empty;
