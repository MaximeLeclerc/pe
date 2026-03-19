window.ALL_SLIDES = window.ALL_SLIDES || [];
window.ALL_SLIDES.push(
// ==========================================
// 3.1.2.5.1 GENERAL INFORMATION PROCESSING MODEL
// ==========================================
// === SLIDE 374 ===
{
    id: 'memory-001', topic: 'Memory Models', title: 'Information Processing — Overview',
    content: '<p>The <span class="key-term">information processing model</span> compares the brain to a computer. Information flows through stages: <strong>Input → Decision making → Output → Feedback</strong>. The performer receives sensory information, processes it, selects a response, and executes it.</p>',
    animation: { type: 'info-processing', hint: 'Click each stage to explore the model!', config: {
        title: 'General Information Processing Model',
        stages: [
            {label: 'Input', detail: 'Information enters through the senses (sight, hearing, touch, proprioception). The display is everything in the environment the performer could detect.'},
            {label: 'Senses', detail: 'The sensory receptors detect stimuli: eyes (vision), ears (audition), touch (tactile), proprioceptors (body position/movement). Multiple senses work together.'},
            {label: 'Perception', detail: 'The brain interprets sensory information. Involves the DCR process: Detection (sensing stimulus), Comparison (matching to memory), Recognition (identifying what it is).'},
            {label: 'Decision Making', detail: 'Selecting the appropriate response from memory. Uses short-term and long-term memory. Influenced by experience, reaction time, and number of choices.'},
            {label: 'Output', detail: 'The motor programme is sent to the muscles via the effector mechanism. The response is executed — the physical movement.'},
            {label: 'Feedback', detail: 'Information about the outcome and movement quality returns to the performer. Both intrinsic (kinaesthetic) and extrinsic (coach/results).'}
        ],
        feedback: 'Feedback Loop — information returns to input',
        feedbackDetail: 'Feedback is continuously fed back to modify future input, perception, and decision making. This creates a closed-loop system for ongoing skill refinement.'
    }}
},
// === SLIDE 375 ===
{
    id: 'memory-002', topic: 'Memory Models', title: 'Input — Senses, Receptors & Proprioception',
    content: '<p>The <span class="key-term">input</span> stage involves sensory receptors detecting information from the <strong>display</strong> (the sporting environment). <span class="key-term">Proprioceptors</span> are specialised receptors in muscles, tendons, and joints that detect body position and movement — essential for kinaesthetic awareness without looking.</p>',
    animation: { type: 'flip-cards', hint: 'Click to explore each sensory input!', config: { cards: [
        {front: 'Vision (Sight)', back: 'Detects ball flight, opponent position, teammates, playing area. Primary sense in most sports. Processed fastest by the brain.'},
        {front: 'Audition (Hearing)', back: 'Starter\'s gun, coach instructions, teammate calls, bat hitting ball. Important for timing and communication.'},
        {front: 'Touch (Tactile)', back: 'Feel of the ball, racket grip, contact with opponents. Important for control skills and detecting pressure.'},
        {front: 'Proprioception', back: 'Internal body awareness. Receptors in muscles, tendons, joints detect limb position, force, and speed. Essential for skilled movement without visual reference.'},
        {front: 'Equilibrium', back: 'Balance receptors in the inner ear (vestibular system). Crucial for gymnastics, diving, ice skating — any skill involving rotation or inversion.'}
    ]}}
},
// === SLIDE 376 ===
{
    id: 'memory-003', topic: 'Memory Models', title: 'Perception — The DCR Process & Selective Attention',
    content: '<p><span class="key-term">Perception</span> interprets sensory information. The <strong>DCR process</strong>: <strong>Detection</strong> (identifying a stimulus exists), <strong>Comparison</strong> (matching it against stored experiences in memory), <strong>Recognition</strong> (identifying what the stimulus is). <span class="key-term">Selective attention</span> filters relevant from irrelevant information to prevent overload.</p>',
    animation: { type: 'flow-diagram', hint: 'Click each stage of the DCR process!', config: {
        title: 'DCR Process & Selective Attention',
        steps: [
            {label: 'Detection', detail: 'The performer detects that a stimulus exists. E.g. a tennis player detects the ball has been served (visual + auditory input).'},
            {label: 'Comparison', detail: 'The detected stimulus is compared against stored memories and past experiences. "Is this similar to serves I\'ve seen before?"'},
            {label: 'Recognition', detail: 'The performer identifies what the stimulus is. "This is a fast, flat serve aimed at my backhand side."'},
            {label: 'Selective Attention', detail: 'Filters relevant information (ball flight, speed) and ignores irrelevant stimuli (crowd noise, advertising boards). Essential for focus.'}
        ]
    }}
},
// === SLIDE 377 ===
{
    id: 'memory-004', topic: 'Memory Models', title: 'Short-Term & Long-Term Memory',
    content: '<p><span class="key-term">Short-term memory (STM)</span> holds ~7 items for 20-30 seconds — the "workspace" for current processing. <span class="key-term">Long-term memory (LTM)</span> has unlimited capacity and stores motor programmes, past experiences, and strategies permanently. Rehearsal transfers information from STM to LTM.</p>',
    animation: { type: 'slider-compare', hint: 'Drag to compare STM vs LTM!', config: {
        leftLabel: 'Short-Term Memory', rightLabel: 'Long-Term Memory',
        leftItems: ['Capacity: ~7 items', 'Duration: 20-30 seconds', 'Current "workspace"', 'Info lost if not rehearsed', 'Where decisions are made'],
        rightItems: ['Capacity: unlimited', 'Duration: permanent', 'Stores motor programmes', 'Built through repetition', 'Retrieval gets faster with practice']
    }}
},
// === SLIDE 378 ===
{
    id: 'memory-005', topic: 'Memory Models', title: 'Baddeley & Hitch Working Memory Model',
    content: '<p>The <span class="key-term">Working Memory Model (Baddeley & Hitch, 1974)</span> replaced the simple STM concept. It has multiple components that process different types of information simultaneously, coordinated by the <strong>Central Executive</strong>.</p>',
    animation: { type: 'memory-model', hint: 'Click each component to learn its function!', config: {
        title: 'Baddeley & Hitch Working Memory Model',
        components: [
            {label: 'Central Executive', icon: '🎯', color: '#2563eb', detail: 'The "boss" — directs attention, coordinates the slave systems, and allocates processing resources. Limited capacity. Decides what to focus on. In sport: decides which cues to attend to during a game.'},
            {label: 'Phonological Loop', icon: '🔊', color: '#7c3aed', detail: 'Processes auditory/verbal information. Has two parts: phonological store (inner ear) and articulatory process (inner voice — rehearses info). In sport: repeating coaching cues in your head.'},
            {label: 'Visuo-Spatial Sketchpad', icon: '👁️', color: '#059669', detail: 'Processes visual and spatial information — the "inner eye." Creates and manipulates mental images. In sport: visualising a set play, imagining the flight path of a ball, spatial awareness of pitch positions.'},
            {label: 'Episodic Buffer', icon: '📋', color: '#d97706', detail: 'Integrates information from the other components and LTM into a single coherent episode. Acts as a temporary store. In sport: combining visual, verbal, and kinaesthetic information during a complex play.'}
        ]
    }}
},
// === SLIDE 379 ===
{
    id: 'memory-006', topic: 'Memory Models', title: 'Working Memory in Sport',
    content: '<p>Each component of working memory plays a vital role in sport. The <strong>central executive</strong> is crucial when making split-second decisions under pressure, while the <strong>visuo-spatial sketchpad</strong> is essential for reading the game and anticipating movement.</p>',
    animation: { type: 'quiz', hint: 'Apply your knowledge of working memory!', config: {
        question: 'A football midfielder receives the ball, hears a teammate call, visualises their position on the pitch, and decides to play a through-ball. Which component of working memory coordinates this?',
        options: ['Phonological loop', 'Visuo-spatial sketchpad', 'Central executive', 'Episodic buffer'],
        correct: 2,
        explanation: 'The Central Executive coordinates all the other components. It directs attention to the relevant cues (teammate call via phonological loop, pitch positions via visuo-spatial sketchpad) and makes the final decision about which action to take.'
    }}
},
// ==========================================
// 3.1.2.5.2 EFFICIENCY OF INFORMATION PROCESSING
// ==========================================
// === SLIDE 380 ===
{
    id: 'memory-007', topic: 'Memory Models', title: 'Whiting\'s Information Processing Model',
    content: '<p><span class="key-term">Whiting\'s model (1969)</span> is a detailed information processing model applied to sport. It shows how the performer interacts with the environment through a continuous loop: Environment → Display → Receptors → Perceptual mechanism → Translatory mechanism → Effector mechanism → Muscular system → Output → Feedback.</p>',
    animation: { type: 'info-processing', hint: 'Click each stage of Whiting\'s model!', config: {
        title: "Whiting's Information Processing Model",
        stages: [
            {label: 'Environment', detail: 'The full surroundings in which the performer operates — pitch, opponents, weather, ball, teammates. Everything potentially available to detect.'},
            {label: 'Display', detail: 'The specific part of the environment the performer can detect at that moment — relevant cues that are available for processing.'},
            {label: 'Sensory Organs', detail: 'Receptors (eyes, ears, proprioceptors) that detect information from the display and convert it to neural signals.'},
            {label: 'Perceptual Mechanism', detail: 'Interprets the sensory information using selective attention and the DCR process. Filters relevant from irrelevant information.'},
            {label: 'Translatory Mechanism', detail: 'Translates the perceived information into a decision. Selects the appropriate motor programme from LTM. "What should I do?"'},
            {label: 'Effector Mechanism', detail: 'Organises the motor programme and sends signals to the muscular system. Determines which muscles to contract, in what order, with how much force.'},
            {label: 'Muscular System', detail: 'The muscles execute the movement — the physical output. The quality depends on the motor programme selected and physical capabilities.'}
        ],
        feedback: 'Feedback Data — returns to sensory organs',
        feedbackDetail: 'Both intrinsic (proprioceptive, kinaesthetic) and extrinsic (visual results, coach feedback) information loops back continuously to modify subsequent processing.'
    }}
},
// === SLIDE 381 ===
{
    id: 'memory-008', topic: 'Memory Models', title: 'Reaction Time, Response Time & Movement Time',
    content: '<p>Three key timing definitions: <span class="key-term">Reaction time</span> = time from stimulus to initiation of response. <span class="key-term">Movement time</span> = time taken to complete the movement. <span class="key-term">Response time</span> = reaction time + movement time. <strong>Simple RT</strong> involves one stimulus/one response. <strong>Choice RT</strong> involves multiple stimuli/responses.</p>',
    animation: { type: 'reaction-test', hint: 'Test your reaction time! Click when the colour changes!', config: {}}
},
// === SLIDE 382 ===
{
    id: 'memory-009', topic: 'Memory Models', title: 'Hick\'s Law',
    content: '<p><span class="key-term">Hick\'s Law</span> states that <strong>reaction time increases as the number of stimulus-response alternatives increases</strong>. The relationship is logarithmic: RT = a + b × log₂(n), where n = number of choices. In sport, this means giving an opponent more options to think about slows their response.</p>',
    animation: { type: 'hicks-law', hint: 'Experience Hick\'s Law! React to the highlighted button as choices increase!', config: {
        title: "Hick's Law — More choices = slower reaction time"
    }}
},
// === SLIDE 383 ===
{
    id: 'memory-010', topic: 'Memory Models', title: 'Psychological Refractory Period (PRP)',
    content: '<p>The <span class="key-term">Psychological Refractory Period</span> is the delay in processing a second stimulus when a first stimulus is still being processed. The brain can only process one stimulus at a time (<strong>single channel hypothesis</strong>). Athletes exploit this through feints and dummies — the defender begins processing S1 and cannot respond quickly to S2.</p>',
    animation: { type: 'prp-demo', hint: 'Experience the PRP! Click S1 then S2 quickly — notice the delay!', config: {
        title: 'Psychological Refractory Period — Single Channel Hypothesis'
    }}
},
// === SLIDE 384 ===
{
    id: 'memory-011', topic: 'Memory Models', title: 'Factors Affecting Response Time',
    content: '<p>Multiple factors affect how quickly a performer can respond. Understanding these helps coaches design practice to improve speed of response and helps performers exploit opponents\' weaknesses.</p>',
    animation: { type: 'flip-cards', hint: 'Click to explore factors affecting response time!', config: { cards: [
        {front: 'Number of Choices', back: 'More S-R alternatives = slower RT (Hick\'s Law). A dummy/feint exploits this by adding false stimuli.'},
        {front: 'Stimulus Intensity', back: 'Louder/brighter/larger stimuli are detected faster. A powerful shot is harder to react to but a bright ball is easier.'},
        {front: 'Experience & Practice', back: 'Experienced performers have faster RT through anticipation, stored motor programmes, and chunking.'},
        {front: 'Anticipation', back: 'Predicting what will happen before it occurs — temporal (when) and spatial (where). Reduces RT significantly.'},
        {front: 'Arousal Level', back: 'Optimal arousal produces fastest RT (inverted U). Too much or too little arousal slows processing.'},
        {front: 'Age & Gender', back: 'RT peaks in early adulthood (20s). Slows with age. Males tend to have slightly faster RT on average.'}
    ]}}
},
// === SLIDE 385 ===
{
    id: 'memory-012', topic: 'Memory Models', title: 'Anticipation — Temporal & Spatial',
    content: '<p><span class="key-term">Temporal anticipation</span> is predicting <strong>when</strong> something will happen (e.g. timing a sprint start to the gun). <span class="key-term">Spatial anticipation</span> is predicting <strong>where</strong> something will happen (e.g. reading body language to predict shot direction). Both reduce effective reaction time.</p>',
    animation: { type: 'slider-compare', hint: 'Drag to compare temporal vs spatial anticipation!', config: {
        leftLabel: 'Temporal Anticipation', rightLabel: 'Spatial Anticipation',
        leftItems: ['Predicts WHEN', 'Timing of the stimulus', 'Sprint start timing', 'Rhythmic patterns', 'Penalty kick timing'],
        rightItems: ['Predicts WHERE', 'Location/direction', 'Reading body language', 'Goalkeeper diving early', 'Reading a bowler\'s action']
    }}
},
// === SLIDE 386 ===
{
    id: 'memory-013', topic: 'Memory Models', title: 'Strategies to Improve Response Time',
    content: '<p>Coaches and performers can use various strategies to improve response time, giving a competitive advantage. These strategies work by improving anticipation, reducing processing demands, or increasing stimulus familiarity.</p>',
    animation: { type: 'drag-sort', hint: 'Drag to rank these strategies from most to least effective for improving RT!', config: {
        items: ['Practise anticipation with video analysis', 'Improve physical fitness and alertness', 'Use mental rehearsal before performance', 'Learn to read opponents\' body language', 'Reduce number of response options (simplify)'],
        correctOrder: ['Learn to read opponents\' body language', 'Practise anticipation with video analysis', 'Use mental rehearsal before performance', 'Reduce number of response options (simplify)', 'Improve physical fitness and alertness']
    }}
},
// === SLIDE 387 ===
{
    id: 'memory-014', topic: 'Memory Models', title: 'Schmidt\'s Schema Theory',
    content: '<p><span class="key-term">Schmidt\'s Schema Theory (1975)</span> proposes that instead of storing a separate motor programme for every variation of a skill, we store a generalised motor programme (GMP) and adapt it using <strong>schemas</strong> — rules derived from past movement experience.</p>',
    animation: { type: 'schema-theory', hint: 'Click each schema source to learn about it!', config: {
        title: "Schmidt's Schema Theory",
        schemas: [
            {label: 'Initial Conditions', detail: 'Information about the starting position and environment BEFORE the movement. "Where am I? Where is the target? What is the situation?" Stored from each practice attempt.'},
            {label: 'Response Specifications', detail: 'What the performer decided to do — the parameters of the movement (force, speed, direction, timing). The specific "instructions" given to the motor programme.'},
            {label: 'Sensory Consequences', detail: 'How the movement FELT (kinaesthetic feedback). "What did it feel like when I threw the ball that far?" Recall schema — used to plan future movements.'},
            {label: 'Response Outcomes', detail: 'What actually happened — the result. "Did the ball hit the target?" Recognition schema — used to evaluate movement during/after execution.'}
        ]
    }}
},
// === SLIDE 388 ===
{
    id: 'memory-015', topic: 'Memory Models', title: 'Recall & Recognition Schemas',
    content: '<p>Schmidt identified two types of schema: <span class="key-term">Recall schema</span> (used BEFORE movement — plans and initiates the action using initial conditions + response specifications) and <span class="key-term">Recognition schema</span> (used DURING/AFTER movement — evaluates the action using sensory consequences + response outcomes).</p>',
    animation: { type: 'flow-diagram', hint: 'Click to explore recall vs recognition schemas!', config: {
        title: 'Recall vs Recognition Schema',
        steps: [
            {label: 'Initial Conditions', detail: 'Starting point info stored from past experiences. Input to the recall schema.'},
            {label: 'Response Specs', detail: 'Parameters chosen (force, direction, timing). Input to the recall schema.'},
            {label: 'RECALL Schema', detail: 'Plans and INITIATES movement. Uses initial conditions + response specifications. "What do I need to do?" Used BEFORE action.'},
            {label: 'Movement Executed', detail: 'The motor programme runs. Muscles contract and produce the physical action.'},
            {label: 'RECOGNITION Schema', detail: 'EVALUATES movement. Compares expected sensory consequences with actual response outcomes. "Did it feel/go right?" Used DURING/AFTER action.'}
        ],
        feedbackLoop: true, feedbackLabel: 'Schema updated with new experience'
    }}
},
// === SLIDE 389 ===
{
    id: 'memory-016', topic: 'Memory Models', title: 'Schema Theory in Sporting Contexts',
    content: '<p>Schema theory explains why <strong>variable practice</strong> is so important — the more varied movement experiences, the richer the schema. It also explains how performers can adapt to new situations they\'ve never encountered before.</p>',
    animation: { type: 'social-theory', hint: 'Navigate through sporting examples of schema theory!', config: {
        title: 'Schema Theory Applied to Sport',
        theories: [
            {name: 'Variable Practice Builds Schema', detail: 'Practising a pass at different distances, speeds, and angles creates a richer schema than practising the same pass repeatedly. More varied experiences = more adaptable performer.', example: 'A footballer practising crosses from different positions, with both feet, at varying pace builds schema for adapting in matches.'},
            {name: 'Adapting to Novel Situations', detail: 'A strong schema allows performers to attempt movements they\'ve never done before by combining stored parameters in new ways.', example: 'A tennis player facing an unusual spin can adapt their return because they have a rich schema of different ball flights from practice.'},
            {name: 'Why Beginners Struggle', detail: 'Beginners have limited schema — few stored experiences to draw upon. They cannot easily adapt because their recall and recognition schemas are underdeveloped.', example: 'A novice cricketer cannot adjust to different bowling speeds because they have limited experience to build schema from.'},
            {name: 'Implications for Coaching', detail: 'Coaches should provide varied practice, not just blocked repetition. Encourage problem-solving. Use game-based learning to build rich schemas across many movement contexts.', example: 'Rather than 50 identical free kicks, practise from different distances, angles, and with different walls/goalkeepers.'}
        ]
    }}
},
// === SLIDE 390 ===
{
    id: 'memory-017', topic: 'Memory Models', title: 'Strategies to Improve Information Processing',
    content: '<p>Performers and coaches can use specific strategies at each stage of information processing to speed up decision making and improve output quality.</p>',
    animation: { type: 'info-processing', hint: 'Click each strategy area!', config: {
        title: 'Strategies to Improve Information Processing',
        stages: [
            {label: 'Selective Attention', detail: 'INPUT stage: Train performers to focus on relevant cues and ignore distractions. Use drills that highlight key stimuli. Practice in noisy environments to develop filtering.'},
            {label: 'Chunking', detail: 'DECISION stage: Group individual pieces of information into meaningful units. E.g. reading a whole play pattern as one "chunk" rather than tracking each player individually.'},
            {label: 'Chaining', detail: 'DECISION stage: Link sub-routines together into a sequence that flows automatically. Each element triggers the next. Reduces decision-making demands.'},
            {label: 'Reduce RT', detail: 'DECISION stage: Practice responses to specific stimuli until they become automatic. Use Hick\'s Law — simplify choices. Develop anticipation through experience.'},
            {label: 'Build Schema', detail: 'DECISION stage: Use variable practice to create rich, adaptable motor programmes. The more experience stored, the faster and better the decision-making process.'},
            {label: 'Mental Rehearsal', detail: 'ALL stages: Visualise the whole process — input, decisions, and output — before performing. Strengthens neural pathways and speeds processing.'}
        ]
    }}
},
// === SLIDE 391 ===
{
    id: 'memory-018', topic: 'Memory Models', title: 'Memory Models — Review Quiz',
    content: '<p>Test your understanding of information processing and memory models!</p>',
    animation: { type: 'quiz', hint: 'Choose the best answer!', config: {
        question: 'A rugby player feints to pass left, then quickly passes right. The defender is caught off-guard and reacts late. Which concept best explains the defender\'s delayed response?',
        options: [
            'Hick\'s Law — too many choices',
            'Psychological Refractory Period — still processing the first stimulus',
            'Poor selective attention — distracted by crowd',
            'Weak long-term memory — cannot recall motor programme'
        ],
        correct: 1,
        explanation: 'The Psychological Refractory Period (PRP) explains this. The defender begins processing the feint (S1) and selects a response. When the real pass (S2) comes before S1 is fully processed, there is a delay because the single channel can only process one stimulus at a time. This is why dummies and feints are so effective!'
    }}
}
);
