function top5ActiveUsers(posts, votes){
    //calc the count of creating the post
    const activeUsers = {};

    posts.forEach((post) => {
      if(!activeUsers[post.userId]){ //not exist
         activeUsers[post.userId] = 5;
      }else{ //exist
        activeUsers[post.userId]+=5;
      }
    })
    votes.forEach((vote) => {
            activeUsers[vote.userId]++;
    })
    
    const sortingTop5ActiveUsers = Object.keys(activeUsers).sort((a,b) => activeUsers[b] - activeUsers[a]).slice(0,5);
    return sortingTop5ActiveUsers;

}
module.exports = top5ActiveUsers;