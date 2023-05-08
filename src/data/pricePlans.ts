import type PricePlan from "../types/PricePlan";

const pricePlans: PricePlan[] = [
	{
		planName: "Basic",
		planSummary:
			"Includes basic usage of our platform. Recommended for new and aspiring photographers.",
		price: {
			perMonth: 19.0,
			perYear: 190.0,
		},
	},
	{
		planName: "Pro",
		planSummary:
			"More advanced features available. Recommended for photography veterans and professionals.",
		price: {
			perMonth: 39.0,
			perYear: 390.0,
		},
	},
	{
		planName: "Business",
		planSummary:
			"Additional features available such as more detailed metrics. Recommended for business owners.",
		price: {
			perMonth: 99.0,
			perYear: 990.0,
		},
	},
];

export default pricePlans;
