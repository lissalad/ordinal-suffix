const ordinalSuffix = require('../index');


test("Test 1-4", () => {
  expect(ordinalSuffix(1)).toBe("1st");
  expect(ordinalSuffix(2)).toBe("2nd");
  expect(ordinalSuffix(3)).toBe("3rd");
  expect(ordinalSuffix(4)).toBe("4th");
})

test("Test 11-13", () => {
  expect(ordinalSuffix(11)).toBe("11th");
  expect(ordinalSuffix(12)).toBe("12th");
  expect(ordinalSuffix(13)).toBe("13th");
})

test("Test 'st'", () => {
  expect(ordinalSuffix(41)).toBe("41st");
  expect(ordinalSuffix(391)).toBe("391st");
  expect(ordinalSuffix(8241)).toBe("8241st");
})

test("Test 'nd'", () => {
  expect(ordinalSuffix(32)).toBe("32nd");
  expect(ordinalSuffix(942)).toBe("942nd");
  expect(ordinalSuffix(1332)).toBe("1332nd");
})

test("Test 'rd'", () => {
  expect(ordinalSuffix(53)).toBe("53rd");
  expect(ordinalSuffix(283)).toBe("283rd");
  expect(ordinalSuffix(8353)).toBe("8353rd");
})

test("Test 'th'", () => {
  expect(ordinalSuffix(8)).toBe("8th");
  expect(ordinalSuffix(235)).toBe("235th");
  expect(ordinalSuffix(8479)).toBe("8479th");

  expect(ordinalSuffix(512)).toBe("512th");
  expect(ordinalSuffix(913)).toBe("913th");
  expect(ordinalSuffix(9211)).toBe("9211th");
})
