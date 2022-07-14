import { defineNuxtPlugin } from '#app'
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import 'uikit/dist/css/uikit.min.css';

UIkit.use(Icons);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$UIkit = UIkit;
  nuxtApp.provide("UIkit", UIkit);
})
