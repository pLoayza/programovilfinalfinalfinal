import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClasesprofesorPage } from './clasesprofesor.page';

describe('ClasesprofesorPage', () => {
  let component: ClasesprofesorPage;
  let fixture: ComponentFixture<ClasesprofesorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClasesprofesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
