import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailStoreComponent } from './detail-store.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('DetailStoreComponent', () => {
  let component: DetailStoreComponent;
  let fixture: ComponentFixture<DetailStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailStoreComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
