export default function normalize(letter, numPlacement, encodedText) {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabets = alpha.map((x) => String.fromCharCode(x));
  const aIndex = alphabets.findIndex((it) => new RegExp(it, "gi").test(letter));
  const aRight = [].concat(alphabets).splice(aIndex);
  const aLeft = [].concat(alphabets).slice(0, aIndex);
  const a = aRight.concat(aLeft);
  const bIndex = numPlacement - 1 >= 0 ? numPlacement - 1 : 0;
  const bRight = [].concat(alphabets).splice(bIndex);
  const bLeft = [].concat(alphabets).slice(0, bIndex);
  const b = bRight.concat(bLeft);
  encodedText = encodedText.split("");
  let decodedText = "";
  encodedText.forEach((item) => {
    const idx = a.findIndex((val) => new RegExp(val, "gi").test(item));
    decodedText += b[idx] || " ";
  });
  return decodedText;
}
