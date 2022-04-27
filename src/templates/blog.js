/**
 * [synquery-org-website](templates) static.js
 * シンプルな固定ページの構築機能を出力する。
 */
import mx from "../utils/mx";
import Nav from "../components/Navigation";
import Footer from "../components/Footer";
import blogContent from "../pages/_";
const BlogPage = async ({ lang, group, page }) => {
  const components = [ ];
  let create = async () => {
    console.log('[templates/blog] running create:', lang, group, page);
    const compOpts = { user: { lang }, group, page };
    const nav = await Nav(compOpts);
    const footer = await Footer(compOpts);
    components.push(nav, footer);
    let rootContent = ""
      + await nav.create() // <div id="#Navigation"> ... </div>
      + '<div class="page-Content">' 
      + '  <article>' + await mx(blogContent(lang, group, page), { lang }) + '</article>'
      + '</div>' 
      + await footer.create(); // <footer id="#Footer"> ... </div>
    return rootContent;
  };
  let setup = async () => {
    console.log('[templates/blog] running setup. components?', components);
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
export default BlogPage;
