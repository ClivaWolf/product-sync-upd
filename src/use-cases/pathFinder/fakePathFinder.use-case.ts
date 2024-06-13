import { Injectable } from "@nestjs/common";
import { Storage } from "src/core";

//штука которая будет считать путь между точками (долгота, широта)
@Injectable()
export class FakePathFinderUseCase {


    static findPath(lat1: number, lon1: number, lat2: number, lon2: number): number {

        const R = 6371e3; // metres
        const φ1 = lat1 * Math.PI/180; // φ, λ in radians
        const φ2 = lat2 * Math.PI/180;
        const Δφ = (lat2-lat1) * Math.PI/180;
        const Δλ = (lon2-lon1) * Math.PI/180;
        
        return 2 * R * Math.asin(Math.sqrt(Math.sin(Δφ/2)*Math.sin(Δφ/2)+Math.cos(φ1)*Math.cos(φ2)*Math.sin(Δλ/2)*Math.sin(Δλ/2)));
    }

    static findNearestStorage(lat: number, lon: number, storages: Storage[]): Storage {
        storages.sort((a, b) => FakePathFinderUseCase.findPath(lat, lon, a.latitude, a.longitude) - FakePathFinderUseCase.findPath(lat, lon, b.latitude, b.longitude))

        return storages[1]
    }
}

