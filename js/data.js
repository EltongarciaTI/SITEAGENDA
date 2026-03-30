/* ══════════════════════════════════════════════
   AGENDA PRO — Shared Data & Utilities
   ══════════════════════════════════════════════ */

const AP = {
  // ── Services ──
  services: [
    { id: 1, icon: '💆',  name: 'Massagem Relaxante',    dur: '60 min', price: 120, category: 'bem-estar',   desc: 'Técnica sueca completa para aliviar tensão muscular e promover relaxamento profundo.' },
    { id: 2, icon: '✂️',  name: 'Corte & Estilo',        dur: '45 min', price: 80,  category: 'cabelo',     desc: 'Corte personalizado com análise de rosto e finalização completa.' },
    { id: 3, icon: '💅',  name: 'Manicure & Pedicure',   dur: '90 min', price: 95,  category: 'unhas',      desc: 'Cuidado completo das unhas com esmaltação em gel de longa duração.' },
    { id: 4, icon: '🧖',  name: 'Limpeza de Pele',       dur: '75 min', price: 150, category: 'estética',   desc: 'Limpeza profunda com extração, esfoliação e máscara hidratante.' },
    { id: 5, icon: '💆‍♂️', name: 'Shiatsu Terapêutico',  dur: '50 min', price: 110, category: 'bem-estar',  desc: 'Pressão em pontos energéticos para equilíbrio do corpo e mente.' },
    { id: 6, icon: '🌿',  name: 'Aromaterapia',          dur: '60 min', price: 130, category: 'bem-estar',  desc: 'Massagem com óleos essenciais selecionados para o seu biotipo.' },
    { id: 7, icon: '💇',  name: 'Hidratação Capilar',    dur: '55 min', price: 90,  category: 'cabelo',     desc: 'Tratamento intensivo para cabelos danificados, secos ou com queda.' },
    { id: 8, icon: '✨',  name: 'Design de Sobrancelhas',dur: '30 min', price: 60,  category: 'estética',   desc: 'Mapeamento e design personalizado para valorizar o seu olhar.' },
    { id: 9, icon: '🛁',  name: 'Banho de Ofurô',        dur: '40 min', price: 85,  category: 'bem-estar',  desc: 'Imersão relaxante em banheira japonesa com ervas e sais minerais.' },
    { id:10, icon: '🎨',  name: 'Coloração Capilar',     dur:'120 min', price: 200, category: 'cabelo',     desc: 'Coloração profissional com produtos premium para máxima durabilidade.' },
    { id:11, icon: '💎',  name: 'Pacote Premium',        dur:'180 min', price: 380, category: 'pacotes',    desc: 'Dia completo de beleza: massagem, limpeza de pele, manicure e corte.' },
    { id:12, icon: '🌸',  name: 'Ritual Facial Completo',dur:'90 min',  price: 175, category: 'estética',   desc: 'Protocolo completo com limpeza, peeling, LED terapêutico e hidratação.' },
  ],

  categories: [
    { id: 'todos',    label: 'Todos' },
    { id: 'bem-estar',label: 'Bem-estar' },
    { id: 'cabelo',   label: 'Cabelo' },
    { id: 'unhas',    label: 'Unhas' },
    { id: 'estética', label: 'Estética' },
    { id: 'pacotes',  label: 'Pacotes' },
  ],

  // ── Time slots ──
  timeGroups: [
    { label: 'Manhã ☀️',  times: ['08:00','08:30','09:00','09:30','10:00','10:30','11:00','11:30'] },
    { label: 'Tarde 🌤️', times: ['13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00'] },
    { label: 'Noite 🌙',  times: ['18:00','18:30','19:00','19:30','20:00'] },
  ],

  // Mock unavailable slots (in a real app these come from the backend)
  unavailableSlots: ['09:00','10:30','14:00','15:30','18:30','16:00'],

  // ── Months / Days ──
  months: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
  monthsShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
  days: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'],

  // ── Helpers ──
  formatPrice(n) { return `R$ ${n.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}`; },

  formatDate(date) {
    if (!date) return '—';
    return `${date.getDate()} de ${AP.months[date.getMonth()]} de ${date.getFullYear()}`;
  },

  sameDay(a, b) {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  },

  genRef() {
    return 'AGD-' + Math.floor(100000 + Math.random() * 900000);
  },

  // ── Toast ──
  toast(msg, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const icons = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };
    const el = document.createElement('div');
    el.className = `toast ${type}`;
    el.innerHTML = `<span>${icons[type] || ''}</span><span>${msg}</span>`;
    container.appendChild(el);
    setTimeout(() => { el.style.opacity = '0'; el.style.transform = 'translateX(20px)'; el.style.transition = '0.3s'; setTimeout(() => el.remove(), 300); }, 3200);
  },

  // ── Phone mask ──
  maskPhone(input) {
    input.addEventListener('input', function () {
      let v = this.value.replace(/\D/g, '');
      if (v.length <= 11) {
        v = v.replace(/^(\d{2})(\d)/, '($1) $2');
        v = v.replace(/(\d{5})(\d)/, '$1-$2');
      }
      this.value = v;
    });
  },

  // ── Booking state (session) ──
  getBooking()  { try { return JSON.parse(sessionStorage.getItem('ap_booking') || '{}'); } catch{ return {}; } },
  saveBooking(b){ sessionStorage.setItem('ap_booking', JSON.stringify(b)); },
  clearBooking() { sessionStorage.removeItem('ap_booking'); },
};
