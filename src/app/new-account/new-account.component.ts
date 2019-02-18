import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {


  // How do we inform Angular that we require an injection?
  // By putting the service in the constructor, this is a good way
  // to instantiate.
  constructor (private loggingService: LoggingService, private accService: AccountsService) {

  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus);
  }
}
