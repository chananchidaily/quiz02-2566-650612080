export const Comment = ({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}) => {
  const numlikess = likeNum > 0 ;

  return (
    <div className="texts">
      <img src={userImagePath} alt={




      your code here...
      {/* map-loop render Reply component here */}
    </div>
  );
};
