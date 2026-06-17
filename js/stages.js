const STAGES_DATA = [
  {
    id: 1,
    name: 'Северное Прибежище Нежити',
    subtitle: 'Начало пути',
    description: 'Заброшенное убежище, где Избранный Нежити пробуждается и получает первое оружие. Здесь же ждёт первый босс — Asylum Demon.',
    lore: '«Ты — Нежить. Не настоящий человек. Но и не монстр. Ты — Избранный, и твой путь начинается здесь, в холодных стенах убежища, где время остановилось.»',
    enemies: ['Полые', 'Скелеты', 'Asylum Demon'],
    boss: 'Демон прибежища',
    bossDesc: 'Могучий демон, охраняющий выход из убежища. Его огромная масса и яростные атаки испытывают каждого новичка.',
    objective: 'Покинуть Северное Прибежище и добраться до Города Нежити.',
    difficulty: 2,
    image: 'linear-gradient(135deg, #1a1208 0%, #0b0905 40%, #2a1810 100%)',
    souls: 2500,
  },
  {
    id: 2,
    name: 'Город Нежити',
    subtitle: 'Исследование',
    description: 'Разрушенный город, кишащий полыми и скелетами. Лабиринт узких улочек и крыш, где каждый поворот таит смертельную опасность.',
    lore: '«Город Нежити — некогда величественная столица, теперь превратившаяся в кладбище. Его жители давно стали полыми, а улицы помнят лишь эхо давно ушедшей славы.»',
    enemies: ['Полые', 'Скелеты', 'Крысы', 'Gaping Dragon'],
    boss: 'Демон карпа',
    bossDesc: 'Древний дракон, чьё тело разорвано временем. Его ядовитое дыхание и размашистые атаки хвостом смертельны.',
    objective: 'Найти ключ от глубин и победить Gaping Dragon.',
    difficulty: 3,
    image: 'linear-gradient(135deg, #0f0d08 0%, #1a1510 30%, #3a2018 100%)',
    souls: 5000,
  },
  {
    id: 3,
    name: 'Приход Нежити',
    subtitle: 'Испытание',
    description: 'Священное место, где паладины защищают последний оплот человечества. Могущественные рыцари и нежить ждут смельчаков.',
    lore: '«Приход — последний бастион веры в мире, поглощённом тьмой. Его стены помнят молитвы, а его стражи никогда не отступят перед нежитью.»',
    enemies: ['Паладины', 'Призраки', 'Basilisks', 'Ornstein & Smough'],
    boss: 'Горгульи колокола',
    bossDesc: 'Легендарная пара стражей. Ornstein — быстрый копейщик с молниями, Smough — медленный, но разрушительный молотобоец.',
    objective: 'Получить доступ к крепости и победить пару стражей.',
    difficulty: 4,
    image: 'linear-gradient(135deg, #0b0905 0%, #1a1008 50%, #2a1a10 100%)',
    souls: 8000,
  },
  {
    id: 4,
    name: 'Крепость Сена',
    subtitle: 'Крепость',
    description: 'Неприступная крепость на вершине горы. Коварные ловушки, рыцари-балисты и безумный босс Iron Golem стоят на пути к небесам.',
    lore: '«Крепость Сена возвышается над облаками, словно вызов небесам. Её создали безумцы, и только безумцы могут её покорить.»',
    enemies: ['Балисты', 'Рыцари', 'Кристальные ящерицы'],
    boss: 'Железный голем',
    bossDesc: 'Гигантский страж из закалённого железа. Его удары способны сбросить врага с моста в бездну.',
    objective: 'Пройти крепость и активировать механизм подъёма в Анор Лондо.',
    difficulty: 4,
    image: 'linear-gradient(135deg, #120e08 0%, #1a1510 40%, #4a3020 100%)',
    souls: 10000,
  },
  {
    id: 5,
    name: 'Анор Лондо',
    subtitle: 'Город богов',
    description: 'Город богов, парящий в облаках. Великолепие и величие скрывают смертоносных стражей — серебряных рыцарей и драконов.',
    lore: '«Анор Лондо — дом богов, залитый золотым светом. Но даже здесь, в сердце небес, тьма находит путь к душе Избранного.»',
    enemies: ['Серебряные рыцари', 'Полые', 'Gwyndolin', 'Dragonslayer Ornstein'],
    boss: 'Орнштейн Драконоборец и Палач Смоуг',
    bossDesc: 'Величайшие стражи, чья слава пережила сам город. Их синхронные атаки — вершина мастерства боя.',
    objective: 'Достичь дворца и получить доступ к Горнилу Первого Пламени.',
    difficulty: 5,
    image: 'linear-gradient(135deg, #0b0905 0%, #1a1510 30%, #3a3520 70%, #5a5030 100%)',
    souls: 15000,
  },
  {
    id: 6,
    name: 'Горнило Первого Пламени',
    subtitle: 'Финальная битва',
    description: 'Сердце мира, где древний Gwyn, Повелитель Пепла, охраняет угасающее Первое Пламя. Реши судьбу Лордрана.',
    lore: '«Первое Пламя угасает. Gwyn, первый из богов, сжёг свою душу, чтобы продлить эпоху огня. Теперь пришло время решить — зажечь его вновь или позволить тьме восторжествовать.»',
    enemies: ['Чёрные рыцари', 'Полые', 'Каламити Gwyn'],
    boss: 'Гвин, Повелитель Пепла',
    bossDesc: 'Создатель мира, чья душа давно сгорела в пламени. Его меч несёт пепел тысячелетий, а каждый удар — приговор.',
    objective: 'Победить Gwyn и решить судьбу Первого Пламени.',
    difficulty: 5,
    image: 'linear-gradient(135deg, #0b0905 0%, #2a1008 40%, #8b3a2a 80%, #d45a2a 100%)',
    souls: 25000,
  },
];

