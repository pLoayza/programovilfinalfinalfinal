import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClasearqPage } from './clasearq.page';

describe('ClasearqPage', () => {
  let component: ClasearqPage;
  let fixture: ComponentFixture<ClasearqPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClasearqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
