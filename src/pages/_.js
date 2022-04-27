/**
 * [synquery-org-website](pages) _.js
 * ページコンテンツを export するためのモジュール
 */
import tl from "../utils/translations";

// [blogs]
// betasynet
import blogbeta from "./blog/betasynet/index.md";
import blogbeta_ja from "./blog/betasynet/index-ja.md";
import blogbeta_220315 from "./blog/betasynet/blog-220315.md";
import blogbeta_220315_ja from "./blog/betasynet/blog-220315-ja.md";

// [developers]
// XIP
import XIP_1 from "./developers/syips/SyIP-1.md";
import XIP_1_ja from "./developers/syips/SyIP-1-ja.md";
// XRC
import XRC_1 from "./developers/syrcs/SyRC-1.md";
import XRC_1_ja from "./developers/syrcs/SyRC-1-ja.md";

// [learn]
import whitepaper from "./learn/whitepaper/whitepaper.md"
import whitepaper_ja from "./learn/whitepaper/whitepaper-ja.md"

// [notfound]
import notfound from "./special/notfound/notfound.md"
import notfound_ja from "./special/notfound/notfound-ja.md"

// [other]
import langs from "./special/languages/languages.md"
import langs_ja from "./special/languages/languages-ja.md"

export default pageContent;

// <-- END_OF_MODULE <-- 'import', and 'export' cannot be used outside of module code

const Const = {
  NotFound: "special/notfound"
};
const Imps = {
  blogbeta, blogbeta_ja, blogbeta_220315, blogbeta_220315_ja,
  XIP_1, XRC_1, XIP_1_ja, XRC_1_ja,
  whitepaper_ja, whitepaper, 
  notfound_ja, notfound,
  langs, langs_ja
};
const Markdowns = {
  "blog/betasynet": {
    ext: 3,
    en: Imps.blogbeta, ja: Imps.blogbeta_ja,
    "2022/03/15": {
      en: Imps.blogbeta_220315, ja: Imps.blogbeta_220315_ja
    }
  },
  "developers/xips": {
    ext: 0,
    en: Imps.XIP_1, ja: Imps.XIP1_ja
  },
  "developers/xrcs": {
    ext: 0,
    en: Imps.XRC_1, ja: Imps.XRC1_ja
  },
  "learn/whitepaper": {
    ext: 0,
    en: Imps.whitepaper, ja: Imps.whitepaper_ja
  },
  "special/notfound": {
    ext: 0,
    en: Imps.notfound, ja: Imps.notfound_ja
  },
  "special/languages": {
    ext: 0,
    en: Imps.langs, ja: Imps.langs_ja
  }
};
const Dirs = Object.keys(Markdowns);
function pageContent(lang, dirc, page) {

  const defaultLanguage = tl.getDefaultLanguage();
  const getDocument = (dir, ext)=>{
    console.log('getDocument seek:', dir, ext);
    const root = ext ? Markdowns[ dir ][ ext ] || Markdowns[ dir ]: Markdowns[ dir ];
    if(!root) {
      if(dir == Const.NotFound) throw 'Unexpected pageContent';
      return getDocument(Const.NotFound);
    }
    return root[ lang ] || root[ defaultLanguage ] || getDocument(Const.NotFound);
  }
  if(!dirc) {
    return getDocument(Const.NotFound);
  };

  const ext = String(page || dirc || 'notfound').split('/');
  let pos = [ dirc, page = ext.shift() ];
  if(!Markdowns[ pos ]) {
    // 一致ページがない場合、
    // (1) 先頭一致で補完 blogs => blogs/betasynet
    // (2) 後方一致で補完 whitepaper => learn/whitepaper
    // いずれも先に見つかった方を採用する。
    for(let i = 0; i < Dirs.length;i++) {
      const dir = Dirs[i], pair = dir.split('/');
      if(dirc == pair[0]) {
        pos = [ dirc, pair[1] ]; // => seek first document in a directory
        break;
      }
      if(dirc == pair[1]) {
        pos = pair, page && ext.push(page); // => seek when group-missing pathname
        break;
      }
    }
  }
  return getDocument(pos.join('/'), ext.length && ext);

};
