window.ALL_SLIDES = window.ALL_SLIDES || [];
window.ALL_SLIDES.push(
// === SLIDE 96 ===
{
    id: 'team-001', topic: 'Team Sports', title: 'What are Team Sports?',
    content: '<p>Team sports require <strong>cooperation, communication, and strategy</strong> between multiple players working toward a common goal. They build social skills, leadership, and sportsmanship.</p>',
    animation: { type: 'flip-cards', hint: 'Click to learn about popular team sports!', config: { cards: [
        {front: 'Basketball', back: '5 players per team, score by shooting through a hoop'},
        {front: 'Soccer', back: '11 players per team, score by kicking ball into goal'},
        {front: 'Volleyball', back: '6 players per team, score by grounding ball on opponent\'s court'},
        {front: 'Football', back: '11 players per team, advance ball to end zone'},
        {front: 'Baseball', back: '9 players per team, score by running bases'},
        {front: 'Hockey', back: '6 players per team, score by shooting puck into net'}
    ]}}
},
// === SLIDE 97 ===
{
    id: 'team-002', topic: 'Team Sports', title: 'Basketball — Court & Rules',
    content: '<p>Basketball is played on a <strong>94×50 foot court</strong> with two hoops at 10 feet high. Games are four 8-12 minute quarters. Score by shooting the ball through the basket.</p>',
    animation: { type: 'sport-field', hint: 'Click positions to learn about them!', config: { sport: 'basketball', positions: [
        {x:60,y:100,label:'PG',name:'Point Guard — runs the offense'},
        {x:110,y:50,label:'SG',name:'Shooting Guard — primary scorer'},
        {x:110,y:150,label:'SF',name:'Small Forward — versatile player'},
        {x:220,y:60,label:'PF',name:'Power Forward — inside scoring & rebounding'},
        {x:220,y:140,label:'C',name:'Center — tallest, protects the rim'}
    ]}}
},
// === SLIDE 98 ===
{
    id: 'team-003', topic: 'Team Sports', title: 'Basketball — Positions',
    content: '<p>Each basketball position has specific roles and responsibilities. Understanding positions helps you work better as a team.</p>',
    animation: { type: 'label-diagram', hint: 'Click labels to place them on the court!', config: {
        bgText: 'COURT',
        labels: [
            {text: 'Point Guard', x: 50, y: 75},
            {text: 'Shooting Guard', x: 30, y: 45},
            {text: 'Small Forward', x: 70, y: 45},
            {text: 'Power Forward', x: 30, y: 20},
            {text: 'Center', x: 50, y: 15}
        ]
    }}
},
// === SLIDE 99 ===
{
    id: 'team-004', topic: 'Team Sports', title: 'Basketball — Dribbling',
    content: '<p>Dribbling is bouncing the ball while moving. Keys: keep the ball below waist height, use fingertips (not palm), protect the ball from defenders.</p>',
    animation: { type: 'ball-physics', hint: 'Click to bounce the basketball!', config: { gravity: 0.4, bounce: 0.8, color: '#f97316', radius: 18 } }
},
// === SLIDE 100 ===
{
    id: 'team-005', topic: 'Team Sports', title: 'Basketball — Shooting',
    content: '<p>Good shooting form: <strong>B-E-E-F</strong> — Balance, Eyes on target, Elbow aligned, Follow through. The ball should arc and have backspin.</p>',
    animation: { type: 'ball-physics', hint: 'Click to shoot — aim for the top!', config: { gravity: 0.25, bounce: 0.5, color: '#f97316', radius: 16 } }
},
// === SLIDE 101 ===
{
    id: 'team-006', topic: 'Team Sports', title: 'Basketball — Passing',
    content: '<p>Passing moves the ball faster than dribbling. Main types: <strong>chest pass, bounce pass, overhead pass, and no-look pass</strong>.</p>',
    animation: { type: 'sport-field', hint: 'Click positions to see passing lanes!', config: { sport: 'basketball', positions: [
        {x:60,y:100,label:'PG',name:'Point Guard — initiates the pass'},
        {x:130,y:55,label:'SG',name:'Shooting Guard — receives on the wing'},
        {x:130,y:145,label:'SF',name:'Small Forward — receives on the wing'},
        {x:200,y:80,label:'PF',name:'Power Forward — post entry pass'},
        {x:200,y:120,label:'C',name:'Center — receives near the basket'}
    ]}}
},
// === SLIDE 102 ===
{
    id: 'team-007', topic: 'Team Sports', title: 'Basketball — Defense',
    content: '<p>Good defense wins games! Key principles: <strong>stay low, move your feet, hands active, keep between your player and the basket</strong>.</p>',
    animation: { type: 'quiz', hint: 'Test your basketball IQ!', config: {
        question: 'In man-to-man defense, what should a defender focus on?',
        options: ['Watching only the ball', 'Staying between their opponent and the basket', 'Standing still in one spot', 'Only guarding the best player'],
        correct: 1,
        explanation: 'In man-to-man defense, each defender guards one opponent and stays between them and the basket to prevent easy scores.'
    }}
},
// === SLIDE 103 ===
{
    id: 'team-008', topic: 'Team Sports', title: 'Soccer — Field & Rules',
    content: '<p>Soccer (football) is the world\'s most popular sport. Played on a grass field with 11 players per team. Score by kicking the ball into the opponent\'s goal. No hands except for the goalkeeper!</p>',
    animation: { type: 'sport-field', hint: 'Click positions to learn about them!', config: { sport: 'soccer', positions: [
        {x:30,y:100,label:'GK',name:'Goalkeeper — defends the goal, only player who can use hands'},
        {x:80,y:50,label:'LB',name:'Left Back — left side defender'},
        {x:80,y:150,label:'RB',name:'Right Back — right side defender'},
        {x:80,y:100,label:'CB',name:'Center Back — central defender'},
        {x:175,y:100,label:'CM',name:'Center Midfielder — controls the game'},
        {x:270,y:100,label:'ST',name:'Striker — main goal scorer'}
    ]}}
},
// === SLIDE 104 ===
{
    id: 'team-009', topic: 'Team Sports', title: 'Soccer — Positions',
    content: '<p>Soccer positions are grouped into four lines: <strong>goalkeeper, defenders, midfielders, and forwards</strong>. Common formations: 4-4-2, 4-3-3, 3-5-2.</p>',
    animation: { type: 'label-diagram', hint: 'Click labels to place them on the field!', config: {
        bgText: 'FIELD',
        labels: [
            {text: 'Goalkeeper', x: 10, y: 48},
            {text: 'Defenders', x: 25, y: 48},
            {text: 'Midfielders', x: 50, y: 48},
            {text: 'Forwards', x: 75, y: 48}
        ]
    }}
},
// === SLIDE 105 ===
{
    id: 'team-010', topic: 'Team Sports', title: 'Soccer — Dribbling & Passing',
    content: '<p>Dribbling uses small touches to maintain close ball control. Passing uses the inside of the foot for accuracy. A great team combines both skills fluently.</p>',
    animation: { type: 'ball-physics', hint: 'Click to kick the soccer ball!', config: { gravity: 0.2, bounce: 0.65, color: '#fff', radius: 14 } }
},
// === SLIDE 106 ===
{
    id: 'team-011', topic: 'Team Sports', title: 'Soccer — Shooting',
    content: '<p>Shooting technique: plant foot beside the ball, strike with laces for power or inside foot for placement, follow through toward the target, keep eyes on the ball.</p>',
    animation: { type: 'ball-physics', hint: 'Click to shoot on goal!', config: { gravity: 0.15, bounce: 0.5, color: '#fff', radius: 14 } }
},
// === SLIDE 107 ===
{
    id: 'team-012', topic: 'Team Sports', title: 'Soccer — Defense',
    content: '<p>Defensive principles: <strong>delay the attack, deny passing lanes, direct play away from goal, defend the space</strong>. Work as a unit!</p>',
    animation: { type: 'sport-field', hint: 'Click defensive positions!', config: { sport: 'soccer', positions: [
        {x:30,y:100,label:'GK',name:'Goalkeeper — last line of defense'},
        {x:70,y:40,label:'LB',name:'Left Back — marks right winger'},
        {x:70,y:80,label:'CB',name:'Center Back — marks striker'},
        {x:70,y:120,label:'CB',name:'Center Back — covers space'},
        {x:70,y:160,label:'RB',name:'Right Back — marks left winger'}
    ]}}
},
// === SLIDE 108 ===
{
    id: 'team-013', topic: 'Team Sports', title: 'Volleyball — Court & Rules',
    content: '<p>Volleyball is played with 6 players per side on a court divided by a net. Rally scoring — every rally earns a point. First to 25 (win by 2). Maximum 3 touches per side.</p>',
    animation: { type: 'sport-field', hint: 'Click positions!', config: { sport: 'basketball', positions: [
        {x:60,y:45,label:'S',name:'Setter — sets the ball for hitters'},
        {x:60,y:100,label:'OH',name:'Outside Hitter — primary attacker'},
        {x:60,y:155,label:'MB',name:'Middle Blocker — blocks at the net'},
        {x:175,y:45,label:'RS',name:'Right Side — attacks from right'},
        {x:175,y:100,label:'L',name:'Libero — defensive specialist'},
        {x:175,y:155,label:'OH',name:'Outside Hitter — secondary attacker'}
    ]}}
},
// === SLIDE 109 ===
{
    id: 'team-014', topic: 'Team Sports', title: 'Volleyball — Positions & Rotation',
    content: '<p>Players rotate <strong>clockwise</strong> after winning a rally on the opponent\'s serve. Each position has front-row (attack/block) or back-row (serve/defend) responsibilities.</p>',
    animation: { type: 'drag-sort', hint: 'Put the rotation positions in order!', config: {
        items: ['Position 1 (Right Back/Server)', 'Position 2 (Right Front)', 'Position 3 (Middle Front)', 'Position 4 (Left Front)', 'Position 5 (Left Back)', 'Position 6 (Middle Back)'],
        correctOrder: ['Position 1 (Right Back/Server)', 'Position 2 (Right Front)', 'Position 3 (Middle Front)', 'Position 4 (Left Front)', 'Position 5 (Left Back)', 'Position 6 (Middle Back)']
    }}
},
// === SLIDE 110 ===
{
    id: 'team-015', topic: 'Team Sports', title: 'Volleyball — Serve',
    content: '<p>The serve starts every rally. Types: <strong>underhand serve</strong> (beginners), <strong>overhand serve</strong> (more power), <strong>jump serve</strong> (advanced — maximum power).</p>',
    animation: { type: 'ball-physics', hint: 'Click to serve the volleyball!', config: { gravity: 0.2, bounce: 0.6, color: '#fef3c7', radius: 14 } }
},
// === SLIDE 111 ===
{
    id: 'team-016', topic: 'Team Sports', title: 'Volleyball — Set & Spike',
    content: '<p>The <strong>set</strong> is a precise overhead pass that positions the ball for a <strong>spike</strong> (a powerful downward hit). This combination is volleyball\'s primary attacking play.</p>',
    animation: { type: 'ball-physics', hint: 'Click to spike the ball downward!', config: { gravity: 0.35, bounce: 0.5, color: '#fef3c7', radius: 13 } }
},
// === SLIDE 112 ===
{
    id: 'team-017', topic: 'Team Sports', title: 'Football — Field & Rules',
    content: '<p>American football is played on a 100-yard field. Score a touchdown (6 pts) by carrying or catching the ball in the end zone. Four downs to advance 10 yards.</p>',
    animation: { type: 'sport-field', hint: 'Click positions!', config: { sport: 'basketball', positions: [
        {x:175,y:100,label:'QB',name:'Quarterback — throws the ball, leads the offense'},
        {x:175,y:55,label:'WR',name:'Wide Receiver — catches passes'},
        {x:175,y:145,label:'WR',name:'Wide Receiver — catches passes'},
        {x:140,y:100,label:'RB',name:'Running Back — runs with the ball'},
        {x:210,y:100,label:'OL',name:'Offensive Line — protects the QB'}
    ]}}
},
// === SLIDE 113 ===
{
    id: 'team-018', topic: 'Team Sports', title: 'Football — Positions',
    content: '<p>Football has highly specialized positions divided into <strong>offense, defense, and special teams</strong>.</p>',
    animation: { type: 'flip-cards', hint: 'Click to learn each position!', config: { cards: [
        {front: 'QB', back: 'Quarterback — leader of the offense, throws passes'},
        {front: 'RB', back: 'Running Back — carries the ball on run plays'},
        {front: 'WR', back: 'Wide Receiver — runs routes and catches passes'},
        {front: 'OL', back: 'Offensive Line — blocks for QB and RB'},
        {front: 'DL', back: 'Defensive Line — rushes the passer, stops runs'},
        {front: 'LB', back: 'Linebacker — versatile defender, covers and tackles'}
    ]}}
},
// === SLIDE 114 ===
{
    id: 'team-019', topic: 'Team Sports', title: 'Football — Passing',
    content: '<p>A good throw has a tight spiral. Grip the ball near the back third, step toward target, release with a wrist snap, and follow through.</p>',
    animation: { type: 'ball-physics', hint: 'Click to throw the football!', config: { gravity: 0.2, bounce: 0.4, color: '#8b5cf6', radius: 12 } }
},
// === SLIDE 115 ===
{
    id: 'team-020', topic: 'Team Sports', title: 'Football — Running Plays',
    content: '<p>Running plays advance the ball on the ground. Types include: <strong>inside run, outside sweep, draw play, and option run</strong>. The offensive line creates gaps for the runner.</p>',
    animation: { type: 'sport-field', hint: 'Click to see run play arrows!', config: { sport: 'basketball', positions: [
        {x:175,y:100,label:'QB',name:'Quarterback hands off to the running back'},
        {x:140,y:100,label:'RB',name:'Running Back follows the block through the gap'},
        {x:200,y:80,label:'OL',name:'Guard pulls to create a running lane'},
        {x:200,y:120,label:'OL',name:'Tackle blocks the outside defender'},
        {x:100,y:100,label:'FB',name:'Fullback leads the block'}
    ]}}
},
// === SLIDE 116 ===
{
    id: 'team-021', topic: 'Team Sports', title: 'Baseball/Softball — Field & Rules',
    content: '<p>Baseball/softball is played on a diamond-shaped field. Teams alternate batting and fielding. Score by hitting the ball and running all four bases to home plate.</p>',
    animation: { type: 'sport-field', hint: 'Click positions!', config: { sport: 'basketball', positions: [
        {x:175,y:180,label:'C',name:'Catcher — receives pitches behind home plate'},
        {x:175,y:120,label:'P',name:'Pitcher — throws the ball to the batter'},
        {x:120,y:140,label:'SS',name:'Shortstop — fields balls between 2nd and 3rd base'},
        {x:230,y:140,label:'2B',name:'2nd Baseman — covers 2nd base area'},
        {x:80,y:100,label:'3B',name:'3rd Baseman — hot corner'},
        {x:270,y:100,label:'1B',name:'1st Baseman — receives throws for outs'}
    ]}}
},
// === SLIDE 117 ===
{
    id: 'team-022', topic: 'Team Sports', title: 'Baseball — Positions',
    content: '<p>Baseball has <strong>9 fielding positions</strong>: pitcher, catcher, 1st base, 2nd base, shortstop, 3rd base, left field, center field, right field.</p>',
    animation: { type: 'label-diagram', hint: 'Click labels to place them!', config: {
        bgText: 'DIAMOND',
        labels: [
            {text: 'Pitcher', x: 48, y: 50},
            {text: 'Catcher', x: 48, y: 80},
            {text: '1st Base', x: 72, y: 55},
            {text: 'Shortstop', x: 35, y: 42},
            {text: 'Center Field', x: 48, y: 15}
        ]
    }}
},
// === SLIDE 118 ===
{
    id: 'team-023', topic: 'Team Sports', title: 'Baseball — Batting',
    content: '<p>Good batting stance: feet shoulder-width, knees slightly bent, bat back, eyes on the pitcher. Swing level through the strike zone and follow through.</p>',
    animation: { type: 'ball-physics', hint: 'Click to hit the ball!', config: { gravity: 0.2, bounce: 0.5, color: '#fff', radius: 10 } }
},
// === SLIDE 119 ===
{
    id: 'team-024', topic: 'Team Sports', title: 'Baseball — Pitching',
    content: '<p>Pitching is the art of throwing the ball to the batter with accuracy and movement. Common pitches: <strong>fastball, curveball, changeup, slider</strong>.</p>',
    animation: { type: 'flip-cards', hint: 'Click to learn about each pitch!', config: { cards: [
        {front: 'Fastball', back: 'Straight and fast (60-100 mph). Backbone of pitching.'},
        {front: 'Curveball', back: 'Topspin makes the ball drop sharply'},
        {front: 'Changeup', back: 'Looks like a fastball but arrives slower — deception'},
        {front: 'Slider', back: 'Lateral break — moves sideways as it approaches'}
    ]}}
},
// === SLIDE 120 ===
{
    id: 'team-025', topic: 'Team Sports', title: 'Hockey — Rink & Rules',
    content: '<p>Ice hockey is played on a rink with 6 players per side (including goalie). Score by shooting the puck into the opponent\'s net. Three 20-minute periods.</p>',
    animation: { type: 'sport-field', hint: 'Click positions!', config: { sport: 'basketball', positions: [
        {x:30,y:100,label:'G',name:'Goalie — protects the net'},
        {x:80,y:60,label:'LD',name:'Left Defense — defends left side'},
        {x:80,y:140,label:'RD',name:'Right Defense — defends right side'},
        {x:200,y:55,label:'LW',name:'Left Wing — attacks left side'},
        {x:200,y:100,label:'C',name:'Center — faceoffs and playmaking'},
        {x:200,y:145,label:'RW',name:'Right Wing — attacks right side'}
    ]}}
},
// === SLIDE 121 ===
{
    id: 'team-026', topic: 'Team Sports', title: 'Hockey — Positions',
    content: '<p>Hockey positions: <strong>goalie, 2 defensemen, center, left wing, right wing</strong>. Players shift on-the-fly every 45-60 seconds due to the sport\'s intensity.</p>',
    animation: { type: 'match-pairs', hint: 'Match positions to their roles!', config: { pairs: [
        {a: 'Goalie', b: 'Stops shots on net'},
        {a: 'Center', b: 'Takes faceoffs'},
        {a: 'Defenseman', b: 'Protects own zone'},
        {a: 'Wing', b: 'Attacks from the sides'}
    ]}}
},
// === SLIDE 122 ===
{
    id: 'team-027', topic: 'Team Sports', title: 'Hockey — Stick Handling',
    content: '<p>Stick handling is controlling the puck while skating. Keep your hands apart on the stick, cradle the puck with soft touches, and keep your head up to read the play.</p>',
    animation: { type: 'ball-physics', hint: 'Click to shoot the puck!', config: { gravity: 0.05, bounce: 0.6, color: '#1e293b', radius: 8 } }
},
// === SLIDE 123 ===
{
    id: 'team-028', topic: 'Team Sports', title: 'Rugby — Field & Rules',
    content: '<p>Rugby is a contact sport with 15 players per team. Score by carrying the ball across the try line (5 pts) or kicking through the posts. The ball can only be passed backward!</p>',
    animation: { type: 'flip-cards', hint: 'Click to learn rugby scoring!', config: { cards: [
        {front: 'Try', back: '5 points — ground the ball in the in-goal area'},
        {front: 'Conversion', back: '2 points — kick after a try'},
        {front: 'Penalty Kick', back: '3 points — kick awarded for penalties'},
        {front: 'Drop Goal', back: '3 points — drop kick through posts during play'}
    ]}}
},
// === SLIDE 124 ===
{
    id: 'team-029', topic: 'Team Sports', title: 'Lacrosse — Field & Rules',
    content: '<p>Lacrosse is played with a stick with a mesh pocket to catch, carry, and throw the ball. 10 players per team in field lacrosse. Score by shooting into the opponent\'s goal.</p>',
    animation: { type: 'ball-physics', hint: 'Click to shoot the lacrosse ball!', config: { gravity: 0.25, bounce: 0.55, color: '#fff', radius: 10 } }
},
// === SLIDE 125 ===
{
    id: 'team-030', topic: 'Team Sports', title: 'Ultimate Frisbee — Rules',
    content: '<p>Ultimate Frisbee is a <strong>non-contact, self-officiated</strong> team sport. 7 players per team. Score by catching the disc in the opposing end zone. No running with the disc!</p>',
    animation: { type: 'sport-field', hint: 'Click positions!', config: { sport: 'soccer', positions: [
        {x:60,y:50,label:'H',name:'Handler — throws the disc, like a QB'},
        {x:60,y:150,label:'H',name:'Handler — works with other handlers'},
        {x:160,y:60,label:'C',name:'Cutter — runs routes to get open'},
        {x:160,y:140,label:'C',name:'Cutter — creates space'},
        {x:250,y:100,label:'D',name:'Deep — goes long for hucks'}
    ]}}
},
// === SLIDE 126 ===
{
    id: 'team-031', topic: 'Team Sports', title: 'Team Strategy Basics',
    content: '<p>Every team sport uses strategy: <strong>formations, set plays, and in-game adjustments</strong>. Great teams communicate, anticipate, and adapt.</p>',
    animation: { type: 'sport-field', hint: 'Click positions to see strategic roles!', config: { sport: 'soccer', positions: [
        {x:30,y:100,label:'D',name:'Defense — protect your own goal'},
        {x:100,y:60,label:'M',name:'Midfield — transition play'},
        {x:100,y:140,label:'M',name:'Midfield — control tempo'},
        {x:175,y:100,label:'M',name:'Playmaker — creates scoring chances'},
        {x:270,y:80,label:'F',name:'Forward — scores goals'},
        {x:270,y:120,label:'F',name:'Forward — presses defense'}
    ]}}
},
// === SLIDE 127 ===
{
    id: 'team-032', topic: 'Team Sports', title: 'Offense vs Defense',
    content: '<p>Every team alternates between offense (trying to score) and defense (trying to prevent scoring). Some sports have distinct phases; others transition fluidly.</p>',
    animation: { type: 'slider-compare', hint: 'Drag to compare offense vs defense!', config: {
        left: 'Offense', leftDetail: 'Goal: Score points. Create space. Move the ball. Be unpredictable. Attack weaknesses.',
        right: 'Defense', rightDetail: 'Goal: Prevent scoring. Close space. Force turnovers. Communicate. Stay disciplined.'
    }}
},
// === SLIDE 128 ===
{
    id: 'team-033', topic: 'Team Sports', title: 'Teamwork & Communication',
    content: '<p>The best teams have <strong>clear communication, trust, and shared goals</strong>. Communication can be verbal (calling plays) or non-verbal (eye contact, gestures).</p>',
    animation: { type: 'flip-cards', hint: 'Click to reveal teamwork principles!', config: { cards: [
        {front: 'Trust', back: 'Believe in your teammates\' abilities'},
        {front: 'Communication', back: 'Call out plays, positions, and screens'},
        {front: 'Selflessness', back: 'Make the extra pass for a better shot'},
        {front: 'Accountability', back: 'Own your mistakes and learn from them'},
        {front: 'Encouragement', back: 'Lift teammates up after errors'},
        {front: 'Adaptability', back: 'Adjust your role as the game demands'}
    ]}}
},
// === SLIDE 129 ===
{
    id: 'team-034', topic: 'Team Sports', title: 'Sportsmanship',
    content: '<p><span class="key-term">Sportsmanship</span> means playing fairly, respecting opponents, officials, and teammates, and winning or losing with grace.</p>',
    animation: { type: 'quiz', hint: 'What would good sportsmanship look like?', config: {
        question: 'Which is the BEST example of sportsmanship?',
        options: ['Arguing with the referee after a call', 'Shaking hands with opponents after the game', 'Blaming teammates for a loss', 'Celebrating excessively after every point'],
        correct: 1,
        explanation: 'Shaking hands shows respect for your opponents. Good sportsmanship means respecting everyone in the game.'
    }}
},
// === SLIDE 130 ===
{
    id: 'team-035', topic: 'Team Sports', title: 'Fair Play',
    content: '<p>Fair play goes beyond just following the rules — it means <strong>playing in the spirit of the game</strong>, respecting all participants, and acting with integrity even when no one is watching.</p>',
    animation: { type: 'quiz', hint: 'Test your fair play knowledge!', config: {
        question: 'An opponent trips and drops the ball. The fair play response is to:',
        options: ['Grab the ball and score while they\'re down', 'Help them up and let play resume fairly', 'Pretend you didn\'t see it', 'Tell the ref they faked the fall'],
        correct: 1,
        explanation: 'Fair play means treating others the way you\'d want to be treated — helping an opponent shows true character.'
    }}
},
// === SLIDE 131 ===
{
    id: 'team-036', topic: 'Team Sports', title: 'Referee Signals',
    content: '<p>Referees use hand signals to communicate calls. Match each signal to its meaning!</p>',
    animation: { type: 'match-pairs', hint: 'Match signals to their meanings!', config: { pairs: [
        {a: 'Arms straight up', b: 'Touchdown/Goal'},
        {a: 'Arm pointing', b: 'Direction of play'},
        {a: 'Whistle blast', b: 'Stop play'},
        {a: 'T-shape with hands', b: 'Timeout'},
        {a: 'Rolling arms', b: 'Traveling violation'}
    ]}}
},
// === SLIDE 132 ===
{
    id: 'team-037', topic: 'Team Sports', title: 'Common Penalties',
    content: '<p>Understanding penalties helps you play within the rules and avoid giving the other team advantages.</p>',
    animation: { type: 'flip-cards', hint: 'Click to learn about common penalties!', config: { cards: [
        {front: 'Offside', back: 'Player is in an illegal position ahead of the play'},
        {front: 'Foul', back: 'Illegal physical contact with an opponent'},
        {front: 'Traveling', back: 'Moving without dribbling in basketball'},
        {front: 'Handball', back: 'Deliberately touching the ball with hand/arm in soccer'},
        {front: 'Holding', back: 'Illegally grabbing or restraining an opponent'}
    ]}}
},
// === SLIDE 133 ===
{
    id: 'team-038', topic: 'Team Sports', title: 'Modified Games',
    content: '<p>Modified games adapt sports to be <strong>more inclusive, safer, or suitable for smaller groups</strong>. Spin the wheel for a modified game idea!</p>',
    animation: { type: 'wheel-spin', hint: 'Spin for a modified game!', config: {
        options: ['3v3 Basketball', 'Kickball', 'Capture the Flag', 'Dodgeball', 'Four Square', 'Gaga Ball', 'Floor Hockey', 'Tag Rugby']
    }}
},
// === SLIDE 134 ===
{
    id: 'team-039', topic: 'Team Sports', title: 'Inclusive Team Activities',
    content: '<p>Inclusive PE ensures <strong>everyone can participate</strong> regardless of ability level. Adaptations include modified rules, equipment, and playing areas.</p>',
    animation: { type: 'flip-cards', hint: 'Click to see inclusion strategies!', config: { cards: [
        {front: 'Modified Rules', back: 'Adjust rules so all skill levels can play'},
        {front: 'Adapted Equipment', back: 'Use lighter balls, bigger targets, lower nets'},
        {front: 'Buddy System', back: 'Pair players to support each other'},
        {front: 'Multiple Roles', back: 'Offer coaching, keeping score, or refereeing roles'},
        {front: 'Smaller Teams', back: 'More touches and involvement for everyone'},
        {front: 'Choice', back: 'Let students choose their challenge level'}
    ]}}
},
// === SLIDE 135 ===
{
    id: 'team-040', topic: 'Team Sports', title: 'Team Sports Review',
    content: '<p>Let\'s review what you\'ve learned about team sports!</p>',
    animation: { type: 'quiz', hint: 'Final team sports quiz!', config: {
        question: 'Which skill is MOST important across ALL team sports?',
        options: ['Being the fastest player', 'Communication with teammates', 'Having the most expensive equipment', 'Playing only one position'],
        correct: 1,
        explanation: 'Communication is the foundation of all team sports. Without it, even the most talented individuals can\'t function as a team.'
    }}
}
);
