const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const chokidar = require('chokidar');
const fs = require('fs');

const watcher = chokidar.watch(__dirname + '/../upload/passed/', {ignored: /^\./, persistent: true});

function movefile(originFile, destination, filename) {
    setTimeout(function (){
        fs.rename(__dirname + '/../upload/passed/' + originFile, __dirname + '/../upload/' + destination + '/' + filename, (err) => {
            if (err) throw err;
            console.log('Rename complete!');
            console.log(3);
        });
    }, 5000);
}

watcher
    .on('add', function (path) {
        setTimeout(function (){
            console.log('added file');

            const fileIndex = path.lastIndexOf('/') + 1;
            const fileFullName = path.substr(fileIndex);
            const filePureName = fileFullName.split('.')[0];
            const fileExt = fileFullName.split('.')[1].toLowerCase();
            console.log('File', fileFullName, 'has been added');

            console.log(__dirname);

            switch (fileExt) {
                /*Nifi Mohammed*/
                case 'jpg':
                    movefile(fileFullName, 'main/media/', fileFullName);
                    break;
                case 'png':
                    movefile(fileFullName, 'main/media/', fileFullName);
                    break;
                case 'pdf':
                    movefile(fileFullName, 'main/media/', fileFullName);
                    break;
                case 'jpeg':
                    movefile(fileFullName, 'main/media/', fileFullName);
                    break;
                case 'txt':
                    movefile(fileFullName, 'main/media/', fileFullName);
                    break;
                case 'doc':
                    movefile(fileFullName, 'main/media/', fileFullName);
                    break;
                case 'docx':
                    movefile(fileFullName, 'main/media/', fileFullName);
                    break;

                /*Nifi Mohammed*/

                /*Paul Mohammed*/
                case 'csv':
                    movefile(fileFullName, 'sample/csv/', fileFullName);
                    break;
                case 'xls':
                    movefile(fileFullName, 'sample/microsoftcsvs/', fileFullName);
                    break;
                case 'xlsx':
                    movefile(fileFullName, 'sample/microsoftcsvs/', fileFullName);
                    break;
                case 'bzip':
                    movefile(fileFullName, 'sample/sqlDumps/', fileFullName);
                    break;
                case 'gzip':
                    movefile(fileFullName, 'sample/sqlDumps/', fileFullName);
                    break;
                case 'gz':
                    movefile(fileFullName, 'sample/sqlDumps/', fileFullName);
                    break;
                case 'sql':
                    movefile(fileFullName, 'sample/sqlDumps/', fileFullName);
                    break;
                case 'bzip2':
                    movefile(fileFullName, 'sample/sqlDumps/', fileFullName);
                    break;
                case 'pigz':
                    movefile(fileFullName, 'sample/sqlDumps/', fileFullName);
                    break;

                /*Paul Mohammed*/


                default:
                    movefile(fileFullName, 'main/other/', fileFullName);
                /*case 'mp4':
                    movefile(fileFullName, 'media', fileFullName);
                    break;*/

                /*case 'mp3':
                    movefile(fileFullName, 'media', fileFullName);
                    break;*/
                /*case 'mov':
                    movefile(fileFullName, 'media', fileFullName);
                    break;*/
                /*case 'xlsm':
                    movefile(fileFullName, 'excel', fileFullName);
                    break;*/
                /*case 'xlsb':
                    movefile(fileFullName, 'excel', fileFullName);
                    break;*/
                /*case 'xltx':
                    movefile(fileFullName, 'excel', fileFullName);
                    break;*/
                /*case 'xml':
                    movefile(fileFullName, 'excel', fileFullName);
                    break;*/
            }

        },2000);
    })
    .on('change', function (path) {
        console.log('File', path, 'has been changed');
    })
    .on('unlink', function (path) {
        console.log('File', path, 'has been removed');
    })
    .on('error', function (error) {
        console.error('Error happened', error);
    });


module.exports = router;
