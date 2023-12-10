import type { ImageMetadata } from "astro";

export default interface Story {
	title: string;
	author: string;
	date: string;
	image: ImageMetadata;
}
