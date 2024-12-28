import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DetailStoreService } from './detail-product.service';
import { product } from '../../../../core/model/product.model';

describe('DetailStoreService', () => {
  let service: DetailStoreService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DetailStoreService]
    });

    service = TestBed.inject(DetailStoreService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all products', () => {
    const mockProducts: product[] = [
      {
        id: 1,
        title: 'Product 1',
        price: 100,
        description: 'Description 1',
        category: 'category1',
        image: 'image1.jpg',
        rating: { rate: 4.5, count: 10 }
      },
      {
        id: 2,
        title: 'Product 2',
        price: 200,
        description: 'Description 2',
        category: 'category2',
        image: 'image2.jpg',
        rating: { rate: 3.8, count: 5 }
      }
    ];

    service.getProducts().subscribe(products => {
      expect(products.length).toBe(2);
      expect(products).toEqual(mockProducts);
    });

    const req = httpMock.expectOne('https://fakestoreapi.com/products');
    expect(req.request.method).toBe('GET');
    req.flush(mockProducts);
  });

  it('should retrieve a product by ID', () => {
    const mockProduct: product = {
      id: 1,
      title: 'Product 1',
      price: 100,
      description: 'Description 1',
      category: 'category1',
      image: 'image1.jpg',
      rating: { rate: 4.5, count: 10 }
    };

    service.getProductById(1).subscribe(product => {
      expect(product).toEqual(mockProduct);
    });

    const req = httpMock.expectOne('https://fakestoreapi.com/products/1');
    expect(req.request.method).toBe('GET');
    req.flush(mockProduct);
  });
});
