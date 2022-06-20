import { Constants } from "adm-zip/util";
import { MaximumIdValue } from "../constants";

export class WordsService {
  baseUrl;
  apiObjects;

  constructor() {
    this.baseUrl = "https://swapi.dev/api/";
    this.apiObjects = [
      "people",
      "films",
      "planets",
      "species",
      "starships",
      "vehicles",
    ];
  }

  getRandomWord() {
    let objectPath = getSpecificResourcePath();
    fetch(this.baseUrl);
  }

  getSpecificResourcePath() {
    let resourceType = this.getResourceTypePath();
    let resourcePath =
      resourceType +
      "/" +
      Math.floor(Math.random() * MaximumIdValue[resourceType]);

    return resourcePath;
  }

  /**
   * Returns a random type from apiObjects array
   * @returns {string} - a specific resource type
   */
  getResourceTypePath() {
    let selectedType = Math.floor(Math.random() * this.apiObjects.length);
    return this.apiObjects[selectedType];
  }
}
