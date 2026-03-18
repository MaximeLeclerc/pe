window.ALL_SLIDES = window.ALL_SLIDES || [];
window.ALL_SLIDES.push(
// ==========================================
// 3.1.1.3 RESPIRATORY SYSTEM (Advanced)
// ==========================================
// === SLIDE 316 ===
{
    id: 'resp-adv-001', topic: 'Respiratory System (Advanced)', title: 'Lung Volumes & Capacities',
    content: '<p>Key lung volumes: <strong>Tidal Volume (TV)</strong> ~500ml at rest; <strong>Inspiratory Reserve Volume (IRV)</strong> ~3100ml; <strong>Expiratory Reserve Volume (ERV)</strong> ~1200ml; <strong>Residual Volume (RV)</strong> ~1200ml (always in lungs).</p>',
    animation: { type: 'lung-volumes', hint: 'Click to toggle rest vs exercise breathing!', config: {} }
},
// === SLIDE 317 ===
{
    id: 'resp-adv-002', topic: 'Respiratory System (Advanced)', title: 'Minute Ventilation',
    content: '<p><span class="key-term">Minute Ventilation (VE)</span> = Tidal Volume × Breathing Rate. At rest: ~500ml × 12 breaths = <strong>6 L/min</strong>. During max exercise: ~2500ml × 45 breaths = <strong>~112 L/min</strong>.</p>',
    animation: { type: 'line-graph', hint: 'See minute ventilation increase with exercise!', config: {
        title: 'Minute Ventilation During Exercise',
        xLabels: ['Rest','Light','Moderate','Hard','Max','Recovery'],
        xLabel: 'Exercise Intensity', yLabel: 'VE (L/min)',
        datasets: [{label:'Minute Ventilation', points:[6,20,45,80,120,25], color:'#2563eb'}]
    }}
},
// === SLIDE 318 ===
{
    id: 'resp-adv-003', topic: 'Respiratory System (Advanced)', title: 'Gas Exchange at Alveoli',
    content: '<p>Gas exchange occurs by <span class="key-term">diffusion</span> down a partial pressure gradient. At the alveoli: O₂ diffuses INTO blood (pO₂ alveoli ~105mmHg > blood ~40mmHg). CO₂ diffuses OUT of blood (pCO₂ blood ~46mmHg > alveoli ~40mmHg).</p>',
    animation: { type: 'flow-diagram', hint: 'Click steps to follow gas exchange!', config: {
        title: 'Gas Exchange at Alveoli',
        steps: [
            {label:'Inspired Air', detail:'Air enters alveoli with high pO₂ (~105mmHg) and low pCO₂ (~0.04%)'},
            {label:'Diffusion', detail:'Gases move down partial pressure gradients across the thin alveolar-capillary membrane (1 cell thick)'},
            {label:'O₂ → Blood', detail:'O₂ diffuses into blood, binds to haemoglobin forming oxyhaemoglobin'},
            {label:'CO₂ → Alveoli', detail:'CO₂ diffuses from blood into alveoli for exhalation'},
            {label:'Blood leaves', detail:'Oxygenated blood exits via pulmonary veins → left atrium → systemic circulation'}
        ]
    }}
},
// === SLIDE 319 ===
{
    id: 'resp-adv-004', topic: 'Respiratory System (Advanced)', title: 'Gas Exchange at Muscles',
    content: '<p>At muscle capillaries, the process reverses: O₂ diffuses FROM blood INTO muscles (pO₂ blood ~100mmHg > muscle ~40mmHg). CO₂ diffuses FROM muscles INTO blood. During exercise, the gradient increases → more gas exchange.</p>',
    animation: { type: 'flow-diagram', hint: 'Click steps to follow gas exchange at muscles!', config: {
        title: 'Gas Exchange at Working Muscles',
        steps: [
            {label:'Arterial Blood', detail:'Oxygenated blood arrives at muscle capillaries (pO₂ ~100mmHg)'},
            {label:'O₂ Released', detail:'O₂ dissociates from Hb (Bohr shift helps) and diffuses into muscle cells'},
            {label:'Myoglobin', detail:'Myoglobin in muscle transports O₂ to mitochondria for aerobic respiration'},
            {label:'CO₂ Produced', detail:'Aerobic metabolism produces CO₂ which diffuses into blood'},
            {label:'Venous Blood', detail:'Deoxygenated blood returns to heart via veins (pO₂ ~40mmHg)'}
        ]
    }}
},
// === SLIDE 320 ===
{
    id: 'resp-adv-005', topic: 'Respiratory System (Advanced)', title: 'Neural & Chemical Control of Breathing',
    content: '<p>Breathing is controlled by the <span class="key-term">respiratory centre</span> in the medulla oblongata. During exercise:</p><ul><li><strong>Chemoreceptors</strong> detect ↑CO₂, ↓pH → stimulate faster/deeper breathing</li><li><strong>Proprioceptors</strong> in muscles detect movement → increase ventilation</li><li><strong>Baroreceptors</strong> detect ↑BP → adjust breathing rate</li></ul>',
    animation: { type: 'flow-diagram', hint: 'Click each receptor to learn more!', config: {
        title: 'Control of Pulmonary Ventilation',
        steps: [
            {label:'Exercise Starts', detail:'Muscles contract, producing CO₂ and using O₂'},
            {label:'Chemoreceptors', detail:'Detect ↑CO₂ and ↓pH in blood (aortic & carotid bodies) → signal respiratory centre'},
            {label:'Proprioceptors', detail:'Detect muscle/joint movement → signal respiratory centre to ↑ventilation'},
            {label:'Respiratory Centre', detail:'Medulla oblongata increases rate and depth of breathing'},
            {label:'↑ Ventilation', detail:'Tidal volume and breathing rate increase → more O₂ in, more CO₂ out'}
        ],
        feedbackLoop: true, feedbackLabel: 'Feedback loop'
    }}
},
// === SLIDE 321 ===
{
    id: 'resp-adv-006', topic: 'Respiratory System (Advanced)', title: 'Impact of Smoking on the Respiratory System',
    content: '<p>Smoking causes severe damage to the respiratory system, directly impairing athletic performance and health:</p>',
    animation: { type: 'flip-cards', hint: 'Click to see the effects of smoking!', config: { cards: [
        {front: 'Tar Deposits', back: 'Coats alveoli, reducing surface area for gas exchange → less O₂ absorbed'},
        {front: 'Cilia Damage', back: 'Paralyses cilia in airways → mucus builds up → chronic cough/infections'},
        {front: 'Carbon Monoxide', back: 'CO binds to Hb 200× stronger than O₂ → reduces O₂-carrying capacity'},
        {front: 'Reduced Elasticity', back: 'Alveoli lose elasticity (emphysema) → air trapping → reduced tidal volume'},
        {front: 'Inflammation', back: 'Chronic bronchitis narrows airways → increased resistance to airflow'},
        {front: 'VO₂ Max Reduction', back: 'All effects combined → significantly lower aerobic capacity and endurance'}
    ]}}
},
// === SLIDE 322 ===
{
    id: 'resp-adv-007', topic: 'Respiratory System (Advanced)', title: 'Respiratory System Review',
    content: '<p>Test your knowledge of the advanced respiratory system!</p>',
    animation: { type: 'quiz', hint: 'Answer the question!', config: {
        question: 'During exercise, what causes the increase in minute ventilation?',
        options: [
            'Only increased tidal volume',
            'Only increased breathing rate',
            'Increased tidal volume AND breathing rate',
            'Decreased residual volume'
        ],
        correct: 2,
        explanation: 'Minute ventilation (VE = TV × f) increases during exercise due to BOTH increased tidal volume (deeper breaths) and increased breathing frequency (faster breaths).'
    }}
}
);
