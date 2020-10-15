import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';

import { LoadingContainer, LoadingText } from './Loading.styles';

const Loading = ({ t }) => {
  return (
    <LoadingContainer>
      <video width="200" height="200" autoPlay loop>
        <source src="/assets/video/loading.mp4" type="video/mp4" />
        <track default kind="captions" />
        Your browser does not support the video tag.
      </video>
      <LoadingText>
        {t('loading')}
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </LoadingText>
    </LoadingContainer>
  );
};

Loading.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Loading);
