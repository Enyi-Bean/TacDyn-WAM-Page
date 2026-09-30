// Add the five MP4 paths here when the real-world demonstrations are ready.
// Empty slots stay hidden and never request a missing video.
const REAL_WORLD_VIDEOS = [
  { task: 'stack-cups', src: '' },
  { task: 'remove-plug', src: '' },
  { task: 'insert-plug', src: '' },
  { task: 'unscrew-cup-lid', src: '' },
  { task: 'wipe-whiteboard', src: '' },
];

const videoSection = document.querySelector('#real-world-videos');
for (const { task, src } of REAL_WORLD_VIDEOS) {
  if (!src) continue;
  const figure = videoSection?.querySelector('[data-task="' + task + '"]');
  const video = figure?.querySelector('video');
  if (!video) continue;
  video.src = src;
  figure.hidden = false;
  videoSection.hidden = false;
}

const copyButton = document.querySelector('.copy-button');
copyButton?.addEventListener('click', async () => {
  const code = document.querySelector('.bibtex code');
  const status = document.querySelector('.copy-status');
  try {
    await navigator.clipboard.writeText(code.textContent);
    status.textContent = 'BibTeX copied.';
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(code);
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = 'Citation selected. Press Ctrl+C or Command+C to copy.';
  }
});
