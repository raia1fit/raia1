/* ============================================
   RAIA 01 FITNESS STORE - JavaScript Customizado
   Template: Rio Textil (Nuvemshop)
   ============================================ */

(function() {
  'use strict';

  // ===== ANIMAÇÃO DE SCROLL (FADE IN) =====
  function initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observar elementos que devem animar
    const animateElements = document.querySelectorAll(
      '.product-item, .category-card, .category-detail-card, .section-title'
    );

    animateElements.forEach(el => {
      el.style.opacity = '0';
      observer.observe(el);
    });
  }

  // ===== BANNER SLIDER (SWIPER.JS) =====
  function initBannerSlider() {
    // Verificar se o Swiper está disponível
    if (typeof Swiper !== 'undefined') {
      const bannerSwiper = new Swiper('.banner-slider .swiper-container', {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        speed: 800,
      });
    } else {
      // Se Swiper não estiver disponível, adicionar o script
      const swiperCSS = document.createElement('link');
      swiperCSS.rel = 'stylesheet';
      swiperCSS.href = 'https://unpkg.com/swiper/swiper-bundle.min.css';
      document.head.appendChild(swiperCSS);

      const swiperJS = document.createElement('script');
      swiperJS.src = 'https://unpkg.com/swiper/swiper-bundle.min.js';
      swiperJS.onload = initBannerSlider;
      document.body.appendChild(swiperJS);
    }
  }

  // ===== WHATSAPP FLUTUANTE =====
  function initWhatsAppButton() {
    // Criar botão do WhatsApp
    const whatsappBtn = document.createElement('a');
    whatsappBtn.href = 'https://wa.me/5511999999999?text=Olá! Vim do site e gostaria de saber mais sobre os produtos.';
    whatsappBtn.target = '_blank';
    whatsappBtn.className = 'whatsapp-float';
    whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
    whatsappBtn.setAttribute('aria-label', 'Contato WhatsApp');

    document.body.appendChild(whatsappBtn);

    // Animação de entrada
    setTimeout(() => {
      whatsappBtn.style.opacity = '0';
      whatsappBtn.style.transition = 'opacity 0.5s ease';
      setTimeout(() => {
        whatsappBtn.style.opacity = '1';
      }, 100);
    }, 1000);
  }

  // ===== CONTADOR DE DESCONTO (COUNTDOWN) =====
  function initCountdown(elementId, endDate) {
    const countdownElement = document.getElementById(elementId);
    if (!countdownElement) return;

    const countdownTimer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate - now;

      if (distance < 0) {
        clearInterval(countdownTimer);
        countdownElement.innerHTML = 'PROMOÇÃO ENCERRADA';
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdownElement.innerHTML = `
        <div style="display: flex; gap: 15px; justify-content: center; font-weight: 700;">
          <div style="background: white; padding: 15px; border-radius: 10px; min-width: 70px;">
            <div style="font-size: 2rem; color: #7B3F9D;">${days}</div>
            <div style="font-size: 0.8rem; color: #666;">DIAS</div>
          </div>
          <div style="background: white; padding: 15px; border-radius: 10px; min-width: 70px;">
            <div style="font-size: 2rem; color: #7B3F9D;">${hours}</div>
            <div style="font-size: 0.8rem; color: #666;">HORAS</div>
          </div>
          <div style="background: white; padding: 15px; border-radius: 10px; min-width: 70px;">
            <div style="font-size: 2rem; color: #7B3F9D;">${minutes}</div>
            <div style="font-size: 0.8rem; color: #666;">MIN</div>
          </div>
          <div style="background: white; padding: 15px; border-radius: 10px; min-width: 70px;">
            <div style="font-size: 2rem; color: #7B3F9D;">${seconds}</div>
            <div style="font-size: 0.8rem; color: #666;">SEG</div>
          </div>
        </div>
      `;
    }, 1000);
  }

  // ===== FILTRO DE PRODUTOS =====
  function initProductFilter() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    const productItems = document.querySelectorAll('.product-item');

    filterButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();

        // Remover classe active de todos os botões
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter');

        productItems.forEach(item => {
          if (filterValue === 'all' || item.classList.contains(filterValue)) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 10);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }

  // ===== MODAL DE NEWSLETTER (POPUP) =====
  function initNewsletterModal() {
    // Verificar se já mostrou o popup hoje
    const lastShown = localStorage.getItem('newsletterPopupShown');
    const today = new Date().toDateString();

    if (lastShown === today) return;

    // Criar modal
    const modal = document.createElement('div');
    modal.innerHTML = `
      <div id="newsletter-modal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 9999; align-items: center; justify-content: center;">
        <div style="background: white; border-radius: 20px; max-width: 500px; width: 90%; padding: 40px; position: relative; animation: slideUp 0.5s ease;">
          <button id="close-newsletter" style="position: absolute; top: 15px; right: 15px; background: none; border: none; font-size: 24px; cursor: pointer; color: #999;">&times;</button>

          <div style="text-align: center;">
            <h2 style="color: #7B3F9D; font-size: 2rem; margin-bottom: 15px;">Ganhe 10% OFF</h2>
            <p style="color: #666; margin-bottom: 25px;">Cadastre-se e receba novidades e ofertas exclusivas!</p>

            <form id="newsletter-form" style="display: flex; flex-direction: column; gap: 15px;">
              <input type="email" placeholder="Seu melhor e-mail" required style="padding: 15px; border: 2px solid #E0E0E0; border-radius: 10px; font-size: 16px;">
              <button type="submit" class="btn-primary" style="width: 100%;">Quero meu desconto!</button>
            </form>

            <p style="font-size: 12px; color: #999; margin-top: 15px;">Ao se cadastrar, você concorda com nossa Política de Privacidade.</p>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    // Mostrar modal após 10 segundos
    setTimeout(() => {
      const modalElement = document.getElementById('newsletter-modal');
      modalElement.style.display = 'flex';
      localStorage.setItem('newsletterPopupShown', today);
    }, 10000);

    // Fechar modal
    document.getElementById('close-newsletter').addEventListener('click', () => {
      document.getElementById('newsletter-modal').remove();
    });

    // Submit do formulário
    document.getElementById('newsletter-form').addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Obrigado! Você receberá seu cupom de 10% OFF por e-mail.');
      document.getElementById('newsletter-modal').remove();
    });
  }

  // ===== QUICK VIEW DE PRODUTOS =====
  function initQuickView() {
    const productItems = document.querySelectorAll('.product-item');

    productItems.forEach(item => {
      // Adicionar botão de quick view
      const quickViewBtn = document.createElement('button');
      quickViewBtn.className = 'quick-view-btn';
      quickViewBtn.innerHTML = '<i class="fas fa-eye"></i> Visualização Rápida';
      quickViewBtn.style.cssText = `
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: white;
        color: #7B3F9D;
        border: none;
        padding: 12px 25px;
        border-radius: 25px;
        font-weight: 600;
        opacity: 0;
        transition: opacity 0.3s ease;
        cursor: pointer;
        z-index: 10;
      `;

      const imageContainer = item.querySelector('.product-item-image');
      if (imageContainer) {
        imageContainer.style.position = 'relative';
        imageContainer.appendChild(quickViewBtn);
      }

      // Mostrar botão no hover
      item.addEventListener('mouseenter', () => {
        quickViewBtn.style.opacity = '1';
      });

      item.addEventListener('mouseleave', () => {
        quickViewBtn.style.opacity = '0';
      });
    });
  }

  // ===== SCROLL SUAVE =====
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // ===== BARRA DE FRETE GRÁTIS =====
  function initFreeShippingBar() {
    const freeShippingThreshold = 199; // Valor mínimo para frete grátis

    // Criar barra
    const shippingBar = document.createElement('div');
    shippingBar.id = 'free-shipping-bar';
    shippingBar.style.cssText = `
      background: linear-gradient(135deg, #7B3F9D, #E91E63);
      color: white;
      padding: 12px;
      text-align: center;
      font-weight: 600;
      position: sticky;
      top: 0;
      z-index: 999;
      font-size: 14px;
    `;
    shippingBar.innerHTML = `
      <i class="fas fa-truck"></i>
      FRETE GRÁTIS para compras acima de R$ ${freeShippingThreshold.toFixed(2)}
    `;

    // Inserir no topo da página
    const header = document.querySelector('.header') || document.body.firstChild;
    document.body.insertBefore(shippingBar, header);
  }

  // ===== INICIALIZAÇÃO =====
  function init() {
    // Aguardar DOM estar pronto
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }

    // Inicializar funcionalidades
    initScrollAnimations();
    initBannerSlider();
    initWhatsAppButton();
    initProductFilter();
    initNewsletterModal();
    initQuickView();
    initSmoothScroll();
    initFreeShippingBar();

    // Exemplo de countdown (definir data de término)
    // const saleEndDate = new Date('2024-12-31 23:59:59').getTime();
    // initCountdown('countdown-timer', saleEndDate);

    console.log('🎯 Raia 01 Fitness Store - Scripts carregados com sucesso!');
  }

  // Executar inicialização
  init();

})();