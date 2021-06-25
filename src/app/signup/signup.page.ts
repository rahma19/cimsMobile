import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { MessageService } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DataService } from '../data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  providers:[MessageService]
})
export class SignupPage implements OnInit {
 
  cod:any="";
  code=Math.floor(Math.random() * 999999) + 100000;
  password?:any="";
  date_nai_benef:any="";
 mail:any;
  pren_pere_benef?:any="";
  sexe?:any="";
  pren_mere_benef?:any="";
  codhop?:any="";
  mfisc?:any="";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  hopitals:any[];
  test: boolean=true;
  Patient: FormGroup;
    constructor(private formBuilder: FormBuilder,private dataService: DataService,private router:Router,private toastCntrl:ToastController,private http:HttpClient,private messageService:MessageService) { }

    ngOnInit() {
      this.Patient = this.formBuilder.group({
        img: [null],
        cod_benef: ['', Validators.required],
        nom_pren_benef: ['', Validators.required],
        pren_benef: ['', Validators.required],
        sexe_benef: ['', Validators.required],
        date_nai_benef: ['', Validators.required],
        cod_hop: ['', Validators.required],
        email: ['',Validators.required], //, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
        tel_benef:['', [Validators.required,Validators.minLength(8)]], //, Validators.pattern("[0-9]{8}")
        code: ['', Validators.required]
      });
      this.dataService.getAllHopitals().subscribe(data=>{
        console.log(data['data']);
        this.hopitals=data['data'];
        console.log(this.hopitals);
      })
    }

    public get nom_pren_benef()
    { return this.Patient.get('nom_pren_benef'); }
    
    public get pren_benef()
    { return this.Patient.get('pren_benef'); }
    
    public get email()
    { return this.Patient.get('email'); }
    
    public get tel_benef()
    { return this.Patient.get('tel_benef'); }
    
    public get cod_benef()
    { return this.Patient.get('cod_benef'); }
    
    public get sexe_benef()
    { return this.Patient.get('sexe_benef'); }
    
    public get dat_nai_benef()
    { return this.Patient.get('date_nai_benef'); }
    
    public get cod_hop()
    { return this.Patient.get('cod_hop'); }
    
    public get img()
    { return this.Patient.get('img'); }
    

    notify(subject,code){
      this.mail=this.Patient.get('email').value;
      let ch=this.Patient.get('email').value;
      if(this.Patient.get('email').value!="")
      {
        this.test=false;
      let object={"to":ch,"sub":"Confirmation","text":this.Patient.get('code').value+subject};
      return this.http.post(environment.api+"users/mailing", object).subscribe((res:any) => {
        console.log("success");
        console.log(code);
        this.openToast('email envoyée avec succées');
       },
         error => {
          this.openToast('Erreur');
          console.log("error");
      });
    }
    else{
      this.openToast('Veuillez saisir votre email');
    }
    }

    async openToast(msg) {
      const toast = await this.toastCntrl.create({
        message:msg,
        duration: 2000,
        animated:true,
        color:"warning"
      });
      toast.present();
    }
    envoiCode(){
      this.code=Math.floor(Math.random() * 999999) + 100000;
      console.log(this.code);
      this.notify('est le code de confirmation de votre nouveau compte sur CIMS ',this.code);
    }
    onFileSelect(event) {
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.Patient.get('img').setValue(file);
  
      }
    }
    onUpload(event) {
      //this.img.push(event);
      console.log(event);
  
    }
    Submit(){
      console.log(this.code);
      if (this.code == this.Patient.get('code').value) {
        let codbenef = Math.floor(Math.random() * 999999) + 100000 + this.Patient.get('nom_pren_benef').value;
        console.log(this.Patient.get('date_nai_benef').value);
      let dt=new Date(this.Patient.get('date_nai_benef').value);
      let month=dt.getMonth();
      let date =dt.getDate()+"-"+month+"-"+dt.getFullYear();
        date=this.Patient.get('date_nai_benef').value;
        const formData = new FormData();
        formData.append('img', this.Patient.get('img').value);
        formData.append('cod_benef', codbenef);
        formData.append('cod_hop', this.Patient.get('cod_hop').value);
        formData.append('nom_pren_benef', this.Patient.get('nom_pren_benef').value);
        formData.append('pren_benef', this.Patient.get('pren_benef').value);
        formData.append('sexe_benef', this.Patient.get('sexe_benef').value);
        formData.append('date_nai_benef', date);
        formData.append('email', this.Patient.get('email').value);
        formData.append('tel_benef', this.Patient.get('tel_benef').value);
        formData.append('code', this.Patient.get('code').value);
        this.http.post(environment.api + "auth/signupPatientanc", formData).subscribe((res) => {
          this.messageService.add({ severity: 'success', summary: 'Message', detail: 'Succes' });
          //this.notify("voici votre index",res['user']._id);
          this.notify("voici votre index", codbenef);
          this.router.navigate(['/login']);
        },
       error => {
        this.openToast('Erreur');
      });
    } else {
      this.openToast('Code invalide');
    }}

}
