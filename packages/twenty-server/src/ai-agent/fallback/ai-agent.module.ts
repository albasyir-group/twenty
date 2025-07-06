import { Module } from "@nestjs/common";
import { AIAgentController } from "src/ai-agent/fallback/ai-agent.controller";

@Module({
    controllers: [AIAgentController]
})
export class AIAgentModule {}