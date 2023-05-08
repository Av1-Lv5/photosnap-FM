// this provides the Data for Hero sections of all the pages except /stories as it has a different design.

// types
import type HeroContent from "../types/HeroContent";

// images
import heroImgHome from "../images/home/mobile/create-and-share.jpg";
import heroImgHomeDesk from "../images/home/desktop/create-and-share.jpg";
import heroImgHomeTab from "../images/home/tablet/create-and-share.jpg";
import heroImgPricing from "../images/pricing/mobile/hero.jpg";
import heroImgPricingDesk from "../images/pricing/desktop/hero.jpg";
import heroImgPricingTab from "../images/pricing/tablet/hero.jpg";
import heroImgFeatures from "../images/features/mobile/hero.jpg";
import heroImgFeaturesDesk from "../images/features/desktop/hero.jpg";
import heroImgFeaturesTab from "../images/features/tablet/hero.jpg";

export const heroHome: HeroContent = {
	title: "Create and share your photo Stories.",
	description:
		"Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
	images: {
		mobile: heroImgHome,
		tablet: heroImgHomeTab,
		desktop: heroImgHomeDesk,
	},
};

export const heroPricing: HeroContent = {
	title: "Pricing",
	description:
		"Create a your stories, Photosnap is a platform for photographers and visual storytellers. It's the simple way to create and share your photos.",
	images: {
		mobile: heroImgPricing,
		tablet: heroImgPricingTab,
		desktop: heroImgPricingDesk,
	},
};

export const heroFeatures: HeroContent = {
	title: "Features",
	description:
		"We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.",
	images: {
		mobile: heroImgFeatures,
		tablet: heroImgFeaturesTab,
		desktop: heroImgFeaturesDesk,
	},
};
