import { Directive, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Directive()
export abstract class SubscriptionBasedDirective implements OnDestroy {
  protected subscriptions: Subscription[] = [];

  protected addSubscription<T = any>(
    observable: Observable<T>,
    successCallback: (data: T) => void,
    errorCallback?: (error: any) => void,
    completeCallback?: () => void
  ): void {
    this.subscriptions.push(
      observable.subscribe(successCallback, errorCallback, completeCallback)
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
