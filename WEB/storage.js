function Storage(){

}
Storage.prototype.addFilmToStorage = function(newFilm){
    let films = this.getFilmToStorage();
     films.push(newFilm);
     localStorage.setItem("films",JSON.stringify(films));   
}

Storage.prototype.getFilmToStorage = function(){
    let films ; 
    if(localStorage.getItem("films") === null){
            films = []; 
    }
    else{
        films = JSON.parse(localStorage.getItem("films"));
    }
    return films;
}

Storage.prototype.deleteFilmFromStorage = function(filmTitle){
    let films = this.getFilmToStorage();
    films.forEach(function(film,index){
        if(film.title === filmTitle){
            films.splice(index,1); //silme metodu splice.
        }
    });
    localStorage.setItem("films",JSON.stringify(films)); //güncellenen değer.
}

Storage.prototype.deleteAllFilmsFromStorage = function(){
    localStorage.removeItem("films");
}