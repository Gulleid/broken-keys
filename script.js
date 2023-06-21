// Good Luck 💪🏾
function brokenKeys(text, expectedoutput) {
  const brokenKeys = [];

  for (let i = 0; i < expectedoutput.length; i++) {
    if (text[i] !== expectedoutput[i] && !brokenKeys.includes(expectedoutput[i])) {
      brokenKeys.push(expectedoutput[i]);
    }
  }

  return brokenKeys;
}

const Text = "gppd  night";
const expectedoutput = "good ";
const result = brokenKeys(Text, expectedoutput);
console.log(result);