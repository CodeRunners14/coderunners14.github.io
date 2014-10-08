var Twitter = require('node-twitter');

var twitterStreamClient = new Twitter.StreamClient(
    'mG8O0AUCdQ4GBf3qqFaDxnUVM',
    '4iOVgvZ9aJPX0S9kZopMBugaIgIxq2WJS3Y3L0fkcYCw4USic0',
    '360843267-62vQ3SbHvPFo2B6aAudCYepg2OQKq7F6X92FLzYu',
    'K6nhS7NPMilD0fzLHFUIxmBfBNMsXJAY4RkRYP6cBiSFT'
);

twitterStreamClient.on('close', function() {
    console.log('Connection closed.');
});
twitterStreamClient.on('end', function() {
    console.log('End of Line.');
});
twitterStreamClient.on('error', function(error) {
    console.log('Error: ' + (error.code ? error.code + ' ' + error.message : error.message));
});
twitterStreamClient.on('tweet', function(tweet) {
    console.log(tweet);
});

twitterStreamClient.start(['collectiveacademy']);