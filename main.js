function scrollToBottom() {
  // Прокручиваем страницу вниз
  window.scrollTo(0, document.body.scrollHeight);
}

// Запускаем функцию прокрутки после 5 секунд (5000 миллисекунд)
setTimeout(scrollToBottom, 4000);

/*
PLD
window.addEventListener(
  "DOMContentLoaded",
  () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }
);
*/
