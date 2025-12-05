import { defineStore } from 'pinia';
import axios from 'axios';

import { ref } from 'vue';

export const usePortfolioStore = defineStore('portfolioStore', () => {
  const timeline = ref('');
  const webprojects = ref('');
  const designs = ref('s');

  const fetchTimeline = async () => {
    const { data } = await axios.get('https://muellauer-portfolio.onrender.com/timeline');
    timeline.value = data;
  };

  const fetchWebProjects = async () => {
    const { data } = await axios.get('https://muellauer-portfolio.onrender.com/webprojects');
    webprojects.value = data;
  };

  const fetchDesigns = async () => {
    const { data } = await axios.get('https://muellauer-portfolio.onrender.com/designs');
    designs.value = data;
  };
  return { timeline, webprojects, designs, fetchTimeline, fetchWebProjects, fetchDesigns };
});
