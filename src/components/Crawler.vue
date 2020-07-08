<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <select @change="channelSelected($event.target.value)">
        <option>Select</option>
        <option>r/history</option>
        <option>r/bristol</option>
        <option>r/worldnews</option>
      </select>&nbsp;&nbsp;
      <b>Currently:</b>
      {{this.$store.state.channel}}
    </p>
    <div v-if="articleHeading!=='Heading'" class="right">
      <h2>{{articleHeading}}</h2>
      <a class="url articleUrl" v-bind:href="articleUrl">{{articleUrl}}</a>
      <p>{{articleText}}</p>
    </div>

    <div class="left">
      <ul>
        <li
          v-for="item in responseData"
          :key="item.id"
          @click="getArticle($event.target, item)"
        >{{item.data.title}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
import { mapState } from "vuex";

export default {
  name: "Crawler",
  store,
  props: {
    msg: String
  },
  data: function() {
    return {
      articleHeading: "Heading",
      articleUrl: "#",
      articleText: "",
      channel: this.$store.state.channel
    };
  },
  methods: {
    getArticle(event, item) {
      // console.log("Article contents: ", event, item);
      this.articleHeading = item.data.title;
      this.articleUrl = item.data.url;
      this.articleText = item.data.selftext;
      console.log(this.articleText);
    },
    channelSelected($event) {
      this.$store.state.channel = $event;
      console.log("this.store.state.channel: ", this.$store.state.channel);
      this.$store.dispatch("fetchData").then(() => {
        console.log("Contents loaded", this.$store.state.responseData);
      });
    }
  },
  computed: {
    ...mapState(["title", "responseData"])
  },
  created() {
    this.$store.dispatch("fetchData").then(() => {
      console.log("Contents loaded", this.$store.state.responseData);
    });
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
