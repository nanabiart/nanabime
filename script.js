// Função para alternar entre as abas principais (All, Specialties, About, Contact)
function switchTab(tabId) {
  // Remove a classe active de todos os botões e conteúdos
  const buttons = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');

  buttons.forEach(btn => btn.classList.remove('active'));
  contents.forEach(content => content.classList.remove('active'));

  // Ativa o botão clicado e a seção correspondente
  const activeBtn = event.currentTarget;
  if (activeBtn) {
    activeBtn.classList.add('active');
  }

  const targetContent = document.getElementById(tabId);
  if (targetContent) {
    targetContent.classList.add('active');
  }
}

// Função para abrir os modais de visualização
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Impede o fundo de rolar enquanto o modal está aberto
  }
}

// Função para fechar os modais ao clicar fora do card ou no fundo
function closeModal(event, modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restaura a rolagem da página
  }
}

// Função do botão "Load More" na aba "all"
function showMoreProjects() {
  const hiddenProjects = document.querySelectorAll('.project-card.hidden-project');
  hiddenProjects.forEach(card => {
    card.classList.remove('hidden-project');
  });

  // Esconde o botão após carregar todos os projetos
  const loadMoreBtn = document.getElementById('load-more-btn');
  if (loadMoreBtn) {
    loadMoreBtn.style.display = 'none';
  }
}

// Verifica se a página foi aberta com um parâmetro de projeto específico na URL (ex: ?project=modal-xyz)
window.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('project');
  if (projectId) {
    openModal(projectId);
  }
});
