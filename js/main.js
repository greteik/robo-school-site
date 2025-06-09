document.addEventListener('DOMContentLoaded', function() {
            const infoIcon = document.querySelector('.info-icon');
            const modalOverlay = document.getElementById('modalOverlay');
            const modalClose = document.getElementById('modalClose');

            infoIcon.addEventListener('click', function() {
                modalOverlay.classList.add('active');
                document.body.style.overflow = 'hidden'; 
            });

            modalClose.addEventListener('click', function() {
                modalOverlay.classList.remove('active');
                document.body.style.overflow = ''; 
            });

            modalOverlay.addEventListener('click', function(e) {
                if (e.target === modalOverlay) {
                    modalOverlay.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });

            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
                    modalOverlay.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });


/* menu */

 document.addEventListener('DOMContentLoaded', function() {
            const burger = document.getElementById('burger');
            const menu = document.getElementById('menu');
            const overlay = document.getElementById('overlay');
            
            burger.addEventListener('click', function() {
                this.classList.toggle('active');
                menu.classList.toggle('active');
                overlay.classList.toggle('active');
                document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
            });
            
            overlay.addEventListener('click', function() {
                burger.classList.remove('active');
                menu.classList.remove('active');
                this.classList.remove('active');
                document.body.style.overflow = '';
            });
        });