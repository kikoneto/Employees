import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Store } from '@ngrx/store';
import { selectAccessToken } from 'src/app/state/users/users.selector';
import { getAccessToken, removeAccessToken } from 'src/app/state/users/users.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  accessToken: string | null = null;
  constructor(private store: Store, private router: Router, private service: AuthService) { }

  ngOnInit(): void {
    this.store.dispatch(getAccessToken())
    this.store.select(selectAccessToken).subscribe(x => {
      this.accessToken = x;
    })
  }

  removeToken() {
    this.store.dispatch(removeAccessToken());
  }

  redirect(path: string) {
    this.router.navigate([`/${path}`])
  }
}
