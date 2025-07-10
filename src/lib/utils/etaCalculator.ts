export function calculateETA(from: { lat: number; lng: number }, to: { lat: number; lng: number }) {
  return Math.floor(Math.random() * 16) + 5; // 5-20 min
} 