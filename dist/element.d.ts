/**
 * The chemical element.
 */
export declare class Element {
    private _inner;
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
            [property: string]: any;
        } | number)[];
    });
    /**
     * Gets the element symbol.
     */
    get symbol(): string;
    /**
     * Gets the atomic number (or proton number, symbol Z) of the chemical element.
     * It is the one-based number of protons found in the nucleus of every atom of that element.
     */
    get number(): number;
    /**
     * Gets the element name in English accepted by IUPAC.
     */
    get name(): string;
    /**
     * Gets the period which is a one-based index of horizontal row in the periodic table.
     */
    get period(): number;
    /**
     * Gets a zero-based index of the element in the period.
     */
    get indexInPeriod(): number;
    /**
     * Gets the IUPAC group (or family) which is a one-based index of vertical column in the periodic table.
     * Or -1 for others (N/A) which only appears in Period 6 and later.
     */
    get group(): number;
    /**
     * Gets block which is a set of elements unified by the orbitals their valence electrons or vacancies lie in.
     */
    get block(): string;
    /**
     * Gets a value indicating whether it is alkali metal.
     */
    get isAlkaliMetal(): boolean;
    /**
     * Gets a value indicating whether it is alkaline-earth metal.
        /// </summary>
     */
    get isAlkalineEarthMetal(): boolean;
    /**
     * Gets a value indicating whether it is in VIII group.
     */
    get isInVIII(): boolean;
    /**
     * Gets a value indicating whether it is transition element.
     */
    get isTransition(): boolean;
    /**
     * Gets a value indicating whether it is metallic element.
     */
    get isMetal(): boolean;
    /**
     * Gets a value indicating whether it is non-metallic element.
     */
    get isNonMetallic(): boolean;
    /**
     * Gets a value indicating whether it is in boron group.
     */
    get isInBoronGroup(): boolean;
    /**
     * Gets a value indicating whether it is in carbon group.
     */
    get isInCarbonGroup(): boolean;
    /**
     * Gets a value indicating whether it is in nitrogen group.
     */
    get isInNitrogenGroup(): boolean;
    /**
     * Gets a value indicating whether it is chalcogen.
     */
    get isChalcogen(): boolean;
    /**
     * Gets a value indicating whether it is halogen.
     */
    get isHalogen(): boolean;
    /**
     * Gets a value indicating whether it is one of noble gases.
     */
    get isNoble(): boolean;
    /**
     * Gets a value indicating whether it is radioelement.
     */
    get isRadioelement(): boolean;
    /**
     * Gets a value indicating whether this element is valid.
     */
    get isValid(): boolean;
    /**
     * Gets all isotopes.
     */
    get isotopes(): Isotope[];
    /**
     * Gets a specific isotope.
     * @param mass The atomic mass number (total protons and neutrons).
     * @returns The isotope.
     */
    isotope(mass: number): Isotope;
    /**
     * Removes an isotope registered.
     * @param isotope The isotope instance to remove.
     */
    removeIsotope(isotope: Isotope): void;
}
/**
 * Isotope.
 */
export declare class Isotope {
    private _inner;
    /**
     * Initializes a new instance of the Isotope class.
     * @param element The chemical element.
     * @param mass The atomic mass number (total protons and neutrons).
     * @param weight The atomic weight in dalton (unified atomic mass unit).
     */
    constructor(element: Element, mass: number, weight?: number | boolean);
    /**
     * Gets the chemical element.
     */
    get element(): Element;
    /**
     * Gets the atomic number (or proton number, symbol Z) of the chemical element.
     * It is the one-based number of protons found in the nucleus of every atom of that element.
     */
    get atomicNumber(): number;
    /**
     * Gets the element symbol.
     */
    get elementSymbol(): string;
    /**
     * Gets the atomic mass number (total protons and neutrons).
     */
    get mass(): number;
    /**
     * Gets the atomic weight in dalton (unified atomic mass unit).
     */
    get weight(): number;
    /**
     * Gets a value indicating whether has atomic weight information.
     */
    get hasWeight(): boolean;
    /**
     * Gets the numbers of neutron.
     */
    get neutrons(): number;
}
/**
 * Gets the element count in a specific period.
 * @param period The period which is a one-based index of horizontal row in the periodic table.
 * @returns The count in this period; or -1, if the period is out of range.
 */
export declare function countInPeriod(period: number): number;
