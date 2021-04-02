import { v4 as uuidv4 } from 'uuid';
import { TWEETS } from '../utils/constants';
import { size, remove } from 'lodash';

export const saveTweetApi = (tweet, username) => {
  const tweets = getTweetsApi();

  if (size(tweets) === 0) {
    const tweetData = [
      {
        id: uuidv4(),
        tweet,
        username,
        createdAt: new Date(),
      },
    ];

    localStorage.setItem(TWEETS, JSON.stringify(tweetData));
  } else {
    tweets.push({
      id: uuidv4(),
      tweet,
      username,
      createdAt: new Date(),
    });

    localStorage.setItem(TWEETS, JSON.stringify(tweets));
  }
};

export function getTweetsApi() {
  const tweets = localStorage.getItem(TWEETS);

  if (tweets) {
    return JSON.parse(tweets);
  }

  return [];
}

export function deleteTweetApi(id) {
  const tweets = getTweetsApi();

  remove(tweets, (tweet) => {
    return tweet.id === id;
  });

  localStorage.setItem(TWEETS, JSON.stringify(tweets));
}
