export function appendPrefix(prefix: string, str: string) {
  const arr = str.split(" ");
  const newArr = arr.map((e) => prefix + ":" + e);
  const result = newArr.join(" ");
  return result;
}
