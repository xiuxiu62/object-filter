export function trySet<T, A>(obj: T, tag: string, attr: A | null): void {
  if (attr) {
	obj[tag] = attr;
  }
}

export function shallowFilter(obj: Object, predicates: Array<any>): Object {
  Object.keys(obj).forEach(
	(k) =>
	  predicates.reduce((acc, p) => acc || obj[k] === p, false) && delete obj[k]
  );
  return obj;
}

export function deepFilter(obj: Object, predicates: Array<any>): Object {
  // objectEntries(obj).forEach(
  Object.entries(obj).forEach(
	([key, val]) =>
	  (val && typeof val === "object" && deepFilter(val, predicates)) ||
	  (predicates.reduce((acc, p) => acc || obj[key] === p, false) &&
		delete obj[key])
  );
  return obj;
}

export function filterEmpty(props: any): any {
  return deepFilter(props, ["", null, undefined]);
}
