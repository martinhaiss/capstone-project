import loadFromLocal from "./loadFromLocal";

describe("loadFromLocal", () => {
  it("should load data from local storage", () => {
    jest
      .spyOn(Object.getPrototypeOf(window.localStorage), "getItem")
      .mockImplementation(() => '"Klammerfisch"');

    const local = loadFromLocal();

    expect(local).toEqual("Klammerfisch");
  });
});
