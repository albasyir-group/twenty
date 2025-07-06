import { Logger, Type } from "@nestjs/common";
import { AIAgentModule } from "src/ai-agent/fallback/ai-agent.module";

const logger = new Logger(AIAgentModule.name);

let AgentImplModule: Type<AIAgentModule>;
try {
  logger.log('load AI Agent module...');
  AgentImplModule = require('./implementation/ai-agent.module').AIAgentModule;
  logger.log('load AI Agent success');
} catch (e) {
  logger.log('fail to load, module not found');
  AgentImplModule = AIAgentModule;
}

export { AgentImplModule };
