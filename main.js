// ===========================
// CUSTOM CURSOR
// ===========================
const cursor = document.createElement('div');
cursor.className = 'cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button, .project-card, .intern-card, .hobby-card, .leadership-card, .hero-photo').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
});

// ===========================
// YEAR
// ===========================
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===========================
// EXPERIENCE TABS
// ===========================
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    tabPanels.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const target = document.getElementById(btn.dataset.tab);
    if (target) target.classList.add('active');
  });
});

// ===========================
// WORK PAGE TABS
// ===========================
const workTabBtns = document.querySelectorAll('.work-tab-btn');
const workPanels = document.querySelectorAll('.work-panel');

workTabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    workTabBtns.forEach(b => b.classList.remove('active'));
    workPanels.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const target = document.getElementById(btn.dataset.panel);
    if (target) target.classList.add('active');
  });
});

// ===========================
// INTERN CARD MODAL
// ===========================
const modalData = {
  padma2: {
    title: 'AI Research Consultant',
    company: 'Padma Radya Aktuaria · Jakarta, ID',
    dates: 'Feb 2026 – Present',
    issue: 'IBNR (Incurred But Not Reported) reserving is a critical actuarial challenge — insurance companies must estimate future claim liabilities for events that have occurred but not yet been reported. Traditional methods rely on deterministic triangle-based approaches.',
    task: 'Researching how machine learning methods can improve the accuracy and efficiency of IBNR reserve estimation, reducing uncertainty in financial reporting.',
    stack: ['Python', 'Machine Learning', 'Actuarial Science', 'R'],
    learned: 'Bridging the gap between insurance domain knowledge and modern ML methodologies requires deep domain expertise — the best models in the world are useless without understanding the underlying actuarial mechanics.'
  },
  mayo: {
    title: 'Data Science Consultant',
    company: 'Mayo Clinic · New York, NY (Columbia Capstone)',
    dates: 'Jan 2026 – Present',
    issue: 'Only 13–15% of patients follow through with colonoscopies due to inadequate understanding and fear of the bowel preparation process — a crucial cancer screening procedure.',
    task: 'Designing an LLM/RAG-powered Q&A interface that provides clear, empathetic, personalized guidance to improve patient compliance and understanding of bowel prep.',
    stack: ['Python', 'LangChain', 'RAG', 'LLMs', 'FastAPI'],
    learned: 'Healthcare AI demands extremely high standards for accuracy and safety. Designing for vulnerable, anxious patients required thinking deeply about trust, clarity, and when AI should defer to a human provider.'
  },
  jazzhands: {
    title: 'Data Analyst Intern',
    company: 'Jazz Hands for Autism · Los Angeles, CA',
    dates: 'Jan 2025 – Jun 2025',
    issue: 'JazzBoard data was siloed and difficult for teachers, students, and parents to access. Tracking student outcomes and KPIs required excessive manual processing across disconnected spreadsheets.',
    task: 'Migrate and optimize JazzBoard by integrating 5+ data sources, implement automated data cleaning, and build an Employer Feedback App with dynamic dashboards that make data accessible and actionable for all stakeholders.',
    stack: ['Google AppSheets', 'Google Sheets', 'Python', 'Data Visualization'],
    learned: 'Working in a nonprofit amplified the real-world stakes of data accessibility. Teaching teammates and presenting to leadership reinforced that the best technical solution means nothing if people don\'t know how to use it.'
  },
  ucla: {
    title: 'Research Assistant',
    company: 'UCLA Carceral Ecologies Lab · Los Angeles, CA',
    dates: 'Sep 2024 – Aug 2025',
    issue: 'Investigating how LAPD helicopter surveillance noise impacts the health of Los Angeles communities, particularly in lower-income and minority neighborhoods.',
    task: 'Merging 170K+ LAPD flight records from multiple sources (PDF, CSV, geographic data), correcting OCR timestamp errors programmatically, and generating insights for public health policy.',
    stack: ['R', 'Python', 'Tableau', 'PDF Scraping', 'Geographic Analysis'],
    learned: 'Messy, real-world data is the norm, not the exception. Building a robust timestamp error-correction algorithm from scratch and presenting findings to the Johnson & Johnson Foundation showed me the power and responsibility of data-driven public health research.'
  },
  padma1: {
    title: 'Data Science Intern',
    company: 'Padma Radya Aktuaria · Jakarta, ID',
    dates: 'Jul 2024 – Sep 2024',
    issue: 'IFRS17 financial reporting was extremely time-consuming using traditional Excel methods, creating bottlenecks for processing 500K+ insurance records.',
    task: 'Automate the reporting pipeline by building a Python/Flask web application with a JavaScript frontend to process large insurance datasets and generate real-time IFRS17 Excel outputs.',
    stack: ['Python', 'Flask', 'JavaScript', 'Excel Automation', 'pandas'],
    learned: 'Full-stack development as a data scientist taught me to think beyond analysis — the delivery mechanism matters just as much as the algorithm. Achieving sub-1-minute runtime for 1,000-row batches required profiling and iterative optimization.'
  },
  gumgum: {
    title: 'AI/ML Intern',
    company: 'GumGum · Los Angeles, CA',
    dates: 'Aug 2023 – Dec 2023',
    issue: 'No existing pipeline existed for detecting and classifying non-speech sounds in video content — critical for more accurate and contextually appropriate advertising decisions.',
    task: 'Lead a team of 5 to develop a CNN deep learning pipeline using PANNs audio embeddings mapped to IAB categories, with AWS infrastructure for scalability.',
    stack: ['PyTorch', 'AWS', 'CNN', 'PANNs', 'Python', 'k-fold CV'],
    learned: 'Leading a cross-functional team as an intern was challenging and rewarding. I learned that audio ML has unique preprocessing requirements compared to image/text, and that ensemble evaluation strategies (k-fold + confusion matrices + F1) tell a much richer story than accuracy alone.'
  },
  cimb: {
    title: 'Marketing & Communications Intern',
    company: 'CIMB Niaga Bank · Jakarta, ID',
    dates: 'Jun 2022 – Sep 2022',
    issue: 'Low engagement from high-net-worth customers in CIMB\'s private banking sector. Marketing content wasn\'t resonating with the target demographic.',
    task: 'Lead the development of a targeted marketing campaign that would increase engagement and expand reach within the affluent banking segment.',
    stack: ['PowerPoint', 'Adobe Illustrator', 'Adobe Photoshop', 'Market Research'],
    learned: 'Understanding your audience is everything. This experience gave me a deep appreciation for the intersection of data and creativity — even marketing decisions are better when grounded in analytics.'
  },
  actuarial: {
    title: 'Data Analysis Research Intern',
    company: 'Actuarial Partners · Kuala Lumpur, MY',
    dates: 'Jun 2020 – Aug 2020',
    issue: 'There was a lack of aggregated, accessible information on the Sharia insurance market across Southeast Asia, making it difficult for industry stakeholders to understand trends and opportunities.',
    task: 'Mine open-source data across 50+ Indonesian and Malaysian insurance companies to produce a comprehensive 30-page Sharia insurance market report.',
    stack: ['Excel', 'Data Aggregation', 'Statistical Analysis', 'Visualization'],
    learned: 'My first professional research experience taught me the fundamentals of rigorous data collection methodology and how to communicate analytical findings to a non-technical audience through clear visualization and narrative structure.'
  }
};

