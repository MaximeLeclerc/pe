/* Animation Factory - Reusable interactive animation components */
window.Animations = {};

/* ===== HEARTBEAT ===== */
Animations.heartbeat = function(container, cfg) {
    var bpm = cfg.bpm || 72;
    var canvas = document.createElement('canvas');
    canvas.width = 300; canvas.height = 200;
    container.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    var scale = 1;
    var growing = true;
    var label = document.createElement('div');
    label.style.cssText = 'position:absolute;bottom:8px;left:0;right:0;text-align:center;font-size:14px;font-weight:600;color:#2563eb;';
    label.textContent = bpm + ' BPM';
    container.appendChild(label);
    container.style.cursor = 'pointer';

    function drawHeart(cx, cy, s) {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.scale(s, s);
        ctx.beginPath();
        ctx.moveTo(0, -15);
        ctx.bezierCurveTo(-30, -50, -70, -20, -40, 15);
        ctx.lineTo(0, 50);
        ctx.lineTo(40, 15);
        ctx.bezierCurveTo(70, -20, 30, -50, 0, -15);
        ctx.fillStyle = '#ef4444';
        ctx.fill();
        ctx.restore();
    }

    var interval = 60000 / bpm;
    var lastBeat = Date.now();
    var animId;
    function animate() {
        var now = Date.now();
        var elapsed = now - lastBeat;
        var phase = (elapsed % interval) / interval;
        scale = 1 + 0.2 * Math.sin(phase * Math.PI * 2) * Math.exp(-phase * 3);
        ctx.clearRect(0, 0, 300, 200);
        drawHeart(150, 85, scale);
        // ECG line
        ctx.beginPath();
        ctx.strokeStyle = '#22c55e';
        ctx.lineWidth = 2;
        for (var x = 0; x < 300; x++) {
            var t = ((x / 300) + phase) % 1;
            var y = 170;
            if (t > 0.4 && t < 0.45) y = 170 - 30 * Math.sin((t - 0.4) / 0.05 * Math.PI);
            else if (t > 0.45 && t < 0.5) y = 170 + 10;
            else if (t > 0.5 && t < 0.55) y = 170 - 50 * Math.sin((t - 0.5) / 0.05 * Math.PI);
            else if (t > 0.55 && t < 0.6) y = 170 + 15 * Math.sin((t - 0.55) / 0.05 * Math.PI);
            if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.stroke();
        animId = requestAnimationFrame(animate);
    }
    animate();

    container.addEventListener('click', function() {
        bpm = bpm >= 160 ? 60 : bpm + 12;
        interval = 60000 / bpm;
        label.textContent = bpm + ' BPM';
    });

    container._cleanup = function() { cancelAnimationFrame(animId); };
};

/* ===== MUSCLE FLEX ===== */
Animations['muscle-flex'] = function(container, cfg) {
    var muscles = cfg.muscles || ['Bicep', 'Tricep', 'Deltoid', 'Pectoral', 'Quadricep', 'Hamstring'];
    var selected = -1;
    var canvas = document.createElement('canvas');
    canvas.width = 300; canvas.height = 220;
    container.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    var info = document.createElement('div');
    info.style.cssText = 'position:absolute;bottom:8px;left:0;right:0;text-align:center;font-size:13px;font-weight:500;color:#1e293b;';
    container.appendChild(info);

    var positions = [
        {x:200, y:55, w:40, h:30}, {x:200, y:88, w:38, h:28},
        {x:170, y:32, w:50, h:25}, {x:130, y:55, w:50, h:35},
        {x:140, y:140, w:45, h:40}, {x:140, y:178, w:42, h:35}
    ];

    function draw() {
        ctx.clearRect(0, 0, 300, 220);
        // Stick figure body
        ctx.strokeStyle = '#64748b';
        ctx.lineWidth = 3;
        ctx.beginPath();
        // Head
        ctx.arc(150, 22, 15, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        // Torso
        ctx.moveTo(150, 37); ctx.lineTo(150, 120);
        // Arms
        ctx.moveTo(150, 55); ctx.lineTo(200, 55); ctx.lineTo(220, 90);
        ctx.moveTo(150, 55); ctx.lineTo(100, 55); ctx.lineTo(80, 90);
        // Legs
        ctx.moveTo(150, 120); ctx.lineTo(170, 180); ctx.lineTo(175, 210);
        ctx.moveTo(150, 120); ctx.lineTo(130, 180); ctx.lineTo(125, 210);
        ctx.stroke();

        // Muscle zones
        positions.forEach(function(p, i) {
            var flexAmt = (selected === i) ? 0.15 : 0;
            var pulse = (selected === i) ? Math.sin(Date.now() / 200) * 3 : 0;
            ctx.fillStyle = (selected === i) ? 'rgba(239,68,68,0.5)' : 'rgba(37,99,235,0.15)';
            ctx.beginPath();
            ctx.ellipse(p.x + pulse, p.y, p.w / 2 + flexAmt * p.w, p.h / 2 + flexAmt * p.h, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = (selected === i) ? '#ef4444' : '#2563eb';
            ctx.lineWidth = 1.5;
            ctx.stroke();
        });
    }

    var animId;
    function loop() { draw(); animId = requestAnimationFrame(loop); }
    loop();

    canvas.addEventListener('click', function(e) {
        var rect = canvas.getBoundingClientRect();
        var mx = (e.clientX - rect.left) * (300 / rect.width);
        var my = (e.clientY - rect.top) * (220 / rect.height);
        selected = -1;
        positions.forEach(function(p, i) {
            var dx = mx - p.x, dy = my - p.y;
            if (dx * dx / (p.w * p.w / 4) + dy * dy / (p.h * p.h / 4) <= 1) selected = i;
        });
        info.textContent = selected >= 0 ? muscles[selected] + ' — Click another muscle!' : 'Click a muscle group';
    });
    info.textContent = 'Click a muscle group';
    container._cleanup = function() { cancelAnimationFrame(animId); };
};

/* ===== SKELETON ===== */
Animations.skeleton = function(container, cfg) {
    var bones = cfg.bones || ['Skull','Clavicle','Humerus','Radius','Spine','Pelvis','Femur','Tibia','Fibula'];
    var canvas = document.createElement('canvas');
    canvas.width = 280; canvas.height = 240;
    container.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    var info = document.createElement('div');
    info.style.cssText = 'position:absolute;bottom:8px;left:0;right:0;text-align:center;font-size:13px;font-weight:500;color:#1e293b;';
    container.appendChild(info);
    var highlighted = -1;

    var bonePos = [
        {x:140,y:22,r:15}, {x:140,y:50,w:60,h:6}, {x:185,y:72,w:8,h:40}, {x:190,y:115,w:6,h:35},
        {x:140,y:90,w:6,h:60}, {x:140,y:135,w:45,h:12}, {x:125,y:170,w:8,h:40}, {x:122,y:210,w:6,h:28}, {x:132,y:210,w:5,h:26}
    ];

    function draw() {
        ctx.clearRect(0, 0, 280, 240);
        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(0, 0, 280, 240);
        bonePos.forEach(function(b, i) {
            ctx.fillStyle = (highlighted === i) ? '#f59e0b' : '#e2e8f0';
            ctx.strokeStyle = (highlighted === i) ? '#d97706' : '#94a3b8';
            ctx.lineWidth = 1.5;
            if (b.r) {
                ctx.beginPath(); ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
            } else {
                ctx.beginPath();
                ctx.roundRect(b.x - b.w / 2, b.y - b.h / 2, b.w, b.h, 3);
                ctx.fill(); ctx.stroke();
            }
        });
    }
    draw();

    canvas.addEventListener('click', function(e) {
        var rect = canvas.getBoundingClientRect();
        var mx = (e.clientX - rect.left) * (280 / rect.width);
        var my = (e.clientY - rect.top) * (240 / rect.height);
        highlighted = -1;
        bonePos.forEach(function(b, i) {
            if (b.r) {
                if (Math.hypot(mx - b.x, my - b.y) < b.r + 5) highlighted = i;
            } else {
                if (mx > b.x - b.w / 2 - 5 && mx < b.x + b.w / 2 + 5 && my > b.y - b.h / 2 - 5 && my < b.y + b.h / 2 + 5) highlighted = i;
            }
        });
        info.textContent = highlighted >= 0 ? bones[highlighted] : 'Click a bone to identify it';
        draw();
    });
    info.textContent = 'Click a bone to identify it';
};

/* ===== BREATHING ===== */
Animations.breathing = function(container, cfg) {
    var canvas = document.createElement('canvas');
    canvas.width = 300; canvas.height = 200;
    container.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    var phase = 0; // 0=inhale, 1=hold, 2=exhale
    var progress = 0;
    var auto = true;
    var label = document.createElement('div');
    label.style.cssText = 'position:absolute;bottom:8px;left:0;right:0;text-align:center;font-size:14px;font-weight:600;color:#2563eb;';
    container.appendChild(label);

    var animId;
    function animate() {
        progress += 0.008;
        if (progress >= 1) { progress = 0; phase = (phase + 1) % 3; }
        var expand = phase === 0 ? progress : (phase === 1 ? 1 : 1 - progress);
        ctx.clearRect(0, 0, 300, 200);
        // Left lung
        ctx.fillStyle = 'rgba(96,165,250,' + (0.4 + expand * 0.4) + ')';
        ctx.beginPath();
        ctx.ellipse(110, 100, 35 + expand * 15, 55 + expand * 15, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#2563eb'; ctx.lineWidth = 2; ctx.stroke();
        // Right lung
        ctx.beginPath();
        ctx.ellipse(190, 100, 35 + expand * 15, 55 + expand * 15, 0, 0, Math.PI * 2);
        ctx.fill(); ctx.stroke();
        // Trachea
        ctx.fillStyle = '#93c5fd';
        ctx.fillRect(145, 20, 10, 50);
        ctx.strokeRect(145, 20, 10, 50);
        // Diaphragm
        ctx.beginPath();
        ctx.moveTo(50, 170 + (1 - expand) * 15);
        ctx.quadraticCurveTo(150, 155 - expand * 20, 250, 170 + (1 - expand) * 15);
        ctx.strokeStyle = '#f59e0b'; ctx.lineWidth = 3; ctx.stroke();

        var labels = ['Inhale...', 'Hold...', 'Exhale...'];
        label.textContent = labels[phase];
        animId = requestAnimationFrame(animate);
    }
    animate();

    container.addEventListener('click', function() {
        phase = (phase + 1) % 3;
        progress = 0;
    });
    container._cleanup = function() { cancelAnimationFrame(animId); };
};

/* ===== STOPWATCH ===== */
Animations.stopwatch = function(container, cfg) {
    var running = false;
    var elapsed = 0;
    var lastTick = 0;
    var laps = [];
    var div = document.createElement('div');
    div.style.cssText = 'text-align:center;padding:20px;width:100%;';
    div.innerHTML = '<div style="font-size:48px;font-weight:700;font-family:monospace;color:#1e293b;" id="sw-display">00:00.00</div>' +
        '<div style="margin-top:12px;display:flex;gap:8px;justify-content:center;">' +
        '<button class="anim-btn" id="sw-start">Start</button>' +
        '<button class="anim-btn" id="sw-lap">Lap</button>' +
        '<button class="anim-btn" id="sw-reset">Reset</button></div>' +
        '<div id="sw-laps" style="margin-top:10px;font-size:13px;color:#64748b;max-height:60px;overflow-y:auto;"></div>';
    container.appendChild(div);

    var display = div.querySelector('#sw-display');
    var lapsDiv = div.querySelector('#sw-laps');
    var animId;

    function format(ms) {
        var m = Math.floor(ms / 60000);
        var s = Math.floor((ms % 60000) / 1000);
        var cs = Math.floor((ms % 1000) / 10);
        return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s + '.' + (cs < 10 ? '0' : '') + cs;
    }

    function tick() {
        if (running) {
            elapsed += Date.now() - lastTick;
            lastTick = Date.now();
            display.textContent = format(elapsed);
        }
        animId = requestAnimationFrame(tick);
    }
    tick();

    div.querySelector('#sw-start').addEventListener('click', function() {
        running = !running;
        if (running) { lastTick = Date.now(); this.textContent = 'Stop'; }
        else { this.textContent = 'Start'; }
    });
    div.querySelector('#sw-lap').addEventListener('click', function() {
        if (running) {
            laps.push(elapsed);
            lapsDiv.innerHTML = laps.map(function(l, i) { return 'Lap ' + (i + 1) + ': ' + format(l); }).join('<br>');
        }
    });
    div.querySelector('#sw-reset').addEventListener('click', function() {
        running = false; elapsed = 0; laps = [];
        display.textContent = '00:00.00';
        lapsDiv.innerHTML = '';
        div.querySelector('#sw-start').textContent = 'Start';
    });
    container._cleanup = function() { cancelAnimationFrame(animId); };
};

/* ===== FOOD PLATE ===== */
Animations['food-plate'] = function(container, cfg) {
    var foods = cfg.foods || [
        {name:'Apple', group:'Fruits', color:'#ef4444'},
        {name:'Bread', group:'Grains', color:'#f59e0b'},
        {name:'Chicken', group:'Protein', color:'#8b5cf6'},
        {name:'Milk', group:'Dairy', color:'#60a5fa'},
        {name:'Broccoli', group:'Vegetables', color:'#22c55e'},
        {name:'Rice', group:'Grains', color:'#f59e0b'}
    ];
    var div = document.createElement('div');
    div.style.cssText = 'display:flex;gap:16px;align-items:center;justify-content:center;width:100%;padding:12px;flex-wrap:wrap;';

    // Plate
    var plate = document.createElement('div');
    plate.style.cssText = 'width:160px;height:160px;border-radius:50%;border:4px solid #cbd5e1;background:#fff;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:4px;padding:20px;';
    plate.id = 'food-plate-drop';

    // Food items
    var foodsDiv = document.createElement('div');
    foodsDiv.style.cssText = 'display:flex;flex-direction:column;gap:6px;';

    foods.forEach(function(f, i) {
        var item = document.createElement('div');
        item.className = 'drag-item';
        item.textContent = f.name;
        item.style.borderColor = f.color;
        item.style.fontSize = '13px';
        item.style.padding = '6px 12px';
        item.draggable = true;
        item.dataset.index = i;
        item.addEventListener('dragstart', function(e) {
            e.dataTransfer.setData('text/plain', i);
            this.classList.add('dragging');
        });
        item.addEventListener('dragend', function() { this.classList.remove('dragging'); });
        item.addEventListener('click', function() {
            // Mobile fallback: click to add to plate
            var tag = document.createElement('span');
            tag.style.cssText = 'display:inline-block;padding:3px 8px;border-radius:12px;font-size:11px;color:#fff;background:' + f.color + ';';
            tag.textContent = f.name;
            plate.appendChild(tag);
            this.style.opacity = '0.3';
            this.style.pointerEvents = 'none';
        });
        foodsDiv.appendChild(item);
    });

    plate.addEventListener('dragover', function(e) { e.preventDefault(); plate.style.borderColor = '#2563eb'; });
    plate.addEventListener('dragleave', function() { plate.style.borderColor = '#cbd5e1'; });
    plate.addEventListener('drop', function(e) {
        e.preventDefault();
        var idx = parseInt(e.dataTransfer.getData('text/plain'));
        var f = foods[idx];
        var tag = document.createElement('span');
        tag.style.cssText = 'display:inline-block;padding:3px 8px;border-radius:12px;font-size:11px;color:#fff;background:' + f.color + ';';
        tag.textContent = f.name;
        plate.appendChild(tag);
        plate.style.borderColor = '#cbd5e1';
        var items = foodsDiv.querySelectorAll('.drag-item');
        items[idx].style.opacity = '0.3';
        items[idx].style.pointerEvents = 'none';
    });

    div.appendChild(foodsDiv);
    div.appendChild(plate);
    container.appendChild(div);
};

/* ===== BODY COMP ===== */
Animations['body-comp'] = function(container, cfg) {
    var segments = cfg.segments || [
        {label:'Muscle', pct:40, color:'#ef4444'},
        {label:'Fat', pct:20, color:'#f59e0b'},
        {label:'Bone', pct:15, color:'#e2e8f0'},
        {label:'Water', pct:20, color:'#60a5fa'},
        {label:'Other', pct:5, color:'#a78bfa'}
    ];
    var canvas = document.createElement('canvas');
    canvas.width = 250; canvas.height = 200;
    container.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    var hovered = -1;
    var info = document.createElement('div');
    info.style.cssText = 'position:absolute;bottom:8px;left:0;right:0;text-align:center;font-size:13px;font-weight:500;';
    container.appendChild(info);

    function draw() {
        ctx.clearRect(0, 0, 250, 200);
        var angle = -Math.PI / 2;
        segments.forEach(function(s, i) {
            var sliceAngle = (s.pct / 100) * Math.PI * 2;
            var r = (hovered === i) ? 82 : 75;
            ctx.beginPath();
            ctx.moveTo(125, 95);
            ctx.arc(125, 95, r, angle, angle + sliceAngle);
            ctx.closePath();
            ctx.fillStyle = s.color;
            ctx.fill();
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 2;
            ctx.stroke();
            angle += sliceAngle;
        });
    }
    draw();
    info.textContent = 'Click a segment to see details';

    canvas.addEventListener('click', function(e) {
        var rect = canvas.getBoundingClientRect();
        var mx = (e.clientX - rect.left) * (250 / rect.width) - 125;
        var my = (e.clientY - rect.top) * (200 / rect.height) - 95;
        var clickAngle = Math.atan2(my, mx);
        if (clickAngle < -Math.PI / 2) clickAngle += Math.PI * 2;
        var dist = Math.hypot(mx, my);
        if (dist > 82) { hovered = -1; draw(); info.textContent = 'Click a segment'; return; }
        var angle = -Math.PI / 2;
        hovered = -1;
        for (var i = 0; i < segments.length; i++) {
            var sa = (segments[i].pct / 100) * Math.PI * 2;
            if (clickAngle >= angle && clickAngle < angle + sa) { hovered = i; break; }
            angle += sa;
        }
        draw();
        if (hovered >= 0) info.textContent = segments[hovered].label + ': ' + segments[hovered].pct + '%';
    });
};

/* ===== RUNNER ===== */
Animations.runner = function(container, cfg) {
    var speed = cfg.speed || 3;
    var canvas = document.createElement('canvas');
    canvas.width = 350; canvas.height = 180;
    container.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    var x = 50;
    var frame = 0;
    var label = document.createElement('div');
    label.style.cssText = 'position:absolute;bottom:8px;left:0;right:0;text-align:center;font-size:13px;font-weight:500;color:#2563eb;';
    label.textContent = 'Speed: ' + speed + 'x — Click to change';
    container.appendChild(label);
    var animId;

    function drawRunner(px, f) {
        ctx.save();
        ctx.translate(px, 100);
        ctx.strokeStyle = '#1e293b'; ctx.lineWidth = 3; ctx.lineCap = 'round';
        // Head
        ctx.beginPath(); ctx.arc(0, -35, 10, 0, Math.PI * 2); ctx.stroke();
        // Body
        ctx.beginPath(); ctx.moveTo(0, -25); ctx.lineTo(0, 10); ctx.stroke();
        // Arms
        var armAngle = Math.sin(f * 0.15) * 0.6;
        ctx.beginPath(); ctx.moveTo(0, -15); ctx.lineTo(-15 * Math.cos(armAngle), -5 + 15 * Math.sin(armAngle)); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, -15); ctx.lineTo(15 * Math.cos(armAngle), -5 - 15 * Math.sin(armAngle)); ctx.stroke();
        // Legs
        var legAngle = Math.sin(f * 0.15) * 0.7;
        ctx.beginPath(); ctx.moveTo(0, 10); ctx.lineTo(-12 * Math.sin(legAngle), 35 + 5 * Math.cos(legAngle)); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, 10); ctx.lineTo(12 * Math.sin(legAngle), 35 - 5 * Math.cos(legAngle)); ctx.stroke();
        ctx.restore();
    }

    function animate() {
        ctx.clearRect(0, 0, 350, 180);
        // Ground
        ctx.strokeStyle = '#cbd5e1'; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(0, 150); ctx.lineTo(350, 150); ctx.stroke();
        // Dashes
        for (var d = (frame * speed) % 40 - 40; d < 360; d += 40) {
            ctx.fillStyle = '#e2e8f0';
            ctx.fillRect(d, 155, 20, 3);
        }
        x = 120; // stationary runner, ground moves
        drawRunner(x, frame);
        frame++;
        animId = requestAnimationFrame(animate);
    }
    animate();

    container.addEventListener('click', function() {
        speed = speed >= 6 ? 1 : speed + 1;
        label.textContent = 'Speed: ' + speed + 'x — Click to change';
    });
    container._cleanup = function() { cancelAnimationFrame(animId); };
};

/* ===== STRETCHING ===== */
Animations.stretching = function(container, cfg) {
    var stretches = cfg.stretches || ['Toe Touch', 'Quad Pull', 'Arm Cross', 'Side Bend', 'Lunge Stretch'];
    var current = 0;
    var canvas = document.createElement('canvas');
    canvas.width = 250; canvas.height = 200;
    container.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    var t = 0;
    var label = document.createElement('div');
    label.style.cssText = 'position:absolute;bottom:8px;left:0;right:0;text-align:center;font-size:14px;font-weight:600;color:#2563eb;';
    container.appendChild(label);
    var animId;

    function drawPose(pose, anim) {
        ctx.clearRect(0, 0, 250, 200);
        ctx.strokeStyle = '#1e293b'; ctx.lineWidth = 3; ctx.lineCap = 'round';
        var sway = Math.sin(anim) * 8;
        // Head
        ctx.beginPath(); ctx.arc(125, 35, 12, 0, Math.PI * 2); ctx.stroke();
        // Body
        var bodyBend = 0;
        if (pose === 0) bodyBend = sway * 2; // toe touch
        if (pose === 3) bodyBend = sway * 1.5; // side bend
        ctx.beginPath(); ctx.moveTo(125, 47); ctx.lineTo(125 + bodyBend * 0.3, 100 + Math.abs(bodyBend) * 0.3); ctx.stroke();
        // Arms
        if (pose === 2) { // arm cross
            ctx.beginPath(); ctx.moveTo(125, 65); ctx.lineTo(125 - 30 + sway, 80); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(125, 65); ctx.lineTo(125 + 30 - sway, 80); ctx.stroke();
        } else {
            ctx.beginPath(); ctx.moveTo(125, 65); ctx.lineTo(100 + sway, 95); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(125, 65); ctx.lineTo(150 - sway, 95); ctx.stroke();
        }
        // Legs
        if (pose === 4) { // lunge
            ctx.beginPath(); ctx.moveTo(125, 100); ctx.lineTo(100, 160); ctx.lineTo(95, 180); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(125, 100); ctx.lineTo(165, 155); ctx.lineTo(175, 180); ctx.stroke();
        } else if (pose === 1) { // quad pull
            ctx.beginPath(); ctx.moveTo(125, 100); ctx.lineTo(120, 160); ctx.lineTo(118, 180); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(125, 100); ctx.lineTo(140, 140); ctx.lineTo(135 + sway, 110); ctx.stroke();
        } else {
            ctx.beginPath(); ctx.moveTo(125, 100); ctx.lineTo(110, 160); ctx.lineTo(108, 180); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(125, 100); ctx.lineTo(140, 160); ctx.lineTo(142, 180); ctx.stroke();
        }
    }

    function animate() {
        t += 0.03;
        drawPose(current, t);
        label.textContent = stretches[current] + ' — Click for next';
        animId = requestAnimationFrame(animate);
    }
    animate();

    container.addEventListener('click', function() {
        current = (current + 1) % stretches.length;
        t = 0;
    });
    container._cleanup = function() { cancelAnimationFrame(animId); };
};

/* ===== SPORT FIELD ===== */
Animations['sport-field'] = function(container, cfg) {
    var sport = cfg.sport || 'basketball';
    var positions = cfg.positions || [];
    var canvas = document.createElement('canvas');
    canvas.width = 350; canvas.height = 200;
    container.appendChild(canvas);
    var ctx = canvas.getContext('2d');

    function drawCourt() {
        ctx.fillStyle = '#f0fdf4';
        ctx.fillRect(0, 0, 350, 200);
        ctx.strokeStyle = '#fff'; ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, 330, 180);
        ctx.beginPath(); ctx.moveTo(175, 10); ctx.lineTo(175, 190); ctx.stroke();
        ctx.beginPath(); ctx.arc(175, 100, 30, 0, Math.PI * 2); ctx.stroke();
        // Hoops
        ctx.beginPath(); ctx.arc(30, 100, 15, -Math.PI / 2, Math.PI / 2); ctx.stroke();
        ctx.beginPath(); ctx.arc(320, 100, 15, Math.PI / 2, -Math.PI / 2); ctx.stroke();
    }

    function drawSoccerField() {
        ctx.fillStyle = '#dcfce7';
        ctx.fillRect(0, 0, 350, 200);
        ctx.strokeStyle = '#16a34a'; ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, 330, 180);
        ctx.beginPath(); ctx.moveTo(175, 10); ctx.lineTo(175, 190); ctx.stroke();
        ctx.beginPath(); ctx.arc(175, 100, 25, 0, Math.PI * 2); ctx.stroke();
        // Goals
        ctx.strokeRect(10, 60, 30, 80);
        ctx.strokeRect(310, 60, 30, 80);
    }

    if (sport === 'soccer') drawSoccerField();
    else drawCourt();

    // Position markers
    var defaultPos = [
        {x:60,y:100,label:'PG',name:'Point Guard'},
        {x:120,y:50,label:'SG',name:'Shooting Guard'},
        {x:120,y:150,label:'SF',name:'Small Forward'},
        {x:200,y:60,label:'PF',name:'Power Forward'},
        {x:200,y:140,label:'C',name:'Center'}
    ];
    var posData = positions.length ? positions : defaultPos;

    var info = document.createElement('div');
    info.style.cssText = 'position:absolute;bottom:8px;left:0;right:0;text-align:center;font-size:13px;font-weight:500;color:#1e293b;';
    info.textContent = 'Click a position to learn about it';
    container.appendChild(info);

    posData.forEach(function(p) {
        var dot = document.createElement('div');
        dot.className = 'field-position';
        dot.style.left = (p.x / 350 * 100) + '%';
        dot.style.top = (p.y / 200 * 100) + '%';
        dot.style.transform = 'translate(-50%,-50%)';
        dot.textContent = p.label;
        dot.addEventListener('click', function(e) {
            e.stopPropagation();
            info.textContent = p.label + ' — ' + p.name;
        });
        container.appendChild(dot);
    });
};

