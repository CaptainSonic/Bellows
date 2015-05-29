
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var btCompare = {};	// @buttonImage
	var btPV = {};	// @buttonImage
	var btMethod = {};	// @buttonImage
	var btC = {};	// @buttonImage
	var btClients = {};	// @buttonImage
	var btUser = {};	// @buttonImage
	var btBellows = {};	// @buttonImage
	var btTools = {};	// @buttonImage
	var btMat = {};	// @buttonImage
	var btTypMat = {};	// @buttonImage
	var imageButton4 = {};	// @buttonImage
	var imageButton3 = {};	// @buttonImage
	var btPswd = {};	// @buttonImage
	var btSearch = {};	// @buttonImage
	var btAbout = {};	// @buttonImage
	var documentEvent = {};	// @document
	var W_Login = {};	// @login
// @endregion// @endlock

// eventHandlers// @lock

	btCompare.click = function btCompare_click (event)// @startlock
	{// @endlock
		$$("cchg").show();
		$$('component1').loadComponent("/Compare_Bellows.waComponent");
	};// @lock

	btCompare.mouseover = function btCompare_mouseover (event)// @startlock
	{// @endlock
		var vRet = String.fromCharCode(13) + String.fromCharCode(13);
		$$("cHelp").setValue("[COMPARER]" + vRet + "Effectuer plusieurs recherches multi-critères dans la base des soufflets et stocker les résultats pour pouvoir les comparer. ");
		$$("cHelp").show();
	};// @lock

	btCompare.mouseout = function btCompare_mouseout (event)// @startlock
	{// @endlock
		$$("cHelp").hide();
	};// @lock

	btPV.click = function btPV_click (event)// @startlock
	{// @endlock
		$$("cchg").show();
		$$("cHelp").hide();
		$$('component1').loadComponent("/Gest_PV.waComponent");
	};// @lock

	btPV.mouseover = function btPV_mouseover (event)// @startlock
	{// @endlock
		var vRet = String.fromCharCode(13) + String.fromCharCode(13);
		$$("cHelp").setValue("[PV PRODUCTION]" + vRet + "Créer et modifier des PV de production.");
		$$("cHelp").show();
	};// @lock

	btPV.mouseout = function btPV_mouseout (event)// @startlock
	{// @endlock
		$$("cHelp").hide();
	};// @lock

	btMethod.mouseover = function btMethod_mouseover (event)// @startlock
	{// @endlock
		$$("cHelp").setValue("");
		$$("cHelp").show();
	};// @lock

	btMethod.mouseout = function btMethod_mouseout (event)// @startlock
	{// @endlock
		$$("cHelp").hide();
	};// @lock

	btC.mouseover = function btC_mouseover (event)// @startlock
	{// @endlock
		$$("cHelp").setValue("");
		$$("cHelp").show();
	};// @lock

	btC.mouseout = function btC_mouseout (event)// @startlock
	{// @endlock
		$$("cHelp").hide();
	};// @lock

	btClients.click = function btClients_click (event)// @startlock
	{// @endlock
		$$("cchg").show();
		$$("cHelp").hide();
		$$('component1').loadComponent("/Gest_Clients.waComponent");
	};// @lock

	btClients.mouseover = function btClients_mouseover (event)// @startlock
	{// @endlock
		var vRet = String.fromCharCode(13) + String.fromCharCode(13);
		$$("cHelp").setValue("[CLIENTS]" + vRet + "Gérer le référentiel simplifié des clients. Créer un nouveau client. Modifier un client. Désactiver un client.");
		$$("cHelp").show();
	};// @lock

	btClients.mouseout = function btClients_mouseout (event)// @startlock
	{// @endlock
		$$("cHelp").hide();
	};// @lock

	btUser.click = function btUser_click (event)// @startlock
	{// @endlock
		$$("cchg").show();
		$$("cHelp").hide();
		$$('component1').loadComponent("/Gest_Utilisateurs.waComponent");
	};// @lock

	btUser.mouseover = function btUser_mouseover (event)// @startlock
	{// @endlock
		var vRet = String.fromCharCode(13) + String.fromCharCode(13);
		$$("cHelp").setValue("[UTILISATEURS]" + vRet + "Gérer les utilisateurs pouvant se connecter à l'application. Créer un utilisateur. Indiquer une date de sortie d'un utilisateur.");
		$$("cHelp").show();
	};// @lock

	btUser.mouseout = function btUser_mouseout (event)// @startlock
	{// @endlock
		$$("cHelp").hide();
	};// @lock

	btBellows.click = function btBellows_click (event)// @startlock
	{// @endlock
		$$("cchg").show();
		$$("cHelp").hide();
		$$('component1').loadComponent("/Gest_Bellows.waComponent");
	};// @lock

	btBellows.mouseover = function btBellows_mouseover (event)// @startlock
	{// @endlock
		var vRet = String.fromCharCode(13) + String.fromCharCode(13);
		$$("cHelp").setValue("[SOUFFLETS]" + vRet + "Gérer le référentiel des soufflets. Créer un nouveau soufllet. Modifier ses propriétés. Désactiver un soufflet.");
		$$("cHelp").show();
	};// @lock

	btBellows.mouseout = function btBellows_mouseout (event)// @startlock
	{// @endlock
		$$("cHelp").hide();
	};// @lock

	btTools.click = function btTools_click (event)// @startlock
	{// @endlock
		$$("cchg").show();
		$$("cHelp").hide();
		$$('component1').loadComponent("/Gest_Outils.waComponent");
	};// @lock

	btTools.mouseover = function btTools_mouseover (event)// @startlock
	{// @endlock
		var vRet = String.fromCharCode(13) + String.fromCharCode(13);
		$$("cHelp").setValue("[OUTILS]" + vRet + "Gérer les références et propriétés des outils. Créer un nouvel outil. Modifier un Outil. Désactiver un outil.");
		$$("cHelp").show();
	};// @lock

	btTools.mouseout = function btTools_mouseout (event)// @startlock
	{// @endlock
		$$("cHelp").hide();
	};// @lock

	btMat.click = function btMat_click (event)// @startlock
	{// @endlock
		$$("cchg").show();
		$$("cHelp").hide();
		$$('component1').loadComponent("/Gest_Matieres.waComponent");
	};// @lock

	btMat.mouseover = function btMat_mouseover (event)// @startlock
	{// @endlock
		var vRet = String.fromCharCode(13) + String.fromCharCode(13);
		$$("cHelp").setValue("[MATIERES]" + vRet + "Gérer les références des matières utilisables dans la base de données.");
		$$("cHelp").show();
	};// @lock

	btMat.mouseout = function btMat_mouseout (event)// @startlock
	{// @endlock
		$$("cHelp").hide();
	};// @lock

	btTypMat.click = function btTypMat_click (event)// @startlock
	{// @endlock
		$$("cchg").show();
		$$("cHelp").hide();
		$$('component1').loadComponent("/GestMatieres.waComponent");
	};// @lock

	btTypMat.mouseover = function btTypMat_mouseover (event)// @startlock
	{// @endlock
		var vRet = String.fromCharCode(13) + String.fromCharCode(13);
		$$("cHelp").setValue("[TYPES MATIERE]" + vRet + "Gérer les types de matières utilisables dans la base de données.");
		$$("cHelp").show();
	};// @lock

	btTypMat.mouseout = function btTypMat_mouseout (event)// @startlock
	{// @endlock
		$$("cHelp").hide();
	};// @lock

	imageButton4.mouseover = function imageButton4_mouseover (event)// @startlock
	{// @endlock
		$$("cHelp").setValue("");
		$$("cHelp").show();
	};// @lock

	imageButton4.mouseout = function imageButton4_mouseout (event)// @startlock
	{// @endlock
		$$("cHelp").hide();
	};// @lock

	imageButton3.mouseover = function imageButton3_mouseover (event)// @startlock
	{// @endlock
		$$("cHelp").setValue("");
		$$("cHelp").show();
	};// @lock

	imageButton3.mouseout = function imageButton3_mouseout (event)// @startlock
	{// @endlock
		$$("cHelp").hide();
	};// @lock

	btPswd.click = function btPswd_click (event)// @startlock
	{// @endlock
		$$("cchg").show();
		$$("cHelp").hide();
		$$('component1').loadComponent("/UpdPsw.waComponent");
	};// @lock

	btPswd.mouseover = function btPswd_mouseover (event)// @startlock
	{// @endlock
		var vRet = String.fromCharCode(13) + String.fromCharCode(13);
		$$("cHelp").setValue("[MOT DE PASSE]" + vRet + "Changer le mot de passe de son compte utilisateur.");
		$$("cHelp").show();
	};// @lock

	btPswd.mouseout = function btPswd_mouseout (event)// @startlock
	{// @endlock
		$$("cHelp").hide();
	};// @lock

	btSearch.click = function btSearch_click (event)// @startlock
	{// @endlock
		$$("cchg").show();
		$$("cHelp").hide();
		$$('component1').loadComponent("/Search_Bellows.waComponent");
	};// @lock

	btSearch.mouseover = function btSearch_mouseover (event)// @startlock
	{// @endlock
		var vRet = String.fromCharCode(13) + String.fromCharCode(13);
		$$("cHelp").setValue("[RECHERCHER]" + vRet + "Rechercher un soufflet dans la base de données en utilisant des critères multiples de recherche. Exporter le résultat de la recherche dans un fichier Excel.");
		$$("cHelp").show();
	};// @lock

	btSearch.mouseout = function btSearch_mouseout (event)// @startlock
	{// @endlock
		$$("cHelp").hide();
	};// @lock

	btAbout.click = function btAbout_click (event)// @startlock
	{// @endlock
		$$("cchg").show();
		$$("cHelp").hide();
		$$('component1').loadComponent("/Apropos.waComponent");
	};// @lock

	btAbout.mouseover = function btAbout_mouseover (event)// @startlock
	{// @endlock
		var vRet = String.fromCharCode(13) + String.fromCharCode(13);
		$$("cHelp").setValue("[A PROPOS]" + vRet + "Page d'information sur l'application.");
		$$("cHelp").show();
	};// @lock

	btAbout.mouseout = function btAbout_mouseout (event)// @startlock
	{// @endlock
		$$("cHelp").hide();
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		var vUser = WAF.directory.currentUser();
		if (vUser === null) {
			$$('main').destroy();
		 } else {
		 	
			if (waf.directory.currentUserBelongsTo("Ingénieur")) {
				$$('btSearch').enable();
				$$('btCompare').enable();
				$$('btPV').disable();
				$$('btB').disable();
				$$('btC').disable();
				$$('btClients').disable();
				$$('btUser').disable();
				$$('btBellows').disable();
				$$('btTools').disable();
				$$('btMat').disable();
				$$('btTypMat').disable();
				$$('btPswd').enable();
				$$('btAbout').enable();
			}
			
			if (waf.directory.currentUserBelongsTo("Opérateur")) {
				$$('btSearch').enable();
				$$('btCompare').enable();
				$$('btPV').enable();
				$$('btB').disable();
				$$('btC').disable();
				$$('btClients').disable();
				$$('btUser').disable();
				$$('btBellows').disable();
				$$('btTools').disable();
				$$('btMat').disable();
				$$('btTypMat').disable();
				$$('btPswd').enable();
				$$('btAbout').enable();
			}
			
		 }

	};// @lock

	W_Login.logout = function W_Login_logout (event)// @startlock
	{// @endlock
		$$('main').destroy();
	};// @lock

	W_Login.login = function W_Login_login (event)// @startlock
	{// @endlock
		var vUser, vGroups, curSession, theUser; 
		
		vUser = WAF.directory.currentUser();
		// alert(vUser.fullName+" " + vUser.ID + " "+ vUser.userName);
		if (vUser !== null) {
			
			window.location = '/index.html';
			
			
		}

	};// @lock

