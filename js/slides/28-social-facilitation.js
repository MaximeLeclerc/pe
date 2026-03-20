window.ALL_SLIDES = window.ALL_SLIDES || [];
window.ALL_SLIDES.push(
// ==========================================
// 3.2.3.1.8 SOCIAL FACILITATION
// ==========================================
// === SLIDE 472 ===
{
    id: 'socfac-001', topic: 'Social Facilitation', title: 'Social Facilitation & Inhibition — Introduction',
    content: '<p><span class="key-term">Social facilitation</span> is the positive influence of the presence of others on performance. <span class="key-term">Social inhibition</span> is the negative effect — when the presence of others causes performance to <strong>deteriorate</strong>. Whether the audience helps or hinders depends on the nature of the task and the skill level of the performer.</p>',
    animation: { type: 'audience-effect', hint: 'Click the canvas to add audience members. Toggle between simple and complex tasks to see the effect!', config: { startTask: 'simple' }}
},
// === SLIDE 473 ===
{
    id: 'socfac-002', topic: 'Social Facilitation', title: 'Zajonc\'s Model of Social Facilitation (1965)',
    content: '<p><span class="key-term">Zajonc (1965)</span> proposed that the mere presence of others increases <strong>arousal</strong>, which triggers the <strong>dominant response</strong>. If the skill is well-learned (autonomous stage), the dominant response is correct — performance improves (<span class="key-term">facilitation</span>). If the skill is new or poorly learned, the dominant response is incorrect — performance worsens (<span class="key-term">inhibition</span>).</p>',
    animation: { type: 'flow-diagram', hint: 'Click to trace through Zajonc\'s model step by step!', config: {
        title: 'Zajonc\'s Model',
        steps: [
            {label: '1. Presence of Others', detail: 'An audience, co-actors (people doing the same task alongside you), or even passive spectators. Zajonc argued that the MERE PRESENCE of others is enough to increase arousal — no evaluation needed.'},
            {label: '2. Increased Arousal', detail: 'The presence of others triggers a physiological arousal response — increased heart rate, adrenaline release. This is an innate, automatic response that cannot be prevented.'},
            {label: '3. Dominant Response', detail: 'Arousal causes the performer\'s most likely (dominant) response to be produced. The dominant response is the behaviour that is most practised or habitual.'},
            {label: '4a. Expert = Facilitation', detail: 'For an expert, the dominant response is the CORRECT technique (it has been practised thousands of times). Arousal enhances performance. E.g. a professional footballer performing better in front of a crowd.'},
            {label: '4b. Novice = Inhibition', detail: 'For a novice, the dominant response is often INCORRECT (errors, bad habits). Arousal produces more errors. E.g. a beginner gymnast performing worse in front of an audience because their dominant response includes mistakes.'}
        ]
    }}
},
// === SLIDE 474 ===
{
    id: 'socfac-003', topic: 'Social Facilitation', title: 'Types of "Others" — Audience, Co-actors & Social Facilitation',
    content: '<p>The "others" who affect performance can be categorised. An <span class="key-term">audience</span> watches passively. <span class="key-term">Co-actors</span> perform the same task at the same time (e.g. runners in a race). Co-actors can increase competition and effort. Both audiences and co-actors increase arousal and trigger the dominant response.</p>',
    animation: { type: 'flip-cards', hint: 'Click to learn about each type of social presence!', config: { cards: [
        {front: 'Passive Audience', back: 'People who simply watch without evaluating. According to Zajonc, even a passive audience increases arousal and triggers the dominant response. E.g. strangers walking past a training session.'},
        {front: 'Evaluative Audience', back: 'People who are judging or assessing performance — coaches, scouts, selectors, examiners. This creates EVALUATION APPREHENSION and further increases arousal. E.g. a scout watching a football trial.'},
        {front: 'Co-actors', back: 'Others performing the same task alongside you at the same time. Creates a competitive element. E.g. other runners in a race, other gymnasts warming up. Can increase motivation and effort through social comparison.'},
        {front: 'Supportive Audience', back: 'A home crowd cheering for you. Can boost confidence and arousal positively. But can also increase PRESSURE to perform well, especially in important events. E.g. home crowd at a cup final.'},
        {front: 'Hostile Audience', back: 'An away crowd booing and jeering. Increases arousal significantly. For experts, this may actually HELP (high arousal enhances dominant correct response). For novices, this is likely to cause inhibition.'},
        {front: 'Exam Tip', back: 'In exam answers, always specify whether the audience effect is facilitation or inhibition, link to the dominant response, and use practical sporting examples with named performers where possible.'}
    ]}}
},
// === SLIDE 475 ===
{
    id: 'socfac-004', topic: 'Social Facilitation', title: 'Evaluation Apprehension (Cottrell, 1968)',
    content: '<p><span class="key-term">Cottrell (1968)</span> extended Zajonc\'s theory with <span class="key-term">evaluation apprehension</span>. He argued that it is NOT merely the presence of others that causes arousal, but the <strong>fear of being judged</strong>. A performer who believes they are being evaluated will experience greater anxiety, increasing arousal beyond what mere presence alone would cause.</p>',
    animation: { type: 'slider-compare', hint: 'Drag to compare Zajonc vs Cottrell!', config: {
        leftLabel: 'Zajonc — Mere Presence', rightLabel: 'Cottrell — Evaluation Apprehension',
        leftItems: ['MERE presence of others causes arousal', 'Arousal is innate and automatic', 'Even blindfolded spectators increase arousal', 'No evaluation needed — just being watched', 'Applies to all species (even cockroaches!)'],
        rightItems: ['FEAR OF JUDGEMENT causes arousal', 'Arousal is a learned response', 'Blindfolded spectators do NOT increase arousal', 'Must believe you are being EVALUATED', 'Only applies when audience can assess performance']
    }}
},
// === SLIDE 476 ===
{
    id: 'socfac-005', topic: 'Social Facilitation', title: 'Effects on Different Task Types',
    content: '<p>The effect of an audience depends on the <strong>complexity</strong> of the task. <span class="key-term">Simple, gross, well-learned skills</span> are facilitated by an audience. <span class="key-term">Complex, fine, newly-learned skills</span> are inhibited. This links directly to the <strong>dominant response</strong> — correct for experts, incorrect for novices.</p>',
    animation: { type: 'progress-bar', hint: 'See how audience presence affects different tasks!', config: { bars: [
        {label: 'Weightlifting (simple, gross)', pct: 90, color: '#22c55e'},
        {label: '100m sprint (well-learned)', pct: 85, color: '#22c55e'},
        {label: 'Rugby tackle (gross motor)', pct: 75, color: '#22c55e'},
        {label: 'Football dribbling (moderate)', pct: 50, color: '#f59e0b'},
        {label: 'Snooker shot (fine, complex)', pct: 30, color: '#ef4444'},
        {label: 'Beginner gymnastics (new skill)', pct: 15, color: '#ef4444'},
        {label: 'Learning a new tennis serve', pct: 10, color: '#ef4444'}
    ]}}
},
// === SLIDE 477 ===
{
    id: 'socfac-006', topic: 'Social Facilitation', title: 'Strategies to Reduce Social Inhibition',
    content: '<p>Coaches and performers can use strategies to <strong>reduce the negative effects</strong> of social inhibition and manage the impact of audience presence on performance. These strategies focus on building confidence, managing arousal, and making skills more autonomous.</p>',
    animation: { type: 'barrier-explorer', hint: 'Click to explore strategies for managing social facilitation effects!', config: { groups: [
        {label: 'Practice & Overlearning', color: '#2563eb', barriers: [], solutions: ['Practise skills until they are autonomous (overlearning)', 'The dominant response becomes the CORRECT response', 'Rehearse in front of audiences in training', 'Simulate competition conditions in practice', 'Use progressive exposure — gradually increase audience size'], detail: 'Making skills automatic is the most effective strategy because it changes the dominant response from incorrect to correct.'},
        {label: 'Arousal Management', color: '#22c55e', barriers: [], solutions: ['Use relaxation techniques before performing', 'Deep breathing to reduce somatic anxiety', 'Positive self-talk to manage cognitive anxiety', 'Mental rehearsal/imagery of successful performance', 'Develop pre-performance routines'], detail: 'Controlling arousal helps keep the performer at their optimal arousal level (Inverted-U).'},
        {label: 'Attentional Focus', color: '#f59e0b', barriers: [], solutions: ['Focus on task-relevant cues (selective attention)', 'Block out the audience using trigger words', 'Set process goals rather than outcome goals', 'Use cue utilisation to narrow attention appropriately', 'Develop concentration routines'], detail: 'Directing attention away from the audience and towards the task reduces evaluation apprehension.'},
        {label: 'Environmental Strategies', color: '#8b5cf6', barriers: [], solutions: ['Reduce the importance of the evaluation', 'Train beginners away from audiences initially', 'Ensure early experiences of success to build confidence', 'Gradually introduce evaluative situations', 'Avoid highlighting that scouts/selectors are watching'], detail: 'The environment can be managed to reduce the perceived threat of evaluation.'}
    ]}}
},
// === SLIDE 478 ===
{
    id: 'socfac-007', topic: 'Social Facilitation', title: 'Home Field Advantage & Social Facilitation',
    content: '<p><span class="key-term">Home field advantage</span> is a form of social facilitation — a supportive home crowd can boost performance. Research shows that home teams win approximately <strong>60% of matches</strong> across many sports. However, home advantage can become a <strong>disadvantage</strong> in high-pressure situations (e.g. penalty shootouts, crucial play-off games).</p>',
    animation: { type: 'flip-cards', hint: 'Click to explore factors in home field advantage!', config: { cards: [
        {front: 'Crowd Support', back: 'A home crowd creates a supportive, familiar atmosphere. Cheering increases arousal and confidence. For experienced players, this facilitates the dominant (correct) response. Home fans can also intimidate opponents.'},
        {front: 'Familiarity', back: 'Players are familiar with their home venue — pitch dimensions, surface, facilities, travel time. This reduces anxiety and increases comfort. Opponents must adapt to an unfamiliar environment.'},
        {front: 'Travel Fatigue', back: 'Away teams must travel, which can cause fatigue, disrupted routines, and jet lag in international sport. Home teams avoid this. However, modern sports science has reduced this effect.'},
        {front: 'Referee Influence', back: 'Research suggests referees may be subconsciously influenced by home crowd noise — giving more decisions to the home team. Studies during COVID (empty stadiums) showed reduced home advantage, supporting this.'},
        {front: 'Home Disadvantage', back: 'In high-pressure situations, a supportive crowd can INCREASE pressure and evaluation apprehension. "Choking" at home is documented in penalty shootouts, play-offs, and when teams are expected to win.'},
        {front: 'COVID-19 Evidence', back: 'During the COVID pandemic, games without crowds showed REDUCED home advantage — home teams won less often. This provided strong evidence that the crowd IS a significant factor in home advantage.'}
    ]}}
},
// === SLIDE 479 ===
{
    id: 'socfac-008', topic: 'Social Facilitation', title: 'Social Facilitation — Review Quiz',
    content: '<p>Test your understanding of social facilitation, social inhibition, and the theories that explain audience effects on performance!</p>',
    animation: { type: 'quiz', hint: 'Choose the best answer!', config: {
        question: 'According to Zajonc\'s model, why does a novice performer do WORSE in front of an audience?',
        options: [
            'The audience distracts them from concentrating on the task',
            'Increased arousal triggers the dominant response, which for a novice is likely to be incorrect',
            'The audience makes them feel tired and reduces their physical effort',
            'The novice does not understand the rules of the sport being played'
        ],
        correct: 1,
        explanation: 'Zajonc\'s model states that the presence of others increases arousal, which triggers the dominant response. For a novice, the dominant response is often the INCORRECT response because the skill has not been practised enough to become automatic. Therefore, increased arousal leads to more errors — this is social inhibition. The key is making skills autonomous through practice so the dominant response becomes correct.'
    }}
}
);
