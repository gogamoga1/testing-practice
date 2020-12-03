export default function reverseString(string) {
    let reverseString = ''
    for (let char of string) {
        reverseString = char + reverseString
    }

    return reverseString
  }
