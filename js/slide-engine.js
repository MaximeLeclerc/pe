/* Slide Engine - Renders slides from data objects and manages transitions */
window.ALL_SLIDES = [];

window.SlideEngine = {
    currentIndex: 0,

    getTopics: function() {
        var topics = [];
        var seen = {};
        for (var i = 0; i < ALL_SLIDES.length; i++) {
            var s = ALL_SLIDES[i];
            if (!seen[s.topic]) {
                seen[s.topic] = true;
                topics.push({ name: s.topic, startIndex: i });
            }
        }
        return topics;
    },

    render: function(index) {
        if (index < 0 || index >= ALL_SLIDES.length) return;
        this.currentIndex = index;
        var slide = ALL_SLIDES[index];

        document.getElementById('slide-title').textContent = slide.title;
        document.getElementById('slide-content').innerHTML = slide.content || '';
        document.getElementById('topic-name').textContent = slide.topic;
        document.getElementById('slide-counter').textContent = (index + 1) + ' / ' + ALL_SLIDES.length;

        var pct = ((index + 1) / ALL_SLIDES.length) * 100;
        document.getElementById('progress-fill').style.width = pct + '%';

        // Clear previous animation
        var animEl = document.getElementById('slide-animation');
        animEl.innerHTML = '';

        // Render animation
        if (slide.animation && window.Animations[slide.animation.type]) {
            window.Animations[slide.animation.type](animEl, slide.animation.config || {});
        }

        // Hint
        var hint = slide.animation && slide.animation.hint ? slide.animation.hint : '';
        document.getElementById('slide-hint').textContent = hint;

        // Update nav buttons
        document.getElementById('prev-btn').disabled = (index === 0);
        document.getElementById('next-btn').disabled = (index === ALL_SLIDES.length - 1);

        // Update sidebar active
        this.updateSidebarActive();

        // Update URL hash
        history.replaceState(null, '', '#slide-' + (index + 1));

        // Re-trigger slide animation
        var slideEl = document.getElementById('slide');
        slideEl.style.animation = 'none';
        slideEl.offsetHeight; // reflow
        slideEl.style.animation = '';
    },

    next: function() {
        if (this.currentIndex < ALL_SLIDES.length - 1) {
            this.render(this.currentIndex + 1);
        }
    },

    prev: function() {
        if (this.currentIndex > 0) {
            this.render(this.currentIndex - 1);
        }
    },

    goTo: function(index) {
        this.render(Math.max(0, Math.min(index, ALL_SLIDES.length - 1)));
    },

    buildSidebar: function() {
        var list = document.getElementById('topic-list');
        list.innerHTML = '';
        var topics = this.getTopics();
        var self = this;
        topics.forEach(function(t) {
            var li = document.createElement('li');
            var endIdx = ALL_SLIDES.length;
            // find next topic start
            for (var j = 0; j < topics.length; j++) {
                if (topics[j].startIndex > t.startIndex) {
                    endIdx = topics[j].startIndex;
                    break;
                }
            }
            li.innerHTML = t.name + '<span class="topic-range">Slides ' + (t.startIndex + 1) + '-' + endIdx + '</span>';
            li.dataset.index = t.startIndex;
            li.addEventListener('click', function() {
                self.goTo(parseInt(this.dataset.index));
                self.closeSidebar();
            });
            list.appendChild(li);
        });
    },

    updateSidebarActive: function() {
        var items = document.querySelectorAll('#topic-list li');
        var topics = this.getTopics();
        var curTopic = ALL_SLIDES[this.currentIndex].topic;
        items.forEach(function(li, i) {
            li.classList.toggle('active', topics[i] && topics[i].name === curTopic);
        });
    },

    openSidebar: function() {
        document.getElementById('sidebar').classList.add('open');
        document.getElementById('sidebar-overlay').classList.add('visible');
    },

    closeSidebar: function() {
        document.getElementById('sidebar').classList.remove('open');
        document.getElementById('sidebar-overlay').classList.remove('visible');
    },

    toggleSidebar: function() {
        var sb = document.getElementById('sidebar');
        if (sb.classList.contains('open')) this.closeSidebar();
        else this.openSidebar();
    },

    getIndexFromHash: function() {
        var hash = window.location.hash;
        var match = hash.match(/^#slide-(\d+)$/);
        if (match) return parseInt(match[1]) - 1;
        return 0;
    }
};
