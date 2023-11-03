import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClaseinglPage } from './claseingl.page';

describe('ClaseinglPage', () => {
  let component: ClaseinglPage;
  let fixture: ComponentFixture<ClaseinglPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClaseinglPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
