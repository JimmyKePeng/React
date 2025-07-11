import { useEffect, useState } from "react";
function notes() {
  localStorage.setItem("name", "Jimmy"); // Save to localStorage
  const value = localStorage.getItem("name"); // Get from localStorage // returns "Jimmy"
  localStorage.removeItem("name"); // Remove from localStorage
  localStorage.clear(); // Clear all keys
  localStorage.setItem("cart", JSON.stringify([1, 2, 3]));
  const cart = JSON.parse(localStorage.getItem("cart")); // [1, 2, 3]
}

function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    let currentValue;
    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (err) {
      console.log(err);
      currentValue = defaultValue;
    }
    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
