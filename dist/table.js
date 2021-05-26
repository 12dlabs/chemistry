"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = exports.getElement = void 0;
var element_1 = require("./element");
var table = [];
var others = [];
function register(element) {
    if (!element || !(element instanceof element_1.Element) || element.number < 1)
        return;
    if (element.number <= table.length) {
        table[element.number - 1] = element;
        return;
    }
    var i = others.findIndex(function (ele) { return ele.number === element.number; });
    if (i < 0)
        others.push(element);
    else
        others[i] = element;
}
/**
 * Gets a specific chemical element.
 * @param element The element symbol or atomic number.
 * @returns The chemical element.
 */
function getElement(element) {
    if (!element) {
        return undefined;
    }
    if (typeof element === "number") {
        element = Math.round(element);
        if (element < 1)
            return undefined;
        if (element <= table.length)
            return table[element - 1];
        var r = others.find(function (ele) { return ele.number === element; });
        if (r)
            return r;
        if (element > Number.MAX_SAFE_INTEGER)
            return undefined;
        r = new element_1.Element(element, null, null);
        register(r);
        return r;
    }
    if (typeof element == "string") {
        return table.find(function (ele) { return ele.symbol === element; });
    }
    return undefined;
}
exports.getElement = getElement;
/**
 * The periodic table.
 */
