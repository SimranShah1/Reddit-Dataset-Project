const top3Post = require("../solution/top3Post");
const votes = [
  {
    type: "down",
    postId: "post-1",
  },
  {
    type: "down",
    postId: "post-1",
  },
  {
    type: "up",
    postId: "post-2",
  },
  {
    type: "down",
    postId: "post-3",
  },
  {
    type: "down",
    postId: "post-2",
  },
  {
    type: "up",
    postId: "post-3",
  },
  {
    type: "up",
    postId: "post-4",
  },
  {
    type: "down",
    postId: "post-4",
  },
  {
    type: "up",
    postId: "post-5",
  },
  {
    type: "down",
    postId: "post-6",
  },
  {
    type: "up",
    postId: "post-6",
  },
  {
    type: "down",
    postId: "post-6",
  },
  {
    type: "down",
    postId: "post-6",
  },
  {
    type: "up",
    postId: "post-6",
  },
  {
    type: "up",
    postId: "post-7",
  },
  {
    type: "down",
    postId: "post-7",
  },
  {
    type: "up",
    postId: "post-7",
  },
];

test("Top three Post", () => {
  const result = top3Post(votes);
  expect(result).toEqual([
    ["post-5", 1],
    ["post-7", 1],
    ["post-2", 0],
  ]);
});
