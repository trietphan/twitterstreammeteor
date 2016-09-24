Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', {
    name: 'tweetsList'
});

Router.route('/tweet/:_id', {
    name: 'tweetsPage',
    data: function() {
        return Tweets.findOne(this.params._id);
    }
});
