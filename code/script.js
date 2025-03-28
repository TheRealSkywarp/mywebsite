function changeBackground() {
    const colors = [
        'linear-gradient(135deg, #6e7bff, #a8b9ff)', 
        'linear-gradient(135deg, #ff7e5f, #feb47b)', 
        'linear-gradient(135deg, #6a11cb, #2575fc)',
        'linear-gradient(135deg, #ff9a9e, #fad0c4)'
    ];
    const currentBackground = document.body.style.background;
    let newBackground = currentBackground;

    // Choose a different color
    do {
        newBackground = colors[Math.floor(Math.random() * colors.length)];
    } while (newBackground === currentBackground);

    document.body.style.background = newBackground;
}