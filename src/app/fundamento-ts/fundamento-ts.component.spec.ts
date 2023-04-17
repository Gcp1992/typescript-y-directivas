import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundamentoTSComponent } from './fundamento-ts.component';

describe('FundamentoTSComponent', () => {
  let component: FundamentoTSComponent;
  let fixture: ComponentFixture<FundamentoTSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundamentoTSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundamentoTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
