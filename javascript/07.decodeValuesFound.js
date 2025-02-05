// javascript/07.decodeValuesFound.js
// 052304 Medium
/*
This problem was asked by Facebook.

Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.
*/


function decodeCount(encodedMessage) {
    if (typeof encodedMessage !== "string")
        encodedMessage = String(encodedMessage);

    const n = encodedMessage.length;
    const dp = new Array(n + 1).fill(0)
    dp[0] = Number(1);
    dp[1] = encodedMessage[0] != 0 ?? Number(1);

    for (let i = 2; i <= n; i++) {
        if (encodedMessage[i - i] != '0')
            dp[i] = Number(dp[i - 1])
        const twoDigit = parseInt(encodedMessage.substring(i - 2, i));
        if (10 <= twoDigit && twoDigit <= 26) {
            dp[i] += Number(dp[i - 2])
        }
    }
    return Number(dp[n])
}

console.log(decodeCount(111))
console.log(decodeCount(1))
console.log(decodeCount(522))
console.log(decodeCount(1111111))
console.log(decodeCount(12324))