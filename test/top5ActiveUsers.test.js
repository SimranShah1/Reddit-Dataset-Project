const top5ActiveUsers = require("../solution/top5ActiveUsers");

const posts = [
    {
        "userId": "user-22",
    },
    {
        "userId": "user-22",
    },
    {
        "userId": "user-22",
    },
    {
        "userId": "user-22",
    },
    {
        "userId": "user-22",
    },
    {
        "userId": "user-22",
    },
    {
        "userId": "user-22",
    },
    {
        "userId": "user-22",
    },
    {
        "userId": "user-22",
    },
    {
        "userId": "user-22",
    },
    {
        "userId": "user-23",
    },
    {
        "userId": "user-23",
    },
    {
        "userId": "user-23",
    },
    {
        "userId": "user-23",
    },
    {
        "userId": "user-23",
    },
    {
        "userId": "user-23",
    },
    {
        "userId": "user-23",
    },
    {
        "userId": "user-23",
    },
    {
        "userId": "user-24",
    },
    {
        "userId": "user-24",
    },
    {
        "userId": "user-24",
    },
    {
        "userId": "user-24",
    },
    {
        "userId": "user-24",
    },
    {
        "userId": "user-24",
    },
    {
        "userId": "user-25",
    },
    {
        "userId": "user-25",
    },
    {
        "userId": "user-25",
    },
    {
        "userId": "user-25",
    },
    {
        "userId": "user-25",
    },
    {
        "userId": "user-26",
    },
    {
        "userId": "user-26",
    },
    {
        "userId": "user-26",
    },
    {
        "userId": "user-26",
    },
    {
        "userId": "user-27",
    },
    {
        "userId": "user-27",
    },
    {
        "userId": "user-28",
    }
]

const votes = [
    {
        "type": "up",
        "userId": "user-22"
    },
    {
        "type": "up",
        "userId": "user-22"
    },
    {
        "type": "down",
        "userId": "user-22"
    },
    {
        "type": "up",
        "userId": "user-22"
    },
    {
        "type": "down",
        "userId": "user-22"
    },
    {
        "type": "up",
        "userId": "user-22"
    },
    {
        "type": "up",
        "userId": "user-22"
    },
    {
        "type": "up",
        "userId": "user-22"
    },
    {
        "type": "down",
        "userId": "user-22"
    },
    {
        "type": "down",
        "userId": "user-22"
    },
    {
        "type": "up",
        "userId": "user-23"
    },
    {
        "type": "up",
        "userId": "user-23"
    },
    {
        "type": "up",
        "userId": "user-23"
    },
    {
        "type": "up",
        "userId": "user-23"
    },
    {
        "type": "up",
        "userId": "user-23"
    },
    {
        "type": "down",
        "userId": "user-23"
    },
    {
        "type": "down",
        "userId": "user-23"
    },
    {
        "type": "up",
        "userId": "user-23"
    },
    {
        "type": "up",
        "userId": "user-24"
    },
    {
        "type": "up",
        "userId": "user-24"
    },
    {
        "type": "up",
        "userId": "user-24"
    },
    {
        "type": "up",
        "userId": "user-24"
    },
    {
        "type": "up",
        "userId": "user-24"
    },
    {
        "type": "up",
        "userId": "user-24"
    },
    {
        "type": "down",
        "userId": "user-24"
    },
    {
        "type": "up",
        "userId": "user-25"
    },
    {
        "type": "down",
        "userId": "user-25"
    },
    {
        "type": "up",
        "userId": "user-25"
    },
    {
        "type": "up",
        "userId": "user-25"
    },
    {
        "type": "down",
        "userId": "user-25"
    },
    {
        "type": "down",
        "userId": "user-26"
    },
    {
        "type": "up",
        "userId": "user-26"
    },
    {
        "type": "down",
        "userId": "user-26"
    },
    {
        "type": "up",
        "userId": "user-26"
    },
    {
        "type": "up",
        "userId": "user-27"
    },
    {
        "type": "down",
        "userId": "user-27"
    },
    {
        "type": "up",
        "userId": "user-27"
    },
    {
        "type": "up",
        "userId": "user-28"
    },
    {
        "type": "down",
        "userId": "user-28"
    },
]
test("Top 5 active users", () => {
    const result = top5ActiveUsers(posts, votes);
    expect(result).toEqual(
        [ 'user-22', 'user-23', 'user-24', 'user-25', 'user-26' ]
    );
});