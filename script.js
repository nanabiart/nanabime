// TROCA DE ABAS (NAVIGATION TABS)
function switchTab(tabId) {
  // Oculta todas as abas
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.classList.remove('active'));

  // Remove a classe 'active' de todos os botões
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  // Ativa o conteúdo selecionado
  const targetContent = document.getElementById(tabId);
  if (targetContent) {
    targetContent.classList.add('active');
  }

  // Ativa o botão selecionado
  const activeBtn = Array.from(buttons).find(
    btn => btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(tabId)
  );
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
}

// JANELA MODAL (PROTÓTIPO COM ROLAGEM INTERNA)

// Abre a janela e trava o scroll da página principal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

// Fechamento direto da janela
function closeModalDirect(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

// Fecha se o usuário clicar na área cinza (overlay) fora do card
function closeModal(event, modalId) {
  if (event.target.classList.contains('modal-overlay')) {
    closeModalDirect(modalId);
  }
}

// Fecha o modal aberto ao pressionar a tecla ESC
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    const activeModals = document.querySelectorAll('.modal-overlay.active');
    activeModals.forEach(modal => {
      modal.classList.remove('active');
    });
    document.body.style.overflow = 'auto';
  }
});
