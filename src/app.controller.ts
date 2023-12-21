import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Health Check')
@Controller()
export class AppController {
	constructor() {}

	@Get('/')
	findAll() {
		return 'API is running';
	}
}
