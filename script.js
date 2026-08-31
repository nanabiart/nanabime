// TROCA DE ABAS (NAVIGATION TABS)
function switchTab(tabId) {
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.classList.remove('active'));

  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  const targetContent = document.getElementById(tabId);
  if (targetContent) {
    targetContent.classList.add('active');
  }

  const activeBtn = Array.from(buttons).find(
    btn => btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(tabId)
  );
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
}

// BOTÃO LOAD MORE (EXIBE PROJETOS OCULTOS)
function showMoreProjects() {
  const hiddenProjects = document.querySelectorAll('.project-card.hidden-project');
  const loadMoreBtn = document.getElementById('load-more-btn');

  const itemsToShow = 4;

  for (let i = 0; i < itemsToShow && i < hiddenProjects.length; i++) {
    hiddenProjects[i].classList.remove('hidden-project');
  }

  if (document.querySelectorAll('.project-card.hidden-project').length === 0) {
    if (loadMoreBtn) {
      loadMoreBtn.style.display = 'none';
    }
  }
}

// JANELA MODAL

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModalDirect(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

// Fecha no clique do fundo ou no botão close
function closeModal(event, modalId) {
  if (event) {
    const isOverlay = event.target.classList.contains('modal-overlay');
    const isCloseBtn = event.target.classList.contains('modal-close-btn') || 
                       event.target.closest('.modal-close-btn');

    if (isOverlay || isCloseBtn) {
      event.stopPropagation();
      closeModalDirect(modalId);
    }
  } else {
    closeModalDirect(modalId);
  }
}

// Fechar com ESC
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    const activeModals = document.querySelectorAll('.modal-overlay.active');
    activeModals.forEach(modal => {
      modal.classList.remove('active');
    });
    document.body.style.overflow = 'auto';
  }
});
