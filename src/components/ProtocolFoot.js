/**
 * [synquery-org-website](components) Footer.js
 * Footer の構築機能を出力する。
 * import jQuery, import foonyah
 */
import mx from "../utils/mx";
import updated from "../utils/updates";
import style from "./Footer.scss";
import maddress from "./Footer.md"; // use transformer-raw => local-url (http)
export default async function Footer({ user = { }, group, page }) {
  let _$frame;
  const create = ()=>{
    console.log('[components/footer] running create:', maddress, style);
    return mx(maddress, { values: { Updated: updated(page, user.lang) }, user }); // => translated HTML
  };
  const setup = async ()=>{
    console.log('[components/footer] running setup.');
    await $(async ()=>{

      // After waiting jQuery ready
      _$frame = $('#Footer');
      
      // Construct foot-LinkSection
      const $p = $f('.area.foot-LinkGrid');
      const $tpl = $p.find('.foot-LinkSection').remove();
      $p.empty();
      $('#Navigation ul.nav-LeftItems').children().each((idx, nav_sct)=>{
        const $nav_sct = $(nav_sct);
        const $sct = $tpl.clone(), $itms = $sct.find('.foot-List'), $tpl_itm = $itms.find('.foot-ListItem').remove();
        const section_title = $nav_sct.find('.nav-DropdownTitle > span').text();
        $sct.find('.foot-LinkSectionHeader').text(section_title);
        $nav_sct.find('.nav-DropdownItem').each((ch_idx, ch_li)=>{
          $tpl_itm.clone().appendTo($itms).html(ch_li.innerHTML);
        });
        $p.append($sct);
      });
      
    });
  };
  return { create, setup };
  function $f(selector, filter) {
    const $s = selector == null ? _$frame: _$frame.find(selector);
    return filter == null ? $s: $s.filter(filter);
  }
};