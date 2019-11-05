import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
	selector: 'home',
	templateUrl: './home.component.html'
})

export class homeComponent{
	public titulo = 'home';
	public parametro;
	 public route;

	 
	

	constructor(
		private _route: ActivatedRoute,
		private _router: Router
		){}


	ngOnInit(){
		this._route.params.forEach((params: Params)=>{
			this.parametro = params['page'];
		});
	}
		redirigirDos(){
		this._router.navigate(['/login'])
	}
			

		

	}