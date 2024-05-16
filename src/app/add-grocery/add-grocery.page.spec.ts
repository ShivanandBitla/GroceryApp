import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddGroceryPage } from './add-grocery.page';

describe('AddGroceryPage', () => {
  let component: AddGroceryPage;
  let fixture: ComponentFixture<AddGroceryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGroceryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
