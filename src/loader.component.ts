import { Component, OnInit } from '@angular/core';
let url = require('file!./preloader.gif');

@Component({
    selector: 'pm-pre-loader',
    template: require('./loader.component.html'),
    styles: [require('./loader.component.scss')]
})
export class PreLoaderComponent implements OnInit {
    loaderImgUlr = url;
    constructor() { }

    ngOnInit() { }

}
