window.ALL_SLIDES = window.ALL_SLIDES || [];
window.ALL_SLIDES.push(
// === SLIDE 76 ===
{
    id: 'flex-001', topic: 'Flexibility & Stretching', title: 'What is Flexibility?',
    content: '<p>Flexibility is the <strong>range of motion (ROM)</strong> available at a joint or group of joints. It\'s affected by muscle length, joint structure, and connective tissue elasticity.</p>',
    animation: { type: 'stretching', hint: 'Click to see different stretches!', config: { stretches: ['Toe Touch', 'Quad Pull', 'Arm Cross', 'Side Bend', 'Lunge Stretch'] } }
},
// === SLIDE 77 ===
{
    id: 'flex-002', topic: 'Flexibility & Stretching', title: 'Static Stretching',
    content: '<p><span class="key-term">Static stretching</span> involves holding a stretch at the point of mild discomfort for <strong>15-30 seconds</strong>. Best after exercise when muscles are warm.</p>',
    animation: { type: 'stretching', hint: 'Click to cycle static stretches!', config: { stretches: ['Hamstring Hold', 'Quad Hold', 'Calf Hold', 'Shoulder Hold', 'Tricep Hold'] } }
},
// === SLIDE 78 ===
{
    id: 'flex-003', topic: 'Flexibility & Stretching', title: 'Dynamic Stretching',
    content: '<p><span class="key-term">Dynamic stretching</span> uses <strong>controlled movements</strong> through full range of motion. Best before exercise as part of a warm-up.</p>',
    animation: { type: 'warmup-sequence', hint: 'Click to see dynamic stretches!', config: { exercises: [
        {name: 'Leg Swings', duration: '10 each', desc: 'Swing leg forward and back in controlled motion'},
        {name: 'Arm Circles', duration: '15 each way', desc: 'Small to large circles, forward then backward'},
        {name: 'Walking Lunges', duration: '10 each', desc: 'Lunge forward with controlled movement'},
        {name: 'High Knees', duration: '20 reps', desc: 'Drive knees up rhythmically while moving'},
        {name: 'Torso Twists', duration: '15 each', desc: 'Rotate upper body while walking'}
    ]}}
},
// === SLIDE 79 ===
{
    id: 'flex-004', topic: 'Flexibility & Stretching', title: 'Ballistic Stretching',
    content: '<p><span class="key-term">Ballistic stretching</span> uses <strong>bouncing movements</strong> to push past normal ROM. ⚠️ <strong>Not recommended</strong> for most people — high injury risk!</p>',
    animation: { type: 'slider-compare', hint: 'Compare safe vs. risky stretching!', config: {
        left: 'Ballistic (Risky)', leftDetail: 'Bouncing movements. Can cause muscle tears. Triggers stretch reflex. Not for beginners.',
        right: 'Static (Safe)', rightDetail: 'Slow, controlled holds. Gradual improvement. Safe for all levels. Recommended approach.'
    }}
},
// === SLIDE 80 ===
{
    id: 'flex-005', topic: 'Flexibility & Stretching', title: 'PNF Stretching',
    content: '<p><span class="key-term">PNF</span> (Proprioceptive Neuromuscular Facilitation) combines stretching with muscle contraction. It\'s one of the most effective methods. Contract-relax-stretch cycle.</p>',
    animation: { type: 'warmup-sequence', hint: 'Click to see PNF steps!', config: { exercises: [
        {name: 'Step 1: Stretch', duration: '10 sec', desc: 'Stretch the target muscle to mild tension'},
        {name: 'Step 2: Contract', duration: '6 sec', desc: 'Isometrically contract the stretched muscle'},
        {name: 'Step 3: Relax', duration: '2 sec', desc: 'Briefly relax the muscle'},
        {name: 'Step 4: Deeper Stretch', duration: '15 sec', desc: 'Stretch further than before — increased ROM!'}
    ]}}
},
// === SLIDE 81 ===
{
    id: 'flex-006', topic: 'Flexibility & Stretching', title: 'Hamstring Stretch',
    content: '<p>The hamstrings run along the <strong>back of the thigh</strong>. Tight hamstrings contribute to lower back pain and reduced athletic performance.</p>',
    animation: { type: 'stretching', hint: 'Click to see hamstring stretch variations!', config: { stretches: ['Standing Toe Touch', 'Seated Reach', 'Lying Hamstring', 'Doorway Stretch', 'Towel Stretch'] } }
},
// === SLIDE 82 ===
{
    id: 'flex-007', topic: 'Flexibility & Stretching', title: 'Quad Stretch',
    content: '<p>The quadriceps are the large muscles on the <strong>front of the thigh</strong>. Stretching them helps prevent knee pain and improves running mechanics.</p>',
    animation: { type: 'stretching', hint: 'Click to see quad stretch variations!', config: { stretches: ['Standing Quad Pull', 'Side-Lying Quad', 'Kneeling Quad', 'Prone Quad Stretch', 'Wall Quad Stretch'] } }
},
// === SLIDE 83 ===
{
    id: 'flex-008', topic: 'Flexibility & Stretching', title: 'Shoulder Stretch',
    content: '<p>Shoulder flexibility is crucial for overhead sports (swimming, volleyball, baseball). The shoulder is the most mobile joint in the body.</p>',
    animation: { type: 'stretching', hint: 'Click for shoulder stretches!', config: { stretches: ['Cross-Body Stretch', 'Overhead Tricep', 'Door Frame Stretch', 'Behind-Back Reach', 'Eagle Arms'] } }
},
// === SLIDE 84 ===
{
    id: 'flex-009', topic: 'Flexibility & Stretching', title: 'Calf Stretch',
    content: '<p>The calf muscles (gastrocnemius and soleus) are used in <strong>walking, running, and jumping</strong>. Tight calves can lead to Achilles tendon issues and plantar fasciitis.</p>',
    animation: { type: 'stretching', hint: 'Click for calf stretch variations!', config: { stretches: ['Wall Calf Stretch', 'Step Drop Stretch', 'Downward Dog', 'Seated Calf Stretch', 'Runner\'s Lunge'] } }
},
// === SLIDE 85 ===
{
    id: 'flex-010', topic: 'Flexibility & Stretching', title: 'Hip Flexor Stretch',
    content: '<p>Hip flexors get tight from <strong>prolonged sitting</strong>. Tight hip flexors cause lower back pain, poor posture, and reduced athletic performance.</p>',
    animation: { type: 'stretching', hint: 'Click for hip flexor stretches!', config: { stretches: ['Kneeling Lunge', 'Pigeon Pose', 'Butterfly Stretch', 'Figure-4 Stretch', '90/90 Stretch'] } }
},
// === SLIDE 86 ===
{
    id: 'flex-011', topic: 'Flexibility & Stretching', title: 'Neck Stretches',
    content: '<p>Neck stretches relieve tension from <strong>screen time and stress</strong>. Always move slowly and never force the neck into extreme positions.</p>',
    animation: { type: 'warmup-sequence', hint: 'Click for neck stretches!', config: { exercises: [
        {name: 'Side Tilt', duration: '15 sec each', desc: 'Gently tilt ear toward shoulder'},
        {name: 'Chin Tuck', duration: '10 reps', desc: 'Pull chin back like making a double chin'},
        {name: 'Rotation', duration: '10 each way', desc: 'Slowly turn head side to side'},
        {name: 'Forward Flex', duration: '15 sec', desc: 'Gently lower chin toward chest'}
    ]}}
},
// === SLIDE 87 ===
{
    id: 'flex-012', topic: 'Flexibility & Stretching', title: 'Back Stretches',
    content: '<p>Back flexibility reduces pain and improves posture. The spine should be able to flex, extend, rotate, and laterally bend.</p>',
    animation: { type: 'warmup-sequence', hint: 'Click for back stretches!', config: { exercises: [
        {name: 'Cat-Cow', duration: '10 reps', desc: 'Alternate arching and rounding your back on all fours'},
        {name: 'Child\'s Pose', duration: '30 sec', desc: 'Kneel and reach arms forward, sit back on heels'},
        {name: 'Knee-to-Chest', duration: '20 sec each', desc: 'Lie on back, pull one knee to chest'},
        {name: 'Spinal Twist', duration: '20 sec each', desc: 'Lie on back, cross knee over body and rotate'}
    ]}}
},
// === SLIDE 88 ===
{
    id: 'flex-013', topic: 'Flexibility & Stretching', title: 'Arm & Wrist Stretches',
    content: '<p>Arm and wrist flexibility is important for <strong>throwing, catching, typing, and writing</strong>. Often neglected but essential for injury prevention.</p>',
    animation: { type: 'warmup-sequence', hint: 'Click for arm & wrist stretches!', config: { exercises: [
        {name: 'Wrist Flexor Stretch', duration: '15 sec', desc: 'Extend arm, pull fingers back gently'},
        {name: 'Wrist Extensor Stretch', duration: '15 sec', desc: 'Extend arm, push fingers down'},
        {name: 'Forearm Rotation', duration: '10 each', desc: 'Rotate forearm palm up then palm down'},
        {name: 'Finger Spread', duration: '10 reps', desc: 'Spread fingers wide, then make a fist'}
    ]}}
},
// === SLIDE 89 ===
{
    id: 'flex-014', topic: 'Flexibility & Stretching', title: 'Full Body Warm-Up Routine',
    content: '<p>A complete warm-up routine prepares <strong>every major muscle group</strong> for activity. Follow this sequence before any exercise.</p>',
    animation: { type: 'warmup-sequence', hint: 'Click to follow the full warm-up!', config: { exercises: [
        {name: 'Light Jog', duration: '2 min', desc: 'Easy jog to raise heart rate and body temperature'},
        {name: 'Arm Circles', duration: '30 sec', desc: 'Small to large circles, forward and backward'},
        {name: 'Leg Swings', duration: '30 sec', desc: 'Forward/back and side-to-side swings'},
        {name: 'Hip Circles', duration: '30 sec', desc: 'Large circles with your hips'},
        {name: 'Lunges with Twist', duration: '30 sec', desc: 'Walking lunge with torso rotation'},
        {name: 'High Knees', duration: '30 sec', desc: 'Drive knees up at jogging pace'}
    ]}}
},
// === SLIDE 90 ===
{
    id: 'flex-015', topic: 'Flexibility & Stretching', title: 'Full Body Cool-Down Routine',
    content: '<p>A proper cool-down helps your body <strong>transition back to rest</strong>, reduces muscle soreness, and improves flexibility.</p>',
    animation: { type: 'warmup-sequence', hint: 'Click to follow the full cool-down!', config: { exercises: [
        {name: 'Walking', duration: '2 min', desc: 'Gradual pace decrease to lower heart rate'},
        {name: 'Quad Stretch', duration: '30 sec each', desc: 'Stand on one leg, pull heel to glute'},
        {name: 'Hamstring Stretch', duration: '30 sec each', desc: 'Sit and reach toward toes'},
        {name: 'Chest Opener', duration: '30 sec', desc: 'Clasp hands behind back, squeeze shoulder blades'},
        {name: 'Deep Breathing', duration: '1 min', desc: 'Slow inhale 4 sec, hold 4 sec, exhale 4 sec'}
    ]}}
},
// === SLIDE 91 ===
{
    id: 'flex-016', topic: 'Flexibility & Stretching', title: 'Yoga Basics',
    content: '<p>Yoga combines <strong>flexibility, balance, strength, and mindfulness</strong>. It originated in ancient India and has been practiced for over 5,000 years.</p>',
    animation: { type: 'warmup-sequence', hint: 'Click to explore yoga poses!', config: { exercises: [
        {name: 'Mountain Pose', duration: 'Hold 30s', desc: 'Stand tall, feet together, arms at sides — foundation pose'},
        {name: 'Warrior I', duration: 'Hold 30s', desc: 'Lunge position with arms overhead'},
        {name: 'Tree Pose', duration: 'Hold 30s', desc: 'Stand on one foot, other foot on inner thigh — balance'},
        {name: 'Downward Dog', duration: 'Hold 30s', desc: 'Inverted V shape — stretches hamstrings, calves, shoulders'},
        {name: 'Child\'s Pose', duration: 'Hold 30s', desc: 'Kneel, sit back on heels, arms extended — relaxation'}
    ]}}
},
// === SLIDE 92 ===
{
    id: 'flex-017', topic: 'Flexibility & Stretching', title: 'Pilates Basics',
    content: '<p>Pilates focuses on <strong>core strength, flexibility, and controlled movement</strong>. Created by Joseph Pilates in the early 20th century. Emphasizes quality over quantity.</p>',
    animation: { type: 'warmup-sequence', hint: 'Click for Pilates exercises!', config: { exercises: [
        {name: 'The Hundred', duration: '100 pumps', desc: 'Lie on back, pump arms while holding legs up'},
        {name: 'Roll-Up', duration: '8 reps', desc: 'Slowly roll up from lying to sitting position'},
        {name: 'Single Leg Circle', duration: '5 each', desc: 'Circle one leg while lying on back'},
        {name: 'Swimming', duration: '30 sec', desc: 'Lie face down, alternate lifting arms and legs'}
    ]}}
},
// === SLIDE 93 ===
{
    id: 'flex-018', topic: 'Flexibility & Stretching', title: 'Range of Motion',
    content: '<p><span class="key-term">Range of motion (ROM)</span> is the full movement potential of a joint. Active ROM = you move it yourself. Passive ROM = someone helps move it.</p>',
    animation: { type: 'joints', hint: 'Click to animate the joint\'s range of motion!', config: { type: 'hinge', name: 'Elbow Joint' } }
},
// === SLIDE 94 ===
{
    id: 'flex-019', topic: 'Flexibility & Stretching', title: 'Flexibility Testing — Sit & Reach',
    content: '<p>The <span class="key-term">sit-and-reach test</span> measures hamstring and lower back flexibility. Sit with legs extended, reach forward as far as possible toward or past your toes.</p>',
    animation: { type: 'quiz', hint: 'Test your knowledge!', config: {
        question: 'What does the sit-and-reach test primarily measure?',
        options: ['Upper body flexibility', 'Hamstring & lower back flexibility', 'Shoulder flexibility', 'Hip rotation'],
        correct: 1,
        explanation: 'The sit-and-reach test specifically measures hamstring and lower back flexibility — two areas critical for injury prevention.'
    }}
},
// === SLIDE 95 ===
{
    id: 'flex-020', topic: 'Flexibility & Stretching', title: 'Flexibility Training Plan',
    content: '<p>Build a flexibility routine! Arrange these steps in the correct order:</p>',
    animation: { type: 'drag-sort', hint: 'Drag into order!', config: {
        items: ['Warm up with 5 min light cardio', 'Perform dynamic stretches', 'Do your main activity', 'Cool down with static stretches', 'Hold each stretch 15-30 seconds', 'Stretch consistently 3-5 days/week'],
        correctOrder: ['Warm up with 5 min light cardio', 'Perform dynamic stretches', 'Do your main activity', 'Cool down with static stretches', 'Hold each stretch 15-30 seconds', 'Stretch consistently 3-5 days/week']
    }}
}
);
