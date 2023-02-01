import { appState } from "../AppState.js";
import { SnackService } from "../SnackService.js";


function drawSnacks(){
console.log("do sometin on load")
}

export class SnackController{
  constructor(){
    drawSnacks()
  }
}