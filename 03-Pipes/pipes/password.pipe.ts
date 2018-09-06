import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, varBool: boolean): any {

    let cadenaDevuelta: string;

    if(varBool)
    {
      cadenaDevuelta = "******"
    }
    else{
      cadenaDevuelta = value;
    }
    return cadenaDevuelta;
  }

}
