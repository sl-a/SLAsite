const faker = require('faker');
const fs = require('fs');
const contact = fs.createWriteStream("./seeds/contactSeed.csv");
const candidate = fs.createWriteStream("./seeds/candidateSeed.csv");

const generateOneContact = (id) => {
    let entry = `${id}|${faker.name.findName()}|${faker.internet.email()}`
    return entry
}

const generateOneCandidate = (id, year) => {
  let entry = `${id}|${faker.name.findName()}|${faker.date.future().toISOString().split('T')[0]}|https://www.youtube.com/embed/HbL7Toz5YdU|${faker.lorem.paragraph()}`;
  return entry;
}

function streamFunc(max, writer, callback, headerline) {
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
            headerline
          );
        } else {
            x--
        }
        if (x === 0) {
          // last time!
          var str = callback(max - x)
          writer.write(str);
        } else {
          // See if we should continue, or wait.
          // Don't pass the callback, because we're not done yet.
          var str = callback(max - x) + "\n";
          ok = writer.write(str);
        }
      } while (x > 0 && ok);
      if (x > 0) {
        // had to stop early!
        // write some more once it drains
        writer.once("drain", write);
      }
    }
  }
  
let contactHeader = "id|name|email\n";
let candidateHeader = 'id|name|electionDate|adURL|blurb\n';

streamFunc(100, contact, generateOneContact, contactHeader);
streamFunc(20, candidate, generateOneCandidate, candidateHeader);
// console.log(generateOneCandidate(5))