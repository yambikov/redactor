document.addEventListener('DOMContentLoaded', () => {
  const textArea = document.getElementById('textArea');
  const wordCount = document.getElementById('wordCount');
  const charCount = document.getElementById('charCount');
  const desiredCount = document.getElementById('desiredCount');
  const countdown = document.getElementById('countdown');

  const updateCounts = () => {
      const text = textArea.value;
      charCount.textContent = text.length;
      wordCount.textContent = text.split(/\s+/).filter(Boolean).length;

      const diff = text.length - desiredCount.value;
      if (diff < 0) {
          countdown.textContent = `Нужно добавить: ${Math.abs(diff)} символов`;
      } else {
          countdown.textContent = `Лишние символы: ${diff}`;
      }
  };

  textArea.addEventListener('input', updateCounts);
  desiredCount.addEventListener('input', updateCounts);

  // Инициализация при загрузке
  updateCounts();
});
