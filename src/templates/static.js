/**
 * [synquery-org-website](templates) static.js
 * シンプルな固定ページの構築機能を出力する。
 */
import mx from "../utils/mx";
import Nav from "../components/Navigation";
import PageNavi from "../components/PageNavi";
import Footer from "../components/Footer";
import pageContent from "../pages/_";
const StaticPage = async ({ lang, group, page }) => {
  const components = [ ];
  let create = async () => {
    console.log('[templates/static] running create:', lang, group, page);
    const compOpts = { user: { lang }, group, page };
    const nav = await Nav(compOpts);
    const pageNavi = await PageNavi(compOpts);
    const footer = await Footer(compOpts);
    components.push(nav, footer, pageNavi);
    let rootContent = ""
      + await nav.create() // <div id="#Navigation"> ... </div>
      + '<div class="page-Content">' 
      + '  <article>' + await mx(pageContent(lang, group, page), { lang }) + '</article>'
      + '  <aside>' + await await pageNavi.create() + '</aside>' // <div id="#PageNavi"> ... </div>
      + '</div>' 
      + await footer.create(); // <footer id="#Footer"> ... </div>
    return rootContent;
  };
  let setup = async () => {
    console.log('[templates/static] running setup. components?', components);
    await $(async ()=>{
      await Promise.all( components.map(c=>c.setup()) );
      $('.page-Content a').map((idx, el)=>{
        // markdown の anchor に target="_blank" を付与
        String( $(el).attr('href') ).indexOf('http') == 0 && !$(el).attr('target') && $(el).attr('target', '_blank');
      });
      hljs.highlightAll();
      // TODO event bind and so on
    });
  };
  return { create, setup };
};
export default StaticPage;
