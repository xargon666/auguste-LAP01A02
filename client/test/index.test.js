const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

describe("Testing Client-Side index.html...", () => {
  beforeAll(() => {
    document.documentElement.innerHTML = html.toString(); // ???
    console.log("Testing server is operational");
  });

  it("check title has value", () => {
    let docTitle = document.title;
    expect(docTitle).not.toBe("");
  });

  it("Check anchor tags have href attribute", () => {
    aVars = document.querySelectorAll("a");
    let i = 0;
    aVars.forEach((ele) => {
      console.log(i, "- Anchor Tag Text:", ele.textContent);
      expect(ele.href).toBeTruthy();
      i++;
    });
  });
  it("Check anchor tags have a href value", () => {
    aVars = document.querySelectorAll("a");
    let i = 0;
    aVars.forEach((ele) => {
      console.log(i, "- Anchor Tag Text:", ele.textContent);
      expect(ele.href).replace("http://localhost").not.toBe("");
      i++;
    });
  });
}); // END OF DESCRIBE
