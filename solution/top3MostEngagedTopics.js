function top3MostEngagedTopics(posts, votes){
    const topTopics = {};

    posts.forEach((post) => {
        if(!topTopics[post.id]){
            topTopics[post.id] = post.topicId;
        }
    })
    
    const storingCount = {};
    votes.forEach((vote) => {
        const topicId = topTopics[vote.postId];
        if (storingCount[topicId] === undefined) {
            storingCount[topicId] = 0;
        }
        storingCount[topicId]++;
    });
    const sortingTopics = Object.keys(storingCount).sort((a,b) => storingCount[1] - storingCount[1]).slice(0,3);
    return sortingTopics;
}
module.exports = top3MostEngagedTopics;
