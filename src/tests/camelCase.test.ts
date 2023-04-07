import { toCamelCase } from "../core/camelCase";

describe("Camel case converter", ()=>{
    it("Allow empty text", () =>{
        expect(toCamelCase('')).toBe('');
    })
    it("Allow capitalized word", () =>{
        expect(toCamelCase('Marcos')).toBe('Marcos');
    })
    it("Joins the capitalized words thar are separated by spaces", () =>{
        expect(toCamelCase('Marcos Rodrigo')).toBe('MarcosRodrigo');
    })
    it("Joins the capitalized words thar are separated by underscore or by hyphen", () =>{
        expect(toCamelCase('Marcos-Rodrigo_Lanuza')).toBe('MarcosRodrigoLanuza');
    })
    it("Converts the first character of one word to uppercase", () =>{
        expect(toCamelCase('marcos')).toBe('Marcos');
    })
    it("Converts the first character of each word to uppercase", () =>{
        expect(toCamelCase('marcos_rodrigo_lanuza')).toBe('MarcosRodrigoLanuza');
    })
})