type MyObject = {
  objectType: string;
  quantity: number;
  description: string;
  storedIn: string;
};

export function findMyMaps(objects: MyObject[]): MyObject[] {
  const objectMap = objects.filter((map) => {
    return map.objectType === "map";
  });
  return objectMap;
}
