// Imports all images from ../assets/images
const reqJpgs = require.context("../assets/images", true, /\.jpg/);
const toursData = reqJpgs.keys().map((path) => ({
  name: `${path.split(".")[1].split("/")[1]}`,
  nameFormatted: `${path
    .split(".")[1]
    .substring(1)
    .split("-")
    .map((string) => string.charAt(0).toUpperCase().concat(string.slice(1)))
    .join(" ")}`,
  imageFile: reqJpgs(path).default,
}));

export default toursData;
