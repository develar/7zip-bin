if (process.platform !== "win32") {
  const chmod = require("fs").chmodSync

  chmod(__dirname + "/" + "compress.sh", "755")
  chmod(__dirname + "/" + "7x.sh", "755")
}