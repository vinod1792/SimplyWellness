import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSpeaking } from './public-speaking';

describe('PublicSpeaking', () => {
  let component: PublicSpeaking;
  let fixture: ComponentFixture<PublicSpeaking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicSpeaking]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicSpeaking);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
