export const truncateText = (text: string, maxLength: number = 40) => {
  return text.length > maxLength
    ? `${text.substring(0, maxLength - 1)}…`
    : text;
};
