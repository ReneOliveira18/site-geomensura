document.addEventListener('DOMContentLoaded', () => {
    // Substitua o número abaixo pelo telefone da empresa, incluindo o código do país
    const numeroTelefone = '+5511999999999'; 
    const mensagemPadrao = encodeURIComponent('Olá, gostaria de mais informações sobre os serviços de geomensura e um orçamento. Poderia me ajudar?');

    // Seleciona todos os botões de CTA e o botão flutuante
    const linksWhatsapp = document.querySelectorAll('.cta-button, #floating-whatsapp');

    linksWhatsapp.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const urlWhatsapp = `https://wa.me/${numeroTelefone}?text=${mensagemPadrao}`;
            window.open(urlWhatsapp, '_blank');
        });
    });
});
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('menu-aberto');
    document.body.classList.toggle('menu-aberto');
});