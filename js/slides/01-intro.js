window.ALL_SLIDES = window.ALL_SLIDES || [];
window.ALL_SLIDES.push(
// === SLIDE 1 ===
{
    id: 'intro-001', topic: 'Introduction & Welcome', title: 'Welcome to Physical Education!',
    content: '<p>Physical Education (PE) is more than just playing sports — it\'s about learning how to keep your body and mind healthy for life.</p><p>In these 300 interactive slides, you\'ll explore <strong>fitness, sports, nutrition, body systems, safety,</strong> and much more!</p>',
    animation: {
        type: 'flip-cards',
        hint: 'Click each card to reveal a PE fact!',
        config: {
            cards: [
                {front: '🏃 Fitness', back: 'PE improves cardiovascular health'},
                {front: '🏀 Sports', back: 'Learn teamwork and fair play'},
                {front: '🥗 Nutrition', back: 'Fuel your body the right way'},
                {front: '🧠 Mental Health', back: 'Exercise boosts your mood'},
                {front: '🦴 Body Systems', back: 'Understand how your body works'},
                {front: '⛑️ Safety', back: 'Stay safe during activities'}
            ]
        }
    }
},
// === SLIDE 2 ===
{
    id: 'intro-002', topic: 'Introduction & Welcome', title: 'What is Physical Education?',
    content: '<p>Physical Education is a school subject designed to develop <strong>physical literacy, fitness,</strong> and <strong>well-being</strong> through movement and sport.</p><p>It teaches skills you\'ll use throughout your entire life.</p>',
    animation: {
        type: 'quiz',
        hint: 'Test your knowledge!',
        config: {
            question: 'What is the PRIMARY goal of Physical Education?',
            options: [
                'To become a professional athlete',
                'To develop lifelong physical literacy and health',
                'To win sports competitions',
                'To exercise only during school hours'
            ],
            correct: 1,
            explanation: 'PE aims to develop lifelong physical literacy — the skills, knowledge, and confidence to be active for life!'
        }
    }
},
// === SLIDE 3 ===
{
    id: 'intro-003', topic: 'Introduction & Welcome', title: 'Why PE Matters',
    content: '<p>Regular physical activity reduces the risk of chronic diseases, improves mental health, builds strong bones and muscles, and helps maintain a healthy weight.</p>',
    animation: {
        type: 'progress-bar',
        hint: 'See how PE impacts your health!',
        config: {
            bars: [
                {label: 'Reduces Heart Disease Risk', value: 50, color: 'red'},
                {label: 'Improves Mental Health', value: 70, color: 'blue'},
                {label: 'Builds Strong Bones', value: 65, color: 'green'},
                {label: 'Boosts Academic Performance', value: 40, color: 'amber'},
                {label: 'Increases Life Expectancy', value: 55, color: 'blue'}
            ]
        }
    }
},
// === SLIDE 4 ===
{
    id: 'intro-004', topic: 'Introduction & Welcome', title: 'Components of PE',
    content: '<p>A complete PE program includes multiple components. Can you sort them into the correct categories?</p>',
    animation: {
        type: 'drag-sort',
        hint: 'Drag items into the correct order of a PE class!',
        config: {
            items: ['Warm-Up', 'Skill Instruction', 'Activity/Game', 'Cool-Down', 'Reflection'],
            correctOrder: ['Warm-Up', 'Skill Instruction', 'Activity/Game', 'Cool-Down', 'Reflection']
        }
    }
},
// === SLIDE 5 ===
{
    id: 'intro-005', topic: 'Introduction & Welcome', title: 'Setting Fitness Goals',
    content: '<p>Good fitness goals follow the <span class="key-term">SMART</span> framework: <strong>Specific, Measurable, Achievable, Relevant, Time-bound</strong>.</p><p>Compare a vague goal vs. a SMART goal:</p>',
    animation: {
        type: 'slider-compare',
        hint: 'Drag the slider to compare vague vs. SMART goals!',
        config: {
            left: 'Vague Goal',
            leftDetail: '"I want to get fit someday"',
            right: 'SMART Goal',
            rightDetail: '"I will run 1 mile in under 10 minutes within 8 weeks by jogging 3x per week"'
        }
    }
},
// === SLIDE 6 ===
{
    id: 'intro-006', topic: 'Introduction & Welcome', title: 'PE Safety Rules',
    content: '<p>Safety is the #1 priority in PE! Following rules protects you and your classmates from injuries.</p>',
    animation: {
        type: 'flip-cards',
        hint: 'Click each card to reveal the safety rule!',
        config: {
            cards: [
                {front: 'Rule #1', back: 'Always warm up before activity'},
                {front: 'Rule #2', back: 'Wear proper shoes and attire'},
                {front: 'Rule #3', back: 'Follow instructions carefully'},
                {front: 'Rule #4', back: 'Stay hydrated — drink water'},
                {front: 'Rule #5', back: 'Report injuries immediately'},
                {front: 'Rule #6', back: 'Respect equipment and others'}
            ]
        }
    }
},
// === SLIDE 7 ===
{
    id: 'intro-007', topic: 'Introduction & Welcome', title: 'Proper PE Attire',
    content: '<p>What you wear matters! Proper attire prevents injuries and allows free movement.</p>',
    animation: {
        type: 'drag-sort',
        hint: 'Sort items: which are appropriate for PE?',
        config: {
            items: ['Athletic shoes', 'Jeans', 'T-shirt', 'Flip-flops', 'Shorts', 'Jewelry', 'Hair tied back', 'Sandals'],
            correctOrder: ['Athletic shoes', 'T-shirt', 'Shorts', 'Hair tied back', 'Jeans', 'Flip-flops', 'Jewelry', 'Sandals']
        }
    }
},
// === SLIDE 8 ===
{
    id: 'intro-008', topic: 'Introduction & Welcome', title: 'Warm-Up Importance',
    content: '<p>A warm-up gradually increases your <strong>heart rate, blood flow,</strong> and <strong>body temperature</strong>, preparing muscles and joints for exercise and reducing injury risk.</p>',
    animation: {
        type: 'warmup-sequence',
        hint: 'Click to cycle through warm-up exercises!',
        config: {
            exercises: [
                {name: 'Jogging in Place', duration: '2 min', desc: 'Light jog to raise heart rate'},
                {name: 'Arm Circles', duration: '30 sec', desc: 'Small to large circles, forward then backward'},
                {name: 'Leg Swings', duration: '30 sec', desc: 'Swing each leg forward and backward'},
                {name: 'Hip Circles', duration: '30 sec', desc: 'Rotate hips in large circles'},
                {name: 'High Knees', duration: '1 min', desc: 'Drive knees up while jogging'}
            ]
        }
    }
},
// === SLIDE 9 ===
{
    id: 'intro-009', topic: 'Introduction & Welcome', title: 'Cool-Down Importance',
    content: '<p>Cooling down helps your body <strong>gradually return to rest</strong>. It reduces muscle soreness, prevents dizziness, and promotes flexibility.</p>',
    animation: {
        type: 'warmup-sequence',
        hint: 'Click to cycle through cool-down exercises!',
        config: {
            exercises: [
                {name: 'Walking', duration: '2 min', desc: 'Slow walk to lower heart rate'},
                {name: 'Hamstring Stretch', duration: '30 sec', desc: 'Sit and reach toward your toes'},
                {name: 'Quad Stretch', duration: '30 sec', desc: 'Pull heel toward your glutes'},
                {name: 'Shoulder Stretch', duration: '30 sec', desc: 'Cross arm across chest and hold'},
                {name: 'Deep Breathing', duration: '1 min', desc: 'Slow inhale through nose, exhale through mouth'}
            ]
        }
    }
},
// === SLIDE 10 ===
{
    id: 'intro-010', topic: 'Introduction & Welcome', title: 'Your PE Journey',
    content: '<p>Let\'s see what you\'ll learn throughout this course! Click on each milestone to preview the topics ahead.</p>',
    animation: {
        type: 'timeline',
        hint: 'Click events to see details!',
        config: {
            events: [
                {year: 'Unit 1', title: 'Fitness', detail: 'Cardio, strength, flexibility & body composition'},
                {year: 'Unit 2', title: 'Sports', detail: 'Team & individual sports, rules & strategies'},
                {year: 'Unit 3', title: 'Nutrition', detail: 'Food groups, hydration & healthy eating'},
                {year: 'Unit 4', title: 'Body Systems', detail: 'Muscles, bones, heart & lungs'},
                {year: 'Unit 5', title: 'Movement', detail: 'Motor skills, balance & coordination'},
                {year: 'Unit 6', title: 'Safety', detail: 'First aid, injury prevention & emergency response'},
                {year: 'Unit 7', title: 'Wellness', detail: 'Mental health, stress & mindfulness'}
            ]
        }
    }
}
);
