export function calculateETA(from: { lat: number; lng: number }, to: { lat: number; lng: number }) {
  // Haversine formula to calculate distance in km
  const R = 6371; // Earth radius in km
  const dLat = (to.lat - from.lat) * Math.PI / 180;
  const dLng = (to.lng - from.lng) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(from.lat * Math.PI / 180) * Math.cos(to.lat * Math.PI / 180) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  // Assume van speed is 30 km/h
  const speed = 30; // km/h
  const eta = distance / speed * 60; // minutes
  return Math.round(eta);
} 