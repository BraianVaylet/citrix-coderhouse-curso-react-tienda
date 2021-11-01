import {LOGOS} from 'utils/images';

const useLogoCategory = category => {
	if (category === 'naranja') {
		return LOGOS.orangeLogo;
	}

	if (category === 'pomelo') {
		return LOGOS.grapefruitLogo;
	}

	if (category === 'limon') {
		return LOGOS.lemonlogo;
	}

	if (category === 'mandarina') {
		return LOGOS.mandarineLogo;
	}

	if (category === 'token') {
		return LOGOS.ctxCoinLogo;
	}

	if (category === 'logo') {
		return LOGOS.logo;
	}

	return null;
};

export default useLogoCategory;
