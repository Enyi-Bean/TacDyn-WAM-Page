const copyButton = document.querySelector('.copy-button');

copyButton?.addEventListener('click', async () => {
  const citation = document.querySelector('.bibtex code')?.textContent ?? '';
  try {
    await navigator.clipboard.writeText(citation);
    copyButton.textContent = 'Copied';
    setTimeout(() => { copyButton.textContent = 'Copy'; }, 1500);
  } catch {
    copyButton.textContent = 'Select text';
  }
});
