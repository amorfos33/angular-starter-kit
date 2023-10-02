import { Component } from '@angular/core';
import {routeAnimations} from "../core/core.module";
import { environment as env } from '../../environments/environment';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AppState} from "../core/core.state";
import {LocalStorageService} from "../core/local-storage/local-storage.service";
import {selectIsAuthenticated} from "../core/store/auth/auth.selectors";
import {authLogin, authLogout} from "../core/store/auth/auth.actions";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent {
  title = 'angular-starter-kit';
  isProd = env.production;
  envName = env.envName;
  version = env.versions.app;
  year = new Date().getFullYear();
  logo = 'assets/logo.png';
  navigation = [
    { link: 'home', label: 'Home' },
    { link: 'about', label: 'About Us' },
    { link: 'login', label: 'Log In' },
    {link: 'submit-inquiry', label: 'Submit Inquiry'}
  ];
  navigationSideMenu = [
    ...this.navigation
  ];
  isAuthenticated$: Observable<boolean> | undefined;
  projectTitleLinkOnGit: string = 'Project Github Repository';
  gitIcon: string;

  constructor(private store: Store<AppState>,
              private storageService: LocalStorageService,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer
              ) {
    // Load an icon and set its name
    this.matIconRegistry.addSvgIcon(
        'git-icon', // Icon name
        this.domSanitizer.bypassSecurityTrustResourceUrl('assets/img/icon/git.svg') // Icon source
    );

    // Set the iconName to match the registered icon
    this.gitIcon = 'git-icon';
  }

  ngOnInit(): void {
    this.storageService.testLocalStorage();

    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));

  }

  onLoginClick() {
    this.store.dispatch(authLogin());
  }

  onLogoutClick() {
    this.store.dispatch(authLogout());
  }
}
