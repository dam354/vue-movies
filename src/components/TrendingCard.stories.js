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
  template: '<TrendingCard year="2019" category="Movie" rating="PG" title="Beyond Earth" v-bind="args"/>',
});

export const notBookmarked = Template.bind({});
notBookmarked.args = { isBookmarked: true };

export const Bookmarked = Template.bind({});
Bookmarked.args = { isBookmarked: true };
