import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SurveyComponent } from './survey/survey.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet,  RouterModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'slaveryBenchmarkFront';
}
