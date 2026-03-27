document.addEventListener('DOMContentLoaded', () => {
  console.log('Script loaded!');

  const modal = document.getElementById('videoModal');
  const modalVideo = document.getElementById('modalVideo');
  const closeBtn = document.getElementById('closeModal');

  window.openModal = function(src) {
    modalVideo.src = src;
    modal.classList.add('show');
    modalVideo.currentTime = 0;
    modalVideo.play();
  };

  window.closeModal = function() {
    modal.classList.remove('show');
    modalVideo.pause();
    modalVideo.src = "";
  };

  const fadeElements = document.querySelectorAll('.fade-in');
  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  fadeElements.forEach(el => fadeObserver.observe(el));

  document.querySelectorAll('.project-link').forEach(link => {
    link.style.cursor = 'pointer';
    link.addEventListener('click', e => {
      e.preventDefault();
      const videoSrc = link.dataset.video || 'assets/myfirstedit.mp4';
      openModal(videoSrc);
    });
  });

  document.querySelectorAll('.openModal').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const videoSrc = btn.dataset.video;
      openModal(videoSrc);
    });
  });

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      closeModal();
    }
  });
});
