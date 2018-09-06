import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log('Servicio de Spotify listo para usar');
   }

   getQuery(query:string){

    const URL = `https://api.spotify.com/v1/${query}`;

    const HEADERS = new HttpHeaders({
      'Authorization': 'Bearer BQCFm7m_jNAriW9mcxZmUYDf0A1ybGu2FI57pPKiy9B7pTjn41F8l_FUPaAeHCgxQ6UY6CNa6bYx5b3w7hA'
    });

    return this.http.get(URL,{headers:HEADERS});
   }

   getNewReleases(){
    return this.getQuery('browse/new-releases')
    .pipe(map((data:any) => data.albums.items));
   }

   getArtistas(termino:string){
    return this.getQuery(`search?q=${termino}&type=track%2Cartist&market=US&limit=10&offset=5`)
    .pipe(map((data:any) => data.artists.items));

   }

   getArtista(id:string){
    return this.getQuery(`artists/${id}`);
    //.pipe(map((data:any) => data.artist.items));

   }

   getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe(map(data => data['tracks']));
    //.pipe(map((data:any) => data.artist.items));

   }

}
