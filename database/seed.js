const faker = require('faker');
const fs = require('fs');
const file = fs.createWriteStream("./seeds/contactSeed.csv");

const generateOneEntry = (id) => {
    let entry = `${id}|${faker.name.findName()}|${faker.internet.email()}|${!Math.round(Math.random())}`
    return entry
}

function streamFunc(max, writer, data, encoding, callback) {
    let x = max;
    write();
  
    function write() {
      let ok = true;
      do {
        if (x % 100 === 0) {
            console.log(x + ' entries to go')
        }
        if (x === max) {
          x--;
          writer.write(
            "id|name|email|allowContact\n"
          );
        } else {
            x--
        }
        if (x === 0) {
          // last time!
          var str = generateOneEntry(max - x)
          writer.write(str, encoding, callback);
        } else {
          // See if we should continue, or wait.
          // Don't pass the callback, because we're not done yet.
          var str = generateOneEntry(max - x) + "\n";
          ok = writer.write(str, encoding);
        }
      } while (x > 0 && ok);
      if (x > 0) {
        // had to stop early!
        // write some more once it drains
        writer.once("drain", write);
      }
    }
  }
  
streamFunc(1e4, file);
// console.log(generateOneEntry(1))