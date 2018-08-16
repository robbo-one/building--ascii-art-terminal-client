const readline = require('readline')

const STORE = {}

// Set the `currentItem` property to track which item we're viewing/commenting
// on. This will hold a number which corresponds to a property key on the store
// object.
function setCurrentItem (itemKey, store = STORE) {
  store.currentItem = itemKey
}

// Keep one copy of the readLine interface so we don't have to keep creating
// and closing it.
function getIOInterface (readLineInterface, store = STORE) {
  if (!store.io) {
    store.io = readline.createInterface({
      input: process.stdin,
      output: process.stdout,

      // This stops readline from echoing the character entered, keeping our
      // display a bit cleaner
      terminal: false
    })
  }
  return store.io
}

// Tidy up the interface
function closeIOInterface (store = STORE) {
  store.io.close()
}

// Store a file list as an object (effectively, a _hashmap_)
function setList (files, store = STORE) {
  files.forEach((f, i) => { store[i] = f })
}

// Get a single filename by index
function getItem (index, store = STORE) {
  if (!store.hasOwnProperty(index)) {
    throw new Error("Sorry, that option doesn't exist.")
  }

  return { [index]: store[index] }
}

// Get a formatted list of files with associated keys
function getList (store = STORE) {
  return Object.keys(store).map(k => `${k}. ${store[k]}`)
}

module.exports = {
  closeIOInterface,
  getIOInterface,
  getItem,
  getList,
  setCurrentItem,
  setList
}
