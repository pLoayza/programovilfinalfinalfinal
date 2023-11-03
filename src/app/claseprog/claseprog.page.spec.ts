import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClaseprogPage } from './claseprog.page';

describe('ClaseprogPage', () => {
  let component: ClaseprogPage;
  let fixture: ComponentFixture<ClaseprogPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClaseprogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
