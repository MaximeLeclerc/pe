window.ALL_SLIDES = window.ALL_SLIDES || [];
window.ALL_SLIDES.push(
// ==========================================
// 3.1.1.4 NEUROMUSCULAR SYSTEM (Advanced)
// ==========================================
// === SLIDE 323 ===
{
    id: 'neuro-001', topic: 'Neuromuscular System', title: 'Muscle Fibre Types',
    content: '<p>Three types of muscle fibre, each with distinct characteristics suited to different activities:</p>',
    animation: { type: 'flip-cards', hint: 'Click to compare fibre types!', config: { cards: [
        {front: 'Type I (Slow Twitch)', back: 'Slow contraction. Fatigue resistant. Aerobic. Red (rich blood supply). Marathon runners.'},
        {front: 'Type IIa (Fast Oxidative Glycolytic)', back: 'Moderate speed. Moderate fatigue resistance. Both aerobic & anaerobic. 800m/1500m runners.'},
        {front: 'Type IIx (Fast Glycolytic)', back: 'Fastest contraction. Fatigue quickly. Anaerobic. White. Sprinters, jumpers, throwers.'}
    ]}}
},
// === SLIDE 324 ===
{
    id: 'neuro-002', topic: 'Neuromuscular System', title: 'Muscle Fibre Characteristics Compared',
    content: '<p>Each fibre type differs in contraction speed, force production, fatigue resistance, and energy systems used.</p>',
    animation: { type: 'line-graph', hint: 'Compare fibre type characteristics!', config: {
        title: 'Muscle Fibre Type Comparison',
        xLabels: ['Speed','Force','Fatigue Resist.','Mitochondria','Capillaries'],
        xLabel: 'Characteristic', yLabel: 'Relative Level',
        datasets: [
            {label:'Type I', points:[30,30,95,90,90], color:'#ef4444'},
            {label:'Type IIa', points:[65,65,60,60,60], color:'#f59e0b'},
            {label:'Type IIx', points:[95,95,20,20,20], color:'#2563eb'}
        ]
    }}
},
// === SLIDE 325 ===
{
    id: 'neuro-003', topic: 'Neuromuscular System', title: 'Sympathetic & Parasympathetic Nervous System',
    content: '<p>The autonomic nervous system has two branches controlling involuntary functions:</p>',
    animation: { type: 'slider-compare', hint: 'Compare the two branches!', config: {
        left: 'Sympathetic ("Fight or Flight")',
        leftDetail: '↑Heart rate. ↑Breathing. ↑Blood to muscles. Dilates pupils. Releases adrenaline. Inhibits digestion. Prepares for exercise.',
        right: 'Parasympathetic ("Rest & Digest")',
        rightDetail: '↓Heart rate. ↓Breathing. Blood to organs. Constricts pupils. Promotes digestion. Dominant at rest. Recovery.'
    }}
},
// === SLIDE 326 ===
{
    id: 'neuro-004', topic: 'Neuromuscular System', title: 'Proprioceptors in PNF Stretching',
    content: '<p>Two key proprioceptors are involved in <span class="key-term">PNF (Proprioceptive Neuromuscular Facilitation)</span> stretching:</p>',
    animation: { type: 'flip-cards', hint: 'Click to learn about each proprioceptor!', config: { cards: [
        {front: 'Muscle Spindles', back: 'Detect changes in muscle LENGTH. When stretched too fast, they trigger the stretch reflex (contraction to protect muscle). Located within the muscle belly.'},
        {front: 'Golgi Tendon Organs (GTO)', back: 'Detect changes in muscle TENSION. When tension is too great, they cause the muscle to RELAX (autogenic inhibition). Located in the tendon. PNF exploits this mechanism.'},
        {front: 'PNF Mechanism', back: 'Isometric contraction activates GTOs → autogenic inhibition → muscle relaxes → allows deeper stretch beyond normal ROM'}
    ]}}
},
// === SLIDE 327 ===
{
    id: 'neuro-005', topic: 'Neuromuscular System', title: 'Motor Units & Recruitment',
    content: '<p>A <span class="key-term">motor unit</span> = one motor neurone + all the muscle fibres it innervates. Small motor units = fine control (eyes). Large motor units = powerful movements (legs).</p>',
    animation: { type: 'flow-diagram', hint: 'Click to learn about motor unit recruitment!', config: {
        title: 'Motor Unit Recruitment Pattern',
        steps: [
            {label:'Low Force Needed', detail:'Small motor units (Type I fibres) recruited first — slow, fatigue-resistant'},
            {label:'Moderate Force', detail:'More Type I units + some Type IIa units recruited (size principle)'},
            {label:'High Force', detail:'Type I + Type IIa + Type IIx all recruited — maximum force production'},
            {label:'All-or-None Law', detail:'Each motor unit either fires fully or not at all — you can\'t partially contract a motor unit'}
        ]
    }}
},
// === SLIDE 328 ===
{
    id: 'neuro-006', topic: 'Neuromuscular System', title: 'Spatial & Wave Summation',
    content: '<p><span class="key-term">Spatial summation</span>: increasing force by recruiting MORE motor units simultaneously.<br><span class="key-term">Wave summation</span>: increasing force by increasing the FREQUENCY of nerve impulses to the same motor unit.</p>',
    animation: { type: 'slider-compare', hint: 'Compare summation types!', config: {
        left: 'Spatial Summation',
        leftDetail: 'More motor units activated at once. Recruits additional units as force demand increases. Graded force control.',
        right: 'Wave Summation',
        rightDetail: 'Increased firing frequency. Multiple impulses before relaxation. If fast enough → tetanic contraction (sustained, smooth force).'
    }}
},
// === SLIDE 329 ===
{
    id: 'neuro-007', topic: 'Neuromuscular System', title: 'All-or-None Law & Tetanic Contraction',
    content: '<p>The <span class="key-term">All-or-None Law</span> states that a motor unit either contracts fully or not at all — there is no partial contraction. A <span class="key-term">tetanic contraction</span> occurs when stimulation frequency is so high that no relaxation occurs between contractions — producing smooth, sustained force.</p>',
    animation: { type: 'line-graph', hint: 'See the transition from twitches to tetanus!', config: {
        title: 'From Single Twitch to Tetanic Contraction',
        xLabels: ['','Single Twitch','','Wave Summation','','Tetanus','',''],
        xLabel: 'Stimulation Frequency →', yLabel: 'Force Produced',
        datasets: [{label:'Muscle Force', points:[0,30,15,50,35,85,90,90], color:'#ef4444'}]
    }}
},
// ==========================================
// 3.1.1.5 MUSCULOSKELETAL SYSTEM & MOVEMENT
// ==========================================
// === SLIDE 330 ===
{
    id: 'muskel-001', topic: 'Musculoskeletal System & Movement', title: 'Movement Planes & Axes',
    content: '<p>Movement occurs in three planes, each around a corresponding axis:</p><ul><li><strong>Sagittal plane / Transverse axis</strong>: flexion, extension, hyperextension</li><li><strong>Frontal plane / Sagittal axis</strong>: abduction, adduction</li><li><strong>Transverse plane / Longitudinal axis</strong>: rotation, horizontal abduction/adduction</li></ul>',
    animation: { type: 'flip-cards', hint: 'Click to learn each plane and axis!', config: { cards: [
        {front: 'Sagittal Plane', back: 'Divides body into left and right. Movements: flexion, extension, hyperextension. Axis: transverse (horizontal). E.g., bicep curl, running stride.'},
        {front: 'Frontal Plane', back: 'Divides body into front and back. Movements: abduction, adduction. Axis: sagittal (front-to-back). E.g., star jumps, lateral raises.'},
        {front: 'Transverse Plane', back: 'Divides body into top and bottom. Movements: rotation, horizontal abd/add. Axis: longitudinal (vertical). E.g., throwing rotation, golf swing.'}
    ]}}
},
// === SLIDE 331 ===
{
    id: 'muskel-002', topic: 'Musculoskeletal System & Movement', title: 'Joint Actions: Sagittal Plane',
    content: '<p>Movements in the sagittal plane around the transverse axis:</p>',
    animation: { type: 'label-diagram', hint: 'Click labels to place joint actions!', config: {
        bgText: 'SAGITTAL',
        labels: [
            {text: 'Shoulder: Flexion/Extension', x: 25, y: 20},
            {text: 'Hip: Flexion/Extension', x: 25, y: 50},
            {text: 'Elbow: Flexion/Extension', x: 75, y: 20},
            {text: 'Knee: Flexion/Extension', x: 75, y: 50},
            {text: 'Ankle: Plantar/Dorsiflexion', x: 50, y: 78}
        ]
    }}
},
// === SLIDE 332 ===
{
    id: 'muskel-003', topic: 'Musculoskeletal System & Movement', title: 'Joint Actions: Frontal & Transverse Planes',
    content: '<p><strong>Frontal plane</strong>: shoulder/hip abduction and adduction (moving away from/toward midline).<br><strong>Transverse plane</strong>: shoulder/hip horizontal abduction and adduction, rotation.</p>',
    animation: { type: 'match-pairs', hint: 'Match the joint action to its plane!', config: { pairs: [
        {a: 'Bicep curl', b: 'Sagittal plane'},
        {a: 'Star jump', b: 'Frontal plane'},
        {a: 'Golf swing', b: 'Transverse plane'},
        {a: 'Running stride', b: 'Sagittal plane'},
        {a: 'Discus throw', b: 'Transverse plane'}
    ]}}
},
// === SLIDE 333 ===
{
    id: 'muskel-004', topic: 'Musculoskeletal System & Movement', title: 'Agonists, Antagonists & Types of Contraction',
    content: '<p><span class="key-term">Agonist</span> (prime mover) = muscle causing the movement. <span class="key-term">Antagonist</span> = muscle opposing the movement (relaxes). <span class="key-term">Fixator</span> = stabilises the origin of the agonist.</p>',
    animation: { type: 'flip-cards', hint: 'Click to learn contraction types!', config: { cards: [
        {front: 'Concentric (Isotonic)', back: 'Muscle shortens under tension. E.g., upward phase of a bicep curl. Agonist: biceps.'},
        {front: 'Eccentric (Isotonic)', back: 'Muscle lengthens under tension. E.g., lowering phase of a bicep curl. Controlled return.'},
        {front: 'Isometric', back: 'Muscle contracts but does NOT change length. E.g., holding a plank, wall sit. No movement at the joint.'}
    ]}}
},
// === SLIDE 334 ===
{
    id: 'muskel-005', topic: 'Musculoskeletal System & Movement', title: 'Movement Analysis in Sport',
    content: '<p>Apply your knowledge: analyse specific sporting movements by identifying the joint, plane, axis, agonist, antagonist, and type of contraction.</p>',
    animation: { type: 'quiz', hint: 'Analyse this movement!', config: {
        question: 'During the upward phase of a squat, which muscle is the agonist at the knee?',
        options: ['Hamstrings (eccentric)', 'Quadriceps (concentric)', 'Gastrocnemius (isometric)', 'Gluteus maximus (eccentric)'],
        correct: 1,
        explanation: 'The quadriceps extend the knee concentrically (shortening) during the upward phase of a squat. The hamstrings act as antagonists.'
    }}
}
);
