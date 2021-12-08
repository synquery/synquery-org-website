/**
 * [synquery-org-website] merge-translations.mjs
 * frontmatter された md データを読み込み、HTML 化するとともに intl に定義された辞書を使って各フォルダの filename.html を完成させる。
 * この html はさらに材料となり、md に記載されたテンプレートで index.html を生成する。
 * サポート対象言語は data/translations.json に定義し、index.md がない場合は
 * 「このページはまだ翻訳はありません」（協力するには）をつけて、defaultLanguage から持ってくる。
 */
import { remark } from 'remark';
(async ()=>{
  
  const fs = require('fs'), fsp = require('fs/promises');
  const pathToProjectSrc = __dirname
    .split(process.platform === "win32" ? "\\" : "/")
    .slice(0, -1)
    .join("/"); // synquery-org-website/src
  const path = require('path'), pathTo = to=>path.resolve(pathToProjectSrc, to);
  const read = async to=>fsp(path(to)).then(require('front-matter')); // use https://www.npmjs.com/package/front-matter to support frontmatter
  const remark = ()=>remark().use()
  const languageMetadata = require("../data/translations.json");
  const defaultLanguage = 'en';
  const supportedLanguages = Object.keys(languageMetadata);
  if(!supportedLanguages.includes(defaultLanguage))
    throw `defaultLanguage ${defaultLanguage} must be included in data/translations.json`;
  
  // Iterate over each supported language and generate /intl/${lang}.json
  // by merging all /intl/${currentTranslation}/${page}.json files
  // The defaultLanguage must process at first to be able to copy for NOT-YET languages.
  [ supportedLanguages.splice(supportedLanguages.indexOf(defaultLanguage), 1) ].concat( supportedLanguages ).forEach(currentTranslation=>{
    try {

      // front-matter results:
      /* { attributes: {
            title: , ...
          },
          body: ,
          bodyBegin: ,
          frontmatter: } */
      const pathToTranslations = pathTo("intl/" + currentTranslation);
      
      // Read keyword dictionaries
      const result = { };
      fs.readdirSync(pathToTranslations).forEach((file) => {
        const pathToFile = `${pathToTranslations}/${file}`
        const json = fs.readFileSync(pathToFile, "utf-8")
        // console.log(`Merging: ${pathToFile}`)
        Object.assign(result, JSON.parse(json));
      });
  
      // Seek src/**/index.md => {keyword translation} => public/%_twoletters_%/**/index.html
      const outputFilename = `src/intl/${currentTranslation}.json`;
      fs.writeFileSync(
        outputFilename,
        JSON.stringify(result, null, 2).concat("\n")
      )
      // console.log(`Merged translations saved: ${outputFilename}`)

    } catch (e) {
      console.error(e)
    }
  });

})(this).then(()=>{ /* process.exit(0); automatically */ })
['catch'](e=>{ console.error(e); process.exit(1); });