/* ===== BALL PHYSICS ===== */
Animations['ball-physics'] = function(container, cfg) {
    var canvas = document.createElement('canvas');
    canvas.width = 350; canvas.height = 220;
    container.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    var ballX = 50, ballY = 100, vx = 0, vy = 0;
    var gravity = cfg.gravity || 0.3;
    var bounce = cfg.bounce || 0.7;
    var ballColor = cfg.color || '#f59e0b';
    var ballR = cfg.radius || 15;
    var animId;

    function animate() {
        vy += gravity;
        ballX += vx;
        ballY += vy;
        vx *= 0.999;
        if (ballY + ballR > 200) { ballY = 200 - ballR; vy = -vy * bounce; }
        if (ballX + ballR > 340) { ballX = 340 - ballR; vx = -vx * bounce; }
        if (ballX - ballR < 10) { ballX = 10 + ballR; vx = -vx * bounce; }
        if (ballY - ballR < 10) { ballY = 10 + ballR; vy = -vy * bounce; }

        ctx.clearRect(0, 0, 350, 220);
        ctx.fillStyle = '#f8fafc'; ctx.fillRect(0, 0, 350, 220);
        // Ground
        ctx.fillStyle = '#e2e8f0'; ctx.fillRect(0, 200, 350, 20);
        // Ball shadow
        ctx.fillStyle = 'rgba(0,0,0,0.1)';
        ctx.beginPath(); ctx.ellipse(ballX, 205, ballR * 0.8, 4, 0, 0, Math.PI * 2); ctx.fill();
        // Ball
        ctx.beginPath(); ctx.arc(ballX, ballY, ballR, 0, Math.PI * 2);
        ctx.fillStyle = ballColor; ctx.fill();
        ctx.strokeStyle = '#0005'; ctx.lineWidth = 1.5; ctx.stroke();
        // Highlight
        ctx.beginPath(); ctx.arc(ballX - 4, ballY - 5, ballR * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.4)'; ctx.fill();

        animId = requestAnimationFrame(animate);
    }
    animate();

    canvas.addEventListener('click', function(e) {
        var rect = canvas.getBoundingClientRect();
        var mx = (e.clientX - rect.left) * (350 / rect.width);
        var my = (e.clientY - rect.top) * (220 / rect.height);
        vx = (mx - ballX) * 0.1;
        vy = (my - ballY) * 0.1 - 5;
    });
    container._cleanup = function() { cancelAnimationFrame(animId); };
};

