import { Component, AfterViewInit, OnDestroy, HostListener, signal, computed, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  profile, skillCategories, experience, education, contact, stats, languages, softSkills,
  techLogos, projects, certifications, sectionDescriptions,
} from './data/portfolio.data';
import { translations, type Lang } from './data/translations';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App implements AfterViewInit, OnDestroy {
  protected readonly profile = profile;
  protected readonly skillCategories = skillCategories;
  protected readonly experience = experience;
  protected readonly education = education;
  protected readonly contact = contact;
  protected readonly stats = stats;
  protected readonly languages = languages;
  protected readonly softSkills = softSkills;
  protected readonly techLogos = techLogos;
  protected readonly projects = projects;
  protected readonly certifications = certifications;
  protected readonly sectionDescriptions = sectionDescriptions;

  // Language
  readonly lang = signal<Lang>('en');
  readonly ui = computed(() => translations[this.lang()]);

  readonly activeSection = signal('hero');
  readonly isNavScrolled = signal(false);
  readonly expandedExp = signal<number | null>(null);
  readonly activeSkillCat = signal(0);
  readonly emailCopied = signal(false);
  readonly menuOpen = signal(false);

  private sectionObserver?: IntersectionObserver;
  private revealObserver?: IntersectionObserver;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  get currentSkills(): string[] {
    return this.skillCategories[this.activeSkillCat()].items;
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isNavScrolled.set(window.scrollY > 60);
    }
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = (entry.target as HTMLElement).id;
            if (id) this.activeSection.set(id);
          }
        });
      },
      { threshold: 0.35 },
    );

    this.revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    );

    document.querySelectorAll('section[id]').forEach((s) => this.sectionObserver!.observe(s));
    document.querySelectorAll('.reveal').forEach((el) => this.revealObserver!.observe(el));
  }

  ngOnDestroy(): void {
    this.sectionObserver?.disconnect();
    this.revealObserver?.disconnect();
  }

  scrollTo(id: string): void {
    if (isPlatformBrowser(this.platformId)) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      this.menuOpen.set(false);
    }
  }

  toggleExp(index: number): void {
    this.expandedExp.set(this.expandedExp() === index ? null : index);
  }

  setSkillCat(index: number): void {
    this.activeSkillCat.set(index);
  }

  async copyEmail(): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) return;
    try {
      await navigator.clipboard.writeText(this.contact.email);
      this.emailCopied.set(true);
      setTimeout(() => this.emailCopied.set(false), 2200);
    } catch {
      // Clipboard API unavailable
    }
  }

  toggleMenu(): void {
    this.menuOpen.set(!this.menuOpen());
  }

  toggleLang(): void {
    this.lang.set(this.lang() === 'en' ? 'fr' : 'en');
  }

  onImgError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img) {
      img.style.display = 'none';
    }
  }
}
