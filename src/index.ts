import replacableMap from './replacableMap'
export default function normalizeSpecialCharacters (text: string): string {
  const replacableWords: {[key: string] : any} = {}
  for (let i: number = 0; i < replacableMap.length; i++) {
    const letters = replacableMap[i].letters
    for (let j: number = 0; j < letters.length; j++) {
      replacableWords[letters[j]] = replacableMap[i].base
    }
  }

  function replace (input: string): string {
    if (input) {
      return input.replace(/[^\u0000-\u007E]/g, function (a) {
        return replacableWords[a] || a
      })
    }

    return input
  }

  return replace(text)
}
