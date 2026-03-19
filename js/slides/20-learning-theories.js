window.ALL_SLIDES = window.ALL_SLIDES || [];
window.ALL_SLIDES.push(
// ==========================================
// 3.1.2.3 PRINCIPLES AND THEORIES OF LEARNING
// ==========================================
// === SLIDE 362 ===
{
    id: 'learn-001', topic: 'Learning Theories', title: 'Stages of Learning — Overview',
    content: '<p>Fitts and Posner (1967) proposed three stages of learning: <span class="key-term">Cognitive</span> (understanding), <span class="key-term">Associative</span> (practising), and <span class="key-term">Autonomous</span> (automatic). Each stage requires different types of feedback and guidance to support progress.</p>',
    animation: { type: 'learning-curve', hint: 'Click on each stage of the curve to learn about it!', config: {
        stages: [
            {name: 'Cognitive', x1: 0, x2: 0.25, color: '#ef4444', detail: 'Beginner stage. Performer tries to understand the skill. Many errors, inconsistent. Needs lots of demonstrations, simple verbal guidance, and positive feedback. Relies on visual guidance.'},
            {name: 'Associative', x1: 0.25, x2: 0.6, color: '#f59e0b', detail: 'Practice stage. Performer refines the skill through repetition. Fewer errors, more consistency. Feedback shifts to knowledge of performance (KP). Motor programmes developing.'},
            {name: 'Plateau', x1: 0.6, x2: 0.75, color: '#64748b', detail: 'Period where performance levels off despite continued practice. Can be caused by fatigue, boredom, lack of motivation, or reaching ability limits. Needs new goals, variable practice, or extrinsic motivation.'},
            {name: 'Autonomous', x1: 0.75, x2: 1, color: '#22c55e', detail: 'Expert stage. Skill is automatic — performer can focus on strategy. Minimal errors, highly consistent. Intrinsic feedback dominates. Can perform under pressure with little conscious thought.'}
        ]
    }}
},
// === SLIDE 363 ===
{
    id: 'learn-002', topic: 'Learning Theories', title: 'Feedback Across Learning Stages',
    content: '<p>The <strong>type of feedback</strong> given should match the learner\'s stage. Cognitive learners need simple, positive, extrinsic feedback. Associative learners benefit from more specific knowledge of performance. Autonomous learners rely heavily on intrinsic feedback and kinaesthetic awareness.</p>',
    animation: { type: 'flip-cards', hint: 'Click to see feedback at each stage!', config: { cards: [
        {front: 'Cognitive Stage Feedback', back: 'Positive, simple, visual demonstrations. KR (knowledge of results) — "the ball went in!" Extrinsic guidance. Avoid information overload.'},
        {front: 'Associative Stage Feedback', back: 'More specific KP (knowledge of performance) — "your elbow dropped." Mix of extrinsic and developing intrinsic. Corrective feedback welcome.'},
        {front: 'Autonomous Stage Feedback', back: 'Intrinsic/kinaesthetic feedback dominates. Can self-correct. Detailed technical KP valued. Video analysis useful. Coach as fine-tuner.'},
        {front: 'Plateau — Solutions', back: 'Set new goals, vary practice, use extrinsic rewards, change training environment, provide encouragement, use role models.'}
    ]}}
},
// === SLIDE 364 ===
{
    id: 'learn-003', topic: 'Learning Theories', title: 'Learning Plateau — Causes & Solutions',
    content: '<p>A <span class="key-term">learning plateau</span> is a period of no apparent improvement despite continued practice. It appears as a flat section on a learning curve graph. Understanding the causes helps coaches design interventions to break through plateaus.</p>',
    animation: { type: 'barrier-explorer', hint: 'Click to explore causes and solutions for plateaus!', config: { groups: [
        {label: 'Motivation', color: '#ef4444', barriers: ['Boredom from repetitive practice', 'Lack of clear goals', 'Low self-confidence'], solutions: ['Set SMART targets', 'Use variable practice', 'Provide positive reinforcement', 'Use role models']},
        {label: 'Physical', color: '#2563eb', barriers: ['Fatigue from overtraining', 'Fitness limit reached', 'Injury concerns'], solutions: ['Use distributed practice', 'Improve physical conditioning', 'Allow adequate recovery time']},
        {label: 'Cognitive', color: '#22c55e', barriers: ['Information overload', 'Task too complex', 'Reached ability ceiling'], solutions: ['Simplify instructions', 'Use progressive part practice', 'Provide mental rehearsal time']},
        {label: 'Coaching', color: '#f59e0b', barriers: ['Inadequate feedback', 'Wrong practice type', 'No progression'], solutions: ['Change practice method', 'Use different guidance types', 'Increase challenge level']}
    ]}}
},
// === SLIDE 365 ===
{
    id: 'learn-004', topic: 'Learning Theories', title: 'Cognitive Theory — Insight Learning (Gestalt)',
    content: '<p><span class="key-term">Insight learning (Gestalt)</span> proposes that learners develop an understanding of the <strong>whole problem</strong> before attempting a solution. The performer perceives the whole situation, thinks about it, and then suddenly "sees" the solution — an <strong>"aha!" moment</strong>. Requires intelligence and experience. The learner must understand the whole picture, not just individual parts.</p>',
    animation: { type: 'social-theory', hint: 'Navigate through Gestalt principles!', config: {
        title: 'Insight Learning (Gestalt)',
        theories: [
            {name: 'Whole Problem', detail: 'The learner considers the entire situation, not just isolated parts. They need to see the "big picture" before acting.', example: 'A quarterback reads the whole defensive formation before deciding where to throw.'},
            {name: '"Aha!" Moment', detail: 'Insight arrives suddenly — the learner grasps the solution intuitively. This cannot be forced through drill alone.', example: 'A tennis player suddenly understands why they keep hitting the net — they realise the racket angle matters.'},
            {name: 'Intervening Variable', detail: 'The performer processes information between stimulus and response. Thinking and perception bridge the gap — not just stimulus-response.', example: 'A basketball player processes defender position and teammate movement before making a creative pass.'},
            {name: 'Application', detail: 'Best for experienced, intelligent performers. Use whole practice. Allow time to think. Encourage problem-solving rather than rote repetition.', example: 'A coach asks players to devise their own set plays rather than prescribing every movement.'}
        ]
    }}
},
// === SLIDE 366 ===
{
    id: 'learn-005', topic: 'Learning Theories', title: 'Operant Conditioning — Skinner',
    content: '<p><span class="key-term">Operant conditioning (Skinner)</span> is a behaviourist theory where behaviour is shaped by its consequences. Behaviour followed by <strong>reinforcement</strong> is more likely to be repeated. Behaviour followed by <strong>punishment</strong> is less likely. The stimulus-response (S-R) bond is strengthened or weakened.</p>',
    animation: { type: 'flow-diagram', hint: 'Click to trace the operant conditioning process!', config: {
        title: 'Operant Conditioning',
        steps: [
            {label: 'Behaviour', detail: 'The performer executes a skill or action (e.g. a footballer attempts a pass).'},
            {label: 'Consequence', detail: 'The outcome of the action — success or failure. This is the reinforcement or punishment.'},
            {label: 'Positive Reinforcement', detail: 'Rewarding correct behaviour to strengthen the S-R bond (e.g. praise: "Great pass!"). Makes behaviour more likely to recur.'},
            {label: 'Negative Reinforcement', detail: 'Removing an unpleasant stimulus when correct behaviour occurs (e.g. stopping extra drills when technique improves).'},
            {label: 'Punishment', detail: 'Applying an unpleasant consequence to weaken incorrect behaviour (e.g. extra laps for poor effort). Weakens S-R bond.'}
        ],
        feedbackLoop: true, feedbackLabel: 'Repeat behaviour loop'
    }}
},
// === SLIDE 367 ===
{
    id: 'learn-006', topic: 'Learning Theories', title: 'Social Learning — Bandura',
    content: '<p><span class="key-term">Observational learning (Bandura)</span> states that we learn by watching and imitating <strong>role models</strong>. The model must be attractive, powerful, and similar to the observer. Bandura\'s four stages: <strong>Attention → Retention → Motor Reproduction → Motivation</strong>. Vicarious reinforcement (seeing others rewarded) also motivates imitation.</p>',
    animation: { type: 'flow-diagram', hint: 'Click each stage of Bandura\'s model!', config: {
        title: "Bandura's Observational Learning",
        steps: [
            {label: 'Attention', detail: 'The learner must focus on the model. Model should be high-status, similar, and skilful. A demonstration must be clear and engaging.'},
            {label: 'Retention', detail: 'The learner must remember what was observed. Use mental rehearsal, repeated demonstrations, and highlight key coaching points.'},
            {label: 'Motor Reproduction', detail: 'The learner attempts to physically copy the model. Must have the physical ability. Practice and feedback needed to refine the imitation.'},
            {label: 'Motivation', detail: 'The learner must be motivated to reproduce the action. Increased by vicarious reinforcement (seeing the model rewarded), praise, and self-efficacy.'}
        ]
    }}
},
// === SLIDE 368 ===
{
    id: 'learn-007', topic: 'Learning Theories', title: 'Constructivism — Vygotsky\'s Social Development Theory',
    content: '<p><span class="key-term">Vygotsky\'s Social Development Theory</span> emphasises learning through <strong>social interaction</strong>. The <span class="key-term">Zone of Proximal Development (ZPD)</span> is the gap between what a learner can do alone and what they can do with guidance from a <strong>More Knowledgeable Other (MKO)</strong> — a coach, teacher, or skilled peer.</p>',
    animation: { type: 'info-processing', hint: 'Click each component of Vygotsky\'s theory!', config: {
        title: "Vygotsky's Social Development Theory",
        stages: [
            {label: 'Current Ability', detail: 'What the learner can already do independently. The baseline of their existing knowledge and motor skills.'},
            {label: 'ZPD', detail: 'Zone of Proximal Development — the zone where learning takes place. Tasks the learner cannot do alone but CAN do with help from a More Knowledgeable Other.'},
            {label: 'MKO', detail: 'More Knowledgeable Other — a coach, teacher, or skilled peer who provides scaffolding (support that is gradually removed as competence grows).'},
            {label: 'Scaffolding', detail: 'Temporary support structures: demonstrations, verbal cues, physical guidance. Gradually withdrawn as the learner becomes independent.'},
            {label: 'New Ability', detail: 'The learner internalises the skill and can now perform it independently. The ZPD shifts to a higher level.'}
        ],
        feedback: 'Learning is social and collaborative'
    }}
},
// === SLIDE 369 ===
{
    id: 'learn-008', topic: 'Learning Theories', title: 'Comparing Learning Theories',
    content: '<p>Each theory of learning has different implications for how coaches should design practice. Understanding these helps develop effective training programmes that suit different learners and contexts.</p>',
    animation: { type: 'match-pairs', hint: 'Match each theory to its key principle!', config: { pairs: [
        {a: 'Operant Conditioning', b: 'Reinforcement shapes behaviour'},
        {a: 'Insight Learning', b: 'Whole-problem understanding'},
        {a: 'Bandura (Social)', b: 'Observe and imitate models'},
        {a: 'Vygotsky (ZPD)', b: 'Learn with guided support'},
        {a: 'Behaviourism', b: 'Stimulus → Response bond'},
        {a: 'Constructivism', b: 'Build knowledge socially'}
    ]}}
},
// ==========================================
// 3.1.2.4 USE OF GUIDANCE AND FEEDBACK
// ==========================================
// === SLIDE 370 ===
{
    id: 'learn-009', topic: 'Learning Theories', title: 'Methods of Guidance',
    content: '<p>Guidance helps learners develop skills. Four types: <span class="key-term">Visual</span> (demonstrations, video), <span class="key-term">Verbal</span> (instructions, coaching points), <span class="key-term">Manual</span> (physical support from another person), and <span class="key-term">Mechanical</span> (equipment that aids technique, e.g. armbands, harness).</p>',
    animation: { type: 'flip-cards', hint: 'Click to explore each type of guidance!', config: { cards: [
        {front: 'Visual Guidance', back: 'Demonstrations, videos, diagrams. Best for cognitive stage. Must be accurate. Creates a mental image. Suitable for all abilities.'},
        {front: 'Verbal Guidance', back: 'Instructions, coaching cues, questioning. Best for associative/autonomous stage. Must be concise. Risk of information overload for beginners.'},
        {front: 'Manual Guidance', back: 'Physical support from a coach (e.g. guiding a gymnast through a movement). Builds confidence. Risk of dependency. Best for beginners or dangerous skills.'},
        {front: 'Mechanical Guidance', back: 'Equipment aids (e.g. armbands in swimming, harness in trampolining). Reduces fear. Allows safe practice. Must be removed gradually.'},
        {front: 'Best for Beginners?', back: 'Visual + manual/mechanical. Simple demonstrations. Physical support for confidence. Avoid complex verbal instructions.'},
        {front: 'Best for Experts?', back: 'Verbal + visual. Specific technical cues. Video analysis. Detailed coaching points. Less need for manual support.'}
    ]}}
},
// === SLIDE 371 ===
{
    id: 'learn-010', topic: 'Learning Theories', title: 'Types of Feedback — KP and KR',
    content: '<p><span class="key-term">Knowledge of Results (KR)</span> is feedback about the outcome: "the ball hit the target." <span class="key-term">Knowledge of Performance (KP)</span> is feedback about the quality of the movement: "your follow-through was too short." Both are essential but serve different purposes at different learning stages.</p>',
    animation: { type: 'slider-compare', hint: 'Drag to compare KR vs KP!', config: {
        leftLabel: 'Knowledge of Results (KR)', rightLabel: 'Knowledge of Performance (KP)',
        leftItems: ['Outcome-based feedback', 'Did the ball go in?', 'Best for cognitive stage', 'External and observable', 'Motivating — shows success/failure'],
        rightItems: ['Movement-based feedback', 'How was the technique?', 'Best for associative/autonomous', 'Technical and detailed', 'Helps refine motor programmes']
    }}
},
// === SLIDE 372 ===
{
    id: 'learn-011', topic: 'Learning Theories', title: 'Positive, Negative, Intrinsic & Extrinsic Feedback',
    content: '<p><strong>Positive feedback</strong> reinforces correct actions ("great shot!"). <strong>Negative feedback</strong> highlights errors to correct ("your arm was too low"). <span class="key-term">Intrinsic feedback</span> comes from within (kinaesthetic feel). <span class="key-term">Extrinsic feedback</span> comes from outside (coach, video, crowd).</p>',
    animation: { type: 'barrier-explorer', hint: 'Click to explore each feedback type!', config: { groups: [
        {label: 'Positive', color: '#22c55e', barriers: [], solutions: ['Reinforces correct technique', 'Builds confidence and motivation', 'Strengthens S-R bond (operant conditioning)', 'Essential for beginners in cognitive stage'], detail: 'Example: "Excellent follow-through on that serve!"'},
        {label: 'Negative', color: '#ef4444', barriers: [], solutions: ['Identifies errors to correct', 'Used more with experienced performers', 'Must be constructive, not demoralising', 'Paired with corrective instruction'], detail: 'Example: "Your elbow dropped — keep it higher next time."'},
        {label: 'Intrinsic', color: '#2563eb', barriers: [], solutions: ['Comes from within the performer', 'Kinaesthetic feel of the movement', 'Dominant in autonomous stage', 'Develops with experience'], detail: 'Example: A golfer feels that their swing was off before seeing where the ball lands.'},
        {label: 'Extrinsic', color: '#f59e0b', barriers: [], solutions: ['Comes from external sources', 'Coach, video analysis, crowd', 'Essential for beginners', 'Supplements intrinsic feedback'], detail: 'Example: A coach tells a swimmer their stroke rate is too fast.'}
    ]}}
},
// === SLIDE 373 ===
{
    id: 'learn-012', topic: 'Learning Theories', title: 'Guidance & Feedback — Impact on Skill Development',
    content: '<p>The <strong>combination of guidance and feedback</strong> must be tailored to the learner\'s stage, the skill being taught, and the practice context. Over-reliance on any one type can hinder independent learning.</p>',
    animation: { type: 'quiz', hint: 'Test your feedback and guidance knowledge!', config: {
        question: 'A beginner swimmer is learning breaststroke and is nervous about putting their face in the water. Which combination of guidance is most appropriate?',
        options: [
            'Verbal instructions only with negative feedback',
            'Visual demonstration + mechanical guidance (floats/armbands) + positive feedback',
            'Manual guidance only with no feedback',
            'Complex verbal cues with knowledge of performance'
        ],
        correct: 1,
        explanation: 'Visual demonstration creates a mental image, mechanical guidance (floats/armbands) builds confidence and reduces fear, and positive feedback reinforces correct attempts. This combination suits a beginner in the cognitive stage who needs support and encouragement.'
    }}
}
);
