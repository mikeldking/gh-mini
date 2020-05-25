import React from "react";

/**
 * Renders the org avatar in a consistent style and size
 * @param {object} props
 * @param {string} props.avatarUrl - the url for the avatar image
 */
const OrgImage = ({ avatarUrl }: { avatarUrl: string }) => {
  return (
    <img
      src={avatarUrl}
      className="object-contain h-10 w-10 rounded-lg border shadow-md bg-white"
      alt="organization image"
    />
  );
};

export default OrgImage;
