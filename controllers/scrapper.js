// // const { spawn } = require("child_process");
// // var PythonShell = require("python-shell");
// let { PythonShell } = require("python-shell");

// exports.scrap = (req, res) => {
//   var myPythonScriptPath =
//     "./controllers/scrapping/scholarship_news/hec_eduvision.py";
//   var options = {
//     mode: "text"
//     // args: ['my First Argument', 'My Second Argument', '--option=123']
//   };

//   PythonShell.run(myPythonScriptPath, options, function(err, results) {
//     if (err) throw err;
//     // results is an array consisting of messages collected during execution
//     console.log("results: %j", results);
//   });

//   // var dataToSend;
//   // // spawn new child process to call the python script
//   // const python = spawn("python", ["./controllers/scrapping/aa.py"]);
//   // // collect data from script
//   // python.stdout.on("data", function(data) {
//   //   console.log("Pipe data from python script ...");
//   //   dataToSend = data.toString();
//   // });
//   // // in close event we are sure that stream from child process is closed
//   // python.on("close", code => {
//   //   console.log(`child process close all stdio with code ${code}`);
//   //   // send data to browser
//   //   res.send(dataToSend);
//   // });
//   // Use child_process.spawn method from
//   // child_process module and assign it
//   // to variable spawn
//   // var spawn = require("child_process").spawn;

//   // // Parameters passed in spawn -
//   // // 1. type_of_script
//   // // 2. list containing Path of the script
//   // //    and arguments for the script

//   // // E.g : http://localhost:3000/name?firstname=Mike&lastname=Will
//   // // so, first name = Mike and last name = Will
//   // var process = spawn("python", [
//   // "./controllers/scrapping/scholarship_news/hec_eduvision.py"
//   // ]);
//   // console.log("scrapping");
//   // // Takes stdout data from script which executed
//   // with arguments and send this data to res object
//   // res.send("executed");
// };