const STATUS_LABELS = {
  locked: 'ЗАКРЫТО',
  current: 'ТЕКУЩЕЕ',
  completed: 'ПРОЙДЕНО',
};

let stages = [];
let selectedStageId = null;

function initStages() {
  const grid = document.getElementById('stages-grid');
  if (!grid) return;

  stages = loadStages();
  renderStages();
  initStageModal();
  initStagesScrollAnimation();
}

function loadStages() {
  return STAGES_DATA.map((s, i) => ({
    ...s,
    status: i === 0 ? 'current' : 'locked',
  }));
}


function renderDifficultyPips(count) {
  return Array.from({ length: 5 }, (_, i) =>
    `<span class="difficulty-pip${i < count ? ' difficulty-pip--filled' : ''}"></span>`
  ).join('');
}

function renderStageCard(stage, index) {
  const isLocked = stage.status === 'locked';
  const isCurrent = stage.status === 'current';
  const isCompleted = stage.status === 'completed';

  let extraContent = '';
  if (!isLocked) {
    extraContent += `<p class="stage-card__desc">${stage.description}</p>`;
  }
  if (isCurrent) {
    extraContent += `
      <div class="stage-card__hint">
        <div class="stage-card__hint-line"></div>
        <span class="stage-card__hint-text">&#9656; НАЖМИ ДЛЯ ДЕТАЛЕЙ</span>
      </div>`;
  }
  if (isCompleted) {
    extraContent += `
      <div class="stage-card__souls">
        <span class="stage-card__souls-icon"></span>
        <span class="stage-card__souls-text">${stage.souls.toLocaleString('ru-RU')} ДУШ</span>
      </div>`;
  }

  return `
    <article
      class="stage-card stage-card--${stage.status}"
      data-id="${stage.id}"
      style="transition-delay: ${index * 0.1}s"
      ${!isLocked ? 'tabindex="0" role="button"' : ''}
    >
      <div class="stage-card__bg" style="background-image: ${stage.image}"></div>
      <div class="stage-card__overlay stage-${stage.id}"></div>
      ${isLocked ? `
        <div class="stage-card__lock">
          <svg width="40" height="48" viewBox="0 0 40 48" fill="none" aria-hidden="true">
            <rect x="6" y="18" width="28" height="26" rx="2" stroke="currentColor" stroke-width="2" fill="rgba(0,0,0,0.5)"/>
            <path d="M12 18V14C12 8.48 15.58 4 20 4C24.42 4 28 8.48 28 14V18" stroke="currentColor" stroke-width="2"/>
            <circle cx="20" cy="30" r="3" fill="currentColor"/>
            <rect x="19" y="30" width="2" height="6" rx="1" fill="currentColor"/>
          </svg>
        </div>` : ''}
      ${!isLocked ? '<div class="stage-card__hover-glow"></div>' : ''}
      <span class="stage-card__number">${String(index + 1).padStart(2, '0')}</span>
      <span class="stage-card__status stage-card__status--${stage.status}">${STATUS_LABELS[stage.status]}</span>
      <div class="stage-card__content">
        <p class="stage-card__subtitle">${stage.subtitle}</p>
        <h3 class="stage-card__name">${stage.name}</h3>
        <div class="difficulty-pips">${renderDifficultyPips(stage.difficulty)}</div>
        ${extraContent}
      </div>
    </article>`;
}