// @region eventManager// @startlock
	WAF.addListener("btPV", "click", btPV.click, "WAF");
	WAF.addListener("btClients", "click", btClients.click, "WAF");
	WAF.addListener("btAbout", "click", btAbout.click, "WAF");
	WAF.addListener("btTypMat", "click", btTypMat.click, "WAF");
	WAF.addListener("btMat", "click", btMat.click, "WAF");
	WAF.addListener("btTools", "click", btTools.click, "WAF");
	WAF.addListener("btBellows", "click", btBellows.click, "WAF");
	WAF.addListener("btUser", "click", btUser.click, "WAF");
	WAF.addListener("btPswd", "click", btPswd.click, "WAF");
	WAF.addListener("btCompare", "click", btCompare.click, "WAF");
	WAF.addListener("btSearch", "click", btSearch.click, "WAF");
	WAF.addListener("btCompare", "mouseover", btCompare.mouseover, "WAF");
	WAF.addListener("btCompare", "mouseout", btCompare.mouseout, "WAF");
	WAF.addListener("btPV", "mouseover", btPV.mouseover, "WAF");
	WAF.addListener("btPV", "mouseout", btPV.mouseout, "WAF");
	WAF.addListener("btMethod", "mouseover", btMethod.mouseover, "WAF");
	WAF.addListener("btMethod", "mouseout", btMethod.mouseout, "WAF");
	WAF.addListener("btC", "mouseover", btC.mouseover, "WAF");
	WAF.addListener("btC", "mouseout", btC.mouseout, "WAF");
	WAF.addListener("btClients", "mouseover", btClients.mouseover, "WAF");
	WAF.addListener("btClients", "mouseout", btClients.mouseout, "WAF");
	WAF.addListener("btUser", "mouseover", btUser.mouseover, "WAF");
	WAF.addListener("btUser", "mouseout", btUser.mouseout, "WAF");
	WAF.addListener("btBellows", "mouseover", btBellows.mouseover, "WAF");
	WAF.addListener("btBellows", "mouseout", btBellows.mouseout, "WAF");
	WAF.addListener("btTools", "mouseover", btTools.mouseover, "WAF");
	WAF.addListener("btTools", "mouseout", btTools.mouseout, "WAF");
	WAF.addListener("btMat", "mouseover", btMat.mouseover, "WAF");
	WAF.addListener("btMat", "mouseout", btMat.mouseout, "WAF");
	WAF.addListener("btTypMat", "mouseover", btTypMat.mouseover, "WAF");
	WAF.addListener("btTypMat", "mouseout", btTypMat.mouseout, "WAF");
	WAF.addListener("imageButton4", "mouseover", imageButton4.mouseover, "WAF");
	WAF.addListener("imageButton4", "mouseout", imageButton4.mouseout, "WAF");
	WAF.addListener("imageButton3", "mouseover", imageButton3.mouseover, "WAF");
	WAF.addListener("imageButton3", "mouseout", imageButton3.mouseout, "WAF");
	WAF.addListener("btPswd", "mouseover", btPswd.mouseover, "WAF");
	WAF.addListener("btPswd", "mouseout", btPswd.mouseout, "WAF");
	WAF.addListener("btSearch", "mouseover", btSearch.mouseover, "WAF");
	WAF.addListener("btSearch", "mouseout", btSearch.mouseout, "WAF");
	WAF.addListener("btAbout", "mouseover", btAbout.mouseover, "WAF");
	WAF.addListener("btAbout", "mouseout", btAbout.mouseout, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("W_Login", "logout", W_Login.logout, "WAF");
	WAF.addListener("W_Login", "login", W_Login.login, "WAF");
// @endregion
};// @endlock
