import { describe, it, expect, beforeEach } from '@jest/globals';
import {
  parseUrl,
  generateHash,
  saveUrl,
  lookupUrl,
  getHitCount,
  resetUrlStore,
} from './urlHelpers';

describe('urlHelpers', () => {
  beforeEach(() => {
    resetUrlStore();
  });

  describe('parseUrl', () => {
    it('returns URL object for valid input', () => {
      const parsed = parseUrl('https://example.com/path');

      expect(parsed).toBeInstanceOf(URL);
      expect(parsed?.href).toBe('https://example.com/path');
    });

    it('returns null for invalid url', () => {
      const parsed = parseUrl('not-a-url');

      expect(parsed).toBeNull();
    });
  });

  describe('generateHash', () => {
    it('creates a hash with the default length', () => {
      const hash = generateHash();

      expect(hash).toHaveLength(5);
      expect(/^[A-Za-z0-9]+$/.test(hash)).toBe(true);
    });

    it('creates a hash with the requested length', () => {
      const hash = generateHash(8);

      expect(hash).toHaveLength(8);
    });
  });

  describe('url storage', () => {
    it('saves and retrieves original url', () => {
      const hash = saveUrl('https://example.com', 'abc12');

      expect(hash).toBe('abc12');

      const original = lookupUrl(hash);
      expect(original).toBe('https://example.com');
    });

    it('increments hit count on lookup', () => {
      const hash = saveUrl('https://example.com', 'abc12');

      expect(getHitCount(hash)).toBe(0);

      lookupUrl(hash);
      lookupUrl(hash);

      expect(getHitCount(hash)).toBe(2);
    });

    it('returns null for missing hash', () => {
      const result = lookupUrl('missing');

      expect(result).toBeNull();
      expect(getHitCount('missing')).toBeNull();
    });
  });
});
