import { ipcMain, ipcRenderer, dialog, shell} from 'electron';
import { Config } from '../shared/Config';
import  {OpenAI}  from "openai";
import { ApiConnection } from '../shared/apiConnection';
import fs from 'fs';
import path from 'path';

let appVersionSpan: HTMLElement = document.querySelector("#app-version")!;
let updateButton: HTMLElement = document.querySelector("#update-button")!;

appVersionSpan.innerText = "Current app version: "+require('../../package.json').version;

updateButton.addEventListener('click', ()=>{
    ipcRenderer.send('update-app');
})