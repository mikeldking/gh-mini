import { useState, useEffect } from "react";
/**
 * hook to debounce the input
 * @param value
 * @param delay
 */
function useDebounce<ValueType>(value: ValueType, delay: number) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState<ValueType>(value);

  useEffect(
    () => {
      // Set debouncedValue to value (passed in) after the specified delay
      const timeoutId = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      // Return a cleanup function that will be called every time
      return () => {
        clearTimeout(timeoutId);
      };
    },
    // Only re-call effect if value changes
    [value]
  );

  return debouncedValue;
}

export default useDebounce;
