import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'letterAvatarPipe'
})

export class LetterAvatarPipe implements PipeTransform {
    value: any;
    letterColor: number;
    firstLetterOfName: any;
    firstLetterOfSurname: any;
    avatarUrl: any;

    transform(personJson: string) {
        let person = JSON.parse(personJson)
        if (person.avatar) {
            this.avatarUrl = person.avatar.url //your avatar url;
            return '<img class="avatar" src="' + this.avatarUrl + '" />';
        } else {
            // if first and last name seperated
            if (person.firstName && person.lastName) {
                this.firstLetterOfName = person.firstName.charAt(0).toUpperCase();
                this.firstLetterOfSurname = person.lastName.charAt(0).toUpperCase();

                return this.avatarGenerate(this.firstLetterOfName, this.firstLetterOfSurname);
            } else if (person.fullName) {
                if (person.fullName.indexOf(' ') !== -1) {
                    this.firstLetterOfName = person.fullName.charAt(0).toUpperCase();
                    this.firstLetterOfSurname = person.fullName.charAt(person.fullName.indexOf(' ') + 1).toUpperCase();

                    return this.avatarGenerate(this.firstLetterOfName, this.firstLetterOfSurname);
                }
            }
        }

    }

    colorGenerate(name: any) {
        switch (name) {
            case 'A':
            case 'R':
                this.letterColor = 1;
                break;
            case 'B':
            case 'S':
                this.letterColor = 2;
                break;
            case 'C':
            case 'Ş':
                this.letterColor = 3;
                break;
            case 'D':
            case 'T':
                this.letterColor = 4;
                break;
            case 'E':
            case 'U':
                this.letterColor = 5;
                break;
            case 'F':
            case 'Ü':
                this.letterColor = 6;
                break;
            case 'G':
            case 'V':
                this.letterColor = 7;
                break;
            case 'H':
            case 'Y':
                this.letterColor = 8;
                break;
            case 'I':
            case 'W':
                this.letterColor = 9;
                break;
            case 'İ':
            case 'X':
                this.letterColor = 10;
                break;
            case 'J':
            case 'Z':
                this.letterColor = 11;
                break;
            case 'K':
            case 'Ç':
                this.letterColor = 12;
                break;
            case 'L':
            case 'Q':
                this.letterColor = 13;
                break;
            case 'M':
                this.letterColor = 14;
                break;
            case 'N':
                this.letterColor = 15;
                break;
            case 'O':
                this.letterColor = 16;
                break;
            case 'Ö':
                this.letterColor = 17;
                break;
            case 'P':
                this.letterColor = 18;
                break;
            default :
                this.letterColor = Math.floor((Math.random() * 18) + 1);
                break;
        }
    }

    avatarGenerate(name: any, surname: any) {
        this.value = name + surname;
        this.colorGenerate(name);
        //this.letterColor = Math.floor((Math.random() * 18) + 1); For directly generate random color
        return '<div class="shape-avatar avatar bg-' + this.letterColor + '">' +
            '<div class="letter-avatar">' +
            this.value +
            '</div>' +
            '</div>';
    }
}