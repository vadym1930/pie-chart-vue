import Helpers from "@/helpers/";

describe("Helpers", () => {
  const dummyData = [
    { color: "#00A37A", value: 40 },
    { color: "#365164", value: 30 },
    { color: "#a54f93", value: 30 }
  ];

  it("returns proper styles", () => {
    const data = [...dummyData];

    const styles = Helpers.generateStyle(data);

    expect(styles).toEqual("#00A37A 0 40%,#365164 0 70%,#a54f93 0 100%");
  });

  it("returns empty string in case of passing empty array", () => {
    const data = [];

    const styles = Helpers.generateStyle(data);

    expect(styles).toEqual("");
  });

  it("returns empty string in case of undefined", () => {
    let data;

    const styles = Helpers.generateStyle(data);

    expect(styles).toEqual("");
  });

  it("returns empty string in case of non-iterable data", () => {
    const data = 0;

    const styles = Helpers.generateStyle(data);

    expect(styles).toEqual("");
  });

  it("returns empty string in case of null", () => {
    const data = 0;

    const styles = Helpers.generateStyle(data);

    expect(styles).toEqual("");
  });
});
