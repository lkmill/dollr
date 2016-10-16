export default function without(arr, ...args) {
  if (!Array.isArray(arr)) {
    arr = Array.from(arr);
  }

  return arr.reduce((result, val) => {
    if (!args.includes(val)) {
      result.push(val);
    }

    return result;
  }, []);
}
