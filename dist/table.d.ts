import { Element } from "./element";
/**
 * Gets a specific chemical element.
 * @param element The element symbol or atomic number.
 * @returns The chemical element.
 */
export declare function getElement(element: string | number): Element;
/**
 * The periodic table.
 */
declare class PeriodicTable {
    /**
     * Gets a specific chemical element.
     * @param element The element symbol or atomic number.
     * @returns The chemical element.
     */
    get(element: string | number): Element;
    /**
     * Tests if a chemical element is registered.
     * @param element The element symbol or atomic number.
     */
    exist(element: string | number | Element): boolean;
    /**
     * Returns the elements of the periodic table that meet the condition specified in a callback function.
     * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the periodic table.
     * @param thisArg An optional object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
     */
    filter(predicate: (ele: Element, index: number, array: Element[]) => boolean, thisArg?: any): Element[];
    /**
     * Returns the value of the first element in the periodic table where predicate is true, and undefined
     * otherwise.
     * @param predicate find calls predicate once for each element of the periodic table, in ascending
     * order, until it finds one where predicate returns true. If such an element is found, find
     * immediately returns that element value. Otherwise, find returns undefined.
     * @param thisArg If provided, it will be used as the this value for each invocation of
     * predicate. If it is not provided, undefined is used instead.
     */
    find(predicate: (ele: Element, index: number, array: Element[]) => boolean, thisArg?: any): Element;
    /**
     * Registers an element.
     * @param element The element to register.
     */
    reg(element: Element): void;
    /**
     * Gets Hydrogen (Z = 1).
     */
    get H(): Element;
    /**
     * Gets Helium (Z = 2).
     */
    get He(): Element;
    /**
     * Gets Lithium (Z = 3).
     */
    get Li(): Element;
    /**
     * Gets Beryllium (Z = 4).
     */
    get Be(): Element;
    /**
     * Gets Boron (Z = 5).
     */
    get B(): Element;
    /**
     * Gets Carbon (Z = 6).
     */
    get C(): Element;
    /**
     * Gets Nitrogen (Z = 7).
     */
    get N(): Element;
    /**
     * Gets Oxygen (Z = 8).
     */
    get O(): Element;
    /**
     * Gets Fluorine (Z = 9).
     */
    get F(): Element;
    /**
     * Gets Neon (Z = 10).
     */
    get Ne(): Element;
    /**
     * Gets Sodium (Z = 11).
     */
    get Na(): Element;
    /**
     * Gets Magnesium (Z = 12).
     */
    get Mg(): Element;
    /**
     * Gets Aluminium (Z = 13).
     */
    get Al(): Element;
    /**
     * Gets Silicon (Z = 14).
     */
    get Si(): Element;
    /**
     * Gets Phosphorus (Z = 15).
     */
    get P(): Element;
    /**
     * Gets Sulfur (Z = 16).
     */
    get S(): Element;
    /**
     * Gets Chlorine (Z = 17).
     */
    get Cl(): Element;
    /**
     * Gets Argon (Z = 18).
     */
    get Ar(): Element;
    /**
     * Gets Potassium (Z = 19).
     */
    get K(): Element;
    /**
     * Gets Calcium (Z = 20).
     */
    get Ca(): Element;
    /**
     * Gets Scandium (Z = 21).
     */
    get Sc(): Element;
    /**
     * Gets Titanium (Z = 22).
     */
    get Ti(): Element;
    /**
     * Gets Vanadium (Z = 23).
     */
    get V(): Element;
    /**
     * Gets Chromium (Z = 24).
     */
    get Cr(): Element;
    /**
     * Gets Manganese (Z = 25).
     */
    get Mn(): Element;
    /**
     * Gets Iron (Z = 26).
     */
    get Fe(): Element;
    /**
     * Gets Cobalt (Z = 27).
     */
    get Co(): Element;
    /**
     * Gets Nickel (Z = 28).
     */
    get Ni(): Element;
    /**
     * Gets Copper (Z = 29).
     */
    get Cu(): Element;
    /**
     * Gets Zinc (Z = 30).
     */
    get Zn(): Element;
    /**
     * Gets Gallium (Z = 31).
     */
    get Ga(): Element;
    /**
     * Gets Germanium (Z = 32).
     */
    get Ge(): Element;
    /**
     * Gets Arsenic (Z = 33).
     */
    get As(): Element;
    /**
     * Gets Selenium (Z = 34).
     */
    get Se(): Element;
    /**
     * Gets Bromine (Z = 35).
     */
    get Br(): Element;
    /**
     * Gets Krypton (Z = 36).
     */
    get Kr(): Element;
    /**
     * Gets Rubidium (Z = 37).
     */
    get Rb(): Element;
    /**
     * Gets Strontium (Z = 38).
     */
    get Sr(): Element;
    /**
     * Gets Yttrium (Z = 39).
     */
    get Y(): Element;
    /**
     * Gets Zirconium (Z = 40).
     */
    get Zr(): Element;
    /**
     * Gets Niobium (Z = 41).
     */
    get Nb(): Element;
    /**
     * Gets Molybdenum (Z = 42).
     */
    get Mo(): Element;
    /**
     * Gets Technetium (Z = 43).
     */
    get Tc(): Element;
    /**
     * Gets Ruthenium (Z = 44).
     */
    get Ru(): Element;
    /**
     * Gets Rhodium (Z = 45).
     */
    get Rh(): Element;
    /**
     * Gets Palladium (Z = 46).
     */
    get Pd(): Element;
    /**
     * Gets Silver (Z = 47).
     */
    get Ag(): Element;
    /**
     * Gets Cadmium (Z = 48).
     */
    get Cd(): Element;
    /**
     * Gets Indium (Z = 49).
     */
    get In(): Element;
    /**
     * Gets Tin (Z = 50).
     */
    get Sn(): Element;
    /**
     * Gets Antimony (Z = 51).
     */
    get Sb(): Element;
    /**
     * Gets Tellurium (Z = 52).
     */
    get Te(): Element;
    /**
     * Gets Iodine (Z = 53).
     */
    get I(): Element;
    /**
     * Gets Xenon (Z = 54).
     */
    get Xe(): Element;
    /**
     * Gets Caesium (Z = 55).
     */
    get Cs(): Element;
    /**
     * Gets Barium (Z = 56).
     */
    get Ba(): Element;
    /**
     * Gets Lanthanum (Z = 57).
     */
    get La(): Element;
    /**
     * Gets Cerium (Z = 58).
     */
    get Ce(): Element;
    /**
     * Gets Praseodymium (Z = 59).
     */
    get Pr(): Element;
    /**
     * Gets Neodymium (Z = 60).
     */
    get Nd(): Element;
    /**
     * Gets Promethium (Z = 61).
     */
    get Pm(): Element;
    /**
     * Gets Samarium (Z = 62).
     */
    get Sm(): Element;
    /**
     * Gets Europium (Z = 63).
     */
    get Eu(): Element;
    /**
     * Gets Gadolinium (Z = 64).
     */
    get Gd(): Element;
    /**
     * Gets Terbium (Z = 65).
     */
    get Tb(): Element;
    /**
     * Gets Dysprosium (Z = 66).
     */
    get Dy(): Element;
    /**
     * Gets Holmium (Z = 67).
     */
    get Ho(): Element;
    /**
     * Gets Erbium (Z = 68).
     */
    get Er(): Element;
    /**
     * Gets Thulium (Z = 69).
     */
    get Tm(): Element;
    /**
     * Gets Ytterbium (Z = 70).
     */
    get Yb(): Element;
    /**
     * Gets Lutetium (Z = 71).
     */
    get Lu(): Element;
    /**
     * Gets Hafnium (Z = 72).
     */
    get Hf(): Element;
    /**
     * Gets Tantalum (Z = 73).
     */
    get Ta(): Element;
    /**
     * Gets Tungsten (Z = 74).
     */
    get W(): Element;
    /**
     * Gets Rhenium (Z = 75).
     */
    get Re(): Element;
    /**
     * Gets Osmium (Z = 76).
     */
    get Os(): Element;
    /**
     * Gets Iridium (Z = 77).
     */
    get Ir(): Element;
    /**
     * Gets Platinum (Z = 78).
     */
    get Pt(): Element;
    /**
     * Gets Gold (Z = 79).
     */
    get Au(): Element;
    /**
     * Gets Mercury (Z = 80).
     */
    get Hg(): Element;
    /**
     * Gets Thallium (Z = 81).
     */
    get Tl(): Element;
    /**
     * Gets Lead (Z = 82).
     */
    get Pb(): Element;
    /**
     * Gets Bismuth (Z = 83).
     */
    get Bi(): Element;
    /**
     * Gets Polonium (Z = 84).
     */
    get Po(): Element;
    /**
     * Gets Astatine (Z = 85).
     */
    get At(): Element;
    /**
     * Gets Radon (Z = 86).
     */
    get Rn(): Element;
    /**
     * Gets Francium (Z = 87).
     */
    get Fr(): Element;
    /**
     * Gets Radium (Z = 88).
     */
    get Ra(): Element;
    /**
     * Gets Actinium (Z = 89).
     */
    get Ac(): Element;
    /**
     * Gets Thorium (Z = 90).
     */
    get Th(): Element;
    /**
     * Gets Protactinium (Z = 91).
     */
    get Pa(): Element;
    /**
     * Gets Uranium (Z = 92).
     */
    get U(): Element;
    /**
     * Gets Neptunium (Z = 93).
     */
    get Np(): Element;
    /**
     * Gets Plutonium (Z = 94).
     */
    get Pu(): Element;
    /**
     * Gets Americium (Z = 95).
     */
    get Am(): Element;
    /**
     * Gets Curium (Z = 96).
     */
    get Cm(): Element;
    /**
     * Gets Berkelium (Z = 97).
     */
    get Bk(): Element;
    /**
     * Gets Californium (Z = 98).
     */
    get Cf(): Element;
    /**
     * Gets Einsteinium (Z = 99).
     */
    get Es(): Element;
    /**
     * Gets Fermium (Z = 100).
     */
    get Fm(): Element;
    /**
     * Gets Mendelevium (Z = 101).
     */
    get Md(): Element;
    /**
     * Gets Nobelium (Z = 102).
     */
    get No(): Element;
    /**
     * Gets Lawrencium (Z = 103).
     */
    get Lr(): Element;
    /**
     * Gets Rutherfordium (Z = 104).
     */
    get Rf(): Element;
    /**
     * Gets Dubnium (Z = 105).
     */
    get Db(): Element;
    /**
     * Gets Seaborgium (Z = 106).
     */
    get Sg(): Element;
    /**
     * Gets Bohrium (Z = 107).
     */
    get Bh(): Element;
    /**
     * Gets Hassium (Z = 108).
     */
    get Hs(): Element;
    /**
     * Gets Meitnerium (Z = 109).
     */
    get Mt(): Element;
    /**
     * Gets Darmstadtium (Z = 110).
     */
    get Ds(): Element;
    /**
     * Gets Roentgenium (Z = 111).
     */
    get Rg(): Element;
    /**
     * Gets Copernicium (Z = 112).
     */
    get Cn(): Element;
    /**
     * Gets Nihonium (Z = 113).
     */
    get Nh(): Element;
    /**
     * Gets Flerovium (Z = 114).
     */
    get Fl(): Element;
    /**
     * Gets Moscovium (Z = 115).
     */
    get Mc(): Element;
    /**
     * Gets Livermorium (Z = 116).
     */
    get Lv(): Element;
    /**
     * Gets Tennessine (Z = 117).
     */
    get Ts(): Element;
    /**
     * Gets Oganesson (Z = 118).
     */
    get Og(): Element;
}
export declare const Table: PeriodicTable;
export {};
