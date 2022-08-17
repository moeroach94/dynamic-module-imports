import { forwardRef, Inject, Module } from '@nestjs/common';
export class OtherService {}

export class SimpleService {
  constructor(
    @Inject(forwardRef(() => OtherService)) private otherService: OtherService,
  ) {
    console.log('making the simple service');
  }
}
@Module({
  providers: [SimpleService, OtherService],
})
export class SimpleModule {
  constructor() {
    console.trace('simple module is being constructed');
  }
}
