import { Catch, ExceptionFilter } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';

@Catch()
export class ToRpcException implements ExceptionFilter {
  catch(exception): Observable<any> {
    return throwError(() => exception);
  }
}
