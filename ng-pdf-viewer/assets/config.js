
window.addEventListener('viewerLoaded', () => {
  const docViewer = readerControl.docViewer;

  // Add customization here
  docViewer.setMargin(20);
  readerControl.setTheme('dark');
});
