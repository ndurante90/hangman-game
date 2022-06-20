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

  test("getSpecificResourcePath should result an url as 'people/{people_id}, if the random type is people'", () => {
    spy.mockReturnValue("people");
    const url = service.getSpecificResourcePath();
    const lastOccurencyOfSeparator = url.lastIndexOf("/");
    const value = Number(
      url.slice(lastOccurencyOfSeparator + 1, url.length + 1)
    );
    expect(value).toBeLessThanOrEqual(MaximumIdValue["people"]);
    expect(url).toContain("people/");
  });

  test("getSpecificResourcePath should result an url as 'films/{film_id}, if the random type is films'", () => {
    spy.mockReturnValue("films");
    const url = service.getSpecificResourcePath();
    const lastOccurencyOfSeparator = url.lastIndexOf("/");
    const value = Number(
      url.slice(lastOccurencyOfSeparator + 1, url.length + 1)
    );
    expect(value).toBeLessThanOrEqual(MaximumIdValue["films"]);
    expect(url).toContain("films/");
  });
});

test("getResourceTypePath should a random string from apiObjects array", () => {
  const type = service.getResourceTypePath();
  expect(service.apiObjects).toContain(type);
});
