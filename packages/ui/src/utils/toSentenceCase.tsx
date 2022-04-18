export function sentenceCase(string) {
  return string
    ? string
        .toLowerCase()
        .replace('...', '…')
        .split('.')
        .filter((sentence) => sentence.trim().length)
        .join('. ')
    : '';
}
