import { Snack } from "./Models/Snack.js"
import { ValuesController } from "./Controllers/ValuesController.js";
import { SnackController } from "./Controllers/SnacksController.js";

class App {
  valuesController = new ValuesController();
  snackController = new SnackController();
}

window["app"] = new App();
