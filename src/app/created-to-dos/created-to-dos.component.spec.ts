import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedToDosComponent } from './created-to-dos.component';

describe('CreatedToDosComponent', () => {
  let component: CreatedToDosComponent;
  let fixture: ComponentFixture<CreatedToDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedToDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedToDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
