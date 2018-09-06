import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, Form } from "@angular/forms";
import { Observable } from 'rxjs';
import { resolve, reject } from 'q';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  forma:FormGroup;

  usuario:any = {
    nombrecompleto: {
      nombre: "JJ",
      apellido: "Albiach"
    },
    correo: "prueba@gmail.com"
    // pasatiempos: ["Correr", "Dormir", "Jugar"]
  };

  constructor() 
  { 
    console.log(this.usuario);
    this.forma = new FormGroup(
      {
        'nombrecompleto' : new FormGroup({
          'nombre': new FormControl('',[Validators.required,
            Validators.minLength(3)]),
          'apellido': new FormControl('',[Validators.required ,
                                          this.noAlbiach])
        }),      
        'correo': new FormControl('',[
                                      Validators.required, 
                                      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
                                    ]),
        'pasatiempos': new FormArray([
                                      new FormControl('Correr', Validators.required)
                                      ]),
        'username': new FormControl('', Validators.required, this.userExistAsinc ),
        'password': new FormControl('', Validators.required),
        'password2': new FormControl()
      })
      //this.forma.setValue(this.usuario);

      this.forma.controls['password2'].setValidators([Validators.required,
                                                      this.noIgualPassword.bind(this.forma)]);
  
  
    this.forma.controls['username'].valueChanges
        .subscribe(data =>{
          console.log(data);
        })                                          
  }

  ngOnInit() {
  }

  guardarCambios()
  {
    console.log(this.forma.value);
    //this.forma.reset();

  }

  anyadirPasatiempo()
  {
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    );
  }

  noAlbiach(control:FormControl):{[s:string]:boolean}{
    if(control.value==="albiach")
    {
      return{
        noalbiach:true
      }
    }
    return null;
  }

  noIgualPassword(control:FormControl):{[s:string]:boolean}
  {
    let forma:any = this;
    console.log(forma);
      if(control.value !== forma.controls['password'].value)
      {
        return{
          noigual:true
        }
      }
      return null;
  }

  userExistAsinc(control:FormControl): Promise<any> | Observable<any>
  {
    let promesa = new Promise((resolve, reject) =>{
      setTimeout(()=>{
        if(control.value ==="strider"){
          resolve({existe:true})
        }
        else{
          resolve(null)
        }
      },3000)
    })

    return promesa;
  }



}
