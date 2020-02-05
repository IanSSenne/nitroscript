export function nullify(obj) {
  return Object.assign(Object.create(null), obj);
}
