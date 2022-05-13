/**
* @jest-environment jsdom
*/

const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

describe("Testing Client-Side index.html...", () => {
  beforeAll(() => {
    document.documentElement.innerHTML = html.toString();
    console.log("Testing server is operational");
  });

  it("check title has value", () => {
    let docTitle = document.title;
    expect(docTitle).not.toBe("");
  });
  
}); // END OF DESCRIBE
