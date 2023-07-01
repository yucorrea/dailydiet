export function factorySectionList<T>(data: { [key: string]: T }) {
  let keys = Object.keys(data);

  return keys.map((key: any) => ({
    title: key,
    data: data[key]
  }))
}