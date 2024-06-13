import { Test, TestingModule } from '@nestjs/testing';

import { FakePathFinderUseCase } from '../use-cases/pathFinder/fakePathFinder.use-case';

describe('FakePathFinderUseCase', () => {
    let useCase: FakePathFinderUseCase;
    let mockUseCase: any;

    beforeEach(async () => {
        mockUseCase = {
            find: jest.fn(),
        };
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                {
                    provide: FakePathFinderUseCase,
                    useValue: mockUseCase,
                },
            ],
        }).compile();
        useCase = module.get<FakePathFinderUseCase>(FakePathFinderUseCase);
    });

    describe('find', () => {
        it('should return a path', async () => {
            const result = 157225.4320380729;
            mockUseCase.find.mockResolvedValue(result);
            expect(await FakePathFinderUseCase.findPath(1, 1, 2, 2)).toBe(result);
        });
    });
})