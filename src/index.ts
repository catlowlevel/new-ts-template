import ora from "ora";
import fetch from "node-fetch"
const spinner = ora("Fetching Api").start();
fetch("https://jsonplaceholder.typicode.com/users").then(res => {
   spinner.succeed("Data Fetched!");
})
