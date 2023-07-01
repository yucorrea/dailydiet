export function groupBy<T>(arg: Array<any>, property: string): { [key: string]: T } {
  return arg.reduce((acc, obj) => {
    let key = obj[property];
    if (acc[key] === undefined) {
      acc[key] = [];
    }

    acc[key].push(obj);

    return acc;
  }, {});
}