const top5Topics = require("../solution/top5Topics");

const posts = [
    {
        "topicId": "topic-10",
    },
    {
        "topicId": "topic-10",
    },
    {
        "topicId": "topic-10",
    },
    {
        "topicId": "topic-10",
    },
    {
        "topicId": "topic-10",
    },
    {
        "topicId": "topic-10",
    },
    {
        "topicId": "topic-10",
    },
    {
        "topicId": "topic-1",
    },
    {
        "topicId": "topic-1",
    },
    {
        "topicId": "topic-1",
    },
    {
        "topicId": "topic-1",
    },
    {
        "topicId": "topic-2",
    },
    {
        "topicId": "topic-2",
    },
    {
        "topicId": "topic-2",
    },
    {
        "topicId": "topic-2",
    },
    {
        "topicId": "topic-2",
    },
    {
        "topicId": "topic-2",
    },
    {
        "topicId": "topic-3",
    },
    {
        "topicId": "topic-3",
    },
    {
        "topicId": "topic-3",
    },
    {
        "topicId": "topic-5",
    },
    {
        "topicId": "topic-5",
    },
    {
        "topicId": "topic-15",
    },{
        "topicId": "topic-15",
    },

    {
        "topicId": "topic-15",
    },
    {
        "topicId": "topic-3",
    }   
];

test("Top 5 topics", () => {
    const result = top5Topics(posts);
    expect(result).toEqual(
        [ 'topic-10', 'topic-1', 'topic-2', 'topic-3', 'topic-5' ]
    );
});
