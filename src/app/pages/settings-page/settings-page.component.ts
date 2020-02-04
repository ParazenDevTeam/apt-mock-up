import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface PreferenceCategory {
	header: string;
	preferences: Preference[];
}

export interface Preference {
	title: string;
	onClick: Function;
	icon: string;
}

@Component({
	selector: 'app-settings-page',
	templateUrl: './settings-page.component.html',
	styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {

	public preferences: PreferenceCategory[] = [
		{
			header: 'Catalog',
			preferences: [
				{
					title: 'Select shops', onClick: function () {
					}, icon: 'open_in_new'
				}
			]
		}
	]
	
	constructor(router: Router) { }
	
	ngOnInit() {
	}

}
