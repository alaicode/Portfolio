import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolarSystemComponent } from './components/solar-system/solar-system.component';
import { contact, education, experience, projects, skills, certifications, techStack } from './data/portfolio.data';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, SolarSystemComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly name = 'Tokiniaina';
  protected readonly role = 'Développeur Fullstack .NET & Angular';
  protected readonly summary =
    'Je conçois des applications web modernes et robustes avec Angular au frontend et ASP.NET Core au backend.';

  protected readonly techStack = techStack;
  protected readonly skills = skills;
  protected readonly projects = projects;
  protected readonly experience = experience;
  protected readonly education = education;
  protected readonly certifications = certifications;
  protected readonly contact = contact;
}
