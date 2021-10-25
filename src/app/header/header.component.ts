import { Component, EventEmitter, Output } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styles:['a{cursor:pointer}']
})

export class HeaderComponent{
//   @Output() featureSelected=new EventEmitter<string>();
   collapsed=true;

//     onSelect(feature:string){
        
//         this.featureSelected.emit(feature);
//     }

    constructor(private dataStorage:DataStorageService){}

    onSaveData(){
        this.dataStorage.storeRecipes();
    }

    onFetchdata(){
        this.dataStorage.fetchRecipes().subscribe();
    }
}