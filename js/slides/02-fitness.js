window.ALL_SLIDES = window.ALL_SLIDES || [];
window.ALL_SLIDES.push(
// === SLIDE 11 ===
{
    id: 'fitness-001', topic: 'Fitness Fundamentals', title: 'What is Physical Fitness?',
    content: '<p>Physical fitness is the ability to carry out daily tasks with <strong>vigor and alertness</strong>, without undue fatigue, and with enough energy for leisure and emergencies.</p>',
    animation: { type: 'heartbeat', hint: 'Click the heart to change BPM!', config: { bpm: 72 } }
},
// === SLIDE 12 ===
{
    id: 'fitness-002', topic: 'Fitness Fundamentals', title: 'Health-Related Fitness Components',
    content: '<p>There are <strong>5 health-related</strong> fitness components that affect your overall well-being.</p>',
    animation: {
        type: 'flip-cards', hint: 'Click to reveal each component!',
        config: { cards: [
            {front: 'Component 1', back: 'Cardiovascular Endurance — heart & lung efficiency'},
            {front: 'Component 2', back: 'Muscular Strength — max force a muscle can produce'},
            {front: 'Component 3', back: 'Muscular Endurance — repeated effort over time'},
            {front: 'Component 4', back: 'Flexibility — range of motion at joints'},
            {front: 'Component 5', back: 'Body Composition — ratio of fat to lean tissue'}
        ]}
    }
},
// === SLIDE 13 ===
{
    id: 'fitness-003', topic: 'Fitness Fundamentals', title: 'Skill-Related Fitness Components',
    content: '<p>There are <strong>6 skill-related</strong> fitness components that help you perform better in sports and activities.</p>',
    animation: {
        type: 'flip-cards', hint: 'Click to reveal each component!',
        config: { cards: [
            {front: 'Agility', back: 'Quickly change direction while maintaining control'},
            {front: 'Balance', back: 'Maintain body equilibrium while stationary or moving'},
            {front: 'Coordination', back: 'Use senses and body parts together smoothly'},
            {front: 'Power', back: 'Combine strength and speed in one explosive move'},
            {front: 'Reaction Time', back: 'Respond quickly to a stimulus'},
            {front: 'Speed', back: 'Move your body or parts rapidly'}
        ]}
    }
},
// === SLIDE 14 ===
{
    id: 'fitness-004', topic: 'Fitness Fundamentals', title: 'Cardiovascular Endurance',
    content: '<p>Cardiovascular endurance is the ability of the <strong>heart, lungs, and blood vessels</strong> to deliver oxygen to working muscles during sustained activity.</p><p>Activities: running, swimming, cycling, dancing.</p>',
    animation: { type: 'heartbeat', hint: 'Click to increase heart rate!', config: { bpm: 65 } }
},
// === SLIDE 15 ===
{
    id: 'fitness-005', topic: 'Fitness Fundamentals', title: 'Muscular Strength',
    content: '<p>Muscular strength is the <strong>maximum amount of force</strong> a muscle or muscle group can exert in a single effort. Think: lifting a heavy box once.</p>',
    animation: { type: 'muscle-flex', hint: 'Click different muscle groups!', config: { muscles: ['Bicep', 'Tricep', 'Deltoid', 'Pectoral', 'Quadricep', 'Hamstring'] } }
},
// === SLIDE 16 ===
{
    id: 'fitness-006', topic: 'Fitness Fundamentals', title: 'Muscular Endurance',
    content: '<p>Muscular endurance is the ability of a muscle to <strong>perform repeated contractions</strong> over time without fatigue. Think: doing 50 push-ups.</p>',
    animation: { type: 'stopwatch', hint: 'Start the timer and see how long you can hold a plank!', config: {} }
},
// === SLIDE 17 ===
{
    id: 'fitness-007', topic: 'Fitness Fundamentals', title: 'Flexibility',
    content: '<p>Flexibility is the <strong>range of motion</strong> available at a joint. Good flexibility reduces injury risk, improves posture, and enhances athletic performance.</p>',
    animation: { type: 'stretching', hint: 'Click to cycle through stretches!', config: { stretches: ['Toe Touch', 'Quad Pull', 'Arm Cross', 'Side Bend', 'Lunge Stretch'] } }
},
// === SLIDE 18 ===
{
    id: 'fitness-008', topic: 'Fitness Fundamentals', title: 'Body Composition',
    content: '<p>Body composition refers to the <strong>ratio of fat mass to lean mass</strong> (muscle, bone, water, organs) in your body. It\'s not about weight — it\'s about what your body is made of.</p>',
    animation: { type: 'body-comp', hint: 'Click pie segments to explore!', config: { segments: [
        {label: 'Muscle', pct: 40, color: '#ef4444'},
        {label: 'Fat', pct: 18, color: '#f59e0b'},
        {label: 'Bone', pct: 15, color: '#e2e8f0'},
        {label: 'Water', pct: 22, color: '#60a5fa'},
        {label: 'Organs & Other', pct: 5, color: '#a78bfa'}
    ]}}
},
// === SLIDE 19 ===
{
    id: 'fitness-009', topic: 'Fitness Fundamentals', title: 'Agility',
    content: '<p>Agility is the ability to <strong>change direction quickly</strong> while maintaining balance and control. Essential in sports like soccer, basketball, and tennis.</p>',
    animation: { type: 'reaction-test', hint: 'Test your reaction time — a key part of agility!', config: {} }
},
// === SLIDE 20 ===
{
    id: 'fitness-010', topic: 'Fitness Fundamentals', title: 'Balance',
    content: '<p>Balance is the ability to maintain your <strong>center of gravity</strong> over your base of support. Static balance = staying still. Dynamic balance = moving.</p>',
    animation: { type: 'balance-beam', hint: 'Use arrow keys or click left/right to balance!', config: {} }
},
// === SLIDE 21 ===
{
    id: 'fitness-011', topic: 'Fitness Fundamentals', title: 'Coordination',
    content: '<p>Coordination is the ability to use your <strong>senses and body parts together</strong> to perform tasks smoothly and accurately. Examples: dribbling, catching, juggling.</p>',
    animation: { type: 'reaction-test', hint: 'Click when the box turns green — test your coordination!', config: {} }
},
// === SLIDE 22 ===
{
    id: 'fitness-012', topic: 'Fitness Fundamentals', title: 'Power',
    content: '<p>Power = <strong>Strength × Speed</strong>. It\'s the ability to exert maximum force in the shortest time. Examples: jumping, throwing, sprinting start.</p>',
    animation: { type: 'ball-physics', hint: 'Click to launch the ball — more power = higher launch!', config: { gravity: 0.3, bounce: 0.75, color: '#f59e0b' } }
},
// === SLIDE 23 ===
{
    id: 'fitness-013', topic: 'Fitness Fundamentals', title: 'Reaction Time',
    content: '<p>Reaction time is the <strong>time between a stimulus and your response</strong>. A sprinter reacting to the starting gun or a goalie saving a shot both need fast reaction times.</p>',
    animation: { type: 'reaction-test', hint: 'Click as soon as the box turns green!', config: {} }
},
// === SLIDE 24 ===
{
    id: 'fitness-014', topic: 'Fitness Fundamentals', title: 'Speed',
    content: '<p>Speed is the ability to <strong>move your body or body parts rapidly</strong>. It\'s critical in sprinting, swimming, and many team sports.</p>',
    animation: { type: 'runner', hint: 'Click to change speed!', config: { speed: 2 } }
},
// === SLIDE 25 ===
{
    id: 'fitness-015', topic: 'Fitness Fundamentals', title: 'The FITT Principle',
    content: '<p>The <span class="key-term">FITT</span> principle guides exercise programming:</p><ul><li><strong>F</strong>requency — How often?</li><li><strong>I</strong>ntensity — How hard?</li><li><strong>T</strong>ime — How long?</li><li><strong>T</strong>ype — What kind?</li></ul>',
    animation: { type: 'drag-sort', hint: 'Put the FITT components in order!', config: {
        items: ['Frequency', 'Intensity', 'Time', 'Type'],
        correctOrder: ['Frequency', 'Intensity', 'Time', 'Type']
    }}
},
// === SLIDE 26 ===
{
    id: 'fitness-016', topic: 'Fitness Fundamentals', title: 'Frequency — How Often?',
    content: '<p>Frequency refers to <strong>how many times per week</strong> you exercise. The CDC recommends at least 60 minutes of moderate-to-vigorous activity daily for youth.</p>',
    animation: { type: 'slider-compare', hint: 'Drag to compare inactive vs. active weeks!', config: {
        left: 'Inactive', leftDetail: '0-1 days/week of exercise. High risk of chronic disease.',
        right: 'Active', rightDetail: '5-7 days/week of activity. Strong heart, healthy weight, great mood!'
    }}
},
// === SLIDE 27 ===
{
    id: 'fitness-017', topic: 'Fitness Fundamentals', title: 'Intensity — How Hard?',
    content: '<p>Intensity describes <strong>how hard you exercise</strong>. Use the Talk Test: light (can sing), moderate (can talk), vigorous (can barely talk).</p>',
    animation: { type: 'heartbeat', hint: 'Click to raise intensity — watch BPM increase!', config: { bpm: 60 } }
},
// === SLIDE 28 ===
{
    id: 'fitness-018', topic: 'Fitness Fundamentals', title: 'Time — How Long?',
    content: '<p>Time is the <strong>duration of each exercise session</strong>. Youth should aim for at least 60 minutes daily. Adults need 150 minutes of moderate activity per week.</p>',
    animation: { type: 'stopwatch', hint: 'Try timing yourself for 60 seconds!', config: {} }
},
// === SLIDE 29 ===
{
    id: 'fitness-019', topic: 'Fitness Fundamentals', title: 'Type — What Kind?',
    content: '<p>Type refers to the <strong>specific activity</strong> you choose. Different activities target different fitness components. Spin the wheel for a random activity!</p>',
    animation: { type: 'wheel-spin', hint: 'Click the wheel to get a random exercise type!', config: {
        options: ['Running', 'Swimming', 'Cycling', 'Dancing', 'Yoga', 'Weight Training', 'Jump Rope', 'Hiking']
    }}
},
// === SLIDE 30 ===
{
    id: 'fitness-020', topic: 'Fitness Fundamentals', title: 'Overload Principle',
    content: '<p>The <span class="key-term">Overload Principle</span> states that to improve fitness, you must work your body <strong>harder than it\'s used to</strong>. Gradually increase frequency, intensity, or time.</p>',
    animation: { type: 'progress-bar', hint: 'Watch fitness improve with overload!', config: { bars: [
        {label: 'Week 1 — Baseline', value: 30, color: 'blue'},
        {label: 'Week 4 — Light Overload', value: 50, color: 'blue'},
        {label: 'Week 8 — Moderate Overload', value: 70, color: 'green'},
        {label: 'Week 12 — High Overload', value: 90, color: 'green'}
    ]}}
},
// === SLIDE 31 ===
{
    id: 'fitness-021', topic: 'Fitness Fundamentals', title: 'Progression Principle',
    content: '<p>The <span class="key-term">Progression Principle</span> means gradually increasing exercise demands over time. Too fast = injury. Too slow = no improvement. The key is <strong>steady, incremental change</strong>.</p>',
    animation: { type: 'progress-bar', hint: 'See how gradual progression works!', config: { bars: [
        {label: 'Month 1 — Foundation', value: 25, color: 'blue'},
        {label: 'Month 2 — Building', value: 45, color: 'blue'},
        {label: 'Month 3 — Developing', value: 65, color: 'green'},
        {label: 'Month 4 — Advancing', value: 80, color: 'green'},
        {label: 'Month 5 — Peak', value: 95, color: 'amber'}
    ]}}
},
// === SLIDE 32 ===
{
    id: 'fitness-022', topic: 'Fitness Fundamentals', title: 'Specificity Principle',
    content: '<p>The <span class="key-term">Specificity Principle</span> (SAID) states that your body adapts specifically to the type of training you do. Want to run faster? <strong>Practice running!</strong></p>',
    animation: { type: 'match-pairs', hint: 'Match each goal to its specific training!', config: { pairs: [
        {a: 'Faster sprints', b: 'Sprint intervals'},
        {a: 'Bigger muscles', b: 'Weight training'},
        {a: 'Better flexibility', b: 'Stretching routines'},
        {a: 'Stronger heart', b: 'Cardio exercises'}
    ]}}
},
// === SLIDE 33 ===
{
    id: 'fitness-023', topic: 'Fitness Fundamentals', title: 'Reversibility Principle',
    content: '<p>The <span class="key-term">Reversibility Principle</span> warns: <strong>"Use it or lose it!"</strong> Fitness gains are lost if you stop training. It takes only 2-3 weeks of inactivity for detraining to begin.</p>',
    animation: { type: 'slider-compare', hint: 'Drag to see active vs. inactive outcomes!', config: {
        left: 'Stopped Training', leftDetail: 'Muscle loss, reduced endurance, weight gain, lower mood',
        right: 'Consistent Training', rightDetail: 'Maintained strength, good endurance, healthy weight, positive mood'
    }}
},
// === SLIDE 34 ===
{
    id: 'fitness-024', topic: 'Fitness Fundamentals', title: 'Fitness Testing Overview',
    content: '<p>Fitness tests measure your current level across multiple components. Common tests include the Pacer, curl-ups, push-ups, sit-and-reach, and BMI calculations.</p>',
    animation: { type: 'quiz', hint: 'Test your knowledge!', config: {
        question: 'Which test measures CARDIOVASCULAR endurance?',
        options: ['Sit-and-Reach', 'Push-Up Test', 'PACER (beep test)', 'Curl-Up Test'],
        correct: 2,
        explanation: 'The PACER (Progressive Aerobic Cardiovascular Endurance Run) measures how well your heart and lungs work during sustained activity.'
    }}
},
// === SLIDE 35 ===
{
    id: 'fitness-025', topic: 'Fitness Fundamentals', title: 'Setting SMART Fitness Goals',
    content: '<p>Use the SMART framework to set effective goals. Put these goal-setting steps in order:</p>',
    animation: { type: 'drag-sort', hint: 'Drag into the correct SMART order!', config: {
        items: ['Specific — Define exactly what you want', 'Measurable — How will you track it?', 'Achievable — Is it realistic?', 'Relevant — Does it matter to you?', 'Time-bound — Set a deadline'],
        correctOrder: ['Specific — Define exactly what you want', 'Measurable — How will you track it?', 'Achievable — Is it realistic?', 'Relevant — Does it matter to you?', 'Time-bound — Set a deadline']
    }}
}
);
