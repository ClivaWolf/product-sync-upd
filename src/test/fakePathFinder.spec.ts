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

    const mockSstorages = [
        {
            "id": "666ae2e003b959ec5a938c4e",
            "productQuantities": [],
            "latitude": 54.45589,
            "longitude": 32.00432,
            "tresholdDifference": 0.2
        },
        {
            "id": "666ae33303b959ec5a938c50",
            "productQuantities": [],
            "latitude": 54.49093,
            "longitude": 32.02311,
            "tresholdDifference": 0.2
        },
        {
            "id": "666ae36e03b959ec5a938c52",
            "productQuantities": [],
            "latitude": 54.46238,
            "longitude": 32.06219,
            "tresholdDifference": 0.4
        }
    ]

    describe('findNearestStorage', () => {
        it('should return nearest storage', async () => {
            const result = mockSstorages[2];
            mockUseCase.find.mockResolvedValue(result);
            expect(await FakePathFinderUseCase.findNearestStorage(54.45, 32.00, mockSstorages)).toBe(result);
        });
    });
})