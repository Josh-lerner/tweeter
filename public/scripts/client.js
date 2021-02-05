
const data = []

  // takes return value and appends it to the tweets container

const renderTweets = function (tweets) {
  const tweetsArr = [];
  for (let tweet of tweets) {
    tweetsArr.push(createTweetElement(tweet));
  }
  $(document).ready(() => {
    $('.tweets-container').append(tweetsArr);
  })
};



const createTweetElement = function (tweet) {
  const $tweet = `
    <article class="tweet-container">
      <header>
      <img src= data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXR09Snqare3+DIysuipKXT1da2uLmpq6zO0NG+wMG7vb7P0dKusLGoqqvCxMWvsbLn5+iwTCJVAAAGFUlEQVR4nO2d25ajIBAAMYL36P7/1y5oMjPJ5KJQbcChzp7dx7UOHRqwadW/07H5p06NUv1x/zQndVLHxhr2n34GWbJh+mTD9MmG6ZMN0ycbpk82TJ9smD7ZMH12NTQ37PSf7mQ4CzXl2HaVo2vHsmzULpq7GBrTl2011EWhdVG4v+0/52HqxlKJS8ob2oEqq6F4TD21jbCjtKHV6+pl5B6j9TSKSsoaOr/zC70Lw9jLKYoaGtPVb/UujmLDKGhozFi/H79rsFaNkKKcoVHVWr2ZWmgYxQyt4OoBvNCKKEoZmnJ9hF7RlRJQFDI0zcop5k5RYBRlDE3zLMXvryhi6Cs4ByqNhKExk6egpaMHUcSw3TzJ/KCEFQUMzRjgZ/MinPp5Q/8f4QX4pyhguDnT38PGKW5oylDB4ow+EG1oVMA8ekG35CDihmWwoN1LkZMNHqXhQ1iwSRE2DMwUV4aGeyTaEBnCQo/cILKGwES6UEdrGJwLL2guJ6KGwcuZb8MqUkNmnnFwq1M2SredPb0Em2tQQyxILViYkoZgkIIpETUEg5TbYaCGPudrz9DUyg00NA2UDBeGCA1H1LCAjodJQ2pBs0AtazhDYu97YwhlRNDQ6yD/hSGUEUHD8owaFhPzXKAhme8d0FkGaNjBhjUz1YCG6IrGEZshPJUW1PaCM+xxQ+bYlDMkt04LzMoUNGTTYUFtETFDPB1SL6FAQ1oQSvmcIZ3w/4LhgDxZ1IbIUQ1nGFSe8JA6G66CM+yyoYchkfKz4WqyYTZ8aEg8WM4Wq/kDhnld6mGIPFjeH65GwDCyPf7xz2kEDGM7a+NPhGM7Lz3+mTf+3uIc23sL08KGUOFXzO8Pmauz5DtgeDKN7y03/R4fKhkia6KOXotB74E1VGEab00UVeodb10bVWAabW0iViQcbX0ptKKJuEZ4oh6LrfMGwxS7+sTW6oMZMc5afbDwK9L7FuDSNNY7M1iYgpfX4Jtd2MKNeybYkFrWcEEa6Q1L8sI6fksWGUQs3Sv+pnOPVCiCl2T52+pESoz6tjpRoohdeZrhu0YAN2fQdlG8YXjCAFOFirK3CdygRqI/TeDiFO6jJNFFKXCrD7dRkuiiFPYCI/4uSoFhCvYaWBDp9RUSpmC/iAURw6DFKd07UcSwDxCkg1Soq2DA8ptcdM/IGPpv9emZVMrQv3oojc6QIffY0EZmM0L9S73zBZ0rxAx932BMfJ9dIUPPo2F277sgZOh5XEN2Mbsi1SnZL19Q7+5/ImXoWfUt0O46G3qSDbMhSDb0JBtmQ5Bs6Ek2zIYg2dCTbHgAQ8+D/UQMjelHz+PEJAyNaXz9iqIr8c8h4dUmpl/7vbyH1BXtyFZfus9VFmGFCloPI/rpTvK+hQ3PUL9FEv10J3eX2yj/n98v6g5zZAzt0zTI8H2h9QR9Z5YwdMNXrfjc6EbHggnWcEPnh19yvjAAwRpqaKeXDg3PW7SuQoM1zNCostr+rcqNTGMf4hhgaLPfOOENLx8xtAHj6GtoXHiKD98VXbiljp+kp6ENz/38FirPYPUytIuzfcLzFr/l3HbDXcPzFhuszWbJrYbLt9I/4jc71tXWgdxkuOwdPs20zXGDoQ3P9oPD9422G+X1kqsNd0nua9Hnqlw7s64znJM73iUpjLXLgBWG+yb39axcBrw1NC488a0Rg3Uc324+3hhKbo0Y6nebyFeG8/AJbo0Y3GnAq1nnuaE7WJoiDc9b9Mud8hPDeXbBP+cgSP101nlkaObh0ykM3zdaD+4X+Vvyt6GZd0affmAf7KL1wS/y3tAtzVKKznuGX1PrjeH8UiWx6LzHvRW4kfxpmNjk8hx3Yv7A0C49j+HnqMevYfwyNM2Udnjeor9uvF8NTTkcSdBNrJeq+Ish3vQwBhbFxRD7YnhULHcbZsNDjmBx6Yi2jGHcGyR/7HTTW0NlDjWL/kQPxo0h/ZXbmNCdMzzoj3DhXFrDo/4IF4aTUseNUYduFP/1lKjQVWifjujJhumTDdMnG6ZPNkyfbJg+2TB9smH6ZMP0yYbpkw3TJxumTzZMn2yYPn/BcNLHZlKqPDbqP6aRiJMJ34IhAAAAAElFTkSuQmCC>
        <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${tweet.user.name}</h4>
        <h5>${tweet.user.handle}</h5>
      </header>
      <section class="tweet">"${escape(tweet.content.text)}"</section>
      <footer>
        <h6>${timeElapsed(tweet)}</h6>
        <button type="retweet"><i class="fa fa-retweet" aria-hidden="true"></i></button>
        <button type="flag"><i class="fa fa-flag" aria-hidden="true"></i></button>
        <button type="like"><i class="fa fa-heart" aria-hidden="true"></i></button>
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
    timeAgo = `${Math.floor(seconds / 60 / 60 / 24)} days ago`;
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

// gets tweets from '/tweets' page 
const loadTweets = function () {
  $.ajax({
    url: '/tweets',
    method: 'GET',
    dataType: 'JSON'
  }).then(function (response) {
    const reverseData = response.reverse()
    renderTweets(reverseData)
  })
};


const tweetValidation = function (text) {
  if (!text) {
    alertMessage("⚠︎ Missing Text! ⚠︎")
    return false;
  } else if (text.length > 140) {
    alertMessage("⚠︎ Text too long! ⚠︎");
    return false;
  } else {
    return true;
  }
}

const escape = function (str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

const alertMessage = function (message) {
  $('.alert').text(message);
  $('.alert').slideDown(() => {
    setTimeout(() => {
      $('.alert').slideUp(() => {
        $(this).remove()
      });
    }, 1500);
  });
};


$(document).ready(() => {
  loadTweets();  
  $("form").on("submit", event => {
    event.preventDefault();
    const text = $("#tweet-text").val();
    if (tweetValidation(text)) {
      $.ajax({
        type: "POST",
        url: "/tweets",
        data: $("#tweet-text").serialize(),
        dataType: "text"
      }).then(function () {
        $(".tweets-container").empty()
        $("form").trigger('reset');
        $(".counter").text('140')
        loadTweets()
        console.log('Ajax request successful Client input posted')
      });
    }
  })
}) 