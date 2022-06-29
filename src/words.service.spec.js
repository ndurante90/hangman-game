import { MaximumIdValue } from "./constants";
import { WordsService } from "./services/words.service";

let service;

beforeAll(() => {
  service = new WordsService();
});

describe("getSpecificResourcePath", () => {
  let spy;

  beforeAll(() => {
    spy = jest.spyOn(service, "getResourceTypePath");
  });

  afterEach(jest.clearAllMocks);

  test("supposing the random type is people, should return an url as 'people/{people_id}' where people_id is a number between 1 and 84", () => {
    spy.mockReturnValue("people");

    const url = service.getSpecificResourcePath();

    const lastOccurencyOfSlash = url.lastIndexOf("/");
    const value = Number(url.slice(lastOccurencyOfSlash + 1, url.length + 1));

    expect(value).toBeGreaterThanOrEqual(1);
    expect(value).toBeLessThanOrEqual(MaximumIdValue["people"]);
    expect(url).toBe("people/" + value);
  });

  test("supposing the random type is planets, should return an url as 'planets/{planet_id}' where planet_id is a number between 1 and 60", () => {
    spy.mockReturnValue("planets");

    const url = service.getSpecificResourcePath();

    const lastOccurencyOfSlash = url.lastIndexOf("/");
    const value = Number(url.slice(lastOccurencyOfSlash + 1, url.length + 1));

    expect(value).toBeGreaterThanOrEqual(1);
    expect(value).toBeLessThanOrEqual(MaximumIdValue["planets"]);
    expect(url).toBe("planets/" + value);
  });

  test("supposing the random type is films, should return an url as 'films/{film_id}' where film_id is a number between 1 and 6", () => {
    spy.mockReturnValue("films");

    const url = service.getSpecificResourcePath();

    const lastOccurencyOfSlash = url.lastIndexOf("/");
    const value = Number(url.slice(lastOccurencyOfSlash + 1, url.length + 1));

    expect(value).toBeGreaterThanOrEqual(1);
    expect(value).toBeLessThanOrEqual(MaximumIdValue["films"]);
    expect(url).toBe("films/" + value);
  });

  test("supposing the random type is species, should return an url as 'species/{species_id}' where species_id is a number between 1 and 37", () => {
    spy.mockReturnValue("species");

    const url = service.getSpecificResourcePath();

    const lastOccurencyOfSlash = url.lastIndexOf("/");
    const value = Number(url.slice(lastOccurencyOfSlash + 1, url.length + 1));

    expect(value).toBeGreaterThanOrEqual(1);
    expect(value).toBeLessThanOrEqual(MaximumIdValue["species"]);
    expect(url).toBe("species/" + value);
  });

  test("supposing the random type is starships, should return an url as 'starships/{starships_id}' where starships_id is a number between 1 and 36", () => {
    spy.mockReturnValue("starships");

    const url = service.getSpecificResourcePath();

    const lastOccurencyOfSlash = url.lastIndexOf("/");
    const value = Number(url.slice(lastOccurencyOfSlash + 1, url.length + 1));

    expect(value).toBeGreaterThanOrEqual(1);
    expect(value).toBeLessThanOrEqual(MaximumIdValue["starships"]);
    expect(url).toBe("starships/" + value);
  });

  test("supposing the random type is vehicles, should return an url as 'vehicles/{vehicles_id}' where vehicles_id is a number between 1 and 39", () => {
    spy.mockReturnValue("vehicles");

    const url = service.getSpecificResourcePath();

    const lastOccurencyOfSlash = url.lastIndexOf("/");
    const value = Number(url.slice(lastOccurencyOfSlash + 1, url.length + 1));

    expect(value).toBeGreaterThanOrEqual(1);
    expect(value).toBeLessThanOrEqual(MaximumIdValue["vehicles"]);
    expect(url).toBe("vehicles/" + value);
  });
});

test("getResourceTypePath should return a random string from apiObjects array", () => {
  const type = service.getResourceTypePath();
  expect(service.apiObjects).toContain(type);
});

test("getResourceTypeFromUrl should return people from url https://swapi.dev/api/people/1", () => {
  const url = "https://swapi.dev/api/people/1";
  const type = service.getResourceTypeFromUrl(url);
  expect(type).toBe("people");
});

test("getResourceTypeFromUrl should return empty string if url is not correct", () => {
  const url = "https:////wrong url";
  const type = service.getResourceTypeFromUrl(url);
  expect(type).toBe("");
});
