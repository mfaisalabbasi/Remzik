// src/services/propertyService.js
// Replace these with real fetch calls to your backend (axios/fetch)
const MOCK_PROPERTIES = [
  {
    id: 'p1',
    title: 'Emerald Gardens Villa, Dubai',
    image: null, // set local image via require('../../assets/prop1.jpg') in UI or remote URL
    pricePerTokenUSD: 56,
    tokensAvailable: 2550000,
    minPurchase: 150,
    estimatedYield: 6.0,
    location: 'Dubai, UAE',
  },
  {
    id: 'p2',
    title: 'Riyadh Smart Apartments',
    image: null,
    pricePerTokenUSD: 32,
    tokensAvailable: 1200000,
    minPurchase: 100,
    estimatedYield: 7.2,
    location: 'Riyadh, KSA',
  },
  // add more
];

export async function getFeaturedProperties() {
  // emulate network delay
  await new Promise(res => setTimeout(res, 500));
  return MOCK_PROPERTIES.slice(0, 3);
}

export async function getMarketProperties(page = 1, perPage = 10) {
  // implement pagination later
  await new Promise(res => setTimeout(res, 600));
  return MOCK_PROPERTIES;
}