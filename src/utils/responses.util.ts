import * as fs from 'fs';

export const getResponses = () => {
  const result = fs.readFileSync("./responses.txt", { encoding: "utf8" });
  console.log("result", result);
};
