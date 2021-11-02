import saveToLocal from "./saveToLocal";

describe("saveToLocal", () => {
  it("should save data in local storage", () => {
    const spyLocalStorage = jest.spyOn(
      Object.getPrototypeOf(window.localStorage),
      "setItem"
    );
    saveToLocal("user:", "Klammerfisch");

    expect(spyLocalStorage).toHaveBeenCalledTimes(1);
    expect(spyLocalStorage).toHaveBeenCalledWith("user:", '"Klammerfisch"');
  });
});
