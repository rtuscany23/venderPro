import { Value } from "./Models/Value.js"
import { Snack } from "./Models/Snack.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])
}

 /** @type {import('./Models/Snack').Snack[]} */
inventory = [
  new Snack({
    name: 'squid',
    price: 3.45,
    imageURL: "./assets/img/squid.png"
    }    
  ), 
  new Snack({
    name: 'eel',
    price: 8.43,
    imageURL: "./assets/img/eel.png"
    }    
  ), 
  new Snack({
    name: 'yellow tail',
    price: 7.23,
    imageURL: "./assets/img/yellow-tail.png"
    }    
  ), 
  new Snack({
    name: 'octopus',
    price: 13.45,
    imageURL: "./assets/img/octopus.png"
    }    
  ), 
  new Snack({
    name: 'crab',
    price: 4.55,
    imageURL: "./assets/img/crab.png"
    }    
  ), 
  new Snack({
    name: 'lobster',
    price: 103.45,
    imageURL: "./assets/img/lobster.png"
    }    
  ), 
]

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
