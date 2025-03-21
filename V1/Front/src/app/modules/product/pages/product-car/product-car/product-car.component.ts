/* eslint-disable no-underscore-dangle */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DbService } from '../../../services/db.service';
import { Product } from '@core/models/Product';
import { CarImage } from '@core/models/Images';
import { URL } from '@core/constants/url';
import { UsersService } from '@core/services/users.service';

@Component({
    selector: 'app-product-car',
    templateUrl: './product-car.component.html',
    styleUrls: ['./product-car.component.scss'],
})
export class ProductCarComponent implements OnInit, OnDestroy {
    product: Product = {} as Product;

    currentImageIndex: number = 0;
    currentModelsLength: number = 0;

    image!: string;
    isOwnProduct: boolean = false;
    role: boolean = false;
    images: string[] = [];
    paramID: string = '';

    private subscription: Subscription = new Subscription();

    constructor(
        private productsService: DbService,
        private route: ActivatedRoute,
        private usersService: UsersService,
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            this.paramID = params['id'];
        });
        this.subscription.add(
            this.usersService
                .me()
                .subscribe((res: any) => {
                    this.role = res.Role == 2;
                }),
        );
        this.productsService
        .getProductById(this.paramID )
        .subscribe((response: Product) => {
            this.product = response;
            this.currentModelsLength = this.product.CarDetails.length!;
            
            this.productsService.getAllImages(this.product.id)
            .subscribe((response: CarImage[]) => {
                this.images = response.map(image => `${URL.IMAGE}${image.id}`);
            });

            this.isOwnProduct = this.product.SellerID.toString() === sessionStorage.getItem('userId') ?? '';
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    nextImage() {
        if (this.currentImageIndex < this.images.length - 1) {
            this.currentImageIndex++;
        }
    }

    previousImage() {
        if (this.currentImageIndex > 0) {
            this.currentImageIndex--;
        }
    }
}