/* ===== REACTION TEST ===== */
Animations['reaction-test'] = function(container, cfg) {
    var div = document.createElement('div');
    div.style.cssText = 'text-align:center;padding:16px;width:100%;';
    var box = document.createElement('div');
    box.style.cssText = 'width:160px;height:160px;border-radius:16px;margin:0 auto;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;color:#fff;cursor:pointer;background:#ef4444;transition:background 0.1s;';
    box.textContent = 'Wait...';
    div.appendChild(box);
    var result = document.createElement('div');
    result.style.cssText = 'margin-top:12px;font-size:16px;font-weight:600;color:#1e293b;';
    div.appendChild(result);
    container.appendChild(div);

    var state = 'waiting'; // waiting, ready, done
    var startTime = 0;
    var timeout;

    function reset() {
        state = 'waiting';
        box.style.background = '#ef4444';
        box.textContent = 'Wait...';
        result.textContent = '';
        timeout = setTimeout(function() {
            state = 'ready';
            box.style.background = '#22c55e';
            box.textContent = 'Click NOW!';
            startTime = Date.now();
        }, 2000 + Math.random() * 3000);
    }

    box.addEventListener('click', function() {
        if (state === 'waiting') {
            clearTimeout(timeout);
            result.textContent = 'Too early! Click to try again.';
            box.style.background = '#f59e0b';
            box.textContent = 'Try Again';
            state = 'done';
        } else if (state === 'ready') {
            var time = Date.now() - startTime;
            result.textContent = 'Reaction Time: ' + time + ' ms';
            box.style.background = '#2563eb';
            box.textContent = time + ' ms';
            state = 'done';
        } else {
            reset();
        }
    });
    reset();
    container._cleanup = function() { clearTimeout(timeout); };
};

