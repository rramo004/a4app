import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {
    private prepositions = [ 'of', 'the'];

    transform(value: string, args?: any) {
        if (!value)
            return null;

        let words = value.split(' ');
        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            if (i > 0 &&  this.isPreposition(word)) {
                words[i] = word.toLowerCase();
            } else {
                words[i] = this.subStringWord(word);
            }
        }
        return words.join(' '); 
    }

    private subStringWord(word:string): string {
        return word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase();
    }

    private isPreposition(word:string): boolean {
       return this.prepositions.includes(word.toLowerCase())
    }
}