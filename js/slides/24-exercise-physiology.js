window.ALL_SLIDES = window.ALL_SLIDES || [];
window.ALL_SLIDES.push(
// ==========================================
// 3.2.1 EXERCISE PHYSIOLOGY
// ==========================================
// 3.2.1.1 DIET & NUTRITION, PREPARATION & TRAINING METHODS
// === SLIDE 418 ===
{
    id: 'exphys-001', topic: 'Exercise Physiology', title: 'Macronutrients — Carbohydrates',
    content: '<p><span class="key-term">Carbohydrates</span> are the body\'s preferred energy source during moderate-to-high intensity exercise. They are stored as <span class="key-term">glycogen</span> in muscles (~400g) and the liver (~100g), and circulate as blood glucose. Simple carbs (sugars) provide fast energy; complex carbs (starch) provide sustained release.</p>',
    animation: { type: 'flip-cards', hint: 'Click to explore carbohydrate essentials!', config: { cards: [
        {front: 'Simple Carbohydrates', back: 'Monosaccharides (glucose, fructose) and disaccharides (sucrose, lactose). Rapidly digested → quick energy spike. Found in fruit, sweets, sports drinks. Useful immediately before/during exercise.'},
        {front: 'Complex Carbohydrates', back: 'Polysaccharides (starch, glycogen). Slow, sustained energy release. Found in pasta, rice, bread, potatoes. Should form the bulk of a performer\'s carb intake (55-60% of total diet).'},
        {front: 'Glycogen Storage', back: 'Muscles store ~400g glycogen, liver ~100g. Depleted after ~90 mins of continuous exercise. Trained athletes can store more glycogen (supercompensation). Must be replenished post-exercise.'},
        {front: 'Glycaemic Index (GI)', back: 'Ranks carbs by how quickly they raise blood glucose. High GI (>70): fast release — good during/post exercise. Low GI (<55): slow release — good pre-exercise for sustained energy.'},
        {front: 'Fibre', back: 'A non-digestible complex carbohydrate. Important for digestive health but not a direct energy source. Found in wholegrain foods, vegetables, and legumes.'}
    ]}}
},
// === SLIDE 419 ===
{
    id: 'exphys-002', topic: 'Exercise Physiology', title: 'Macronutrients — Fats & Proteins',
    content: '<p><span class="key-term">Fats</span> (lipids) are the primary fuel for low-intensity, prolonged exercise and provide 9 kcal per gram — more than double carbohydrates. <span class="key-term">Proteins</span> are essential for muscle repair, growth, and immune function, providing 4 kcal per gram. Protein is not a primary energy source but is used during prolonged exercise when glycogen is depleted.</p>',
    animation: { type: 'flip-cards', hint: 'Click to compare fats and proteins!', config: { cards: [
        {front: 'Saturated Fats', back: 'Found in animal products (butter, cheese, red meat). Solid at room temperature. Excess linked to cardiovascular disease. Should be limited to <10% of total energy intake.'},
        {front: 'Unsaturated Fats', back: 'Found in oily fish, nuts, olive oil, avocados. Liquid at room temperature. Omega-3 and Omega-6 are essential fatty acids — reduce inflammation and support recovery.'},
        {front: 'Fat as Fuel', back: 'Primary energy source at rest and during low-intensity exercise (<60% VO₂max). Abundant stores even in lean individuals (~80,000 kcal). Requires more oxygen to metabolise than carbs.'},
        {front: 'Protein Functions', back: 'Muscle repair and hypertrophy, enzyme and hormone production, immune function, haemoglobin formation. Athletes need 1.2-2.0g per kg body mass per day (higher than sedentary 0.8g/kg).'},
        {front: 'Essential Amino Acids', back: '9 amino acids the body cannot synthesise — must be obtained from diet. Complete proteins (meat, fish, eggs, dairy) contain all 9. Vegetarians must combine sources (beans + rice).'},
        {front: 'Protein Timing', back: 'Consuming protein within 30-60 mins post-exercise (the "anabolic window") maximises muscle protein synthesis. 20-25g per serving is optimal for most athletes.'}
    ]}}
},
// === SLIDE 420 ===
{
    id: 'exphys-003', topic: 'Exercise Physiology', title: 'Micronutrients — Vitamins & Minerals',
    content: '<p><span class="key-term">Micronutrients</span> are vitamins and minerals needed in small amounts but essential for energy metabolism, bone health, oxygen transport, and immune function. Deficiencies can impair performance and health. A <strong>balanced diet</strong> should provide all necessary micronutrients without supplementation.</p>',
    animation: { type: 'flow-diagram', hint: 'Click to explore key micronutrients for performers!', config: {
        title: 'Key Micronutrients for Sport',
        steps: [
            {label: 'Iron', detail: 'Essential for haemoglobin formation (oxygen transport). Deficiency causes anaemia → fatigue, reduced VO₂max. Found in red meat, spinach, lentils. Female athletes at higher risk of deficiency.'},
            {label: 'Calcium', detail: 'Vital for bone density and muscle contraction. Deficiency increases fracture risk (stress fractures). Found in dairy, green vegetables, fortified foods. Works with Vitamin D for absorption.'},
            {label: 'Vitamin D', detail: 'Aids calcium absorption, supports bone health and immune function. Produced by skin in sunlight. Deficiency common in UK athletes (limited sun). May need supplementation in winter.'},
            {label: 'B Vitamins', detail: 'B1, B2, B6, B12 essential for energy metabolism — converting carbs, fats, proteins into ATP. Found in whole grains, meat, eggs. Deficiency impairs energy production during exercise.'},
            {label: 'Antioxidants (C & E)', detail: 'Vitamins C and E protect cells from oxidative damage caused by intense exercise. Support immune function and recovery. Found in citrus fruits, berries, nuts, seeds.'}
        ]
    }}
},
// === SLIDE 421 ===
{
    id: 'exphys-004', topic: 'Exercise Physiology', title: 'Energy Balance & Body Composition',
    content: '<p><span class="key-term">Energy balance</span> is the relationship between energy intake (food/drink) and energy expenditure (BMR + physical activity + thermic effect of food). When intake equals expenditure, body mass is stable. <span class="key-term">Body composition</span> refers to the ratio of fat mass to fat-free mass (muscle, bone, organs).</p>',
    animation: { type: 'slider-compare', hint: 'Explore the effects of energy surplus vs deficit!', config: {
        leftLabel: 'Energy Surplus (intake > expenditure)',
        rightLabel: 'Energy Deficit (intake < expenditure)',
        leftItems: ['Weight gain — excess energy stored as fat', 'Beneficial for strength/power athletes in hypertrophy phase', 'Can increase body fat % if not combined with training', 'Excess body fat reduces power-to-weight ratio', 'May impair endurance performance'],
        rightItems: ['Weight loss — body uses stored energy', 'Used for "making weight" in weight-category sports', 'Risk of muscle loss if deficit too extreme', 'Can impair recovery and immune function', 'Must be carefully managed to maintain performance']
    }}
},
// === SLIDE 422 ===
{
    id: 'exphys-005', topic: 'Exercise Physiology', title: 'Dietary Manipulation — Carbohydrate Loading',
    content: '<p><span class="key-term">Carbohydrate loading</span> is a strategy to maximise glycogen stores before endurance events lasting >90 minutes. It can increase glycogen stores by 50-100%, delaying fatigue and improving performance in events like marathon running, road cycling, and triathlon.</p>',
    animation: { type: 'timeline', hint: 'Follow the carb-loading protocol!', config: { events: [
        {date: 'Days 1-3', title: 'Depletion Phase', detail: 'Train at high intensity to deplete muscle glycogen stores. Maintain a low-carbohydrate diet (~40% carbs). This "primes" the muscles for supercompensation.'},
        {date: 'Days 4-6', title: 'Loading Phase', detail: 'Switch to a HIGH-carbohydrate diet (70-80% carbs). Reduce training volume (taper). Muscles overcompensate by storing MORE glycogen than normal.'},
        {date: 'Day 7', title: 'Event Day', detail: 'Glycogen stores are maximised. Eat a high-carb meal 3-4 hours before. During the event, consume carb drinks/gels every 20-30 mins to maintain blood glucose.'},
        {date: 'Post-Event', title: 'Recovery', detail: 'Consume high-GI carbs within 30 mins post-event to begin glycogen resynthesis. Continue high-carb intake for 24-48 hours. Combine with protein for optimal recovery.'},
        {date: 'Limitations', title: 'Considerations', detail: 'Water retention causes weight gain (~2kg) — disadvantage in weight-sensitive sports. GI discomfort possible. Only effective for endurance events >90 mins. Not suitable for repeated use.'}
    ]}}
},
// === SLIDE 423 ===
{
    id: 'exphys-006', topic: 'Exercise Physiology', title: 'Hydration Strategies',
    content: '<p><span class="key-term">Hydration</span> is critical for performance. A 2% loss in body mass through sweat impairs performance; 5% can reduce work capacity by ~30%. Water regulates temperature, transports nutrients, and maintains blood volume. Athletes should develop a <strong>personalised hydration plan</strong>.</p>',
    animation: { type: 'flow-diagram', hint: 'Click to explore hydration strategies!', config: {
        title: 'Hydration for Performance',
        steps: [
            {label: 'Pre-Exercise', detail: 'Drink 5-7 ml/kg body mass in the 4 hours before exercise. Urine should be pale straw colour. Avoid overhydration (hyponatraemia risk). Can use hypotonic drinks.'},
            {label: 'During Exercise', detail: 'Aim for 150-350 ml every 15-20 minutes depending on sweat rate. Use isotonic drinks (6-8% carbohydrate) for exercise >60 mins — replaces fluid, electrolytes, and provides energy.'},
            {label: 'Post-Exercise', detail: 'Replace 150% of fluid lost (weigh before and after). Include sodium to aid retention. Milk is an effective recovery drink (fluid + protein + carbs + electrolytes).'},
            {label: 'Drink Types', detail: 'Hypotonic (<4% carbs): fast absorption, rehydration. Isotonic (6-8% carbs): fluid + energy replacement. Hypertonic (>8% carbs): energy replacement, slower absorption — not ideal for rehydration.'},
            {label: 'Dehydration Effects', detail: 'Reduced blood volume → reduced stroke volume → increased heart rate. Impaired thermoregulation → overheating risk. Reduced cognitive function and reaction time. Increased perceived exertion.'}
        ]
    }}
},
// === SLIDE 424 ===
{
    id: 'exphys-007', topic: 'Exercise Physiology', title: 'Training Methods — Continuous, Fartlek & Interval',
    content: '<p><span class="key-term">Training methods</span> must match the demands of the sport and the fitness component being developed. <strong>Continuous training</strong> maintains a steady pace for 30+ minutes. <strong>Fartlek</strong> varies speed and terrain. <strong>Interval training</strong> alternates high-intensity work with rest periods.</p>',
    animation: { type: 'flip-cards', hint: 'Click to compare aerobic training methods!', config: { cards: [
        {front: 'Continuous Training', back: 'Steady-state exercise at 60-80% max HR for 30+ mins. Develops aerobic endurance (VO₂max). Examples: jogging, swimming, cycling. Suitable for: marathon runners, games players (aerobic base). Advantages: simple, no equipment needed. Limitations: can be monotonous, sport-specific only for endurance athletes.'},
        {front: 'Fartlek Training', back: 'Swedish for "speed play". Varies intensity, speed, terrain, and duration within one session. Develops aerobic AND anaerobic fitness. Example: jog 5 mins → sprint 30s → walk 1 min → hill run 2 mins. Ideal for: games players who need to change pace frequently.'},
        {front: 'Interval Training', back: 'Alternates periods of high-intensity work with rest/low-intensity recovery. Manipulate: duration, intensity, reps, sets, rest. Example: 6 × 400m at 90% max HR, 90s rest. Develops anaerobic or aerobic systems depending on work:rest ratio.'},
        {front: 'HIIT', back: 'High-Intensity Interval Training. Short bursts of maximal effort (e.g. 20s on, 10s off — Tabata). Develops anaerobic capacity, VO₂max, and promotes EPOC (excess post-exercise oxygen consumption). Time-efficient. Very demanding — needs adequate recovery.'},
        {front: 'Work:Rest Ratios', back: 'Aerobic intervals: 1:1 or 1:0.5 (e.g. 3 min work, 1.5 min rest). Anaerobic intervals: 1:3 to 1:5 (e.g. 10s sprint, 50s rest) to allow ATP-PC replenishment. Ratio depends on energy system targeted.'}
    ]}}
},
// === SLIDE 425 ===
{
    id: 'exphys-008', topic: 'Exercise Physiology', title: 'Training Methods — Circuit, Weight & Plyometric',
    content: '<p><span class="key-term">Circuit training</span> uses a series of exercises performed in sequence. <span class="key-term">Weight training</span> uses resistance to develop strength and power. <span class="key-term">Plyometric training</span> uses explosive movements to develop power through the stretch-shortening cycle.</p>',
    animation: { type: 'flip-cards', hint: 'Click to explore strength and power training methods!', config: { cards: [
        {front: 'Circuit Training', back: 'Series of 6-10 exercises (stations) targeting different muscle groups, performed in rotation with minimal rest. Can develop muscular endurance, strength, or aerobic fitness depending on design. Advantages: versatile, can be sport-specific, minimal equipment. Good for groups.'},
        {front: 'Weight/Resistance Training', back: 'Uses free weights, machines, or body weight. Manipulate: reps, sets, load, rest. Strength: high load (80-100% 1RM), low reps (1-5), long rest. Hypertrophy: moderate load (67-85% 1RM), 6-12 reps. Endurance: low load (<67% 1RM), 12+ reps.'},
        {front: 'Plyometric Training', back: 'Rapid eccentric contraction followed immediately by explosive concentric contraction (stretch-shortening cycle). Examples: box jumps, depth jumps, bounding, clap press-ups. Develops elastic strength and power. High injury risk — needs strong strength base first.'},
        {front: 'Flexibility Training', back: 'Static stretching: hold position for 10-30s. PNF: contract-relax-stretch (most effective). Ballistic: bouncing movements (higher risk). Dynamic: controlled movements through full ROM. Should be included in cool-down. Improves range of movement and reduces injury risk.'},
        {front: '1RM & Training Zones', back: '1RM = maximum weight lifted once with correct form. Training zones: Strength 80-100% 1RM. Hypertrophy 67-85% 1RM. Muscular Endurance <67% 1RM. Power 50-75% 1RM performed explosively. Periodically re-test to ensure progressive overload.'}
    ]}}
},
// === SLIDE 426 ===
{
    id: 'exphys-009', topic: 'Exercise Physiology', title: 'Periodisation — Structuring Training',
    content: '<p><span class="key-term">Periodisation</span> is the systematic planning of athletic training, dividing the year into structured phases to optimise performance and prevent overtraining. It ensures athletes reach <span class="key-term">peak performance</span> at the right time (e.g. major competition).</p>',
    animation: { type: 'timeline', hint: 'Follow the periodisation structure!', config: { events: [
        {date: 'Macrocycle', title: 'Long-Term Plan (1 year / Olympic cycle)', detail: 'The overall training programme covering a full season or multi-year plan. Outlines goals, competition dates, and the phases of training. For Olympic athletes, may span a 4-year cycle.'},
        {date: 'Mesocycle', title: 'Medium-Term Block (4-12 weeks)', detail: 'A phase within the macrocycle with a specific focus. Examples: general preparation (aerobic base), specific preparation (sport-specific fitness), competition phase (maintain fitness, peak), transition/recovery (active rest).'},
        {date: 'Microcycle', title: 'Short-Term Plan (1 week typically)', detail: 'The smallest training unit. Details daily sessions: intensity, volume, type, rest days. Varies within a mesocycle to manage fatigue. May include hard/easy day alternation.'},
        {date: 'Preparation', title: 'Pre-Season Phase', detail: 'Build fitness base: aerobic endurance, strength, flexibility. Progress from general to sport-specific training. Highest training volume. Furthest from competition.'},
        {date: 'Competition', title: 'In-Season Phase', detail: 'Maintain fitness, focus on tactics and skill. Reduce volume, maintain intensity. Tapering before major events. Sport-specific training dominates. Recovery between competitions is key.'},
        {date: 'Transition', title: 'Off-Season / Recovery', detail: 'Active rest — maintain base fitness with cross-training. Physical and psychological recovery. Address injuries. Lowest training volume. Prevents overtraining and burnout.'}
    ]}}
},
// === SLIDE 427 ===
{
    id: 'exphys-010', topic: 'Exercise Physiology', title: 'Warm-Up — Physiological Effects',
    content: '<p>A thorough <span class="key-term">warm-up</span> prepares the body for exercise by gradually increasing heart rate, blood flow, and muscle temperature. It should last <strong>15-20 minutes</strong> and include a pulse raiser, stretching, and sport-specific movements. It reduces injury risk and improves performance.</p>',
    animation: { type: 'flow-diagram', hint: 'Click to explore the physiological effects of warming up!', config: {
        title: 'Physiological Effects of a Warm-Up',
        steps: [
            {label: 'Increased Muscle Temperature', detail: 'Warmer muscles contract faster and more forcefully. Reduced viscosity of muscle and synovial fluid → greater range of movement. Enzyme activity increases → faster energy production (ATP resynthesis).'},
            {label: 'Increased Heart Rate & Blood Flow', detail: 'Gradual rise in HR and cardiac output. Vasodilation increases blood flow to working muscles. More O₂ and glucose delivered. Pre-loads the cardiovascular system — reduces oxygen deficit at start of exercise.'},
            {label: 'Increased Oxygen Delivery', detail: 'Bohr effect: increased temperature shifts the oxyhaemoglobin dissociation curve RIGHT → O₂ released more readily to muscles. More efficient gas exchange at tissues.'},
            {label: 'Psychological Preparation', detail: 'Mental rehearsal and focus. Increased alertness and concentration. Reduced anxiety through routine. Opportunity for tactical reminders and team cohesion.'},
            {label: 'Injury Prevention', detail: 'Increased elasticity of muscles, tendons, and ligaments. Greater ROM at joints. Activation of neuromuscular pathways. Reduced risk of muscle strains and joint injuries.'}
        ]
    }}
},
// === SLIDE 428 ===
{
    id: 'exphys-011', topic: 'Exercise Physiology', title: 'Cool-Down — Physiological Effects',
    content: '<p>A <span class="key-term">cool-down</span> involves low-intensity exercise followed by stretching. It maintains blood flow to remove metabolic waste products, prevents <span class="key-term">blood pooling</span> in the veins, and begins the recovery process. Omitting a cool-down increases DOMS risk and delays recovery.</p>',
    animation: { type: 'flow-diagram', hint: 'Click to explore the physiological effects of cooling down!', config: {
        title: 'Physiological Effects of a Cool-Down',
        steps: [
            {label: 'Maintains Venous Return', detail: 'Continued low-intensity exercise keeps the skeletal muscle pump active. Prevents blood pooling in limbs (which can cause dizziness/fainting). Gradual reduction in heart rate and blood pressure.'},
            {label: 'Lactic Acid Removal', detail: 'Maintained blood flow helps transport lactic acid to the liver (Cori cycle) for conversion back to glucose. Active recovery removes lactate faster than passive rest.'},
            {label: 'Reduces DOMS', detail: 'Delayed Onset Muscle Soreness peaks 24-72 hours post-exercise. Caused by microtrauma to muscle fibres. Cool-down may reduce severity. Stretching maintains muscle length and reduces stiffness.'},
            {label: 'Gradual HR Reduction', detail: 'Prevents sudden drop in blood pressure. Allows adrenaline levels to decrease gradually. Returns body to resting state safely. Parasympathetic nervous system re-engages.'},
            {label: 'Psychological Recovery', detail: 'Time to reflect on performance. Transition from competitive to relaxed state. Team discussion and feedback. Helps manage post-competition emotions.'}
        ]
    }}
},
// === SLIDE 429 ===
{
    id: 'exphys-012', topic: 'Exercise Physiology', title: 'Injury Prevention — Acute vs Chronic Injuries',
    content: '<p><span class="key-term">Acute injuries</span> occur suddenly due to a specific incident (e.g. a tackle, fall, or collision). <span class="key-term">Chronic injuries</span> develop gradually over time due to overuse or repetitive stress. Understanding the difference is essential for prevention and treatment strategies.</p>',
    animation: { type: 'slider-compare', hint: 'Compare acute and chronic injuries!', config: {
        leftLabel: 'Acute Injuries',
        rightLabel: 'Chronic Injuries',
        leftItems: ['Sudden onset from a specific event', 'Examples: fractures, dislocations, sprains, strains, concussion', 'Often caused by impact, collision, or sudden force', 'Immediate pain, swelling, loss of function', 'Treatment: RICE protocol, immobilisation, medical referral'],
        rightItems: ['Gradual onset over weeks or months', 'Examples: stress fractures, tendinopathy, shin splints, tennis elbow', 'Caused by overuse, repetitive movements, poor technique', 'Dull ache that worsens with activity', 'Treatment: rest, technique correction, load management, physiotherapy']
    }}
},
// === SLIDE 430 ===
{
    id: 'exphys-013', topic: 'Exercise Physiology', title: 'Injury Rehabilitation — RICE & Recovery',
    content: '<p>The <span class="key-term">RICE protocol</span> (Rest, Ice, Compression, Elevation) is the immediate treatment for acute soft-tissue injuries. Rehabilitation should be progressive, moving from protection to controlled loading to full return to sport. Premature return increases re-injury risk.</p>',
    animation: { type: 'timeline', hint: 'Follow the injury rehabilitation timeline!', config: { events: [
        {date: 'Immediate', title: 'RICE Protocol', detail: 'Rest: stop activity to prevent further damage. Ice: apply for 10-20 mins every 2 hours to reduce swelling and pain (vasoconstriction). Compression: elastic bandage to limit swelling. Elevation: raise above heart level to reduce blood flow and swelling.'},
        {date: 'Days 1-3', title: 'Protection Phase', detail: 'Continue RICE. Avoid HARM (Heat, Alcohol, Running, Massage) in first 48-72 hours. Medical assessment — imaging if needed. Pain management. Maintain fitness with non-affected body parts.'},
        {date: 'Weeks 1-4', title: 'Controlled Loading', detail: 'Gradual introduction of movement. Range of motion exercises. Isometric strengthening. Hydrotherapy may be used. Progressive weight-bearing. Monitor pain levels — should not increase.'},
        {date: 'Weeks 4-8', title: 'Sport-Specific Rehab', detail: 'Progressive resistance training. Sport-specific movements at reduced intensity. Balance and proprioception exercises. Gradual return to training (modified). Psychological readiness assessment.'},
        {date: 'Return to Play', title: 'Full Return', detail: 'Must meet objective criteria: full ROM, strength symmetry (>90% of uninjured side), sport-specific functional tests passed. Gradual reintegration into full training then competition. Ongoing monitoring for recurrence.'}
    ]}}
},
// === SLIDE 431 ===
{
    id: 'exphys-014', topic: 'Exercise Physiology', title: 'Exercise Physiology — Review Quiz',
    content: '<p>Test your understanding of diet, nutrition, training methods, periodisation, and injury prevention!</p>',
    animation: { type: 'quiz', hint: 'Final quiz on exercise physiology!', config: {
        question: 'A marathon runner performs carbohydrate loading before a race. Which statement best describes the purpose of the depletion phase (days 1-3)?',
        options: [
            'To reduce body weight before the race',
            'To deplete glycogen stores so muscles overcompensate by storing more during the loading phase',
            'To increase fat metabolism and reduce reliance on carbohydrates',
            'To rest the muscles completely before competition'
        ],
        correct: 1,
        explanation: 'The depletion phase involves high-intensity training on a low-carbohydrate diet to empty muscle glycogen stores. This "primes" the muscles for supercompensation — when a high-carb diet is then consumed (days 4-6), the muscles store significantly MORE glycogen than normal (up to 50-100% more), delaying fatigue during the marathon.'
    }}
}
);