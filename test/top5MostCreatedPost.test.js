const top5Post = require("../solution/top5MostCreatedPost");

const posts = [
    {
        "userId": "user-1",
    },
    {
        "userId": "user-1",
    },
    {
        "userId": "user-1",
    },
    {
        "userId": "user-1",
    },
    {
        "userId": "user-1",
    },
    {
        "userId": "user-1",
    },
    {
        "userId": "user-1",
    },
    {
        "userId": "user-1",
    },
    {
        "userId": "user-1",
    },
    {
        "userId": "user-1",
    },
    {
        "userId": "user-2",
    },
    {
        "userId": "user-2",
    },
    {
        "userId": "user-2",
    },
    {
        "userId": "user-2",
    },
    {
        "userId": "user-2",
    },
    {
        "userId": "user-2",
    },
    {
        "userId": "user-2",
    },
    {
        "userId": "user-2",
    },
    {
        "userId": "user-3",
    },
    {
        "userId": "user-3",
    },
    {
        "userId": "user-3",
    },
    {
        "userId": "user-3",
    },
    {
        "userId": "user-3",
    },
    {
        "userId": "user-3",
    },
    {
        "userId": "user-4",
    },
    {
        "userId": "user-4",
    },
    {
        "userId": "user-4",
    },
    {
        "userId": "user-4",
    },
    {
        "userId": "user-5",
    },
    {
        "userId": "user-5",
    },
    {
        "userId": "user-5",
    },
    {
        "userId": "user-6",
    },
    {
        "userId": "user-6",
    },
    {
        "userId": "user-7",
    }
]

test("Top 5 created post", () => {
    const result = top5Post(posts);
    expect(result).toEqual(
        [ 'user-1', 'user-2', 'user-3', 'user-4', 'user-5' ]
    )
})