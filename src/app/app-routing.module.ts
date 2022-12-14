import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperacionComponent } from './componentes/operacion/operacion.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent,
    children:[{
      path: '', component: OperacionComponent,
    }
  ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
