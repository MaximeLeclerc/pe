window.ALL_SLIDES = window.ALL_SLIDES || [];
window.ALL_SLIDES.push(
// === SLIDE 36 ===
{
    id: 'cardio-001', topic: 'Cardio & Endurance', title: 'What is Cardio?',
    content: '<p>Cardiovascular exercise (cardio) is any activity that raises your <strong>heart rate</strong> and keeps it elevated for a sustained period. It strengthens your heart and lungs.</p>',
    animation: { type: 'heartbeat', hint: 'Click to increase your heart rate!', config: { bpm: 70 } }
},
// === SLIDE 37 ===
{
    id: 'cardio-002', topic: 'Cardio & Endurance', title: 'Heart Rate Zones',
    content: '<p>Training in different heart rate zones targets different fitness goals:</p><ul><li><strong>Zone 1 (50-60%)</strong>: Warm-up / recovery</li><li><strong>Zone 2 (60-70%)</strong>: Fat burning</li><li><strong>Zone 3 (70-80%)</strong>: Aerobic endurance</li><li><strong>Zone 4 (80-90%)</strong>: Performance</li><li><strong>Zone 5 (90-100%)</strong>: Maximum effort</li></ul>',
    animation: { type: 'progress-bar', hint: 'Explore the heart rate zones!', config: { bars: [
        {label: 'Zone 1 — Warm-Up (50-60%)', value: 55, color: 'blue'},
        {label: 'Zone 2 — Fat Burn (60-70%)', value: 65, color: 'green'},
        {label: 'Zone 3 — Aerobic (70-80%)', value: 75, color: 'amber'},
        {label: 'Zone 4 — Performance (80-90%)', value: 85, color: 'red'},
        {label: 'Zone 5 — Max Effort (90-100%)', value: 95, color: 'red'}
    ]}}
},
// === SLIDE 38 ===
{
    id: 'cardio-003', topic: 'Cardio & Endurance', title: 'Resting Heart Rate',
    content: '<p>Your <span class="key-term">Resting Heart Rate (RHR)</span> is how many times your heart beats per minute when you\'re completely at rest. A normal RHR is 60-100 BPM. Athletes often have 40-60 BPM.</p>',
    animation: { type: 'pulse-check', hint: 'Tap the wrist to simulate checking your pulse!', config: {} }
},
// === SLIDE 39 ===
{
    id: 'cardio-004', topic: 'Cardio & Endurance', title: 'Target Heart Rate',
    content: '<p>Your <span class="key-term">Target Heart Rate (THR)</span> is the ideal range during exercise (typically 60-80% of your max). Formula: (220 - age) × intensity %.</p><p>Example for a 14-year-old: (220 - 14) × 0.7 = <strong>144 BPM</strong></p>',
    animation: { type: 'heartbeat', hint: 'Click to reach target heart rate zone!', config: { bpm: 80 } }
},
// === SLIDE 40 ===
{
    id: 'cardio-005', topic: 'Cardio & Endurance', title: 'Maximum Heart Rate',
    content: '<p>Your <span class="key-term">Maximum Heart Rate (MHR)</span> is the highest rate your heart can safely achieve. The simple formula: <strong>MHR = 220 - your age</strong>.</p>',
    animation: { type: 'quiz', hint: 'Calculate it!', config: {
        question: 'What is the estimated maximum heart rate for a 15-year-old?',
        options: ['195 BPM', '200 BPM', '205 BPM', '210 BPM'],
        correct: 2,
        explanation: '220 - 15 = 205 BPM. This is the estimated maximum heart rate for a 15-year-old.'
    }}
},
// === SLIDE 41 ===
{
    id: 'cardio-006', topic: 'Cardio & Endurance', title: 'Running Basics',
    content: '<p>Running is one of the most accessible cardio exercises. Key form tips: land midfoot, keep arms at 90°, stand tall, look ahead, and breathe rhythmically.</p>',
    animation: { type: 'runner', hint: 'Click to change running speed!', config: { speed: 3 } }
},
// === SLIDE 42 ===
{
    id: 'cardio-007', topic: 'Cardio & Endurance', title: 'Jogging vs Running',
    content: '<p><strong>Jogging</strong> is slower-paced (under 6 mph), more sustainable, and great for beginners. <strong>Running</strong> is faster, more intense, and burns more calories per minute.</p>',
    animation: { type: 'slider-compare', hint: 'Drag to compare jogging vs. running!', config: {
        left: 'Jogging', leftDetail: 'Pace: 4-6 mph. Lower impact. Great for endurance. Easier on joints.',
        right: 'Running', rightDetail: 'Pace: 6+ mph. Higher intensity. Burns more calories. Builds speed.'
    }}
},
// === SLIDE 43 ===
{
    id: 'cardio-008', topic: 'Cardio & Endurance', title: 'Walking for Fitness',
    content: '<p>Don\'t underestimate walking! Brisk walking (3-4 mph) is a low-impact cardio exercise that improves heart health, burns calories, and can be done anywhere.</p>',
    animation: { type: 'runner', hint: 'Click to adjust walking pace!', config: { speed: 1 } }
},
// === SLIDE 44 ===
{
    id: 'cardio-009', topic: 'Cardio & Endurance', title: 'Jump Rope Benefits',
    content: '<p>Jump rope is a full-body cardio workout that improves coordination, agility, and cardiovascular endurance. Just 10 minutes equals about 30 minutes of jogging!</p>',
    animation: { type: 'stopwatch', hint: 'Time your jump rope session!', config: {} }
},
// === SLIDE 45 ===
{
    id: 'cardio-010', topic: 'Cardio & Endurance', title: 'Swimming Basics',
    content: '<p>Swimming is a <strong>low-impact, full-body</strong> cardio exercise. It\'s easy on joints, builds endurance, and works almost every muscle group simultaneously.</p>',
    animation: { type: 'flip-cards', hint: 'Click to learn about each stroke!', config: { cards: [
        {front: 'Freestyle', back: 'Fastest stroke — alternating arm pulls with flutter kick'},
        {front: 'Backstroke', back: 'On your back — alternating arms with flutter kick'},
        {front: 'Breaststroke', back: 'Frog-like kick with simultaneous arm sweeps'},
        {front: 'Butterfly', back: 'Dolphin kick with simultaneous arm recovery over water'}
    ]}}
},
// === SLIDE 46 ===
{
    id: 'cardio-011', topic: 'Cardio & Endurance', title: 'Cycling Basics',
    content: '<p>Cycling builds <strong>leg strength and cardiovascular endurance</strong> with minimal joint stress. You can cycle outdoors or use a stationary bike.</p>',
    animation: { type: 'runner', hint: 'Click to change cycling speed!', config: { speed: 4 } }
},
// === SLIDE 47 ===
{
    id: 'cardio-012', topic: 'Cardio & Endurance', title: 'Aerobic vs Anaerobic',
    content: '<p><strong>Aerobic</strong> ("with oxygen") = sustained, moderate exercise. <strong>Anaerobic</strong> ("without oxygen") = short, intense bursts. Both are important!</p>',
    animation: { type: 'slider-compare', hint: 'Drag to compare aerobic vs anaerobic!', config: {
        left: 'Aerobic', leftDetail: 'Uses oxygen. Sustained effort. Burns fat. Examples: jogging, cycling, swimming.',
        right: 'Anaerobic', rightDetail: 'Without enough oxygen. Short bursts. Builds power. Examples: sprints, HIIT, weight lifting.'
    }}
},
// === SLIDE 48 ===
{
    id: 'cardio-013', topic: 'Cardio & Endurance', title: 'The PACER Test',
    content: '<p>The <span class="key-term">PACER</span> (Progressive Aerobic Cardiovascular Endurance Run) is a beep test where you run 20m laps at increasing speeds until you can\'t keep up.</p>',
    animation: { type: 'runner', hint: 'Click to increase speed like the PACER test!', config: { speed: 2 } }
},
// === SLIDE 49 ===
{
    id: 'cardio-014', topic: 'Cardio & Endurance', title: '12-Minute Run Test',
    content: '<p>The <span class="key-term">Cooper 12-Minute Run</span> measures how far you can run in 12 minutes. The farther you go, the better your cardiovascular endurance.</p>',
    animation: { type: 'stopwatch', hint: 'Try timing 12 minutes!', config: {} }
},
// === SLIDE 50 ===
{
    id: 'cardio-015', topic: 'Cardio & Endurance', title: 'Interval Training',
    content: '<p>Interval training alternates between <strong>high-intensity bursts</strong> and <strong>recovery periods</strong>. Example: sprint 30 seconds, walk 60 seconds, repeat.</p>',
    animation: { type: 'circuit', hint: 'Click stations to see interval exercises!', config: { stations: [
        {name: 'Sprint', icon: '🏃', duration: '30s'},
        {name: 'Walk', icon: '🚶', duration: '60s'},
        {name: 'Sprint', icon: '🏃', duration: '30s'},
        {name: 'Walk', icon: '🚶', duration: '60s'},
        {name: 'Sprint', icon: '🏃', duration: '30s'}
    ]}}
},
// === SLIDE 51 ===
{
    id: 'cardio-016', topic: 'Cardio & Endurance', title: 'Continuous Training',
    content: '<p>Continuous training means exercising at a <strong>steady pace</strong> for an extended period (20+ minutes) without rest. Great for building a solid aerobic base.</p>',
    animation: { type: 'progress-bar', hint: 'Watch endurance build over time!', config: { bars: [
        {label: '10 min run', value: 30, color: 'blue'},
        {label: '20 min run', value: 50, color: 'blue'},
        {label: '30 min run', value: 70, color: 'green'},
        {label: '45 min run', value: 85, color: 'green'},
        {label: '60 min run', value: 95, color: 'amber'}
    ]}}
},
// === SLIDE 52 ===
{
    id: 'cardio-017', topic: 'Cardio & Endurance', title: 'Fartlek Training',
    content: '<p><span class="key-term">Fartlek</span> (Swedish for "speed play") mixes continuous and interval training with <strong>varied speeds and terrain</strong>. It\'s unstructured and fun!</p>',
    animation: { type: 'runner', hint: 'Click to randomly change speed — like fartlek!', config: { speed: 3 } }
},
// === SLIDE 53 ===
{
    id: 'cardio-018', topic: 'Cardio & Endurance', title: 'Cross Training',
    content: '<p>Cross training means using <strong>multiple types of exercise</strong> to improve overall fitness while reducing injury risk from repetitive motion. Spin the wheel for ideas!</p>',
    animation: { type: 'wheel-spin', hint: 'Spin for a cross-training activity!', config: {
        options: ['Swimming', 'Cycling', 'Rowing', 'Yoga', 'Hiking', 'Dance', 'Elliptical', 'Jump Rope']
    }}
},
// === SLIDE 54 ===
{
    id: 'cardio-019', topic: 'Cardio & Endurance', title: 'Cardio Benefits',
    content: '<p>Regular cardiovascular exercise provides <strong>numerous health benefits</strong> that affect every system of your body.</p>',
    animation: { type: 'progress-bar', hint: 'See the many benefits of cardio!', config: { bars: [
        {label: 'Heart Strength', value: 85, color: 'red'},
        {label: 'Lung Capacity', value: 80, color: 'blue'},
        {label: 'Weight Management', value: 75, color: 'green'},
        {label: 'Mood Improvement', value: 90, color: 'amber'},
        {label: 'Disease Prevention', value: 70, color: 'blue'},
        {label: 'Better Sleep', value: 65, color: 'green'}
    ]}}
},
// === SLIDE 55 ===
{
    id: 'cardio-020', topic: 'Cardio & Endurance', title: 'Building an Endurance Plan',
    content: '<p>A good endurance training plan follows progressive overload. Put these steps in order to build your plan:</p>',
    animation: { type: 'drag-sort', hint: 'Drag into the correct order!', config: {
        items: ['Assess your current fitness level', 'Set a specific endurance goal', 'Choose your cardio activities', 'Start with moderate intensity', 'Gradually increase duration and intensity', 'Track progress and adjust'],
        correctOrder: ['Assess your current fitness level', 'Set a specific endurance goal', 'Choose your cardio activities', 'Start with moderate intensity', 'Gradually increase duration and intensity', 'Track progress and adjust']
    }}
}
);
