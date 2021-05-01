export const getBadge = (category) => {
  switch (category) {
    case "Programming":
      return "badge-blue";
    case "Travel":
      return "badge-orange";
    case "Development":
      return "badge-green";
    default:
      return "badge-blue";
  }
};
export const subStringLen = (str, len) => {
  return str.length > len ? `${str.substring(0, len)}...` : str;
};
