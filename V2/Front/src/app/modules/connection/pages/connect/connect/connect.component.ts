import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnDestroy {
  private subscription: Subscription = new Subscription();

  message!: string;

  constructor(
      private auth: AuthService,
      private router: Router,
  ) {}


  validation(Email: string, Password: string): void {
      if (Email && Password) {
          const loginSubscription = this.auth.loginUser(Email, Password).subscribe({
                      next: () => {
                          this.router.navigateByUrl('/product');
                      },
                      error: async (err: any) => {
                          this.message = "Login or password incorrect.";
                      },
                  });
          
          this.subscription.add(loginSubscription);         
      } else {
          this.message = Email ? "You need to provide a password!" : "You need to provide an Email!"
      }
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }
}
