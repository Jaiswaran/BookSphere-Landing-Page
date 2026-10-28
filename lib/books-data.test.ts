import test from 'node:test';
import assert from 'node:assert/strict';
import {
  ANDROID_APK_DRIVE_URL,
  HERO_SHOWCASE_BOOKS,
  HOW_IT_WORKS_STEPS,
  getAndroidApkDownloadUrl,
  getShowcaseBookById,
  getNextPreviewPageIndex,
  calculateEarningsSplit,
  formatRupeeAmount,
  sanitizePriceInput,
} from './books-data';

test('HERO_SHOWCASE_BOOKS contains the three floating books from the reference design with 3 preview pages each', () => {
  assert.equal(HERO_SHOWCASE_BOOKS.length, 3);
  assert.equal(HERO_SHOWCASE_BOOKS[0].author, 'Clara Vance');
  assert.equal(HERO_SHOWCASE_BOOKS[2].title, 'Design for Dreamers');
  assert.equal(HERO_SHOWCASE_BOOKS[2].author, 'Sora Takahashi');
  for (const book of HERO_SHOWCASE_BOOKS) {
    assert.equal(book.previewPages.length, 3);
  }
});

test('HOW_IT_WORKS_STEPS defines Discover, Preview, and Read steps with exact copy', () => {
  assert.equal(HOW_IT_WORKS_STEPS.length, 3);
  assert.deepEqual(
    HOW_IT_WORKS_STEPS.map((s) => s.title),
    ['Discover', 'Preview', 'Read']
  );
});

test('getShowcaseBookById and getNextPreviewPageIndex cycle cleanly', () => {
  const book = getShowcaseBookById(
    HERO_SHOWCASE_BOOKS,
    'design-for-dreamers'
  );
  assert.equal(book.title, 'Design for Dreamers');
  assert.equal(getNextPreviewPageIndex(0, 3), 1);
  assert.equal(getNextPreviewPageIndex(1, 3), 2);
  assert.equal(getNextPreviewPageIndex(2, 3), 0);
});

test('calculateEarningsSplit computes exact 70/30 splits for ₹100, ₹200, ₹500, and decimal ₹149.50', () => {
  const split100 = calculateEarningsSplit(100);
  assert.equal(split100.isValid, true);
  assert.equal(split100.authorEarnings, 70);
  assert.equal(split100.bookSphereShare, 30);
  assert.equal(split100.formattedBookPrice, '₹100');
  assert.equal(split100.formattedAuthorEarnings, '₹70');
  assert.equal(split100.formattedBookSphereShare, '₹30');

  const split200 = calculateEarningsSplit('200');
  assert.equal(split200.authorEarnings, 140);
  assert.equal(split200.bookSphereShare, 60);
  assert.equal(split200.formattedAuthorEarnings, '₹140');
  assert.equal(split200.formattedBookSphereShare, '₹60');

  const split500 = calculateEarningsSplit('500');
  assert.equal(split500.authorEarnings, 350);
  assert.equal(split500.bookSphereShare, 150);
  assert.equal(split500.formattedAuthorEarnings, '₹350');
  assert.equal(split500.formattedBookSphereShare, '₹150');

  const splitDecimal = calculateEarningsSplit('149.50');
  assert.equal(splitDecimal.authorEarnings, 104.65);
  assert.equal(splitDecimal.bookSphereShare, 44.85);
  assert.equal(splitDecimal.formattedBookPrice, '₹149.50');
  assert.equal(splitDecimal.formattedAuthorEarnings, '₹104.65');
  assert.equal(splitDecimal.formattedBookSphereShare, '₹44.85');
  assert.equal(
    Math.round((splitDecimal.authorEarnings + splitDecimal.bookSphereShare) * 100),
    Math.round(splitDecimal.bookPrice * 100)
  );
});

test('calculateEarningsSplit and sanitizePriceInput handle rounding and prevent negative/invalid inputs', () => {
  // Odd cent rounding check: ₹99.99 -> shares must still sum to 99.99
  const splitOdd = calculateEarningsSplit('99.99');
  assert.equal(
    Math.round((splitOdd.authorEarnings + splitOdd.bookSphereShare) * 100),
    9999
  );

  // Negative input rejected
  const negativeSplit = calculateEarningsSplit('-50');
  assert.equal(negativeSplit.isValid, false);

  // Sanitizer strips minus signs, letters, and extra decimals
  assert.equal(sanitizePriceInput('-149.50abc'), '149.50');
  assert.equal(sanitizePriceInput('199.999'), '199.99');
  assert.equal( formatRupeeAmount(149.5), '₹149.50');
});

test('ANDROID_APK_DRIVE_URL and getAndroidApkDownloadUrl return the exact public Google Drive APK link', () => {
  const expectedUrl =
    'https://drive.google.com/file/d/1tmb5lO5ssLFgnISf9piO5eo36IBHs2Ov/view?usp=sharing';
  assert.equal(ANDROID_APK_DRIVE_URL, expectedUrl);
  assert.equal(getAndroidApkDownloadUrl(), expectedUrl);
});