const projectModalData = {
  serenestream: {
    title: 'SereneStream',
    meta: 'GenAI · Swift · UI/UX · QWER Hacks 2025',
    contributions: 'Built the full iOS app flow: Suno AI API integration for personalized lo-fi generation, SwiftUI UI/UX, and hackathon demo flow. Led product and integration decisions for the winning submission.',
    images: [
      'assets/projects/serene-stream/Screenshot 2026-02-17 at 21.42.02.png',
      'assets/projects/serene-stream/Screenshot 2026-02-17 at 23.45.27.png',
      'assets/projects/serene-stream/Screenshot 2026-02-17 at 23.45.35.png',
      'assets/projects/serene-stream/Screenshot 2026-02-17 at 23.45.46.png',
      'assets/projects/serene-stream/Screenshot 2026-02-17 at 23.45.59.png',
      'assets/projects/serene-stream/Screenshot 2026-02-17 at 23.46.09.png',
      'assets/projects/serene-stream/Screenshot 2026-02-17 at 23.46.19.png',
      'assets/projects/serene-stream/Screenshot 2026-02-17 at 23.47.19.png',
      'assets/projects/serene-stream/Screenshot 2026-02-17 at 23.47.25.png'
    ],
    stack: ['Swift', 'SwiftUI', 'Suno AI API', 'GenAI', 'UI/UX'],
    learned: 'Shipping a GenAI product in 24 hours reinforced the importance of clear API contracts and fallback UX when models are slow or unavailable.'
  },
  brain: {
    title: 'Brain State Classification',
    meta: 'Python · fMRI · SVM',
    contributions: 'Implemented the full fMRI BOLD pipeline: ROI segmentation, PCA dimensionality reduction, and SVM classification, achieving 89.7% cross-validation accuracy.',
    images: ['https://nilearn.github.io/dev/_images/sphx_glr_plot_demo_glass_brain_extensive_001.png'],
    stack: ['Python', 'fMRI', 'SVM', 'PCA', 'nilearn', 'scikit-learn'],
    learned: 'High-dimensional neuroimaging data benefits hugely from careful ROI selection and dimensionality reduction before classification.'
  },
  svhn: {
    title: 'SVHN Digit Classifier',
    meta: 'TensorFlow · CNN',
    contributions: 'Built and trained a 3-block CNN on 73K+ Street View House Numbers images, achieving 94% test accuracy with data augmentation and regularization.',
    images: [
      'assets/projects/svhn/Screenshot 2026-02-17 at 23.57.39.png',
      'assets/projects/svhn/Screenshot 2026-02-17 at 23.57.49.png',
      'assets/projects/svhn/Screenshot 2026-02-17 at 23.57.57.png'
    ],
    stack: ['TensorFlow', 'CNN', 'Keras', 'Data Augmentation'],
    learned: 'Real-world digit recognition (multiple digits, clutter) requires robust preprocessing and architecture choices compared to MNIST.'
  },
  letterboxd: {
    title: 'Letterboxd Recommender',
    meta: 'Python · Collaborative Filtering',
    contributions: 'Implemented item-based and user-based collaborative filtering plus matrix factorization on MovieLens 100K, comparing methods and tuning hyperparameters for recommendation quality.',
    images: [
      'assets/projects/letterboxd/Screenshot 2026-02-17 at 23.29.55.png',
      'assets/projects/letterboxd/Screenshot 2026-02-17 at 23.32.55.png'
    ],
    stack: ['Python', 'Collaborative Filtering', 'Matrix Factorization', 'surprise', 'pandas'],
    learned: 'Cold start and sparsity are the main challenges in recommender systems; combining multiple methods often beats a single approach.'
  },
  spotify: {
    title: 'Spotify Music Classifier',
    meta: 'PyTorch · Neural Network',
    contributions: 'Built a feed-forward neural network on audio features to classify 114 music genres, achieving 88% accuracy and 0.88 weighted F1 with careful class balancing and validation.',
    images: ['https://storage.googleapis.com/pr-newsroom-wp/1/2025/05/Header-Image10-scaled.jpg'],
    stack: ['PyTorch', 'Neural Networks', 'Python', 'Pandas', 'Scikit-learn'],
    learned: 'Multi-class classification with many labels requires attention to imbalance and the right metric (e.g. weighted F1) for deployment decisions.'
  },
  billboard: {
    title: 'Billboard Hot 100 Analysis',
    meta: 'API Mining · Data Viz · Git',
    contributions: 'Mined and cleaned 2000 #1 songs from 1950–2025, then produced PCA biplots, stacked bar charts, and mosaic plots to analyze evolution of chart trends and artist diversity.',
    images: [
      'assets/projects/billboard/Screenshot 2026-02-18 at 00.00.05.png',
      'assets/projects/billboard/Screenshot 2026-02-18 at 00.00.11.png',
      'assets/projects/billboard/Screenshot 2026-02-18 at 00.00.16.png',
      'assets/projects/billboard/Screenshot 2026-02-18 at 00.00.23.png',
      'assets/projects/billboard/Screenshot 2026-02-18 at 00.00.27.png',
      'assets/projects/billboard/Screenshot 2026-02-18 at 00.00.31.png'
    ],
    stack: ['Python', 'API', 'PCA', 'Data Visualization', 'Git', 'pandas', 'matplotlib'],
    learned: 'Telling a clear story with multiple visualizations and version-controlled analysis makes reproducibility and collaboration much easier.'
  },
  airquality: {
    title: 'Air Quality Time Series Analysis',
    meta: 'Python · OLS Regression · StatsModels',
    contributions: 'Fetched AQI and precipitation data from Climate Data Store API for Jakarta, applied OLS regression and first differencing to analyze trends and relationships between air quality and weather.',
    images: [
      'assets/projects/timeseries/Screenshot 2026-02-18 at 00.07.28.png',
      'assets/projects/timeseries/Screenshot 2026-02-18 at 00.07.35.png',
      'assets/projects/timeseries/Screenshot 2026-02-18 at 00.07.42.png',
      'assets/projects/timeseries/Screenshot 2026-02-18 at 00.07.57.png'
    ],
    stack: ['Python', 'StatsModels', 'OLS', 'Time Series', 'API', 'pandas'],
    learned: 'First differencing and careful handling of non-stationarity are essential for interpretable time series regression.'
  }
};

