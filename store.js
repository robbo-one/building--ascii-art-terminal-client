const readline = require('readline')

const STORE = { items: {} }

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

// Store a file buffer after it's read
function setBuffer (buf, store = STORE) {
  store.buf = buf
}

// Get the buffer for display
function getBuffer (store = STORE) {
  return store.buf
}

// Store a file list as an object (effectively, a _hashmap_)
function setList (files, store = STORE) {
  // Make sure we don't have any old items hanging around
  store.items = {}

  // Each file becomes a property on store.items
  files.forEach((f, i) => { store.items[i] = f })
}

// Get a single filename by index
function getCurrentItem (store = STORE) {
  return store.items[store.currentItem]
}

// Get a formatted list of files with associated keys
function getList (store = STORE) {
  return Object.keys(store.items).map(k => `${k}. ${store.items[k]}`)
}

module.exports = {
  closeIOInterface,
  getBuffer,
  getCurrentItem,
  getIOInterface,
  getList,
  setBuffer,
  setCurrentItem,
  setList
}
