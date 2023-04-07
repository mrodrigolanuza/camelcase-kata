export function toCamelCase(text:string):string{
    const regex = /[\s_-]/; 
    let words = text.split(regex);

    return words.map(word => word = word.charAt(0).toUpperCase() + word.substring(1)).join('');
}