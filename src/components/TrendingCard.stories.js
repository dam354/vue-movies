// TrendingCard.stories.js

import TrendingCard from "./TrendingCard.vue";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "TrendingCard",
  component: TrendingCard,
};

const Template = (args) => ({
  components: { TrendingCard },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template:
    '<TrendingCard year="2019" category="movie" rating="PG" title="Beyond Earth" isBookmarked="true" v-bind="args"/>',
});

export const empty = Template.bind({});
