/**
 * @license http://creativecommons.org/licenses/by-sa/4.0/ Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
 * @author  Mustapha Mekhatri
 * @version 1.0.0
 */

// JSLint options:
/*global Highcharts, window*/

(function (H) {

Highcharts.SVGRenderer.prototype.symbols.hexagon = function(x, y, w, h) {
  return [
    'M', x, y + h / 2,
    'L', x, y + h / 2 + h / 4,
    x + w / 2, y + h,
    x + w, y + h / 2 + h / 4,
    x + w, y + h / 2,
    x + w, y + h / 4,
    x + w / 2, y,
    x, y + h / 4,
    x, y + h / 2

  ];
}; 
}(Highcharts));
