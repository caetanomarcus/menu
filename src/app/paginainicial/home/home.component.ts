import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';

interface IMenuItem {
  name: string,
  subItems: {
    name: string;
    path: string;
  }[],
  isOpen: boolean
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DropdownModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

menuItems: IMenuItem[] = [
  {
    name: "All Sourses",
    subItems: [
      {
        name: "Sofia",
        path: ""
      },
      {
        name: "Students",
        path: "/alunos"
      },
    ],
    isOpen: false
  },
  {
    name: "Calendars",
    subItems: [

    ],
    isOpen: false
  },
  {
    name: "Registration System",
    subItems: [
      {
        name: "Students",
        path: "/alunos"
      },
      {
        name: "Documents",
        path: ""
      },
      {
        name: "Fees",
        path: ""
      },

    ],
    isOpen: false
  },
  {
    name: "Financial",
    subItems: [

    ],
    isOpen: false
  }
]

constructor(private router: Router){

}


visualizar(path: string){
  this.router.navigate([path])
}


registrationSystem:boolean = false;

clickOpenMenu(name: string){
  //pego o index do menu que tem esse nome
  const index = this.menuItems.findIndex(element => element.name === name)
  //mudo a variavel do menu que tem esse nome
  this.menuItems[index].isOpen = !this.menuItems[index].isOpen

  //se eu quiser fechar todas as outras, basta colocar a condicao de n ser a que abri e  setár elas pra false
  this.menuItems.forEach(item => {
    if(item.name !== name) {
      item.isOpen = false;
    }
  })
}

ocultMenus(){
  this.menuItems.forEach(item => item.isOpen = false)
}



}
