import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationTextComponent } from './animation-text.component';

describe('AnimationTextComponent', () => {
  let component: AnimationTextComponent;
  let fixture: ComponentFixture<AnimationTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
