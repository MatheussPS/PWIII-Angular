import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBindingsComponent } from './property-bindings.component';

describe('PropertyBindingsComponent', () => {
  let component: PropertyBindingsComponent;
  let fixture: ComponentFixture<PropertyBindingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyBindingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
