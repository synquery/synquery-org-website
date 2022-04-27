/**
 * [synquery-org-website](components) Navigation.js
 * Navigation の構築機能を出力する。
 * import jQuery, import foonyah
 */
import mx from "../utils/mx";
import style from "./Navigation.scss";
import maddress from "./Navigation.md"; // use transformer-raw => local-url (http)
import Logo from "../../xyn-transparent.png";
const path_lumi = "M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z";
const path_dark = "M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z"
export default async function Nav({ user = { } }) {
  let _$frame;
  const create = ()=>{
    outLog('running create:', maddress, style, Logo);
    return mx(maddress, { values: { Logo }, user }); // => translated HTML
  };
  const setup = async ()=>{
    outLog('running setup.');
    await $(async ()=>{

      // After waiting jQuery ready
      _$frame = $('#Navigation');
      const $r = $('body');
      const $i = $f('.nav-ThemeToggle svg path').eq(1);

      // Navigation Toggle
      
      
      // ThemeToggle
      const sessionTheme = getTheme();
      outLog('sessionTheme?', sessionTheme);
      if(['Dark', 'Lumi'].includes(sessionTheme)) {
        if(sessionTheme == 'Dark') {
          $r.addClass('theme-Dark');
        }
        setTheme(sessionTheme);
      } else {
        if(await isDaytime()) {
          $i.attr('d', path_dark);
          $r.addClass('theme-Dark');
        } else {
          $i.attr('d', path_lumi);
          $r.removeClass('theme-Dark');
        }
      }
      $f('.nav-ThemeToggle').click(()=>{
        $r.toggleClass('theme-Dark');
        const inDark = $r.hasClass('theme-Dark');
        if(inDark) {
          $i.attr('d', path_dark);
          setTheme('Dark');
        } else {
          $i.attr('d', path_lumi);
          setTheme('Lumi');
        }
      });
      
      // Search trigger
      
    });
  };
  return { create, setup };
  function $f(selector, filter) {
    const $s = selector == null ? _$frame: _$frame.find(selector);
    return filter == null ? $s: $s.filter(filter);
  }
  function setTheme(v) {
    try { sessionStorage.setItem('timeTheme', v); } catch(e) { }
    return v;
  }
  function getTheme() {
    try { return sessionStorage.getItem('timeTheme'); } catch(e) { };
  }
  async function isDaytime() {
    const now = new  Date(), hours = now.getHours();
    return 6 <= hours && hours <= 18;
  }
  // ---
  function outLog() {
    console.log.apply(console, [ new Date().toLocaleString() + ' - [component/nav]' ].concat( Array.from(arguments) ));
  }
};