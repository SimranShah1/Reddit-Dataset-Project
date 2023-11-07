const fs = require('fs');

const posts = require("./posts.json");
const votes = require("./votes.json");


const top3Post = require("./solution/top3Post");
const result1 = top3Post(votes);
fs.writeFileSync('./output/top3Posts.json',JSON.stringify(result1,null,2));

const top5Topics = require("./solution/top5Topics");
const result2 = top5Topics(posts);
fs.writeFileSync('./output/top5Topics.json',JSON.stringify(result2,null,2));

const top5ActiveUsers = require("./solution/top5ActiveUsers");
const result3 = top5ActiveUsers(posts, votes);
fs.writeFileSync('./output/top5ActiveUsers.json',JSON.stringify(result3,null,2));

const top5Post = require("./solution/top5MostCreatedPost");
const result4 = top5Post(posts);
fs.writeFileSync('./output/top5MostCreatedPost.json',JSON.stringify(result4,null,2));

const top3MostEngagedTopics = require("./solution/top3MostEngagedTopics");
const result5 = top3MostEngagedTopics(posts, votes);
fs.writeFileSync('./output/top3MostEngagedTopics.json',JSON.stringify(result5,null,2));