let slideshowIndex = 0;
let slideshowImages = [];

function renderSlideshow(images, overlay) {
  slideshowImages = images && images.length ? images : [];
  slideshowIndex = 0;
  const container = overlay.querySelector('#modal-slideshow');
  const imgEl = overlay.querySelector('#slideshow-image');
  const dotsEl = overlay.querySelector('#slideshow-dots');
  const prevBtn = overlay.querySelector('#slideshow-prev');
  const nextBtn = overlay.querySelector('#slideshow-next');

  if (!container || !imgEl) return;
  if (slideshowImages.length === 0) {
    container.style.display = 'none';
    return;
  }
  container.style.display = 'block';
  imgEl.src = slideshowImages[0];
  imgEl.alt = 'Project screenshot';

  dotsEl.innerHTML = slideshowImages.map((_, i) =>
    `<button type="button" class="slideshow-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Slide ${i + 1}">${i + 1}</button>`
  ).join('');

  function goTo(idx) {
    slideshowIndex = ((idx % slideshowImages.length) + slideshowImages.length) % slideshowImages.length;
    imgEl.src = slideshowImages[slideshowIndex];
    dotsEl.querySelectorAll('.slideshow-dot').forEach((d, i) => d.classList.toggle('active', i === slideshowIndex));
  }
  prevBtn.onclick = () => goTo(slideshowIndex - 1);
  nextBtn.onclick = () => goTo(slideshowIndex + 1);
  dotsEl.querySelectorAll('.slideshow-dot').forEach(dot => {
    dot.addEventListener('click', () => goTo(parseInt(dot.dataset.index, 10)));
  });
}

