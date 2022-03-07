import { Module } from '@nestjs/common';
import { CoffeesModule } from 'src/coffees';
import { CoffeeRatingService } from './coffee-rating.service';

@Module({
  imports: [CoffeesModule],
  providers: [CoffeeRatingService],
})
export class CoffeeRatingModule {}
