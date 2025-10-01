export function parseUrl(url: string): URL | null {
  try {
    return new URL(url);
  } catch (error) {
    return null;
  }
}

const urlStore = new Map<string, { originalUrl: string; hits: number }>();
const HASH_CHARACTERS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const DEFAULT_HASH_LENGTH = 5;

export function generateHash(length = DEFAULT_HASH_LENGTH): string {
  let result = "";
  const charactersLength = HASH_CHARACTERS.length;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    result += HASH_CHARACTERS.charAt(randomIndex);
  }

  return result;
}

export function saveUrl(originalUrl: string, hash = generateHash()): string {
  urlStore.set(hash, { originalUrl, hits: 0 });
  return hash;
}

export function lookupUrl(hash: string): string | null {
  const entry = urlStore.get(hash);
  if (!entry) return null;

  entry.hits += 1;
  return entry.originalUrl;
}

export function getHitCount(hash: string): number | null {
  const entry = urlStore.get(hash);
  return entry ? entry.hits : null;
}

export function resetUrlStore(): void {
  urlStore.clear();
}
