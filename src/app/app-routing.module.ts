import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TechstackComponent} from './techstack/techstack.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {PortfolioItemComponent} from './portfolio/portfolio-item/portfolio-item.component';

const routes: Routes = [

	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'About',
		component: AboutComponent
	},
	{
		path : 'TechStack',
		component: TechstackComponent
	},
	{
		path: 'Portfolio',
		component: PortfolioComponent
	},
	{
		path: 'Projects/:id',
		component: PortfolioItemComponent
	},
	{
		path: 'Contact',
		component: ContactComponent
	}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
