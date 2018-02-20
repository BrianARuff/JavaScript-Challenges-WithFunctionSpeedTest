function truncateString(str, num) {
  if (num <= 3) return str.slice(0, num) + '...';
  
  if (num >= str.length) return str;
  
  return str.slice(0, num-3) + '...';
}

truncateString('hello', 10);