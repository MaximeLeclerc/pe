window.ALL_SLIDES = window.ALL_SLIDES || [];
window.ALL_SLIDES.push(
// ==========================================
// 3.2.3.1.14 STRESS MANAGEMENT
// ==========================================
// === SLIDE SM-001 ===
{
    id: 'stress-001', topic: 'Stress Management', title: 'Stress & Stressors — Key Definitions',
    content: '<p><span class="key-term">Stress</span> is the body\'s non-specific response to any demand placed upon it. It occurs when a performer perceives an imbalance between the demands of a situation and their ability to cope. A <span class="key-term">stressor</span> is any stimulus that causes stress — these can be internal (self-doubt) or external (crowd pressure). Stress can be positive (<strong>eustress</strong>) or negative (<strong>distress</strong>).</p>',
    animation: { type: 'flip-cards', hint: 'Click each card to learn key stress definitions!', config: { cards: [
        {front: 'Stress', back: 'A state of mental or emotional strain resulting from a perceived imbalance between the demands of a situation and the individual\'s ability to meet those demands. In sport, competition, audience, and importance of event are common triggers.'},
        {front: 'Stressor', back: 'Any stimulus or event that causes stress. Examples: competition pressure, hostile crowd, fear of injury, importance of the match, opposition quality, time pressure, unfamiliar venue, personal problems.'},
        {front: 'Eustress', back: 'POSITIVE stress — the "buzz" of competition. Eustress can enhance performance by increasing arousal to an optimal level. The performer feels excited, motivated, and energised. E.g. a sprinter feeling pumped before a race.'},
        {front: 'Distress', back: 'NEGATIVE stress — the performer feels overwhelmed, anxious, and unable to cope. Leads to poor decision-making, muscle tension, and reduced performance. E.g. a goalkeeper facing a penalty in a cup final feeling sick with nerves.'},
        {front: 'Cognitive Stress Response', back: 'The MENTAL effects of stress: negative thoughts, worry, inability to concentrate, poor decision-making, loss of focus, mental fatigue. "What if I miss?" "Everyone is watching me."'},
        {front: 'Somatic Stress Response', back: 'The PHYSICAL/BODILY effects of stress: increased heart rate, sweating, muscle tension, nausea, "butterflies", trembling, dry mouth, need to urinate. These are caused by adrenaline release.'}
    ]}}
},
// === SLIDE SM-002 ===
{
    id: 'stress-002', topic: 'Stress Management', title: 'The Stress Process — A Model',
    content: '<p>Stress follows a <strong>four-stage process</strong>: the environmental demand (stressor) → the individual\'s perception of the demand → the stress response (cognitive and somatic) → the behavioural outcome (performance). The key stage is <span class="key-term">perception</span> — two athletes can face the same stressor but respond very differently depending on how they interpret it.</p>',
    animation: { type: 'flow-diagram', hint: 'Click each stage to understand the stress process!', config: {
        title: 'The Stress Process',
        steps: [
            {label: '1. Stressor (Environmental Demand)', detail: 'The situation or event that creates pressure: a penalty, cup final, hostile crowd, strong opposition, injury risk, selection trial. The stressor itself is neutral — it is the perception that matters.'},
            {label: '2. Perception of Demand', detail: 'The athlete assesses: "Can I cope with this?" If perceived demands EXCEED perceived ability → distress. If perceived ability MATCHES or exceeds demands → eustress. This is why confidence and self-efficacy are so important.'},
            {label: '3. Stress Response', detail: 'If distress occurs, the body activates the "fight or flight" response: adrenaline release, increased HR, muscle tension (somatic). Simultaneously: worry, negative thoughts, loss of focus (cognitive). Both types impair performance.'},
            {label: '4. Behavioural Outcome', detail: 'The stress response affects performance: poor technique, rushed decisions, loss of fine motor control, "choking" under pressure. OR, if managed well, the performer channels arousal positively and performs at their best.'},
            {label: 'Individual Differences', detail: 'Trait anxiety, experience, self-confidence, and past success all influence perception. An experienced performer may see a cup final as exciting (eustress); a novice may see it as terrifying (distress).'}
        ]
    }}
},
// === SLIDE SM-003 ===
{
    id: 'stress-003', topic: 'Stress Management', title: 'Using Warm-Up for Stress Management',
    content: '<p>A thorough <span class="key-term">warm-up</span> is one of the simplest and most effective stress management strategies. It serves both <strong>physiological</strong> and <strong>psychological</strong> purposes. Physically, it prepares the body for activity. Psychologically, it provides a familiar routine that reduces anxiety, builds confidence, and focuses attention on the task.</p>',
    animation: { type: 'flow-diagram', hint: 'Click to explore how warm-up manages stress!', config: {
        title: 'Warm-Up as Stress Management',
        steps: [
            {label: 'Routine & Familiarity', detail: 'A consistent warm-up routine provides comfort and predictability in stressful situations. The familiar sequence of activities acts as an anchor — reducing uncertainty and giving the athlete a sense of control.'},
            {label: 'Physiological Preparation', detail: 'Gradually increases heart rate, body temperature, and blood flow. Reduces risk of injury. The body transitions smoothly from rest to competition readiness, preventing the "shock" of sudden intense activity.'},
            {label: 'Mental Rehearsal Integration', detail: 'Warm-up provides an ideal time for mental rehearsal and visualisation. Athletes can rehearse key skills, visualise success, and practise positive self-talk while their body prepares.'},
            {label: 'Attentional Focus', detail: 'A structured warm-up directs attention TOWARDS the task and AWAY from stressors (crowd, opposition, importance of event). It narrows focus to controllable factors.'},
            {label: 'Confidence Building', detail: 'Performing skills successfully during warm-up reinforces self-efficacy. A footballer scoring in the warm-up, a cricketer timing the ball well in nets — these successes build confidence before the main event.'}
        ]
    }}
},
// === SLIDE SM-004 ===
{
    id: 'stress-004', topic: 'Stress Management', title: 'Cognitive vs Somatic Techniques — Overview',
    content: '<p>Stress management techniques are divided into <span class="key-term">cognitive</span> (targeting the mind) and <span class="key-term">somatic</span> (targeting the body). The key principle is <strong>matching</strong>: cognitive techniques work best for cognitive anxiety (worry, negative thoughts), and somatic techniques work best for somatic anxiety (physical symptoms like increased HR, tension).</p>',
    animation: { type: 'slider-compare', hint: 'Drag to compare cognitive vs somatic techniques!', config: {
        leftLabel: 'Cognitive Techniques (Mind)', rightLabel: 'Somatic Techniques (Body)',
        leftItems: ['Target negative thoughts and worry', 'Mental rehearsal / imagery / visualisation', 'Positive self-talk and thought stopping', 'Attentional control and cue utilisation', 'Best for cognitive anxiety (worry)'],
        rightItems: ['Target physical symptoms of stress', 'Progressive muscle relaxation (PMR)', 'Breathing control and centering', 'Biofeedback using technology', 'Best for somatic anxiety (tension, HR)']
    }}
},
// === SLIDE SM-005 ===
{
    id: 'stress-005', topic: 'Stress Management', title: 'Mental Rehearsal',
    content: '<p><span class="key-term">Mental rehearsal</span> (also called mental practice) is the cognitive process of rehearsing a physical skill in the mind WITHOUT physical movement. The performer visualises themselves executing the skill perfectly, step by step. Research shows it activates similar neural pathways to actual performance, strengthening the motor programme.</p>',
    animation: { type: 'flow-diagram', hint: 'Click to explore the elements of mental rehearsal!', config: {
        title: 'Mental Rehearsal in Practice',
        steps: [
            {label: 'What Is It?', detail: 'Going through a performance mentally — imagining executing a skill perfectly from start to finish. No physical movement occurs, but the brain fires similar neural patterns. E.g. a high jumper mentally rehearsing the approach, take-off, bar clearance, and landing.'},
            {label: 'How It Reduces Stress', detail: 'By rehearsing success mentally, the performer builds confidence and familiarity with the task. It replaces negative "what if" thoughts with positive images of successful execution. Reduces uncertainty and perceived threat.'},
            {label: 'When to Use It', detail: 'Before competition (during warm-up), between attempts (e.g. between high jump attempts), during breaks (half-time, changeover), and during training to embed correct technique.'},
            {label: 'Internal vs External', detail: 'INTERNAL perspective: seeing the skill through your own eyes (first-person). EXTERNAL perspective: watching yourself perform from outside (third-person). Research suggests internal is more effective for experienced performers.'},
            {label: 'Evidence', detail: 'Feltz & Landers (1983) meta-analysis: mental rehearsal combined with physical practice is more effective than physical practice alone. Neural imaging shows similar brain activation during mental and physical rehearsal.'}
        ]
    }}
},
// === SLIDE SM-006 ===
{
    id: 'stress-006', topic: 'Stress Management', title: 'Visualisation & Imagery',
    content: '<p><span class="key-term">Visualisation</span> and <span class="key-term">imagery</span> are closely related to mental rehearsal but emphasise creating vivid, multi-sensory mental pictures. Imagery involves using ALL senses — visual, kinaesthetic (feel of movement), auditory (sounds), olfactory (smell), and tactile (touch) — to create as realistic a mental experience as possible.</p>',
    animation: { type: 'flip-cards', hint: 'Click to explore the senses used in imagery!', config: { cards: [
        {front: 'Visual Imagery', back: 'SEEING the performance in the mind\'s eye: the venue, the ball, the target, the opponents. A tennis player sees the ball leaving the racket, crossing the net, and landing on the baseline.'},
        {front: 'Kinaesthetic Imagery', back: 'FEELING the movement: the muscles contracting, the body rotating, the sense of balance and timing. A gymnast feels the rotation in a somersault, the stretch in a layout position, the impact of landing.'},
        {front: 'Auditory Imagery', back: 'HEARING the sounds: the crowd, the whistle, the crack of bat on ball, the coach\'s instructions. A sprinter hears the starting gun and the silence before it.'},
        {front: 'Motivational Imagery', back: 'Imagining the OUTCOME: winning, celebrating, receiving a medal, the crowd cheering. Builds motivation and desire. Used to maintain effort during tough training.'},
        {front: 'Controllability', back: 'The ability to CONTROL the image — making the imagined performance go exactly as planned. Beginners may find their imagery goes wrong (imagining missing). Practice improves control over the mental image.'},
        {front: 'Vividness', back: 'How CLEAR and REALISTIC the image is. More vivid imagery is more effective. Improved by using all senses, practising regularly, and using familiar environments. Elite athletes have more vivid imagery than novices.'}
    ]}}
},
// === SLIDE SM-007 ===
{
    id: 'stress-007', topic: 'Stress Management', title: 'Attentional Control & Cue Utilisation',
    content: '<p><span class="key-term">Attentional control</span> is the ability to focus on task-relevant cues and ignore distractions. <span class="key-term">Cue utilisation</span> (Easterbrook, 1959) explains that as arousal increases, the attentional field narrows — at moderate arousal, irrelevant cues are excluded (good); at high arousal, relevant cues are also excluded (bad, leading to "tunnel vision").</p>',
    animation: { type: 'flow-diagram', hint: 'Click to explore attentional control and cue utilisation!', config: {
        title: 'Cue Utilisation Theory (Easterbrook)',
        steps: [
            {label: 'Low Arousal', detail: 'Attentional field is WIDE — the performer takes in too much information, including many irrelevant cues (crowd, weather, thoughts about other things). Attention is scattered and unfocused. Performance is poor.'},
            {label: 'Moderate (Optimal) Arousal', detail: 'Attentional field NARROWS optimally — irrelevant cues are excluded, but all relevant cues are still processed. The performer focuses on the ball, opponents\' positions, and tactical cues. BEST performance.'},
            {label: 'High Arousal', detail: 'Attentional field becomes TOO NARROW — "tunnel vision." Even relevant cues are missed. A footballer may only see the goal but miss open teammates. Decision-making deteriorates. Performance drops.'},
            {label: 'Attentional Control Strategies', detail: 'Trigger words ("focus", "watch the ball"), pre-performance routines, parking thoughts (acknowledging and setting aside worries), focusing on process goals rather than outcome, mindfulness training.'},
            {label: 'Nideffer\'s Attentional Focus', detail: 'Nideffer identified 4 attentional styles: Broad-External (reading the game), Broad-Internal (strategy planning), Narrow-External (focusing on the ball), Narrow-Internal (mental rehearsal). Elite performers switch between styles as needed.'}
        ]
    }}
},
// === SLIDE SM-008 ===
{
    id: 'stress-008', topic: 'Stress Management', title: 'Thought Stopping',
    content: '<p><span class="key-term">Thought stopping</span> is a cognitive technique where the performer deliberately interrupts negative or unwanted thoughts by using a trigger word ("stop!"), a physical cue (snapping a wristband), or a mental image (a red stop sign). This breaks the cycle of negative thinking and allows the performer to refocus on positive, task-relevant thoughts.</p>',
    animation: { type: 'flow-diagram', hint: 'Click to explore the thought stopping process!', config: {
        title: 'Thought Stopping Process',
        steps: [
            {label: '1. Recognise the Negative Thought', detail: '"I\'m going to miss this penalty." "Everyone is watching and I\'ll mess up." "The opposition is too strong." The first step is AWARENESS — recognising that the thought is negative and unhelpful.'},
            {label: '2. Use a Trigger to STOP', detail: 'The performer uses a pre-practised trigger: saying "STOP!" internally, snapping a wristband on their wrist, visualising a red stop sign, or clenching and releasing their fist. This interrupts the thought pattern.'},
            {label: '3. Replace with a Positive Thought', detail: 'Immediately replace the negative thought with a positive, task-relevant one: "I\'ve scored 9 out of 10 in training." "Focus on the bottom corner." "Trust my technique." This is where positive self-talk links in.'},
            {label: '4. Refocus on the Task', detail: 'Direct attention back to the immediate task — the ball, the target, the next action. Use a process goal: "Smooth backswing, watch the ball." This prevents the negative thought cycle from restarting.'},
            {label: 'Practice Makes Perfect', detail: 'Thought stopping must be PRACTISED regularly in training so it becomes automatic under pressure. Without practice, performers may not recognise negative thoughts quickly enough or may not have replacement thoughts ready.'}
        ]
    }}
},
// === SLIDE SM-009 ===
{
    id: 'stress-009', topic: 'Stress Management', title: 'Positive Self-Talk',
    content: '<p><span class="key-term">Positive self-talk</span> involves deliberately using encouraging, affirming internal dialogue to build confidence, maintain motivation, and counter negative thoughts. It can be <strong>motivational</strong> ("I can do this!") or <strong>instructional</strong> ("Watch the ball, follow through"). Research consistently shows positive self-talk improves performance across a wide range of sports.</p>',
    animation: { type: 'slider-compare', hint: 'Drag to compare negative vs positive self-talk!', config: {
        leftLabel: 'Negative Self-Talk ✗', rightLabel: 'Positive Self-Talk ✓',
        leftItems: ['"I always mess up under pressure"', '"The crowd is going to see me fail"', '"My opponent is much better than me"', '"I can\'t believe I missed that"', '"There\'s no point trying, I\'ve lost"'],
        rightItems: ['"I\'ve trained hard, I\'m ready for this"', '"The crowd is here because they enjoy sport"', '"I can match anyone on my day"', '"Next ball, fresh start, stay focused"', '"Keep fighting — anything can happen"']
    }}
},
// === SLIDE SM-010 ===
{
    id: 'stress-010', topic: 'Stress Management', title: 'Biofeedback',
    content: '<p><span class="key-term">Biofeedback</span> is a somatic technique that uses <strong>technology</strong> to give the performer real-time information about their physiological state — heart rate, muscle tension (EMG), skin conductance (GSR), and brain waves (EEG). By seeing this data, athletes learn to recognise and control their stress responses over time.</p>',
    animation: { type: 'flip-cards', hint: 'Click to learn about biofeedback methods!', config: { cards: [
        {front: 'Heart Rate Monitoring', back: 'Chest straps or wrist monitors display real-time heart rate. Athletes learn to lower HR through breathing techniques. Useful for sports requiring calm precision (archery, shooting, golf). Immediate visual feedback reinforces relaxation skills.'},
        {front: 'EMG (Electromyography)', back: 'Sensors placed on muscles measure electrical activity / tension. Athletes can see when muscles are unnecessarily tense and learn to relax them. Useful for sports where excess tension reduces fluidity (swimming, gymnastics).'},
        {front: 'GSR (Galvanic Skin Response)', back: 'Measures sweat gland activity on the skin — an indicator of arousal. Higher GSR = higher stress/arousal. Athletes learn to reduce arousal through relaxation techniques, observing the GSR decrease in real time.'},
        {front: 'EEG (Electroencephalography)', back: 'Measures brain wave patterns. Alpha waves indicate a relaxed, focused state ideal for performance. Athletes learn to produce more alpha waves through neurofeedback training. Used in shooting and archery research.'},
        {front: 'Advantages', back: 'Objective, measurable data. Provides concrete evidence of stress levels. Athletes can track improvement over time. Powerful for athletes who need "proof" that relaxation is working. Highly individual feedback.'},
        {front: 'Limitations', back: 'Equipment is expensive and requires specialist knowledge. Not practical during competition — only usable in training. Technology can itself be a stressor for some athletes. Time-consuming to learn to interpret and control signals.'}
    ]}}
},
// === SLIDE SM-011 ===
{
    id: 'stress-011', topic: 'Stress Management', title: 'Centering & Breathing Control',
    content: '<p><span class="key-term">Centering</span> is a technique that combines deep breathing with a focus on the body\'s centre of gravity (just behind the navel). It redirects attention from anxiety to body control. <span class="key-term">Breathing control</span> involves slow, deep diaphragmatic breathing to activate the parasympathetic nervous system, reducing heart rate and promoting calm.</p>',
    animation: { type: 'breathing', hint: 'Follow the breathing animation — inhale as it expands, exhale as it contracts!', config: {
        inhale: 4, hold: 2, exhale: 6
    }}
},
// === SLIDE SM-012 ===
{
    id: 'stress-012', topic: 'Stress Management', title: 'Progressive Muscle Relaxation (PMR)',
    content: '<p><span class="key-term">Progressive Muscle Relaxation (PMR)</span>, developed by <strong>Jacobson (1938)</strong>, involves systematically tensing and then relaxing each major muscle group in the body. By tensing first, the athlete learns to <strong>recognise</strong> the feeling of tension and then <strong>release</strong> it. This creates awareness of the difference between tension and relaxation.</p>',
    animation: { type: 'flow-diagram', hint: 'Click to explore the PMR process step by step!', config: {
        title: 'Progressive Muscle Relaxation Steps',
        steps: [
            {label: '1. Find a Quiet Space', detail: 'Lie down or sit comfortably in a quiet environment. Close your eyes. Begin with several deep breaths to start the relaxation process. This is typically done in training, before competition, or the night before an event.'},
            {label: '2. Tense Each Muscle Group (5-7 seconds)', detail: 'Starting from the feet and working upwards: curl the toes, tighten the calves, clench the thighs, tighten the abdomen, make fists, hunch the shoulders, clench the jaw. Hold the tension for 5-7 seconds.'},
            {label: '3. Release and Relax (20-30 seconds)', detail: 'Suddenly release the tension and focus on the sensation of relaxation in that muscle group. Notice the contrast between tension and relaxation. Allow 20-30 seconds of relaxation before moving to the next muscle group.'},
            {label: '4. Progress Through the Whole Body', detail: 'Work systematically through ALL major muscle groups: feet → calves → thighs → glutes → abdomen → chest → hands → forearms → shoulders → neck → face. The full process takes 15-20 minutes.'},
            {label: '5. Application in Sport', detail: 'With practice, athletes can achieve relaxation quickly (abbreviated PMR). Before competition, a shortened version focusing on key areas (shoulders, hands) can reduce somatic anxiety. Best used in the hours before competition, not during.'}
        ]
    }}
},
// === SLIDE SM-013 ===
{
    id: 'stress-013', topic: 'Stress Management', title: 'Matching Techniques to Anxiety Type',
    content: '<p>A critical exam concept: stress management techniques should be <span class="key-term">matched</span> to the type of anxiety experienced. <strong>Cognitive techniques</strong> for cognitive anxiety (worry). <strong>Somatic techniques</strong> for somatic anxiety (physical symptoms). Using the wrong type is less effective. Many elite athletes use a <strong>combination</strong> of both.</p>',
    animation: { type: 'drag-sort', hint: 'Drag each technique to the correct category!', config: {
        zones: [
            {label: 'Cognitive Techniques', items: ['Mental rehearsal', 'Visualisation & imagery', 'Positive self-talk', 'Thought stopping', 'Attentional control']},
            {label: 'Somatic Techniques', items: ['Progressive muscle relaxation', 'Breathing control', 'Biofeedback', 'Centering', 'Warm-up routine']}
        ]
    }}
},
// === SLIDE SM-014 ===
{
    id: 'stress-014', topic: 'Stress Management', title: 'Stress Management — Interactive Stress Meter',
    content: '<p>In this interactive activity, imagine you are an athlete preparing for a major competition. Your stress level is high. Apply different stress management techniques to bring your stress down to the optimal zone!</p>',
    animation: { type: 'stress-meter', hint: 'Click each technique button to reduce stress to the green zone!', config: {
        buttons: [
            {label: 'Deep Breathing', effect: -15},
            {label: 'Positive Self-Talk', effect: -10},
            {label: 'Mental Imagery', effect: -12},
            {label: 'PMR', effect: -18},
            {label: 'Thought Stopping', effect: -8}
        ]
    }}
},
// === SLIDE SM-015 ===
{
    id: 'stress-015', topic: 'Stress Management', title: 'Stress Management — Review Quiz',
    content: '<p>Test your understanding of stress management techniques for AQA A-level PE!</p>',
    animation: { type: 'quiz', hint: 'Choose the best answer!', config: {
        question: 'A basketball player is experiencing somatic anxiety (increased heart rate, sweating, muscle tension) before a free throw. Which stress management technique would be MOST appropriate?',
        options: [
            'Positive self-talk to replace negative thoughts',
            'Mental rehearsal of the free throw technique',
            'Breathing control and centering to reduce physiological arousal',
            'Thought stopping to interrupt negative thinking'
        ],
        correct: 2,
        explanation: 'Somatic anxiety (physical symptoms like increased HR, sweating, muscle tension) should be addressed with SOMATIC techniques. Breathing control and centering directly target physiological arousal by activating the parasympathetic nervous system. The other options are cognitive techniques — they target worry and negative thoughts (cognitive anxiety). The matching hypothesis states that the technique must match the type of anxiety for maximum effectiveness.'
    }}
}
);
