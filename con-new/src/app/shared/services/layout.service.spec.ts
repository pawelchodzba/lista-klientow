import { TestBed } from '@angular/core/testing';
import { LayoutService } from './layout.service';

describe('LayoutService', () => {
  let service: LayoutService;
  let spy;
  beforeEach(() => {
    TestBed.configureTestingModule({
    providers: [LayoutService]
  });
    service = TestBed.get(LayoutService);
    spy = spyOn(service.logedOrNoneSorce, 'next');
  });
  it('should be created', () => {
      expect(service).toBeTruthy();
  });
  it('property logedOrNoneSorce is object', () => {
    expect(typeof service.logedOrNoneSorce).toBe('object');
  });
  it('impossibleWithoutLogging() send false', () => {
    service.impossibleWithoutLogging();
    expect(spy).toHaveBeenCalledWith(false);
  });
  it('possibleAfterLogging() send true', () => {
    service.possibleAfterLogging();
    expect(spy).toHaveBeenCalledWith(true);
  });
});
