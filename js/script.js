const links = document.querySelectorAll('.a-box>a');
const texts = document.querySelectorAll('.text');

const appearNav = (event) => {
    // Znajdź odpowiedni indeks elementu linka w kolekcji links
    const index = [...links].indexOf(event.currentTarget);

    // Zastosuj toggle klasy appear do odpowiedniego elementu tekstowego
    texts[index].classList.toggle('appear');
};

// Iteracja przez każdy link i dodanie nasłuchiwacza zdarzeń
links.forEach(link => {
    link.addEventListener('mouseenter', appearNav);
    link.addEventListener('mouseleave', appearNav);
});
