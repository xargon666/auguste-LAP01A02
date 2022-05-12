/**
 * @jest-environment jsdom
 */
 const fs = require("fs");
 const path = require("path");
 const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");


 describe("START TESTING INDEX.HTML", () => {
    beforeAll(() => {
        document.documentElement.innerHTML = html.toString(); 
        console.log("Testing engaged");
      });

      test("Check anchor tags have href attribute", () => {
        aVars = document.querySelectorAll("a");
        let i = 0
        aVars.forEach((ele) => {
          console.log(i,"- Anchor Tag Text:",ele.textContent);
          expect(ele.href).toBeTruthy();
            i++;
        });
    });
      // *** Anchor Code Block ***
      class Anchor {
        constructor(id,href,hrefTarget){
            this.id = id,
            this.href = href,
            this.hrefTarget = hrefTarget,
            this.hrefExpected = true,
            this.hrefTargetExpected = true
        }
    }
    
    function allAnchors(){
        let nodeList = document.querySelectorAll('a')
        console.log(nodeList)
        let objectArray = []
        i = 0
        nodeList.forEach(function(node) {
            objectArray.push(new Anchor(i,node.hasAttribute("href"),node.href))
            i++
        })
        return objectArray
    }
    console.log(allAnchors())
    describe("START TESTING ALL ANCHORS", () => {
        // const myAnchorArray = allAnchors()
        test("myAnchorTest",()=>{
            expect(document.querySelectorAll('a')).toBe("")
        })
    })
 })
