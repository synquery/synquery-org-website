/**
 * [synquery-org-website] merge-translations.js
 * この辞書は format-message で translations に配布されるものである。
 * サポート対象言語は data/translations.json に定義する。その結果は utils/translations から取得したいが、CLI で import ができないため、コピペしてくる。
 * コンテンツ自体が不足している場合は「このページはまだ翻訳はありません」（協力するには）をつけて、defaultLanguage から持ってくる。
 */
// import tl from "../utils/translations"; => Not working
const tl = { };
const globalLanguage = "en", globalLocale = "en-US";
tl.languageMetadata = require("../data/translations.json");
tl.supportedLanguages = Object.keys(tl.languageMetadata);
tl.getDefaultLanguage = ()=>globalLanguage;
tl.getDefaultLocale = ()=>globalLocale;
(async (mx = module.exports) => {
  
  const fs = require("fs"),
    fsp = require("fs/promises");
  const pathToProjectSrc = __dirname
    .split(process.platform === "win32" ? "\\" : "/")
    .slice(0, -1)
    .join("/"); // synquery-org-website/src
  const path = require("path"),
    pathTo = to => path.resolve(pathToProjectSrc, to);
  const languageMetadata = tl.languageMetadata;
  const supportedLanguages = [ ].concat(tl.supportedLanguages);
  const defaultLanguage = tl.getDefaultLanguage();
  if(!supportedLanguages.includes(defaultLanguage))
    throw `defaultLanguage ${defaultLanguage} must be included in data/translations.json`;

  // Iterate over each supported language and generate /intl/${lang}.json
  // by merging all /intl/${currentTranslation}/${page}.json files
  // The defaultLanguage must process at first to be able to copy for NOT-YET languages.
  let defaultLanguageResult;
  [ supportedLanguages.splice(supportedLanguages.indexOf(defaultLanguage), 1) ]
    .concat(supportedLanguages)
    .forEach((currentTranslation) => {
      try {

        const pathToTranslations = pathTo("intl/" + currentTranslation);
        // Read keyword dictionaries
        // Based on defaultLanguageResult
        const result = Object.assign({ }, defaultLanguageResult);
        if(!fs.statSync(pathToTranslations).isDirectory()) {
          // Other folder
          return;
        }
        // console.log(`Merge translations from directory: ${pathToTranslations}`);
        fs.readdirSync(pathToTranslations).forEach(file => {
          if(!/\.json$/.test(file)) return; // Not the marge target
          const pathToFile = `${pathToTranslations}/${file}`;
          // console.log(`Merging: ${pathToFile}`)
          Object.assign(result, JSON.parse(fs.readFileSync(pathToFile, "utf-8")));
        });
        if(currentTranslation == defaultLanguage) {
          defaultLanguageResult = result;
        }

        // Seek src/**/index.md => {keyword translation} => public/%_twoletters_%/**/index.html
        const outputFilename = `src/intl/${currentTranslation}.json`;
        fs.writeFileSync(outputFilename, JSON.stringify(result, null, 2).concat("\n"));
        // console.log(`Merged translations saved: ${outputFilename}`)

      } catch (e) {
        console.error('Continue with error translation:' + currentTranslation, e);
        // Continue although occurs an error
      }
    });
})(this).then(() => {
  /* process.exit(0); automatically */
})["catch"]((e) => {
  throw e; // process.exit(1);
});

