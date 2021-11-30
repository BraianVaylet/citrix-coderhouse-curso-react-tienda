import React from 'react';
import {Box, Carousel, Image} from 'grommet';
import {IMAGES} from 'utils/images';

const CarouselBanner = () => (
	<Box
		height="medium"
		width="100%"
		overflow="hidden"
		margin={{left: 'none', right: 'none', top: 'large', bottom: 'large'}}
	>
		<Carousel
			fill
			play={8000}
		>
			<Image
				fit="cover"
				src={IMAGES.banner1.src}
				alt={IMAGES.banner1.alt}
			/>
			<Image
				fit="cover"
				src={IMAGES.banner2.src}
				alt={IMAGES.banner2.alt}
			/>
		</Carousel>
	</Box>
);

export default CarouselBanner;
