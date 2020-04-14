import { promises, fstat } from "fs";
const readdir = promises.readdir;
import * as vscode from "vscode";
(async () => {
  const categories = await readdir("/usr/bin");
  console.log(categories);
})();
