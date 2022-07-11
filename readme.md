# Ordinal Suffix
format a number with its ordinal suffix

## Installation
`npm i lissa-ordinal-suffix`

## Usage
# ordinalSuffix()
takes integer and returns string with its suffix  
("st", "nd", "rd", or "th")

examples:  

```ts
 ordinalSuffix(1);  
  // returns "1st"
```

```ts
 ordinalSuffix(8);  
  // returns "8th"
```

```ts
 ordinalSuffix(12);  
  // returns "12th"
```

```ts
 ordinalSuffix(53);  
  // returns "53rd"
```

```ts
 ordinalSuffix(411);  
  // returns "411th"
```

```ts
 ordinalSuffix(421);  
  // returns "421st"
```