import React from 'react';
import { i18n } from '../../i18n';

import { Lang, LangSelect, LangButton } from './LanguageSelector.styles';

const LanguageSelector = () => {
  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <LangSelect>
      <Lang onChange={changeLanguage}>
        <LangButton
          onClick={() =>
            i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')
          }
          aria-label="Change Language"
          value="eng"
          name="language"
          className="eng"
          type="button"
        />
      </Lang>
    </LangSelect>
  );
};

export default LanguageSelector;
