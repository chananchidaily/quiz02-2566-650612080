"use client";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <PostOwner
          userImagePath="/profileImages/tonkhao.jpg"
          username="Chanancchida Thawornwong 650612080"
          postText="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"
          likeNum="100 คน"
        />

        {/* map-loop render Comment component here */}

        {comments.map((cmt) => (
          <Comment
            userImagePath={cmt.userImagePath}
            username={cmt.username}
            replyText={cmt.replyText}
            likeNum={cmt.likeNum}
            key={cmt.id}
          />
        ))}
      </div>
    </div>
  );
}
