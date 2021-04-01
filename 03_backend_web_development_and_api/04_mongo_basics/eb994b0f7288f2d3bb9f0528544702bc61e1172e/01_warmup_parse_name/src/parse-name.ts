type Person = {
  firstName: string;
  lastName: string;
};

export function parseName(name: string): Person {
  const tab = name.split(" ");
  return { firstName: tab[0], lastName: tab[1] };
}
