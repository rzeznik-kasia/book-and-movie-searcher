import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesFormComponent } from './favorites-form.component';

describe('FavoritesFormComponent', () => {
  let component: FavoritesFormComponent;
  let fixture: ComponentFixture<FavoritesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
