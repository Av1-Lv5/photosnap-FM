import type { ImageMetadata } from "astro";

export default interface HeroContent {
	title: string;
	description: string;
	images: {
		mobile: ImageMetadata;
		tablet: ImageMetadata;
		desktop: ImageMetadata;
	};
}
