const { Buffer } = require("buffer");

// const buff = Buffer.alloc(4);
// console.log(buff);
// console.log(buff[1]);

// const buff = Buffer.from("Binita Dutta");
// console.log(buff);
// console.log(buff.toString());

// const buff = Buffer.allocUnsafe(100);
// console.log(buff);

// const buff = Buffer.alloc(10);
// buff.write("hello");
// console.log(buff.toString());

// const buff = Buffer.from("Hello from Binita");
// console.log(buff.toString());
// console.log(buff.toString("utf-8", 0, 5));

const buff = Buffer.from("Chai");
buff[0] = 0x4a;
console.log(buff.toString());
