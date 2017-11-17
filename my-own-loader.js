var fs = require('fs');

module.exports = function(source, map) {
    source = `export interface DummyContent {
      name: string;
      age?: number;
  }
  export class DummyClass {
    printMessage = () => {
        console.log("message");
    }
    setContent(content: DummyContent) {
        console.log("content: ", content);
    }
}`;

  // Uncomment this line to write the emitted TS to disk, so VSCode can pick it up.
  // A better solution might be to write it for dev build, but not prod build.
  // fs.writeFile("./example.api.ts", source);
  this.callback(null, source, map);
  };
