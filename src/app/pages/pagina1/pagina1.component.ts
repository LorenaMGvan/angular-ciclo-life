import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit, OnChanges, DoCheck, 
                               AfterContentInit, AfterContentChecked,
                               AfterViewInit, AfterViewChecked,
                               OnDestroy {
  nombreX: string = 'Alfa!';
  segundosX: number = 0;
  timerSuscription!: Subscription;


  constructor(){
    // aqui se implementa la inyección de dependencias
    console.log('el constructor..');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngDoCheck(): void {
    console.log('DoCheck');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('el onchanges');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    // cuando el componente ya esta inicializado, y podemos acceder al DOM
    // aqui se pueden hacer peticiones http
    // obtener información de servicios

    // ****************************
    // crea un intervalo de tiempo , como un observable
    this.timerSuscription = interval(1000).subscribe( i => {
      this.segundosX = i;
      console.log(i);
    })
  }

  ngOnDestroy(): void {
    console.log('on destroy');
    this.timerSuscription.unsubscribe();
  }

  guardar() {
    console.log('guardar en el componente pagina1');
  }

}
