// src/helpers/helpers.js

export const truncate = (str, maxLength = 20) => {
  if (!str) return "";
  return str.length > maxLength
    ? str.slice(0, maxLength) + "..."
    : str;
};

export const capitalize = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};