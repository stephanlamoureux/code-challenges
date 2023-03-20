/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
  const entities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  };
  // () are used for grouping regex expressions.
  // [] creates a matching list that will match on any one of the characters in the list.
  // g means global, and causes the replace call to replace all matches, not just the first one.
  // match is a func that takes the matched regex char and replaces it's value with it's corresponding object key.
  return str.replace(/([&<>\"'])/g, match => entities[match]);
}

console.log(convertHTML('Dolce & Gabbana'))