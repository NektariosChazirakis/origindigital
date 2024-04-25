import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { HttpRequestService } from './http-request.service';
import { TestBed } from '@angular/core/testing';

describe('HttpRequestService', () => {
  let service: HttpRequestService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpRequestService],
    });
    service = TestBed.inject(HttpRequestService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifies that no requests are outstanding
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get', () => {
    it('should make a GET request with default header', () => {
      const testUrl = 'https://api.example.com/data';
      const testData = { id: 1, name: 'Test' };

      service.get(testUrl).subscribe((data) => {
        expect(data).toEqual(testData);
      });

      const req = httpMock.expectOne(testUrl);
      expect(req.request.method).toBe('GET');
      req.flush(testData);
    });
  });
});
