// Data for Hero like sections in the home page.

// TYPES
import type HeroContent from "../types/HeroContent";

// section 1 related images.
import beautifulStories from "../images/home/mobile/beautiful-stories.jpg";
import beautifulStoriesTab from "../images/home/tablet/beautiful-stories.jpg";
import beautifulStoriesDesk from "../images/home/desktop/beautiful-stories.jpg";

// section 2 related images
import designedForEveryone from "../images/home/mobile/designed-for-everyone.jpg";
import designedForEveryoneTab from "../images/home/tablet/designed-for-everyone.jpg";
import designedForEveryoneDesk from "../images/home/desktop/designed-for-everyone.jpg";

// content for section one
export const sectionOne: HeroContent = {
	title: "Beautiful stories every time",
	description:
		"We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
	images: {
		mobile: beautifulStories,
		tablet: beautifulStoriesTab,
		desktop: beautifulStoriesDesk,
	},
};

// content for section two
export const sectionTwo: HeroContent = {
	title: "Designed for everyone",
	description:
		"Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.",
	images: {
		mobile: designedForEveryone,
		tablet: designedForEveryoneTab,
		desktop: designedForEveryoneDesk,
	},
};
