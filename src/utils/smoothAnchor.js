document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Impede o comportamento padrão de adicionar # na URL
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Rola até o elemento suavemente
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
            
            // Remove o # da URL sem recarregar a página
            history.replaceState(null, null, ' '); 
        }
    });
});