/* ===== BALANCE BEAM ===== */
Animations['balance-beam'] = function(container, cfg) {
    var canvas = document.createElement('canvas');
    canvas.width = 300; canvas.height = 200;
    container.appendChild(canvas);
    canvas.tabIndex = 0;
    var ctx = canvas.getContext('2d');
    var angle = 0, angVel = 0;
    var score = 0;
    var label = document.createElement('div');
    label.style.cssText = 'position:absolute;bottom:8px;left:0;right:0;text-align:center;font-size:13px;font-weight:500;color:#2563eb;';
    container.appendChild(label);
    var animId;

    function animate() {
        angVel += (Math.random() - 0.5) * 0.003; // wobble
        angVel *= 0.98;
        angle += angVel;
        if (Math.abs(angle) < 0.3) score++;
        angle = Math.max(-0.5, Math.min(0.5, angle));

        ctx.clearRect(0, 0, 300, 200);
        // Beam
        ctx.save();
        ctx.translate(150, 150);
        ctx.rotate(angle);
        ctx.fillStyle = '#8b5cf6';
        ctx.fillRect(-100, -5, 200, 10);
        // Figure
        ctx.strokeStyle = '#1e293b'; ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.arc(0, -30, 8, 0, Math.PI * 2); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, -22); ctx.lineTo(0, 0); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, -15); ctx.lineTo(-12, -5); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, -15); ctx.lineTo(12, -5); ctx.stroke();
        ctx.restore();
        // Triangle support
        ctx.fillStyle = '#64748b';
        ctx.beginPath(); ctx.moveTo(140, 160); ctx.lineTo(160, 160); ctx.lineTo(150, 150); ctx.closePath(); ctx.fill();

        label.textContent = 'Balance Score: ' + Math.floor(score / 60) + ' — Use arrow keys';
        animId = requestAnimationFrame(animate);
    }
    animate();

    document.addEventListener('keydown', function handler(e) {
        if (e.key === 'ArrowLeft') { angVel -= 0.01; e.preventDefault(); e.stopPropagation(); }
        if (e.key === 'ArrowRight') { angVel += 0.01; e.preventDefault(); e.stopPropagation(); }
        container._keyHandler = handler;
    });
    container.addEventListener('click', function(e) {
        var rect = container.getBoundingClientRect();
        var mx = e.clientX - rect.left;
        if (mx < rect.width / 2) angVel -= 0.015;
        else angVel += 0.015;
    });
    container._cleanup = function() {
        cancelAnimationFrame(animId);
        if (container._keyHandler) document.removeEventListener('keydown', container._keyHandler);
    };
};

/* ===== PULSE CHECK ===== */
Animations['pulse-check'] = function(container, cfg) {
    var div = document.createElement('div');
    div.style.cssText = 'text-align:center;padding:16px;width:100%;';
    div.innerHTML = '<div style="font-size:15px;margin-bottom:12px;">Tap the wrist when you feel a beat. Count for 15 seconds!</div>' +
        '<div style="width:120px;height:120px;border-radius:50%;background:#fef3c7;border:3px solid #f59e0b;margin:0 auto;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:600;" id="pulse-wrist">Tap Here</div>' +
        '<div style="margin-top:10px;font-size:16px;font-weight:600;" id="pulse-count">Taps: 0</div>' +
        '<div style="margin-top:6px;font-size:14px;color:#64748b;" id="pulse-bpm"></div>';
    container.appendChild(div);

    var taps = 0;
    var startTime = 0;
    var wrist = div.querySelector('#pulse-wrist');
    var countEl = div.querySelector('#pulse-count');
    var bpmEl = div.querySelector('#pulse-bpm');

    wrist.addEventListener('click', function() {
        if (taps === 0) startTime = Date.now();
        taps++;
        countEl.textContent = 'Taps: ' + taps;
        wrist.style.transform = 'scale(0.95)';
        setTimeout(function() { wrist.style.transform = 'scale(1)'; }, 100);
        var elapsed = (Date.now() - startTime) / 1000;
        if (elapsed > 3 && taps > 1) {
            var estimatedBpm = Math.round((taps - 1) / elapsed * 60);
            bpmEl.textContent = 'Estimated BPM: ~' + estimatedBpm;
        }
    });

    // Reset on double click
    wrist.addEventListener('dblclick', function() {
        taps = 0; countEl.textContent = 'Taps: 0'; bpmEl.textContent = '';
    });
};

/* ===== DRAG SORT ===== */
Animations['drag-sort'] = function(container, cfg) {
    var items = cfg.items || ['Step 1', 'Step 2', 'Step 3', 'Step 4'];
    var correctOrder = cfg.correctOrder || items.slice();
    var shuffled = items.slice().sort(function() { return Math.random() - 0.5; });

    var div = document.createElement('div');
    div.className = 'drag-container';
    container.appendChild(div);

    var dragSrc = null;

    function render() {
        div.innerHTML = '';
        shuffled.forEach(function(item, i) {
            var el = document.createElement('div');
            el.className = 'drag-item';
            el.textContent = (i + 1) + '. ' + item;
            el.draggable = true;
            el.dataset.index = i;

            el.addEventListener('dragstart', function(e) {
                dragSrc = i;
                this.classList.add('dragging');
                e.dataTransfer.effectAllowed = 'move';
            });
            el.addEventListener('dragend', function() { this.classList.remove('dragging'); });
            el.addEventListener('dragover', function(e) { e.preventDefault(); });
            el.addEventListener('drop', function(e) {
                e.preventDefault();
                var target = i;
                if (dragSrc !== target) {
                    var temp = shuffled[dragSrc];
                    shuffled.splice(dragSrc, 1);
                    shuffled.splice(target, 0, temp);
                    render();
                    checkOrder();
                }
            });
            // Click to swap (mobile)
            el.addEventListener('click', function() {
                if (dragSrc === null) {
                    dragSrc = i;
                    el.style.borderColor = '#2563eb';
                    el.style.background = '#eff6ff';
                } else {
                    var temp = shuffled[dragSrc];
                    shuffled[dragSrc] = shuffled[i];
                    shuffled[i] = temp;
                    dragSrc = null;
                    render();
                    checkOrder();
                }
            });
            div.appendChild(el);
        });
    }

    function checkOrder() {
        var correct = true;
        for (var i = 0; i < shuffled.length; i++) {
            if (shuffled[i] !== correctOrder[i]) { correct = false; break; }
        }
        if (correct) {
            var items = div.querySelectorAll('.drag-item');
            items.forEach(function(el) { el.classList.add('correct'); });
        }
    }

    render();
};

/* ===== QUIZ ===== */
Animations.quiz = function(container, cfg) {
    var question = cfg.question || 'What is the correct answer?';
    var options = cfg.options || ['Option A', 'Option B', 'Option C', 'Option D'];
    var correct = cfg.correct || 0;
    var explanation = cfg.explanation || 'Correct!';

    var div = document.createElement('div');
    div.style.cssText = 'width:100%;padding:12px;';
    div.innerHTML = '<div style="font-size:15px;font-weight:600;margin-bottom:12px;">' + question + '</div>';
    var optDiv = document.createElement('div');
    optDiv.className = 'quiz-options';
    div.appendChild(optDiv);
    container.appendChild(div);

    var answered = false;
    options.forEach(function(opt, i) {
        var btn = document.createElement('div');
        btn.className = 'quiz-option';
        btn.textContent = opt;
        btn.addEventListener('click', function() {
            if (answered) return;
            answered = true;
            if (i === correct) {
                btn.classList.add('correct');
                var fb = document.createElement('div');
                fb.className = 'quiz-feedback correct';
                fb.textContent = explanation;
                div.appendChild(fb);
            } else {
                btn.classList.add('wrong');
                optDiv.children[correct].classList.add('correct');
                var fb = document.createElement('div');
                fb.className = 'quiz-feedback wrong';
                fb.textContent = 'Not quite! ' + explanation;
                div.appendChild(fb);
            }
        });
        optDiv.appendChild(btn);
    });
};

/* ===== FLIP CARDS ===== */
Animations['flip-cards'] = function(container, cfg) {
    var cards = cfg.cards || [{front:'Term',back:'Definition'}];
    var grid = document.createElement('div');
    grid.className = 'flip-card-grid';
    container.appendChild(grid);

    cards.forEach(function(c) {
        var card = document.createElement('div');
        card.className = 'flip-card';
        card.innerHTML = '<div class="flip-card-inner"><div class="flip-card-front">' + c.front + '</div><div class="flip-card-back">' + c.back + '</div></div>';
        card.addEventListener('click', function() { this.classList.toggle('flipped'); });
        grid.appendChild(card);
    });
};

/* ===== PROGRESS BAR ===== */
Animations['progress-bar'] = function(container, cfg) {
    var bars = cfg.bars || [{label:'Example', value:75, color:'blue'}];
    var div = document.createElement('div');
    div.className = 'progress-bars';
    container.appendChild(div);

    bars.forEach(function(b) {
        var item = document.createElement('div');
        item.className = 'progress-item';
        item.innerHTML = '<div class="progress-label"><span>' + b.label + '</span><span>' + b.value + '%</span></div>' +
            '<div class="progress-track"><div class="progress-value ' + (b.color || 'blue') + '" style="width:0%"></div></div>';
        div.appendChild(item);
        // Animate on next frame
        setTimeout(function() {
            item.querySelector('.progress-value').style.width = b.value + '%';
        }, 100);
    });
};

/* ===== TIMELINE ===== */
Animations.timeline = function(container, cfg) {
    var events = cfg.events || [{year:'2000',title:'Event',detail:'Details here'}];
    var wrapper = document.createElement('div');
    wrapper.className = 'timeline-container';
    var tl = document.createElement('div');
    tl.className = 'timeline';
    wrapper.appendChild(tl);
    container.appendChild(wrapper);

    events.forEach(function(ev) {
        var item = document.createElement('div');
        item.className = 'timeline-item';
        item.innerHTML = '<div class="timeline-dot"></div><div class="timeline-year">' + ev.year + '</div><div class="timeline-text">' + ev.title + '</div>' +
            '<div class="timeline-detail">' + (ev.detail || ev.title) + '</div>';
        item.addEventListener('click', function() {
            tl.querySelectorAll('.timeline-item').forEach(function(i) { i.classList.remove('active'); });
            this.classList.toggle('active');
        });
        tl.appendChild(item);
    });
};

/* ===== JOINTS ===== */
Animations.joints = function(container, cfg) {
    var jointType = cfg.type || 'hinge';
    var canvas = document.createElement('canvas');
    canvas.width = 250; canvas.height = 200;
    container.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    var angle = 0;
    var dir = 1;
    var label = document.createElement('div');
    label.style.cssText = 'position:absolute;bottom:8px;left:0;right:0;text-align:center;font-size:13px;font-weight:600;color:#2563eb;';
    label.textContent = (cfg.name || 'Joint') + ' — Click to animate';
    container.appendChild(label);
    var animating = false;
    var animId;

    function draw() {
        ctx.clearRect(0, 0, 250, 200);
        ctx.strokeStyle = '#64748b'; ctx.lineWidth = 4; ctx.lineCap = 'round';
        // Upper bone
        ctx.beginPath(); ctx.moveTo(125, 30); ctx.lineTo(125, 90); ctx.stroke();
        // Joint
        ctx.beginPath(); ctx.arc(125, 95, 8, 0, Math.PI * 2);
        ctx.fillStyle = '#f59e0b'; ctx.fill();
        ctx.strokeStyle = '#d97706'; ctx.lineWidth = 2; ctx.stroke();
        // Lower bone (rotating)
        ctx.save();
        ctx.translate(125, 95);
        ctx.rotate(angle);
        ctx.strokeStyle = '#64748b'; ctx.lineWidth = 4;
        ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, 70); ctx.stroke();
        ctx.restore();
        // ROM arc
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(37,99,235,0.2)'; ctx.lineWidth = 20;
        var maxAngle = jointType === 'ball-socket' ? Math.PI * 0.8 : Math.PI * 0.5;
        ctx.arc(125, 95, 40, Math.PI * 0.5 - maxAngle / 2, Math.PI * 0.5 + maxAngle / 2);
        ctx.stroke();

        if (animating) {
            angle += 0.04 * dir;
            var max = jointType === 'ball-socket' ? 1.2 : 0.8;
            if (angle > max) dir = -1;
            if (angle < -max) dir = 1;
            animId = requestAnimationFrame(draw);
        }
    }
    draw();

    container.addEventListener('click', function() {
        animating = !animating;
        if (animating) draw();
    });
    container._cleanup = function() { cancelAnimationFrame(animId); };
};

