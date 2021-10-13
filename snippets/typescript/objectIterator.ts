function* objEntries<T>(x: Record<string, T>): IterableIterator<[string, T]> {
  for (const k in x) {
    yield [k, x[k]];
  }
}

// usage example:

const someObj = { foo: 1, bar: "value", 5: "number key" };

for (const [k, v] of objEntries(someObj)) {
  console.log(k, v);
}