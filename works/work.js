document.querySelectorAll('.sheet img').forEach((image) => {
  image.title = '点击查看高清原图';
  image.tabIndex = 0;

  const openOriginal = () => window.open(image.currentSrc || image.src, '_blank', 'noopener');
  image.addEventListener('click', openOriginal);
  image.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openOriginal();
    }
  });
});
