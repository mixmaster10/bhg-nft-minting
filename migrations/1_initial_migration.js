require("dotenv").config()
const SadPugs = artifacts.require("SadPugs")
const baseURI = process.env.BASE_URI

module.exports = function (deployer) {
  deployer.deploy(SadPugs, baseURI)
}
