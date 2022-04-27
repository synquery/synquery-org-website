/**
 * [synquery-org-website](intl) _.js
 * 辞書を export するためのモジュール
 */
import ar from "./ar.json"
import bg from "./bg.json"
import bn from "./bn.json"
import ca from "./ca.json"
import cs from "./cs.json"
import de from "./de.json"
import el from "./el.json"
import en from "./en.json"
import es from "./es.json"
import fa from "./fa.json"
import fi from "./fi.json"
import fr from "./fr.json"
import hi from "./hi.json"
import hr from "./hr.json"
import hu from "./hu.json"
import id from "./id.json"
import ig from "./ig.json"
import it from "./it.json"
import ja from "./ja.json"
import ko from "./ko.json"
import lt from "./lt.json"
import ml from "./ml.json"
import nb from "./nb.json"
import nl from "./nl.json"
import pl from "./pl.json"
import pt_br from "./pt-br.json"
import pt from "./pt.json"
import ro from "./ro.json"
import ru from "./ru.json"
import se from "./se.json"
import sk from "./sk.json"
import sl from "./sl.json"
import tr from "./tr.json"
import uk from "./uk.json"
import vi from "./vi.json"
import zh_tw from "./zh-tw.json"
import zh from "./zh.json"
const imps = {
  ar, bg, bn, ca, cs,
  de, el, en, es, fa,
  fi, fr, hi, hr, hu,
  id, ig, it, ja, ko,
  lt, ml, nb, nl, pl,
  pt_br, pt, ro, ru, se,
  sk, sl, tr, uk, vi,
  zh_tw, zh,
};
class Intl {
  constructor(lang, locale) {
    this._dic = imps[ this.underscored(this.lang = lang) ];
    // TODO use pollyfill for Intl (https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl)
    try {
      this.DateTimeFormat = new Intl.DateTimeFormat(locale);
    } catch(e) { }
    try {
      this.NumberFormat = new Intl.NumberFormat(locale);
    } catch(e) { }
  }
  get dics() {
    return imps; // for format-message translations
  }
  get dic() {
    return this._dic;
  }
  underscored(t = this.lang) {
    return t.replace(/-/, '_');
  }
  isLangRightToLeft(t = this.lang) {
    return t === "ar" || t === "fa";
  }
  formatMessage(id) {
    return this.dic[id];
  }
  datetimeFormat(date) {
    return this.DateTimeFormat ? this.DateTimeFormat.format(date): date.toLocaleString();
  }
  numberFormat(n) {
    return this.NumberFormat ? this.NumberFormat.format(n): n;
  }
}
export default Intl;

