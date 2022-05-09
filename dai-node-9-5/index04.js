import { fs } from "fs";
import  "./src/modules/testito.txt";


fs.readFile('./src/modules/testito.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });