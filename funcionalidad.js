// Funcionalidad del Carrusel
        let currentSlide = 0;
        const slides = document.querySelectorAll('.carousel-slide');
        const indicadores = document.querySelectorAll('.indicador');
        const totalSlides = slides.length;

        function actualizarSlides() {
            slides.forEach((slide, i) => {
                // Remover todas las clases
                slide.classList.remove('scale-100', 'scale-75', 'blur-sm', 'opacity-100', 'opacity-50', 'opacity-0', 'z-20', 'z-10', 'translate-x-0', 'translate-x-full', '-translate-x-full');
                
                if (i === currentSlide) {
                    // Slide activo (centro)
                    slide.classList.add('scale-100', 'opacity-100', 'z-20', 'translate-x-0');
                } else if (i === (currentSlide + 1) % totalSlides) {
                    // Slide siguiente (derecha)
                    slide.classList.add('scale-75', 'blur-sm', 'opacity-50', 'z-10', 'translate-x-full');
                } else if (i === (currentSlide - 1 + totalSlides) % totalSlides) {
                    // Slide anterior (izquierda)
                    slide.classList.add('scale-75', 'blur-sm', 'opacity-50', 'z-10', '-translate-x-full');
                } else {
                    // Slides ocultos
                    slide.classList.add('opacity-0', 'scale-75');
                }
            });
            
            // Actualizar indicadores
            indicadores.forEach((indicador, i) => {
                if (i === currentSlide) {
                    indicador.classList.remove('bg-white/50');
                    indicador.classList.add('bg-white');
                } else {
                    indicador.classList.remove('bg-white');
                    indicador.classList.add('bg-white/50');
                }
            });
        }

        function despuesSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            actualizarSlides();
        }

        function anteriorSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            actualizarSlides();
        }

        document.getElementById('despues').addEventListener('click', despuesSlide);
        document.getElementById('anterior').addEventListener('click', anteriorSlide);

        // Click en indicadores
        indicadores.forEach((indicador, i) => {
            indicador.addEventListener('click', () => {
                currentSlide = i;
                actualizarSlides();
            });
        });

        // Inicializar
        actualizarSlides();

        // Auto-play (opcional)
        setInterval(despuesSlide, 5000);

        // Funcionalidad de Tabs
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetTab = button.getAttribute('data-tab');
                
                tabButtons.forEach(btn => {
                    btn.classList.remove('bg-amber-600', 'text-white');
                    btn.classList.add('text-gray-600');
                });
                
                button.classList.add('bg-amber-600', 'text-white');
                button.classList.remove('text-gray-600');
                
                tabContents.forEach(content => {
                    content.classList.add('hidden');
                });
                
                document.getElementById(targetTab).classList.remove('hidden');
            });
        });

        // Smooth scroll para el botón "Ver Programa"
        document.querySelector('a[href="#programa"]').addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('programa').scrollIntoView({ behavior: 'smooth' });
        });