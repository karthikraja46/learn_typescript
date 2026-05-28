function firstuniqChar(s: string): number {

  const frequency: { [key: string]: number } = {};

  // Count frequency
  for (const char of s) {
    if (frequency[char]) {
  frequency[char] = frequency[char] + 1;
} else {
  frequency[char] = 1;
}
    // frequency[char] = (frequency[char] || 0) + 1;
  }

  // Find first unique character index
  for (let i = 0; i < s.length; i++) {

    if (frequency[s[i]] === 1) {
      return i;
    }
  }

  return -1;
}

let unique_charecter = firstuniqChar('loveleetcode');
console.log(unique_charecter);
