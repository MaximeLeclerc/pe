window.ALL_SLIDES = window.ALL_SLIDES || [];
window.ALL_SLIDES.push(
// === SLIDE 196 ===
{
    id: 'body-001', topic: 'Body Systems', title: 'Body Systems Overview',
    content: '<p>Your body is made up of <strong>interconnected systems</strong> that work together during exercise. Understanding them helps you train smarter and stay healthy.</p>',
    animation: { type: 'label-diagram', hint: 'Click labels to place them!', config: {
        bgText: 'BODY',
        labels: [
            {text: 'Muscular System', x: 25, y: 30},
            {text: 'Skeletal System', x: 75, y: 30},
            {text: 'Cardiovascular System', x: 25, y: 55},
            {text: 'Respiratory System', x: 75, y: 55},
            {text: 'Nervous System', x: 50, y: 78}
        ]
    }}
},
// === SLIDE 197 ===
{
    id: 'body-002', topic: 'Body Systems', title: 'Muscular System',
    content: '<p>The muscular system has over <strong>600 muscles</strong> that produce movement, maintain posture, generate heat, and stabilize joints. Three types: skeletal, smooth, and cardiac.</p>',
    animation: { type: 'muscle-flex', hint: 'Click muscle groups to identify them!', config: { muscles: ['Bicep', 'Tricep', 'Deltoid', 'Pectoral', 'Quadricep', 'Hamstring'] } }
},
// === SLIDE 198 ===
{
    id: 'body-003', topic: 'Body Systems', title: 'Major Muscle Groups',
    content: '<p>The body\'s major muscle groups work in pairs (agonist/antagonist). When one contracts, the opposing muscle relaxes.</p>',
    animation: { type: 'label-diagram', hint: 'Place labels on the correct muscle groups!', config: {
        bgText: 'MUSCLES',
        labels: [
            {text: 'Deltoids (Shoulders)', x: 30, y: 15},
            {text: 'Pectorals (Chest)', x: 50, y: 25},
            {text: 'Biceps (Front Arm)', x: 15, y: 35},
            {text: 'Abdominals (Core)', x: 50, y: 42},
            {text: 'Quadriceps (Front Thigh)', x: 35, y: 60},
            {text: 'Gastrocnemius (Calf)', x: 65, y: 78}
        ]
    }}
},
// === SLIDE 199 ===
{
    id: 'body-004', topic: 'Body Systems', title: 'Upper Body Muscles',
    content: '<p>Upper body muscles handle <strong>pushing, pulling, lifting, and throwing</strong>. They include the chest, back, shoulders, and arms.</p>',
    animation: { type: 'flip-cards', hint: 'Click to learn each muscle!', config: { cards: [
        {front: 'Pectorals', back: 'Chest muscles — pushing movements (push-ups, bench press)'},
        {front: 'Latissimus Dorsi', back: 'Back muscles — pulling movements (pull-ups, rows)'},
        {front: 'Deltoids', back: 'Shoulder muscles — raising arms overhead'},
        {front: 'Biceps', back: 'Front upper arm — bending the elbow (curls)'},
        {front: 'Triceps', back: 'Back upper arm — straightening the elbow (dips)'},
        {front: 'Trapezius', back: 'Upper back/neck — shrugging and neck stability'}
    ]}}
},
// === SLIDE 200 ===
{
    id: 'body-005', topic: 'Body Systems', title: 'Lower Body Muscles',
    content: '<p>Lower body muscles are the <strong>largest and most powerful</strong> in the body. They\'re responsible for walking, running, jumping, and supporting your weight.</p>',
    animation: { type: 'flip-cards', hint: 'Click to learn each muscle!', config: { cards: [
        {front: 'Quadriceps', back: 'Front thigh — extending the knee (squats, kicking)'},
        {front: 'Hamstrings', back: 'Back thigh — bending the knee (running, jumping)'},
        {front: 'Gluteus Maximus', back: 'Buttocks — hip extension (climbing stairs, sprinting)'},
        {front: 'Gastrocnemius', back: 'Calf — pointing the foot (jumping, running)'},
        {front: 'Hip Flexors', back: 'Front of hip — lifting the knee (walking, cycling)'},
        {front: 'Adductors', back: 'Inner thigh — bringing legs together (lateral movement)'}
    ]}}
},
// === SLIDE 201 ===
{
    id: 'body-006', topic: 'Body Systems', title: 'Core Muscles',
    content: '<p>The core is your body\'s <strong>center of power</strong>. It stabilizes the spine, transfers force between upper and lower body, and protects internal organs.</p>',
    animation: { type: 'label-diagram', hint: 'Place core muscle labels!', config: {
        bgText: 'CORE',
        labels: [
            {text: 'Rectus Abdominis (Six-pack)', x: 50, y: 20},
            {text: 'Obliques (Side abs)', x: 20, y: 35},
            {text: 'Transverse Abdominis (Deep)', x: 50, y: 48},
            {text: 'Erector Spinae (Lower back)', x: 50, y: 65},
            {text: 'Diaphragm (Breathing)', x: 50, y: 8}
        ]
    }}
},
// === SLIDE 202 ===
{
    id: 'body-007', topic: 'Body Systems', title: 'How Muscles Work',
    content: '<p>Muscles contract when the brain sends electrical signals through nerves. <strong>Muscle fibers slide over each other</strong> (sliding filament theory) to shorten the muscle and produce force.</p>',
    animation: { type: 'muscle-flex', hint: 'Click muscles to see them contract!', config: { muscles: ['Actin (thin filament)', 'Myosin (thick filament)', 'Sarcomere shortens', 'Muscle fiber contracts', 'Tendon pulls bone', 'Movement occurs'] } }
},
// === SLIDE 203 ===
{
    id: 'body-008', topic: 'Body Systems', title: 'Muscle Fiber Types',
    content: '<p>Two main fiber types: <strong>Type I (slow-twitch)</strong> for endurance, and <strong>Type II (fast-twitch)</strong> for power and speed. Your ratio is partly genetic.</p>',
    animation: { type: 'slider-compare', hint: 'Drag to compare fiber types!', config: {
        left: 'Type I — Slow Twitch', leftDetail: 'Endurance activities. Resist fatigue. Use oxygen efficiently. Marathon runners have more.',
        right: 'Type II — Fast Twitch', rightDetail: 'Powerful, quick contractions. Fatigue faster. Sprinters and jumpers have more.'
    }}
},
// === SLIDE 204 ===
{
    id: 'body-009', topic: 'Body Systems', title: 'Skeletal System',
    content: '<p>The adult skeleton has <strong>206 bones</strong>. Functions: support, protection, movement, mineral storage, and blood cell production.</p>',
    animation: { type: 'skeleton', hint: 'Click bones to identify them!', config: { bones: ['Skull','Clavicle','Humerus','Radius','Spine','Pelvis','Femur','Tibia','Fibula'] } }
},
// === SLIDE 205 ===
{
    id: 'body-010', topic: 'Body Systems', title: 'Major Bones',
    content: '<p>Key bones to know for PE: <strong>femur (thigh), tibia (shin), humerus (upper arm), radius/ulna (forearm), spine, pelvis, skull</strong>.</p>',
    animation: { type: 'label-diagram', hint: 'Place labels on the skeleton!', config: {
        bgText: 'SKELETON',
        labels: [
            {text: 'Skull', x: 50, y: 5},
            {text: 'Clavicle (Collarbone)', x: 35, y: 18},
            {text: 'Humerus (Upper Arm)', x: 18, y: 32},
            {text: 'Spine (Vertebrae)', x: 50, y: 40},
            {text: 'Femur (Thigh Bone)', x: 38, y: 62},
            {text: 'Tibia (Shin Bone)', x: 42, y: 80}
        ]
    }}
},
// === SLIDE 206 ===
{
    id: 'body-011', topic: 'Body Systems', title: 'Axial Skeleton',
    content: '<p>The <span class="key-term">axial skeleton</span> (80 bones) forms your body\'s central axis: <strong>skull, spine, ribs, and sternum</strong>. It protects the brain, spinal cord, and organs.</p>',
    animation: { type: 'skeleton', hint: 'Click axial bones to identify them!', config: { bones: ['Skull','Vertebrae (Cervical)','Vertebrae (Thoracic)','Vertebrae (Lumbar)','Sternum','Ribs','Sacrum','Coccyx','Hyoid'] } }
},
// === SLIDE 207 ===
{
    id: 'body-012', topic: 'Body Systems', title: 'Appendicular Skeleton',
    content: '<p>The <span class="key-term">appendicular skeleton</span> (126 bones) includes your <strong>limbs, shoulders, and hips</strong> — everything that helps you move and interact with the world.</p>',
    animation: { type: 'skeleton', hint: 'Click appendicular bones!', config: { bones: ['Clavicle','Scapula','Humerus','Radius','Ulna','Pelvis','Femur','Tibia','Patella'] } }
},
// === SLIDE 208 ===
{
    id: 'body-013', topic: 'Body Systems', title: 'Bone Structure',
    content: '<p>Bones aren\'t solid — they have a <strong>hard outer layer (compact bone)</strong> and a <strong>spongy interior</strong> for lightness and shock absorption. Bone marrow produces blood cells.</p>',
    animation: { type: 'label-diagram', hint: 'Label the parts of a bone!', config: {
        bgText: 'BONE',
        labels: [
            {text: 'Periosteum (Outer layer)', x: 50, y: 10},
            {text: 'Compact Bone (Dense)', x: 25, y: 30},
            {text: 'Spongy Bone (Porous)', x: 75, y: 30},
            {text: 'Bone Marrow (Center)', x: 50, y: 55},
            {text: 'Cartilage (Joint surface)', x: 50, y: 78}
        ]
    }}
},
// === SLIDE 209 ===
{
    id: 'body-014', topic: 'Body Systems', title: 'Joints — Types',
    content: '<p>Joints are where two or more bones meet. They allow different types and amounts of movement.</p>',
    animation: { type: 'flip-cards', hint: 'Click to learn about joint types!', config: { cards: [
        {front: 'Hinge Joint', back: 'Movement in one plane — like a door. Ex: elbow, knee'},
        {front: 'Ball & Socket', back: 'Movement in all directions. Ex: shoulder, hip'},
        {front: 'Pivot Joint', back: 'Rotation around an axis. Ex: neck (atlas/axis)'},
        {front: 'Gliding Joint', back: 'Sliding movement. Ex: wrist, ankle'},
        {front: 'Saddle Joint', back: 'Two-direction movement. Ex: thumb'},
        {front: 'Fixed Joint', back: 'No movement. Ex: skull sutures'}
    ]}}
},
// === SLIDE 210 ===
{
    id: 'body-015', topic: 'Body Systems', title: 'Hinge Joints',
    content: '<p>Hinge joints allow movement in <strong>one plane only</strong> — flexion and extension. Like a door hinge. Examples: elbow, knee, ankle, fingers.</p>',
    animation: { type: 'joints', hint: 'Click to animate the hinge joint!', config: { type: 'hinge', name: 'Elbow (Hinge Joint)' } }
},
// === SLIDE 211 ===
{
    id: 'body-016', topic: 'Body Systems', title: 'Ball & Socket Joints',
    content: '<p>Ball and socket joints allow the <strong>greatest range of motion</strong> — flexion, extension, rotation, abduction, adduction. Examples: shoulder and hip.</p>',
    animation: { type: 'joints', hint: 'Click to animate the ball & socket joint!', config: { type: 'ball-socket', name: 'Shoulder (Ball & Socket)' } }
},
// === SLIDE 212 ===
{
    id: 'body-017', topic: 'Body Systems', title: 'Pivot Joints',
    content: '<p>Pivot joints allow <strong>rotation around a central axis</strong>. The atlas and axis vertebrae (C1/C2) in your neck form a pivot joint that lets you turn your head side to side.</p>',
    animation: { type: 'joints', hint: 'Click to animate the pivot joint!', config: { type: 'hinge', name: 'Neck (Pivot Joint)' } }
},
// === SLIDE 213 ===
{
    id: 'body-018', topic: 'Body Systems', title: 'Cardiovascular System',
    content: '<p>The cardiovascular system (heart + blood vessels) <strong>pumps blood throughout your entire body</strong>, delivering oxygen and nutrients while removing waste products.</p>',
    animation: { type: 'heartbeat', hint: 'Click the heart to change BPM!', config: { bpm: 72 } }
},
// === SLIDE 214 ===
{
    id: 'body-019', topic: 'Body Systems', title: 'The Heart',
    content: '<p>Your heart is a muscular pump about the <strong>size of your fist</strong>. It has 4 chambers: left atrium, right atrium, left ventricle, right ventricle. It beats ~100,000 times per day.</p>',
    animation: { type: 'label-diagram', hint: 'Label the heart chambers!', config: {
        bgText: 'HEART',
        labels: [
            {text: 'Right Atrium', x: 30, y: 25},
            {text: 'Left Atrium', x: 70, y: 25},
            {text: 'Right Ventricle', x: 30, y: 55},
            {text: 'Left Ventricle', x: 70, y: 55},
            {text: 'Aorta', x: 55, y: 8}
        ]
    }}
},
// === SLIDE 215 ===
{
    id: 'body-020', topic: 'Body Systems', title: 'Blood Vessels',
    content: '<p>Three types of blood vessels: <strong>arteries</strong> (carry blood away from heart), <strong>veins</strong> (carry blood to heart), <strong>capillaries</strong> (tiny vessels where gas exchange happens).</p>',
    animation: { type: 'flip-cards', hint: 'Click to learn about blood vessels!', config: { cards: [
        {front: 'Arteries', back: 'Thick walls, carry oxygenated blood AWAY from heart (except pulmonary artery)'},
        {front: 'Veins', back: 'Thin walls with valves, carry deoxygenated blood TO heart (except pulmonary vein)'},
        {front: 'Capillaries', back: 'One cell thick — where oxygen, nutrients, and waste are exchanged'}
    ]}}
},
// === SLIDE 216 ===
{
    id: 'body-021', topic: 'Body Systems', title: 'Blood Flow Path',
    content: '<p>Blood follows a <strong>double circulation</strong> path: right heart → lungs (picks up O₂) → left heart → body (delivers O₂) → right heart (repeat).</p>',
    animation: { type: 'drag-sort', hint: 'Put the blood flow path in order!', config: {
        items: ['Right atrium receives deoxygenated blood', 'Right ventricle pumps to lungs', 'Lungs — blood picks up oxygen', 'Left atrium receives oxygenated blood', 'Left ventricle pumps to body', 'Body uses oxygen, blood returns to heart'],
        correctOrder: ['Right atrium receives deoxygenated blood', 'Right ventricle pumps to lungs', 'Lungs — blood picks up oxygen', 'Left atrium receives oxygenated blood', 'Left ventricle pumps to body', 'Body uses oxygen, blood returns to heart']
    }}
},
// === SLIDE 217 ===
{
    id: 'body-022', topic: 'Body Systems', title: 'Respiratory System',
    content: '<p>The respiratory system brings <strong>oxygen into the body and removes carbon dioxide</strong>. During exercise, your breathing rate increases from ~15 to ~40-60 breaths per minute.</p>',
    animation: { type: 'breathing', hint: 'Click to change breathing phase!', config: {} }
},
// === SLIDE 218 ===
{
    id: 'body-023', topic: 'Body Systems', title: 'The Lungs',
    content: '<p>Your lungs contain about <strong>300 million alveoli</strong> (tiny air sacs) where gas exchange occurs. Total surface area = about the size of a tennis court!</p>',
    animation: { type: 'label-diagram', hint: 'Label the respiratory system!', config: {
        bgText: 'LUNGS',
        labels: [
            {text: 'Trachea (Windpipe)', x: 50, y: 10},
            {text: 'Bronchi (Main branches)', x: 35, y: 30},
            {text: 'Bronchioles (Small branches)', x: 65, y: 35},
            {text: 'Alveoli (Air sacs)', x: 50, y: 55},
            {text: 'Diaphragm', x: 50, y: 80}
        ]
    }}
},
// === SLIDE 219 ===
{
    id: 'body-024', topic: 'Body Systems', title: 'Gas Exchange',
    content: '<p><span class="key-term">Gas exchange</span> happens in the alveoli: <strong>oxygen diffuses into the blood</strong> and <strong>carbon dioxide diffuses out</strong>. This is essential for every cell in your body.</p>',
    animation: { type: 'breathing', hint: 'Click to see the breathing cycle!', config: {} }
},
// === SLIDE 220 ===
{
    id: 'body-025', topic: 'Body Systems', title: 'Nervous System',
    content: '<p>The nervous system controls <strong>all body movements and functions</strong>. The brain sends electrical signals through nerves to muscles, telling them when and how to contract.</p>',
    animation: { type: 'label-diagram', hint: 'Label the nervous system!', config: {
        bgText: 'NERVES',
        labels: [
            {text: 'Brain', x: 50, y: 8},
            {text: 'Spinal Cord', x: 50, y: 35},
            {text: 'Motor Nerves', x: 25, y: 50},
            {text: 'Sensory Nerves', x: 75, y: 50},
            {text: 'Peripheral Nerves', x: 50, y: 72}
        ]
    }}
},
// === SLIDE 221 ===
{
    id: 'body-026', topic: 'Body Systems', title: 'Brain & Exercise',
    content: '<p>Exercise is <strong>medicine for the brain</strong>! It increases blood flow, promotes new brain cell growth, improves memory, and releases mood-boosting chemicals.</p>',
    animation: { type: 'flip-cards', hint: 'Click to learn brain benefits!', config: { cards: [
        {front: 'BDNF', back: 'Brain-Derived Neurotrophic Factor — exercise increases this protein that helps brain cells grow'},
        {front: 'Endorphins', back: 'Natural "feel good" chemicals released during exercise'},
        {front: 'Serotonin', back: 'Mood regulator — exercise boosts its production'},
        {front: 'Focus', back: 'Even 20 min of exercise improves attention for hours'},
        {front: 'Memory', back: 'Cardio exercise grows the hippocampus — the memory center'},
        {front: 'Sleep', back: 'Regular exercise improves sleep quality and duration'}
    ]}}
},
// === SLIDE 222 ===
{
    id: 'body-027', topic: 'Body Systems', title: 'Endocrine System',
    content: '<p>The endocrine system produces <strong>hormones</strong> — chemical messengers that regulate growth, metabolism, energy, and mood. Exercise significantly affects hormone levels.</p>',
    animation: { type: 'label-diagram', hint: 'Label the endocrine glands!', config: {
        bgText: 'GLANDS',
        labels: [
            {text: 'Pituitary (Growth hormone)', x: 50, y: 10},
            {text: 'Thyroid (Metabolism)', x: 50, y: 22},
            {text: 'Adrenal (Adrenaline)', x: 35, y: 45},
            {text: 'Pancreas (Insulin)', x: 65, y: 50},
            {text: 'Gonads (Sex hormones)', x: 50, y: 72}
        ]
    }}
},
// === SLIDE 223 ===
{
    id: 'body-028', topic: 'Body Systems', title: 'Exercise & Hormones',
    content: '<p>Exercise triggers beneficial hormone responses that improve fitness, body composition, mood, and recovery.</p>',
    animation: { type: 'flip-cards', hint: 'Click to learn about exercise hormones!', config: { cards: [
        {front: 'Growth Hormone', back: 'Builds muscle and burns fat. Released during intense exercise and sleep.'},
        {front: 'Testosterone', back: 'Builds muscle and bone. Both sexes produce it. Increases with strength training.'},
        {front: 'Adrenaline', back: 'Fight-or-flight hormone. Increases heart rate and energy during exercise.'},
        {front: 'Insulin', back: 'Regulates blood sugar. Exercise improves insulin sensitivity.'},
        {front: 'Cortisol', back: 'Stress hormone. Moderate exercise reduces chronic levels.'}
    ]}}
},
// === SLIDE 224 ===
{
    id: 'body-029', topic: 'Body Systems', title: 'How Systems Work Together',
    content: '<p>During exercise, all body systems <strong>work together seamlessly</strong>. The brain signals muscles, the heart pumps faster, the lungs breathe harder — a coordinated effort!</p>',
    animation: { type: 'drag-sort', hint: 'Put the exercise response in order!', config: {
        items: ['Brain decides to move', 'Nervous system sends signals to muscles', 'Muscles contract and produce movement', 'Heart rate increases to pump more blood', 'Lungs breathe faster for more oxygen', 'Blood delivers oxygen and removes CO₂'],
        correctOrder: ['Brain decides to move', 'Nervous system sends signals to muscles', 'Muscles contract and produce movement', 'Heart rate increases to pump more blood', 'Lungs breathe faster for more oxygen', 'Blood delivers oxygen and removes CO₂']
    }}
},
// === SLIDE 225 ===
{
    id: 'body-030', topic: 'Body Systems', title: 'Body Systems Review',
    content: '<p>Let\'s review what you\'ve learned about body systems!</p>',
    animation: { type: 'quiz', hint: 'Final body systems quiz!', config: {
        question: 'Which system is responsible for pumping blood and delivering oxygen to muscles?',
        options: ['Muscular System', 'Skeletal System', 'Cardiovascular System', 'Nervous System'],
        correct: 2,
        explanation: 'The cardiovascular system (heart and blood vessels) pumps blood throughout the body, delivering oxygen to working muscles and removing waste.'
    }}
}
);
