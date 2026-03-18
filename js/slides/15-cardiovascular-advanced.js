window.ALL_SLIDES = window.ALL_SLIDES || [];
window.ALL_SLIDES.push(
// ==========================================
// 3.1.1.2 CARDIOVASCULAR SYSTEM (Advanced)
// ==========================================
// === SLIDE 301 ===
{
    id: 'cv-adv-001', topic: 'Cardiovascular System (Advanced)', title: 'Cardiovascular Health & Disease',
    content: '<p>Physical activity reduces the risk of cardiovascular disease. Key conditions include <strong>coronary heart disease (CHD), high blood pressure (hypertension), high cholesterol, and stroke</strong>.</p><p>Exercise strengthens the heart muscle, lowers resting blood pressure, and improves cholesterol profiles.</p>',
    animation: { type: 'progress-bar', hint: 'See how exercise reduces disease risk!', config: { bars: [
        {label: 'Heart Disease Risk — Reduced by', value: 50, color: 'green'},
        {label: 'High Blood Pressure — Reduced by', value: 40, color: 'green'},
        {label: 'Bad Cholesterol (LDL) — Reduced by', value: 35, color: 'green'},
        {label: 'Good Cholesterol (HDL) — Increased by', value: 45, color: 'blue'},
        {label: 'Stroke Risk — Reduced by', value: 40, color: 'green'}
    ]}}
},
// === SLIDE 302 ===
{
    id: 'cv-adv-002', topic: 'Cardiovascular System (Advanced)', title: 'Cardiac Output: Trained vs Untrained',
    content: '<p><span class="key-term">Cardiac Output (Q)</span> = Heart Rate × Stroke Volume. A trained heart has a <strong>larger stroke volume</strong>, so it can pump the same Q at a lower HR. At max exercise, trained individuals achieve higher Q.</p>',
    animation: { type: 'cardiac-cycle', hint: 'Click to toggle trained vs untrained heart!', config: { trained: false } }
},
// === SLIDE 303 ===
{
    id: 'cv-adv-003', topic: 'Cardiovascular System (Advanced)', title: 'Starling\'s Law of the Heart',
    content: '<p><span class="key-term">Starling\'s Law</span>: The greater the volume of blood entering the heart (venous return), the greater the volume ejected (stroke volume). More stretch = more forceful contraction.</p><p>During exercise, increased venous return stretches the ventricles, increasing stroke volume and cardiac output.</p>',
    animation: { type: 'line-graph', hint: 'Hover over points for values!', config: {
        title: 'Starling\'s Law: Venous Return vs Stroke Volume',
        xLabels: ['Low','','','Moderate','','','High'],
        xLabel: 'Venous Return (End-Diastolic Volume)',
        yLabel: 'Stroke Volume (ml)',
        datasets: [{label:'Stroke Volume', points:[40,55,70,85,100,110,115], color:'#ef4444'}]
    }}
},
// === SLIDE 304 ===
{
    id: 'cv-adv-004', topic: 'Cardiovascular System (Advanced)', title: 'Anticipatory Rise',
    content: '<p><span class="key-term">Anticipatory rise</span> occurs <strong>before exercise begins</strong>. The sympathetic nervous system increases heart rate and cardiac output in response to adrenaline release, preparing the body for physical activity.</p>',
    animation: { type: 'line-graph', hint: 'See HR changes before, during, and after exercise!', config: {
        title: 'Heart Rate Response to Exercise',
        xLabels: ['Rest','Pre','Start','5min','10min','15min','Stop','5min','10min','15min'],
        xLabel: 'Time',
        yLabel: 'Heart Rate (bpm)',
        datasets: [{label:'Heart Rate', points:[72,95,130,155,165,170,170,130,100,80], color:'#ef4444'}]
    }}
},
// === SLIDE 305 ===
{
    id: 'cv-adv-005', topic: 'Cardiovascular System (Advanced)', title: 'Vascular Shunting & Blood Redistribution',
    content: '<p>During exercise, blood is <strong>redistributed</strong> from inactive organs to working muscles via the <span class="key-term">vascular shunt mechanism</span>. Vasodilation opens blood vessels to muscles; vasoconstriction narrows vessels to organs (except the brain).</p>',
    animation: { type: 'vascular-shunt', hint: 'Click to toggle rest vs exercise blood distribution!', config: {
        atRest: {muscles:15,organs:35,skin:12,brain:15,heart:5,other:18},
        exercise: {muscles:70,organs:5,skin:10,brain:5,heart:5,other:5}
    }}
},
// === SLIDE 306 ===
{
    id: 'cv-adv-006', topic: 'Cardiovascular System (Advanced)', title: 'Cardiac Conduction System',
    content: '<p>The heart\'s electrical system controls its rhythm. The pathway: <strong>SA node → AV node → Bundle of His → Bundle branches → Purkinje fibres</strong>.</p>',
    animation: { type: 'flow-diagram', hint: 'Click each step to learn more!', config: {
        steps: [
            {label:'SA Node', detail:'Sinoatrial node — the natural pacemaker. Located in right atrium. Generates ~72 impulses/min at rest.'},
            {label:'AV Node', detail:'Atrioventricular node — delays signal 0.1s to let atria empty before ventricles contract.'},
            {label:'Bundle of His', detail:'Carries impulse from AV node down the septum between ventricles.'},
            {label:'Bundle Branches', detail:'Split into left and right branches, carrying signal to respective ventricles.'},
            {label:'Purkinje Fibres', detail:'Spread impulse through ventricular walls causing contraction from apex upward.'}
        ]
    }}
},
// === SLIDE 307 ===
{
    id: 'cv-adv-007', topic: 'Cardiovascular System (Advanced)', title: 'Sympathetic & Parasympathetic Control',
    content: '<p>The <strong>autonomic nervous system</strong> controls heart rate:<br>• <span class="key-term">Sympathetic</span> (accelerator nerve) — increases HR via adrenaline/noradrenaline<br>• <span class="key-term">Parasympathetic</span> (vagus nerve) — decreases HR, dominant at rest</p>',
    animation: { type: 'slider-compare', hint: 'Compare the two branches!', config: {
        left: 'Parasympathetic (Vagus)',
        leftDetail: 'Slows HR. Dominant at rest. Uses acetylcholine. Trained athletes have stronger vagal tone → lower resting HR.',
        right: 'Sympathetic (Accelerator)',
        rightDetail: 'Increases HR. Dominant during exercise. Uses noradrenaline. Triggered by proprioceptors, chemoreceptors, and emotions.'
    }}
},
// === SLIDE 308 ===
{
    id: 'cv-adv-008', topic: 'Cardiovascular System (Advanced)', title: 'Receptors: Chemoreceptors, Proprioceptors, Baroreceptors',
    content: '<p>Three receptor types regulate cardiovascular response to exercise:</p>',
    animation: { type: 'flip-cards', hint: 'Click to learn about each receptor!', config: { cards: [
        {front: 'Chemoreceptors', back: 'Detect changes in blood CO₂, O₂, and pH. Located in aortic and carotid bodies. ↑CO₂ → ↑HR'},
        {front: 'Proprioceptors', back: 'Detect muscle movement. Located in muscles, tendons, joints. Movement → signals to cardiac centre → ↑HR'},
        {front: 'Baroreceptors', back: 'Detect blood pressure changes. Located in aortic arch and carotid sinus. ↑BP → ↓HR; ↓BP → ↑HR'}
    ]}}
},
// === SLIDE 309 ===
{
    id: 'cv-adv-009', topic: 'Cardiovascular System (Advanced)', title: 'Oxygen Transport: Haemoglobin & Myoglobin',
    content: '<p><span class="key-term">Haemoglobin (Hb)</span> carries O₂ in the blood (up to 4 O₂ molecules per Hb). <span class="key-term">Myoglobin</span> stores O₂ in muscle cells and transfers it to mitochondria for aerobic respiration.</p><p>Oxyhaemoglobin (HbO₂) = Hb + O₂. Formed at the lungs, released at muscles.</p>',
    animation: { type: 'flow-diagram', hint: 'Click to trace oxygen transport!', config: {
        title: 'Oxygen Transport Pathway',
        steps: [
            {label:'Alveoli', detail:'O₂ diffuses across alveolar membrane into blood due to partial pressure gradient'},
            {label:'Hb binds O₂', detail:'Each haemoglobin molecule binds up to 4 O₂ molecules → oxyhaemoglobin'},
            {label:'Blood transport', detail:'Oxygenated blood travels via arteries to working muscles'},
            {label:'O₂ released', detail:'At muscle capillaries, O₂ dissociates from Hb due to lower pO₂'},
            {label:'Myoglobin', detail:'Myoglobin in muscle cells picks up O₂ and delivers it to mitochondria'}
        ]
    }}
},
// === SLIDE 310 ===
{
    id: 'cv-adv-010', topic: 'Cardiovascular System (Advanced)', title: 'Oxyhaemoglobin Dissociation Curve & Bohr Shift',
    content: '<p>The <span class="key-term">oxyhaemoglobin dissociation curve</span> shows how readily Hb binds/releases O₂. The <span class="key-term">Bohr shift</span> occurs during exercise: increased CO₂, temperature, and acidity shift the curve RIGHT, meaning Hb releases O₂ more easily to working muscles.</p>',
    animation: { type: 'dissociation-curve', hint: 'Click to toggle the Bohr shift!', config: {} }
},
// === SLIDE 311 ===
{
    id: 'cv-adv-011', topic: 'Cardiovascular System (Advanced)', title: 'Venous Return Mechanisms',
    content: '<p><span class="key-term">Venous return</span> is the volume of blood returning to the right atrium. It increases during exercise through several mechanisms:</p>',
    animation: { type: 'flip-cards', hint: 'Click to learn each mechanism!', config: { cards: [
        {front: 'Skeletal Muscle Pump', back: 'Contracting muscles squeeze veins, pushing blood toward the heart'},
        {front: 'Respiratory Pump', back: 'Breathing creates pressure changes in the thorax that help draw blood back'},
        {front: 'Venous Valves', back: 'One-way valves prevent backflow of blood in the veins'},
        {front: 'Smooth Muscle Venoconstriction', back: 'Veins constrict to reduce volume and push blood back faster'},
        {front: 'Gravity', back: 'Assists return from areas above the heart'}
    ]}}
},
// === SLIDE 312 ===
{
    id: 'cv-adv-012', topic: 'Cardiovascular System (Advanced)', title: 'Blood Pressure: Systolic & Diastolic',
    content: '<p><span class="key-term">Systolic pressure</span> = pressure during heart contraction (120mmHg at rest). <span class="key-term">Diastolic pressure</span> = pressure during relaxation (80mmHg at rest). During exercise, systolic rises; diastolic stays relatively constant.</p>',
    animation: { type: 'line-graph', hint: 'See blood pressure changes during exercise!', config: {
        title: 'Blood Pressure Response to Exercise',
        xLabels: ['Rest','Light','Moderate','Hard','Max','Recovery'],
        xLabel: 'Exercise Intensity',
        yLabel: 'Pressure (mmHg)',
        datasets: [
            {label:'Systolic', points:[120,135,155,175,200,130], color:'#ef4444'},
            {label:'Diastolic', points:[80,80,82,83,85,78], color:'#2563eb'}
        ]
    }}
},
// === SLIDE 313 ===
{
    id: 'cv-adv-013', topic: 'Cardiovascular System (Advanced)', title: 'Cardiovascular Drift',
    content: '<p><span class="key-term">Cardiovascular drift</span> occurs during prolonged, submaximal exercise: as body temperature rises, blood is diverted to the skin for cooling. Plasma volume drops, stroke volume decreases, so HR increases to maintain cardiac output.</p>',
    animation: { type: 'line-graph', hint: 'Observe CV drift over prolonged exercise!', config: {
        title: 'Cardiovascular Drift During Prolonged Exercise',
        xLabels: ['0','15','30','45','60','75','90'],
        xLabel: 'Time (minutes)',
        yLabel: 'Value',
        datasets: [
            {label:'Heart Rate', points:[140,145,150,155,162,168,175], color:'#ef4444'},
            {label:'Stroke Volume', points:[100,98,94,90,86,82,78], color:'#2563eb'}
        ]
    }}
},
// === SLIDE 314 ===
{
    id: 'cv-adv-014', topic: 'Cardiovascular System (Advanced)', title: 'Arterio-Venous Oxygen Difference (A-VO₂ diff)',
    content: '<p><span class="key-term">A-VO₂ diff</span> = difference in O₂ content between arterial and venous blood. It increases during exercise as muscles extract more O₂. Trained individuals have a greater A-VO₂ diff.</p>',
    animation: { type: 'line-graph', hint: 'Compare trained vs untrained A-VO₂ diff!', config: {
        title: 'A-VO₂ Difference During Exercise',
        xLabels: ['Rest','Light','Moderate','Hard','Max'],
        xLabel: 'Exercise Intensity',
        yLabel: 'A-VO₂ diff (ml/100ml)',
        datasets: [
            {label:'Trained', points:[5,8,12,15,17], color:'#22c55e'},
            {label:'Untrained', points:[5,7,10,12,14], color:'#ef4444'}
        ]
    }}
},
// === SLIDE 315 ===
{
    id: 'cv-adv-015', topic: 'Cardiovascular System (Advanced)', title: 'Cardiovascular Training Adaptations',
    content: '<p>Long-term cardiovascular training produces significant adaptations that improve exercise performance:</p>',
    animation: { type: 'flip-cards', hint: 'Click to see each training adaptation!', config: { cards: [
        {front: 'Cardiac Hypertrophy', back: 'Heart muscle wall thickens → stronger contractions → greater stroke volume'},
        {front: 'Lower Resting HR', back: 'Bradycardia (< 60bpm) due to increased stroke volume and vagal tone'},
        {front: 'Increased Blood Volume', back: 'More plasma and red blood cells → better O₂ delivery'},
        {front: 'Greater Capillarisation', back: 'More capillaries around muscles → improved gas exchange'},
        {front: 'Lower Resting BP', back: 'More elastic blood vessels, reduced peripheral resistance'},
        {front: 'Faster Recovery', back: 'HR and BP return to resting levels more quickly after exercise'}
    ]}}
}
);