function renderStages() {
  const grid = document.getElementById('stages-grid');
  const pips = document.getElementById('stages-progress-pips');
  const count = document.getElementById('stages-progress-count');

  grid.innerHTML = stages.map(renderStageCard).join('');

  const completed = stages.filter(s => s.status === 'completed').length;
  pips.innerHTML = stages.map(s => {
    const cls = s.status === 'completed' ? 'completed'
      : s.status === 'current' ? 'current' : 'locked';
    return `<span class="stages-progress__pip stages-progress__pip--${cls}"></span>`;
  }).join('');

  count.textContent = `${completed}/${stages.length} ЭТАПОВ`;

  grid.querySelectorAll('.stage-card:not(.stage-card--locked)').forEach(card => {
    card.addEventListener('click', () => openStageModal(Number(card.dataset.id)));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openStageModal(Number(card.dataset.id));
      }
    });
  });

  if (isStagesInView()) showStagesElements();
}

function openStageModal(id) {
  const stage = stages.find(s => s.id === id);
  if (!stage || stage.status === 'locked') return;

  selectedStageId = id;
  const modal = document.getElementById('stage-modal');
  const dialog = document.getElementById('stage-modal-dialog');

  dialog.innerHTML = `
    <div class="stage-modal__header">
      <div class="stage-modal__header-bg" style="background-image: ${stage.image}"></div>
      <div class="stage-modal__header-overlay"></div>
      <button class="stage-modal__close" id="stage-modal-close" aria-label="Закрыть">&#10005;</button>
      <div class="stage-modal__header-content">
        <p class="stage-modal__header-subtitle">${stage.subtitle}</p>
        <h2 class="stage-modal__header-title">${stage.name}</h2>
      </div>
    </div>
    <div class="stage-modal__body">
      <div>
        <p class="stage-modal__lore">${stage.lore}</p>
        <p class="stage-modal__desc">${stage.description}</p>
        <div class="stage-modal__block">
          <p class="stage-modal__block-title">ЗАДАНИЕ</p>
          <p class="stage-modal__objective">${stage.objective}</p>
        </div>
      </div>
      <div>
        <div class="stage-modal__block">
          <p class="stage-modal__block-title">СЛОЖНОСТЬ</p>
          <div class="difficulty-pips">${renderDifficultyPips(stage.difficulty)}</div>
        </div>
        <div class="stage-modal__block">
          <p class="stage-modal__block-title">ВРАГИ</p>
          <ul class="stage-modal__enemies">
            ${stage.enemies.map(e => `<li class="stage-modal__enemy">${e}</li>`).join('')}
          </ul>
        </div>
        <div class="stage-modal__boss">
          <p class="stage-modal__block-title">СТРАЖ ЛОКАЦИИ</p>
          <p class="stage-modal__boss-name">${stage.boss}</p>
          <p class="stage-modal__boss-desc">${stage.bossDesc}</p>
        </div>
        <div class="stage-modal__footer">
          <div>
            <p class="stage-modal__reward-label">НАГРАДА</p>
            <p class="stage-modal__reward-value">${stage.souls.toLocaleString('ru-RU')} Душ</p>
          </div>
          ${stage.status === 'current' ? `
            <button class="stage-modal__complete" id="stage-complete-btn">ЗАВЕРШИТЬ ЭТАП</button>
          ` : stage.status === 'completed' ? `
            <span class="stage-modal__done">&#10003; ПРОЙДЕНО</span>
          ` : ''}
        </div>
      </div>
    </div>`;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  document.getElementById('stage-modal-close')?.addEventListener('click', closeStageModal);
  document.getElementById('stage-complete-btn')?.addEventListener('click', () => completeStage(id));
}

function closeStageModal() {
  const modal = document.getElementById('stage-modal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  selectedStageId = null;
}

function completeStage(id) {
  const index = stages.findIndex(s => s.id === id);
  if (index === -1 || stages[index].status !== 'current') return;

  stages[index].status = 'completed';
  if (stages[index + 1]) {
    stages[index + 1].status = 'current';
  }

  // saveStages();
  closeStageModal();
  renderStages();
}