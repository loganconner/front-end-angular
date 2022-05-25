import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import  *  as  Names  from  '../../../../names.json';
import { IName } from "./name.model";


export class NameService {
    
    getScore(value: string, index: number):number{
        return 10;
    }

    getNames() :IName[]{
        let nameList: IName[] = []
        let names :string[]
        names = (Names as any).default
        
        names.sort()

        names.forEach(function (value) {
            let i: number = names.indexOf(value)
            let s: number = getScore(value, i)
            let item : IName = {index:i, name: value, score: s }

            nameList.push(item)

          }); 

        return nameList
    }

    
}

function getScore(value: string, index: number):number {
    let alpha: string = 'abcdefghijklmnopqrstuvwxyz'
    let score: number = 0
    
    for (var i = 0; i < value.length; i++) {
        let v : number = alpha.indexOf(value[i].toLowerCase())
        score += (v + 1)
      }

      score = score * (index + 1)
    return score;
}

