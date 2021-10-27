import { Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styles:['a{cursor:pointer}']
})

export class HeaderComponent implements OnInit,OnDestroy{
//   @Output() featureSelected=new EventEmitter<string>();
   collapsed=true;

//     onSelect(feature:string){
        
//         this.featureSelected.emit(feature);
//     }
isAuthenticated=false;
private userSub!:Subscription;
    constructor(private dataStorage:DataStorageService,private authService:AuthService){}

    ngOnInit()
    {
            this.userSub=this.authService.user.subscribe(user=>
            {
                        this.isAuthenticated = !!user;
                        console.log("not user",!user,"not not user",!!user);
                        
            });
    }
    ngOnDestroy(){
        this.userSub.unsubscribe();
    }

    onSaveData()
    {
        this.dataStorage.storeRecipes();
    }

    onFetchdata(){
        this.dataStorage.fetchRecipes().subscribe();
    }

    onLogout()
    {
        this.authService.logout();
    }
}