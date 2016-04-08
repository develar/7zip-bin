"use strict"

var moduleName = null
if (process.platform === "darwin") {
  moduleName = "7zip-bin-osx"
}

exports.path7za = moduleName == null ? null : require(moduleName).path7za