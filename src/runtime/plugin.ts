import { defineNuxtPlugin } from '#app'
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import 'uikit/dist/css/uikit.min.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$UIkit = UIkit;
  nuxtApp.$UIkit.use(Icons);
  nuxtApp.provide("UIkit", UIkit);
})
