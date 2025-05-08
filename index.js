"use strict"

const path = require("path")

function getPath(linux7zzs = false) {
  if (process.env.USE_SYSTEM_7Z === "true") {
    return "7za"
  }

  if (process.platform === "darwin") {
    return path.join(__dirname, "mac", process.arch, "7zz")
  }
  else if (process.platform === "win32") {
    return path.join(__dirname, "win", process.arch, "7z.exe")
  }
  else {
    return path.join(__dirname, "linux", process.arch, (linux7zzs ? "7zzs" : "7zz"))
  }
}

exports.path7z = getPath()
exports.path7zzs = getPath(true)
exports.path7x = path.join(__dirname, "7x.sh")