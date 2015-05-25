﻿// Une log simple pour suivi du traitement var log = "Nb d'outils avant import : " + ds.Outils.length;   // Fonction principale function doImportBellows () {     /*   Le fichier à importer est dans un dossier de la solution, un sous-dossier nommé "Import".          On charge la totalité du document d'un seul coup et on le monte en tableau mémoire.     */     var lines, columns, theRef, theMat, theOut;          lines = loadText( ds.getModelFolder().path + "Import/OutilsRef.txt" ).split("\n");       /*   Déclaration des variables du fichier en entrée.            columns[0]    Référence            columns[1]    Diam. Intérieur            columns[2]    Epaisseur            columns[3]    Profondeur                 */    columns = [];       // On boucle sur chaque entrée du tableau lines.forEach( function(oneLine) {        // Recherche les colonnes pour la ligne courante        // Chaque colonne est séparée par une tabulation.columns = oneLine.split("\t");           // Recherche si l'enregistrement existe déjà.      theOut = ds.Outils.find("Référence = :1", columns[0]);      if(theOut === null) { // On ne le trouve pas donc on le crée      	theOut = new ds.Outils({            Référence : columns[0],            Diam_int : columns[1],            Epaisseur : columns[2],            Profondeur : columns[3]         });         // Enregistrer           theOut.save();       }      }); } // Call the function doImportBellows ();   // Log resultlog += " / Nb d'outils après import : " + ds.Outils.length;