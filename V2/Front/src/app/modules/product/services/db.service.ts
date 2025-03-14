import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../../core/models/Product';
import { URL } from '../../../core/constants/url';
import { CarImage } from '../../../core/models/Images';
import { CarBrands } from '../../../core/models/Brands';
import { CarModelBrands } from '../../../core/models/ModelBrands';
import { CarDetail } from '../../../core/models/Details';

@Injectable()
export class DbService {
    constructor(private http: HttpClient) {}

    public getAllProducts() {
        return this.http.get<Product[]>(URL.PRODUCTS);
    }

    public getAllModels(id: string) {
        return this.http.get<CarModelBrands[]>(`${URL.MODELS}${id}`);
    }

    public getAllBrands() {
        return this.http.get<CarBrands[]>(URL.BRANDS);
    }

    public getAllImages(id: string) {
        return this.http.get<CarImage[]>(`${URL.IMAGES}${id}`);
    }

    public getProductById(id: string) {
        return this.http.get<Product>(`${URL.PRODUCT}${id}`);
    }

    public getAllProductsFromUser(id: string) {
        return this.http.get<Product[]>(`${URL.PRODUCTS_USER}/${id}`);
    }

    public getAllProductsFromSelf() {
        return this.http.get<Product[]>(URL.PRODUCTS_ME);
    }

    public createCarDetail(carId: number, details: Partial<CarDetail>[]) {
        return this.http.post(`${URL.DETAIL}${carId}`, {
            details
        });
    }

    public deleteCarImage(imageId: number | null) {
        return this.http.delete(`${URL.IMAGE}${imageId}`);
    }

    public uploadCarImage(carId: number | null, imageFiles: File[]) {
        const formData = new FormData();
        imageFiles.forEach((file, index) => {
            formData.append(`images`, file);
        });

        return this.http.post(`${URL.IMAGE}${carId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        });
    }

    public createProduct(car: Partial<Product>) {
        return this.http.post(URL.PRODUCT, car);
    }

    public modifyProduct(
        productId: string,
        product: Partial<Product>,
    ) {
        return this.http.put(
            URL.PRODUCT + productId, product,
        );
    }

    public deleteProduct(id: string ) {
        return this.http.delete(`${URL.PRODUCT}${id}`);
    }
}
