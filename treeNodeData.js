// assets/treeNodeData.js
import treeNode1ImgLeft from './images/1.JPG';
import treeNode1ImgRight from './images/2.JPG';
import treeNode2ImgLeft from './images/3.JPG';
import treeNode2ImgRight from './images/4.JPG';
import treeNode3ImgLeft from './images/5.JPG';
import treeNode3ImgRight from './images/6.JPG';
import bgImage from './images/bg1.JPG';

const treeNodeData = {
  treeNode1: {
    leftLink: '/treeNode2',
    rightLink: '/treeNode3',
    leftImage: treeNode1ImgLeft,
    rightImage: treeNode1ImgRight,
    bgImage: bgImage,
  },
  treeNode2: {
    leftLink: '/gallery',
    rightLink: '/typedPoem',
    leftImage: treeNode2ImgLeft,
    rightImage: treeNode2ImgRight,
    bgImage: bgImage,
  },
  treeNode3: {
    leftLink: '/videoList', // Update this line
    rightLink: '/blog',
    leftImage: treeNode3ImgLeft,
    rightImage: treeNode3ImgRight,
    bgImage: bgImage,
  },
};

export default treeNodeData;
