//jshint esversion:6

exports.getDate = function () {
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "short",
  };

  return today.toLocaleDateString("en-US", options);
};

exports.getDay = function () {
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "short",
  };

  return today.toLocaleDateString("en-US", options);
};

// exports.getDay = function () {
//   const year = new Date().getFullYear();

//   return year.toLocaleDateString("en-US");
// };
