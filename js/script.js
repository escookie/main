let currentIndex = 0;

document.getElementById('prevButton').addEventListener('click', () => {
    moveSlider(-1);
});

document.getElementById('nextButton').addEventListener('click', () => {
    moveSlider(1);
});

function moveSlider(direction) {
    const slider = document.querySelector('.content2');
    const totalItems = slider.children.length;
    const itemsPerView = 3;

    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > totalItems - itemsPerView) {
        currentIndex = totalItems - itemsPerView;
    }

    const offset = currentIndex * (100 / itemsPerView);
    slider.style.transform = `translateX(-${offset}%)`;

    document.getElementById('prevButton').disabled = currentIndex === 0;
    document.getElementById('nextButton').disabled = currentIndex === totalItems - itemsPerView;
}

// 초기 상태 버튼 설정
moveSlider(0);