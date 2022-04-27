/**
 * [synquery-org-website](utils) mx.js
 * load, front-mat and translate task pipeline
 */
import fmes from "format-message";
import tl from "./translations";
import it_attrs from "markdown-it-attrs"; // use https://www.npmjs.com/package/markdown-it-attrs
const defaultLanguage = tl.getDefaultLanguage();
const defaultLocale = tl.getDefaultLocale();
const fm = require("front-matter");
const it = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
});
it.use(it_attrs, {
  allowedAttributes: [ 'style', 'class', 'name' ] // SHOULD NOT ALLOW "id" for translation
});
const anchor = name=>`<a class="header-anchor before" href="#${name}">
  <svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16">
    <path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
  </svg></a>`;
const Mx = async (markdown, {
  filename = "unknown.md", 
  values = { },
  user = { locale: defaultLocale, lang: defaultLanguage },
  warning_on_missing = false })=>{
  // values は Database などから渡される変数。
  // (1) markdown ファイル内容を取得
  // (2) front-matter で locale 情報取得。（この情報も置き換えで利用可能）
  // (3) { WORD } の部分が書き換え対象として format-message で 
  return Promise.resolve().then(()=>{
    if(filename == "unknown.md" && markdown.indexOf('http') == 0) {
      filename = markdown.split('/').pop().split('?').shift();
    }
    return ( Buffer.isBuffer(markdown) ? markdown.toString(): fetch(markdown).then(r=>r.text()) );
  }).then( fm ).then(({ attributes = { }, body = "", bodyBegin = 0, frontmatter = null })=>{
 
    let locale = attributes.locale || user.locale, lang = attributes.lang || user.lang;
    let formats = { };
    if(!locale) {
      locale = lang;
    }
    console.log('[' + filename + '] locale?' + locale, 'lang?' + lang, 'body.length?' + body.length);
    values = Object.assign(attributes, values);
    fmes.setup({
      locale, formats, // what locale strings should be displayed
      translations: tl.getTranslations(), // object containing translations
      generateId: pat=>{
        // console.log('generateId from?', pat);
        return pat.trim().replace(/\W/g, '_').replace(/^_+([^_]+.*[^_])_+$/, ($0, $1)=>$1.toLowerCase());
      }, // function to generate a missing id from the default message
      missingReplacement: (pat, id)=>{
        return pat.slice(1, -1);
      }, // use this when a translation is missing instead of the default message => Translate or Replace!
      missingTranslation: typeof warning_on_missing === 'string' ? warning_on_missing: warning_on_missing ? 'warning': 'ignore', // Don't console.warn or throw an error when a translation is missing
    });
    // 1) translate_id には # を付与する。
    // 2) value を変換したい場所には $ を付与する
    body = body.replace(/(\#{2,3})\s+([^\n]+)\{name=([^\n]+)\}\n/g, ($0, hash, text, name)=>{
      const tagName = 'H' + hash.length;s
      return `<${tagName} id="${name}"> ${anchor(name)} ${text} </${tagName}>\n`;
    });
    body = body.replace(/(\$|\#)\{([^\}]+)\}/g, ($0, replaceType, replaceText)=>{
      replaceType = replaceType.trim();
      replaceText = replaceText.trim();
      return replaceType == '#' ? fmes(`{${ replaceText }}`, values): values[ replaceText ];
    });
    return it.render(body);

  });
};
export default Mx;
