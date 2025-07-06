import { All, Controller, HttpCode, HttpStatus } from '@nestjs/common';

@Controller('ai-agent')
export class AIAgentController {
  @All('*')
  @HttpCode(HttpStatus.NOT_IMPLEMENTED)
  notImplemented() {
    return "not-implemented"
  }
}