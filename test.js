const colorConvert = require('color-convert');

// Define ANSI color codes
const Reset = "\x1b[0m";
const FgHex = (hex) => `\x1b[38;2;${hex[0]};${hex[1]};${hex[2]}m`;

// Convert RGB to HEX
const rgbColor = [140, 200, 100]; // Example RGB color
const hexColor = colorConvert.rgb.hex(rgbColor);

// Log the result in the corresponding color
console.log(FgHex(rgbColor) + `This text is displayed in RGB(${rgbColor.join(',')}) converted to HEX(#${hexColor}).` + Reset);
