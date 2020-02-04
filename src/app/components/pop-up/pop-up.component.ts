import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition, animation } from '@angular/animations';

@Component({
	selector: 'app-pop-up',
	template: '<div *ngIf="this.enabled" class="wrapper" [@popUpAnim]="this.currentState"><ng-content></ng-content></div><div *ngIf="this.enabled" [@backDropAnim]="this.currentState" class="backdrop" (click)="this.close(200)"></div>',
	styleUrls: ['./pop-up.component.scss'],
	animations: [
		trigger('popUpAnim', [
			state('initial', style({
				top: '50%'
			})),
			state('final', style({
				top: '150%',
			})),
			transition('initial=>final', animate('200ms')),
			transition('final=>initial', animate('200ms'))
		]),
		trigger('backDropAnim', [
			state('initial', style({
				opacity: '1'
			})),
			state('final', style({
				opacity: '0',
				pointerEvents: 'none'
			})),
			transition('initial=>final', animate('200ms')),
			transition('final=>initial', animate('200ms'))
		])
	]
})
export class PopUpComponent implements OnInit {

	public enabled: boolean = true;
	public currentState = 'initial';

	constructor() { }

	ngOnInit() {
	}

	changeState(state: string) {
		this.currentState = state;
	}

	close(transitionDuration?: number): Promise<boolean> {
		return new Promise<boolean>(
			(res: any) => {
				this.changeState('final');
				setTimeout(() => {
					this.enabled = false;
				}, transitionDuration);
			}
		);
	}

	open(transitionDuration?: number): Promise<boolean> {
		return new Promise<boolean>(
			(res: any) => {
				this.enabled = true;
				setTimeout(() => {
					this.changeState('initial');
				}, 1);
			}
		);
	}

}
