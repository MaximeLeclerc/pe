window.ALL_SLIDES = window.ALL_SLIDES || [];
window.ALL_SLIDES.push(
// === SLIDE 251 ===
{
    id: 'safety-001', topic: 'Safety & First Aid', title: 'Safety in PE',
    content: '<p>Safety is the <strong>#1 priority</strong> in all physical activity. Understanding risks and prevention keeps you and others safe during exercise and sports.</p>',
    animation: { type: 'flip-cards', hint: 'Click for key safety principles!', config: { cards: [
        {front: 'Before Exercise', back: 'Warm up, check equipment, know the rules'},
        {front: 'During Exercise', back: 'Stay hydrated, use proper form, listen to your body'},
        {front: 'After Exercise', back: 'Cool down, stretch, report any pain'},
        {front: 'Environment', back: 'Check for hazards, be aware of weather conditions'},
        {front: 'Equipment', back: 'Wear proper shoes, use protective gear, inspect equipment'}
    ]}}
},
// === SLIDE 252 ===
{
    id: 'safety-002', topic: 'Safety & First Aid', title: 'Warm-Up for Injury Prevention',
    content: '<p>A proper warm-up <strong>reduces injury risk by up to 50%</strong>. It increases blood flow, raises muscle temperature, and prepares joints for movement.</p>',
    animation: { type: 'warmup-sequence', hint: 'Click through the injury-prevention warm-up!', config: { exercises: [
        {name: 'Light Cardio', duration: '3-5 min', desc: 'Jogging or brisk walking to raise heart rate'},
        {name: 'Dynamic Stretches', duration: '3-5 min', desc: 'Leg swings, arm circles, lunges with twist'},
        {name: 'Sport-Specific Movements', duration: '2-3 min', desc: 'Mimic movements you\'ll do in the activity'},
        {name: 'Gradual Intensity Increase', duration: '2 min', desc: 'Build up to full-speed movements gradually'}
    ]}}
},
// === SLIDE 253 ===
{
    id: 'safety-003', topic: 'Safety & First Aid', title: 'Proper Equipment',
    content: '<p>Using the right equipment and wearing it correctly is essential for injury prevention.</p>',
    animation: { type: 'drag-sort', hint: 'Sort: most important safety equipment first!', config: {
        items: ['Athletic shoes with good support', 'Helmet (for cycling, batting, etc.)', 'Mouthguard (contact sports)', 'Shin guards (soccer)', 'Eye protection (racquet sports)', 'Appropriate clothing'],
        correctOrder: ['Athletic shoes with good support', 'Helmet (for cycling, batting, etc.)', 'Mouthguard (contact sports)', 'Shin guards (soccer)', 'Eye protection (racquet sports)', 'Appropriate clothing']
    }}
},
// === SLIDE 254 ===
{
    id: 'safety-004', topic: 'Safety & First Aid', title: 'Hydration During Exercise',
    content: '<p>Dehydration reduces performance and can be <strong>life-threatening</strong>. Drink water before, during (every 15-20 min), and after exercise.</p>',
    animation: { type: 'water-fill', hint: 'Track your hydration — click glasses!', config: { target: 8 } }
},
// === SLIDE 255 ===
{
    id: 'safety-005', topic: 'Safety & First Aid', title: 'Heat-Related Illness',
    content: '<p>Exercising in heat can cause <strong>heat cramps, heat exhaustion, or heat stroke</strong>. Heat stroke is a medical emergency! Know the warning signs.</p>',
    animation: { type: 'stress-meter', hint: 'Click prevention strategies to lower heat risk!', config: {
        startLevel: 80,
        strategies: ['Drink water frequently', 'Exercise in cooler hours', 'Wear light clothing', 'Take breaks in shade', 'Acclimatize gradually']
    }}
},
// === SLIDE 256 ===
{
    id: 'safety-006', topic: 'Safety & First Aid', title: 'Cold-Related Illness',
    content: '<p>Exercising in cold can cause <strong>hypothermia and frostbite</strong>. Dress in layers, cover extremities, stay dry, and know when to go inside.</p>',
    animation: { type: 'stress-meter', hint: 'Click strategies to stay safe in cold!', config: {
        startLevel: 70,
        strategies: ['Dress in layers', 'Cover ears, hands, feet', 'Stay dry', 'Warm up indoors first', 'Check wind chill']
    }}
},
// === SLIDE 257 ===
{
    id: 'safety-007', topic: 'Safety & First Aid', title: 'Common Sports Injuries',
    content: '<p>The most common sports injuries are <strong>sprains, strains, fractures, dislocations, and overuse injuries</strong>. Most are preventable with proper preparation.</p>',
    animation: { type: 'flip-cards', hint: 'Click to learn about common injuries!', config: { cards: [
        {front: 'Sprain', back: 'Stretched/torn LIGAMENT (connects bone to bone). Common: ankle.'},
        {front: 'Strain', back: 'Stretched/torn MUSCLE or TENDON. Common: hamstring.'},
        {front: 'Fracture', back: 'Broken bone. Can be stress (overuse) or acute (impact).'},
        {front: 'Dislocation', back: 'Bone forced out of its joint. Common: shoulder.'},
        {front: 'Tendinitis', back: 'Inflammation of a tendon from overuse. Common: Achilles, elbow.'},
        {front: 'Concussion', back: 'Brain injury from impact. Requires medical attention.'}
    ]}}
},
// === SLIDE 258 ===
{
    id: 'safety-008', topic: 'Safety & First Aid', title: 'Sprains vs Strains',
    content: '<p>People often confuse sprains and strains. The key difference: <strong>sprains = ligaments, strains = muscles/tendons</strong>.</p>',
    animation: { type: 'slider-compare', hint: 'Drag to compare sprains vs strains!', config: {
        left: 'Sprain', leftDetail: 'Ligament injury (bone to bone). Swelling, bruising, joint instability. Common: ankle, wrist, knee.',
        right: 'Strain', rightDetail: 'Muscle/tendon injury. Pain, spasm, weakness. Common: hamstring, back, groin.'
    }}
},
// === SLIDE 259 ===
{
    id: 'safety-009', topic: 'Safety & First Aid', title: 'RICE Method',
    content: '<p>The <span class="key-term">RICE</span> method is the first-aid treatment for most soft-tissue injuries. Put the steps in order:</p>',
    animation: { type: 'drag-sort', hint: 'Drag RICE steps into correct order!', config: {
        items: ['Rest — Stop the activity immediately', 'Ice — Apply cold for 15-20 minutes', 'Compression — Wrap with elastic bandage', 'Elevation — Raise the injured area above heart level'],
        correctOrder: ['Rest — Stop the activity immediately', 'Ice — Apply cold for 15-20 minutes', 'Compression — Wrap with elastic bandage', 'Elevation — Raise the injured area above heart level']
    }}
},
// === SLIDE 260 ===
{
    id: 'safety-010', topic: 'Safety & First Aid', title: 'Concussion Awareness',
    content: '<p>A <span class="key-term">concussion</span> is a traumatic brain injury caused by a blow to the head. <strong>"When in doubt, sit them out!"</strong> — always get medical clearance before returning to play.</p>',
    animation: { type: 'flip-cards', hint: 'Click to learn concussion warning signs!', config: { cards: [
        {front: 'Headache', back: 'The most common symptom — persistent or worsening'},
        {front: 'Confusion', back: 'Difficulty thinking clearly or remembering events'},
        {front: 'Dizziness', back: 'Feeling unsteady, off-balance, or lightheaded'},
        {front: 'Nausea', back: 'Feeling sick to the stomach, possible vomiting'},
        {front: 'Sensitivity', back: 'Bothered by light or noise more than usual'},
        {front: 'Vision Changes', back: 'Blurry or double vision — seek immediate help'}
    ]}}
},
// === SLIDE 261 ===
{
    id: 'safety-011', topic: 'Safety & First Aid', title: 'Fractures & Dislocations',
    content: '<p>A <strong>fracture</strong> is a broken bone. A <strong>dislocation</strong> is a bone forced from its joint. Both need medical attention. Never try to realign a dislocation yourself!</p>',
    animation: { type: 'skeleton', hint: 'Click bones to learn about fracture sites!', config: { bones: ['Collarbone (common fracture)','Wrist (falling on hand)','Finger (ball sports)','Ankle (rolling)','Knee (dislocation risk)','Shoulder (dislocation risk)','Elbow (falls)','Tibia (stress fractures)','Metatarsal (foot stress)'] } }
},
// === SLIDE 262 ===
{
    id: 'safety-012', topic: 'Safety & First Aid', title: 'Basic First Aid',
    content: '<p>Everyone should know basic first aid. Follow these steps when someone is injured:</p>',
    animation: { type: 'drag-sort', hint: 'Put the first aid steps in order!', config: {
        items: ['Check the scene is safe', 'Call for help if serious', 'Check the person\'s response', 'Assess the injury', 'Apply appropriate first aid', 'Stay with the person until help arrives'],
        correctOrder: ['Check the scene is safe', 'Call for help if serious', 'Check the person\'s response', 'Assess the injury', 'Apply appropriate first aid', 'Stay with the person until help arrives']
    }}
},
// === SLIDE 263 ===
{
    id: 'safety-013', topic: 'Safety & First Aid', title: 'CPR Basics',
    content: '<p><span class="key-term">CPR</span> (Cardiopulmonary Resuscitation) is a life-saving technique used when someone\'s heart stops beating. <strong>Call 911 first!</strong></p>',
    animation: { type: 'warmup-sequence', hint: 'Click through CPR steps!', config: { exercises: [
        {name: 'Step 1: Check', duration: 'Assess', desc: 'Tap shoulders and shout "Are you okay?"'},
        {name: 'Step 2: Call 911', duration: 'Immediate', desc: 'Call emergency services or have someone else call'},
        {name: 'Step 3: Compressions', duration: '30 pushes', desc: 'Push hard and fast in center of chest (100-120/min)'},
        {name: 'Step 4: Breaths', duration: '2 breaths', desc: 'Tilt head back, lift chin, give 2 rescue breaths'},
        {name: 'Step 5: Repeat', duration: 'Continue', desc: 'Continue 30:2 ratio until help arrives or AED is available'}
    ]}}
},
// === SLIDE 264 ===
{
    id: 'safety-014', topic: 'Safety & First Aid', title: 'AED Usage',
    content: '<p>An <span class="key-term">AED</span> (Automated External Defibrillator) can save lives during cardiac arrest. It\'s designed for anyone to use — it gives voice instructions!</p>',
    animation: { type: 'drag-sort', hint: 'Put AED steps in order!', config: {
        items: ['Turn on the AED', 'Attach pads to bare chest', 'Ensure no one is touching the person', 'Press the shock button when prompted', 'Resume CPR immediately after shock'],
        correctOrder: ['Turn on the AED', 'Attach pads to bare chest', 'Ensure no one is touching the person', 'Press the shock button when prompted', 'Resume CPR immediately after shock']
    }}
},
// === SLIDE 265 ===
{
    id: 'safety-015', topic: 'Safety & First Aid', title: 'Emergency Action Plan',
    content: '<p>Every PE facility should have an <span class="key-term">Emergency Action Plan (EAP)</span>. Students should know emergency exits, phone locations, and how to contact help.</p>',
    animation: { type: 'drag-sort', hint: 'Order the emergency plan steps!', config: {
        items: ['Recognize the emergency', 'Call 911 or school office', 'Provide first aid if trained', 'Send someone to guide EMS to the scene', 'Stay calm and reassure the injured person', 'Document the incident afterward'],
        correctOrder: ['Recognize the emergency', 'Call 911 or school office', 'Provide first aid if trained', 'Send someone to guide EMS to the scene', 'Stay calm and reassure the injured person', 'Document the incident afterward']
    }}
},
// === SLIDE 266 ===
{
    id: 'safety-016', topic: 'Safety & First Aid', title: 'Calling for Help',
    content: '<p>When calling 911, be ready to provide: <strong>your location, what happened, how many people are injured, and what first aid is being given</strong>.</p>',
    animation: { type: 'quiz', hint: 'What info does 911 need?', config: {
        question: 'What is the FIRST thing you should tell the 911 operator?',
        options: ['Your name', 'Your exact location', 'What happened', 'How many people are injured'],
        correct: 1,
        explanation: 'Your location is the most critical information — if the call is disconnected, emergency services can still find you.'
    }}
},
// === SLIDE 267 ===
{
    id: 'safety-017', topic: 'Safety & First Aid', title: 'Wound Care',
    content: '<p>For minor cuts and scrapes: clean, treat, and protect. For deep or bleeding wounds, apply direct pressure and seek medical help.</p>',
    animation: { type: 'drag-sort', hint: 'Put wound care steps in order!', config: {
        items: ['Wash hands or wear gloves', 'Clean the wound with water', 'Apply antiseptic if available', 'Cover with sterile bandage', 'Change bandage daily and watch for infection'],
        correctOrder: ['Wash hands or wear gloves', 'Clean the wound with water', 'Apply antiseptic if available', 'Cover with sterile bandage', 'Change bandage daily and watch for infection']
    }}
},
// === SLIDE 268 ===
{
    id: 'safety-018', topic: 'Safety & First Aid', title: 'Choking Response',
    content: '<p>Choking blocks the airway and prevents breathing. The <strong>Heimlich maneuver</strong> (abdominal thrusts) can dislodge the object and save a life.</p>',
    animation: { type: 'drag-sort', hint: 'Put choking response steps in order!', config: {
        items: ['Ask "Are you choking?" — if they can\'t speak, act', 'Stand behind the person', 'Make a fist above the navel', 'Give quick upward thrusts', 'Repeat until object is dislodged or help arrives'],
        correctOrder: ['Ask "Are you choking?" — if they can\'t speak, act', 'Stand behind the person', 'Make a fist above the navel', 'Give quick upward thrusts', 'Repeat until object is dislodged or help arrives']
    }}
},
// === SLIDE 269 ===
{
    id: 'safety-019', topic: 'Safety & First Aid', title: 'When to Stop Exercising',
    content: '<p>Listen to your body! Stop exercising immediately if you experience any of these warning signs:</p>',
    animation: { type: 'stress-meter', hint: 'Click strategies to manage exercise warning signs!', config: {
        startLevel: 85,
        strategies: ['Stop and rest if dizzy', 'Hydrate if lightheaded', 'Seek shade if overheating', 'Tell teacher if sharp pain', 'Call for help if chest pain']
    }}
},
// === SLIDE 270 ===
{
    id: 'safety-020', topic: 'Safety & First Aid', title: 'Safety & First Aid Review',
    content: '<p>Let\'s review safety and first aid!</p>',
    animation: { type: 'quiz', hint: 'Final safety quiz!', config: {
        question: 'What does RICE stand for in treating injuries?',
        options: ['Run, Ice, Compress, Elevate', 'Rest, Ice, Compression, Elevation', 'Rest, Inspect, Clean, Evaluate', 'Reduce, Ice, Cover, Examine'],
        correct: 1,
        explanation: 'RICE = Rest, Ice, Compression, Elevation. This is the standard first-aid treatment for most soft-tissue injuries like sprains and strains.'
    }}
}
);
