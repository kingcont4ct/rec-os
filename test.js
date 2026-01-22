const fs = require('fs');
const assert = require('assert');
const { JSDOM } = require('jsdom');

// Read the HTML file
const html = fs.readFileSync('index.html', 'utf8');

// Create a DOM from the HTML. JSDOM will parse the document and execute the script.
const dom = new JSDOM(html, { runScripts: "dangerously" });
const { document } = dom.window;

// The DOMContentLoaded event listener in the script will not run because
// the event fires before the listener is added in JSDOM's lifecycle.
// So, we manually call the function that should have been called.
dom.window.renderLogos();

// After the function is called, the logos should be rendered.
const logoImages = document.querySelectorAll('.logo-img');

// There should be logos rendered.
assert.ok(logoImages.length > 0, 'No logo images were rendered in the DOM.');

// Check that the paths are correct and onerror is not present
for (const img of logoImages) {
  const src = img.getAttribute('src');
  assert.ok(src, 'Image src attribute is missing.');
  assert.strictEqual(src.startsWith('assets/img/'), false, `Incorrect path for an image: ${src}`);
  assert.strictEqual(img.hasAttribute('onerror'), false, 'onerror attribute should not be present');
}

console.log('All tests passed!');
