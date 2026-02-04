import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ragister } from './ragister';

describe('Ragister', () => {
  let component: Ragister;
  let fixture: ComponentFixture<Ragister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ragister]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ragister);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
