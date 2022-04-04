// MainSearch.stories.js

import MainSearch from "./MainSearch.vue";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "MainSearch",
  component: MainSearch,
};

const Template = (args) => ({
  components: { MainSearch },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template:
    '<MainSearch placeholder="Search for movies or TV shows" v-bind="args"/>',
});

export const empty = Template.bind({});
