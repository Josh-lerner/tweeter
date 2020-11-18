/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const data =
  [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
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
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088

    }
  ]

const renderTweets = function (tweets) {
  const tweetsArr = [];
  // loops through tweets
  for (let tweet of tweets) {
    // calls createTweetElement for each tweet
    tweetsArr.push(createTweetElement(tweet));
  }
  // takes return value and appends it to the tweets container
  $(document).ready(() => {
    $('#tweets-container').append(tweetsArr);
  })
};



const createTweetElement = function (tweet) {
  const $tweet = `
    <article id="tweets-container">
      <header>
        <h4>${tweet.user.name}</h4>
        <h5>${tweet.user.handle}</h5>
      </header>
      <section class="tweet">"${tweet.content.text}"</section>
      <footer>
        <h6>${timeElapsed(tweet)}</h6>
        <button type="retweet"><i class="fa fa-retweet" aria-hidden="true"></i></button>
        <button type="like"><i class="fa fa-heart" aria-hidden="true"></i></button>
        <button type="flag"><i class="fa fa-flag" aria-hidden="true"></i></button>
      </footer>
    </article>
  `
  return $tweet;
};

const timeElapsed = function (tweet) {
  let seconds = ((Date.now() - new Date(tweet.created_at)) / 1000);
  let timeAgo = 0;
  if (seconds > (86400 * 365)) {
    timeAgo = `${Math.floor(seconds / 60 / 60 / 24 / 365)} years ago`;
  } else if
    (seconds > 86400 && seconds < (86400 * 365)) {
    timeAgo = `${Math.floor(seconds / 60 / 60 / 24)}, days ago`;
  } else if
    (seconds < 86400 && seconds > 3600) {
    timeAgo = `${Math.floor(seconds / 60 / 60)} hours ago`;
  } else if
    (seconds < 3600 && seconds > 60) {
    timeAgo = `${Math.floor(seconds / 60)} minutes ago`;
  } else {
    timeAgo = `${Math.floor(seconds)} seconds ago`;
  }

  return timeAgo
}



renderTweets(data);