<template>
  <div class="container">
    <h2 class="text-center mb-4">Lista de Tweets</h2>
    <p v-if="tweets.length === 0" class="text-center mb-4">
      Sin tweets disponibles
    </p>
    <div class="tweet" v-for="item of tweets" :key="item.id">
      <p class="tweet__title">{{ item.username }}</p>
      <p class="tweet__text">{{ item.tweet }}</p>
      <span>{{ formatDate(item.createdAt) }}</span>

      <Close @click="deleteTweet(item.id)" />
    </div>
  </div>
</template>

<script>
import moment from "moment";
import "moment/locale/es";

import { Close } from "../components/icons/index";
import { deleteTweetApi } from "../api/tweet";

export default {
  props: {
    tweets: Array,
    reloadTweets: Function,
  },
  components: {
    Close,
  },
  setup(props) {
    const formatDate = (date) => {
      return moment(date).fromNow();
    };

    const deleteTweet = (id) => {
      deleteTweetApi(id);
      props.reloadTweets();
    };

    return {
      formatDate,
      deleteTweet,
    };
  },
};
</script>

<style lang="scss" >
.tweet {
  position: relative;
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin: 0;
  }

  &__title {
    position: absolute;
    top: -12px;
    left: 10px;
    background-color: #fff;
    padding: 0 10px;
    font-weight: bold;
  }

  &__text {
    color: grey;
  }

  span {
    position: absolute;
    right: 10px;
    bottom: -9px;
    font-size: 12px;
    color: grey;
    background-color: #fff;
    padding: 0 20px;
    border: 1px solid #ccc;
  }

  svg {
    width: 20px;
    height: 20px;

    &:hover {
      cursor: pointer;
      color: #f00;
    }
  }
}
</style>