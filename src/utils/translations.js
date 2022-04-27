/**
 *
 */ 
const globalLanguage = "en", globalLocale = "en-US";
import globalMessages from "../intl/en.json";
import languageMetadata from "../data/translations.json";
import Intl from "../intl/_";
((mx = module.exports) => {
  
  const supportedLanguages = new Set(Object.keys(languageMetadata));
  const globalIntl = new Intl(globalLanguage, 'en-US');
  Array.from(supportedLanguages).forEach(lang => {
    if(!globalIntl.dics[ globalIntl.underscored(lang) ]) throw 'Non supported or before bulid languageMetadate: ' + lang;
  });
  Object.assign(mx, {
    languageMetadata,
    supportedLanguages,
    hasTutorials,
    getTranslations,
    getLangContentVersion,
    getDefaultLocale,
    getDefaultLanguage,
    getDefaultMessage,
    translateMessageId,
  });

  function hasTutorials(lang) {
    const metadata = languageMetadata[lang];
    if (!metadata) {
      console.error(`No metadata found for language: ${lang}`);
      return;
    }
    // Tutorials are included in v2.2: https://crowdin.com/project/ethereum-org/settings#files
    return metadata.version >= 2.2;
  }
  
  // Returns a dictionary
  function getTranslations(lang, locale) {
    return globalIntl.dics;
  }
  
  // Returns language's content version
  // Used for conditional rendering of content
  function getLangContentVersion(lang) {
    const metadata = languageMetadata[lang];
    if (!metadata) {
      console.error(`No metadata found for language: ${lang}`);
      return;
    }
    const version = metadata.version;
    if (!version) {
      console.error(`No version found for language: ${lang}`);
      return;
    }
    return version;
  }

  function getDefaultLocale() {
    return globalLocale;
  }
  function getDefaultLanguage() {
    return globalLanguage;
  }
  
  // Returns the en.json value
  function getDefaultMessage(key) {
    const defaultMessage = globalMessages[key];
    if (defaultMessage === undefined) {
      console.error(
        `No key "${key}" in ${globalLanguage}.json. Cannot provide a default message.`
      );
    }
    return defaultMessage || "";
  }

  function translateMessageId(id, intl) {
    if (!id) {
      console.error(`No id provided for translation.`);
      return "";
    }
    if (!intl || !intl.formatMessage) {
      console.error(`Invalid/no intl provided for translation id ${id}`);
      return "";
    }
    const translation = intl.formatMessage({
      id, defaultMessage: getDefaultMessage(id),
    });
    if (translation === id) {
      console.error(
        `Intl ID string "${id}" has no match. Default message of "" returned.`
      );
      return "";
    }
    return translation;
  }

})(this);
// export default module.exports;