var PeriodicTable = /** @class */ (function () {
    function PeriodicTable() {
    }
    /**
     * Gets a specific chemical element.
     * @param element The element symbol or atomic number.
     * @returns The chemical element.
     */
    PeriodicTable.prototype.get = function (element) {
        return getElement(element);
    };
    /**
     * Tests if a chemical element is registered.
     * @param element The element symbol or atomic number.
     */
    PeriodicTable.prototype.exist = function (element) {
        if (!element)
            return false;
        if (element instanceof element_1.Element)
            return table.findIndex(function (ele) { return ele === element; }) >= 0
                || others.findIndex(function (ele) { return ele === element; }) >= 0;
        if (typeof element === "number")
            return table.findIndex(function (ele) { return ele && ele.number === element; }) >= 0
                || others.findIndex(function (ele) { return ele && ele.number === element; }) >= 0;
        if (typeof element === "string")
            return table.findIndex(function (ele) { return ele && ele.symbol === element; }) >= 0
                || others.findIndex(function (ele) { return ele && ele.symbol === element; }) >= 0;
        return false;
    };
    /**
     * Returns the elements of the periodic table that meet the condition specified in a callback function.
     * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the periodic table.
     * @param thisArg An optional object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
     */
    PeriodicTable.prototype.filter = function (predicate, thisArg) {
        return __spreadArray(__spreadArray([], table), others).filter(predicate, thisArg);
    };
    /**
     * Returns the value of the first element in the periodic table where predicate is true, and undefined
     * otherwise.
     * @param predicate find calls predicate once for each element of the periodic table, in ascending
     * order, until it finds one where predicate returns true. If such an element is found, find
     * immediately returns that element value. Otherwise, find returns undefined.
     * @param thisArg If provided, it will be used as the this value for each invocation of
     * predicate. If it is not provided, undefined is used instead.
     */
    PeriodicTable.prototype.find = function (predicate, thisArg) {
        return __spreadArray(__spreadArray([], table), others).find(predicate, thisArg);
    };
    /**
     * Registers an element.
     * @param element The element to register.
     */
    PeriodicTable.prototype.reg = function (element) {
        register(element);
    };
    Object.defineProperty(PeriodicTable.prototype, "H", {
        /**
         * Gets Hydrogen (Z = 1).
         */
        get: function () {
            return this.get(1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "He", {
        /**
         * Gets Helium (Z = 2).
         */
        get: function () {
            return this.get(2);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Li", {
        /**
         * Gets Lithium (Z = 3).
         */
        get: function () {
            return this.get(3);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Be", {
        /**
         * Gets Beryllium (Z = 4).
         */
        get: function () {
            return this.get(4);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "B", {
        /**
         * Gets Boron (Z = 5).
         */
        get: function () {
            return this.get(5);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "C", {
        /**
         * Gets Carbon (Z = 6).
         */
        get: function () {
            return this.get(6);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "N", {
        /**
         * Gets Nitrogen (Z = 7).
         */
        get: function () {
            return this.get(7);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "O", {
        /**
         * Gets Oxygen (Z = 8).
         */
        get: function () {
            return this.get(8);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "F", {
        /**
         * Gets Fluorine (Z = 9).
         */
        get: function () {
            return this.get(9);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Ne", {
        /**
         * Gets Neon (Z = 10).
         */
        get: function () {
            return this.get(10);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Na", {
        /**
         * Gets Sodium (Z = 11).
         */
        get: function () {
            return this.get(11);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Mg", {
        /**
         * Gets Magnesium (Z = 12).
         */
        get: function () {
            return this.get(12);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Al", {
        /**
         * Gets Aluminium (Z = 13).
         */
        get: function () {
            return this.get(13);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Si", {
        /**
         * Gets Silicon (Z = 14).
         */
        get: function () {
            return this.get(14);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "P", {
        /**
         * Gets Phosphorus (Z = 15).
         */
        get: function () {
            return this.get(15);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "S", {
        /**
         * Gets Sulfur (Z = 16).
         */
        get: function () {
            return this.get(16);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Cl", {
        /**
         * Gets Chlorine (Z = 17).
         */
        get: function () {
            return this.get(17);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Ar", {
        /**
         * Gets Argon (Z = 18).
         */
        get: function () {
            return this.get(18);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "K", {
        /**
         * Gets Potassium (Z = 19).
         */
        get: function () {
            return this.get(19);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Ca", {
        /**
         * Gets Calcium (Z = 20).
         */
        get: function () {
            return this.get(20);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Sc", {
        /**
         * Gets Scandium (Z = 21).
         */
        get: function () {
            return this.get(21);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Ti", {
        /**
         * Gets Titanium (Z = 22).
         */
        get: function () {
            return this.get(22);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "V", {
        /**
         * Gets Vanadium (Z = 23).
         */
        get: function () {
            return this.get(23);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Cr", {
        /**
         * Gets Chromium (Z = 24).
         */
        get: function () {
            return this.get(24);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Mn", {
        /**
         * Gets Manganese (Z = 25).
         */
        get: function () {
            return this.get(25);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Fe", {
        /**
         * Gets Iron (Z = 26).
         */
        get: function () {
            return this.get(26);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Co", {
        /**
         * Gets Cobalt (Z = 27).
         */
        get: function () {
            return this.get(27);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Ni", {
        /**
         * Gets Nickel (Z = 28).
         */
        get: function () {
            return this.get(28);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Cu", {
        /**
         * Gets Copper (Z = 29).
         */
        get: function () {
            return this.get(29);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Zn", {
        /**
         * Gets Zinc (Z = 30).
         */
        get: function () {
            return this.get(30);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Ga", {
        /**
         * Gets Gallium (Z = 31).
         */
        get: function () {
            return this.get(31);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Ge", {
        /**
         * Gets Germanium (Z = 32).
         */
        get: function () {
            return this.get(32);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "As", {
        /**
         * Gets Arsenic (Z = 33).
         */
        get: function () {
            return this.get(33);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Se", {
        /**
         * Gets Selenium (Z = 34).
         */
        get: function () {
            return this.get(34);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Br", {
        /**
         * Gets Bromine (Z = 35).
         */
        get: function () {
            return this.get(35);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Kr", {
        /**
         * Gets Krypton (Z = 36).
         */
        get: function () {
            return this.get(36);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Rb", {
        /**
         * Gets Rubidium (Z = 37).
         */
        get: function () {
            return this.get(37);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Sr", {
        /**
         * Gets Strontium (Z = 38).
         */
        get: function () {
            return this.get(38);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Y", {
        /**
         * Gets Yttrium (Z = 39).
         */
        get: function () {
            return this.get(39);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Zr", {
        /**
         * Gets Zirconium (Z = 40).
         */
        get: function () {
            return this.get(40);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Nb", {
        /**
         * Gets Niobium (Z = 41).
         */
        get: function () {
            return this.get(41);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Mo", {
        /**
         * Gets Molybdenum (Z = 42).
         */
        get: function () {
            return this.get(42);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Tc", {
        /**
         * Gets Technetium (Z = 43).
         */
        get: function () {
            return this.get(43);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Ru", {
        /**
         * Gets Ruthenium (Z = 44).
         */
        get: function () {
            return this.get(44);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Rh", {
        /**
         * Gets Rhodium (Z = 45).
         */
        get: function () {
            return this.get(45);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Pd", {
        /**
         * Gets Palladium (Z = 46).
         */
        get: function () {
            return this.get(46);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Ag", {
        /**
         * Gets Silver (Z = 47).
         */
        get: function () {
            return this.get(47);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Cd", {
        /**
         * Gets Cadmium (Z = 48).
         */
        get: function () {
            return this.get(48);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "In", {
        /**
         * Gets Indium (Z = 49).
         */
        get: function () {
            return this.get(49);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Sn", {
        /**
         * Gets Tin (Z = 50).
         */
        get: function () {
            return this.get(50);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Sb", {
        /**
         * Gets Antimony (Z = 51).
         */
        get: function () {
            return this.get(51);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Te", {
        /**
         * Gets Tellurium (Z = 52).
         */
        get: function () {
            return this.get(52);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "I", {
        /**
         * Gets Iodine (Z = 53).
         */
        get: function () {
            return this.get(53);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Xe", {
        /**
         * Gets Xenon (Z = 54).
         */
        get: function () {
            return this.get(54);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Cs", {
        /**
         * Gets Caesium (Z = 55).
         */
        get: function () {
            return this.get(55);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Ba", {
        /**
         * Gets Barium (Z = 56).
         */
        get: function () {
            return this.get(56);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "La", {
        /**
         * Gets Lanthanum (Z = 57).
         */
        get: function () {
            return this.get(57);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Ce", {
        /**
         * Gets Cerium (Z = 58).
         */
        get: function () {
            return this.get(58);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Pr", {
        /**
         * Gets Praseodymium (Z = 59).
         */
        get: function () {
            return this.get(59);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Nd", {
        /**
         * Gets Neodymium (Z = 60).
         */
        get: function () {
            return this.get(60);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Pm", {
        /**
         * Gets Promethium (Z = 61).
         */
        get: function () {
            return this.get(61);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Sm", {
        /**
         * Gets Samarium (Z = 62).
         */
        get: function () {
            return this.get(62);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Eu", {
        /**
         * Gets Europium (Z = 63).
         */
        get: function () {
            return this.get(63);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Gd", {
        /**
         * Gets Gadolinium (Z = 64).
         */
        get: function () {
            return this.get(64);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Tb", {
        /**
         * Gets Terbium (Z = 65).
         */
        get: function () {
            return this.get(65);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Dy", {
        /**
         * Gets Dysprosium (Z = 66).
         */
        get: function () {
            return this.get(66);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Ho", {
        /**
         * Gets Holmium (Z = 67).
         */
        get: function () {
            return this.get(67);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Er", {
        /**
         * Gets Erbium (Z = 68).
         */
        get: function () {
            return this.get(68);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Tm", {
        /**
         * Gets Thulium (Z = 69).
         */
        get: function () {
            return this.get(69);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Yb", {
        /**
         * Gets Ytterbium (Z = 70).
         */
        get: function () {
            return this.get(70);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Lu", {
        /**
         * Gets Lutetium (Z = 71).
         */
        get: function () {
            return this.get(71);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Hf", {
        /**
         * Gets Hafnium (Z = 72).
         */
        get: function () {
            return this.get(72);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Ta", {
        /**
         * Gets Tantalum (Z = 73).
         */
        get: function () {
            return this.get(73);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "W", {
        /**
         * Gets Tungsten (Z = 74).
         */
        get: function () {
            return this.get(74);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Re", {
        /**
         * Gets Rhenium (Z = 75).
         */
        get: function () {
            return this.get(75);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Os", {
        /**
         * Gets Osmium (Z = 76).
         */
        get: function () {
            return this.get(76);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Ir", {
        /**
         * Gets Iridium (Z = 77).
         */
        get: function () {
            return this.get(77);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Pt", {
        /**
         * Gets Platinum (Z = 78).
         */
        get: function () {
            return this.get(78);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Au", {
        /**
         * Gets Gold (Z = 79).
         */
        get: function () {
            return this.get(79);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Hg", {
        /**
         * Gets Mercury (Z = 80).
         */
        get: function () {
            return this.get(80);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Tl", {
        /**
         * Gets Thallium (Z = 81).
         */
        get: function () {
            return this.get(81);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Pb", {
        /**
         * Gets Lead (Z = 82).
         */
        get: function () {
            return this.get(82);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Bi", {
        /**
         * Gets Bismuth (Z = 83).
         */
        get: function () {
            return this.get(83);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Po", {
        /**
         * Gets Polonium (Z = 84).
         */
        get: function () {
            return this.get(84);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "At", {
        /**
         * Gets Astatine (Z = 85).
         */
        get: function () {
            return this.get(85);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Rn", {
        /**
         * Gets Radon (Z = 86).
         */
        get: function () {
            return this.get(86);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Fr", {
        /**
         * Gets Francium (Z = 87).
         */
        get: function () {
            return this.get(87);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Ra", {
        /**
         * Gets Radium (Z = 88).
         */
        get: function () {
            return this.get(88);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Ac", {
        /**
         * Gets Actinium (Z = 89).
         */
        get: function () {
            return this.get(89);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Th", {
        /**
         * Gets Thorium (Z = 90).
         */
        get: function () {
            return this.get(90);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Pa", {
        /**
         * Gets Protactinium (Z = 91).
         */
        get: function () {
            return this.get(91);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "U", {
        /**
         * Gets Uranium (Z = 92).
         */
        get: function () {
            return this.get(92);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Np", {
        /**
         * Gets Neptunium (Z = 93).
         */
        get: function () {
            return this.get(93);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Pu", {
        /**
         * Gets Plutonium (Z = 94).
         */
        get: function () {
            return this.get(94);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Am", {
        /**
         * Gets Americium (Z = 95).
         */
        get: function () {
            return this.get(95);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Cm", {
        /**
         * Gets Curium (Z = 96).
         */
        get: function () {
            return this.get(96);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Bk", {
        /**
         * Gets Berkelium (Z = 97).
         */
        get: function () {
            return this.get(97);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Cf", {
        /**
         * Gets Californium (Z = 98).
         */
        get: function () {
            return this.get(98);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Es", {
        /**
         * Gets Einsteinium (Z = 99).
         */
        get: function () {
            return this.get(99);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Fm", {
        /**
         * Gets Fermium (Z = 100).
         */
        get: function () {
            return this.get(100);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Md", {
        /**
         * Gets Mendelevium (Z = 101).
         */
        get: function () {
            return this.get(101);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "No", {
        /**
         * Gets Nobelium (Z = 102).
         */
        get: function () {
            return this.get(102);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Lr", {
        /**
         * Gets Lawrencium (Z = 103).
         */
        get: function () {
            return this.get(103);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Rf", {
        /**
         * Gets Rutherfordium (Z = 104).
         */
        get: function () {
            return this.get(104);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Db", {
        /**
         * Gets Dubnium (Z = 105).
         */
        get: function () {
            return this.get(105);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Sg", {
        /**
         * Gets Seaborgium (Z = 106).
         */
        get: function () {
            return this.get(106);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Bh", {
        /**
         * Gets Bohrium (Z = 107).
         */
        get: function () {
            return this.get(107);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Hs", {
        /**
         * Gets Hassium (Z = 108).
         */
        get: function () {
            return this.get(108);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Mt", {
        /**
         * Gets Meitnerium (Z = 109).
         */
        get: function () {
            return this.get(109);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Ds", {
        /**
         * Gets Darmstadtium (Z = 110).
         */
        get: function () {
            return this.get(110);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Rg", {
        /**
         * Gets Roentgenium (Z = 111).
         */
        get: function () {
            return this.get(111);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Cn", {
        /**
         * Gets Copernicium (Z = 112).
         */
        get: function () {
            return this.get(112);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Nh", {
        /**
         * Gets Nihonium (Z = 113).
         */
        get: function () {
            return this.get(113);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Fl", {
        /**
         * Gets Flerovium (Z = 114).
         */
        get: function () {
            return this.get(114);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Mc", {
        /**
         * Gets Moscovium (Z = 115).
         */
        get: function () {
            return this.get(115);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Lv", {
        /**
         * Gets Livermorium (Z = 116).
         */
        get: function () {
            return this.get(116);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Ts", {
        /**
         * Gets Tennessine (Z = 117).
         */
        get: function () {
            return this.get(117);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PeriodicTable.prototype, "Og", {
        /**
         * Gets Oganesson (Z = 118).
         */
        get: function () {
            return this.get(118);
        },
        enumerable: false,
        configurable: true
    });
    return PeriodicTable;
}());
exports.Table = new PeriodicTable();
function init() {
    table = [
        new element_1.Element(1, "H", "Hydrogen", { weight: 1.008, isotopes: [1.00782503223, 2.01410177812, 3.0160492779, 4.02643, 5.035311, 6.04496, 7.0527] }),
        new element_1.Element(2, "He", "Helium", { weight: 4.002602, isotopes: [3.0160293201, 4.00260325413, 5.012057, 6.018885891, 7.0279907, 8.03393439, 9.043946, 10.05279] }),
        new element_1.Element(3, "Li", "Lithium", { weight: 6.94, isotopes: [3.0308, 4.02719, 5.012538, 6.0151228874, 7.0160034366, 8.022486246, 9.02679019, 10.035483, 11.04372358, 12.052517, 13.06263] }),
        new element_1.Element(4, "Be", "Beryllium", { weight: 9.0121831, isotopes: [5.0399, 6.0197264, 7.016928717, 8.005305102, 9.012183065, 10.013534695, 11.02166108, 12.0269221, 13.036135, 14.04289, 15.05342, 16.06167] }),
        new element_1.Element(5, "B", "Boron", { weight: 10.81, isotopes: [6.0508, 7.029712, 8.0246073, 9.01332965, 10.01293695, 11.00930536, 12.0143527, 13.0177802, 14.025404, 15.031088, 16.039842, 17.04699, 18.05566, 19.0631, 20.07207, 21.08129] }),
        new element_1.Element(6, "C", "Carbon", { weight: 12.011, isotopes: [8.037643, 9.0310372, 10.01685331, 11.0114336, 12, 13.00335483507, 14.0032419884, 15.01059926, 16.0147013, 17.022577, 18.026751, 19.0348, 20.04032, 21.049, 22.05753, 23.0689] }),
        new element_1.Element(7, "N", "Nitrogen", { weight: 14.007, isotopes: [10.04165, 11.026091, 12.0186132, 13.00573861, 14.00307400443, 15.00010889888, 16.0061019, 17.008449, 18.014078, 19.017022, 20.023366, 21.02711, 22.03439, 23.04114, 24.05039, 25.0601] }),
        new element_1.Element(8, "O", "Oxygen", { weight: 15.999, isotopes: [12.034262, 13.024815, 14.00859636, 15.00306562, 15.99491461957, 16.9991317565, 17.99915961286, 19.003578, 20.00407535, 21.008655, 22.009966, 23.015696, 24.01986, 25.02936, 26.03729, 27.04772, 28.05591] }),
        new element_1.Element(9, "F", "Fluorine", { weight: 18.998403163, isotopes: [14.034315, 15.018043, 16.0114657, 17.00209524, 18.00093733, 18.99840316273, 19.999981252, 20.9999489, 22.002999, 23.003557, 24.008115, 25.012199, 26.020038, 27.02644, 28.03534, 29.04254, 30.05165, 31.05971] }),
        new element_1.Element(10, "Ne", "Neon", { weight: 20.1797, isotopes: [16.02575, 17.01771396, 18.0057087, 19.00188091, 19.9924401762, 20.993846685, 21.991385114, 22.99446691, 23.99361065, 24.997789, 26.000515, 27.007553, 28.01212, 29.01975, 30.02473, 31.0331, 32.03972, 33.04938, 34.05673] }),
        new element_1.Element(11, "Na", "Sodium", { weight: 22.98976928, isotopes: [18.02688, 19.01388, 20.0073544, 20.99765469, 21.99443741, 22.989769282, 23.99096295, 24.989954, 25.9926346, 26.9940765, 27.998939, 29.0028771, 30.0090979, 31.013163, 32.02019, 33.02573, 34.03359, 35.04062, 36.04929, 37.05705] }),
        new element_1.Element(12, "Mg", "Magnesium", { weight: 24.305, isotopes: [19.034169, 20.01885, 21.011716, 21.99957065, 22.99412421, 23.985041697, 24.985836976, 25.982592968, 26.984340624, 27.9838767, 28.988617, 29.9904629, 30.996648, 31.9991102, 33.0053271, 34.008935, 35.01679, 36.02188, 37.03037, 38.03658, 39.04538, 40.05218] }),
        new element_1.Element(13, "Al", "Aluminium", { weight: 26.9815384, isotopes: [21.02897, 22.01954, 23.00724435, 23.9999489, 24.9904281, 25.986891904, 26.98153853, 27.98191021, 28.9804565, 29.98296, 30.983945, 31.988085, 32.990909, 33.996705, 34.999764, 36.00639, 37.01053, 38.0174, 39.02254, 40.03003, 41.03638, 42.04384, 43.05147] }),
        new element_1.Element(14, "Si", "Silicon", { weight: 28.085, isotopes: [22.03579, 23.02544, 24.011535, 25.004109, 25.99233384, 26.98670481, 27.97692653465, 28.9764946649, 29.973770136, 30.975363194, 31.97415154, 32.97797696, 33.978576, 34.984583, 35.986695, 36.992921, 37.995523, 39.002491, 40.00583, 41.01301, 42.01778, 43.0248, 44.03061, 45.03995] }),
        new element_1.Element(15, "P", "Phosphorus", { weight: 30.973761998, isotopes: [24.03577, 25.02119, 26.01178, 26.999224, 27.9923266, 28.98180079, 29.97831375, 30.97376199842, 31.973907643, 32.9717257, 33.97364589, 34.9733141, 35.97826, 36.979607, 37.984252, 38.986227, 39.99133, 40.994654, 42.00108, 43.00502, 44.01121, 45.01645, 46.02446, 47.03139] }),
        new element_1.Element(16, "S", "Sulfur", { weight: 32.06, isotopes: [26.02907, 27.01828, 28.00437, 28.996611, 29.98490703, 30.97955701, 31.9720711744, 32.9714589098, 33.967867004, 34.96903231, 35.96708071, 36.97112551, 37.9711633, 38.975134, 39.9754826, 40.9795935, 41.9810651, 42.9869076, 43.9901188, 44.99572, 46.00004, 47.00795, 48.0137, 49.02276] }),
        new element_1.Element(17, "Cl", "Chlorine", { weight: 35.45, isotopes: [28.02954, 29.01478, 30.00477, 30.992414, 31.98568464, 32.97745199, 33.973762485, 34.968852682, 35.968306809, 36.965902602, 37.96801044, 38.9680082, 39.970415, 40.970685, 41.97325, 42.97389, 43.97787, 44.98029, 45.98517, 46.98916, 47.99564, 49.00123, 50.00905, 51.01554] }),
        new element_1.Element(18, "Ar", "Argon", { weight: 39.95, isotopes: [30.02307, 31.01212, 31.9976378, 32.98992555, 33.98027009, 34.97525759, 35.967545105, 36.96677633, 37.96273211, 38.964313, 39.9623831237, 40.96450057, 41.9630457, 42.9656361, 43.9649238, 44.96803973, 45.968083, 46.972935, 47.97591, 48.9819, 49.98613, 50.9937, 51.99896, 53.00729] }),
        new element_1.Element(19, "K", "Potassium", { weight: 39.0983, isotopes: [32.02265, 33.00756, 33.99869, 34.98800541, 35.98130201, 36.97337589, 37.96908112, 38.9637064864, 39.963998166, 40.9618252579, 41.96240231, 42.9607347, 43.96158699, 44.96069149, 45.96198159, 46.9616616, 47.96534119, 48.96821075, 49.97238, 50.975828, 51.98224, 52.98746, 53.99463, 55.00076, 56.00851] }),
        new element_1.Element(20, "Ca", "Calcium", { weight: 40.078, isotopes: [34.01487, 35.00514, 35.993074, 36.98589785, 37.97631922, 38.97071081, 39.962590863, 40.96227792, 41.95861783, 42.95876644, 43.95548156, 44.95618635, 45.953689, 46.9545424, 47.95252276, 48.95566274, 49.9574992, 50.960989, 51.963217, 52.96945, 53.9734, 54.9803, 55.98508, 56.99262, 57.99794] }),
        new element_1.Element(21, "Sc", "Scandium", { weight: 44.955908, isotopes: [36.01648, 37.00374, 37.99512, 38.984785, 39.9779673, 40.969251105, 41.96551653, 42.9611505, 43.9594029, 44.95590828, 45.95516826, 46.9524037, 47.9522236, 48.9500146, 49.952176, 50.953592, 51.95688, 52.95909, 53.96393, 54.96782, 55.97345, 56.97777, 57.98403, 58.98894, 59.99565, 61.001] }),
        new element_1.Element(22, "Ti", "Titanium", { weight: 47.867, isotopes: [38.01145, 39.00236, 39.9905, 40.983148, 41.97304903, 42.9685225, 43.95968995, 44.95812198, 45.95262772, 46.95175879, 47.94794198, 48.94786568, 49.94478689, 50.94661065, 51.946893, 52.94973, 53.95105, 54.95527, 55.95791, 56.96364, 57.9666, 58.97247, 59.97603, 60.98245, 61.98651, 62.99375] }),
        new element_1.Element(23, "V", "Vanadium", { weight: 50.9415, isotopes: [40.01276, 41.00021, 41.99182, 42.980766, 43.97411, 44.9657748, 45.96019878, 46.95490491, 47.9522522, 48.9485118, 49.94715601, 50.94395704, 51.94477301, 52.9443367, 53.946439, 54.94724, 55.95048, 56.95252, 57.95672, 58.95939, 59.96431, 60.96725, 61.97265, 62.97639, 63.98264, 64.9875, 65.99398] }),
        new element_1.Element(24, "Cr", "Chromium", { weight: 51.9961, isotopes: [42.0067, 42.99753, 43.98536, 44.97905, 45.968359, 46.9628974, 47.9540291, 48.9513333, 49.94604183, 50.94476502, 51.94050623, 52.94064815, 53.93887916, 54.94083843, 55.9406531, 56.943613, 57.94435, 58.94859, 59.95008, 60.95442, 61.9561, 62.96165, 63.96408, 64.96996, 65.97366, 66.98016, 67.98403] }),
        new element_1.Element(25, "Mn", "Manganese", { weight: 54.938043, isotopes: [44.00715, 44.99449, 45.98609, 46.975775, 47.96852, 48.959595, 49.95423778, 50.94820847, 51.9455639, 52.94128889, 53.9403576, 54.93804391, 55.93890369, 56.9382861, 57.9400666, 58.9403911, 59.9431366, 60.9444525, 61.94795, 62.9496647, 63.9538494, 64.9560198, 65.960547, 66.96424, 67.96962, 68.97366, 69.97937, 70.98368] }),
        new element_1.Element(26, "Fe", "Iron", { weight: 55.845, isotopes: [45.01442, 46.00063, 46.99185, 47.98023, 48.973429, 49.962975, 50.956841, 51.9481131, 52.9453064, 53.93960899, 54.93829199, 55.93493633, 56.93539284, 57.93327443, 58.93487434, 59.9340711, 60.9367462, 61.9367918, 62.9402727, 63.9409878, 64.9450115, 65.94625, 66.95054, 67.95295, 68.95807, 69.96102, 70.96672, 71.96983, 72.97572, 73.97935] }),
        new element_1.Element(27, "Co", "Cobalt", { weight: 58.933194, isotopes: [47.01057, 48.00093, 48.98891, 49.98091, 50.970647, 51.96351, 52.9542041, 53.94845987, 54.9419972, 55.9398388, 56.93629057, 57.9357521, 58.93319429, 59.9338163, 60.93247662, 61.934059, 62.9336, 63.935811, 64.9364621, 65.939443, 66.9406096, 67.94426, 68.94614, 69.94963, 70.95237, 71.95729, 72.96039, 73.96515, 74.96876, 75.97413] }),
        new element_1.Element(28, "Ni", "Nickel", { weight: 58.6934, isotopes: [48.01769, 49.0077, 49.99474, 50.98611, 51.9748, 52.96819, 53.957892, 54.95133063, 55.94212855, 56.93979218, 57.93534241, 58.9343462, 59.93078588, 60.93105557, 61.92834537, 62.92966963, 63.92796682, 64.93008517, 65.9291393, 66.9315694, 67.9318688, 68.9356103, 69.9364313, 70.940519, 71.9417859, 72.9462067, 73.94798, 74.9525, 75.95533, 76.96055, 77.96336, 78.97025] }),
        new element_1.Element(29, "Cu", "Copper", { weight: 63.546, isotopes: [51.99671, 52.98459, 53.97666, 54.96604, 55.95895, 56.9492125, 57.94453305, 58.93949748, 59.9373645, 60.9334576, 61.93259541, 62.92959772, 63.92976434, 64.9277897, 65.92886903, 66.9277303, 67.9296109, 68.9294293, 69.9323921, 70.9326768, 71.9358203, 72.9366744, 73.9398749, 74.9415226, 75.945275, 76.94792, 77.95223, 78.95502, 79.96089, 80.96587, 81.97244] }),
        new element_1.Element(30, "Zn", "Zinc", { weight: 65.38, isotopes: [53.99204, 54.98398, 55.97254, 56.96506, 57.954591, 58.94931266, 59.9418421, 60.939507, 61.93433397, 62.9332115, 63.92914201, 64.92924077, 65.92603381, 66.92712775, 67.92484455, 68.9265507, 69.9253192, 70.9277196, 71.9268428, 72.9295826, 73.9294073, 74.9328402, 75.933115, 76.9368872, 77.9382892, 78.9426381, 79.9445529, 80.9504026, 81.95426, 82.96056, 83.96521, 84.97226] }),
        new element_1.Element(31, "Ga", "Gallium", { weight: 69.723, isotopes: [55.99536, 56.9832, 57.97478, 58.96353, 59.95729, 60.949399, 61.94419025, 62.9392942, 63.9368404, 64.93273459, 65.9315894, 66.9282025, 67.9279805, 68.9255735, 69.9260219, 70.92470258, 71.92636747, 72.9251747, 73.9269457, 74.9265002, 75.9288276, 76.9291543, 77.9316088, 78.9328523, 79.9364208, 80.9381338, 81.9431765, 82.9471203, 83.95246, 84.95699, 85.96301, 86.96824] }),
        new element_1.Element(32, "Ge", "Germanium", { weight: 72.63, isotopes: [57.99172, 58.98249, 59.97036, 60.96379, 61.95502, 62.949628, 63.9416899, 64.9393681, 65.9338621, 66.9327339, 67.9280953, 68.9279645, 69.92424875, 70.92495233, 71.922075826, 72.923458956, 73.921177761, 74.92285837, 75.921402726, 76.923549843, 77.9228529, 78.92536, 79.9253508, 80.9288329, 81.929774, 82.9345391, 83.9375751, 84.9429697, 85.94658, 86.95268, 87.95691, 88.96379, 89.96863] }),
        new element_1.Element(33, "As", "Arsenic", { weight: 74.921595, isotopes: [59.99388, 60.98112, 61.97361, 62.9639, 63.95743, 64.949611, 65.9441488, 66.93925111, 67.9367741, 68.932246, 69.930926, 70.9271138, 71.9267523, 72.9238291, 73.9239286, 74.92159457, 75.92239202, 76.9206476, 77.921828, 78.9209484, 79.9224746, 80.9221323, 81.9247412, 82.9252069, 83.9293033, 84.9321637, 85.9367015, 86.9402917, 87.94555, 88.94976, 89.95563, 90.96039, 91.96674] }),
        new element_1.Element(34, "Se", "Selenium", { weight: 78.971, isotopes: [63.97109, 64.9644, 65.95559, 66.949994, 67.94182524, 68.9394148, 69.9335155, 70.9322094, 71.9271405, 72.9267549, 73.922475934, 74.92252287, 75.919213704, 76.919914154, 77.91730928, 78.91849929, 79.9165218, 80.917993, 81.9166995, 82.9191186, 83.9184668, 84.9222608, 85.9243117, 86.9286886, 87.9314175, 88.9366691, 89.9401, 90.94596, 91.94984, 92.95629, 93.96049, 94.9673] }),
        new element_1.Element(35, "Br", "Bromine", { weight: 79.904, isotopes: [66.96465, 67.95873, 68.950497, 69.944792, 70.9393422, 71.9365886, 72.9316715, 73.9299102, 74.9258105, 75.924542, 76.9213792, 77.9211459, 78.9183376, 79.9185298, 80.9162897, 81.9168032, 82.9151756, 83.916496, 84.9156458, 85.9188054, 86.920674, 87.9240833, 88.9267046, 89.9312928, 90.9343986, 91.9396316, 92.94313, 93.9489, 94.95301, 95.95903, 96.96344, 97.96946] }),
        new element_1.Element(36, "Kr", "Krypton", { weight: 83.798, isotopes: [68.96518, 69.95604, 70.95027, 71.9420924, 72.9392892, 73.933084, 74.9309457, 75.9259103, 76.92467, 77.92036494, 78.9200829, 79.91637808, 80.9165912, 81.91348273, 82.91412716, 83.9114977282, 84.9125273, 85.9106106269, 86.91335476, 87.9144479, 88.9178355, 89.9195279, 90.9238063, 91.9261731, 92.9311472, 93.93414, 94.939711, 95.943017, 96.94909, 97.95243, 98.95839, 99.96237, 100.96873] }),
        new element_1.Element(37, "Rb", "Rubidium", { weight: 85.4678, isotopes: [70.96532, 71.95908, 72.95053, 73.9442659, 74.9385732, 75.935073, 76.9304016, 77.9281419, 78.9239899, 79.9225164, 80.9189939, 81.918209, 82.9151142, 83.9143752, 84.9117897379, 85.91116743, 86.909180531, 87.91131559, 88.9122783, 89.9147985, 90.9165372, 91.9197284, 92.9220393, 93.9263948, 94.92926, 95.9341334, 96.9371771, 97.9416869, 98.94503, 99.95003, 100.95404, 101.95952, 102.96392] }),
        new element_1.Element(38, "Sr", "Strontium", { weight: 87.62, isotopes: [72.9657, 73.95617, 74.94995, 75.941763, 76.9379455, 77.93218, 78.9297077, 79.9245175, 80.9232114, 81.9183999, 82.9175544, 83.9134191, 84.912932, 85.9092606, 86.9088775, 87.9056125, 88.9074511, 89.90773, 90.9101954, 91.9110382, 92.9140242, 93.9153556, 94.9193529, 95.9217066, 96.926374, 97.9286888, 98.9328907, 99.93577, 100.940352, 101.943791, 102.94909, 103.95265, 104.95855, 105.96265, 106.96897] }),
        new element_1.Element(39, "Y", "Yttrium", { weight: 88.90584, isotopes: [75.95856, 76.949781, 77.94361, 78.93735, 79.9343561, 80.9294556, 81.9269314, 82.922485, 83.9206721, 84.916433, 85.914886, 86.9108761, 87.9095016, 88.9058403, 89.9071439, 90.9072974, 91.9089451, 92.909578, 93.9115906, 94.9128161, 95.9158968, 96.9182741, 97.9223821, 98.924148, 99.927715, 100.9301477, 101.9343277, 102.937243, 103.94196, 104.94544, 105.95056, 106.95452, 107.95996, 108.96436] }),
        new element_1.Element(40, "Zr", "Zirconium", { weight: 91.224, isotopes: [77.95566, 78.94948, 79.9404, 80.93731, 81.93135, 82.9292421, 83.9233269, 84.9214444, 85.9162972, 86.914818, 87.9102213, 88.9088814, 89.9046977, 90.9056396, 91.9050347, 92.9064699, 93.9063108, 94.9080385, 95.9082714, 96.9109512, 97.9127289, 98.916667, 99.9180006, 100.921448, 101.9231409, 102.927191, 103.929436, 104.934008, 105.93676, 106.94174, 107.94487, 108.95041, 109.95396, 110.95968, 111.9637] }),
        new element_1.Element(41, "Nb", "Niobium", { weight: 92.90637, isotopes: [80.9496, 81.94396, 82.93729, 83.93449, 84.9288458, 85.9257828, 86.9206937, 87.918222, 88.913445, 89.9112584, 90.9069897, 91.9071881, 92.906373, 93.9072788, 94.9068324, 95.9080973, 96.9080959, 97.9103265, 98.911613, 99.9143276, 100.9153103, 101.9180772, 102.9194572, 103.9228925, 104.9249465, 105.9289317, 106.9315937, 107.9360748, 108.93922, 109.94403, 110.94753, 111.95247, 112.95651, 113.96201, 114.96634] }),
        new element_1.Element(42, "Mo", "Molybdenum", { weight: 95.95, isotopes: [82.94988, 83.94149, 84.938261, 85.9311748, 86.9281962, 87.9219678, 88.9194682, 89.9139309, 90.9117453, 91.90680796, 92.90680958, 93.9050849, 94.90583877, 95.90467612, 96.90601812, 97.90540482, 98.90770851, 99.9074718, 100.9103414, 101.9102834, 102.913079, 103.9137344, 104.916969, 105.918259, 106.922106, 107.924033, 108.928424, 109.930704, 110.935654, 111.93831, 112.94335, 113.94653, 114.95196, 115.95545, 116.96117] }),
        new element_1.Element(43, "Tc", "Technetium", { weight: 98, isotopes: [84.95058, 85.94493, 86.9380672, 87.93378, 88.9276487, 89.9240739, 90.9184254, 91.9152698, 92.910246, 93.9096536, 94.9076536, 95.907868, 96.9063667, 97.9072124, 98.9062508, 99.9076539, 100.907309, 101.9092097, 102.909176, 103.911425, 104.911655, 105.914358, 106.9154606, 107.9184957, 108.920256, 109.923744, 110.925901, 111.9299458, 112.932569, 113.93691, 114.93998, 115.94476, 116.94806, 117.95299, 118.95666, 119.96187] }),
        new element_1.Element(44, "Ru", "Ruthenium", { weight: 101.07, isotopes: [86.95069, 87.9416, 88.93762, 89.9303444, 90.9267419, 91.9202344, 92.9171044, 93.9113429, 94.910406, 95.90759025, 96.9075471, 97.9052868, 98.9059341, 99.9042143, 100.9055769, 101.9043441, 102.9063186, 103.9054275, 104.9077476, 105.9073291, 106.909972, 107.910188, 108.913326, 109.9140407, 110.91757, 111.918809, 112.922844, 113.9246136, 114.92882, 115.9312192, 116.9361, 117.93853, 118.94357, 119.94631, 120.95164, 121.95447, 122.95989, 123.96305] }),
        new element_1.Element(45, "Rh", "Rhodium", { weight: 102.90549, isotopes: [88.95058, 89.94422, 90.93688, 91.9323677, 92.9259128, 93.9217305, 94.9158979, 95.914453, 96.911329, 97.910708, 98.9081282, 99.908117, 100.9061606, 101.9068374, 102.905498, 103.9066492, 104.9056885, 105.9072868, 106.906748, 107.908714, 108.9087488, 109.911079, 110.9116423, 111.914403, 112.9154393, 113.918718, 114.9203116, 115.924059, 116.9260354, 117.93034, 118.932557, 119.93686, 120.93942, 121.94399, 122.94685, 123.95151, 124.95469, 125.95946] }),
        new element_1.Element(46, "Pd", "Palladium", { weight: 106.42, isotopes: [90.95032, 91.94088, 92.93651, 93.9290376, 94.9248898, 95.9182151, 96.916472, 97.9126983, 98.9117748, 99.908505, 100.9082864, 101.9056022, 102.9060809, 103.9040305, 104.9050796, 105.9034804, 106.9051282, 107.9038916, 108.9059504, 109.9051722, 110.90768968, 111.9073297, 112.910261, 113.9103686, 114.913659, 115.914297, 116.9179547, 117.9190667, 118.9233402, 119.9245511, 120.9289503, 121.930632, 122.93514, 123.93714, 124.94179, 125.94416, 126.94907, 127.95183] }),
        new element_1.Element(47, "Ag", "Silver", { weight: 107.8682, isotopes: [92.95033, 93.94373, 94.93602, 95.930744, 96.92397, 97.92156, 98.9176458, 99.9161154, 100.912684, 101.9117047, 102.9089631, 103.9086239, 104.9065256, 105.9066636, 106.9050916, 107.9059503, 108.9047553, 109.9061102, 110.9052959, 111.9070486, 112.906573, 113.908823, 114.908767, 115.9113868, 116.911774, 117.9145955, 118.91557, 119.9187848, 120.920125, 121.923664, 122.925337, 123.92893, 124.93105, 125.93475, 126.93711, 127.94106, 128.94395, 129.9507] }),
        new element_1.Element(48, "Cd", "Cadmium", { weight: 112.414, isotopes: [94.94994, 95.94034, 96.9351, 97.927389, 98.9249258, 99.9203488, 100.9185862, 101.914482, 102.9134165, 103.9098564, 104.9094639, 105.9064599, 106.9066121, 107.9041834, 108.9049867, 109.90300661, 110.90418287, 111.90276287, 112.90440813, 113.90336509, 114.90543751, 115.90476315, 116.907226, 117.906922, 118.909847, 119.9098681, 120.9129637, 121.9134591, 122.9168925, 123.9176574, 124.9212576, 125.9224291, 126.926472, 127.9278129, 128.93182, 129.93394, 130.9406, 131.94604, 132.95285] }),
        new element_1.Element(49, "In", "Indium", { weight: 114.818, isotopes: [96.94934, 97.94214, 98.93411, 99.93096, 100.92634, 101.9241071, 102.9198819, 103.9182145, 104.914502, 105.913464, 106.91029, 107.9096935, 108.9071514, 109.90717, 110.9051085, 111.9055377, 112.90406184, 113.90491791, 114.903878776, 115.90525999, 116.9045157, 117.9063566, 118.9058507, 119.907967, 120.907851, 121.910281, 122.910434, 123.913182, 124.913605, 125.916507, 126.917446, 127.9204, 128.9218053, 129.924977, 130.9269715, 131.933001, 132.93831, 133.94454, 134.95005] }),
        new element_1.Element(50, "Sn", "Tin", { weight: 118.71, isotopes: [98.94853, 99.9385, 100.93526, 101.93029, 102.928105, 103.9231052, 104.9212684, 105.9169574, 106.9157137, 107.9118943, 108.9112921, 109.907845, 110.9077401, 111.90482387, 112.9051757, 113.9027827, 114.903344699, 115.9017428, 116.90295398, 117.90160657, 118.90331117, 119.90220163, 120.9042426, 121.9034438, 122.9057252, 123.9052766, 124.9077864, 125.907659, 126.91039, 127.910507, 128.913465, 129.9139738, 130.917045, 131.9178267, 132.9239134, 133.9286821, 134.9349086, 135.93999, 136.94655, 137.95184] }),
        new element_1.Element(51, "Sb", "Antimony", { weight: 121.76, isotopes: [102.93969, 103.93648, 104.931276, 105.928638, 106.9241506, 107.9222267, 108.9181411, 109.9168543, 110.9132182, 111.9124, 112.909375, 113.90929, 114.906598, 115.9067931, 116.9048415, 117.9055321, 118.9039455, 119.9050794, 120.903812, 121.9051699, 122.9042132, 123.905935, 124.905253, 125.907253, 126.9069243, 127.909146, 128.909147, 129.911662, 130.9119888, 131.9145077, 132.9152732, 133.9205357, 134.9251851, 135.9307459, 136.93555, 137.94145, 138.94655, 139.95283] }),
        new element_1.Element(52, "Te", "Tellurium", { weight: 127.6, isotopes: [104.9433, 105.9375, 106.935012, 107.9293805, 108.9273045, 109.9224581, 110.9210006, 111.9167279, 112.915891, 113.912089, 114.911902, 115.90846, 116.908646, 117.905854, 118.9064071, 119.9040593, 120.904944, 121.9030435, 122.9042698, 123.9028171, 124.9044299, 125.9033109, 126.9052257, 127.90446128, 128.90659646, 129.906222748, 130.908522213, 131.9085467, 132.9109688, 133.911394, 134.9165557, 135.9201006, 136.9255989, 137.9294722, 138.9353672, 139.939499, 140.9458, 141.95022, 142.95676] }),
        new element_1.Element(53, "I", "Iodine", { weight: 126.90447, isotopes: [106.94678, 107.94348, 108.9380853, 109.935089, 110.9302692, 111.928005, 112.9236501, 113.92185, 114.918048, 115.91681, 116.913648, 117.913074, 118.910074, 119.910087, 120.9074051, 121.9075888, 122.9055885, 123.906209, 124.9046294, 125.9056233, 126.9044719, 127.9058086, 128.9049837, 129.9066702, 130.9061263, 131.9079935, 132.907797, 133.9097588, 134.9100488, 135.914604, 136.9180282, 137.9227264, 138.926506, 139.93173, 140.93569, 141.9412, 142.94565, 143.95139, 144.95605] }),
        new element_1.Element(54, "Xe", "Xenon", { weight: 131.293, isotopes: [108.95043, 109.94426, 110.941607, 111.935559, 112.9332217, 113.92798, 114.926294, 115.921581, 116.920359, 117.916179, 118.915411, 119.911784, 120.911453, 121.908368, 122.908482, 123.905892, 124.9063944, 125.9042983, 126.9051829, 127.903531, 128.9047808611, 129.903509349, 130.90508406, 131.9041550856, 132.9059108, 133.90539466, 134.9072278, 135.907214484, 136.91155778, 137.9141463, 138.9187922, 139.9216458, 140.9267872, 141.9299731, 142.9353696, 143.9389451, 144.94472, 145.948518, 146.95426, 147.95813] }),
        new element_1.Element(55, "Cs", "Caesium", { weight: 132.90545196, isotopes: [111.950309, 112.9444291, 113.941296, 114.93591, 115.93337, 116.928617, 117.92656, 118.922377, 119.920677, 120.917227, 121.916108, 122.912996, 123.9122578, 124.909728, 125.909446, 126.9074174, 127.9077487, 128.9060657, 129.9067093, 130.9054649, 131.9064339, 132.905451961, 133.906718503, 134.905977, 135.9073114, 136.90708923, 137.9110171, 138.9133638, 139.9172831, 140.9200455, 141.924296, 142.927349, 143.932076, 144.935527, 145.940344, 146.944156, 147.94923, 148.95302, 149.95833, 150.96258] }),
        new element_1.Element(56, "Ba", "Barium", { weight: 137.327, isotopes: [113.95066, 114.94737, 115.94128, 116.93814, 117.93306, 118.93066, 119.92605, 120.92405, 121.919904, 122.918781, 123.915094, 124.914472, 125.91125, 126.911091, 127.908342, 128.908681, 129.9063207, 130.906941, 131.9050611, 132.9060074, 133.90450818, 134.90568838, 135.90457573, 136.90582714, 137.905247, 138.9088411, 139.9106057, 140.9144033, 141.9164324, 142.9206253, 143.9229549, 144.9275184, 145.930284, 146.935304, 147.938171, 148.94308, 149.94605, 150.95127, 151.95481, 152.96036] }),
        new element_1.Element(57, "La", "Lanthanum", { weight: 138.90547, isotopes: [115.9563, 116.94999, 117.94673, 118.94099, 119.93807, 120.93315, 121.93071, 122.9263, 123.924574, 124.920816, 125.919513, 126.916375, 127.915592, 128.912694, 129.912369, 130.91007, 131.910119, 132.908218, 133.908514, 134.906984, 135.907635, 136.9064504, 137.9071149, 138.9063563, 139.9094806, 140.910966, 141.9140909, 142.9160795, 143.919646, 144.921808, 145.925875, 146.928418, 147.932679, 148.93535, 149.93947, 150.94232, 151.94682, 152.95036, 153.95517, 154.95901] }),
        new element_1.Element(58, "Ce", "Cerium", { weight: 140.116, isotopes: [118.95271, 119.94654, 120.94335, 121.93787, 122.93528, 123.93031, 124.92844, 125.923971, 126.922727, 127.918911, 128.918102, 129.914736, 130.914429, 131.911464, 132.91152, 133.908928, 134.909161, 135.90712921, 136.90776236, 137.905991, 138.9066551, 139.9054431, 140.9082807, 141.9092504, 142.9123921, 143.9136529, 144.917265, 145.918802, 146.9226899, 147.924424, 148.928427, 149.930384, 150.934272, 151.9366, 152.94093, 153.9438, 154.94855, 155.95183, 156.95705] }),
        new element_1.Element(59, "Pr", "Praseodymium", { weight: 140.90766, isotopes: [120.95532, 121.95175, 122.94596, 123.94294, 124.9377, 125.93524, 126.93071, 127.928791, 128.925095, 129.92359, 130.920235, 131.919255, 132.916331, 133.915697, 134.913112, 135.912677, 136.9106792, 137.910754, 138.9089408, 139.9090803, 140.9076576, 141.9100496, 142.9108228, 143.9133109, 144.9145182, 145.91768, 146.919008, 147.92213, 148.923736, 149.9266765, 150.928309, 151.931553, 152.933904, 153.93753, 154.940509, 155.94464, 156.94789, 157.95241, 158.95589] }),
        new element_1.Element(60, "Nd", "Neodymium", { weight: 144.242, isotopes: [123.9522, 124.9489, 125.94311, 126.94038, 127.93525, 128.9331, 129.928506, 130.927248, 131.923321, 132.922348, 133.91879, 134.918181, 135.914976, 136.914562, 137.91195, 138.911954, 139.90955, 140.9096147, 141.907729, 142.90982, 143.910093, 144.9125793, 145.9131226, 146.9161061, 147.9168993, 148.9201548, 149.9209022, 150.9238403, 151.924692, 152.927718, 153.92948, 154.9331357, 155.93508, 156.939386, 157.94197, 158.94653, 159.9494, 160.95428] }),
        new element_1.Element(61, "Pm", "Promethium", { weight: 145, isotopes: [125.95792, 126.95192, 127.9487, 128.94323, 129.94053, 130.93567, 131.93384, 132.929782, 133.928353, 134.924823, 135.923585, 136.92048, 137.919548, 138.9168, 139.91604, 140.913555, 141.91289, 142.9109383, 143.9125964, 144.9127559, 145.9147024, 146.915145, 147.9174819, 148.9183423, 149.920991, 150.9212175, 151.923506, 152.9241567, 153.926472, 154.928137, 155.9311175, 156.9331214, 157.936565, 158.939287, 159.9431, 160.94607, 161.95022, 162.95357] }),
        new element_1.Element(62, "Sm", "Samarium", { weight: 150.36, isotopes: [127.95842, 128.95476, 129.949, 130.94618, 131.94087, 132.93856, 133.93411, 134.93252, 135.928276, 136.926971, 137.923244, 138.922297, 139.918995, 140.9184816, 141.9152044, 142.9146353, 143.9120065, 144.9134173, 145.913047, 146.9149044, 147.9148292, 148.9171921, 149.9172829, 150.9199398, 151.9197397, 152.9221047, 153.9222169, 154.9246477, 155.925536, 156.9284187, 157.929951, 158.9332172, 159.9353353, 160.9391602, 161.94146, 162.94555, 163.94836, 164.95297] }),
        new element_1.Element(63, "Eu", "Europium", { weight: 151.964, isotopes: [129.96369, 130.95784, 131.95467, 132.94929, 133.9464, 134.94187, 135.93962, 136.93546, 137.933709, 138.929792, 139.928088, 140.924932, 141.923442, 142.920299, 143.91882, 144.9162726, 145.917211, 146.9167527, 147.918089, 148.9179378, 149.9197077, 150.9198578, 151.9217522, 152.921238, 153.922987, 154.9229011, 155.9247605, 156.9254334, 157.927799, 158.9291001, 159.931851, 160.933664, 161.936989, 162.939196, 163.94274, 164.94559, 165.94962, 166.95289] }),
        new element_1.Element(64, "Gd", "Gadolinium", { weight: 157.25, isotopes: [132.96133, 133.95566, 134.95245, 135.9473, 136.94502, 137.94025, 138.93813, 139.933674, 140.932126, 141.928116, 142.92675, 143.922963, 144.921713, 145.9183188, 146.9191014, 147.9181215, 148.9193481, 149.9186644, 150.920356, 151.9197995, 152.921758, 153.9208741, 154.9226305, 155.9221312, 156.9239686, 157.9241123, 158.926397, 159.9270624, 160.9296775, 161.930993, 162.9341769, 163.93583, 164.93936, 165.94146, 166.94545, 167.94808, 168.9526] }),
        new element_1.Element(65, "Tb", "Terbium", { weight: 158.925354, isotopes: [134.96476, 135.96129, 136.95602, 137.95312, 138.94833, 139.94581, 140.94145, 141.93928, 142.935137, 143.933045, 144.92882, 145.927253, 146.9240548, 147.924282, 148.9232535, 149.9236649, 150.9231096, 151.924083, 152.9234424, 153.924685, 154.923511, 155.9247552, 156.924033, 157.9254209, 158.9253547, 159.9271756, 160.9275778, 161.929495, 162.9306547, 163.93336, 164.93498, 165.93786, 166.93996, 167.9434, 168.94597, 169.94984, 170.95273] }),
        new element_1.Element(66, "Dy", "Dysprosium", { weight: 162.5, isotopes: [137.9625, 138.95959, 139.95402, 140.95128, 141.94619, 142.943994, 143.9392695, 144.937474, 145.9328445, 146.9310827, 147.927157, 148.927322, 149.9255933, 150.9261916, 151.9247253, 152.9257724, 153.9244293, 154.925759, 155.9242847, 156.9254707, 157.9244159, 158.925747, 159.9252046, 160.9269405, 161.9268056, 162.9287383, 163.9291819, 164.9317105, 165.9328139, 166.935661, 167.93713, 168.94031, 169.94239, 170.94612, 171.94846, 172.95283] }),
        new element_1.Element(67, "Ho", "Holmium", { weight: 164.930328, isotopes: [139.96859, 140.96311, 141.96001, 142.95486, 143.9521097, 144.9472674, 145.9449935, 146.9401423, 147.937744, 148.933803, 149.933498, 150.9316983, 151.931724, 152.9302064, 153.9306068, 154.929104, 155.929706, 156.928254, 157.928946, 158.9277197, 159.928737, 160.9278615, 161.9291023, 162.928741, 163.9302403, 164.9303288, 165.9322909, 166.9331385, 167.935522, 168.936878, 169.939625, 170.94147, 171.94473, 172.94702, 173.95095, 174.95362] }),
        new element_1.Element(68, "Er", "Erbium", { weight: 167.259, isotopes: [141.9701, 142.96662, 143.9607, 144.95805, 145.9524184, 146.949964, 147.944735, 148.942306, 149.937916, 150.937449, 151.935057, 152.93508, 153.9327908, 154.9332159, 155.931067, 156.931949, 157.929893, 158.9306918, 159.929077, 160.9300046, 161.9287884, 162.9300408, 163.9292088, 164.9307345, 165.9302995, 166.9320546, 167.9323767, 168.9345968, 169.9354702, 170.9380357, 171.9393619, 172.9424, 173.94423, 174.94777, 175.94994, 176.95399] }),
        new element_1.Element(69, "Tm", "Thulium", { weight: 168.934218, isotopes: [143.97628, 144.97039, 145.96684, 146.9613799, 147.958384, 148.95289, 149.95009, 150.945488, 151.944422, 152.94204, 153.94157, 154.93921, 155.938992, 156.936944, 157.93698, 158.934975, 159.935263, 160.933549, 161.934002, 162.9326592, 163.933544, 164.9324431, 165.933561, 166.9328562, 167.9341774, 168.9342179, 169.935806, 170.9364339, 171.9384055, 172.9396084, 173.942173, 174.943841, 175.947, 176.94904, 177.95264, 178.95534] }),
        new element_1.Element(70, "Yb", "Ytterbium", { weight: 173.045, isotopes: [147.96758, 148.96436, 149.95852, 150.9554, 151.95027, 152.94932, 153.946396, 154.945783, 155.942825, 156.942645, 157.9398705, 158.940055, 159.937557, 160.937907, 161.935774, 162.93634, 163.934495, 164.93527, 165.9338747, 166.934953, 167.9338896, 168.9351825, 169.9347664, 170.9363302, 171.9363859, 172.9382151, 173.9388664, 174.9412808, 175.9425764, 176.9452656, 177.946651, 178.95004, 179.95212, 180.95589] }),
        new element_1.Element(71, "Lu", "Lutetium", { weight: 174.9668, isotopes: [149.97355, 150.96768, 151.96412, 152.95875, 153.95736, 154.954321, 155.953033, 156.950127, 157.949316, 158.946636, 159.946033, 160.943572, 161.943283, 162.941179, 163.941339, 164.939407, 165.939859, 166.93827, 167.938736, 168.9376441, 169.938478, 170.937917, 171.9390891, 172.938934, 173.9403409, 174.9407752, 175.9426897, 176.9437615, 177.945958, 178.9473309, 179.949888, 180.95191, 181.95504, 182.957363, 183.96091, 184.96362] }),
        new element_1.Element(72, "Hf", "Hafnium", { weight: 178.49, isotopes: [152.97069, 153.96486, 154.96311, 155.95935, 156.95824, 157.954801, 158.953996, 159.950691, 160.950278, 161.9472148, 162.947113, 163.944371, 164.944567, 165.94218, 166.9426, 167.940568, 168.941259, 169.939609, 170.940492, 171.93945, 172.940513, 173.9400461, 174.9415092, 175.9414076, 176.9432277, 177.9437058, 178.9458232, 179.946557, 180.9491083, 181.9505612, 182.95353, 183.955446, 184.958862, 185.960897, 186.96477, 187.96685, 188.97084] }),
        new element_1.Element(73, "Ta", "Tantalum", { weight: 180.94788, isotopes: [154.97424, 155.97203, 156.96818, 157.96654, 158.963023, 159.961488, 160.958452, 161.957294, 162.954337, 163.953534, 164.950781, 165.950512, 166.948093, 167.948047, 168.946011, 169.946175, 170.944476, 171.944895, 172.94375, 173.944454, 174.943737, 175.944857, 176.9444795, 177.945678, 178.9459366, 179.9474648, 180.9479958, 181.9501519, 182.9513726, 183.954008, 184.955559, 185.958551, 186.960386, 187.963916, 188.96583, 189.96939, 190.97156, 191.97514] }),
        new element_1.Element(74, "W", "Tungsten", { weight: 183.84, isotopes: [156.97884, 157.97456, 158.97264, 159.96846, 160.9672, 161.963499, 162.962524, 163.958961, 164.958281, 165.955031, 166.954805, 167.951806, 168.951779, 169.949232, 170.949451, 171.947292, 172.947689, 173.946079, 174.946717, 175.945634, 176.946643, 177.945883, 178.947077, 179.9467108, 180.9481978, 181.94820394, 182.95022275, 183.95093092, 184.95341897, 185.9543628, 186.9571588, 187.9584862, 188.961763, 189.963091, 190.966531, 191.96817, 192.97178, 193.97367] }),
        new element_1.Element(75, "Re", "Rhenium", { weight: 186.207, isotopes: [158.98418, 159.98182, 160.97757, 161.97584, 162.97208, 163.970453, 164.967103, 165.965761, 166.962595, 167.961573, 168.958766, 169.95822, 170.955716, 171.95542, 172.953243, 173.953115, 174.951381, 175.951623, 176.950328, 177.950989, 178.949989, 179.950792, 180.950058, 181.95121, 182.9508196, 183.9525228, 184.9529545, 185.9549856, 186.9557501, 187.9581115, 188.959226, 189.961744, 190.963122, 191.966088, 192.967541, 193.97076, 194.97254, 195.9758, 196.97799, 197.9816] }),
        new element_1.Element(76, "Os", "Osmium", { weight: 190.23, isotopes: [160.98903, 161.98443, 162.98241, 163.97802, 164.9766, 165.972692, 166.971549, 167.967808, 168.967018, 169.963578, 170.963174, 171.960017, 172.959808, 173.957064, 174.956945, 175.954806, 176.954966, 177.953254, 178.953817, 179.952375, 180.953247, 181.95211, 182.953125, 183.9524885, 184.9540417, 185.953835, 186.9557474, 187.9558352, 188.9581442, 189.9584437, 190.9609264, 191.961477, 192.9641479, 193.9651772, 194.968318, 195.969641, 196.97283, 197.97441, 198.97801, 199.97984, 200.98364, 201.98595] }),
        new element_1.Element(77, "Ir", "Iridium", { weight: 192.217, isotopes: [163.99191, 164.9875, 165.98566, 166.981666, 167.979907, 168.976298, 169.974922, 170.97164, 171.970607, 172.967506, 173.966861, 174.96415, 175.96365, 176.961301, 177.961082, 178.95912, 179.959229, 180.957625, 181.958076, 182.95684, 183.957476, 184.956698, 185.957944, 186.957542, 187.958828, 188.958715, 189.9605412, 190.9605893, 191.9626002, 192.9629216, 193.9650735, 194.9659747, 195.968397, 196.969655, 197.97228, 198.973805, 199.9768, 200.97864, 201.98199, 202.98423, 203.9896] }),
        new element_1.Element(78, "Pt", "Platinum", { weight: 195.084, isotopes: [165.99486, 166.99269, 167.98813, 168.98657, 169.982496, 170.981245, 171.977351, 172.976443, 173.97282, 174.97241, 175.968938, 176.96847, 177.96565, 178.965359, 179.963032, 180.963098, 181.961172, 182.961597, 183.959915, 184.960614, 185.959351, 186.960617, 187.9593889, 188.960831, 189.9599297, 190.9616729, 191.9610387, 192.9629824, 193.9626809, 194.9647917, 195.96495209, 196.96734069, 197.9678949, 198.9705952, 199.971443, 200.974513, 201.975639, 202.97893, 203.98076, 204.98608, 205.98966] }),
        new element_1.Element(79, "Au", "Gold", { weight: 196.96657, isotopes: [168.99808, 169.99597, 170.991876, 171.989942, 172.986241, 173.984717, 174.981304, 175.98025, 176.97687, 177.976032, 178.973174, 179.972523, 180.970079, 181.969618, 182.967591, 183.967452, 184.96579, 185.965953, 186.964543, 187.965349, 188.963948, 189.964698, 190.963702, 191.964814, 192.9641373, 193.9654178, 194.9650352, 195.9665699, 196.96656879, 197.96824242, 198.96876528, 199.970756, 200.9716575, 201.973856, 202.9751544, 203.97783, 204.97985, 205.98474, 206.9884, 207.99345, 208.99735, 210.0025] }),
        new element_1.Element(80, "Hg", "Mercury", { weight: 200.592, isotopes: [171.00353, 171.99881, 172.99709, 173.992865, 174.991441, 175.987361, 176.986277, 177.982484, 178.981831, 179.97826, 180.977819, 181.974689, 182.9744448, 183.971714, 184.971899, 185.969362, 186.969814, 187.967567, 188.968195, 189.966323, 190.967157, 191.965635, 192.966653, 193.9654491, 194.966721, 195.9658326, 196.9672128, 197.9667686, 198.96828064, 199.96832659, 200.97030284, 201.9706434, 202.9728728, 203.97349398, 204.9760734, 205.977514, 206.9823, 207.985759, 208.99072, 209.99424, 210.99933, 212.00296, 213.00823, 214.012, 215.0174, 216.02132] }),
        new element_1.Element(81, "Tl", "Thallium", { weight: 204.38, isotopes: [176.000624, 176.996431, 177.99485, 178.991111, 179.990057, 180.98626, 181.985713, 182.982193, 183.981886, 184.978789, 185.978651, 186.9759063, 187.976021, 188.973588, 189.973828, 190.9717842, 191.972225, 192.970502, 193.971081, 194.969774, 195.970481, 196.969576, 197.970483, 198.969877, 199.9709633, 200.970822, 201.972102, 202.9723446, 203.9738639, 204.9744278, 205.9761106, 206.9774197, 207.982019, 208.9853594, 209.990074, 210.993475, 211.99834, 213.001915, 214.00694, 215.01064, 216.0158, 217.01966, 218.02479] }),
        new element_1.Element(82, "Pb", "Lead", { weight: 207.2, isotopes: [178.003831, 179.002201, 179.997928, 180.996653, 181.992672, 182.991872, 183.988136, 184.98761, 185.984238, 186.9839109, 187.980875, 188.980807, 189.978082, 190.978276, 191.975775, 192.976173, 193.974012, 194.974543, 195.972774, 196.9734312, 197.972034, 198.972913, 199.971819, 200.972883, 201.972152, 202.9733911, 203.973044, 204.9744822, 205.9744657, 206.9758973, 207.9766525, 208.9810905, 209.9841889, 210.9887371, 211.9918977, 212.9965629, 213.9998059, 215.00474, 216.00803, 217.01314, 218.01659, 219.02177, 220.02541] }),
        new element_1.Element(83, "Bi", "Bismuth", { weight: 208.9804, isotopes: [184.001275, 184.9976, 185.996644, 186.993147, 187.992287, 188.989195, 189.988622, 190.9857866, 191.985469, 192.98296, 193.982785, 194.9806488, 195.980667, 196.9788651, 197.979206, 198.977673, 199.978131, 200.97701, 201.977734, 202.976893, 203.9778361, 204.9773867, 205.9784993, 206.978471, 207.9797425, 208.9803991, 209.9841207, 210.9872697, 211.991286, 212.9943851, 213.998712, 215.00177, 216.006306, 217.009372, 218.014188, 219.01748, 220.02235, 221.02587, 222.03078, 223.0345, 224.03947] }),
        new element_1.Element(84, "Po", "Polonium", { weight: 209, isotopes: [186.004393, 187.003041, 187.999416, 188.998473, 189.995101, 190.9945585, 191.991336, 192.991026, 193.988186, 194.988126, 195.985526, 196.98566, 197.983389, 198.983667, 199.981799, 200.9822598, 201.980758, 202.9814161, 203.98031, 204.981203, 205.980474, 206.9815938, 207.9812461, 208.9824308, 209.9828741, 210.9866536, 211.9888684, 212.9928576, 213.9952017, 214.9994201, 216.0019152, 217.0063182, 218.0089735, 219.013614, 220.016386, 221.021228, 222.02414, 223.02907, 224.03211, 225.03707, 226.04031, 227.04539] }),
        new element_1.Element(85, "At", "Astatine", { weight: 210, isotopes: [191.004148, 192.003152, 192.999927, 193.999236, 194.9962685, 195.9958, 196.993189, 197.992784, 198.9905277, 199.990351, 200.9884171, 201.98863, 202.986943, 203.987251, 204.986076, 205.986657, 206.9858, 207.9866133, 208.9861702, 209.9871479, 210.9874966, 211.9907377, 212.992937, 213.9963721, 214.9986528, 216.0024236, 217.0047192, 218.008695, 219.0111618, 220.015433, 221.018017, 222.022494, 223.025151, 224.029749, 225.03263, 226.03716, 227.04024, 228.04475, 229.04812] }),
        new element_1.Element(86, "Rn", "Radon", { weight: 222, isotopes: [193.009708, 194.006144, 195.005422, 196.002116, 197.001585, 197.998679, 198.99839, 199.99569, 200.995628, 201.993264, 202.993388, 203.99143, 204.991719, 205.990214, 206.9907303, 207.989635, 208.990415, 209.9896891, 210.9906011, 211.9907039, 212.9938831, 213.995363, 214.9987459, 216.0002719, 217.003928, 218.0056016, 219.0094804, 220.0113941, 221.0155371, 222.0175782, 223.0218893, 224.024096, 225.028486, 226.030861, 227.035304, 228.037835, 229.042257, 230.04514, 231.04987] }),
        new element_1.Element(87, "Fr", "Francium", { weight: 223, isotopes: [199.007259, 200.006586, 201.003867, 202.00332, 203.0009407, 204.000652, 204.9985939, 205.998666, 206.996946, 207.997138, 208.995955, 209.996422, 210.995556, 211.9962257, 212.996186, 213.9989713, 215.0003418, 216.0031899, 217.0046323, 218.0075787, 219.0092524, 220.0123277, 221.0142552, 222.017552, 223.019736, 224.023398, 225.025573, 226.029566, 227.031869, 228.035823, 229.038298, 230.042416, 231.045158, 232.04937, 233.05264] }),
        new element_1.Element(88, "Ra", "Radium", { weight: 226, isotopes: [201.01271, 202.00976, 203.009304, 204.006492, 205.006268, 206.003828, 207.003799, 208.001841, 209.00199, 210.000494, 211.0008932, 211.999787, 213.000384, 214.0000997, 215.0027204, 216.0035334, 217.0063207, 218.007141, 219.0100855, 220.0110259, 221.0139177, 222.0153748, 223.0185023, 224.020212, 225.0236119, 226.0254103, 227.0291783, 228.0310707, 229.034942, 230.037055, 231.041027, 232.0434753, 233.047582, 234.050342, 235.05497] }),
        new element_1.Element(89, "Ac", "Actinium", { weight: 227, isotopes: [206.014452, 207.011966, 208.01155, 209.009495, 210.009436, 211.007732, 212.007813, 213.006609, 214.006918, 215.006475, 216.008743, 217.009344, 218.011642, 219.012421, 220.0147549, 221.015592, 222.0178442, 223.0191377, 224.0217232, 225.02323, 226.0260984, 227.0277523, 228.0310215, 229.032956, 230.036327, 231.038393, 232.042034, 233.044346, 234.048139, 235.05084, 236.054988, 237.05827] }),
        new element_1.Element(90, "Th", "Thorium", { weight: 232.0377, isotopes: [208.0179, 209.017753, 210.015094, 211.014929, 212.012988, 213.013009, 214.0115, 215.0117248, 216.011056, 217.013117, 218.013276, 219.015537, 220.015748, 221.018184, 222.018469, 223.0208119, 224.021464, 225.0239514, 226.0249034, 227.0277042, 228.0287413, 229.0317627, 230.0331341, 231.0363046, 232.0380558, 233.0415823, 234.0436014, 235.047255, 236.049657, 237.053629, 238.0565, 239.06077] }),
        new element_1.Element(91, "Pa", "Protactinium", { weight: 231.03588, isotopes: [212.023203, 213.021109, 214.020918, 215.019183, 216.019109, 217.018325, 218.020059, 219.019904, 220.021705, 221.021875, 222.023784, 223.023963, 224.0256176, 225.026131, 226.027948, 227.0288054, 228.0310517, 229.0320972, 230.034541, 231.0358842, 232.0385917, 233.0402472, 234.0433072, 235.045399, 236.048668, 237.051023, 238.054637, 239.05726, 240.06098, 241.06408] }),
        new element_1.Element(92, "U", "Uranium", { weight: 238.02891, isotopes: [217.02466, 218.023523, 219.024999, 220.02462, 221.02628, 222.026, 223.027739, 224.027605, 225.029391, 226.029339, 227.031157, 228.031371, 229.0335063, 230.0339401, 231.0362939, 232.0371563, 233.0396355, 234.0409523, 235.0439301, 236.0455682, 237.0487304, 238.0507884, 239.0542935, 240.0565934, 241.06033, 242.06293, 243.06699] }),
        new element_1.Element(93, "Np", "Neptunium", { weight: 237, isotopes: [219.03143, 220.03254, 221.03204, 222.0333, 223.03285, 224.03422, 225.033911, 226.035188, 227.034957, 228.036067, 229.036264, 230.037828, 231.038245, 232.04011, 233.040741, 234.0428953, 235.0440635, 236.04657, 237.0481736, 238.0509466, 239.0529392, 240.056165, 241.058253, 242.06164, 243.06428, 244.06785, 245.0708] }),
        new element_1.Element(94, "Pu", "Plutonium", { weight: 244, isotopes: [228.038732, 229.040144, 230.03965, 231.041102, 232.041185, 233.042998, 234.0433174, 235.045286, 236.0460581, 237.0484098, 238.0495601, 239.0521636, 240.0538138, 241.0568517, 242.0587428, 243.0620036, 244.0642053, 245.067826, 246.070205, 247.07419] }),
        new element_1.Element(95, "Am", "Americium", { weight: 243, isotopes: [230.04609, 231.04556, 232.04645, 233.04644, 234.04773, 235.047908, 236.04943, 237.049996, 238.051985, 239.0530247, 240.0553, 241.0568293, 242.0595494, 243.0613813, 244.0642851, 245.0664548, 246.069775, 247.07209, 248.07575, 249.07848] }),
        new element_1.Element(96, "Cm", "Curium", { weight: 247, isotopes: [232.04982, 233.05077, 234.05016, 235.05154, 236.051374, 237.052869, 238.053081, 239.05491, 240.0555297, 241.0576532, 242.058836, 243.0613893, 244.0627528, 245.0654915, 246.0672238, 247.0703541, 248.0723499, 249.0759548, 250.078358, 251.082286, 252.08487] }),
        new element_1.Element(97, "Bk", "Berkelium", { weight: 247, isotopes: [234.05727, 235.05658, 236.05748, 237.0571, 238.0582, 239.05824, 240.05976, 241.06016, 242.06198, 243.0630078, 244.065181, 245.0663618, 246.068673, 247.0703073, 248.073088, 249.0749877, 250.0783167, 251.080762, 252.08431, 253.08688, 254.0906] }),
        new element_1.Element(98, "Cf", "Californium", { weight: 251, isotopes: [237.062198, 238.06149, 239.06253, 240.062256, 241.06369, 242.063754, 243.06548, 244.0660008, 245.0680487, 246.0688055, 247.070965, 248.0721851, 249.0748539, 250.0764062, 251.0795886, 252.0816272, 253.0851345, 254.087324, 255.09105, 256.09344] }),
        new element_1.Element(99, "Es", "Einsteinium", { weight: 252, isotopes: [239.06823, 240.06892, 241.06856, 242.06957, 243.06951, 244.07088, 245.07125, 246.0729, 247.073622, 248.075471, 249.076411, 250.07861, 251.0799936, 252.08298, 253.0848257, 254.0880222, 255.090275, 256.0936, 257.09598, 258.09952] }),
        new element_1.Element(100, "Fm", "Fermium", { weight: 257, isotopes: [241.07421, 242.07343, 243.07446, 244.07404, 245.07535, 246.07535, 247.07694, 248.0771865, 249.0789275, 250.079521, 251.08154, 252.0824671, 253.0851846, 254.0868544, 255.089964, 256.0917745, 257.0951061, 258.09708, 259.1006, 260.10281] }),
        new element_1.Element(101, "Md", "Mendelevium", { weight: 258, isotopes: [245.08081, 246.08171, 247.08152, 248.08282, 249.08291, 250.08441, 251.084774, 252.08643, 253.087144, 254.08959, 255.0910841, 256.09389, 257.0955424, 258.0984315, 259.10051, 260.10365, 261.10583, 262.1091] }),
        new element_1.Element(102, "No", "Nobelium", { weight: 259, isotopes: [248.08655, 249.0878, 250.08756, 251.08894, 252.088967, 253.0905641, 254.090956, 255.093191, 256.0942829, 257.0968878, 258.09821, 259.10103, 260.10264, 261.1057, 262.10746, 263.11071, 264.11273] }),
        new element_1.Element(103, "Lr", "Lawrencium", { weight: 266, isotopes: [251.09418, 252.09526, 253.09509, 254.09648, 255.096562, 256.098494, 257.099418, 258.10176, 259.102902, 260.1055, 261.10688, 262.10961, 263.11136, 264.1142, 265.11619, 266.11983] }),
        new element_1.Element(104, "Rf", "Rutherfordium", { weight: 267, isotopes: [253.10044, 254.10005, 255.10127, 256.101152, 257.102918, 258.103428, 259.105596, 260.10644, 261.108773, 262.10992, 263.11249, 264.11388, 265.11668, 266.11817, 267.12179, 268.12397] }),
        new element_1.Element(105, "Db", "Dubnium", { weight: 268, isotopes: [255.10707, 256.10789, 257.10758, 258.10928, 259.109492, 260.1113, 261.11192, 262.11407, 263.11499, 264.11741, 265.11861, 266.12103, 267.12247, 268.12567, 269.12791, 270.13136] }),
        new element_1.Element(106, "Sg", "Seaborgium", { weight: 269, isotopes: [258.11298, 259.1144, 260.114384, 261.115949, 262.116337, 263.11829, 264.11893, 265.12109, 266.12198, 267.12436, 268.12539, 269.12863, 270.13043, 271.13393, 272.13589, 273.13958] }),
        new element_1.Element(107, "Bh", "Bohrium", { weight: 270, isotopes: [260.12166, 261.12145, 262.12297, 263.12292, 264.12459, 265.12491, 266.12679, 267.1275, 268.12969, 269.13042, 270.13336, 271.13526, 272.13826, 273.14024, 274.14355, 275.14567] }),
        new element_1.Element(108, "Hs", "Hassium", { weight: 270, isotopes: [263.12852, 264.128357, 265.129793, 266.130046, 267.13167, 268.13186, 269.13375, 270.13429, 271.13717, 272.1385, 273.14168, 274.1433, 275.14667, 276.14846, 277.1519] }),
        new element_1.Element(109, "Mt", "Meitnerium", { weight: 278, isotopes: [265.136, 266.13737, 267.13719, 268.13865, 269.13882, 270.14033, 271.14074, 272.14341, 273.1444, 274.14724, 275.14882, 276.15159, 277.15327, 278.15631, 279.15808] }),
        new element_1.Element(110, "Ds", "Darmstadtium", { weight: 281, isotopes: [267.14377, 268.14348, 269.144752, 270.144584, 271.14595, 272.14602, 273.14856, 274.14941, 275.15203, 276.15303, 277.15591, 278.15704, 279.1601, 280.16131, 281.16451] }),
        new element_1.Element(111, "Rg", "Roentgenium", { weight: 282, isotopes: [272.15327, 273.15313, 274.15525, 275.15594, 276.15833, 277.15907, 278.16149, 279.16272, 280.16514, 281.16636, 282.16912, 283.17054] }),
        new element_1.Element(112, "Cn", "Copernicium", { weight: 285, isotopes: [276.16141, 277.16364, 278.16416, 279.16654, 280.16715, 281.16975, 282.1705, 283.17327, 284.17416, 285.17712] }),
        new element_1.Element(113, "Nh", "Nihonium", { weight: 286, isotopes: [278.17058, 279.17095, 280.17293, 281.17348, 282.17567, 283.17657, 284.17873, 285.17973, 286.18221, 287.18339] }),
        new element_1.Element(114, "Fl", "Flerovium", { weight: 289, isotopes: [285.18364, 286.18423, 287.18678, 288.18757, 289.19042] }),
        new element_1.Element(115, "Mc", "Moscovium", { weight: 290, isotopes: [287.1907, 288.19274, 289.19363, 290.19598, 291.19707] }),
        new element_1.Element(116, "Lv", "Livermorium", { weight: 293, isotopes: [289.19816, 290.19864, 291.20108, 292.20174, 293.20449] }),
        new element_1.Element(117, "Ts", "Tennessine", { weight: 294, isotopes: [291.20553, 292.20746, 293.20824, 294.21046] }),
        new element_1.Element(118, "Og", "Oganesson", { weight: 294, isotopes: [293.21356, 294.21392, 295.21624] })
    ];
}
init();
