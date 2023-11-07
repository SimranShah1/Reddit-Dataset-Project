function top3Post(votes) {
  const topPost = {};

  votes.forEach((vote) => {
    if (!topPost[vote.postId]) {
      //not present
      if (vote.type === "up") {
        topPost[vote.postId] = 1;
      } else {
        topPost[vote.postId] = -1;
      }
    } else {
      //already exist
      if (vote.type === "up") {
        topPost[vote.postId]++;
      } else {
        topPost[vote.postId]--;
      }
    }
  });

  const sortingTopPost = Object.entries(topPost)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);
  return sortingTopPost;
}

module.exports = top3Post;
