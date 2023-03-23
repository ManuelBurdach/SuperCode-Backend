import fs from "fs";

//Directory or File exist
export const existDirectoryOrFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.access(path, fs.constants.F_OK, (err, fd) => {
      if (err) reject("Directory or file does not exist");
      else {
        console.log("Directory or file exist");
        resolve();
      }
    });
  });
};

//Open File + make File
export const openFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.open(path, "a+", (err, fd) => {
      if (err) reject("Open the file failed");
      else {
        console.log("Open file");
        resolve(fd);
      }
    });
  });
};

//Write in File
export const writeInFile = (fd, content) => {
  return new Promise((resolve, reject) => {
    fs.write(fd, content, (err, fd) => {
      if (err) reject("Write in file failed");
      else {
        console.log("Write in file");
        resolve(fd);
      }
    });
  });
};

//Close File
export const closeFile = (fd) => {
  return new Promise((resolve, reject) => {
    fs.close(fd, (err) => {
      if (err) reject("Close the file failed");
      else {
        console.log("Close the file");
        resolve();
      }
    });
  });
};

//Make directory
export const makeDirectory = (path) => {
  return new Promise((resolve, reject) => {
    fs.mkdir(path, { recursive: true }, (err) => {
      if (err) reject("create directory failed");
      else {
        console.log("Directory was created");
        resolve();
      }
    });
  });
};
