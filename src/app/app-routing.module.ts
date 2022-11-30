import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApisComponent } from './apis/apis.component';
import { AzureFunctionsComponent } from './azure-functions/azure-functions.component';
import { BackLineamientosGenComponent } from './back-lineamientos-gen/back-lineamientos-gen.component';
import { BemComponent } from './bem/bem.component';
import { BrandComponent } from './brand/brand.component';
import { BuenasPracticasBackComponent } from './buenas-practicas-back/buenas-practicas-back.component';
import { ColorPaletComponent } from './color-palet/color-palet.component';
import { DevelopMapComponent } from './develop-map/develop-map.component';
import { EnvironmentVariablesComponent } from './environment-variables/environment-variables.component';
import { FolderDistributionComponent } from './folder-distribution/folder-distribution.component';
import { HealthComponent } from './health/health.component';
import { HomeComponent } from './home/home.component';
import { LookAndFeelComponent } from './look-and-feel/look-and-feel.component';
import { PeticionesHTTPComponent } from './peticiones-http/peticiones-http.component';
import { RecetasComponent } from './recetas/recetas.component';
import { ReglasUXComponent } from './reglas-ux/reglas-ux.component';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { TipografiaComponent } from './tipografia/tipografia.component';
import { UsoAzureComponent } from './uso-azure/uso-azure.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'tecnologia', component: TecnologiaComponent},
  { path: 'usoazure', component: UsoAzureComponent},
  { path: 'folderdistribution', component: FolderDistributionComponent},
  { path: 'recetas', component: RecetasComponent},
  { path: 'health', component: HealthComponent},
  { path: 'developmap', component: DevelopMapComponent},
  { path: 'enviromentvariables', component: EnvironmentVariablesComponent},
  { path: 'peticioneshttp', component: PeticionesHTTPComponent},
  { path: 'lineamientosGen', component: BackLineamientosGenComponent},
  { path: 'apis', component: ApisComponent},
  { path: 'backbuenaspracticas', component: BuenasPracticasBackComponent},
  { path: 'azurefunctions', component: AzureFunctionsComponent},
  { path: 'bem', component: BemComponent},
  { path: 'frontbuenaspracticas', component: BuenasPracticasBackComponent},
  { path: 'reglasux', component: ReglasUXComponent},
  { path: 'lookandfeel', component: LookAndFeelComponent},
  { path: 'colorpalet', component: ColorPaletComponent},
  { path: 'tipografia', component:  TipografiaComponent},
  { path: 'brand', component: BrandComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
