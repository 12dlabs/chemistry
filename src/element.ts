/**
 * The chemical element.
 */
export class Element {
    private _inner: {
        number: number;
        symbol: string;
        name: string;
        periodInfo: [number, number, number, string | undefined];
        isotopes: Isotope[] | undefined;
        weight: number | undefined;
    };

    /**
     * Initializes a new instance of the Element class.
     * @param number The atomic number (or proton number, symbol Z) of the chemical element. The number is one-based.
     * @param symbol The element symbol.
     * @param name The English name.
     * @param opt The optional options.
     */
    constructor(number: number, symbol: string, name: string, opt?: {
        weight?: number;
        isotopes?: ({
            mass?: number;
            weight?: number;
            [property: string]: any,
        } | number)[]
    }) {
        number = Math.round(number);
        let periodInfo = getPeriod(number);
        let period = periodInfo[0];
        if (!name || !symbol || typeof name !== "string" || typeof symbol !== "string") {
            let nameInfo = getName(number);
            if (!name || typeof name !== "string") name = nameInfo[0];
            if (!symbol || typeof symbol !== "string") symbol = nameInfo[1];
        }

        if (!opt) opt = opt;
        this._inner = {
            number,
            symbol,
            name,
            periodInfo: [period, periodInfo[1], getGroup(period, periodInfo[1]), undefined],
            weight: opt.weight,
            isotopes: null
        };
        this._inner.isotopes = (opt.isotopes || []).map(ele => {
            if (!ele)
                return null;
            if (ele instanceof Isotope)
                return ele.element === this ? ele : null;
            if (typeof ele === "number") {
                let i = Math.round(ele);
                return new Isotope(this, ele);
            }

            if (typeof ele.mass !== "number")
                return null;
            if (ele.element && ele.element !== this && ele.element !== number)
                return null;
            return new Isotope(this, ele.mass, ele.weight);
        }).filter(ele => ele);
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

                let count = countInPeriod(period);
                let countdown = count - periodInfo[1];
                if (countdown <= 16) break;
                this._inner.periodInfo[3] = "f";
                if (period < 8 || countdown <= 30) break;
                this._inner.periodInfo[3] = "g";
                if (period < 10 || countdown <= 48) break;
                this._inner.periodInfo[3] = "i";
                if (period < 12 || countdown <= 70) break;
                this._inner.periodInfo[3] = "j";
                if (period < 14 || countdown <= 96) break;
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

    /**
     * Gets the element symbol.
     */
    public get symbol() {
        return this._inner.symbol;
    }

    /**
     * Gets the atomic number (or proton number, symbol Z) of the chemical element.
     * It is the one-based number of protons found in the nucleus of every atom of that element.
     */
    public get number() {
        return this._inner.number;
    }

    /**
     * Gets the element name in English accepted by IUPAC.
     */
    public get name() {
        return this._inner.name;
    }

    /**
     * Gets the period which is a one-based index of horizontal row in the periodic table.
     */
    public get period() {
        return this._inner.periodInfo[0];
    }

    /**
     * Gets a zero-based index of the element in the period.
     */
    public get indexInPeriod() {
        return this._inner.periodInfo[1];
    }

    /**
     * Gets the IUPAC group (or family) which is a one-based index of vertical column in the periodic table.
     * Or -1 for others (N/A) which only appears in Period 6 and later.
     */
    public get group() {
        return this._inner.periodInfo[2];
    }

    /**
     * Gets block which is a set of elements unified by the orbitals their valence electrons or vacancies lie in.
     */
    public get block() {
        return this._inner.periodInfo[3];
    }

    /**
     * Gets a value indicating whether it is alkali metal.
     */
    public get isAlkaliMetal() {
        return this._inner.periodInfo[0] > 1 && this._inner.periodInfo[2] == 1;
    }

    /**
     * Gets a value indicating whether it is alkaline-earth metal.
        /// </summary>
     */
    public get isAlkalineEarthMetal() {
        return this._inner.periodInfo[2] == 2;
    }

    /**
     * Gets a value indicating whether it is in VIII group.
     */
    public get isInVIII() {
        return this._inner.periodInfo[2] > 7 && this._inner.periodInfo[2] < 11;
    }

    /**
     * Gets a value indicating whether it is transition element.
     */
    public get isTransition() {
        return this._inner.periodInfo[2] > 2 && this._inner.periodInfo[2] < 13;
    }

    /**
     * Gets a value indicating whether it is metallic element.
     */
    public get isMetal() {
        if (this._inner.periodInfo[0] < 2 || this._inner.periodInfo[2] > 16) return false;
        if (this._inner.periodInfo[2] < 13 || this._inner.periodInfo[0] > 5) return true;
        return this._inner.periodInfo[0] + 10 >= this._inner.periodInfo[2];
    }

    /**
     * Gets a value indicating whether it is non-metallic element.
     */
    public get isNonMetallic() {
        return !this.isMetal;
    }

    /**
     * Gets a value indicating whether it is in boron group.
     */
    public get isInBoronGroup() {
        return this._inner.periodInfo[2] == 13;
    }

    /**
     * Gets a value indicating whether it is in carbon group.
     */
    public get isInCarbonGroup() {
        return this._inner.periodInfo[2] == 14;
    }

    /**
     * Gets a value indicating whether it is in nitrogen group.
     */
    public get isInNitrogenGroup() {
        return this._inner.periodInfo[2] == 15;
    }

    /**
     * Gets a value indicating whether it is chalcogen.
     */
    public get isChalcogen() {
        return this._inner.periodInfo[2] == 16;
    }

    /**
     * Gets a value indicating whether it is halogen.
     */
    public get isHalogen() {
        return this._inner.periodInfo[2] == 17;
    }

    /**
     * Gets a value indicating whether it is one of noble gases.
     */
    public get isNoble() {
        return this._inner.periodInfo[2] == 18;
    }

    /**
     * Gets a value indicating whether it is radioelement.
     */
    public get isRadioelement() {
        return this._inner.number >= 84 || this._inner.number == 61 || this._inner.number == 43;
    }

    /**
     * Gets a value indicating whether this element is valid.
     */
    public get isValid() {
        return this._inner.periodInfo[0] > 0 && !!this._inner.symbol;
    }

    /**
     * Gets all isotopes.
     */
    public get isotopes() {
        return this._inner.isotopes.map(ele => ele);
    }

    /**
     * Gets a specific isotope.
     * @param mass The atomic mass number (total protons and neutrons).
     * @returns The isotope.
     */
    public isotope(mass: number) {
        if (typeof mass !== "number" || mass < this._inner.number) return undefined;
        return this._inner.isotopes.find(ele => ele.mass === mass) || new Isotope(this, mass);
    }

    /**
     * Removes an isotope registered.
     * @param isotope The isotope instance to remove.
     */
    public removeIsotope(isotope: Isotope) {
        if (!isotope) return;
        let arr = this._inner.isotopes.filter(ele => ele !== isotope);
        if (arr.length !== this._inner.isotopes.length) this._inner.isotopes = arr;
    }
}

/**
 * Isotope.
 */
export class Isotope {
    private _inner: {
        element: Element;
        mass: number;
        weight: number | undefined;
    }

