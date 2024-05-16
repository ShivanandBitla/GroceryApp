import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListOfGroceryPage } from './list-of-grocery.page';

describe('ListOfGroceryPage', () => {
  let component: ListOfGroceryPage;
  let fixture: ComponentFixture<ListOfGroceryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfGroceryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
