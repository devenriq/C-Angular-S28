import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('my-app app is running!');
  // });

  it('should add two number(num1:number, num2:number',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app= fixture.componentInstance;

    const data={valor1:12, valor2:3}
    const expectedResult= 15

    const result = app.sumar(data.valor1, data.valor2);
    expect(result).toEqual(expectedResult)
  })

  it('should rest two number(num1:number, num2:number',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app= fixture.componentInstance;

    const data={valor1:12, valor2:3}
    const expectedResult= 9

    const result = app.restar(data.valor1, data.valor2);
    expect(result).toEqual(expectedResult)
  })

  it('should multiply two number(num1:number, num2:number',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app= fixture.componentInstance;

    const data={valor1:12, valor2:3}
    const expectedResult= 36

    const result = app.multiplicar(data.valor1, data.valor2);
    expect(result).toEqual(expectedResult)
  })

  it('should divide two number(num1:number, num2:number',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app= fixture.componentInstance;

    const data={valor1:12, valor2:3}
    const expectedResult= 4

    const result = app.dividir(data.valor1, data.valor2);
    expect(result).toEqual(expectedResult)
  })

});
