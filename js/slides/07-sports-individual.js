window.ALL_SLIDES = window.ALL_SLIDES || [];
window.ALL_SLIDES.push(
// === SLIDE 136 ===
{
    id: 'indiv-001', topic: 'Individual & Dual Sports', title: 'What are Individual Sports?',
    content: '<p>Individual sports test your <strong>personal skill, discipline, and mental toughness</strong>. You compete against yourself, a clock, or one opponent. Success depends entirely on you.</p>',
    animation: { type: 'flip-cards', hint: 'Click to explore individual sports!', config: { cards: [
        {front: 'Track & Field', back: 'Running, jumping, and throwing events'},
        {front: 'Swimming', back: 'Racing through water using different strokes'},
        {front: 'Gymnastics', back: 'Strength, flexibility, and acrobatic skills'},
        {front: 'Tennis', back: 'Hitting a ball over a net with a racket'},
        {front: 'Martial Arts', back: 'Self-defense systems with discipline'},
        {front: 'Golf', back: 'Hitting a ball into holes with fewest strokes'}
    ]}}
},
// === SLIDE 137 ===
{
    id: 'indiv-002', topic: 'Individual & Dual Sports', title: 'Track & Field — Sprinting',
    content: '<p>Sprinting is about maximum speed over short distances (100m, 200m, 400m). Key: explosive start, drive phase, top-end speed, and lean at the finish.</p>',
    animation: { type: 'runner', hint: 'Click to increase sprint speed!', config: { speed: 5 } }
},
// === SLIDE 138 ===
{
    id: 'indiv-003', topic: 'Individual & Dual Sports', title: 'Track & Field — Distance Running',
    content: '<p>Distance events (800m to marathon) require <strong>pacing, endurance, and mental strength</strong>. Start conservatively and finish strong with a kick.</p>',
    animation: { type: 'runner', hint: 'Click to adjust pace!', config: { speed: 2 } }
},
// === SLIDE 139 ===
{
    id: 'indiv-004', topic: 'Individual & Dual Sports', title: 'Track & Field — Relay',
    content: '<p>Relay races (4×100m, 4×400m) combine individual speed with <strong>baton-passing teamwork</strong>. The exchange must happen within a 20m zone. Smooth passes save time!</p>',
    animation: { type: 'sport-field', hint: 'Click runners to see baton exchange zones!', config: { sport: 'basketball', positions: [
        {x:40,y:100,label:'1',name:'Leg 1 — starts from blocks with baton'},
        {x:110,y:100,label:'2',name:'Leg 2 — receives baton in exchange zone'},
        {x:200,y:100,label:'3',name:'Leg 3 — maintains speed through exchange'},
        {x:290,y:100,label:'4',name:'Anchor — fastest runner, finishes the race'}
    ]}}
},
// === SLIDE 140 ===
{
    id: 'indiv-005', topic: 'Individual & Dual Sports', title: 'Track & Field — Long Jump',
    content: '<p>The long jump combines <strong>speed, takeoff power, and flight technique</strong>. Sprint down the runway, hit the takeoff board, and fly as far as possible into the sand pit.</p>',
    animation: { type: 'ball-physics', hint: 'Click to launch — simulate a long jump arc!', config: { gravity: 0.15, bounce: 0.2, color: '#f59e0b', radius: 10 } }
},
// === SLIDE 141 ===
{
    id: 'indiv-006', topic: 'Individual & Dual Sports', title: 'Track & Field — High Jump',
    content: '<p>The high jump uses the <strong>Fosbury Flop technique</strong>: approach in a J-curve, plant the outside foot, and arch over the bar backward. It\'s all about technique!</p>',
    animation: { type: 'ball-physics', hint: 'Click to jump — try to reach the top!', config: { gravity: 0.3, bounce: 0.3, color: '#2563eb', radius: 10 } }
},
// === SLIDE 142 ===
{
    id: 'indiv-007', topic: 'Individual & Dual Sports', title: 'Track & Field — Shot Put',
    content: '<p>Shot put involves throwing a heavy metal ball (shot) as far as possible. Technique: glide or spin across the circle, then push (not throw) the shot from the neck.</p>',
    animation: { type: 'ball-physics', hint: 'Click to put the shot!', config: { gravity: 0.4, bounce: 0.2, color: '#94a3b8', radius: 16 } }
},
// === SLIDE 143 ===
{
    id: 'indiv-008', topic: 'Individual & Dual Sports', title: 'Swimming — Strokes Overview',
    content: '<p>Competitive swimming has <strong>four official strokes</strong>, each with unique techniques, breathing patterns, and rules.</p>',
    animation: { type: 'warmup-sequence', hint: 'Click to see each stroke!', config: { exercises: [
        {name: 'Freestyle (Front Crawl)', duration: 'Fastest stroke', desc: 'Alternating arms with flutter kick, face in water'},
        {name: 'Backstroke', duration: 'Only stroke on back', desc: 'Alternating arms with flutter kick, face up'},
        {name: 'Breaststroke', duration: 'Oldest stroke', desc: 'Simultaneous arm pull with frog kick'},
        {name: 'Butterfly', duration: 'Most demanding', desc: 'Simultaneous arms with dolphin kick'}
    ]}}
},
// === SLIDE 144 ===
{
    id: 'indiv-009', topic: 'Individual & Dual Sports', title: 'Swimming — Freestyle',
    content: '<p>Freestyle is the <strong>fastest and most common</strong> stroke. Key: streamlined body position, high elbow pull, bilateral breathing, and continuous flutter kick.</p>',
    animation: { type: 'warmup-sequence', hint: 'Click for freestyle technique tips!', config: { exercises: [
        {name: 'Body Position', duration: 'Keep flat', desc: 'Horizontal in the water, eyes looking down'},
        {name: 'Arm Pull', duration: 'High elbow', desc: 'Reach forward, catch, pull through to hip'},
        {name: 'Kick', duration: '6-beat kick', desc: 'Flutter kick from the hips, not the knees'},
        {name: 'Breathing', duration: 'Every 2-3 strokes', desc: 'Rotate head to side, breathe in the pocket of air'}
    ]}}
},
// === SLIDE 145 ===
{
    id: 'indiv-010', topic: 'Individual & Dual Sports', title: 'Swimming — Backstroke',
    content: '<p>Backstroke is swum on your back. Advantages: easy breathing (face always above water). Key: body rotation, straight arm recovery, and steady flutter kick.</p>',
    animation: { type: 'warmup-sequence', hint: 'Click for backstroke tips!', config: { exercises: [
        {name: 'Body Position', duration: 'Flat on back', desc: 'Ears in water, hips high, looking straight up'},
        {name: 'Arm Movement', duration: 'Alternating', desc: 'Pinky enters water first, pull through to hip'},
        {name: 'Kick', duration: 'Flutter kick', desc: 'Continuous kick from hips, toes pointed'},
        {name: 'Rotation', duration: 'Body rolls', desc: 'Rotate shoulders 30-40° for more power'}
    ]}}
},
// === SLIDE 146 ===
{
    id: 'indiv-011', topic: 'Individual & Dual Sports', title: 'Gymnastics — Floor',
    content: '<p>Floor exercise combines <strong>tumbling, dance, and acrobatic elements</strong> on a 40×40 foot spring floor. Routines last 70-90 seconds (women) or 60-70 seconds (men).</p>',
    animation: { type: 'warmup-sequence', hint: 'Click for floor exercise elements!', config: { exercises: [
        {name: 'Forward Roll', duration: 'Basic', desc: 'Tuck chin, round back, roll forward to feet'},
        {name: 'Cartwheel', duration: 'Intermediate', desc: 'Hand-hand-foot-foot in a wheel motion'},
        {name: 'Handstand', duration: 'Hold 2 sec', desc: 'Kick up, align body vertically, tight core'},
        {name: 'Round-Off', duration: 'Intermediate', desc: 'Like a cartwheel but feet land together'}
    ]}}
},
// === SLIDE 147 ===
{
    id: 'indiv-012', topic: 'Individual & Dual Sports', title: 'Gymnastics — Balance Beam',
    content: '<p>The balance beam is only <strong>4 inches wide and 4 feet high</strong>! Gymnasts perform jumps, turns, and acrobatic elements. Focus and confidence are essential.</p>',
    animation: { type: 'balance-beam', hint: 'Use arrow keys or click to balance on the beam!', config: {} }
},
// === SLIDE 148 ===
{
    id: 'indiv-013', topic: 'Individual & Dual Sports', title: 'Tennis — Court & Rules',
    content: '<p>Tennis is played on a rectangular court with a net. Score in points: 15-30-40-game. Win 6 games to take a set. Best of 3 (or 5) sets wins the match.</p>',
    animation: { type: 'sport-field', hint: 'Click areas to learn court zones!', config: { sport: 'basketball', positions: [
        {x:85,y:50,label:'AD',name:'Ad Court (left service box)'},
        {x:85,y:150,label:'DC',name:'Deuce Court (right service box)'},
        {x:265,y:50,label:'AD',name:'Opponent Ad Court'},
        {x:265,y:150,label:'DC',name:'Opponent Deuce Court'},
        {x:175,y:100,label:'NET',name:'Net — 3 feet high at center'}
    ]}}
},
// === SLIDE 149 ===
{
    id: 'indiv-014', topic: 'Individual & Dual Sports', title: 'Tennis — Strokes',
    content: '<p>Master these basic tennis strokes: <strong>forehand, backhand, serve, and volley</strong>. Each requires proper grip, footwork, and follow-through.</p>',
    animation: { type: 'ball-physics', hint: 'Click to hit the tennis ball!', config: { gravity: 0.2, bounce: 0.75, color: '#d4e157', radius: 10 } }
},
// === SLIDE 150 ===
{
    id: 'indiv-015', topic: 'Individual & Dual Sports', title: 'Badminton — Court & Rules',
    content: '<p>Badminton uses a <strong>shuttlecock (birdie)</strong> that can travel over 200 mph! Played to 21 points. The court is smaller than tennis. Popular worldwide.</p>',
    animation: { type: 'sport-field', hint: 'Click court areas!', config: { sport: 'basketball', positions: [
        {x:85,y:75,label:'F',name:'Forecourt — net play, drop shots'},
        {x:85,y:130,label:'M',name:'Midcourt — drives and flat shots'},
        {x:265,y:75,label:'F',name:'Opponent forecourt'},
        {x:265,y:130,label:'R',name:'Rearcourt — clears and smashes'},
        {x:175,y:100,label:'NET',name:'Net — 5 feet high at center'}
    ]}}
},
// === SLIDE 151 ===
{
    id: 'indiv-016', topic: 'Individual & Dual Sports', title: 'Badminton — Shots',
    content: '<p>Key badminton shots: <strong>clear (high and deep), drop (soft near net), smash (powerful downward), and drive (fast and flat)</strong>.</p>',
    animation: { type: 'ball-physics', hint: 'Click to smash the shuttlecock!', config: { gravity: 0.3, bounce: 0.3, color: '#fff', radius: 8 } }
},
// === SLIDE 152 ===
{
    id: 'indiv-017', topic: 'Individual & Dual Sports', title: 'Table Tennis',
    content: '<p>Table tennis (ping pong) is one of the <strong>fastest racket sports</strong>. Played to 11 points (win by 2). Requires quick reflexes, spin control, and precise placement.</p>',
    animation: { type: 'ball-physics', hint: 'Click to rally the ping pong ball!', config: { gravity: 0.15, bounce: 0.85, color: '#f97316', radius: 6 } }
},
// === SLIDE 153 ===
{
    id: 'indiv-018', topic: 'Individual & Dual Sports', title: 'Golf Basics',
    content: '<p>Golf is a <strong>precision sport</strong> where you hit a ball into a hole in the fewest strokes possible. A full course has 18 holes. Club selection and technique are everything.</p>',
    animation: { type: 'ball-physics', hint: 'Click to drive the golf ball!', config: { gravity: 0.12, bounce: 0.4, color: '#fff', radius: 7 } }
},
// === SLIDE 154 ===
{
    id: 'indiv-019', topic: 'Individual & Dual Sports', title: 'Bowling',
    content: '<p>Bowling is a target sport where you roll a ball to knock down 10 pins. A perfect game is <strong>300 points (12 strikes)</strong>. Great for all ages and abilities.</p>',
    animation: { type: 'ball-physics', hint: 'Click to roll the bowling ball!', config: { gravity: 0.05, bounce: 0.3, color: '#2563eb', radius: 16 } }
},
// === SLIDE 155 ===
{
    id: 'indiv-020', topic: 'Individual & Dual Sports', title: 'Martial Arts Overview',
    content: '<p>Martial arts teach <strong>self-defense, discipline, respect, and fitness</strong>. There are many styles worldwide, each with unique techniques and philosophies.</p>',
    animation: { type: 'flip-cards', hint: 'Click to learn about martial arts styles!', config: { cards: [
        {front: 'Karate', back: 'Japanese — punches, kicks, and blocks. Focus on kata (forms)'},
        {front: 'Taekwondo', back: 'Korean — emphasizes high kicks and spinning techniques'},
        {front: 'Judo', back: 'Japanese — throws and grappling. "Gentle way"'},
        {front: 'Brazilian Jiu-Jitsu', back: 'Ground fighting and submissions'},
        {front: 'Kung Fu', back: 'Chinese — many styles, fluid movements'},
        {front: 'Boxing', back: 'Western — punches, footwork, and head movement'}
    ]}}
},
// === SLIDE 156 ===
{
    id: 'indiv-021', topic: 'Individual & Dual Sports', title: 'Wrestling Basics',
    content: '<p>Wrestling is one of the <strong>oldest sports in history</strong>. Two opponents try to pin each other\'s shoulders to the mat or score points through takedowns and control.</p>',
    animation: { type: 'flip-cards', hint: 'Click to learn wrestling concepts!', config: { cards: [
        {front: 'Takedown', back: '2 points — bring opponent from standing to the mat'},
        {front: 'Escape', back: '1 point — get away from bottom position'},
        {front: 'Reversal', back: '2 points — go from bottom to top position'},
        {front: 'Near Fall', back: '2-3 points — expose opponent\'s back to the mat'},
        {front: 'Pin', back: 'Match over — both shoulders on the mat'}
    ]}}
},
// === SLIDE 157 ===
{
    id: 'indiv-022', topic: 'Individual & Dual Sports', title: 'Fencing Basics',
    content: '<p>Fencing is a <strong>modern Olympic combat sport</strong> using swords. Three weapons: foil (thrust only, torso target), épée (thrust only, whole body), sabre (cut and thrust, above waist).</p>',
    animation: { type: 'flip-cards', hint: 'Click to learn about fencing weapons!', config: { cards: [
        {front: 'Foil', back: 'Light weapon — thrust only — target: torso'},
        {front: 'Épée', back: 'Heavier weapon — thrust only — target: entire body'},
        {front: 'Sabre', back: 'Cut and thrust — target: above the waist'}
    ]}}
},
// === SLIDE 158 ===
{
    id: 'indiv-023', topic: 'Individual & Dual Sports', title: 'Rock Climbing',
    content: '<p>Rock climbing builds <strong>strength, problem-solving, and confidence</strong>. Types: bouldering (no ropes, low walls), top-rope (belayed from above), lead climbing (clip as you go).</p>',
    animation: { type: 'balance-beam', hint: 'Balance like a climber — use arrow keys!', config: {} }
},
// === SLIDE 159 ===
{
    id: 'indiv-024', topic: 'Individual & Dual Sports', title: 'Cycling — Road & Mountain',
    content: '<p>Cycling can be recreational or competitive. <strong>Road cycling</strong> focuses on speed and endurance on pavement. <strong>Mountain biking</strong> tackles off-road terrain with technical skills.</p>',
    animation: { type: 'slider-compare', hint: 'Compare road vs mountain biking!', config: {
        left: 'Road Cycling', leftDetail: 'Smooth pavement. Thin tires. Speed-focused. Aerodynamic position. Long distances.',
        right: 'Mountain Biking', rightDetail: 'Off-road trails. Wide tires. Technical skills. Suspension bikes. Varied terrain.'
    }}
},
// === SLIDE 160 ===
{
    id: 'indiv-025', topic: 'Individual & Dual Sports', title: 'Cross-Country Running',
    content: '<p>Cross-country involves running over <strong>natural terrain</strong> — hills, grass, mud, and trails. Races are typically 3-12 km. It builds mental toughness and aerobic fitness.</p>',
    animation: { type: 'runner', hint: 'Click to adjust pace for the terrain!', config: { speed: 3 } }
},
// === SLIDE 161 ===
{
    id: 'indiv-026', topic: 'Individual & Dual Sports', title: 'Archery',
    content: '<p>Archery develops <strong>focus, patience, and upper body strength</strong>. The goal: consistently hit the center (bullseye) of the target from various distances.</p>',
    animation: { type: 'reaction-test', hint: 'Test your focus and timing — click when ready!', config: {} }
},
// === SLIDE 162 ===
{
    id: 'indiv-027', topic: 'Individual & Dual Sports', title: 'Skateboarding',
    content: '<p>Skateboarding is now an <strong>Olympic sport</strong>! It builds balance, coordination, and creativity. Disciplines: street, park, and vert.</p>',
    animation: { type: 'balance-beam', hint: 'Balance on the skateboard — use arrow keys!', config: {} }
},
// === SLIDE 163 ===
{
    id: 'indiv-028', topic: 'Individual & Dual Sports', title: 'Dance as Sport',
    content: '<p>Dance combines <strong>athleticism, artistry, and expression</strong>. It builds cardiovascular fitness, flexibility, coordination, and rhythm. Many competitive dance styles exist.</p>',
    animation: { type: 'warmup-sequence', hint: 'Click to explore dance styles!', config: { exercises: [
        {name: 'Ballet', duration: 'Classical', desc: 'Precise technique, grace, and turnout'},
        {name: 'Hip Hop', duration: 'Urban', desc: 'Rhythm-based, freestyle, and crew battles'},
        {name: 'Jazz', duration: 'Energetic', desc: 'Sharp movements, leaps, and turns'},
        {name: 'Contemporary', duration: 'Expressive', desc: 'Floor work, emotion, and fluid movement'},
        {name: 'Ballroom', duration: 'Partner', desc: 'Waltz, tango, foxtrot — partnership and connection'}
    ]}}
},
// === SLIDE 164 ===
{
    id: 'indiv-029', topic: 'Individual & Dual Sports', title: 'Orienteering',
    content: '<p>Orienteering uses a <strong>map and compass</strong> to navigate between checkpoints in the fastest time. It combines physical fitness with navigation skills.</p>',
    animation: { type: 'quiz', hint: 'Test your orienteering knowledge!', config: {
        question: 'What two tools are essential for orienteering?',
        options: ['Stopwatch and whistle', 'Map and compass', 'GPS and phone', 'Binoculars and rope'],
        correct: 1,
        explanation: 'A detailed map and compass are the essential tools. Traditional orienteering does not use electronic navigation.'
    }}
},
// === SLIDE 165 ===
{
    id: 'indiv-030', topic: 'Individual & Dual Sports', title: 'Individual Sports Review',
    content: '<p>Let\'s review individual and dual sports!</p>',
    animation: { type: 'quiz', hint: 'Final quiz!', config: {
        question: 'What is a key benefit of individual sports compared to team sports?',
        options: ['You never have to practice', 'You develop personal accountability and self-discipline', 'You don\'t need any skills', 'There is no competition'],
        correct: 1,
        explanation: 'Individual sports build strong personal accountability — your success depends entirely on your own effort, discipline, and preparation.'
    }}
}
);