// Intern card click → modal
document.querySelectorAll('.intern-card[data-modal]').forEach(card => {
  card.addEventListener('click', () => {
    const key = card.dataset.modal;
    const data = modalData[key];
    if (!data) return;

    const overlay = document.getElementById('modal-overlay');
    overlay.querySelector('.modal-intern-sections').style.display = '';
    overlay.querySelector('.modal-project-sections').style.display = 'none';

    const hideStackAndLearned = key === 'padma2' || key === 'mayo';
    overlay.querySelector('#modal-section-stack').style.display = hideStackAndLearned ? 'none' : '';
    overlay.querySelector('#modal-section-learned').style.display = hideStackAndLearned ? 'none' : '';

    overlay.querySelector('.modal h2').textContent = data.title;
    overlay.querySelector('.modal-meta').textContent = `${data.company} · ${data.dates}`;
    overlay.querySelector('#modal-issue').textContent = data.issue;
    overlay.querySelector('#modal-task').textContent = data.task;
    overlay.querySelector('#modal-learned').textContent = data.learned;
    const stackEl = overlay.querySelector('#modal-stack');
    stackEl.innerHTML = data.stack.map(s => `<span class="modal-tag">${s}</span>`).join('');
    overlay.classList.add('open');
  });
});

// Project card click → modal (contributions + slideshow, tech stack, learned)
document.querySelectorAll('.project-card[data-modal]').forEach(card => {
  card.addEventListener('click', (e) => {
    // Don't open modal if clicking on the project link
    if (e.target.closest('.project-link')) return;
    
    const key = card.dataset.modal;
    const data = projectModalData[key];
    if (!data) return;

    const overlay = document.getElementById('modal-overlay');
    overlay.querySelector('.modal-intern-sections').style.display = 'none';
    overlay.querySelector('.modal-project-sections').style.display = 'block';
    overlay.querySelector('#modal-section-stack').style.display = '';
    overlay.querySelector('#modal-section-learned').style.display = '';

    overlay.querySelector('.modal h2').textContent = data.title;
    overlay.querySelector('.modal-meta').textContent = data.meta;
    overlay.querySelector('#modal-contributions').textContent = data.contributions;
    renderSlideshow(data.images, overlay);
    overlay.querySelector('#modal-learned').textContent = data.learned;
    const stackEl = overlay.querySelector('#modal-stack');
    stackEl.innerHTML = data.stack.map(s => `<span class="modal-tag">${s}</span>`).join('');
    overlay.classList.add('open');
  });
});

