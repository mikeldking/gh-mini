import React from "react";
import styles from "./Spinner.module.css";

const Spinner = ({ className }: { className?: string }) => {
  return (
    <span
      className={`inline-block ease-linear rounded-full border-2 border-t-2 h-4 w-4 ${styles.loader} ${className}`}
    ></span>
  );
};

export default Spinner;
