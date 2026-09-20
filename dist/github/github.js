const folderButtons = [...document.querySelectorAll('.folder')];
const repositories = [...document.querySelectorAll('.repository')];
const repositoryCount = document.querySelector('#repository-count');
const repositoryEmpty = document.querySelector('.repository-empty');
const progress = document.querySelector('.progress span');

folderButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selected = button.dataset.folder;
    let visible = 0;

    folderButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });

    repositories.forEach((repository) => {
      const matches = selected === 'all' || repository.dataset.folder === selected;
      repository.hidden = !matches;
      if (matches) visible += 1;
    });

    repositoryCount.textContent = String(visible);
    repositoryEmpty.hidden = visible !== 0;
  });
});

const updateProgress = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const value = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progress.style.width = `${Math.min(100, value)}%`;
};

window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();
