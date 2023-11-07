function top5Post(posts){
    const topPost = {};

    posts.forEach((post) => {
      if(!topPost[post.userId]){ //not exist
         topPost[post.userId] = 1;
      }else{ //exist
         topPost[post.userId]++;
      }
    })
    const sortingTopPost = Object.keys(topPost).sort((a,b) => topPost[1] - topPost[1]).slice(0,5);
    return sortingTopPost;
}

module.exports=top5Post;