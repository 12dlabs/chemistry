"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countInPeriod = exports.Isotope = exports.Element = void 0;
/**
 * The chemical element.
 */
var Element = /** @class */ (function () {
    /**
     * Initializes a new instance of the Element class.
     * @param number The atomic number (or proton number, symbol Z) of the chemical element. The number is one-based.
     * @param symbol The element symbol.
     * @param name The English name.
     * @param opt The optional options.
     */
    function Element(number, symbol, name, opt) {
        var _this = this;
        number = Math.round(number);
        var periodInfo = getPeriod(number);
        var period = periodInfo[0];
        if (!name || !symbol || typeof name !== "string" || typeof symbol !== "string") {
            var nameInfo = getName(number);
            if (!name || typeof name !== "string")
                name = nameInfo[0];
            if (!symbol || typeof symbol !== "string")
                symbol = nameInfo[1];
        }
        if (!opt)
            opt = opt;
        this._inner = {
            number: number,
            symbol: symbol,
            name: name,
            periodInfo: [period, periodInfo[1], getGroup(period, periodInfo[1]), undefined],
            weight: opt.weight,
            isotopes: null
        };
        this._inner.isotopes = (opt.isotopes || []).map(function (ele) {
            if (!ele)
                return null;
            if (ele instanceof Isotope)
                return ele.element === _this ? ele : null;
            if (typeof ele === "number") {
                var i = Math.round(ele);
                return new Isotope(_this, ele);
            }
            if (typeof ele.mass !== "number")
                return null;
            if (ele.element && ele.element !== _this && ele.element !== number)
                return null;
            return new Isotope(_this, ele.mass, ele.weight);
        }).filter(function (ele) { return ele; });
        switch (this._inner.periodInfo[2]) {
            case 1:
            case 2:
                this._inner.periodInfo[3] = "s";
                break;
            case 3:
                if (period < 6) {
                    this._inner.periodInfo[3] = "d";
                    break;
                }
                var count = countInPeriod(period);
                var countdown = count - periodInfo[1];
                if (countdown <= 16)
                    break;
                this._inner.periodInfo[3] = "f";
                if (period < 8 || countdown <= 30)
                    break;
                this._inner.periodInfo[3] = "g";
                if (period < 10 || countdown <= 48)
                    break;
                this._inner.periodInfo[3] = "i";
                if (period < 12 || countdown <= 70)
                    break;
                this._inner.periodInfo[3] = "j";
                if (period < 14 || countdown <= 96)
                    break;
                this._inner.periodInfo[3] = undefined;
                break;
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
                this._inner.periodInfo[3] = "d";
                break;
            case 11:
            case 12:
                this._inner.periodInfo[3] = "ds";
                break;
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
                this._inner.periodInfo[3] = "p";
                break;
            case 18:
                this._inner.periodInfo[3] = number == 2 ? "s" : "p";
                break;
        }
    }
    Object.defineProperty(Element.prototype, "symbol", {
        /**
         * Gets the element symbol.
         */
        get: function () {
            return this._inner.symbol;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "number", {
        /**
         * Gets the atomic number (or proton number, symbol Z) of the chemical element.
         * It is the one-based number of protons found in the nucleus of every atom of that element.
         */
        get: function () {
            return this._inner.number;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "name", {
        /**
         * Gets the element name in English accepted by IUPAC.
         */
        get: function () {
            return this._inner.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "period", {
        /**
         * Gets the period which is a one-based index of horizontal row in the periodic table.
         */
        get: function () {
            return this._inner.periodInfo[0];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "indexInPeriod", {
        /**
         * Gets a zero-based index of the element in the period.
         */
        get: function () {
            return this._inner.periodInfo[1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "group", {
        /**
         * Gets the IUPAC group (or family) which is a one-based index of vertical column in the periodic table.
         * Or -1 for others (N/A) which only appears in Period 6 and later.
         */
        get: function () {
            return this._inner.periodInfo[2];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "block", {
        /**
         * Gets block which is a set of elements unified by the orbitals their valence electrons or vacancies lie in.
         */
        get: function () {
            return this._inner.periodInfo[3];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "isAlkaliMetal", {
        /**
         * Gets a value indicating whether it is alkali metal.
         */
        get: function () {
            return this._inner.periodInfo[0] > 1 && this._inner.periodInfo[2] == 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "isAlkalineEarthMetal", {
        /**
         * Gets a value indicating whether it is alkaline-earth metal.
            /// </summary>
         */
        get: function () {
            return this._inner.periodInfo[2] == 2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "isInVIII", {
        /**
         * Gets a value indicating whether it is in VIII group.
         */
        get: function () {
            return this._inner.periodInfo[2] > 7 && this._inner.periodInfo[2] < 11;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "isTransition", {
        /**
         * Gets a value indicating whether it is transition element.
         */
        get: function () {
            return this._inner.periodInfo[2] > 2 && this._inner.periodInfo[2] < 13;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "isMetal", {
        /**
         * Gets a value indicating whether it is metallic element.
         */
        get: function () {
            if (this._inner.periodInfo[0] < 2 || this._inner.periodInfo[2] > 16)
                return false;
            if (this._inner.periodInfo[2] < 13 || this._inner.periodInfo[0] > 5)
                return true;
            return this._inner.periodInfo[0] + 10 >= this._inner.periodInfo[2];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "isNonMetallic", {
        /**
         * Gets a value indicating whether it is non-metallic element.
         */
        get: function () {
            return !this.isMetal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "isInBoronGroup", {
        /**
         * Gets a value indicating whether it is in boron group.
         */
        get: function () {
            return this._inner.periodInfo[2] == 13;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "isInCarbonGroup", {
        /**
         * Gets a value indicating whether it is in carbon group.
         */
        get: function () {
            return this._inner.periodInfo[2] == 14;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "isInNitrogenGroup", {
        /**
         * Gets a value indicating whether it is in nitrogen group.
         */
        get: function () {
            return this._inner.periodInfo[2] == 15;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "isChalcogen", {
        /**
         * Gets a value indicating whether it is chalcogen.
         */
        get: function () {
            return this._inner.periodInfo[2] == 16;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "isHalogen", {
        /**
         * Gets a value indicating whether it is halogen.
         */
        get: function () {
            return this._inner.periodInfo[2] == 17;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "isNoble", {
        /**
         * Gets a value indicating whether it is one of noble gases.
         */
        get: function () {
            return this._inner.periodInfo[2] == 18;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "isRadioelement", {
        /**
         * Gets a value indicating whether it is radioelement.
         */
        get: function () {
            return this._inner.number >= 84 || this._inner.number == 61 || this._inner.number == 43;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "isValid", {
        /**
         * Gets a value indicating whether this element is valid.
         */
        get: function () {
            return this._inner.periodInfo[0] > 0 && !!this._inner.symbol;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "isotopes", {
        /**
         * Gets all isotopes.
         */
        get: function () {
            return this._inner.isotopes.map(function (ele) { return ele; });
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets a specific isotope.
     * @param mass The atomic mass number (total protons and neutrons).
     * @returns The isotope.
     */
    Element.prototype.isotope = function (mass) {
        if (typeof mass !== "number" || mass < this._inner.number)
            return undefined;
        return this._inner.isotopes.find(function (ele) { return ele.mass === mass; }) || new Isotope(this, mass);
    };
    /**
     * Removes an isotope registered.
     * @param isotope The isotope instance to remove.
     */
    Element.prototype.removeIsotope = function (isotope) {
        if (!isotope)
            return;
        var arr = this._inner.isotopes.filter(function (ele) { return ele !== isotope; });
        if (arr.length !== this._inner.isotopes.length)
            this._inner.isotopes = arr;
    };
    return Element;
}());
exports.Element = Element;
/**
 * Isotope.
 */
var Isotope = /** @class */ (function () {
    /**
     * Initializes a new instance of the Isotope class.
     * @param element The chemical element.
     * @param mass The atomic mass number (total protons and neutrons).
     * @param weight The atomic weight in dalton (unified atomic mass unit).
     */
    function Isotope(element, mass, weight) {
        if (typeof mass !== "number")
            mass = 0;
        else
            mass = Math.round(mass);
        if (!element || !(element instanceof Element)) {
            if (mass < 0)
                mass = 0;
        }
        else {
            if (mass < element.number)
                mass = element.number;
        }
        if (mass < 0)
            mass = (element || { number: 0 }).number || 0;
        if (weight === true)
            weight = mass;
        else if (typeof weight !== "number")
            weight = undefined;
        this._inner = {
            element: element,
            mass: Math.round(mass),
            weight: weight
        };
    }
    Object.defineProperty(Isotope.prototype, "element", {
        /**
         * Gets the chemical element.
         */
        get: function () {
            return this._inner.element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Isotope.prototype, "atomicNumber", {
        /**
         * Gets the atomic number (or proton number, symbol Z) of the chemical element.
         * It is the one-based number of protons found in the nucleus of every atom of that element.
         */
        get: function () {
            var ele = this._inner.element;
            if (!ele || typeof ele.number !== "number")
                return 0;
            return ele.number;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Isotope.prototype, "elementSymbol", {
        /**
         * Gets the element symbol.
         */
        get: function () {
            var ele = this._inner.element;
            if (!ele || typeof ele.symbol !== "string")
                return "?";
            return ele.symbol;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Isotope.prototype, "mass", {
        /**
         * Gets the atomic mass number (total protons and neutrons).
         */
        get: function () {
            return this._inner.mass;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Isotope.prototype, "weight", {
        /**
         * Gets the atomic weight in dalton (unified atomic mass unit).
         */
        get: function () {
            return this._inner.weight;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Isotope.prototype, "hasWeight", {
        /**
         * Gets a value indicating whether has atomic weight information.
         */
        get: function () {
            return typeof this._inner.weight == "number";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Isotope.prototype, "neutrons", {
        /**
         * Gets the numbers of neutron.
         */
        get: function () {
            var num = this._inner.mass - this.atomicNumber;
            if (num < 0)
                num = 0;
            return num;
        },
        enumerable: false,
        configurable: true
    });
    return Isotope;
}());
exports.Isotope = Isotope;
/**
 * Gets the element count in a specific period.
 * @param period The period which is a one-based index of horizontal row in the periodic table.
 * @returns The count in this period; or -1, if the period is out of range.
 */
function countInPeriod(period) {
    if (period < 1)
        return -1;
    var count = 2;
    var diff = 2;
    for (var i = 1; i < period; i++) {
        diff += 4;
        count += diff;
        i++;
        if (i >= period)
            break;
    }
    return count > 0 ? count : -1;
}
exports.countInPeriod = countInPeriod;
var periodNumbers = [2, 10, 18, 36, 54, 86, 118, 168, 218, 290, 362, 460, 558, 686, 814, 976, 1138, 1338, 1538];
var latinNumbers = ["Nil", "Un", "Bi", "Tri", "Quad", "Pent", "Hex", "Sept", "Oct", "Enn"];
function getPeriod(number) {
    if (number < 1)
        return [-1, -1];
    if (number <= 2)
        return [1, number - 1];
    for (var i = 1; i < periodNumbers.length; i++) {
        if (number > periodNumbers[i])
            continue;
        var j = number - periodNumbers[i - 1] - 1;
        return [i + 1, j];
    }
    var diff = 42;
    var count = 242;
    var max = 1780;
    for (var i = 20; max > 0; i++) {
        if (number <= max)
            return [i, number - max + count - 1];
        max += count;
        if (number <= max)
            return [i, number - max + count - 1];
        count += diff;
        max += count;
    }
    return [-1, -1];
}
function getGroup(period, index) {
    if (period < 1 || index < 0)
        return -1;
    if (index == 0)
        return 1;
    if (period == 1)
        return 18;
    if (index == 1)
        return 2;
    if (period < 4)
        return index + 11;
    if (period < 6)
        return index + 1;
    var i = 18 - countInPeriod(period) + index + 1;
    return i < 3 ? 3 : i;
}
function getName(number) {
    if (number < 0)
        return ["?", "?"];
    var s = number.toString();
    var arr = [];
    for (var i = 0; i < s.length; i++) {
        var c = s[i];
        var j = parseInt(c);
        c = latinNumbers[j];
        if (i > 0)
            c = c.toLowerCase();
        arr.push(c);
    }
    var name = arr.join("");
    name += name[name.length - 1] === "i" ? "um" : "ium";
    return [arr.map(function (ele) { return ele[0]; }).join(""), name];
}
