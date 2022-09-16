export function choose(choices: Array<string>) {
  let index = Math.floor(choices.length * Math.random());
  return choices[index];
}
