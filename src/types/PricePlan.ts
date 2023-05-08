export default interface PricePlan {
	planName: "Basic" | "Pro" | "Business";
	planSummary: string;
	price: {
		perMonth: number;
		perYear: number;
	};
}
