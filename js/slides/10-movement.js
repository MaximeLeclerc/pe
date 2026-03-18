window.ALL_SLIDES = window.ALL_SLIDES || [];
window.ALL_SLIDES.push(
// === SLIDE 226 ===
{
    id: 'move-001', topic: 'Movement & Motor Skills', title: 'Fundamental Movement Skills',
    content: '<p>Fundamental movement skills (FMS) are the <strong>building blocks</strong> of all physical activity. They\'re categorized as locomotor, non-locomotor, and manipulative skills.</p>',
    animation: { type: 'warmup-sequence', hint: 'Click to explore movement categories!', config: { exercises: [
        {name: 'Locomotor Skills', duration: 'Moving from A to B', desc: 'Running, jumping, hopping, skipping, galloping, sliding'},
        {name: 'Non-Locomotor Skills', duration: 'Moving in place', desc: 'Bending, twisting, stretching, turning, balancing'},
        {name: 'Manipulative Skills', duration: 'Controlling objects', desc: 'Throwing, catching, kicking, striking, dribbling'}
    ]}}
},
// === SLIDE 227 ===
{
    id: 'move-002', topic: 'Movement & Motor Skills', title: 'Locomotor Skills',
    content: '<p>Locomotor skills move your body from <strong>one place to another</strong>. They\'re the foundation for sports, dance, and everyday activities.</p>',
    animation: { type: 'runner', hint: 'Click to change locomotion speed!', config: { speed: 3 } }
},
// === SLIDE 228 ===
{
    id: 'move-003', topic: 'Movement & Motor Skills', title: 'Non-Locomotor Skills',
    content: '<p>Non-locomotor (stability) skills are performed <strong>in place</strong> without traveling. They include bending, twisting, stretching, pushing, pulling, and turning.</p>',
    animation: { type: 'warmup-sequence', hint: 'Click to see non-locomotor movements!', config: { exercises: [
        {name: 'Bending', duration: 'Flexibility', desc: 'Moving a body part at a joint — knees, waist, elbows'},
        {name: 'Twisting', duration: 'Rotation', desc: 'Rotating the trunk while feet stay planted'},
        {name: 'Stretching', duration: 'Extension', desc: 'Extending body parts to full length'},
        {name: 'Swinging', duration: 'Pendular', desc: 'Moving body parts in a pendulum motion'},
        {name: 'Balancing', duration: 'Stability', desc: 'Maintaining equilibrium in still or moving positions'}
    ]}}
},
// === SLIDE 229 ===
{
    id: 'move-004', topic: 'Movement & Motor Skills', title: 'Manipulative Skills',
    content: '<p>Manipulative skills involve <strong>controlling objects</strong> with your hands, feet, or implements. They require hand-eye or foot-eye coordination.</p>',
    animation: { type: 'ball-physics', hint: 'Click to manipulate the ball!', config: { gravity: 0.3, bounce: 0.7, color: '#f59e0b', radius: 14 } }
},
// === SLIDE 230 ===
{
    id: 'move-005', topic: 'Movement & Motor Skills', title: 'Balance — Static & Dynamic',
    content: '<p><strong>Static balance</strong> = staying still (tree pose). <strong>Dynamic balance</strong> = maintaining balance while moving (dribbling while running). Both are trainable!</p>',
    animation: { type: 'balance-beam', hint: 'Use arrow keys or click to maintain balance!', config: {} }
},
// === SLIDE 231 ===
{
    id: 'move-006', topic: 'Movement & Motor Skills', title: 'Coordination',
    content: '<p>Coordination is the ability to <strong>use multiple body parts together smoothly</strong>. Hand-eye coordination is essential for catching, hitting, and throwing.</p>',
    animation: { type: 'reaction-test', hint: 'Test your hand-eye coordination!', config: {} }
},
// === SLIDE 232 ===
{
    id: 'move-007', topic: 'Movement & Motor Skills', title: 'Spatial Awareness',
    content: '<p>Spatial awareness is understanding where your <strong>body is in relation to objects and other people</strong>. Critical for team sports and avoiding collisions.</p>',
    animation: { type: 'sport-field', hint: 'Click to see how players use spatial awareness!', config: { sport: 'basketball', positions: [
        {x:80,y:60,label:'P1',name:'Player must be aware of teammate\'s position'},
        {x:80,y:140,label:'P2',name:'Finding open space to receive a pass'},
        {x:175,y:100,label:'P3',name:'Reading the defense before making a play'},
        {x:250,y:70,label:'D1',name:'Defender closing down space'},
        {x:250,y:130,label:'D2',name:'Defender marking an opponent'}
    ]}}
},
// === SLIDE 233 ===
{
    id: 'move-008', topic: 'Movement & Motor Skills', title: 'Body Awareness',
    content: '<p>Body awareness (proprioception) is <strong>knowing where your body parts are</strong> without looking. It\'s how you can touch your nose with your eyes closed!</p>',
    animation: { type: 'label-diagram', hint: 'Click labels to identify body awareness concepts!', config: {
        bgText: 'AWARE',
        labels: [
            {text: 'Proprioception (Joint position)', x: 50, y: 15},
            {text: 'Kinesthesia (Movement sense)', x: 50, y: 32},
            {text: 'Vestibular (Balance sense)', x: 50, y: 50},
            {text: 'Laterality (Left/Right)', x: 50, y: 68},
            {text: 'Directionality (Up/Down/Etc)', x: 50, y: 85}
        ]
    }}
},
// === SLIDE 234 ===
{
    id: 'move-009', topic: 'Movement & Motor Skills', title: 'Rhythm & Timing',
    content: '<p>Rhythm and timing are essential for <strong>dance, gymnastics, and coordinated team play</strong>. They involve performing movements in a consistent temporal pattern.</p>',
    animation: { type: 'reaction-test', hint: 'Test your timing — click as soon as the box turns green!', config: {} }
},
// === SLIDE 235 ===
{
    id: 'move-010', topic: 'Movement & Motor Skills', title: 'Throwing Mechanics',
    content: '<p>Good throwing technique: <strong>step with opposite foot, rotate hips, lead with elbow, release and follow through</strong>. Applies to baseball, football, handball, and more.</p>',
    animation: { type: 'ball-physics', hint: 'Click to throw — aim for distance!', config: { gravity: 0.2, bounce: 0.4, color: '#ef4444', radius: 10 } }
},
// === SLIDE 236 ===
{
    id: 'move-011', topic: 'Movement & Motor Skills', title: 'Catching Skills',
    content: '<p>Catching keys: <strong>eyes on the object, hands ready (fingers up for high, down for low), absorb with soft hands, pull into body</strong>.</p>',
    animation: { type: 'ball-physics', hint: 'Click to toss and catch!', config: { gravity: 0.25, bounce: 0.6, color: '#22c55e', radius: 12 } }
},
// === SLIDE 237 ===
{
    id: 'move-012', topic: 'Movement & Motor Skills', title: 'Kicking Mechanics',
    content: '<p>Proper kicking: <strong>plant foot beside the ball, strike with laces (power) or inside foot (accuracy), follow through toward target, keep eyes on the ball</strong>.</p>',
    animation: { type: 'ball-physics', hint: 'Click to kick the ball!', config: { gravity: 0.2, bounce: 0.6, color: '#fff', radius: 13 } }
},
// === SLIDE 238 ===
{
    id: 'move-013', topic: 'Movement & Motor Skills', title: 'Striking Skills',
    content: '<p>Striking means hitting an object with a body part or implement. Used in: <strong>tennis, baseball, hockey, volleyball, badminton</strong>. Key: keep eyes on the object, swing through.</p>',
    animation: { type: 'ball-physics', hint: 'Click to strike the ball!', config: { gravity: 0.15, bounce: 0.7, color: '#d4e157', radius: 10 } }
},
// === SLIDE 239 ===
{
    id: 'move-014', topic: 'Movement & Motor Skills', title: 'Running Form',
    content: '<p>Efficient running form: <strong>land midfoot, slight forward lean, arms at 90°, relaxed shoulders, eyes ahead</strong>. Good form prevents injuries and saves energy.</p>',
    animation: { type: 'slider-compare', hint: 'Compare good vs bad running form!', config: {
        left: 'Poor Form', leftDetail: 'Heel striking. Arms crossing midline. Hunched shoulders. Looking down. Overstriding.',
        right: 'Good Form', rightDetail: 'Midfoot landing. Arms at 90°. Tall posture. Eyes forward. Quick cadence.'
    }}
},
// === SLIDE 240 ===
{
    id: 'move-015', topic: 'Movement & Motor Skills', title: 'Jumping & Landing',
    content: '<p>Safe jumping: <strong>bend knees to load, swing arms up, extend fully</strong>. Safe landing: <strong>bend knees to absorb, land on balls of feet, keep weight centered</strong>.</p>',
    animation: { type: 'ball-physics', hint: 'Click to simulate a jump arc!', config: { gravity: 0.3, bounce: 0.5, color: '#8b5cf6', radius: 12 } }
},
// === SLIDE 241 ===
{
    id: 'move-016', topic: 'Movement & Motor Skills', title: 'Agility Drills',
    content: '<p>Agility drills improve your ability to <strong>change direction quickly</strong>. They enhance sports performance across virtually all activities.</p>',
    animation: { type: 'circuit', hint: 'Click drills to explore them!', config: { stations: [
        {name: 'Ladder Drill', icon: '🪜', duration: '30s'},
        {name: 'Cone Weave', icon: '🔶', duration: '30s'},
        {name: 'Shuttle Run', icon: '🏃', duration: '30s'},
        {name: 'T-Drill', icon: '⬆️', duration: '30s'},
        {name: 'Box Drill', icon: '⬜', duration: '30s'}
    ]}}
},
// === SLIDE 242 ===
{
    id: 'move-017', topic: 'Movement & Motor Skills', title: 'Speed Development',
    content: '<p>Speed can be improved through <strong>sprint training, plyometrics, proper running form, and strength development</strong>. Genetics set the ceiling, but training raises the floor.</p>',
    animation: { type: 'runner', hint: 'Click to increase speed!', config: { speed: 4 } }
},
// === SLIDE 243 ===
{
    id: 'move-018', topic: 'Movement & Motor Skills', title: 'Fine Motor Skills',
    content: '<p>Fine motor skills use <strong>small muscles</strong> for precise movements: writing, buttoning, tying shoes, playing an instrument. In PE: spin a ball, grip a racket, thread a needle.</p>',
    animation: { type: 'reaction-test', hint: 'Test your precision — fine motor skills in action!', config: {} }
},
// === SLIDE 244 ===
{
    id: 'move-019', topic: 'Movement & Motor Skills', title: 'Gross Motor Skills',
    content: '<p>Gross motor skills use <strong>large muscles</strong> for big movements: running, jumping, throwing, climbing. These develop first in childhood and form the basis for sports skills.</p>',
    animation: { type: 'warmup-sequence', hint: 'Click to see gross motor skills!', config: { exercises: [
        {name: 'Running', duration: 'Locomotor', desc: 'Legs, core, and arms working together'},
        {name: 'Jumping', duration: 'Explosive', desc: 'Legs generate power, arms assist'},
        {name: 'Throwing', duration: 'Upper body', desc: 'Arm, shoulder, core rotation'},
        {name: 'Climbing', duration: 'Full body', desc: 'Arms, legs, core working in coordination'},
        {name: 'Swimming', duration: 'Full body', desc: 'All limbs and core working rhythmically'}
    ]}}
},
// === SLIDE 245 ===
{
    id: 'move-020', topic: 'Movement & Motor Skills', title: 'Stages of Motor Learning',
    content: '<p>Learning a new skill follows three stages: <strong>cognitive (understanding), associative (practicing), and autonomous (automatic)</strong>.</p>',
    animation: { type: 'progress-bar', hint: 'See the stages of motor learning!', config: { bars: [
        {label: 'Cognitive — "What do I do?"', value: 30, color: 'red'},
        {label: 'Associative — "I\'m getting better"', value: 60, color: 'amber'},
        {label: 'Autonomous — "I do it without thinking"', value: 95, color: 'green'}
    ]}}
},
// === SLIDE 246 ===
{
    id: 'move-021', topic: 'Movement & Motor Skills', title: 'Practice Makes Permanent',
    content: '<p>Practice doesn\'t make perfect — <strong>practice makes permanent</strong>. Practicing with bad form creates bad habits. Always focus on correct technique first, then add speed and power.</p>',
    animation: { type: 'flip-cards', hint: 'Click for effective practice tips!', config: { cards: [
        {front: 'Quality > Quantity', back: '10 perfect reps beat 100 sloppy ones'},
        {front: 'Deliberate Practice', back: 'Focus on weaknesses, not just strengths'},
        {front: 'Feedback', back: 'Get coaching feedback to correct errors early'},
        {front: 'Consistency', back: 'Regular practice beats occasional marathon sessions'},
        {front: 'Visualization', back: 'Mental rehearsal improves physical performance'}
    ]}}
},
// === SLIDE 247 ===
{
    id: 'move-022', topic: 'Movement & Motor Skills', title: 'Feedback in Learning',
    content: '<p>Feedback helps you <strong>identify errors and improve</strong>. Intrinsic feedback comes from your body (how it felt). Extrinsic feedback comes from coaches, video, or data.</p>',
    animation: { type: 'quiz', hint: 'Test your knowledge!', config: {
        question: 'Which is an example of INTRINSIC feedback?',
        options: ['A coach says "bend your knees more"', 'You feel yourself losing balance during a turn', 'A video replay shows your form', 'A scorecard shows your time'],
        correct: 1,
        explanation: 'Intrinsic feedback comes from your own senses — feeling the movement. Extrinsic feedback comes from outside sources like coaches or technology.'
    }}
},
// === SLIDE 248 ===
{
    id: 'move-023', topic: 'Movement & Motor Skills', title: 'Transfer of Skills',
    content: '<p><span class="key-term">Transfer</span> is when learning one skill helps (positive) or hinders (negative) learning another. Tennis skills can transfer to badminton (positive transfer).</p>',
    animation: { type: 'match-pairs', hint: 'Match skills that transfer positively!', config: { pairs: [
        {a: 'Tennis forehand', b: 'Badminton forehand'},
        {a: 'Basketball dribble', b: 'Handball dribble'},
        {a: 'Soccer kicking', b: 'Football punting'},
        {a: 'Swimming flutter kick', b: 'Diving flutter kick'}
    ]}}
},
// === SLIDE 249 ===
{
    id: 'move-024', topic: 'Movement & Motor Skills', title: 'Movement Composition',
    content: '<p>Movement composition involves combining individual skills into <strong>fluid, creative sequences</strong>. Used in dance, gymnastics, martial arts, and figure skating.</p>',
    animation: { type: 'warmup-sequence', hint: 'Click to see a movement composition sequence!', config: { exercises: [
        {name: 'Start Position', duration: 'Still', desc: 'Begin with a strong, balanced starting pose'},
        {name: 'Locomotor Phase', duration: 'Travel', desc: 'Move across space with purpose and control'},
        {name: 'Level Change', duration: 'Dynamics', desc: 'Transition from high to low or vice versa'},
        {name: 'Balance Element', duration: 'Hold', desc: 'Hold a challenging balance for 3 seconds'},
        {name: 'Finishing Pose', duration: 'End', desc: 'Strong, clear ending position'}
    ]}}
},
// === SLIDE 250 ===
{
    id: 'move-025', topic: 'Movement & Motor Skills', title: 'Motor Skills Review',
    content: '<p>Let\'s review movement and motor skills!</p>',
    animation: { type: 'quiz', hint: 'Final motor skills quiz!', config: {
        question: 'Which of these is a MANIPULATIVE movement skill?',
        options: ['Balancing on one foot', 'Running', 'Twisting', 'Throwing a ball'],
        correct: 3,
        explanation: 'Throwing is a manipulative skill because it involves controlling an object. Running is locomotor, balancing and twisting are non-locomotor.'
    }}
}
);
