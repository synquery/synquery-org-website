/**
 * [synquery-org-website](utils) updates.js
 * data/updates.json から更新時間を取得する関数。
 */
import tl from "./translations.js";
import updates from "../data/updates.json";
export default function updated(page, lang) {
  const values = updates[ page ] || { };
  const t = new Date( values[ lang ] || values[ tl.getDefaultLanguage() ] );
  return t.getTime() ? t: new Date('2001/01/01');
};