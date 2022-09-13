export function choose(choices: Array<string>) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}
