/**
 * [synquery-org-website](top) index.js
 * このファイルと index.html を全てのパスに展開する。
 * すべての文書を import する必要があるが、アドレス化されるだけなので問題ない
 */
import tl from "./utils/translations";
import StaticPage from "./templates/static";
import BlogPage from "./templates/blog";
import DocsPage from "./templates/docs";
import ProtocolPage from "./templates/protocol";
const root_title = 'Synquery crypto-network';
(async g => {
  const userLanguage = navigator.language;
  const defaultLanguage = tl.getTranslations()[userLanguage] ? userLanguage: tl.getDefaultLanguage();
  const paths = location.pathname.split("/").slice(1); // [ lang, group, page ]
  const paths_origin = [ ].concat(paths);
  if(location.host == 'synquery.org') {
    location.href = 'https://github.com/synquery/synquery-org-website';
    return;
  }
  // ここからは browser 上で動作するロジック
  // 動的ロードも正しくタグ構成および短時間表示を実現すれば、ロボットにパンくずリストを作ってもらえる。
  // If the root path, move to the top of defaultLanguage
  if(paths.length == 0) paths[0] = defaultLanguage;
  // If language is not set, move to the path of defaultLanguage
  if(!tl.getTranslations()[ paths[0] ]) paths.unshift(defaultLanguage);
  // redirect if language is changed
  if(paths_origin[0] != paths[0]) {
    location.pathname = '/' + paths.join('/');
    return;
  }
  document.head.parentElement.setAttribute('lang', paths[0]);
  const outEng = t=>{
    const c = (document.body.getAttribute('class') || '').split(' ').filter(t=>!!t).concat(t);
    document.body.setAttribute('class', c.join(' '));
    console.log(`%c[index.js] PageEngine=${t}`, "font-size:200%;color:#0f0;");
  }
  let PageEngine;
  switch (paths[1]) {

  case "blog":
    outEng('BlogPage');
    PageEngine = BlogPage;
    break;
  case "docs":
    outEng('DocsPage');
    PageEngine = DocsPage;
    break;
  case "xips": case "xrcs":
    outEng('ProtocolPage');
    PageEngine = ProtocolPage;
    break;
  default:
    outEng('StaticPage');
    PageEngine = StaticPage;

  }
  const page = await PageEngine({
    lang: paths[0], group: paths[1], page: paths[2]
  });
  if(page.title) { 
    document.title = [ root_title, page.title ].join(' - ');
  }
  const root = document.getElementById("root");
  root.innerHTML = await page.create();
  await page.setup(root);
})(this);
