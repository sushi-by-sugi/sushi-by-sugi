export interface ServiceReview {
  review_1: string;
  review_2: string;
}

export interface ServicePricing {
  priceTitle: string;
  priceInfo: string;
  priceCtaTtext: string;
}

export interface ServiceDescription {
  title: string;
  content: string;
  image: string;
}

export interface Service {
  slug: string;
  title: string;
  mainImage: string;
  description: ServiceDescription;
  reviews: ServiceReview;
  pricing?: ServicePricing;
}
