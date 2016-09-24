T = new TwitMaker( {
    consumer_key: Meteor.settings.TwitterTrackingApp.consumer.key,
    consumer_secret: Meteor.settings.TwitterTrackingApp.consumer.secret,
    access_token: Meteor.settings.TwitterTrackingApp.access_token.key,
    access_token_secret: Meteor.settings.TwitterTrackingApp.access_token.secret
});

tag = "illinoistech";

Meteor.methods( {

    liveStreaming: function(tag) {
        
        console.log(tag);
        var stream = T.stream('statuses/filter', { track: tag});

        stream.on('tweet', Meteor.bindEnvironment(function (tweet) {
            var userName = tweet.user.name;
            var userScreenName =  tweet.user.screen_name;
            var userTweet = tweet.text;
            var tweetDate = tweet.created_at;
            var profileImg = tweet.user.profile_image_url;
            Tweets.
                insert({
                    user: userName,
                    userscreen: userScreenName,
                    tweet: userTweet,
                    picture: profileImg,
                    date: tweetDate},
                       function(error){
                           if(error)
                               console.log(error);
                       });
        }));
    },
    deleteTweet: function(taskId) {
        Tweets.remove(taskId);
    },
    deleteAll: function(){
        Tweets.remove({});
    }

});










