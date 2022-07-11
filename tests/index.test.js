const index = require('../src/index');

test("Test 1-4", () => {
  expect(index.ordinalSuffix(1)).toBe("1st");
  expect(index.ordinalSuffix(2)).toBe("2nd");
  expect(index.ordinalSuffix(3)).toBe("3rd");
  expect(index.ordinalSuffix(4)).toBe("4th");
})

test("Test 11-13", () => {
  expect(index.ordinalSuffix(11)).toBe("11th");
  expect(index.ordinalSuffix(12)).toBe("12th");
  expect(index.ordinalSuffix(13)).toBe("13th");
})

test("Test 'st'", () => {
  expect(index.ordinalSuffix(41)).toBe("41st");
  expect(index.ordinalSuffix(391)).toBe("391st");
  expect(index.ordinalSuffix(8241)).toBe("8241st");
})

test("Test 'nd'", () => {
  expect(index.ordinalSuffix(32)).toBe("32nd");
  expect(index.ordinalSuffix(942)).toBe("942nd");
  expect(index.ordinalSuffix(1332)).toBe("1332nd");
})

test("Test 'rd'", () => {
  expect(index.ordinalSuffix(53)).toBe("53rd");
  expect(index.ordinalSuffix(283)).toBe("283rd");
  expect(index.ordinalSuffix(8353)).toBe("8353rd");
})

test("Test 'th'", () => {
  expect(index.ordinalSuffix(8)).toBe("8th");
  expect(index.ordinalSuffix(235)).toBe("235th");
  expect(index.ordinalSuffix(8479)).toBe("8479th");

  expect(index.ordinalSuffix(512)).toBe("512th");
  expect(index.ordinalSuffix(913)).toBe("913th");
  expect(index.ordinalSuffix(9211)).toBe("9211th");
})