import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScriptControllerService {
  constructor() {}

  LoadScript(pathFile: string[]) {
    for (let file of pathFile) {
      let scriptTag = document.createElement('script');
      scriptTag.src = '../assets/dist/js/' + pathFile + '.js';

      let body = document.getElementsByTagName('body')[0];
      body.appendChild(scriptTag);
    }
  }
}
