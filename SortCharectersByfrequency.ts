function frequencySort(s: string): string {

  const frequency: { [key: string]: number } = {};

  // Step 1: Count frequency
  for (const char of s) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  // Step 2: Store characters in array
  const chars: string[] = [];

  for (const key in frequency) {
    chars.push(key);
  }

  // Step 3: Manual sorting (Descending frequency)
  for (let i = 0; i < chars.length; i++) {

    for (let j = i + 1; j < chars.length; j++) {

      if (frequency[chars[j]] > frequency[chars[i]]) {

        // Swap
        let temp = chars[i];
        chars[i] = chars[j];
        chars[j] = temp;
      }
    }
  }

  // Step 4: Build result
  let result = "";

  for (const char of chars) {

    for (let i = 0; i < frequency[char]; i++) {
      result += char;
    }
  }

  return result;
}


let sorting_charecters = frequencySort('tree');
console.log(sorting_charecters);