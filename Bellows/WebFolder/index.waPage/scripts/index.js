
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var btCompare = {};	// @buttonImage
	var btSearch = {};	// @buttonImage
	var menuItem10 = {};	// @menuItem
	var menuItem9 = {};	// @menuItem
	var menuItem6 = {};	// @menuItem
	var menuItem7 = {};	// @menuItem
	var menuItem2 = {};	// @menuItem
	var menuItem8 = {};	// @menuItem
	var menuItem1 = {};	// @menuItem
	var documentEvent = {};	// @document
	var M_Apropos = {};	// @menuItem
	var menuItem4 = {};	// @menuItem
	var W_Login = {};	// @login
// @endregion// @endlock

// eventHandlers// @lock

	btCompare.click = function btCompare_click (event)// @startlock
	{// @endlock
		$$("cchg").show();
		$$("cQuick").hide();
		$$('component1').loadComponent("/Compare_Bellows.waComponent");
	};// @lock

	btSearch.click = function btSearch_click (event)// @startlock
	{// @endlock
		$$("cchg").show();
		$$("cQuick").hide();
		$$('component1').loadComponent("/Search_Bellows.waComponent");
	};// @lock

	menuItem10.click = function menuItem10_click (event)// @startlock
	{// @endlock
		$$("cchg").show();
		$$('component1').loadComponent("/Compare_Bellows.waComponent");
	};// @lock

	menuItem9.click = function menuItem9_click (event)// @startlock
	{// @endlock
		$$("cchg").show();
		$$('component1').loadComponent("/Search_Bellows.waComponent");
	};// @lock

	menuItem6.click = function menuItem6_click (event)// @startlock
	{// @endlock
		$$("cchg").show();
		$$('component1').loadComponent("/Gest_Bellows.waComponent");
	};// @lock

	menuItem7.click = function menuItem7_click (event)// @startlock
	{// @endlock
		$$("cchg").show();
		$$('component1').loadComponent("/Gest_Outils.waComponent");
	};// @lock

	menuItem2.click = function menuItem2_click (event)// @startlock
	{// @endlock
		$$("cchg").show();
		$$('component1').loadComponent("/GestMatieres.waComponent");
	};// @lock

	menuItem8.click = function menuItem8_click (event)// @startlock
	{// @endlock
		$$("cchg").show();
		$$('component1').loadComponent("/Gest_Matieres.waComponent");
	};// @lock

	menuItem1.click = function menuItem1_click (event)// @startlock
	{// @endlock
		$$("cchg").show();
		$$('component1').loadComponent("/UpdPsw.waComponent");
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		var vUser = WAF.directory.currentUser();
		if (vUser === null) {
			$$('main').destroy();
		 } else {
		 	
			if (waf.directory.currentUserBelongsTo("Ingénieur")) {
				$$('M_Administration').hide();
			}
			
		 }

	};// @lock

	M_Apropos.click = function M_Apropos_click (event)// @startlock
	{// @endlock
		$$("cchg").show();
		$$('component1').loadComponent("/Apropos.waComponent");

	};// @lock

	menuItem4.click = function menuItem4_click (event)// @startlock
	{// @endlock
		$$("cchg").show();
		$$('component1').loadComponent("/Gest_Utilisateurs.waComponent");

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
	WAF.addListener("btCompare", "click", btCompare.click, "WAF");
	WAF.addListener("btSearch", "click", btSearch.click, "WAF");
	WAF.addListener("menuItem10", "click", menuItem10.click, "WAF");
	WAF.addListener("menuItem9", "click", menuItem9.click, "WAF");
	WAF.addListener("menuItem6", "click", menuItem6.click, "WAF");
	WAF.addListener("menuItem7", "click", menuItem7.click, "WAF");
	WAF.addListener("menuItem2", "click", menuItem2.click, "WAF");
	WAF.addListener("menuItem8", "click", menuItem8.click, "WAF");
	WAF.addListener("menuItem1", "click", menuItem1.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("M_Apropos", "click", M_Apropos.click, "WAF");
	WAF.addListener("menuItem4", "click", menuItem4.click, "WAF");
	WAF.addListener("W_Login", "logout", W_Login.logout, "WAF");
	WAF.addListener("W_Login", "login", W_Login.login, "WAF");
// @endregion
};// @endlock
