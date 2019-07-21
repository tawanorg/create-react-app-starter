import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
	return (
		<div>
			{title}
		</div>
	)
};

Header.propTypes = {
	title: PropTypes.string,
};


Header.defaultProps = {
	title: 'Header',
};

export default Header;
