$( document ).ready(function() {
    console.log( "ready!" );
const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

//Create Tweet
const createTweetHeader = (tweetData) => {
    const $header = $("<header>")
      .append($("<img class='avatar' src='" + tweetData.user.avatars.small + "'>"))
      .append($("<div class='username'>").text(tweetData.user.name))
      .append($("<div class='handle'>").text(tweetData.user.handle));
    return $header;
  };

  const createTweetBody = (tweetData) => {
    const $body = $("<section>")
      .text(tweetData.content.text);
    return $body;
  };

  const createTweetFooter = (tweetData) => {
    const $footer = $("<footer>")
      .text("10 mins ago") 
      .append($("<span class='icons'>")
      .append($("<img src='/images/flag-blue.png'>"))
      .append($("<img src='/images/retweet-blue.png'>"))
      .append($("<img src='/images/like-blue.png'>"))
      );
    return $footer;
  };
  const createTweetElement = (tweetData) => {
    const $tweet = $("<article class='tweet'>")
      .append(createTweetHeader(tweetData))
      .append(createTweetBody(tweetData))
      .append(createTweetFooter(tweetData));
    return $tweet;
  };

  const renderTweets = (tweetsArr) => {
    $("#tweet-container").empty();
      tweetsArr.forEach((tweetObj) => {
      const tweet = createTweetElement(tweetObj);
      $("#tweet-container").prepend(tweet);
    });
  };

renderTweets(tweetData);

});
