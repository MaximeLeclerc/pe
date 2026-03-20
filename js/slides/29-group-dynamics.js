window.ALL_SLIDES = window.ALL_SLIDES || [];
window.ALL_SLIDES.push(
// ==========================================
// 3.2.3.1.9 GROUP DYNAMICS
// ==========================================
// === SLIDE 480 ===
{
    id: 'grpdyn-001', topic: 'Group Dynamics', title: 'Group Dynamics — Introduction',
    content: '<p><span class="key-term">Group dynamics</span> refers to how individuals interact within a group and how the group functions as a whole. A <strong>group</strong> in sport is two or more people who interact, share common goals, have mutual awareness, and communicate. Understanding group dynamics helps explain why some teams of talented individuals fail while other teams exceed expectations.</p>',
    animation: { type: 'flip-cards', hint: 'Click to explore key characteristics of a group!', config: { cards: [
        {front: 'Interaction', back: 'Group members must communicate and work together. In sport, this means passing, calling, supporting, and coordinating movement. Without interaction, a collection of individuals is NOT a group.'},
        {front: 'Shared Goals', back: 'All members must be working towards a common objective — e.g. winning the league, qualifying for a tournament. Shared goals unite the group and drive collective effort.'},
        {front: 'Mutual Awareness', back: 'Members know who is in the group and recognise each other\'s roles and abilities. This is essential for coordination in team sports.'},
        {front: 'Communication', back: 'Both verbal (calling, instructions) and non-verbal (gestures, body language, eye contact). Effective communication is the foundation of teamwork.'},
        {front: 'Norms & Roles', back: 'Groups develop shared norms (expected behaviours) and allocate roles (captain, goalkeeper, playmaker). Clear roles reduce confusion and improve coordination.'},
        {front: 'Group vs Team', back: 'A team is a specific type of group with a high level of interdependence. All teams are groups, but not all groups are teams. A relay squad has less interdependence than a football team.'}
    ]}}
},
// === SLIDE 481 ===
{
    id: 'grpdyn-002', topic: 'Group Dynamics', title: 'Tuckman\'s Model of Group Formation (1965)',
    content: '<p><span class="key-term">Tuckman (1965)</span> proposed that groups go through four stages of development: <strong>Forming, Storming, Norming, and Performing</strong>. Each stage has distinct characteristics. Groups must progress through each stage to become effective. A coach must manage each stage differently.</p>',
    animation: { type: 'tuckman-stages', hint: 'Click each stage or use the arrows to explore Tuckman\'s model!', config: {
        stages: [
            {name: 'Forming', color: '#2563eb', detail: 'The group comes together for the first time. Members are polite but cautious, getting to know each other. There is dependence on the leader for direction. Roles are unclear. E.g. the first training session of a new team — players are reserved and testing boundaries.', icon: '1'},
            {name: 'Storming', color: '#ef4444', detail: 'Conflict and confrontation emerge as members compete for roles, status, and influence. Power struggles occur. Cliques may form. Some members may challenge the leader. This is the MOST DIFFICULT stage. E.g. two players arguing about who takes penalties, or a new signing clashing with established players.', icon: '2'},
            {name: 'Norming', color: '#f59e0b', detail: 'Conflicts are resolved. The group establishes norms (rules, expectations), roles are accepted, and cooperation develops. Cohesion begins to build. Members start to trust each other. E.g. players accept their positions, develop set-piece routines, and support each other in training.', icon: '3'},
            {name: 'Performing', color: '#22c55e', detail: 'The group functions as an effective unit. Members work together towards shared goals with high levels of trust, communication, and cohesion. Autonomy is high. E.g. a team that has played together for years and can anticipate each other\'s movements instinctively.', icon: '4'}
        ]
    }}
},
// === SLIDE 482 ===
{
    id: 'grpdyn-003', topic: 'Group Dynamics', title: 'Cohesion — Task and Social',
    content: '<p><span class="key-term">Cohesion</span> is the tendency for a group to stick together and remain united in pursuing its goals. <span class="key-term">Task cohesion</span> is the degree to which group members work together to achieve a shared objective. <span class="key-term">Social cohesion</span> is the degree to which members like each other and enjoy being part of the group.</p>',
    animation: { type: 'slider-compare', hint: 'Drag to compare task vs social cohesion!', config: {
        leftLabel: 'Task Cohesion', rightLabel: 'Social Cohesion',
        leftItems: ['Working together to achieve shared goals', 'Commitment to the team\'s objectives', 'Coordinating effectively in competition', 'Can exist WITHOUT social cohesion', 'More important in INTERACTIVE sports (football, basketball)'],
        rightItems: ['Liking each other as people', 'Enjoying each other\'s company off the pitch', 'Strong friendships within the group', 'Can exist WITHOUT task cohesion', 'Important but NOT sufficient for success alone']
    }}
},
// === SLIDE 483 ===
{
    id: 'grpdyn-004', topic: 'Group Dynamics', title: 'Carron\'s Antecedents of Cohesion (1982)',
    content: '<p><span class="key-term">Carron (1982)</span> identified four factors that influence team cohesion: <strong>environmental, personal, leadership, and team factors</strong>. Understanding these helps coaches create conditions for high cohesion. Cohesion and performance have a <strong>circular relationship</strong> — success builds cohesion, and cohesion promotes success.</p>',
    animation: { type: 'flow-diagram', hint: 'Click to explore Carron\'s four antecedents of cohesion!', config: {
        title: 'Carron\'s Antecedents of Cohesion',
        steps: [
            {label: 'Environmental Factors', detail: 'Factors that bind the group together externally: contracts, scholarships, geographical proximity, team size (SMALLER teams = more cohesive), shared facilities. Being in the same environment regularly builds familiarity and unity.'},
            {label: 'Personal Factors', detail: 'Individual characteristics of group members: motivation levels, social background, similarity of attitudes and values, commitment. Teams with similar goals and values tend to be more cohesive. Individual satisfaction contributes to group cohesion.'},
            {label: 'Leadership Factors', detail: 'The coach/leader\'s style, behaviour, and relationship with the group. Democratic leadership often improves SOCIAL cohesion. Clear, consistent communication builds trust. The leader must manage conflicts effectively (especially during the Storming stage).'},
            {label: 'Team Factors', detail: 'Shared experiences (especially past success), collective identity (team name, kit, rituals), established norms, clear roles, effective communication. Teams that have been together longer and experienced success are typically more cohesive.'},
            {label: 'Cohesion → Performance → Cohesion', detail: 'KEY POINT: The relationship between cohesion and performance is CIRCULAR. High cohesion leads to better performance, and success increases cohesion. But early failure can damage cohesion before it has time to develop. Interactive sports (football) need more cohesion than coactive sports (athletics relay).'}
        ]
    }}
},
// === SLIDE 484 ===
{
    id: 'grpdyn-005', topic: 'Group Dynamics', title: 'Steiner\'s Model of Group Productivity (1972)',
    content: '<p><span class="key-term">Steiner (1972)</span> proposed the equation: <strong>Actual Productivity = Potential Productivity − Losses Due to Faulty Processes</strong>. This explains why a team of the best individuals does NOT always produce the best team. Faulty processes include <span class="key-term">coordination losses</span> and <span class="key-term">motivation losses</span>.</p>',
    animation: { type: 'flow-diagram', hint: 'Click to explore each component of Steiner\'s model!', config: {
        title: 'Steiner\'s Model: AP = PP − FP',
        steps: [
            {label: 'Potential Productivity (PP)', detail: 'The BEST possible performance if every member performs to their maximum and coordinates perfectly. It is the sum of all individual abilities. E.g. if you combined the best players from every Premier League club into one team — that is their potential productivity.'},
            {label: 'Faulty Processes (FP)', detail: 'Anything that prevents the group from reaching its potential. Divided into coordination losses (poor teamwork, timing, communication) and motivation losses (social loafing, reduced effort). The bigger the group, the greater the faulty processes.'},
            {label: 'Coordination Losses', detail: 'Poor teamwork, bad timing, misunderstandings between players. E.g. two defenders going for the same ball and colliding, a misplaced pass due to lack of understanding, set pieces breaking down. Also called "Ringelmann effect" partly.'},
            {label: 'Motivation Losses', detail: 'Individual members reducing effort — social loafing. Occurs when individuals feel their contribution is not identifiable or important. More common in larger groups. E.g. a midfielder "hiding" during a match and not tracking back.'},
            {label: 'Actual Productivity (AP)', detail: 'What the team actually produces = PP minus all losses. A "dream team" of star players may underperform because of coordination and motivation losses. E.g. Real Madrid\'s Galacticos era — individual stars but not always the best team.'}
        ]
    }}
},
// === SLIDE 485 ===
{
    id: 'grpdyn-006', topic: 'Group Dynamics', title: 'The Ringelmann Effect (1913)',
    content: '<p>The <span class="key-term">Ringelmann effect</span> demonstrates that as group size increases, individual effort decreases. In his famous rope-pulling experiment, Ringelmann found that individuals pulled <strong>harder alone</strong> than in a group. In a group of 8, each person pulled at only <strong>49%</strong> of their individual maximum effort.</p>',
    animation: { type: 'progress-bar', hint: 'See how individual effort decreases as group size increases!', config: { bars: [
        {label: 'Individual (alone)', pct: 100, color: '#22c55e'},
        {label: 'Group of 2', pct: 93, color: '#22c55e'},
        {label: 'Group of 3', pct: 85, color: '#84cc16'},
        {label: 'Group of 4', pct: 77, color: '#f59e0b'},
        {label: 'Group of 6', pct: 63, color: '#f97316'},
        {label: 'Group of 8', pct: 49, color: '#ef4444'}
    ]}}
},
// === SLIDE 486 ===
{
    id: 'grpdyn-007', topic: 'Group Dynamics', title: 'Social Loafing — Causes & Characteristics',
    content: '<p><span class="key-term">Social loafing</span> is the tendency for individuals to reduce their effort when working in a group. It is a <strong>motivation loss</strong> in Steiner\'s model. Social loafing is more likely when individual contributions are <strong>not identifiable</strong>, the task is perceived as <strong>unimportant</strong>, or the individual believes <strong>others will compensate</strong>.</p>',
    animation: { type: 'flip-cards', hint: 'Click to explore causes of social loafing!', config: { cards: [
        {front: 'Lack of Identifiability', back: 'When individual effort cannot be measured or observed, people reduce effort. "Nobody will notice if I don\'t try as hard." In sport: a player hiding in a large team, not making runs or tracking back.'},
        {front: 'Dispensability of Effort', back: 'Believing your contribution is not important to the outcome. "The team will win anyway without my full effort." More common in large groups or when the team is much stronger than the opposition.'},
        {front: 'Sucker Effect', back: 'If a team member perceives others are loafing, they reduce their own effort to avoid being the "sucker" who works hard while others coast. Creates a downward spiral of effort.'},
        {front: 'Low Task Cohesion', back: 'When group members are not committed to the shared goal, social loafing increases. If players do not care about winning or see the task as unimportant, effort decreases.'},
        {front: 'Large Group Size', back: 'Social loafing increases with group size (Ringelmann effect). In larger groups, individual contributions are less visible and each person\'s impact seems smaller.'},
        {front: 'Sporting Examples', back: 'A footballer not pressing the opposition when the team is winning 4-0. A rower in an 8-person boat not pulling at maximum. A relay runner not sprinting fully on the 2nd leg when the team has a big lead.'}
    ]}}
},
// === SLIDE 487 ===
{
    id: 'grpdyn-008', topic: 'Group Dynamics', title: 'Cooperation & Coordination in Groups',
    content: '<p><span class="key-term">Cooperation</span> is working together towards a shared goal — supporting teammates, sharing resources, and communicating. <span class="key-term">Coordination</span> is the ability to link individual actions effectively — timing runs, executing set pieces, maintaining formations. Both are essential for reducing <strong>faulty processes</strong> in Steiner\'s model.</p>',
    animation: { type: 'barrier-explorer', hint: 'Click to explore cooperation and coordination in team performance!', config: { groups: [
        {label: 'Cooperation', color: '#2563eb', barriers: [], solutions: ['Willingness to work for the team, not just self', 'Sharing possession and opportunities', 'Supporting teammates defensively and offensively', 'Sacrificing personal glory for team success', 'Covering for teammates\' mistakes'], detail: 'Cooperation is about ATTITUDE and willingness to put the team first.'},
        {label: 'Coordination', color: '#22c55e', barriers: [], solutions: ['Timing of movements and passes', 'Maintaining team shape and formations', 'Executing set pieces effectively', 'Understanding teammates\' playing styles', 'Anticipating each other\'s actions'], detail: 'Coordination is about SKILL and the ability to synchronise actions.'},
        {label: 'Improving Both', color: '#f59e0b', barriers: [], solutions: ['Practise together regularly', 'Develop set plays and rehearse them', 'Video analysis of team coordination', 'Team-building activities for cooperation', 'Clear communication systems (calls, signals)'], detail: 'Cooperation and coordination improve with time together and deliberate practice.'}
    ]}}
},
// === SLIDE 488 ===
{
    id: 'grpdyn-009', topic: 'Group Dynamics', title: 'Strategies to Improve Cohesion & Overcome Social Loafing',
    content: '<p>Coaches can use various strategies to <strong>improve team cohesion</strong>, <strong>increase group productivity</strong>, and <strong>overcome social loafing</strong>. The most effective approach combines building both task and social cohesion while ensuring individual accountability.</p>',
    animation: { type: 'flow-diagram', hint: 'Click to explore strategies for improving team performance!', config: {
        title: 'Strategies for Team Effectiveness',
        steps: [
            {label: 'Individual Accountability', detail: 'Set individual targets within the team context. Use statistics and video analysis to monitor individual contributions. Give individual feedback. When players know their effort is being measured, social loafing decreases.'},
            {label: 'Clear Roles & Responsibilities', detail: 'Every member must have a defined role they understand and accept. This links to Tuckman\'s Norming stage. When roles are clear, coordination losses reduce. E.g. designated penalty taker, set piece routines.'},
            {label: 'Team-Building Activities', detail: 'Social events, training camps, and shared experiences build social cohesion. Pre-season trips, team meals, and communication exercises develop trust and friendship. However, social cohesion alone does not guarantee success.'},
            {label: 'Develop Shared Goals', detail: 'Set collective targets (e.g. "top 4 finish"). Ensure every member buys into the team goal. Task cohesion is often MORE important than social cohesion for performance. SMARTER goal setting applies at team level too.'},
            {label: 'Effective Leadership', detail: 'A good captain/coach manages group dynamics, resolves conflicts (Storming), reinforces norms, and motivates underperforming members. Democratic input on decisions (where appropriate) increases buy-in and cohesion.'},
            {label: 'Highlight Individual Importance', detail: 'Make every member feel valued and that their contribution matters. Recognise and praise effort, not just outcomes. Ensure substitutes and squad players feel included. This reduces the sense of dispensability that causes social loafing.'}
        ]
    }}
},
// === SLIDE 489 ===
{
    id: 'grpdyn-010', topic: 'Group Dynamics', title: 'Interactive vs Coactive Sports — Cohesion Differences',
    content: '<p>The importance of cohesion varies by sport type. In <span class="key-term">interactive sports</span> (football, basketball, hockey) where players must work closely together, cohesion is crucial. In <span class="key-term">coactive sports</span> (athletics relay, rowing, cycling team pursuit) where athletes perform alongside each other, task cohesion matters more than social cohesion.</p>',
    animation: { type: 'slider-compare', hint: 'Drag to compare interactive vs coactive sports!', config: {
        leftLabel: 'Interactive Sports', rightLabel: 'Coactive Sports',
        leftItems: ['High interdependence between players', 'Constant communication and coordination', 'Both task AND social cohesion important', 'Coordination losses have BIG impact', 'E.g. football, basketball, hockey, netball'],
        rightItems: ['Lower interdependence — parallel performance', 'Less moment-to-moment coordination needed', 'TASK cohesion more important than social', 'Individual performance more identifiable', 'E.g. relay, rowing, cycling team pursuit']
    }}
},
// === SLIDE 490 ===
{
    id: 'grpdyn-011', topic: 'Group Dynamics', title: 'Group Dynamics — Applied Exam Scenario',
    content: '<p>Apply your knowledge of group dynamics to explain why a team of individually talented players might underperform. Use <strong>Steiner\'s model</strong>, <strong>Tuckman\'s stages</strong>, <strong>social loafing</strong>, and <strong>cohesion</strong> concepts in your analysis.</p>',
    animation: { type: 'drag-sort', hint: 'Drag these factors in order of importance for team success!', config: {
        instruction: 'Rank these factors from MOST to LEAST important for team success:',
        items: ['Task cohesion (shared goals)', 'Effective coordination', 'Individual talent', 'Social cohesion (friendships)', 'Clear roles and accountability', 'Strong leadership'],
        correctOrder: ['Task cohesion (shared goals)', 'Effective coordination', 'Strong leadership', 'Clear roles and accountability', 'Individual talent', 'Social cohesion (friendships)']
    }}
},
// === SLIDE 491 ===
{
    id: 'grpdyn-012', topic: 'Group Dynamics', title: 'Group Dynamics — Review Quiz',
    content: '<p>Test your understanding of group dynamics, Steiner\'s model, Tuckman\'s stages, cohesion, and social loafing!</p>',
    animation: { type: 'quiz', hint: 'Choose the best answer!', config: {
        question: 'According to Steiner\'s model, a team of the best individual players underperforms because of:',
        options: [
            'Lack of individual talent in the group',
            'Losses due to faulty processes (coordination and motivation losses)',
            'The team being in the Forming stage of Tuckman\'s model',
            'Too much social cohesion reducing competitive drive'
        ],
        correct: 1,
        explanation: 'Steiner\'s model: Actual Productivity = Potential Productivity − Faulty Processes. Even when potential productivity is high (talented individuals), coordination losses (poor teamwork, timing) and motivation losses (social loafing) reduce actual performance. This is why "the best team" often beats "a team of the best players." The Ringelmann effect and social loafing are specific examples of motivation losses.'
    }}
}
);
