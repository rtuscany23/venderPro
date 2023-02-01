import { Snacks } from "./Models/Snacks.js"
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  valuesController = new ValuesController();
}

window["app"] = new App();
