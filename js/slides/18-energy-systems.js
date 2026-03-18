window.ALL_SLIDES = window.ALL_SLIDES || [];
window.ALL_SLIDES.push(
// ==========================================
// 3.1.1.6 ENERGY SYSTEMS
// ==========================================
// === SLIDE 335 ===
{
    id: 'energy-001', topic: 'Energy Systems', title: 'ATP — The Energy Currency',
    content: '<p><span class="key-term">ATP (Adenosine Triphosphate)</span> is the only source of energy that muscles can use directly. It is broken down by ATPase: ATP → ADP + Pi + Energy. The body stores only enough ATP for ~2 seconds of max effort, so it must be constantly re-synthesised.</p>',
    animation: { type: 'flow-diagram', hint: 'Click to trace ATP breakdown and resynthesis!', config: {
        title: 'ATP Breakdown and Resynthesis',
        steps: [
            {label:'ATP', detail:'Adenosine Triphosphate — stored in muscle cells. Only direct energy source for contraction.'},
            {label:'ATPase', detail:'Enzyme that breaks the bond between 2nd and 3rd phosphate, releasing energy.'},
            {label:'ADP + Pi', detail:'Adenosine Diphosphate + inorganic Phosphate. Must be rebuilt back to ATP.'},
            {label:'Energy Systems', detail:'Three pathways resynthesise ATP: ATP-PC (fastest), Anaerobic Glycolytic, Aerobic (most ATP).'}
        ],
        feedbackLoop: true, feedbackLabel: 'Resynthesis cycle'
    }}
},
// === SLIDE 336 ===
{
    id: 'energy-002', topic: 'Energy Systems', title: 'ATP-PC (Phosphocreatine) System',
    content: '<p>The <span class="key-term">ATP-PC system</span> is the fastest but shortest-lasting energy system. Phosphocreatine (PC) donates a phosphate to ADP via creatine kinase to rapidly reform ATP. Lasts <strong>8-10 seconds</strong> of max effort. Anaerobic, no lactic acid.</p>',
    animation: { type: 'flow-diagram', hint: 'Click to trace the ATP-PC pathway!', config: {
        title: 'ATP-PC (Alactic) System',
        steps: [
            {label:'PC stored', detail:'Phosphocreatine stored in muscle cells (~120g). Immediate energy reserve.'},
            {label:'Creatine Kinase', detail:'Enzyme breaks PC into creatine + phosphate (exothermic coupled reaction).'},
            {label:'Pi → ADP', detail:'Released phosphate attaches to ADP, reforming ATP. 1 PC = 1 ATP.'},
            {label:'ATP → Energy', detail:'Newly formed ATP broken down by ATPase for muscle contraction.'},
            {label:'PC Depleted', detail:'PC stores exhausted after ~10s of max effort. System cannot continue.'}
        ]
    }}
},
// === SLIDE 337 ===
{
    id: 'energy-003', topic: 'Energy Systems', title: 'Anaerobic Glycolytic System',
    content: '<p>The <span class="key-term">anaerobic glycolytic system</span> breaks down glucose without oxygen. It produces ATP faster than the aerobic system but yields only <strong>2 ATP per glucose molecule</strong>. Dominant from 10s to ~3 minutes. Produces <strong>lactic acid</strong> as a by-product.</p>',
    animation: { type: 'flow-diagram', hint: 'Click to trace anaerobic glycolysis!', config: {
        title: 'Anaerobic Glycolytic System',
        steps: [
            {label:'Glucose', detail:'From muscle glycogen or blood glucose. 6-carbon sugar.'},
            {label:'Glycolysis', detail:'Series of 10 enzyme-controlled reactions in the sarcoplasm (cytoplasm of muscle cells).'},
            {label:'Pyruvic Acid', detail:'Glucose broken into 2 molecules of pyruvic acid. Net gain: 2 ATP.'},
            {label:'No O₂ Available', detail:'Without sufficient oxygen, pyruvic acid cannot enter the Krebs cycle.'},
            {label:'Lactic Acid', detail:'Lactate dehydrogenase converts pyruvic acid → lactic acid. Accumulation causes fatigue.'}
        ]
    }}
},
// === SLIDE 338 ===
{
    id: 'energy-004', topic: 'Energy Systems', title: 'Lactic Acid, Lactate Threshold & OBLA',
    content: '<p><span class="key-term">Lactate threshold</span> = exercise intensity where lactic acid begins to accumulate faster than it\'s removed (~60% VO₂max untrained, ~85% in trained).<br><span class="key-term">OBLA</span> (Onset of Blood Lactate Accumulation) = blood lactate reaches 4 mmol/L.</p>',
    animation: { type: 'line-graph', hint: 'Compare lactate curves: trained vs untrained!', config: {
        title: 'Blood Lactate vs Exercise Intensity',
        xLabels: ['Rest','40%','50%','60%','70%','80%','90%','Max'],
        xLabel: '% VO₂ max', yLabel: 'Blood Lactate (mmol/L)',
        datasets: [
            {label:'Untrained', points:[1,1.2,1.5,2.5,5,10,16,20], color:'#ef4444'},
            {label:'Trained', points:[1,1,1.1,1.3,1.8,3.5,8,15], color:'#22c55e'}
        ]
    }}
},
// === SLIDE 339 ===
{
    id: 'energy-005', topic: 'Energy Systems', title: 'Aerobic Energy System',
    content: '<p>The <span class="key-term">aerobic system</span> produces the most ATP (up to <strong>38 ATP per glucose</strong>) but is the slowest. Requires oxygen. Three stages: glycolysis → Krebs cycle → electron transport chain. Dominant after ~3 minutes.</p>',
    animation: { type: 'flow-diagram', hint: 'Click to trace the aerobic pathway!', config: {
        title: 'Aerobic Energy System',
        steps: [
            {label:'Glycolysis', detail:'Glucose → 2 pyruvic acid in sarcoplasm. Net 2 ATP. Same as anaerobic first step.'},
            {label:'Krebs Cycle', detail:'Pyruvic acid → Acetyl CoA → enters Krebs cycle in mitochondria. Produces 2 ATP + CO₂ + hydrogen atoms.'},
            {label:'ETC', detail:'Electron Transport Chain: H atoms oxidised using O₂ → 34 ATP + H₂O. Most ATP produced here.'},
            {label:'Total: 38 ATP', detail:'Glycolysis (2) + Krebs (2) + ETC (34) = 38 ATP per glucose molecule. Slow but efficient.'}
        ]
    }}
},
// === SLIDE 340 ===
{
    id: 'energy-006', topic: 'Energy Systems', title: 'Beta Oxidation (Fat Metabolism)',
    content: '<p><span class="key-term">Beta oxidation</span> breaks down fats (fatty acids) into Acetyl CoA, which enters the Krebs cycle. Fats yield <strong>much more ATP</strong> than carbohydrates (~130 ATP per fatty acid) but require more oxygen and are slower to metabolise.</p>',
    animation: { type: 'quiz', hint: 'Test your knowledge!', config: {
        question: 'Why are fats NOT the preferred fuel during high-intensity exercise?',
        options: ['Fats produce less ATP than carbs', 'Fat metabolism requires more oxygen and is slower', 'Fats cannot be used during exercise', 'Fat metabolism produces lactic acid'],
        correct: 1,
        explanation: 'Fat metabolism requires more O₂ and is slower than carbohydrate metabolism. At high intensities, O₂ supply is limited, so the body relies more on carbohydrate (glycogen) metabolism.'
    }}
},
// === SLIDE 341 ===
{
    id: 'energy-007', topic: 'Energy Systems', title: 'Energy Continuum',
    content: '<p>The <span class="key-term">energy continuum</span> shows that all three systems work simultaneously but contribute different amounts depending on exercise intensity and duration.</p>',
    animation: { type: 'energy-system', hint: 'Click to animate energy contributions over time!', config: {
        title: 'Energy System Contribution Over Time',
        systems: [
            {name:'ATP-PC', duration:'0-10s', power:100, color:'#ef4444'},
            {name:'Anaerobic Glycolytic', duration:'10s-3min', power:70, color:'#f59e0b'},
            {name:'Aerobic', duration:'3min+', power:40, color:'#22c55e'}
        ]
    }}
},
// === SLIDE 342 ===
{
    id: 'energy-008', topic: 'Energy Systems', title: 'VO₂ Max & Factors Affecting It',
    content: '<p><span class="key-term">VO₂ max</span> = maximum volume of oxygen consumed per minute. The gold standard measure of aerobic fitness. Average male: ~35-40 ml/kg/min. Elite endurance athlete: ~70-85 ml/kg/min.</p>',
    animation: { type: 'progress-bar', hint: 'See factors affecting VO₂ max!', config: { bars: [
        {label: 'Genetics (heredity)', value: 50, color: 'blue'},
        {label: 'Training (aerobic)', value: 80, color: 'green'},
        {label: 'Age (declines after 25)', value: 35, color: 'amber'},
        {label: 'Gender (males ~15-20% higher)', value: 40, color: 'red'},
        {label: 'Body Composition', value: 30, color: 'blue'}
    ]}}
},
// === SLIDE 343 ===
{
    id: 'energy-009', topic: 'Energy Systems', title: 'EPOC — Excess Post-Exercise Oxygen Consumption',
    content: '<p><span class="key-term">EPOC</span> is the elevated oxygen consumption after exercise (previously called "oxygen debt"). It has two phases:</p><ul><li><strong>Fast component (alactacid)</strong>: Replenish ATP & PC stores, re-saturate myoglobin with O₂ (~2-3 min)</li><li><strong>Slow component (lactacid)</strong>: Remove lactic acid, glycogen resynthesis, elevated HR/breathing (~1-2 hours)</li></ul>',
    animation: { type: 'line-graph', hint: 'See oxygen consumption during and after exercise!', config: {
        title: 'Oxygen Consumption & EPOC',
        xLabels: ['Rest','Start','During','During','Stop','1min','5min','30min','60min'],
        xLabel: 'Time', yLabel: 'O₂ Consumption (L/min)',
        datasets: [{label:'O₂ Consumption', points:[0.3,0.3,2.5,2.8,2.8,1.5,0.8,0.5,0.35], color:'#2563eb'}]
    }}
},
// === SLIDE 344 ===
{
    id: 'energy-010', topic: 'Energy Systems', title: 'Respiratory Exchange Ratio (RER)',
    content: '<p><span class="key-term">RER</span> = CO₂ produced ÷ O₂ consumed. It indicates which fuel is being used:<br>• RER = 0.7 → pure <strong>fat</strong> metabolism<br>• RER = 0.85 → mixed fat & carbs<br>• RER = 1.0 → pure <strong>carbohydrate</strong> metabolism<br>• RER > 1.0 → anaerobic threshold exceeded</p>',
    animation: { type: 'line-graph', hint: 'See RER change with exercise intensity!', config: {
        title: 'RER vs Exercise Intensity',
        xLabels: ['Rest','Light','Moderate','Hard','Max'],
        xLabel: 'Exercise Intensity', yLabel: 'RER Value',
        datasets: [{label:'RER', points:[75,78,85,95,110], color:'#8b5cf6'}]
    }}
},
// === SLIDE 345 ===
{
    id: 'energy-011', topic: 'Energy Systems', title: 'Specialist Training Methods for Energy Systems',
    content: '<p>Different training methods target specific energy systems:</p>',
    animation: { type: 'flip-cards', hint: 'Click to learn each training method!', config: { cards: [
        {front: 'Altitude Training', back: 'Training at 2000m+. Lower pO₂ stimulates EPO production → more red blood cells → ↑O₂ carrying capacity. Benefits aerobic system.'},
        {front: 'HIIT', back: 'High Intensity Interval Training. Short max bursts with recovery. Improves BOTH anaerobic and aerobic capacity. ↑VO₂max, ↑lactate tolerance.'},
        {front: 'Plyometrics', back: 'Explosive jump training. Develops ATP-PC system and muscular power. Rapid eccentric→concentric transitions.'},
        {front: 'SAQ', back: 'Speed Agility Quickness. Short, explosive drills. Develops ATP-PC system, neuromuscular coordination, and reaction time.'}
    ]}}
}
);