/* ===== CIRCUIT ===== */
Animations.circuit = function(container, cfg) {
    var stations = cfg.stations || [
        {name:'Jumping Jacks', icon:'⭐', duration:'30s'},
        {name:'Push-Ups', icon:'💪', duration:'30s'},
        {name:'Squats', icon:'🦵', duration:'30s'},
        {name:'Burpees', icon:'🔥', duration:'30s'}
    ];
    var div = document.createElement('div');
    div.className = 'circuit-container';
    container.appendChild(div);

    var activeIdx = -1;
    stations.forEach(function(s, i) {
        var el = document.createElement('div');
        el.className = 'circuit-station';
        el.innerHTML = '<span class="station-icon">' + s.icon + '</span>' + s.name + '<br><small>' + s.duration + '</small>';
        el.addEventListener('click', function() {
            div.querySelectorAll('.circuit-station').forEach(function(e) { e.classList.remove('active'); });
            el.classList.add('active');
        });
        div.appendChild(el);
    });
};

/* ===== SCOREBOARD ===== */
Animations.scoreboard = function(container, cfg) {
    var teams = cfg.teams || [{name:'Team A', color:'#2563eb'}, {name:'Team B', color:'#ef4444'}];
    var scores = [0, 0];
    var div = document.createElement('div');
    div.style.cssText = 'display:flex;gap:24px;align-items:center;justify-content:center;width:100%;padding:16px;';
    container.appendChild(div);

    function render() {
        div.innerHTML = '';
        teams.forEach(function(t, i) {
            var col = document.createElement('div');
            col.style.cssText = 'text-align:center;cursor:pointer;';
            col.innerHTML = '<div style="font-size:14px;font-weight:600;color:' + t.color + ';">' + t.name + '</div>' +
                '<div style="font-size:48px;font-weight:700;color:' + t.color + ';">' + scores[i] + '</div>' +
                '<div style="font-size:12px;color:#64748b;">Click to score</div>';
            col.addEventListener('click', function() { scores[i]++; render(); });
            div.appendChild(col);
        });
    }
    render();
};

/* ===== WARMUP SEQUENCE ===== */
Animations['warmup-sequence'] = function(container, cfg) {
    var exercises = cfg.exercises || [
        {name:'Arm Circles', duration:'30s', desc:'Rotate arms forward and backward'},
        {name:'Leg Swings', duration:'30s', desc:'Swing each leg forward and back'},
        {name:'Torso Twists', duration:'20s', desc:'Rotate upper body side to side'},
        {name:'High Knees', duration:'30s', desc:'Jog in place lifting knees high'}
    ];
    var current = 0;
    var div = document.createElement('div');
    div.style.cssText = 'text-align:center;padding:16px;width:100%;';
    container.appendChild(div);

    function render() {
        var ex = exercises[current];
        div.innerHTML = '<div style="font-size:13px;color:#64748b;">Exercise ' + (current + 1) + ' of ' + exercises.length + '</div>' +
            '<div style="font-size:22px;font-weight:700;color:#2563eb;margin:10px 0;">' + ex.name + '</div>' +
            '<div style="font-size:15px;color:#1e293b;margin-bottom:6px;">' + ex.desc + '</div>' +
            '<div style="font-size:14px;color:#64748b;margin-bottom:14px;">Duration: ' + ex.duration + '</div>' +
            '<div style="display:flex;gap:6px;justify-content:center;flex-wrap:wrap;">' +
            exercises.map(function(_, i) {
                return '<div style="width:10px;height:10px;border-radius:50%;background:' + (i === current ? '#2563eb' : '#e2e8f0') + ';"></div>';
            }).join('') + '</div>';

        // Canvas animation for the exercise
        var canvas = document.createElement('canvas');
        canvas.width = 200; canvas.height = 100;
        canvas.style.cssText = 'margin:10px auto 0;display:block;';
        div.appendChild(canvas);
        var ctx2 = canvas.getContext('2d');
        var t = 0;
        var exAnimId;
        function animateExercise() {
            t += 0.05;
            ctx2.clearRect(0, 0, 200, 100);
            ctx2.strokeStyle = '#2563eb'; ctx2.lineWidth = 2.5; ctx2.lineCap = 'round';
            // Simple stick figure doing exercise
            ctx2.beginPath(); ctx2.arc(100, 20, 8, 0, Math.PI * 2); ctx2.stroke();
            ctx2.beginPath(); ctx2.moveTo(100, 28); ctx2.lineTo(100, 55); ctx2.stroke();
            // Arms
            var armY = Math.sin(t * 2) * 15;
            ctx2.beginPath(); ctx2.moveTo(100, 38); ctx2.lineTo(80, 38 + armY); ctx2.stroke();
            ctx2.beginPath(); ctx2.moveTo(100, 38); ctx2.lineTo(120, 38 - armY); ctx2.stroke();
            // Legs
            var legX = Math.sin(t * 2) * 10;
            ctx2.beginPath(); ctx2.moveTo(100, 55); ctx2.lineTo(90 - legX, 80); ctx2.stroke();
            ctx2.beginPath(); ctx2.moveTo(100, 55); ctx2.lineTo(110 + legX, 80); ctx2.stroke();
            exAnimId = requestAnimationFrame(animateExercise);
        }
        animateExercise();
        container._exAnimId = exAnimId;
    }
    render();

    container.addEventListener('click', function() {
        if (container._exAnimId) cancelAnimationFrame(container._exAnimId);
        current = (current + 1) % exercises.length;
        render();
    });
};

/* ===== STRESS METER ===== */
Animations['stress-meter'] = function(container, cfg) {
    var strategies = cfg.strategies || ['Deep Breathing', 'Exercise', 'Talk to Someone', 'Rest', 'Meditate'];
    var level = cfg.startLevel || 70;
    var div = document.createElement('div');
    div.className = 'meter-container';
    container.appendChild(div);

    function render() {
        var color = level > 60 ? '#ef4444' : level > 30 ? '#f59e0b' : '#22c55e';
        var status = level > 60 ? 'High Stress' : level > 30 ? 'Moderate' : 'Relaxed';
        div.innerHTML = '<div class="meter-label">Stress Level: ' + status + '</div>' +
            '<div style="width:100%;max-width:250px;height:24px;background:#e2e8f0;border-radius:12px;overflow:hidden;">' +
            '<div style="width:' + level + '%;height:100%;background:' + color + ';border-radius:12px;transition:width 0.5s;"></div></div>' +
            '<div style="font-size:24px;font-weight:700;color:' + color + ';">' + level + '%</div>' +
            '<div class="meter-buttons"></div>';
        var btns = div.querySelector('.meter-buttons');
        strategies.forEach(function(s) {
            var btn = document.createElement('button');
            btn.className = 'anim-btn';
            btn.textContent = s;
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                level = Math.max(0, level - 15);
                render();
            });
            btns.appendChild(btn);
        });
    }
    render();
};

/* ===== WATER FILL ===== */
Animations['water-fill'] = function(container, cfg) {
    var glasses = cfg.target || 8;
    var filled = 0;
    var div = document.createElement('div');
    div.className = 'water-container';
    container.appendChild(div);

    function render() {
        div.innerHTML = '<div class="water-label">' + filled + ' / ' + glasses + ' glasses</div>' +
            '<div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;">';
        var row = div.querySelector('div:last-child') || div;
        for (var i = 0; i < glasses; i++) {
            var glass = document.createElement('div');
            glass.className = 'water-glass';
            glass.style.width = '40px';
            glass.style.height = '60px';
            glass.innerHTML = '<div class="water-level" style="height:' + (i < filled ? '100' : '0') + '%;"></div>';
            (function(idx) {
                glass.addEventListener('click', function(e) {
                    e.stopPropagation();
                    filled = idx + 1;
                    render();
                });
            })(i);
            div.appendChild(glass);
        }
        div.insertBefore(document.createElement('br'), null);
        var lbl2 = document.createElement('div');
        lbl2.style.cssText = 'font-size:13px;color:#64748b;margin-top:8px;';
        lbl2.textContent = 'Click glasses to track water intake';
        div.appendChild(lbl2);
    }
    render();
};

/* ===== MATCH PAIRS ===== */
Animations['match-pairs'] = function(container, cfg) {
    var pairs = cfg.pairs || [{a:'Heart',b:'Pump blood'},{a:'Lungs',b:'Breathe'},{a:'Brain',b:'Think'}];
    var cards = [];
    pairs.forEach(function(p) {
        cards.push({text: p.a, pairId: p.a, type: 'a'});
        cards.push({text: p.b, pairId: p.a, type: 'b'});
    });
    cards.sort(function() { return Math.random() - 0.5; });

    var grid = document.createElement('div');
    grid.className = 'match-grid';
    container.appendChild(grid);

    var revealed = [];
    var matched = [];

    function render() {
        grid.innerHTML = '';
        cards.forEach(function(c, i) {
            var el = document.createElement('div');
            el.className = 'match-card';
            if (matched.indexOf(c.pairId) >= 0) {
                el.classList.add('matched');
                el.textContent = c.text;
            } else if (revealed.indexOf(i) >= 0) {
                el.classList.add('revealed');
                el.textContent = c.text;
            } else {
                el.textContent = '?';
            }
            el.addEventListener('click', function() {
                if (matched.indexOf(c.pairId) >= 0 || revealed.indexOf(i) >= 0) return;
                if (revealed.length >= 2) return;
                revealed.push(i);
                render();
                if (revealed.length === 2) {
                    var c1 = cards[revealed[0]], c2 = cards[revealed[1]];
                    if (c1.pairId === c2.pairId && c1.type !== c2.type) {
                        matched.push(c1.pairId);
                        setTimeout(function() { revealed = []; render(); }, 600);
                    } else {
                        setTimeout(function() { revealed = []; render(); }, 1000);
                    }
                }
            });
            grid.appendChild(el);
        });
    }
    render();
};

