import React from 'react';
import PropTypes from 'prop-types';

const SocialItem = (props) => {
  return (
    <li>
      <a href={props.link}>{props.children}</a>
    </li>
  );
};

SocialItem.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SocialItem;
