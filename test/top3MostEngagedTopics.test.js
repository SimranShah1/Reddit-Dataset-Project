const top3MostEngagedTopics = require("../solution/top3MostEngagedTopics");

const posts = [
    {
        "id": "post-1",
        "topicId": "topic-1",
    },
    {
        "id": "post-2",
        "topicId": "topic-1",
    },
    {
        "id": "post-3",
        "topicId": "topic-1",
    },
    {
        "id": "post-4",
        "topicId": "topic-1",
    },
    {
        "id": "post-5",
        "topicId": "topic-1",
    },
    {
        "id": "post-6",
        "topicId": "topic-1",
    },
    {
        "id": "post-7",
        "topicId": "topic-2",
    },
    {
        "id": "post-8",
        "topicId": "topic-2",
    },
    {
        "id": "post-9",
        "topicId": "topic-2",
    },
    {
        "id": "post-10",
        "topicId": "topic-2",
    },
    {
        "id": "post-11",
        "topicId": "topic-3",
    },
    {
        "id": "post-12",
        "topicId": "topic-3",
    },
    {
        "id": "post-13",
        "topicId": "topic-3",
    },
    {
        "id": "post-14",
        "topicId": "topic-2",
    },
    {
        "id": "post-15",
        "topicId": "topic-2",
    },
]

const votes = [
    {
        "postId": "post-1",
    },
    {
        "postId": "post-2",
    },
    {
        "postId": "post-3",
    },
    {
        "postId": "post-4",
    },
    {
        "postId": "post-5",
    },
    {
        "postId": "post-6",
    },
    {
        "postId": "post-7",
    },
    {
        "postId": "post-8",
    },
    {
        "postId": "post-9",
    },
    {
        "postId": "post-10",
    },
    {
        "postId": "post-11",
    },
    {
        "postId": "post-12",
    },
    {
        "postId": "post-13",
    },
    {
        "postId": "post-14",
    },
    {
        "postId": "post-15",
    },
    {
        "postId": "post-16",
    }
]

test("Top 3 most engaged topics", () => {
    const result = top3MostEngagedTopics(posts, votes);
    expect(result).toEqual(
        [ 'topic-1', 'topic-2', 'topic-3' ]
    )
})