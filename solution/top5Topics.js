function top5Topics(posts){
    const topTopics = {};

    posts.forEach((post) => {
        
       if(!topTopics[post.topicId]){ //  not exist
          topTopics[post.topicId]=1;
       }
       else{ //exist
          topTopics[post.topicId]++;
       }
    })
    const sortingTop5Topics = Object.keys(topTopics).sort((a,b) => topTopics[1] - topTopics[1]).slice(0, 5);
    return sortingTop5Topics;
}

module.exports = top5Topics;