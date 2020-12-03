function wrapShift(char, shift) {
  let charCode = 0
  if (char === char.toLowerCase()) {
    charCode = 96 + (char.charCodeAt() + shift - 122)
  } else {
    charCode = 64 + (char.charCodeAt() + shift - 90)
  }
  return String.fromCharCode(charCode)
}

function shiftChar(char, shift) {
  let shiftedUni = char.charCodeAt() + shift
  let shiftedChar = String.fromCharCode(char.charCodeAt() + shift)
  if (
    (shiftedUni <= 122 && shiftedUni >= 97 && char === char.toLowerCase()) ||
    (shiftedUni <= 90 && shiftedUni >= 65 && char === char.toUpperCase())
  ) {
    return shiftedChar
  } else {
    return wrapShift(char, shift)
  }
}

export default function caesar(string, shift) {
  if (shift < 0) {
    return caesar(string, shift + 26)
  }
  let shiftedStr = ''
  shift > 26 || shift < 0 ? (shift %= 26) : shift
  for (let char of string) {
    ;/[a-zA-Z]/i.test(char) ? (shiftedStr += shiftChar(char, shift)) : (shiftedStr += char)
  }

  return shiftedStr
}
