export const cleanText = (text) => {
  if (!text) return ''; // Если `text` === null или undefined, вернем пустую строку
  return text.replace(/<[^>]*>/g, '').trim();
};
