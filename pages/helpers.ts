import * as fs from "fs";
import {cwd} from "process";


export function getImageUriTransformer(path: string): (uri: string) => string {
  return (uri: string) => {
    if (uri.startsWith("http://") || uri.startsWith("https://")) {
      return uri;
    } else {
      return `${path}/${uri}`;
    }
  }
}

export const readMarkdown = (path: string): string => {
  const completePath = `${cwd()}/${path}`;
  try {
    return fs.readFileSync(completePath, "utf-8").toString();
  } catch(err) {
    console.error("Unable to get: ", completePath);
    console.error(err);
    return "";
  }
}

