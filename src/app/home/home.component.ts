import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'ngx-pwa';
  public readonly VAPID_PUBLIC_KEY = 'BOZqIyLbmIiho-BXYivbBQn1ylOqj_eD1YAiN-yfdLcevnkvdJ-1GET463kOWQtwEUjOPTkUDyvoK1Tq6yi9dfs';
  constructor(private swPush: SwPush) { }

  ngOnInit() {
  }

  public subscribeToNotifications() {

    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
      .then(sub => {
        console.warn(sub);
      })
      .catch(err => console.error('Could not subscribe to notifications', err));
  }
}
