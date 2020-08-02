import { Directive, ElementRef, AfterViewChecked, NgZone, Input } from "@angular/core";

@Directive({
	selector: '[toggleOnCheck]'
})
export class ToggleOnCheckDirective implements AfterViewChecked {

	private _className: string
	@Input('toggleOnCheck')
	set className(value: string) {
		this._className = value === '' ? 'checked' : value;
	}
	get className(): string {
		return this._className;
	}

	constructor(private element: ElementRef, private zone: NgZone) { }

	ngAfterViewChecked(): void {
		const htmlElement = this.element.nativeElement as HTMLElement;
		htmlElement.classList.add(this.className);
		this.zone.runOutsideAngular(() => setTimeout(() => htmlElement.classList.remove(this.className), 2000));
	}
}