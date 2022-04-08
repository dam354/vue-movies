// SectionTrending.stories.js

import SectionTrending from "./SectionTrending.vue";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "SectionTrending",
  component: SectionTrending,
};

export const Template = (args) => ({
  components: { SectionTrending },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<SectionTrending  v-bind="args"/>',
});