    /**
     * Initializes a new instance of the Isotope class.
     * @param element The chemical element.
     * @param mass The atomic mass number (total protons and neutrons).
     * @param weight The atomic weight in dalton (unified atomic mass unit).
     */
    public constructor(element: Element, mass: number, weight?: number | boolean) {
        if (typeof mass !== "number") mass = 0;
        else mass = Math.round(mass);
        if (!element || !(element instanceof Element)) {
            if (mass < 0) mass = 0;
        } else {
            if (mass < element.number) mass = element.number;
        }
        if (mass < 0) mass = (element || { number: 0 }).number || 0;
        if (weight === true) weight = mass;
        else if (typeof weight !== "number") weight = undefined;
        this._inner = {
            element,
            mass: Math.round(mass),
            weight: weight as any
        };
    }

    /**
     * Gets the chemical element.
     */
    public get element() {
        return this._inner.element;
    }

    /**
     * Gets the atomic number (or proton number, symbol Z) of the chemical element.
     * It is the one-based number of protons found in the nucleus of every atom of that element.
     */
    public get atomicNumber() {
        let ele = this._inner.element;
        if (!ele || typeof ele.number !== "number") return 0;
        return ele.number;
    }

    /**
     * Gets the element symbol.
     */
    public get elementSymbol() {
        let ele = this._inner.element;
        if (!ele || typeof ele.symbol !== "string") return "?";
        return ele.symbol;
    }

    /**
     * Gets the atomic mass number (total protons and neutrons).
     */
    public get mass() {
        return this._inner.mass;
    }

    /**
     * Gets the atomic weight in dalton (unified atomic mass unit).
     */
    public get weight() {
        return this._inner.weight;
    }

    /**
     * Gets a value indicating whether has atomic weight information.
     */
    public get hasWeight() {
        return typeof this._inner.weight == "number";
    }

    /**
     * Gets the numbers of neutron.
     */
    public get neutrons() {
        let num = this._inner.mass - this.atomicNumber;
        if (num < 0) num = 0;
        return num;
    }
}

/**
 * Gets the element count in a specific period.
 * @param period The period which is a one-based index of horizontal row in the periodic table.
 * @returns The count in this period; or -1, if the period is out of range.
 */
export function countInPeriod(period: number)
{
    if (period < 1) return -1;
    var count = 2;
    var diff = 2;
    for (var i = 1; i < period; i++)
    {
        diff += 4;
        count += diff;
        i++;
        if (i >= period) break;
    }

    return count > 0 ? count : -1;
}

const periodNumbers = [ 2, 10, 18, 36, 54, 86, 118, 168, 218, 290, 362, 460, 558, 686, 814, 976, 1138, 1338, 1538 ];
const latinNumbers = [ "Nil", "Un", "Bi", "Tri", "Quad", "Pent", "Hex", "Sept", "Oct", "Enn"];

function getPeriod(number: number): [number, number] {
    if (number < 1) return [-1, -1];
    if (number <= 2) return [1, number - 1];
    for (var i = 1; i < periodNumbers.length; i++)
    {
        if (number > periodNumbers[i]) continue;
        var j = number - periodNumbers[i - 1] - 1;
        return [i + 1, j];
    }

    var diff = 42;
    var count = 242;
    var max = 1780;
    for (var i = 20; max > 0; i++)
    {
        if (number <= max) return [i, number - max + count - 1];
        max += count;
        if (number <= max) return [i, number - max + count - 1];
        count += diff;
        max += count;
    }

    return [-1, -1];
}

function getGroup(period: number, index: number) {
    if (period < 1 || index < 0) return -1;
    if (index == 0) return 1;
    if (period == 1) return 18;
    if (index == 1) return 2;
    if (period < 4) return index + 11;
    if (period < 6) return index + 1;
    var i = 18 - countInPeriod(period) + index + 1;
    return i < 3 ? 3 : i;
}

function getName(number: number): [string, string] {
    if (number < 0) return ["?", "?"];
    var s = number.toString();
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        let j = parseInt(c);
        c = latinNumbers[j];
        if (i > 0) c = c.toLowerCase();
        arr.push(c);
    }

    let name = arr.join("");
    name += name[name.length - 1] === "i" ? "um" : "ium";
    return [arr.map(ele => ele[0]).join(""), name]
}