/* ===== LABEL DIAGRAM ===== */
Animations['label-diagram'] = function(container, cfg) {
    var labels = cfg.labels || [{text:'Label 1',x:50,y:50},{text:'Label 2',x:70,y:30}];
    var bgText = cfg.bgText || 'Diagram';
    var div = document.createElement('div');
    div.className = 'diagram-container';
    div.style.minHeight = '220px';
    container.appendChild(div);

    // Background
    var bg = document.createElement('div');
    bg.style.cssText = 'position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:60px;color:#e2e8f0;font-weight:700;pointer-events:none;';
    bg.textContent = bgText;
    div.appendChild(bg);

    // Targets
    labels.forEach(function(l) {
        var target = document.createElement('div');
        target.className = 'diagram-target';
        target.style.left = l.x + '%';
        target.style.top = l.y + '%';
        target.textContent = '?';
        target.dataset.text = l.text;
        div.appendChild(target);
    });

    // Draggable labels (shuffled at bottom)
    var shuffled = labels.slice().sort(function() { return Math.random() - 0.5; });
    var labelRow = document.createElement('div');
    labelRow.style.cssText = 'position:absolute;bottom:8px;left:8px;right:8px;display:flex;gap:6px;flex-wrap:wrap;';
    div.appendChild(labelRow);

    shuffled.forEach(function(l) {
        var lbl = document.createElement('div');
        lbl.className = 'diagram-label';
        lbl.textContent = l.text;
        lbl.style.position = 'relative';
        lbl.addEventListener('click', function() {
            // Find matching target
            var targets = div.querySelectorAll('.diagram-target');
            for (var i = 0; i < targets.length; i++) {
                if (targets[i].dataset.text === l.text && !targets[i].classList.contains('filled')) {
                    targets[i].textContent = l.text;
                    targets[i].classList.add('filled');
                    lbl.classList.add('placed');
                    lbl.style.opacity = '0.5';
                    lbl.style.pointerEvents = 'none';
                    break;
                }
            }
        });
        labelRow.appendChild(lbl);
    });
};

/* ===== SLIDER COMPARE ===== */
Animations['slider-compare'] = function(container, cfg) {
    var leftText = cfg.left || 'Before';
    var rightText = cfg.right || 'After';
    var leftDetail = cfg.leftDetail || '';
    var rightDetail = cfg.rightDetail || '';

    var wrap = document.createElement('div');
    wrap.className = 'slider-compare-container';
    wrap.innerHTML = '<div class="slider-compare-left"><div><strong>' + leftText + '</strong><br>' + leftDetail + '</div></div>' +
        '<div class="slider-compare-right"><div><strong>' + rightText + '</strong><br>' + rightDetail + '</div></div>' +
        '<div class="slider-compare-handle"></div>';
    container.appendChild(wrap);

    var handle = wrap.querySelector('.slider-compare-handle');
    var rightSide = wrap.querySelector('.slider-compare-right');
    var dragging = false;

    function updatePos(clientX) {
        var rect = wrap.getBoundingClientRect();
        var pct = Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100));
        handle.style.left = pct + '%';
        rightSide.style.clipPath = 'inset(0 0 0 ' + pct + '%)';
    }

    handle.addEventListener('mousedown', function() { dragging = true; });
    document.addEventListener('mousemove', function(e) { if (dragging) updatePos(e.clientX); });
    document.addEventListener('mouseup', function() { dragging = false; });
    handle.addEventListener('touchstart', function() { dragging = true; }, {passive:true});
    document.addEventListener('touchmove', function(e) { if (dragging) updatePos(e.touches[0].clientX); }, {passive:true});
    document.addEventListener('touchend', function() { dragging = false; });
};

