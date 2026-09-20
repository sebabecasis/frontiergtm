const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project');
const emptyState = document.querySelector('.empty-state');
const progress = document.querySelector('.progress span');

filters.forEach((button) => {
  button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    let visible = 0;

    filters.forEach((item) => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });

    projects.forEach((project) => {
      const categories = project.dataset.category.split(' ');
      const matches = selected === 'all' || categories.includes(selected);
      project.hidden = !matches;
      if (matches) visible += 1;
    });

    emptyState.hidden = visible !== 0;
  });
});

document.querySelectorAll('[data-jump-filter]').forEach((link) => {
  link.addEventListener('click', () => {
    const target = document.querySelector(`.filter[data-filter="${link.dataset.jumpFilter}"]`);
    if (target) target.click();
  });
});

const updateProgress = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const value = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progress.style.width = `${Math.min(100, value)}%`;
};

window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();
