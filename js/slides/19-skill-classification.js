window.ALL_SLIDES = window.ALL_SLIDES || [];
window.ALL_SLIDES.push(
// ==========================================
// 3.1.2.1 SKILL, SKILL CONTINUUMS & TRANSFER
// ==========================================
// === SLIDE 346 ===
{
    id: 'skill-acq-001', topic: 'Skill Acquisition', title: 'What is Skill?',
    content: '<p><span class="key-term">Skill</span> is the learned ability to bring about predetermined results with maximum certainty, often with minimum outlay of time, energy, or both. A skilled performance is consistent, accurate, fluent, aesthetic, and efficient. Skill is <strong>not innate</strong> — it is developed through practice and experience.</p>',
    animation: { type: 'flip-cards', hint: 'Click to reveal the characteristics of skill!', config: { cards: [
        {front: 'Consistent', back: 'Skill produces the same result time after time, e.g. a basketball free throw'},
        {front: 'Accurate', back: 'Movements are precise and hit the intended target or outcome'},
        {front: 'Fluent', back: 'Movements flow smoothly without hesitation or jerky actions'},
        {front: 'Aesthetic', back: 'Skilled performance looks effortless and pleasing to watch'},
        {front: 'Efficient', back: 'Minimum energy expenditure for maximum output'},
        {front: 'Goal-directed', back: 'Every movement has a clear purpose linked to the task objective'}
    ]}}
},
// === SLIDE 347 ===
{
    id: 'skill-acq-002', topic: 'Skill Acquisition', title: 'Skill vs Ability',
    content: '<p><span class="key-term">Ability</span> is innate and genetically determined (e.g. reaction time, flexibility), whereas <span class="key-term">skill</span> is learned through practice. Abilities underpin skill — they are the building blocks. A performer needs the right combination of abilities to develop a particular skill.</p>',
    animation: { type: 'slider-compare', hint: 'Drag the slider to compare ability vs skill!', config: {
        leftLabel: 'Ability', rightLabel: 'Skill',
        leftItems: ['Innate/genetic', 'Stable & enduring', 'Underlying trait', 'e.g. hand-eye coordination', 'Foundation for skill'],
        rightItems: ['Learned through practice', 'Can be improved', 'Task-specific', 'e.g. tennis serve', 'Built on abilities']
    }}
},
// === SLIDE 348 ===
{
    id: 'skill-acq-003', topic: 'Skill Acquisition', title: 'Open — Closed Continuum',
    content: '<p>The <span class="key-term">open–closed continuum</span> classifies skills based on the <strong>predictability of the environment</strong>. <strong>Open skills</strong> are performed in unpredictable, changing environments (e.g. dribbling in football). <strong>Closed skills</strong> are performed in stable, predictable environments (e.g. a gymnastics routine).</p>',
    animation: { type: 'interactive-continuum', hint: 'Drag the slider to place skills on the open–closed continuum!', config: { scales: [
        {label: 'Open — Closed', left: 'Open', right: 'Closed', value: 20, example: 'Football dribble (open)'},
        {label: 'Rugby tackle vs Free throw', left: 'Open (tackle)', right: 'Closed (free throw)', value: 80, example: 'Free throw (closed)'}
    ]}}
},
// === SLIDE 349 ===
{
    id: 'skill-acq-004', topic: 'Skill Acquisition', title: 'Discrete — Serial — Continuous',
    content: '<p>Skills can be classified by how they are <strong>organised over time</strong>. <span class="key-term">Discrete</span> skills have a clear beginning and end (e.g. penalty kick). <span class="key-term">Serial</span> skills are a series of discrete skills linked together (e.g. triple jump). <span class="key-term">Continuous</span> skills have no clear beginning or end (e.g. cycling).</p>',
    animation: { type: 'interactive-continuum', hint: 'Drag to explore the discrete–continuous continuum!', config: { scales: [
        {label: 'Discrete — Continuous', left: 'Discrete', right: 'Continuous', value: 0, example: 'Penalty kick (discrete)'},
        {label: 'Serial sits in the middle', left: 'Discrete', right: 'Continuous', value: 50, example: 'Triple jump (serial)'},
        {label: 'Cycling example', left: 'Discrete', right: 'Continuous', value: 95, example: 'Cycling (continuous)'}
    ]}}
},
// === SLIDE 350 ===
{
    id: 'skill-acq-005', topic: 'Skill Acquisition', title: 'Gross — Fine Continuum',
    content: '<p>The <span class="key-term">gross–fine continuum</span> classifies skills by the <strong>precision of movement</strong>. <strong>Gross skills</strong> use large muscle groups and big movements (e.g. sprinting, tackling). <strong>Fine skills</strong> require precise, intricate movements using small muscle groups (e.g. snooker shot, dart throw).</p>',
    animation: { type: 'interactive-continuum', hint: 'Drag to explore gross vs fine motor skills!', config: { scales: [
        {label: 'Gross — Fine', left: 'Gross', right: 'Fine', value: 10, example: 'Sprinting (gross)'},
        {label: 'Throwing example', left: 'Gross (shot put)', right: 'Fine (dart)', value: 85, example: 'Dart throw (fine)'},
        {label: 'Swimming vs Archery', left: 'Gross (swimming)', right: 'Fine (archery)', value: 55, example: 'Somewhere in between'}
    ]}}
},
// === SLIDE 351 ===
{
    id: 'skill-acq-006', topic: 'Skill Acquisition', title: 'Self-paced — Externally Paced',
    content: '<p><span class="key-term">Self-paced skills</span> are controlled by the performer who decides when to start (e.g. a tennis serve, javelin throw). <span class="key-term">Externally paced skills</span> are controlled by the environment or opponents — the performer must react (e.g. receiving a serve in tennis, marking in football).</p>',
    animation: { type: 'interactive-continuum', hint: 'Drag to classify pacing of skills!', config: { scales: [
        {label: 'Self-paced — Externally paced', left: 'Self-paced', right: 'Externally paced', value: 10, example: 'Tennis serve (self-paced)'},
        {label: 'Receiving a serve', left: 'Self-paced', right: 'Externally paced', value: 90, example: 'Return of serve (externally paced)'}
    ]}}
},
// === SLIDE 352 ===
{
    id: 'skill-acq-007', topic: 'Skill Acquisition', title: 'Simple — Complex & High — Low Organisation',
    content: '<p><span class="key-term">Simple skills</span> require few decisions and are straightforward (e.g. sprint start). <span class="key-term">Complex skills</span> involve many decisions and sub-routines (e.g. passing in rugby under pressure). <strong>High organisation</strong> skills cannot easily be broken into parts (swimming stroke). <strong>Low organisation</strong> skills can be practised in parts (dance routine).</p>',
    animation: { type: 'interactive-continuum', hint: 'Drag to explore complexity and organisation!', config: { scales: [
        {label: 'Simple — Complex', left: 'Simple', right: 'Complex', value: 15, example: 'Sprint start (simple)'},
        {label: 'Low — High Organisation', left: 'Low', right: 'High', value: 85, example: 'Swimming stroke (high org.)'}
    ]}}
},
// === SLIDE 353 ===
{
    id: 'skill-acq-008', topic: 'Skill Acquisition', title: 'Justifying Skill Placement',
    content: '<p>In AQA A-level PE, you must <strong>justify</strong> why a skill is placed at a particular point on each continuum. Use specific examples and explain the <strong>environmental factors, movement demands, pacing,</strong> and <strong>decision complexity</strong> involved.</p>',
    animation: { type: 'quiz', hint: 'Test your continuum knowledge!', config: {
        question: 'Where would a goalkeeper saving a penalty be placed on the open-closed continuum?',
        options: ['Fully closed — predictable', 'Mostly open — unpredictable environment', 'Fully open — no environmental factors', 'In the middle — neither open nor closed'],
        correct: 1,
        explanation: 'A goalkeeper saving a penalty is mostly open because the environment is unpredictable — they must react to the kicker\'s shot direction, speed, and placement, with very little time to process.'
    }}
},
// === SLIDE 354 ===
{
    id: 'skill-acq-009', topic: 'Skill Acquisition', title: 'Transfer of Learning — Overview',
    content: '<p><span class="key-term">Transfer of learning</span> occurs when learning in one context influences learning or performance in another. It is crucial for coaches to understand transfer so they can design practice that <strong>maximises positive transfer</strong> and minimises negative transfer between skills.</p>',
    animation: { type: 'flip-cards', hint: 'Click to reveal each type of transfer!', config: { cards: [
        {front: 'Positive Transfer', back: 'One skill helps learning another. e.g. Throwing in cricket helps throwing in rounders.'},
        {front: 'Negative Transfer', back: 'One skill hinders learning another. e.g. Badminton wrist action hinders tennis technique.'},
        {front: 'Zero Transfer', back: 'One skill has no effect on another. e.g. Swimming does not affect archery.'},
        {front: 'Bilateral Transfer', back: 'Transfer from one limb to the other. e.g. Practising left-foot kicking improves right-foot kicking.'}
    ]}}
},
// === SLIDE 355 ===
{
    id: 'skill-acq-010', topic: 'Skill Acquisition', title: 'Positive & Negative Transfer in Detail',
    content: '<p><strong>Positive transfer</strong> is most likely when skills share similar movement patterns (e.g. overarm throw in handball → javelin). <strong>Negative transfer</strong> occurs when similar-looking skills require different timing or technique (e.g. tennis → badminton grip). Coaches should <strong>highlight similarities</strong> to promote positive transfer and point out differences to avoid negative transfer.</p>',
    animation: { type: 'drag-sort', hint: 'Drag to sort these into positive or negative transfer examples!', config: {
        items: ['Tennis → badminton (NEGATIVE — different grip/wrist)', 'Netball → basketball passing (POSITIVE — similar technique)', 'Trampolining → diving (POSITIVE — spatial awareness)', 'Squash → tennis (NEGATIVE — different swing path)', 'Rugby → American football (POSITIVE — similar passing/tackling)'],
        correctOrder: ['Netball → basketball passing (POSITIVE — similar technique)', 'Trampolining → diving (POSITIVE — spatial awareness)', 'Rugby → American football (POSITIVE — similar passing/tackling)', 'Tennis → badminton (NEGATIVE — different grip/wrist)', 'Squash → tennis (NEGATIVE — different swing path)']
    }}
},
// === SLIDE 356 ===
{
    id: 'skill-acq-011', topic: 'Skill Acquisition', title: 'Bilateral & Zero Transfer',
    content: '<p><span class="key-term">Bilateral transfer</span> is the transfer of learning from one limb to the other side of the body. A coach may train a footballer\'s weaker foot by practising with the dominant foot first. <span class="key-term">Zero transfer</span> occurs when two skills are completely unrelated (e.g. swimming and chess).</p>',
    animation: { type: 'quiz', hint: 'Test your transfer knowledge!', config: {
        question: 'A basketball player practises dribbling with their right hand, then finds it easier to dribble left-handed. What type of transfer is this?',
        options: ['Positive transfer', 'Negative transfer', 'Bilateral transfer', 'Zero transfer'],
        correct: 2,
        explanation: 'This is bilateral transfer — the skill transfers from one limb (right hand) to the opposite limb (left hand). This is common when the motor programme can be adapted across limbs.'
    }}
},
// ==========================================
// 3.1.2.2 IMPACT OF SKILL CLASSIFICATION ON PRACTICE
// ==========================================
// === SLIDE 357 ===
{
    id: 'skill-acq-012', topic: 'Skill Acquisition', title: 'Methods of Presenting Practice',
    content: '<p>How a skill is presented in practice depends on its classification. There are three methods: <span class="key-term">whole practice</span> (perform the entire skill), <span class="key-term">progressive part</span> (learn parts then chain together), and <span class="key-term">whole–part–whole</span> (try whole, isolate weak part, try whole again).</p>',
    animation: { type: 'flow-diagram', hint: 'Click each method to learn when to use it!', config: {
        title: 'Methods of Presenting Practice',
        steps: [
            {label: 'Whole', detail: 'Practise the entire skill as one unit. Best for SIMPLE, HIGHLY ORGANISED, FAST skills (e.g. sprinting, cycling). Maintains the feel and flow of the movement.'},
            {label: 'Progressive Part', detail: 'Learn sub-routines separately, then chain them together. Best for SERIAL, LOW ORGANISATION skills (e.g. swimming strokes — arms first, then legs, then combine). Also called chaining.'},
            {label: 'Whole–Part–Whole', detail: 'Attempt the whole skill → identify a weak element → practise it in isolation → put it back into the whole. Best for COMPLEX skills where you need to identify weaknesses (e.g. tennis serve — isolate ball toss).'}
        ]
    }}
},
// === SLIDE 358 ===
{
    id: 'skill-acq-013', topic: 'Skill Acquisition', title: 'Types of Practice — Massed & Distributed',
    content: '<p><span class="key-term">Massed practice</span> is continuous with no rest intervals — best for SIMPLE, DISCRETE skills and fit/motivated performers (e.g. practising penalty kicks repeatedly). <span class="key-term">Distributed practice</span> includes rest intervals or alternative activities between attempts — best for beginners, complex skills, and when fatigue is a concern.</p>',
    animation: { type: 'slider-compare', hint: 'Drag slider to compare massed vs distributed practice!', config: {
        leftLabel: 'Massed Practice', rightLabel: 'Distributed Practice',
        leftItems: ['No rest intervals', 'Continuous repetition', 'Simple, discrete skills', 'Experienced performers', 'Builds physical fitness too'],
        rightItems: ['Rest intervals included', 'Time for mental rehearsal', 'Complex skills', 'Beginners & young learners', 'Reduces fatigue effects']
    }}
},
// === SLIDE 359 ===
{
    id: 'skill-acq-014', topic: 'Skill Acquisition', title: 'Variable & Mental Practice',
    content: '<p><span class="key-term">Variable practice</span> involves changing the practice conditions (e.g. batting against different bowlers, speeds, pitches). It develops adaptable performers and builds <strong>schema</strong>. <span class="key-term">Mental practice/rehearsal</span> is creating a mental image of the skill without physical movement. It strengthens neural pathways, builds confidence, and is effective before competition.</p>',
    animation: { type: 'flip-cards', hint: 'Click to explore variable and mental practice!', config: { cards: [
        {front: 'Variable Practice', back: 'Changing conditions, environments, or opponents. Develops adaptability. Best for open skills. Builds motor programmes.'},
        {front: 'Mental Rehearsal', back: 'Visualising the skill in your mind. Strengthens neural pathways. Improves confidence and focus. Used by elite athletes.'},
        {front: 'When to use Variable?', back: 'Open skills, experienced performers, building schema/adaptability (e.g. football drills with varying defenders)'},
        {front: 'When to use Mental?', back: 'Before competition, during injury recovery, alongside physical practice, for complex/dangerous skills (e.g. ski jumping)'}
    ]}}
},
// === SLIDE 360 ===
{
    id: 'skill-acq-015', topic: 'Skill Acquisition', title: 'Matching Practice to Skill Classification',
    content: '<p>A key AQA requirement: understand how <strong>skill classification informs practice structure</strong>. Open skills need variable practice. Closed skills suit massed/fixed practice. Low organisation → part practice. High organisation → whole practice. Beginners → distributed. Experts → massed.</p>',
    animation: { type: 'match-pairs', hint: 'Match the skill type to its best practice method!', config: { pairs: [
        {a: 'Open skill', b: 'Variable practice'},
        {a: 'Closed skill', b: 'Massed/fixed practice'},
        {a: 'Low organisation', b: 'Part/progressive practice'},
        {a: 'High organisation', b: 'Whole practice'},
        {a: 'Beginner learner', b: 'Distributed practice'},
        {a: 'Complex skill', b: 'Whole–part–whole'}
    ]}}
},
// === SLIDE 361 ===
{
    id: 'skill-acq-016', topic: 'Skill Acquisition', title: 'Skill Acquisition — Practice Quiz',
    content: '<p>Test your understanding of skill classification and practice methods!</p>',
    animation: { type: 'quiz', hint: 'Choose the best answer!', config: {
        question: 'A coach is teaching a complex gymnastics floor routine (serial, low organisation) to beginners. Which combination of practice methods is most appropriate?',
        options: [
            'Whole practice with massed repetition',
            'Progressive part practice with distributed sessions',
            'Mental practice only',
            'Variable practice with massed sessions'
        ],
        correct: 1,
        explanation: 'Progressive part practice allows beginners to learn sub-routines separately before chaining them together (ideal for serial, low organisation skills). Distributed sessions include rest to prevent fatigue and allow cognitive processing — essential for beginners learning complex skills.'
    }}
}
);