/* ===== WHEEL SPIN ===== */
Animations['wheel-spin'] = function(container, cfg) {
    var options = cfg.options || ['Option A','Option B','Option C','Option D','Option E','Option F'];
    var colors = ['#ef4444','#f59e0b','#22c55e','#2563eb','#8b5cf6','#ec4899','#14b8a6','#f97316'];
    var div = document.createElement('div');
    div.className = 'wheel-container';
    container.appendChild(div);

    var canvas = document.createElement('canvas');
    canvas.width = 200; canvas.height = 200;
    canvas.className = 'wheel-canvas';
    div.appendChild(canvas);
    var result = document.createElement('div');
    result.className = 'wheel-result';
    result.textContent = 'Click to spin!';
    div.appendChild(result);

    var ctx = canvas.getContext('2d');
    var rotation = 0;
    var spinning = false;
    var spinSpeed = 0;
    var animId;

    function draw() {
        ctx.clearRect(0, 0, 200, 200);
        ctx.save();
        ctx.translate(100, 100);
        ctx.rotate(rotation);
        var sliceAngle = (Math.PI * 2) / options.length;
        options.forEach(function(opt, i) {
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, 90, i * sliceAngle, (i + 1) * sliceAngle);
            ctx.closePath();
            ctx.fillStyle = colors[i % colors.length];
            ctx.fill();
            ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.stroke();
            // Text
            ctx.save();
            ctx.rotate(i * sliceAngle + sliceAngle / 2);
            ctx.fillStyle = '#fff';
            ctx.font = '11px system-ui';
            ctx.textAlign = 'center';
            ctx.fillText(opt.substring(0, 12), 50, 4);
            ctx.restore();
        });
        ctx.restore();
        // Arrow
        ctx.fillStyle = '#1e293b';
        ctx.beginPath(); ctx.moveTo(185, 95); ctx.lineTo(200, 100); ctx.lineTo(185, 105); ctx.closePath(); ctx.fill();
    }

    function animate() {
        if (spinning) {
            rotation += spinSpeed;
            spinSpeed *= 0.98;
            if (spinSpeed < 0.005) {
                spinning = false;
                var normalizedAngle = ((rotation % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
                var sliceAngle = (Math.PI * 2) / options.length;
                var idx = Math.floor(((Math.PI * 2 - normalizedAngle) % (Math.PI * 2)) / sliceAngle) % options.length;
                result.textContent = options[idx];
            }
        }
        draw();
        animId = requestAnimationFrame(animate);
    }
    animate();

    canvas.addEventListener('click', function() {
        if (!spinning) {
            spinning = true;
            spinSpeed = 0.2 + Math.random() * 0.3;
            result.textContent = 'Spinning...';
        }
    });
    container._cleanup = function() { cancelAnimationFrame(animId); };
};

/* ===== LINE GRAPH — Interactive data graph for A-Level content ===== */
Animations['line-graph'] = function(container, cfg) {
    var datasets = cfg.datasets || [{label:'Data',points:[10,30,70,90,80,60],color:'#2563eb'}];
    var xLabels = cfg.xLabels || ['0','1','2','3','4','5'];
    var yLabel = cfg.yLabel || 'Value';
    var xLabel = cfg.xLabel || 'Time';
    var title = cfg.title || '';
    var canvas = document.createElement('canvas');
    canvas.width = 380; canvas.height = 230;
    container.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    var hovered = -1;
    var hoveredDs = 0;
    var info = document.createElement('div');
    info.style.cssText = 'position:absolute;bottom:4px;left:0;right:0;text-align:center;font-size:12px;font-weight:500;color:#1e293b;';
    container.appendChild(info);
    if (title) info.textContent = title;

    var padL = 45, padR = 15, padT = 20, padB = 35;
    var gw = canvas.width - padL - padR, gh = canvas.height - padT - padB;

    function getMaxVal() {
        var m = 0;
        datasets.forEach(function(ds) { ds.points.forEach(function(p) { if (p > m) m = p; }); });
        return m || 100;
    }

    var animProgress = 0;
    var animId;
    function draw() {
        animProgress = Math.min(1, animProgress + 0.03);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var maxVal = getMaxVal();
        // Axes
        ctx.strokeStyle = '#cbd5e1'; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(padL, padT); ctx.lineTo(padL, padT + gh); ctx.lineTo(padL + gw, padT + gh); ctx.stroke();
        // Y grid lines and labels
        ctx.fillStyle = '#94a3b8'; ctx.font = '10px system-ui'; ctx.textAlign = 'right';
        for (var g = 0; g <= 4; g++) {
            var gy = padT + gh - (g / 4) * gh;
            ctx.beginPath(); ctx.strokeStyle = '#f1f5f9'; ctx.moveTo(padL, gy); ctx.lineTo(padL + gw, gy); ctx.stroke();
            ctx.fillText(Math.round(maxVal * g / 4), padL - 5, gy + 3);
        }
        // X labels
        ctx.textAlign = 'center';
        xLabels.forEach(function(xl, i) {
            var px = padL + (i / (xLabels.length - 1)) * gw;
            ctx.fillText(xl, px, padT + gh + 14);
        });
        // Axis labels
        ctx.fillStyle = '#64748b'; ctx.font = '11px system-ui';
        ctx.fillText(xLabel, padL + gw / 2, padT + gh + 30);
        ctx.save(); ctx.translate(12, padT + gh / 2); ctx.rotate(-Math.PI / 2); ctx.textAlign = 'center';
        ctx.fillText(yLabel, 0, 0); ctx.restore();

        // Datasets
        datasets.forEach(function(ds, dsIdx) {
            var pts = ds.points;
            var n = pts.length;
            ctx.strokeStyle = ds.color || '#2563eb'; ctx.lineWidth = 2.5;
            ctx.beginPath();
            for (var i = 0; i < n; i++) {
                var px = padL + (i / (n - 1)) * gw;
                var py = padT + gh - (pts[i] / maxVal) * gh;
                var drawPx = padL + ((i / (n - 1)) * gw) * animProgress;
                var drawPy = padT + gh - (pts[i] / maxVal) * gh * animProgress;
                if (i === 0) ctx.moveTo(drawPx, drawPy); else ctx.lineTo(drawPx, drawPy);
            }
            ctx.stroke();
            // Points
            for (var i = 0; i < n; i++) {
                var px = padL + ((i / (n - 1)) * gw) * animProgress;
                var py = padT + gh - (pts[i] / maxVal) * gh * animProgress;
                ctx.beginPath(); ctx.arc(px, py, (hovered === i && hoveredDs === dsIdx) ? 6 : 4, 0, Math.PI * 2);
                ctx.fillStyle = (hovered === i && hoveredDs === dsIdx) ? ds.color : '#fff';
                ctx.fill(); ctx.strokeStyle = ds.color; ctx.lineWidth = 2; ctx.stroke();
            }
        });
        // Legend
        if (datasets.length > 1) {
            datasets.forEach(function(ds, i) {
                var lx = padL + 8 + i * 110;
                ctx.fillStyle = ds.color; ctx.fillRect(lx, padT - 14, 12, 10);
                ctx.fillStyle = '#1e293b'; ctx.font = '10px system-ui'; ctx.textAlign = 'left';
                ctx.fillText(ds.label, lx + 16, padT - 5);
            });
        }
        if (animProgress < 1) animId = requestAnimationFrame(draw);
    }
    draw();

    canvas.addEventListener('mousemove', function(e) {
        var rect = canvas.getBoundingClientRect();
        var mx = (e.clientX - rect.left) * (canvas.width / rect.width);
        var my = (e.clientY - rect.top) * (canvas.height / rect.height);
        hovered = -1;
        var maxVal = getMaxVal();
        datasets.forEach(function(ds, dsIdx) {
            ds.points.forEach(function(p, i) {
                var px = padL + (i / (ds.points.length - 1)) * gw;
                var py = padT + gh - (p / maxVal) * gh;
                if (Math.hypot(mx - px, my - py) < 12) { hovered = i; hoveredDs = dsIdx; }
            });
        });
        if (hovered >= 0) {
            var ds = datasets[hoveredDs];
            info.textContent = ds.label + ' at ' + xLabels[hovered] + ': ' + ds.points[hovered];
        } else {
            info.textContent = title || 'Hover over data points for values';
        }
        animProgress = 1; draw();
    });
    canvas.addEventListener('click', function() { animProgress = 0; draw(); });
    container._cleanup = function() { cancelAnimationFrame(animId); };
};

/* ===== FLOW DIAGRAM — For information processing models ===== */
Animations['flow-diagram'] = function(container, cfg) {
    var steps = cfg.steps || [{label:'Input',detail:'Sensory info'},{label:'Process',detail:'Decision making'},{label:'Output',detail:'Motor response'}];
    var title = cfg.title || '';
    var div = document.createElement('div');
    div.style.cssText = 'width:100%;padding:8px;overflow-x:auto;';
    container.appendChild(div);

    var flow = document.createElement('div');
    flow.style.cssText = 'display:flex;align-items:center;gap:4px;min-width:max-content;padding:10px 4px;';
    div.appendChild(flow);
    var infoEl = document.createElement('div');
    infoEl.style.cssText = 'text-align:center;font-size:13px;color:#1e293b;padding:6px;font-weight:500;min-height:20px;';
    if (title) infoEl.textContent = title;
    div.appendChild(infoEl);

    steps.forEach(function(s, i) {
        var box = document.createElement('div');
        box.style.cssText = 'padding:10px 14px;border:2px solid #2563eb;border-radius:8px;background:#eff6ff;cursor:pointer;font-size:12px;font-weight:600;color:#1e293b;text-align:center;min-width:80px;transition:all 0.2s;';
        box.textContent = s.label;
        box.addEventListener('click', function(e) {
            e.stopPropagation();
            flow.querySelectorAll('div').forEach(function(d) { if (d.style.border) d.style.borderColor = '#2563eb'; d.style.background = '#eff6ff'; });
            box.style.borderColor = '#f59e0b'; box.style.background = '#fef3c7';
            infoEl.innerHTML = '<strong>' + s.label + '</strong>: ' + s.detail;
        });
        box.addEventListener('mouseenter', function() { box.style.transform = 'scale(1.05)'; });
        box.addEventListener('mouseleave', function() { box.style.transform = 'scale(1)'; });
        flow.appendChild(box);

        if (i < steps.length - 1) {
            var arrow = document.createElement('div');
            var isFeedback = s.feedback;
            arrow.style.cssText = 'font-size:18px;color:' + (isFeedback ? '#f59e0b' : '#2563eb') + ';font-weight:700;';
            arrow.textContent = isFeedback ? '↩' : '→';
            flow.appendChild(arrow);
        }
    });
    // Add feedback arrow if configured
    if (cfg.feedbackLoop) {
        var fb = document.createElement('div');
        fb.style.cssText = 'font-size:18px;color:#f59e0b;font-weight:700;';
        fb.textContent = ' ↩ ' + (cfg.feedbackLabel || 'Feedback');
        flow.appendChild(fb);
    }
};

/* ===== ENERGY SYSTEM — Animated ATP/energy pathway diagram ===== */
Animations['energy-system'] = function(container, cfg) {
    var systems = cfg.systems || [
        {name:'ATP-PC', duration:'0-10s', power:100, color:'#ef4444'},
        {name:'Anaerobic Glycolytic', duration:'10s-3min', power:70, color:'#f59e0b'},
        {name:'Aerobic', duration:'3min+', power:40, color:'#22c55e'}
    ];
    var canvas = document.createElement('canvas');
    canvas.width = 380; canvas.height = 200;
    container.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    var time = 0;
    var info = document.createElement('div');
    info.style.cssText = 'position:absolute;bottom:4px;left:0;right:0;text-align:center;font-size:12px;font-weight:500;color:#1e293b;';
    info.textContent = cfg.title || 'Click to animate energy contribution over time';
    container.appendChild(info);
    var animId;
    var running = false;

    function draw() {
        ctx.clearRect(0, 0, 380, 200);
        var padL = 40, padB = 25, gw = 320, gh = 155;
        // Axes
        ctx.strokeStyle = '#cbd5e1'; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(padL, 10); ctx.lineTo(padL, 10 + gh); ctx.lineTo(padL + gw, 10 + gh); ctx.stroke();
        ctx.fillStyle = '#64748b'; ctx.font = '10px system-ui';
        ctx.textAlign = 'center'; ctx.fillText('Exercise Duration →', padL + gw / 2, 10 + gh + 18);
        ctx.save(); ctx.translate(12, 10 + gh / 2); ctx.rotate(-Math.PI / 2); ctx.fillText('% ATP Contribution', 0, 0); ctx.restore();

        // Draw energy curves
        systems.forEach(function(sys, idx) {
            ctx.beginPath(); ctx.strokeStyle = sys.color; ctx.lineWidth = 3;
            for (var x = 0; x <= Math.min(time, gw); x++) {
                var t = x / gw; // 0 to 1
                var y;
                if (idx === 0) y = Math.max(0, 100 * Math.exp(-t * 8)); // ATP-PC decays fast
                else if (idx === 1) y = 70 * Math.exp(-Math.pow(t - 0.15, 2) / 0.02); // Glycolytic peaks mid
                else y = Math.min(95, 95 * (1 - Math.exp(-t * 4))); // Aerobic rises
                var px = padL + x;
                var py = 10 + gh - (y / 100) * gh;
                if (x === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
            }
            ctx.stroke();
        });
        // Legend
        systems.forEach(function(sys, i) {
            ctx.fillStyle = sys.color; ctx.fillRect(padL + 5 + i * 115, 15, 10, 10);
            ctx.fillStyle = '#1e293b'; ctx.font = '10px system-ui'; ctx.textAlign = 'left';
            ctx.fillText(sys.name + ' (' + sys.duration + ')', padL + 18 + i * 115, 24);
        });

        if (running && time < gw) {
            time += 2;
            animId = requestAnimationFrame(draw);
        }
    }
    draw();

    container.addEventListener('click', function() {
        if (time >= 320) { time = 0; running = false; draw(); }
        else { running = true; draw(); }
    });
    container._cleanup = function() { cancelAnimationFrame(animId); };
};

/* ===== O2 DISSOCIATION CURVE — Interactive Bohr shift ===== */
Animations['dissociation-curve'] = function(container, cfg) {
    var canvas = document.createElement('canvas');
    canvas.width = 380; canvas.height = 220;
    container.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    var bohrShift = 0; // 0 = normal, 1 = shifted right
    var info = document.createElement('div');
    info.style.cssText = 'position:absolute;bottom:4px;left:0;right:0;text-align:center;font-size:12px;font-weight:500;color:#1e293b;';
    info.textContent = 'Click to toggle Bohr shift (increased CO₂/temp/acidity)';
    container.appendChild(info);

    function sigmoid(x, shift) { return 100 / (1 + Math.exp(-0.06 * (x - 35 - shift * 15))); }

    function draw() {
        ctx.clearRect(0, 0, 380, 220);
        var padL = 45, padB = 30, gw = 310, gh = 165;
        // Axes
        ctx.strokeStyle = '#cbd5e1'; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(padL, 10); ctx.lineTo(padL, 10 + gh); ctx.lineTo(padL + gw, 10 + gh); ctx.stroke();
        ctx.fillStyle = '#64748b'; ctx.font = '10px system-ui'; ctx.textAlign = 'center';
        ctx.fillText('Partial Pressure of O₂ (mmHg)', padL + gw / 2, 10 + gh + 22);
        ctx.save(); ctx.translate(12, 10 + gh / 2); ctx.rotate(-Math.PI / 2); ctx.fillText('% O₂ Saturation of Hb', 0, 0); ctx.restore();
        // X labels
        for (var xl = 0; xl <= 100; xl += 20) {
            var px = padL + (xl / 100) * gw;
            ctx.fillStyle = '#94a3b8'; ctx.font = '9px system-ui';
            ctx.fillText(xl, px, 10 + gh + 12);
        }
        // Y labels
        ctx.textAlign = 'right';
        for (var yl = 0; yl <= 100; yl += 25) {
            var py = 10 + gh - (yl / 100) * gh;
            ctx.fillText(yl + '%', padL - 5, py + 3);
        }

        // Normal curve (always shown)
        ctx.beginPath(); ctx.strokeStyle = '#ef4444'; ctx.lineWidth = 2.5;
        for (var x = 0; x <= 100; x++) {
            var y = sigmoid(x, 0);
            var px = padL + (x / 100) * gw;
            var py = 10 + gh - (y / 100) * gh;
            if (x === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        }
        ctx.stroke();

        // Shifted curve
        if (bohrShift) {
            ctx.beginPath(); ctx.strokeStyle = '#2563eb'; ctx.lineWidth = 2.5; ctx.setLineDash([6, 4]);
            for (var x = 0; x <= 100; x++) {
                var y = sigmoid(x, 1);
                var px = padL + (x / 100) * gw;
                var py = 10 + gh - (y / 100) * gh;
                if (x === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
            }
            ctx.stroke(); ctx.setLineDash([]);
        }

        // Legend
        ctx.fillStyle = '#ef4444'; ctx.fillRect(padL + 5, 15, 12, 8);
        ctx.fillStyle = '#1e293b'; ctx.font = '10px system-ui'; ctx.textAlign = 'left';
        ctx.fillText('Normal', padL + 20, 23);
        if (bohrShift) {
            ctx.fillStyle = '#2563eb'; ctx.fillRect(padL + 80, 15, 12, 8);
            ctx.fillStyle = '#1e293b'; ctx.fillText('Bohr Shift (↑CO₂, ↑Temp, ↑Acid)', padL + 95, 23);
        }
        // Arrow showing shift
        if (bohrShift) {
            ctx.fillStyle = '#2563eb'; ctx.font = '16px system-ui'; ctx.textAlign = 'center';
            ctx.fillText('→', padL + gw * 0.45, 10 + gh * 0.45);
        }
    }
    draw();
    container.addEventListener('click', function() { bohrShift = bohrShift ? 0 : 1; draw(); });
};

/* ===== LUNG VOLUMES — Interactive spirometer trace ===== */
Animations['lung-volumes'] = function(container, cfg) {
    var canvas = document.createElement('canvas');
    canvas.width = 380; canvas.height = 210;
    container.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    var mode = 0; // 0=rest, 1=exercise
    var info = document.createElement('div');
    info.style.cssText = 'position:absolute;bottom:4px;left:0;right:0;text-align:center;font-size:12px;font-weight:500;color:#1e293b;';
    info.textContent = 'Click to toggle rest vs exercise breathing';
    container.appendChild(info);
    var t = 0;
    var animId;

    function draw() {
        t += 0.02;
        ctx.clearRect(0, 0, 380, 210);
        var padL = 50, padB = 20, gw = 310, gh = 170;

        // Y axis
        ctx.strokeStyle = '#cbd5e1'; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(padL, 10); ctx.lineTo(padL, 10 + gh); ctx.lineTo(padL + gw, 10 + gh); ctx.stroke();
        ctx.fillStyle = '#64748b'; ctx.font = '9px system-ui'; ctx.textAlign = 'right';

        // Volume markers
        var volumes = [{y:0.15, label:'TLC (6000ml)'}, {y:0.35, label:'IRV'}, {y:0.52, label:'TV (rest)'}, {y:0.6, label:'TV (base)'}, {y:0.75, label:'ERV'}, {y:0.92, label:'RV (1200ml)'}];
        volumes.forEach(function(v) {
            var py = 10 + v.y * gh;
            ctx.fillStyle = '#94a3b8'; ctx.fillText(v.label, padL - 3, py + 3);
            ctx.beginPath(); ctx.strokeStyle = '#f1f5f9'; ctx.moveTo(padL, py); ctx.lineTo(padL + gw, py); ctx.stroke();
        });

        // Spirometer trace
        ctx.beginPath(); ctx.strokeStyle = '#2563eb'; ctx.lineWidth = 2.5;
        var tidalAmp = mode === 0 ? 0.08 : 0.25;
        var freq = mode === 0 ? 1 : 2.5;
        var baseline = mode === 0 ? 0.56 : 0.48;
        for (var x = 0; x <= gw; x++) {
            var phase = (x / gw) * 10 + t * freq;
            var breath = Math.sin(phase * Math.PI * 2) * tidalAmp;
            // Add occasional deeper breath in exercise mode
            if (mode === 1 && Math.sin(phase * 0.3) > 0.8) breath *= 1.3;
            var y = baseline + breath;
            var px = padL + x;
            var py = 10 + y * gh;
            if (x === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        }
        ctx.stroke();

        // Labels
        ctx.fillStyle = '#1e293b'; ctx.font = '11px system-ui'; ctx.textAlign = 'left';
        ctx.fillText(mode === 0 ? 'At Rest — TV ≈ 500ml' : 'During Exercise — TV ≈ 2500ml+', padL + 5, 22);
        ctx.fillText('Minute Ventilation: ' + (mode === 0 ? '~6 L/min' : '~100+ L/min'), padL + 5, 36);

        animId = requestAnimationFrame(draw);
    }
    draw();

    container.addEventListener('click', function() { mode = mode ? 0 : 1; });
    container._cleanup = function() { cancelAnimationFrame(animId); };
};

/* ===== CARDIAC CYCLE — Animated heart pumping with values ===== */
Animations['cardiac-cycle'] = function(container, cfg) {
    var canvas = document.createElement('canvas');
    canvas.width = 360; canvas.height = 200;
    container.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    var trained = cfg.trained || false;
    var info = document.createElement('div');
    info.style.cssText = 'position:absolute;bottom:4px;left:0;right:0;text-align:center;font-size:12px;font-weight:500;color:#1e293b;';
    info.textContent = 'Click to toggle trained vs untrained heart';
    container.appendChild(info);
    var t = 0;
    var animId;

    function draw() {
        t += 0.02;
        ctx.clearRect(0, 0, 360, 200);
        var hr = trained ? 55 : 72;
        var sv = trained ? 110 : 70;
        var q = (hr * sv) / 1000;
        var beat = Math.sin(t * hr / 10) > 0.7 ? 1.15 : 1;

        // Heart shape
        ctx.save(); ctx.translate(90, 85); ctx.scale(beat, beat);
        ctx.beginPath(); ctx.moveTo(0, -10);
        ctx.bezierCurveTo(-25, -40, -55, -15, -30, 15);
        ctx.lineTo(0, 42); ctx.lineTo(30, 15);
        ctx.bezierCurveTo(55, -15, 25, -40, 0, -10);
        ctx.fillStyle = trained ? '#2563eb' : '#ef4444'; ctx.fill();
        ctx.restore();

        // Stats
        ctx.fillStyle = '#1e293b'; ctx.font = '13px system-ui'; ctx.textAlign = 'left';
        var x = 180, y = 30;
        ctx.font = 'bold 14px system-ui';
        ctx.fillText(trained ? 'Trained Athlete' : 'Untrained Individual', x, y);
        ctx.font = '12px system-ui';
        ctx.fillText('Heart Rate: ' + hr + ' bpm', x, y + 22);
        ctx.fillText('Stroke Volume: ' + sv + ' ml', x, y + 40);
        ctx.fillText('Cardiac Output: ' + q.toFixed(1) + ' L/min', x, y + 58);
        ctx.fillText('Max HR: ~' + (trained ? '185' : '195') + ' bpm', x, y + 76);
        ctx.fillText('Max Q: ~' + (trained ? '35' : '22') + ' L/min', x, y + 94);
        ctx.fillStyle = '#64748b'; ctx.font = '11px system-ui';
        ctx.fillText('Q = HR × SV (Starling\'s Law)', x, y + 118);

        animId = requestAnimationFrame(draw);
    }
    draw();

    container.addEventListener('click', function() { trained = !trained; });
    container._cleanup = function() { cancelAnimationFrame(animId); };
};

/* ===== VASCULAR SHUNTING — Blood redistribution diagram ===== */
Animations['vascular-shunt'] = function(container, cfg) {
    var atRest = cfg.atRest || {muscles:15,organs:35,skin:10,brain:15,heart:5,other:20};
    var exercise = cfg.exercise || {muscles:70,organs:5,skin:10,brain:5,heart:5,other:5};
    var isExercise = false;
    var div = document.createElement('div');
    div.style.cssText = 'width:100%;padding:8px;';
    container.appendChild(div);

    function render() {
        var data = isExercise ? exercise : atRest;
        var entries = Object.keys(data).map(function(k) { return {name:k.charAt(0).toUpperCase()+k.slice(1), pct:data[k]}; });
        var colors = ['#ef4444','#f59e0b','#ec4899','#2563eb','#8b5cf6','#64748b'];
        div.innerHTML = '<div style="font-weight:700;font-size:14px;text-align:center;margin-bottom:8px;color:#1e293b;">' +
            (isExercise ? 'During Exercise' : 'At Rest') + ' — Blood Distribution</div>';
        var barDiv = document.createElement('div');
        barDiv.style.cssText = 'display:flex;flex-direction:column;gap:6px;';
        entries.forEach(function(e, i) {
            var row = document.createElement('div');
            row.style.cssText = 'display:flex;align-items:center;gap:8px;';
            row.innerHTML = '<div style="width:70px;font-size:12px;text-align:right;font-weight:500;">' + e.name + '</div>' +
                '<div style="flex:1;height:18px;background:#e2e8f0;border-radius:9px;overflow:hidden;">' +
                '<div style="width:0%;height:100%;background:' + colors[i % colors.length] + ';border-radius:9px;transition:width 0.8s ease;font-size:10px;color:#fff;display:flex;align-items:center;padding-left:6px;font-weight:600;" class="vbar">' + e.pct + '%</div></div>';
            barDiv.appendChild(row);
        });
        div.appendChild(barDiv);
        var note = document.createElement('div');
        note.style.cssText = 'text-align:center;font-size:12px;color:#64748b;margin-top:8px;';
        note.textContent = isExercise ? 'Vasoconstriction in organs, vasodilation in muscles' : 'Click to see redistribution during exercise';
        div.appendChild(note);
        // Animate bars
        setTimeout(function() {
            var bars = div.querySelectorAll('.vbar');
            entries.forEach(function(e, i) { bars[i].style.width = e.pct + '%'; });
        }, 50);
    }
    render();
    container.addEventListener('click', function() { isExercise = !isExercise; render(); });
};

/* ===== CONTINUUM SCALE — For skill classification ===== */
Animations['continuum'] = function(container, cfg) {
    var scales = cfg.scales || [{label:'Open — Closed', left:'Open', right:'Closed', value:50}];
    var items = cfg.items || [];
    var div = document.createElement('div');
    div.style.cssText = 'width:100%;padding:12px;display:flex;flex-direction:column;gap:14px;';
    container.appendChild(div);

    scales.forEach(function(s) {
        var row = document.createElement('div');
        row.innerHTML = '<div style="font-size:13px;font-weight:600;color:#1e293b;margin-bottom:4px;">' + s.label + '</div>' +
            '<div style="display:flex;align-items:center;gap:8px;">' +
            '<span style="font-size:11px;color:#64748b;width:70px;text-align:right;">' + s.left + '</span>' +
            '<div style="flex:1;height:8px;background:linear-gradient(to right,#2563eb,#e2e8f0,#ef4444);border-radius:4px;position:relative;">' +
            '<div style="position:absolute;top:-6px;left:' + s.value + '%;width:20px;height:20px;background:#1e293b;border-radius:50%;transform:translateX(-50%);cursor:grab;" class="slider-thumb"></div></div>' +
            '<span style="font-size:11px;color:#64748b;width:70px;">' + s.right + '</span></div>';
        div.appendChild(row);
    });

    if (items.length) {
        var itemDiv = document.createElement('div');
        itemDiv.style.cssText = 'display:flex;flex-wrap:wrap;gap:6px;justify-content:center;margin-top:4px;';
        items.forEach(function(item) {
            var tag = document.createElement('span');
            tag.style.cssText = 'padding:4px 10px;border-radius:12px;font-size:11px;font-weight:500;background:#eff6ff;color:#2563eb;cursor:pointer;border:1px solid #bfdbfe;';
            tag.textContent = item.name + ' (' + item.position + ')';
            tag.title = item.detail || '';
            itemDiv.appendChild(tag);
        });
        div.appendChild(itemDiv);
    }
};
