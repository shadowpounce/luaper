export const cutText = (text, maxChars) =>
  text.split('').length > maxChars ? `${text.slice(0, maxChars + 1)}...` : text
