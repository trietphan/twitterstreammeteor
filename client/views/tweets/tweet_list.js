Meteor.subscribe("tweets");

Template.tweetsList.helpers( {
    tweets: function() {
        return Tweets.find({}, {sort: {date: -1}});
    }
});

Template.tweetsInfo.helpers( {
    tweetscount: function() {
        return Tweets.find().count();
    }
});

Template.tweetsItem.events( {
    "click .delete": function (event) {
        
        Meteor.call("deleteTweet", this._id);
    }
});

Template.tweetsHtag.events( {
    "submit .hashtag": function (event) {
        // event.preventDefault();
        tag = event.target.text.value;
        Meteor.call('liveStreaming', tag);
    },
    "click .deleteAll": function (){
        Meteor.call('deleteAll');
    }
});
