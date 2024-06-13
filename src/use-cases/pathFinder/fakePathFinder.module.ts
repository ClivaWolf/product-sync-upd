import { Module } from "@nestjs/common";
import { FakePathFinderUseCase } from "./fakePathFinder.use-case";

@Module({
    imports: [],
    providers: [FakePathFinderUseCase],
    exports: [FakePathFinderUseCase]
})
export class FakePathFinderModule { }