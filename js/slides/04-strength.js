window.ALL_SLIDES = window.ALL_SLIDES || [];
window.ALL_SLIDES.push(
// === SLIDE 56 ===
{
    id: 'strength-001', topic: 'Strength Training', title: 'What is Strength?',
    content: '<p>Muscular strength is the <strong>maximum force</strong> a muscle can generate in a single contraction. Building strength protects joints, improves posture, and boosts metabolism.</p>',
    animation: { type: 'muscle-flex', hint: 'Click muscle groups to highlight them!', config: { muscles: ['Bicep', 'Tricep', 'Deltoid', 'Pectoral', 'Quadricep', 'Hamstring'] } }
},
// === SLIDE 57 ===
{
    id: 'strength-002', topic: 'Strength Training', title: 'Types of Muscle Contractions',
    content: '<p>Muscles can contract in three different ways, each important for different movements and exercises.</p>',
    animation: { type: 'flip-cards', hint: 'Click to learn about each contraction type!', config: { cards: [
        {front: 'Concentric', back: 'Muscle shortens while producing force (lifting phase)'},
        {front: 'Eccentric', back: 'Muscle lengthens while producing force (lowering phase)'},
        {front: 'Isometric', back: 'Muscle produces force without changing length (holding)'}
    ]}}
},
// === SLIDE 58 ===
{
    id: 'strength-003', topic: 'Strength Training', title: 'Concentric Contractions',
    content: '<p>In a <span class="key-term">concentric contraction</span>, the muscle <strong>shortens</strong> as it generates force. Think of the "lifting" phase of a bicep curl — the bicep shortens to lift the weight.</p>',
    animation: { type: 'muscle-flex', hint: 'Click the bicep to see concentric contraction!', config: { muscles: ['Bicep shortens', 'Force produced', 'Weight lifted', 'Muscle contracts', 'Movement up', 'Energy used'] } }
},
// === SLIDE 59 ===
{
    id: 'strength-004', topic: 'Strength Training', title: 'Eccentric Contractions',
    content: '<p>In an <span class="key-term">eccentric contraction</span>, the muscle <strong>lengthens</strong> while under tension. Think of slowly lowering a weight — the muscle controls the descent.</p>',
    animation: { type: 'muscle-flex', hint: 'Click muscles to explore eccentric loading!', config: { muscles: ['Bicep lengthens', 'Controlled lowering', 'Muscle brakes', 'Builds strength', 'More muscle damage', 'Slower movement'] } }
},
// === SLIDE 60 ===
{
    id: 'strength-005', topic: 'Strength Training', title: 'Isometric Contractions',
    content: '<p>In an <span class="key-term">isometric contraction</span>, the muscle produces force <strong>without changing length</strong>. Examples: holding a plank, wall sit, or pushing against a wall.</p>',
    animation: { type: 'stopwatch', hint: 'Time your wall sit or plank — isometric hold!', config: {} }
},
// === SLIDE 61 ===
{
    id: 'strength-006', topic: 'Strength Training', title: 'Push-Ups',
    content: '<p>Push-ups work the <strong>chest, shoulders, triceps, and core</strong>. Proper form: hands shoulder-width apart, body straight like a plank, lower until chest nearly touches the ground.</p>',
    animation: { type: 'warmup-sequence', hint: 'Click to see push-up variations!', config: { exercises: [
        {name: 'Standard Push-Up', duration: '10 reps', desc: 'Hands shoulder-width, full range of motion'},
        {name: 'Modified (Knee) Push-Up', duration: '10 reps', desc: 'Knees on ground for reduced difficulty'},
        {name: 'Wide Push-Up', duration: '10 reps', desc: 'Hands wider than shoulders — more chest focus'},
        {name: 'Diamond Push-Up', duration: '8 reps', desc: 'Hands together under chest — tricep focus'},
        {name: 'Incline Push-Up', duration: '10 reps', desc: 'Hands on bench — easier variation'}
    ]}}
},
// === SLIDE 62 ===
{
    id: 'strength-007', topic: 'Strength Training', title: 'Sit-Ups & Crunches',
    content: '<p><strong>Sit-ups</strong> use full range of motion (hip flexors + abs). <strong>Crunches</strong> isolate the abs with a smaller movement. Both strengthen the core.</p>',
    animation: { type: 'warmup-sequence', hint: 'Click to see variations!', config: { exercises: [
        {name: 'Basic Crunch', duration: '15 reps', desc: 'Lift shoulders off ground, squeeze abs'},
        {name: 'Full Sit-Up', duration: '15 reps', desc: 'Come all the way up to your knees'},
        {name: 'Bicycle Crunch', duration: '20 reps', desc: 'Alternate elbow to opposite knee'},
        {name: 'Reverse Crunch', duration: '12 reps', desc: 'Lift hips off ground toward chest'}
    ]}}
},
// === SLIDE 63 ===
{
    id: 'strength-008', topic: 'Strength Training', title: 'Squats',
    content: '<p>Squats are the "king of exercises" — they work <strong>quadriceps, hamstrings, glutes, and core</strong>. Key: push hips back, knees track over toes, chest up.</p>',
    animation: { type: 'warmup-sequence', hint: 'Click to see squat variations!', config: { exercises: [
        {name: 'Bodyweight Squat', duration: '15 reps', desc: 'Feet shoulder-width, sit back and down'},
        {name: 'Sumo Squat', duration: '12 reps', desc: 'Wide stance, toes pointed out'},
        {name: 'Jump Squat', duration: '10 reps', desc: 'Squat down, then explode upward'},
        {name: 'Wall Sit', duration: '30 sec', desc: 'Back against wall, thighs parallel to ground'}
    ]}}
},
// === SLIDE 64 ===
{
    id: 'strength-009', topic: 'Strength Training', title: 'Lunges',
    content: '<p>Lunges build <strong>single-leg strength, balance, and stability</strong>. Step forward, lower back knee toward ground, front knee at 90°, push back to start.</p>',
    animation: { type: 'warmup-sequence', hint: 'Click for lunge variations!', config: { exercises: [
        {name: 'Forward Lunge', duration: '10 each leg', desc: 'Step forward into a lunge position'},
        {name: 'Reverse Lunge', duration: '10 each leg', desc: 'Step backward — easier on knees'},
        {name: 'Walking Lunge', duration: '20 total', desc: 'Alternate legs while moving forward'},
        {name: 'Side Lunge', duration: '10 each side', desc: 'Step laterally, bend one knee'}
    ]}}
},
// === SLIDE 65 ===
{
    id: 'strength-010', topic: 'Strength Training', title: 'Planks',
    content: '<p>The plank is the ultimate <strong>core stabilization</strong> exercise. It works your abs, back, shoulders, and glutes simultaneously. Hold position with a straight body.</p>',
    animation: { type: 'stopwatch', hint: 'Time your plank! Can you beat 60 seconds?', config: {} }
},
// === SLIDE 66 ===
{
    id: 'strength-011', topic: 'Strength Training', title: 'Resistance Bands',
    content: '<p>Resistance bands provide <strong>variable resistance</strong> throughout a movement — the more you stretch, the harder it gets. Portable, affordable, and effective!</p>',
    animation: { type: 'stretching', hint: 'Click to see band exercises!', config: { stretches: ['Band Pull-Apart', 'Bicep Curl', 'Shoulder Press', 'Lateral Walk', 'Chest Press'] } }
},
// === SLIDE 67 ===
{
    id: 'strength-012', topic: 'Strength Training', title: 'Body Weight Training',
    content: '<p>You don\'t need a gym! <strong>Bodyweight exercises</strong> use your own mass as resistance. Build a complete circuit with these exercises:</p>',
    animation: { type: 'circuit', hint: 'Click each station!', config: { stations: [
        {name: 'Push-Ups', icon: '💪', duration: '30s'},
        {name: 'Squats', icon: '🦵', duration: '30s'},
        {name: 'Plank', icon: '🧘', duration: '30s'},
        {name: 'Lunges', icon: '🏋️', duration: '30s'},
        {name: 'Burpees', icon: '🔥', duration: '30s'}
    ]}}
},
// === SLIDE 68 ===
{
    id: 'strength-013', topic: 'Strength Training', title: 'Core Strength',
    content: '<p>Your <strong>core</strong> includes all the muscles around your trunk: abs, obliques, lower back, and hip muscles. A strong core improves balance, posture, and power transfer.</p>',
    animation: { type: 'label-diagram', hint: 'Click labels to place them on the diagram!', config: {
        bgText: 'CORE',
        labels: [
            {text: 'Rectus Abdominis', x: 48, y: 25},
            {text: 'External Obliques', x: 25, y: 35},
            {text: 'Internal Obliques', x: 72, y: 35},
            {text: 'Transverse Abdominis', x: 48, y: 50},
            {text: 'Erector Spinae', x: 48, y: 70}
        ]
    }}
},
// === SLIDE 69 ===
{
    id: 'strength-014', topic: 'Strength Training', title: 'Upper Body Strength',
    content: '<p>Upper body muscles include the <strong>chest, shoulders, back, biceps, and triceps</strong>. Balanced upper body training prevents injuries and improves posture.</p>',
    animation: { type: 'label-diagram', hint: 'Click labels to place them!', config: {
        bgText: 'UPPER',
        labels: [
            {text: 'Deltoids', x: 30, y: 15},
            {text: 'Pectorals', x: 50, y: 30},
            {text: 'Biceps', x: 18, y: 40},
            {text: 'Triceps', x: 78, y: 40},
            {text: 'Latissimus Dorsi', x: 50, y: 55}
        ]
    }}
},
// === SLIDE 70 ===
{
    id: 'strength-015', topic: 'Strength Training', title: 'Lower Body Strength',
    content: '<p>Lower body muscles are the largest in the body. Training them boosts metabolism, athletic performance, and functional strength for everyday activities.</p>',
    animation: { type: 'label-diagram', hint: 'Click labels to place them!', config: {
        bgText: 'LOWER',
        labels: [
            {text: 'Quadriceps', x: 38, y: 20},
            {text: 'Hamstrings', x: 62, y: 20},
            {text: 'Glutes', x: 50, y: 8},
            {text: 'Calves', x: 38, y: 60},
            {text: 'Hip Flexors', x: 62, y: 45}
        ]
    }}
},
// === SLIDE 71 ===
{
    id: 'strength-016', topic: 'Strength Training', title: 'Proper Lifting Form',
    content: '<p>Good form prevents injuries and maximizes results. Compare proper vs. improper form:</p>',
    animation: { type: 'slider-compare', hint: 'Drag to compare good vs. bad form!', config: {
        left: 'Bad Form', leftDetail: 'Rounded back, knees caving in, jerky movements, holding breath, too much weight',
        right: 'Good Form', rightDetail: 'Neutral spine, knees tracking toes, controlled movement, breathing properly, appropriate weight'
    }}
},
// === SLIDE 72 ===
{
    id: 'strength-017', topic: 'Strength Training', title: 'Reps and Sets',
    content: '<p>A <span class="key-term">rep</span> (repetition) is one complete movement. A <span class="key-term">set</span> is a group of reps. Example: 3 sets of 10 reps = 30 total reps with rest between sets.</p>',
    animation: { type: 'progress-bar', hint: 'See different rep ranges and their effects!', config: { bars: [
        {label: '1-5 reps — Max Strength', value: 30, color: 'red'},
        {label: '6-12 reps — Muscle Growth', value: 60, color: 'amber'},
        {label: '12-20 reps — Muscular Endurance', value: 85, color: 'green'},
        {label: '20+ reps — Endurance/Toning', value: 95, color: 'blue'}
    ]}}
},
// === SLIDE 73 ===
{
    id: 'strength-018', topic: 'Strength Training', title: 'Progressive Overload',
    content: '<p>To get stronger, you must <strong>progressively increase the challenge</strong>: more weight, more reps, more sets, or less rest. This is the key to continued improvement.</p>',
    animation: { type: 'progress-bar', hint: 'Watch strength grow with progressive overload!', config: { bars: [
        {label: 'Week 1: 3×8 at 10 lbs', value: 25, color: 'blue'},
        {label: 'Week 3: 3×10 at 10 lbs', value: 40, color: 'blue'},
        {label: 'Week 5: 3×8 at 15 lbs', value: 55, color: 'green'},
        {label: 'Week 7: 3×10 at 15 lbs', value: 70, color: 'green'},
        {label: 'Week 9: 3×8 at 20 lbs', value: 85, color: 'amber'}
    ]}}
},
// === SLIDE 74 ===
{
    id: 'strength-019', topic: 'Strength Training', title: 'Recovery & Rest',
    content: '<p>Muscles grow during <strong>rest, not during exercise</strong>. Allow 48 hours between training the same muscle group. Sleep 8-10 hours for optimal recovery.</p>',
    animation: { type: 'stress-meter', hint: 'Click recovery strategies to reduce fatigue!', config: {
        startLevel: 80,
        strategies: ['Sleep 8+ hours', 'Hydrate well', 'Eat protein', 'Light stretching', 'Rest day']
    }}
},
// === SLIDE 75 ===
{
    id: 'strength-020', topic: 'Strength Training', title: 'Strength Training Plan',
    content: '<p>Build your own strength training plan! Put these steps in the correct order:</p>',
    animation: { type: 'drag-sort', hint: 'Drag into order!', config: {
        items: ['Warm up (5-10 min)', 'Start with compound exercises', 'Move to isolation exercises', 'Use proper form and breathing', 'Cool down and stretch', 'Record your workout'],
        correctOrder: ['Warm up (5-10 min)', 'Start with compound exercises', 'Move to isolation exercises', 'Use proper form and breathing', 'Cool down and stretch', 'Record your workout']
    }}
}
);
