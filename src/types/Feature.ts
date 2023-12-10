import type { ImageMetadata } from "astro";

export default interface Feature {
	icon: ImageMetadata;
	title: string;
	content: string;
}
