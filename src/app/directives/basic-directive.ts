import { Directive, OnInit, ElementRef } from "@angular/core";


@Directive ({
    selector: '[basicDirective]',
})
export class BasicDirective implements OnInit {

    constructor(private reference: ElementRef){

    }

    ngOnInit() {
        this.reference.nativeElement.style.backgroundColor = 'gray';
    }
}