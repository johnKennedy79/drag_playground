const imageList = [
  "image_part_001.jpg",
  "image_part_002.jpg",
  "image_part_003.jpg",
  "image_part_004.jpg",
  "image_part_005.jpg",
  "image_part_006.jpg",
  "image_part_007.jpg",
  "image_part_008.jpg",
  "image_part_009.jpg",
  "image_part_010.jpg",
  "image_part_011.jpg",
  "image_part_012.jpg",
  "image_part_013.jpg",
  "image_part_014.jpg",
  "image_part_015.jpg",
  "image_part_016.jpg",
];

export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const shuffledImages = shuffleArray([...imageList]);

export default shuffledImages;
