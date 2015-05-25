﻿function exportBellows(request, response) {	response.contentType = 'application/vnd.ms-excel';	//response.contentType = 'text/plain';	var vToday, exportData, vCoul, vUser, vUserName, vQuery, uParam, vMat, vCode;	vToday = new Date();	vCoul = "#FFFFFF";	vUser = currentUser();    vUserName = vUser.name; 	uParam = ds.UserParam.query("Utilisateur.Login = :1", vUserName); 	if (uParam[0].StQuery.length === 0) {  		vQuery = "Actif is true"; 	} else {  		vQuery = uParam[0].StQuery; 	}			exportData = '<head> <meta charset="UTF-8"> </head> ';		exportData += '<TABLE cellspacing="2px" cellpadding="2px" cellspacing="1px" rules="all" style="border:solid 2px black; font-family:Calibri; font-size:12px; vertical-align: middle;">';		exportData += "<TR><TD COLSPAN=7 height=50 align=CENTER><B><font size=5 >Liste des soufflets SENIOR CALORSTAT </B><BR>"		exportData += "<font size=3 >Export BELLOWS DATABASE ( "+vToday+" )</TD></TR>";		bellows = ds.Soufflets.query(vQuery);		exportData += '<TR><TD align=CENTER valign=middle height=50 width=100 bgcolor="#0B0B61"><B><FONT color=#FFFFFF>REF. SOUFFLET</B></TD><TD align=CENTER width=100 bgcolor="#084B8A">';		exportData += '<B><FONT color=#FFFFFF>CODE SOUFFLET</B></TD><TD align=CENTER width=120 bgcolor="#0B0B61"><FONT color=#FFFFFF><B>MATIERE</B></TD>';		exportData += '<TD align=CENTER width=90 bgcolor="#084B8A"><B><FONT color=#FFFFFF>CODE MATIERE</B></TD><TD align=CENTER width=90 bgcolor="#0B0B61"><B><FONT color=#FFFFFF>NB. PAROIS</B></TD>';		exportData += '<TD align=CENTER width=90 bgcolor="#084B8A"><B><FONT color=#FFFFFF>EP. PAROI (mm)</B></TD><TD align=CENTER width=90 bgcolor="#0B0B61"><B><FONT color=#FFFFFF>NB ONDES</B></TD>';		exportData += '<TD align=CENTER width=90 bgcolor="#084B8A"><B><FONT color=#FFFFFF>COLLET 1</B></TD><TD align=CENTER width=90 bgcolor="#0B0B61"><B><FONT color=#FFFFFF>Ø Collet1 (mm)</B></TD>';		exportData += '<TD align=CENTER width=90 bgcolor="#084B8A"><B><FONT color=#FFFFFF>COLLET 2</B></TD><TD align=CENTER width=90 bgcolor="#0B0B61"><B><FONT color=#FFFFFF>Ø Collet2 (mm)</B></TD>';		exportData += '<TD align=CENTER width=90 bgcolor="#084B8A"><B><FONT color=#FFFFFF>Ø EXT. Onde (mm)</B></TD><TD align=CENTER width=90 bgcolor="#0B0B61"><B><FONT color=#FFFFFF>Ø INT. Onde (mm)</B></TD>';		exportData += '<TD align=CENTER width=90 bgcolor="#084B8A"><B><FONT color=#FFFFFF>L2 (mm)</B></TD><TD align=CENTER width=90 bgcolor="#0B0B61"><B><FONT color=#FFFFFF>L3 (mm)</B></TD>';		exportData += '<TD align=CENTER width=90 bgcolor="#084B8A"><B><FONT color=#FFFFFF>RAIDEUR (daN/mm)</B></TD><TD align=CENTER width=90 bgcolor="#0B0B61"><B><FONT color=#FFFFFF>P. MAX. EXT.(bar)</B></TD>';		exportData += '<TD align=CENTER width=90 bgcolor="#084B8A"><B><FONT color=#FFFFFF>P. MAX. INT.(bar)</B></TD><TD align=CENTER width=90 bgcolor="#0B0B61"><B><FONT color=#FFFFFF>REF. OUTIL</B></TD>';		exportData += '<TD align=CENTER width=90 bgcolor="#084B8A"><B><FONT color=#FFFFFF>TYPE FORMAGE</B></TD><TD align=CENTER width=90 bgcolor="#0B0B61"><B><FONT color=#FFFFFF>Ø PLAQUE (mm)</B></TD>';		exportData += '<TD align=CENTER width=90 bgcolor="#084B8A"><B><FONT color=#FFFFFF>EP. PLAQUE (mm)</B></TD><TD align=CENTER width=90 bgcolor="#0B0B61"><B><FONT color=#FFFFFF>PROF. EMPREINTE (mm)</B></TD>';		exportData += '<TD align=CENTER width=110 bgcolor="#084B8A"><B><FONT color=#FFFFFF>SURFACE EFFECTIVE (cm2)</B></TD><TD align=CENTER width=300 bgcolor="#0B0B61"><B><FONT color=#FFFFFF>COMPLEMENT INFORMATION</B></TD>';		exportData += '<TD align=CENTER width=300 bgcolor="#084B8A"><B><FONT color=#FFFFFF>OBSERVATIONS/TESTS/DUREE DE VIE</B></TD></TR>';		bellows.forEach(function (bellow) {			if (vCoul === "#CEECF5") {				vCoul = "#FFFFFF";			} else {				vCoul = "#CEECF5";			}			if (bellow.Matiere == null) {				vMat = "-";				vCode = "-";			} else {				vMat = bellow.Matiere.Nom				vCode = bellow.Matiere.Code			}			exportData +=  '<TR><TD height=20 bgcolor="'+vCoul+'"align=CENTER>' + ((bellow.Reference === null) ? '-' : bellow.Reference) + '</TD><TD bgcolor="'+vCoul+'"align=CENTER>' + ((bellow.Code === null) ? '-' : bellow.Code) + '</TD><TD bgcolor="'+vCoul+'"align=CENTER>' + vMat + '</TD>';			exportData +=  '<TD bgcolor="'+vCoul+'"align=CENTER>' + vCode + '</TD><TD bgcolor="'+vCoul+'" align=CENTER>' + bellow.Nb_Parois + '</TD><TD bgcolor="'+vCoul+'"align=CENTER>' + bellow.Ep_Parois + ' </TD><TD bgcolor="'+vCoul+'"align=CENTER>' + bellow.Nb_Ondes + '</TD>';			exportData +=  '<TD bgcolor="'+vCoul+'"align=CENTER>' + bellow.Collet1 + '</TD><TD bgcolor="'+vCoul+'" align=CENTER>' + bellow.Diam_Collet1 + '</TD><TD bgcolor="'+vCoul+'"align=CENTER>' + bellow.Collet2 + ' </TD><TD bgcolor="'+vCoul+'"align=CENTER>' + bellow.Diam_Collet2 + '</TD>';			exportData +=  '<TD bgcolor="'+vCoul+'"align=CENTER>' + bellow.Ext_Onde + '</TD><TD bgcolor="'+vCoul+'" align=CENTER>' + bellow.Int_Onde + '</TD><TD bgcolor="'+vCoul+'"align=CENTER>' + ((bellow.L2 === null) ? '-' : bellow.L2) + ' </TD><TD bgcolor="'+vCoul+'"align=CENTER>' + ((bellow.L3 === null) ? '-' : bellow.L3) + '</TD>';			exportData +=  '<TD bgcolor="'+vCoul+'"align=CENTER>' + bellow.Raideur + '</TD><TD bgcolor="'+vCoul+'" align=CENTER>' + ((bellow.Pression_Ext === null) ? '-' : bellow.Pression_Ext) + '</TD><TD bgcolor="'+vCoul+'"align=CENTER>' + ((bellow.Pression_Int === null) ? '-' : bellow.Pression_Int) + ' </TD><TD bgcolor="'+vCoul+'"align=CENTER>' + bellow.Outil.Référence + '</TD>';			exportData +=  '<TD bgcolor="'+vCoul+'"align=CENTER>' + bellow.Type_Formage + '</TD><TD bgcolor="'+vCoul+'" align=CENTER>' + ((bellow.Outil.Diam_int === null) ? '-' : bellow.Outil.Diam_int) + '</TD><TD bgcolor="'+vCoul+'"align=CENTER>' + ((bellow.Outil.Epaisseur === null) ? '-' : bellow.Outil.Epaisseur) + ' </TD><TD bgcolor="'+vCoul+'"align=CENTER>' + ((bellow.Outil.Profondeur === null) ? '-' : bellow.Outil.Profondeur) + '</TD>';			exportData +=  '<TD bgcolor="'+vCoul+'"align=CENTER>' + ((bellow.Surf_Effect === null) ? '-' : bellow.Surf_Effect) + '</TD><TD bgcolor="'+vCoul+'" align=CENTER>' + ((bellow.Complement === null) ? '-' : bellow.Complement) + '</TD><TD bgcolor="'+vCoul+'"align=CENTER>' + ((bellow.Onservation === null) ? '-' : bellow.Onservation) + '</TD>';			exportData +=  '</TR>';		});		exportData += '</TABLE>';		return exportData;}