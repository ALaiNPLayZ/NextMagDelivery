export function calculateConfidenceScore(userId?: string, productId?: string) {
  // Simple deterministic score: hash userId and productId to a value between 0.9 and 1.0
  if (userId && productId) {
    let hash = 0;
    for (let i = 0; i < userId.length + productId.length; i++) {
      hash += (userId.charCodeAt(i % userId.length) ^ productId.charCodeAt(i % productId.length));
    }
    return Math.round((0.9 + (hash % 10) / 100) * 100) / 100;
  }
  // Fallback
  return 0.95;
} 