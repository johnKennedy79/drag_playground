const images = require.context("../jigsaw/cutups", true);
const imageList = images.keys().map((image) => image.replace("./", ""));

// Function to shuffle an array (pinched from FreeCodeCamp)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const shuffledImages = shuffleArray([...imageList]);

export default shuffledImages;
