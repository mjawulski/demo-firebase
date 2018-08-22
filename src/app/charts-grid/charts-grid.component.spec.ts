
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsGridComponent } from './charts-grid.component';

describe('ChartsGridComponent', () => {
  let component: ChartsGridComponent;
  let fixture: ComponentFixture<ChartsGridComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
