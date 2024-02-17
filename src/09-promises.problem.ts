interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}
// Solution One
export const fetchLukeSkywalker = async (): Promise<LukeSkywalker> => {
  const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
    return res.json();
  });

  return data;
};

// Solution Two
// export const fetchLukeSkywalker = async () => {
//   const data: LukeSkywalker = await fetch("https://swapi.dev/api/people/1").then((res) => {
//     return res.json();
//   });

//   return data;
// };


// Solution Three
// export const fetchLukeSkywalker = async () => {
//   const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
//     return res.json();
//   });
  
//   // Type casting
//   return data as LukeSkywalker;
// };
