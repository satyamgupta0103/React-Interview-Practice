import { memo } from "react";

const MemoizedChild = ({ name }) => {
  console.log("MemoizedChild is rendered!");

  return <div>MemoizedChild Component</div>;
};

export default memo(MemoizedChild);
