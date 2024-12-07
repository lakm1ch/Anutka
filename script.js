// GSAP анимация для плавного появления текста и фото
window.onload = () => {
    gsap.to(".title", { opacity: 1, y: 0, duration: 2 });
    gsap.to(".romantic-text", { opacity: 1, y: 0, duration: 2, delay: 1 });
    gsap.to(".photo", { scale: 1, duration: 1.5, delay: 1.5 });
};
