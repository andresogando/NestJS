import { Injectable } from '@nestjs/common';
import { CoffeesService } from 'src/coffees';

@Injectable()
export class CoffeeRatingService {
  constructor(private readonly coffeesService: CoffeesService) { 
    
  }
}
