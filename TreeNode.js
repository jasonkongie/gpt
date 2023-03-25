import React from 'react';
import { Link } from 'react-router-dom';

const TreeNode = ({ treeNodeData }) => {
  if (!treeNodeData) {
    return null;
  }

  const { leftLink, rightLink, leftImage, rightImage, bgImage } = treeNodeData;

  return (
    <div
      className="bg-cover bg-center bg-no-repeat w-screen h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="grid grid-cols-2 gap-0.5">
        <Link to={leftLink}>
          <img src={leftImage} alt="Left node" className="w-1/3 h-auto mx-auto" />
        </Link>
        <Link to={rightLink}>
          <img src={rightImage} alt="Right node" className="w-1/3 h-auto mx-auto" />
        </Link>
      </div>
    </div>
  );
};

export default TreeNode;