document.getElementById('modal-close')?.addEventListener('click', () => {
  document.getElementById('modal-overlay')?.classList.remove('open');
});
document.getElementById('modal-overlay')?.addEventListener('click', e => {
  if (e.target === e.currentTarget) e.currentTarget.classList.remove('open');
});

// ===========================
// EMAIL COPY
// ===========================
document.getElementById('emailLink')?.addEventListener('click', e => {
  e.preventDefault();
  navigator.clipboard.writeText('tp2906@columbia.edu').then(() => {
    const el = e.currentTarget;
    const orig = el.textContent;
    el.textContent = 'Copied!';
    setTimeout(() => el.textContent = orig, 1500);
  });
});

// ===========================
// ABOUT: TIME & FACTS
// ===========================
function updateTime() {
  const el = document.getElementById('ny-time');
  if (!el) return;
  const now = new Date();
  const nyTime = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
  }).format(now);
  el.textContent = nyTime;
}
setInterval(updateTime, 1000);
updateTime();

const dayFacts = [
  "Working hard on her Master's at Columbia",
  "Making a delicious glass of iced matcha",
  "Playing her acoustic guitar",
  "Writing a review on Letterboxd",
  "Watching Frozen 2 for the 100th time",
  "Attempting her grandma's daging goreng recipe",
  "Watercoloring at a park in NYC",
  "Baking brownies for her friends",
  "Trying a new restaurant in the city",
  "Making a hyperspecific playlist on Spotify"
];
const nightFacts = ["Dreaming"];

function getCurrentFacts() {
  const hour = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })).getHours();
  return (hour >= 6 && hour < 22) ? dayFacts : nightFacts;
}

let lastFactIdx = -1;
function getRandomFact() {
  const facts = getCurrentFacts();
  let idx;
  do { idx = Math.floor(Math.random() * facts.length); } while (idx === lastFactIdx && facts.length > 1);
  lastFactIdx = idx;
  return facts[idx];
}

const factDisplay = document.getElementById('fact-display');
if (factDisplay) factDisplay.textContent = getRandomFact();

document.getElementById('fact-btn')?.addEventListener('click', () => {
  const el = document.getElementById('fact-display');
  if (!el) return;
  el.style.opacity = '0';
  el.style.transform = 'translateY(8px)';
  setTimeout(() => {
    el.textContent = getRandomFact();
    el.style.transition = 'opacity 0.4s, transform 0.4s';
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  }, 200);
});

