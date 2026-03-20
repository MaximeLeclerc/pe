window.ALL_SLIDES = window.ALL_SLIDES || [];
window.ALL_SLIDES.push(
// ==========================================
// 3.2.4.8 THE ROLE OF TECHNOLOGY IN PHYSICAL
// ACTIVITY AND SPORT — SPORTS ANALYTICS
// ==========================================
// === SLIDE TA-001 ===
{
    id: 'techanalytics-001', topic: 'Technology & Sports Analytics', title: 'Sports Analytics — Data Collection',
    content: '<p><span class="key-term">Sports analytics</span> is the use of data and statistical analysis to optimise performance. Effective analytics begins with <strong>data collection</strong> — which can be <span class="key-term">quantitative</span> (numerical) or <span class="key-term">qualitative</span> (descriptive), and <span class="key-term">objective</span> (measurable, unbiased) or <span class="key-term">subjective</span> (opinion-based, observer-dependent).</p>',
    animation: { type: 'drag-sort', hint: 'Drag each data type to the correct category!', config: {
        zones: [
            {label: 'Quantitative & Objective', items: ['Sprint time: 10.91 seconds', 'Heart rate: 172 bpm', 'Distance covered: 11.2 km', 'VO2max: 58 ml/kg/min']},
            {label: 'Qualitative & Subjective', items: ['Coach\'s assessment: "Good technique"', 'Judge\'s score for artistic merit', 'Player rating: 7/10 by pundit', 'Fan perception of team performance']}
        ]
    }}
},
// === SLIDE TA-002 ===
{
    id: 'techanalytics-002', topic: 'Technology & Sports Analytics', title: 'Validity & Reliability of Data',
    content: '<p>For sports analytics to be useful, data must be <span class="key-term">valid</span> (it measures what it claims to measure) and <span class="key-term">reliable</span> (it produces consistent results when repeated). Poor data quality leads to incorrect conclusions and flawed decision-making. Maintaining <strong>data integrity</strong> is essential.</p>',
    animation: { type: 'flip-cards', hint: 'Click to explore validity, reliability, and data integrity!', config: { cards: [
        {front: 'Validity', back: 'Does the test/measurement actually measure what it claims? E.g. a bleep test is a VALID measure of aerobic endurance but NOT a valid measure of sprinting speed. Using the right test for the right purpose is essential.'},
        {front: 'Reliability', back: 'Does the test produce the SAME results under the same conditions? A reliable test gives consistent measurements. Factors affecting reliability: equipment calibration, environmental conditions, tester consistency, participant preparation.'},
        {front: 'Objectivity', back: 'Is the data free from personal bias? Objective data (GPS distance, sprint time) is measured by instruments and is the same regardless of who collects it. Subjective data (coaching assessment, judge scores) varies between observers.'},
        {front: 'Data Integrity', back: 'Ensuring data is accurate, complete, and unaltered throughout collection, storage, and analysis. Threats: equipment malfunction, human error in recording, deliberate manipulation, software bugs, poor calibration.'},
        {front: 'Maintaining Integrity', back: 'Regular equipment calibration, standardised testing protocols, trained testers, secure data storage, audit trails, cross-checking with multiple data sources. GDPR compliance for personal athlete data.'},
        {front: 'Limitations of Data', back: 'Data tells you WHAT happened but not always WHY. Context matters — a player\'s stats may look poor but they were following tactical instructions. Over-reliance on data can miss qualitative factors like leadership, attitude, and team chemistry.'}
    ]}}
},
// === SLIDE TA-003 ===
{
    id: 'techanalytics-003', topic: 'Technology & Sports Analytics', title: 'Video & Analysis Programmes',
    content: '<p><span class="key-term">Video analysis</span> is one of the most widely used technologies in sport. Systems like <strong>Hudl, Sportscode, Dartfish, and Opta</strong> allow coaches to record, tag, code, and analyse every aspect of performance. Video provides objective evidence that complements subjective coaching observation.</p>',
    animation: { type: 'flow-diagram', hint: 'Click to explore video analysis technology!', config: {
        title: 'Video Analysis in Sport',
        steps: [
            {label: 'Recording', detail: 'Multiple camera angles capture all action. Fixed cameras cover the whole pitch/court. Close-up cameras track individual players. Modern systems can record in 4K at high frame rates for detailed slow-motion analysis.'},
            {label: 'Coding & Tagging', detail: 'Analysts tag events in real time or post-match: passes, tackles, shots, errors, set pieces. Each event is time-stamped and categorised. This creates a searchable database of every action in every match.'},
            {label: 'Analysis & Output', detail: 'Software generates statistics, heat maps, passing networks, and highlight reels. Coaches can compare players, identify patterns, and track performance over time. Video clips are packaged for team meetings.'},
            {label: 'Feedback to Athletes', detail: 'Athletes receive personalised video feedback on tablets or phones. They can review their own performance, compare to ideal technique models, and see specific examples of areas for improvement. Visual feedback is more powerful than verbal.'},
            {label: 'Opposition Analysis', detail: 'Coaches analyse opponents\' tactics, set pieces, strengths, and weaknesses. Identify patterns (e.g. which side they attack from, how they defend corners). This information informs tactical preparation.'}
        ]
    }}
},
// === SLIDE TA-004 ===
{
    id: 'techanalytics-004', topic: 'Technology & Sports Analytics', title: 'Testing Equipment — Metabolic Cart & Indirect Calorimetry',
    content: '<p>A <span class="key-term">metabolic cart</span> is a piece of laboratory equipment used for <span class="key-term">indirect calorimetry</span> — measuring the gases breathed in (O₂) and out (CO₂) to calculate energy expenditure, VO₂max, and respiratory exchange ratio (RER). It is the gold standard for measuring aerobic fitness.</p>',
    animation: { type: 'flip-cards', hint: 'Click to learn about metabolic testing technology!', config: { cards: [
        {front: 'Metabolic Cart', back: 'A portable or laboratory-based system that measures the volume and composition of inspired and expired air. The athlete wears a face mask connected to the cart while exercising (usually on a treadmill or cycle ergometer).'},
        {front: 'Indirect Calorimetry', back: 'Calculates energy expenditure INDIRECTLY by measuring O₂ consumption and CO₂ production. More O₂ consumed = more energy being used. Called "indirect" because it doesn\'t measure heat directly but infers it from gas exchange.'},
        {front: 'VO₂max Testing', back: 'The metabolic cart measures VO₂max — the maximum volume of oxygen the body can use per minute. The gold standard of aerobic fitness. Athletes exercise at increasing intensity until exhaustion. VO₂max is reached when O₂ consumption plateaus.'},
        {front: 'Respiratory Exchange Ratio (RER)', back: 'RER = CO₂ produced ÷ O₂ consumed. RER indicates which fuel source is being used: RER of 0.7 = fat oxidation. RER of 1.0 = carbohydrate oxidation. RER above 1.0 = anaerobic threshold exceeded.'},
        {front: 'Applications', back: 'Determining VO₂max and aerobic capacity. Identifying lactate/anaerobic threshold. Prescribing training zones. Monitoring training adaptations over time. Nutritional planning (fuel utilisation). Research purposes.'},
        {front: 'Limitations', back: 'Expensive equipment (£20,000+). Requires trained technicians. Laboratory conditions may not replicate sport-specific demands. Face mask can be uncomfortable and affect natural breathing. Time-consuming testing protocol.'}
    ]}}
},
// === SLIDE TA-005 ===
{
    id: 'techanalytics-005', topic: 'Technology & Sports Analytics', title: 'GPS & Motion Tracking Technology',
    content: '<p><span class="key-term">GPS tracking</span> and <span class="key-term">motion tracking</span> technology has revolutionised how coaches monitor player performance in team sports. Athletes wear GPS units in vests during training and matches, providing real-time data on movement patterns, distance, speed, and workload.</p>',
    animation: { type: 'flow-diagram', hint: 'Click to explore GPS and motion tracking technology!', config: {
        title: 'GPS & Motion Tracking',
        steps: [
            {label: 'GPS Units', detail: 'Small devices worn in a vest between the shoulder blades. Sample at 10-18 Hz (10-18 readings per second). Measure: total distance, high-speed running distance (>5.5 m/s), sprint distance (>7 m/s), accelerations, decelerations. Brands: Catapult, STATSports, Playermaker.'},
            {label: 'Real-Time Monitoring', detail: 'Data is transmitted wirelessly to coaching staff on the sideline. Coaches can monitor each player\'s workload LIVE during training and matches. If a player\'s metrics drop, the coach can substitute them or adjust training.'},
            {label: 'Load Management', detail: 'GPS data tracks cumulative training load over days, weeks, and months. Coaches use Acute:Chronic Workload Ratio (ACWR) to manage injury risk. Sudden spikes in workload are linked to soft tissue injuries. GPS helps keep players in the "safe zone."'},
            {label: 'Motion Capture (Indoor)', detail: 'For indoor sports and laboratory analysis, optical motion capture systems (e.g. Vicon) use reflective markers and multiple cameras to create 3D models of movement. Measures joint angles, velocities, and movement patterns with sub-millimetre accuracy.'},
            {label: 'Applications', detail: 'Injury prevention (load management). Tactical analysis (positioning, spacing). Return-to-play protocols (match fitness benchmarks). Talent identification (physical profiles). Player comparison and recruitment.'}
        ]
    }}
},
// === SLIDE TA-006 ===
{
    id: 'techanalytics-006', topic: 'Technology & Sports Analytics', title: 'Functions of Sports Analytics',
    content: '<p>Sports analytics serves multiple <span class="key-term">functions</span> across the sporting landscape — from monitoring fitness to preventing injury, developing skills, analysing games, and identifying talent. Each function uses different data sources and analytical methods.</p>',
    animation: { type: 'flip-cards', hint: 'Click to explore each function of sports analytics!', config: { cards: [
        {front: 'Monitor Fitness for Performance', back: 'Track physiological markers (VO₂max, lactate threshold, body composition, strength metrics) over time. Identify improvements and plateaus. Adjust training programmes based on objective data. Ensure peak fitness for key competitions.'},
        {front: 'Skill & Technique Development', back: 'Video analysis with biomechanical overlays identifies technical flaws. Motion capture creates 3D models of technique. Athletes compare their technique to ideal models or elite performers. Provides objective feedback for coach and athlete.'},
        {front: 'Injury Prevention', back: 'GPS load monitoring, force plate testing, and movement screening identify injury risk factors. Acute:Chronic Workload Ratio (ACWR) keeps training loads safe. Pre-season screening identifies weaknesses. Machine learning predicts injury probability.'},
        {front: 'Game Analysis', back: 'Post-match analysis of tactics, formations, set pieces, and individual performance. Heat maps, passing networks, pressing triggers, defensive shape. Opposition analysis to prepare tactically. Used at every level from grassroots to elite.'},
        {front: 'Talent ID & Scouting', back: 'Data-driven recruitment: statistical models identify undervalued players (Moneyball approach). Physical profiling identifies potential in young athletes. Scouts combine data with qualitative observation. Reduces cost and risk of recruitment.'},
        {front: 'Return to Play', back: 'After injury, analytics track rehabilitation progress against benchmarks. GPS data confirms match fitness (e.g. can the player achieve 85% of pre-injury high-speed running?). Objective criteria for return-to-play decisions reduce re-injury risk.'}
    ]}}
},
// === SLIDE TA-007 ===
{
    id: 'techanalytics-007', topic: 'Technology & Sports Analytics', title: 'Development of Equipment & Facilities',
    content: '<p>Technology has driven the development of <span class="key-term">equipment</span> and <span class="key-term">facilities</span>, impacting both participation and performance. Material technology has produced lighter, stronger, and more aerodynamic equipment. Facilities have evolved with multi-use designs and Olympic legacy infrastructure.</p>',
    animation: { type: 'flip-cards', hint: 'Click to explore equipment and facility developments!', config: { cards: [
        {front: 'Material Technology', back: 'Carbon fibre (cycling, tennis), titanium (golf), Kevlar (cricket), polyurethane (swimsuits — now banned). Materials are lighter, stronger, more aerodynamic. Constant innovation pushes performance boundaries. Raises ethical questions about technological doping.'},
        {front: 'Adapted Equipment', back: 'Technology enables adapted equipment for disability sport: racing wheelchairs, prosthetic running blades, sit-skis, boccia ramps. Also age-adapted: lighter bats for juniors, smaller goals, modified balls. Increases inclusivity and participation.'},
        {front: 'Facility Design — Surfaces', back: 'All-weather artificial pitches (3G, 4G) allow year-round play. Athletics tracks evolved from cinder to Mondo rubber surfaces. Indoor facilities with climate control. Surface technology affects performance, injury risk, and participation.'},
        {front: 'Multi-Use Facilities', back: 'Modern facilities serve multiple sports and community functions. Tottenham Hotspur Stadium hosts football AND NFL games. Olympic parks converted to community use. Cost-effective, maximises usage, and serves broader population.'},
        {front: 'Olympic Legacy', back: 'London 2012 Olympic Park → Queen Elizabeth Olympic Park. Velodrome, Aquatics Centre, and stadium repurposed for community and elite use. Legacy planning now essential for all major events. Mixed success — some venues become "white elephants."'},
        {front: 'Impact on Participation', back: 'Better facilities increase participation — particularly all-weather surfaces, floodlights, and accessible design. However, cost can be a barrier — not all communities have access to modern facilities. Geographic inequality persists.'}
    ]}}
},
// === SLIDE TA-008 ===
{
    id: 'techanalytics-008', topic: 'Technology & Sports Analytics', title: 'Technology — Impact on Sport, Performer, Coach & Audience',
    content: '<p>Technology\'s role in sport must be evaluated from multiple perspectives: the <strong>sport</strong> itself, the <strong>performer</strong>, the <strong>coach</strong>, and the <strong>audience</strong>. Both positive and negative impacts should be considered for a balanced AQA exam answer.</p>',
    animation: { type: 'barrier-explorer', hint: 'Click to explore technology\'s impact on each stakeholder!', config: { groups: [
        {label: 'Impact on Sport', color: '#2563eb', barriers: ['Rule changes driven by technology (VAR delays)', 'Inequality between tech-rich and tech-poor sports', '"Technological doping" debates', 'Over-reliance on data reduces human element'], solutions: ['More accurate and fair results', 'Increased global audience through broadcasting', 'Faster, more exciting performances', 'Better safety standards and protocols']},
        {label: 'Impact on Performer', color: '#22c55e', barriers: ['Constant monitoring can feel invasive', 'Data overload — paralysis by analysis', 'Pressure to justify performance through data', 'Privacy concerns with biometric data'], solutions: ['Improved equipment enhances performance', 'Personalised training based on data', 'Better injury prevention and rehab', 'Fairer competition through accurate officiating']},
        {label: 'Impact on Coach', color: '#f59e0b', barriers: ['Information overload — too much data', 'Expensive — smaller clubs/sports miss out', 'Technology can undermine coaching intuition', 'Requires technical skills to use effectively'], solutions: ['Data-driven decisions improve outcomes', 'Video analysis enhances feedback quality', 'GPS monitoring prevents overtraining', 'Better opposition analysis and preparation']},
        {label: 'Impact on Audience', color: '#8b5cf6', barriers: ['VAR delays reduce atmosphere', 'Pay-TV excludes those who can\'t afford it', 'Social media enables abuse of athletes', 'Over-analysis can reduce spontaneity of viewing'], solutions: ['Enhanced viewing experience (replays, stats)', 'Global access to watch any sport', 'Interactive engagement via apps and social media', 'VR and AR offer immersive future experiences']}
    ]}}
},
// === SLIDE TA-009 ===
{
    id: 'techanalytics-009', topic: 'Technology & Sports Analytics', title: 'Technology & Sports Analytics — Review Quiz',
    content: '<p>Test your understanding of technology and sports analytics for AQA A-level PE!</p>',
    animation: { type: 'quiz', hint: 'Choose the best answer!', config: {
        question: 'A coach uses a metabolic cart to measure an athlete\'s VO₂max. This is an example of which type of data collection?',
        options: [
            'Qualitative and subjective',
            'Quantitative and objective',
            'Qualitative and objective',
            'Quantitative and subjective'
        ],
        correct: 1,
        explanation: 'A metabolic cart produces QUANTITATIVE data (numerical values — ml/kg/min) that is OBJECTIVE (measured by scientific equipment, not influenced by personal opinion). The VO₂max value is the same regardless of who operates the equipment (assuming correct protocol). This makes it both valid and reliable — the gold standard for measuring aerobic fitness. In contrast, a coach\'s assessment of "good endurance" would be qualitative and subjective.'
    }}
}
);
