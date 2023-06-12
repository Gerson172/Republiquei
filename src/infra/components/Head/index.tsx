import PropTypes from 'prop-types';
import NextHead from 'next/head';

function Head({ title }: any): JSX.Element {
	return (
		<NextHead>
			<title>{title}</title>
			<link rel="icon" href="/favicon.png" />
		</NextHead>
	);
}

Head.protoTypes = {
	title: PropTypes.string.isRequired,
};

export default Head;
