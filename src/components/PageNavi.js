/**
 * [synquery-org-website](components) PageNavi.js
 * Page Navigator の構築機能を出力する。
 * import jQuery, import foonyah
 */
import mx from "../utils/mx";
import style from "./PageNavi.scss";
import maddress from "./PageNavi.md"; // use transformer-raw => local-url (http)
// <a class="header-anchor before" href="#bitcoin-as-a-state-transition-system"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>
export default async function PageNavi({ user = { } }) {
  let _$frame;
  const create = ()=>{
    console.log('[components/pageNavi] running create:', maddress, style);
    return mx(maddress, { values: { }, user }); // => translated HTML
  };
  const setup = async ()=>{
    console.log('[components/pageNavi] running setup.');
    await $(async ()=>{

      // After waiting jQuery ready
      _$frame = $('#PageNavi'); 
      
      // Create content
      const $content = $f('.navi-List').empty();
      const posAry = [ ], itmAry = [ ];
      let hashEffect = Function();
      $('h2,h3').each((idx, el)=>{
        const $H = $(el).clone().removeAttr('href').appendTo( $content );
        const $A = $H.find('a').remove(), HREF = $A.attr('href');
        const is_sess = el.tagName == 'H2';
        let name;
        $H.text([ is_sess  ? '□': '　', el.innerText ].join(' '));
        if(HREF) {
          name = HREF.indexOf('#') != -1 && $A.attr('href').substr( $A.attr('href').indexOf('#') + 1 );
          $H.attr('data-id', name).addClass('navi-Goto');
          $H.on('pointerdown', jumpTo);
          if(name == String(location.hash).substr(1)) hashEffect = ()=>jumpTo();
        }
        function jumpTo($e) {
          const scrollTop = Math.max(0, ($('#' + name).position() || { }).top - 120);
          if(!scrollTop == null) return;
          const dur = Math.min(800, Math.abs(scrollTop - $('html,body').scrollTop()));
          $itms.filter('.navi-Focus').removeClass('navi-Focus');
          $H.addClass('navi-Focus');
          if($e) {
            $('html,body').animate({ scrollTop }, dur, 'easeOutQuad'); // => scroll to the anchor
          } else {
            $('html,body').scrollTop(scrollTop);
          }
        }
      });
      const $itms = $content.children().filter((idx, el)=>$(el).hasClass('navi-Goto'));
      hashEffect();
      $(document).off('scroll').on('scroll', $e=>{
        const time = flushTops.time = Date.now();
        setTimeout(()=>{
          
          if(time != flushTops.time) {
            return;
          }
          // debugger;
          flushTops();
          const middleTop = $('html,body').scrollTop() + 120;
          const sub = posAry.map(pos=>Math.abs(pos - middleTop));
          const idx = sub.indexOf( Math.min(...sub) );
          if(idx == -1 || $itms.eq(idx).length == 0) {
            console.log(`Not found PageNavi index: ${idx}`);
            return;
          }
          $itms.filter('.navi-Focus').removeClass('navi-Focus');
          $itms.eq(idx).addClass('navi-Focus');
          const itmTop = $itms.eq(idx).position().top; // position = actualPosition - scrollTop
          const scrTop = $content.scrollTop();
          if(itmTop < 0 || $content.height() < itmTop) {
            $content.animate({ scrollTop: (itmTop + scrTop - $content.height()) + 80 }, 80);
          }
          
        }, 80);
      }).scroll(); // => create first posAry & itmAry
      function flushTops() {
        const currentHeight = $('#root article').height();
        if(flushTops.currentHeight == currentHeight) { return; } // No need to flush.
        while(posAry.length) posAry.pop();
        while(itmAry.length) itmAry.pop();
        $itms.each((idx, el)=>{
          const $H = $(el), name = $H.data('id');
          if(!name) return;
          posAry.push( ($('#' + name).position() || { }).top );
          itmAry.push($H);
        });
        flushTops.currentHeight = currentHeight;
        // console.log('flushTops?', posAry, itmAry);
      }
      
    });
  };
  return { create, setup };
  function $f(selector, filter) {
    const $s = selector == null ? _$frame: _$frame.find(selector);
    return filter == null ? $s: $s.filter(filter);
  }
};