'use strict';

const emojis = [
  '😄','😃','😀','😊','😉','😍','🔶','🔷', '🚀'
];

module.exports.rankish = async event => {
  const rank = event.queryStringParameters.rank;
  const rankEmoji = emojis[rank >= emojis.length ? emojis.length - 1 : rank];
  const responseBody = {
    "message": "Rank generated!",
    "input": rankEmoji
  };
  return {
    "statusCode": 200,
    "headers": {
      "Access-Control-Allow-Origin" : "*"
    },
    "body": JSON.stringify(responseBody),
  };
};

