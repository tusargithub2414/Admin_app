import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandChildrenComponent } from './grand-children.component';

describe('GrandChildrenComponent', () => {
  let component: GrandChildrenComponent;
  let fixture: ComponentFixture<GrandChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
