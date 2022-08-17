import { DynamicModule, forwardRef } from '@nestjs/common';
import { SimpleModule } from '../simple-module';

export class OurDynamicModule {
  static forFeature(): DynamicModule {
    return {
      module: OurDynamicModule,
      imports: [forwardRef(() => SimpleModule)],
    };
  }
}
