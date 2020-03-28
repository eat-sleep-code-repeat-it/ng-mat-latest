import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GoogleDataService } from './google-data.service';

describe('GoogleDataService', () => {
  let service: GoogleDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleDataService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GoogleDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  describe(':', () => {

    function setup() {
      const sharedService = TestBed.get(GoogleDataService);
      const httpTestingController = TestBed.get(HttpTestingController);
      return { sharedService, httpTestingController };
    }

    it('should call the google\'s map data', () => {
      const { sharedService, httpTestingController } = setup();
      const mockGoogleMapData = {id: 1, country : 'United states of america', zipcode: '56743'};
      sharedService.getGoogleMapData().subscribe(data => {
        expect(data.mapData).toEqual(mockGoogleMapData);
      });

      const req = httpTestingController.expectOne('https:www.google.com/googleMapData');

      expect(req.request.method).toBe('GET');

      req.flush({
        mapData: mockGoogleMapData
      });
    });

    afterEach(() => {
      const { httpTestingController } = setup();
      httpTestingController.verify();
    });
  });
});