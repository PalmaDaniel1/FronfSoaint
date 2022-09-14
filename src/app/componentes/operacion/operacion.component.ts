import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OperacionesService } from 'src/app/operaciones/operaciones.service';
import { ResponseDto } from 'src/app/other/response';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-operacion',
  templateUrl: './operacion.component.html',
  styleUrls: ['./operacion.component.scss']
})
export class OperacionComponent implements OnInit {
  id: any;
  numero_1: any;
  numero_2: any;
  operacion: any;
  resultado: any;

  constructor(
    public operacionesService: OperacionesService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  public __response: ResponseDto;

  Registrar(){
    var oper = {id:this.id, numero_1:this.numero_1, numero_2:this.numero_2, operacion:this.operacion};
    console.log(oper);
    this.operacionesService.postOperacion(oper).subscribe(
      data => {
        this.__response = data;
        Swal.fire("Formulario", "Operacion Enviada Correctamente",
        'success');
        console.log(this.__response);
      }
    )
  }

}
