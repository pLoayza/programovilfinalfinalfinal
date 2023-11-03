import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClasebdPage } from './clasebd.page';

describe('ClasebdPage', () => {
  let component: ClasebdPage;
  let fixture: ComponentFixture<ClasebdPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClasebdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
