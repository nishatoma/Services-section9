import { LoggingService } from "./logging.service";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class AccountsService {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      // We are going to inject LoggingService into this service class
      // In order to do so, this class needs to have some metadata, so
      // we attach the @Injectable decorator at the top.
      constructor(private loggingService: LoggingService) {

      }

      // Let's say we want to have something other components can
      // listen to and get:
      statusChanged = new EventEmitter<string>();

      addAccount(name: string, status: string) {
        this.accounts.push({name: name, status: status});
        this.loggingService.logStatusChange(status);
      }

      updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);
      }
}