// ===========================
// HERO PHOTO (draggable circular grad photo on index)
// ===========================
const heroPhotoWrap = document.querySelector('.hero-photo-wrap');
const heroPhoto = document.querySelector('.hero-photo');
if (heroPhotoWrap && heroPhoto) {
  function setHeroPhotoPosition() {
    const w = heroPhotoWrap.offsetWidth;
    const h = heroPhotoWrap.offsetHeight;
    heroPhoto.style.left = (0.84 * w) + 'px';
    heroPhoto.style.top = (0.18 * h) + 'px';
  }
  setHeroPhotoPosition();
  window.addEventListener('resize', setHeroPhotoPosition);

  let startX, startY, startLeft, startTop;
  function startDrag(e) {
    e.preventDefault();
    heroPhoto.classList.add('dragging');
    startX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    startY = e.type.includes('mouse') ? e.pageY : e.touches[0].clientY;
    startLeft = heroPhoto.offsetLeft;
    startTop = heroPhoto.offsetTop;
  }
  function moveDrag(e) {
    const x = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    const y = e.type.includes('mouse') ? e.pageY : e.touches[0].clientY;
    const wrap = heroPhotoWrap;
    const maxLeft = wrap.offsetWidth - heroPhoto.offsetWidth;
    const maxTop = wrap.offsetHeight - heroPhoto.offsetHeight;
    const newLeft = Math.max(0, Math.min(maxLeft, startLeft + (x - startX)));
    const newTop = Math.max(0, Math.min(maxTop, startTop + (y - startY)));
    heroPhoto.style.left = newLeft + 'px';
    heroPhoto.style.top = newTop + 'px';
  }
  function endDrag() {
    heroPhoto.classList.remove('dragging');
  }

  heroPhoto.addEventListener('mousedown', startDrag);
  heroPhoto.addEventListener('touchstart', startDrag, { passive: false });
  window.addEventListener('mousemove', e => {
    if (!heroPhoto.classList.contains('dragging')) return;
    e.preventDefault();
    moveDrag(e);
  });
  window.addEventListener('touchmove', e => {
    if (!heroPhoto.classList.contains('dragging')) return;
    if (e.target.closest('.hero-photo')) e.preventDefault();
    moveDrag(e);
  }, { passive: false });
  window.addEventListener('mouseup', endDrag);
  window.addEventListener('touchend', endDrag);
}

// ===========================
// COLLAGE HOBBY CARDS (draggable, rotated)
// ===========================
const track = document.querySelector('.hobbies-track');
if (track) {
  const cards = track.querySelectorAll('.hobby-card');
  // Initial collage layout: [left %, top %, rotation deg]
  const layout = [
    [5, 8, -12],
    [22, 2, 15],
    [38, 14, -8],
    [52, 4, 22],
    [66, 12, -18],
    [78, 6, 9],
    [12, 60, -25],
    [30, 57, 32],
    [45, 63, -15],
    [60, 59, 28],
    [75, 61, -20]
  ];

  function setCardPositions() {
    const tw = track.offsetWidth;
    const th = track.offsetHeight;
    cards.forEach((card, i) => {
      const [leftPct, topPct, rotate] = layout[i] || [10, 10, 0];
      const leftPx = (leftPct / 100) * tw;
      const topPx = (topPct / 100) * th;
      card.style.left = leftPx + 'px';
      card.style.top = topPx + 'px';
      card.style.transform = `rotate(${rotate}deg)`;
      card.dataset.rotate = rotate;
    });
  }

  setCardPositions();
  window.addEventListener('resize', setCardPositions);

  cards.forEach(card => {
    let startX, startY, startLeft, startTop;

    function startDrag(e) {
      e.preventDefault();
      card.classList.add('dragging');
      startX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
      startY = e.type.includes('mouse') ? e.pageY : e.touches[0].clientY;
      startLeft = card.offsetLeft;
      startTop = card.offsetTop;
    }

    function moveDrag(e) {
      const x = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
      const y = e.type.includes('mouse') ? e.pageY : e.touches[0].clientY;
      const newLeft = startLeft + (x - startX);
      const newTop = startTop + (y - startY);
      card.style.left = Math.max(0, newLeft) + 'px';
      card.style.top = Math.max(0, newTop) + 'px';
    }

    function endDrag() {
      card.classList.remove('dragging');
    }

    card.addEventListener('mousedown', startDrag);
    card.addEventListener('touchstart', startDrag, { passive: false });

    window.addEventListener('mousemove', e => {
      if (!card.classList.contains('dragging')) return;
      e.preventDefault();
      moveDrag(e);
    });
    window.addEventListener('touchmove', e => {
      if (!card.classList.contains('dragging')) return;
      if (e.target.closest('.hobby-card')) e.preventDefault();
      moveDrag(e);
    }, { passive: false });

    window.addEventListener('mouseup', endDrag);
    window.addEventListener('touchend', endDrag);
  });
}

// ===========================
// SCROLL REVEAL (index, work, about)
// ===========================
const revealSelectors = '.section, .project-card, .intern-card, .leadership-card, .book-item, .hobbies-section, .hobby-card, .culture-section, .culture-col';
const revealEls = [...document.querySelectorAll(revealSelectors)].filter(
  el => !el.closest('.work-section')
);
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
