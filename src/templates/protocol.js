/**
 * [synquery-org-website](templates) static.js
 * シンプルな固定ページの構築機能を出力する。
 */
import mx from "../utils/mx";
import Nav from "../components/ProtocolNavi";
import Footer from "../components/ProtocolFoot";
import pageContent from "../pages/_";
const ProtocolPage = async ({ lang, group, page }) => {
  const components = [ ];
  let create = async () => {
    console.log('[templates/protocol] running create:', lang, group, page);
    const compOpts = { user: { lang }, group, page };
    const nav = await Nav(compOpts);
    const footer = await Footer(compOpts);
    components.push(nav, footer, pageNavi);
    let rootContent = ""
      + await nav.create() // <div id="#Navigation"> ... </div>
      + '<main class="page-Content">'
      + '  <div class="wrapper">' + await mx(pageContent(lang, group, page), { lang }) + '</div>'
      + '</main>' 
      + await footer.create(); // <footer id="#Footer"> ... </div>
    return rootContent;
  };
  let setup = async () => {
    console.log('[templates/protocol] running setup. components?', components);
    await $(async ()=>{
      await Promise.all( components.map(c=>c.setup()) );
      $('.page-Content a').map((idx, el)=>{
        // markdown の anchor には target がつかないため、外部ページへのリンクには動的 target 付与処理が必要。
        // markdown の anchor に target="_blank" を付与
        String( $(el).attr('href') ).indexOf('http') == 0 && !$(el).attr('target') && $(el).attr('target', '_blank');
      });
      // TODO event bind and so on
    });
  };
  return { create, setup };
};
export default ProtocolPage;
