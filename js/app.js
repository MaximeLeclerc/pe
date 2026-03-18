/* App initialization - keyboard/touch nav, sidebar, URL routing */
(function() {
    var engine = window.SlideEngine;

    // Wait for DOM
    document.addEventListener('DOMContentLoaded', function() {
        // Build sidebar
        engine.buildSidebar();

        // Render first slide or from hash
        var startIdx = engine.getIndexFromHash();
        engine.render(startIdx);

        // Nav buttons
        document.getElementById('prev-btn').addEventListener('click', function() { engine.prev(); });
        document.getElementById('next-btn').addEventListener('click', function() { engine.next(); });

        // Sidebar
        document.getElementById('sidebar-toggle').addEventListener('click', function() { engine.toggleSidebar(); });
        document.getElementById('sidebar-close').addEventListener('click', function() { engine.closeSidebar(); });
        document.getElementById('sidebar-overlay').addEventListener('click', function() { engine.closeSidebar(); });

        // Keyboard nav
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); engine.next(); }
            else if (e.key === 'ArrowLeft') { e.preventDefault(); engine.prev(); }
            else if (e.key === 'Escape') { engine.closeSidebar(); }
            else if (e.key === 'Home') { e.preventDefault(); engine.goTo(0); }
            else if (e.key === 'End') { e.preventDefault(); engine.goTo(ALL_SLIDES.length - 1); }
        });

        // Touch swipe
        var touchStartX = 0;
        var touchStartY = 0;
        var container = document.getElementById('slide-container');

        container.addEventListener('touchstart', function(e) {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        }, { passive: true });

        container.addEventListener('touchend', function(e) {
            var dx = e.changedTouches[0].clientX - touchStartX;
            var dy = e.changedTouches[0].clientY - touchStartY;
            if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
                if (dx < 0) engine.next();
                else engine.prev();
            }
        }, { passive: true });

        // Hash change
        window.addEventListener('hashchange', function() {
            var idx = engine.getIndexFromHash();
            if (idx !== engine.currentIndex) engine.render(idx);
        });
    });
})();
