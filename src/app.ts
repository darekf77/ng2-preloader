//#region @notForNpm

//#region @browser
    import { NgModule } from '@angular/core';
    import { Component, OnInit } from '@angular/core';


    @Component({
      selector: 'app-ng2-preloader',
      template: 'hello from ng2-preloader'
    })
    export class Ng2PreloaderComponent implements OnInit {
      constructor() { }

      ngOnInit() { }
    }

    @NgModule({
      imports: [],
      exports: [Ng2PreloaderComponent],
      declarations: [Ng2PreloaderComponent],
      providers: [],
    })
    export class Ng2PreloaderModule { }
    //#endregion

    //#region @backend
    async function start(port: number) {
      console.log('hello world from backend');
    }

    export default start;

//#endregion

//#endregion