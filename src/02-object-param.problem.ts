import { expect, it } from "vitest";

type numObject = {
  first: number,
  second: number
}

export const addTwoNumbers = (params: { first: number, second: number }) => {
  return params.first + params.second;
};

type shit_face = string

let screwface: shit_face = "Salamander Capo"

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    }),
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    }),
  ).toEqual(30);
});
