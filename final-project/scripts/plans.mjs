export const plans = [
  {
    id: "basic-cut",
    name: "Basic Cut Plan",
    price: 12,
    billingPeriod: "monthly",
    description:
      "A simple and affordable plan for customers who want to keep their haircut fresh every month.",
    benefits: [
      "1 haircut per month",
      "Quick wash included",
      "5% discount on grooming products"
    ],
    image: "./images/basic.webp" // ← your badge file
  },
  {
    id: "premium-grooming",
    name: "Premium Grooming Plan",
    price: 25,
    billingPeriod: "monthly",
    description:
      "A grooming-focused plan for clients who want a clean cut and beard maintenance with premium attention.",
    benefits: [
      "1 haircut per month",
      "1 beard trim per month",
      "Hot towel service",
      "10% discount on additional services",
      "Priority seating during busy hours"
    ],
    image: "./images/grooming.webp"// ← grooming badge
  },
  {
    id: "unlimited-cuts",
    name: "Unlimited Cuts Plan",
    price: 40,
    billingPeriod: "monthly",
    description:
      "A high-value membership for customers who want to maintain their style with unlimited visits.",
    benefits: [
      "Unlimited haircuts (up to 2 visits per week)",
      "Free neck cleanup",
      "15% discount on grooming products",
      "1 free drink per visit"
    ],
    image: "./images/cuts.webp" // ← cuts badge
  },
  {
    id: "vip-gamer",
    name: "VIP Gamer Plan",
    price: 35,
    billingPeriod: "monthly",
    description:
      "Perfect for gamers and premium clients, offering grooming plus exclusive access to the gaming lounge.",
    benefits: [
      "1 haircut per month",
      "1 beard trim per month",
      "30 minutes of gaming room access per visit",
      "Preferred seating",
      "20% discount on premium services"
    ],
    image: "./images/gamer.webp" // ← gamer badge
  },
  {
    id: "annual-king",
    name: "Annual King Plan",
    price: 350,
    billingPeriod: "yearly",
    description:
      "An exclusive yearly membership for customers seeking unlimited services and VIP-level treatment.",
    benefits: [
      "Unlimited haircuts all year",
      "Unlimited beard trims",
      "Full VIP gaming room access",
      "Annual gift (shirt, cap, or grooming kit)",
      "Top-tier priority, no waiting"
    ],
    image: "./images/king.webp" // ← king badge
  }
];
