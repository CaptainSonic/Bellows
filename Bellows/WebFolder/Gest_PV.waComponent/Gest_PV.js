
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Gest_PV';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	$$("cchg").hide();
	$$("cQuick").hide();
	$$("component1_ListPV").setRowHeight(20);
	$$("component1_ListMet").setRowHeight(22);
	sources.component1_soufflets.query("Actif is true order by Reference");
	$$('component1_cAction').setValue("");
	$$('component1_cMet').setValue("");
	$$('component1_btSup').hide();
	$$('component1_btShow').show();
	
	var vUser;
	
	vUser = WAF.directory.currentUser().userName;
	sources.component1_userParam.query("Utilisateur.Login = :1", vUser);
	sources.component1_utilisateurs.query("Login = :1", { onSuccess: function(event) { 
			var vRole;
			elem = sources.component1_utilisateurs;
			if (elem.length > 0) {
				$$("component1_cRole").setValue(elem.Fonction);
				if (elem.Fonction === "Administrateur") {
					sources.component1_pVProduction.query("ID > 0 order by Date_Creation desc");
				} else {
					sources.component1_pVProduction.query("UID_Creation = :1 order by Date_Creation desc", elem.Nom_Prenom);
				}
			} else {
				$$("component1_cRole").setValue("-");
			};		
	}, params:[vUser] });
	
	// @region namespaceDeclaration// @startlock
	var OutRaid = {};	// @textField
	var OutLc2 = {};	// @textField
	var OutDc2 = {};	// @textField
	var OutLc1 = {};	// @textField
	var OutDc1 = {};	// @textField
	var OutL2 = {};	// @textField
	var OutExt = {};	// @textField
	var OutInt = {};	// @textField
	var ListPV = {};	// @dataGrid
	var cbBellows = {};	// @combobox
	var scbxDate = {};	// @checkbox
	var scbxSoufflet = {};	// @checkbox
	var btShow = {};	// @buttonImage
	var btReset = {};	// @buttonImage
	var btSearch = {};	// @buttonImage
	var btSup = {};	// @buttonImage
	// @endregion// @endlock

	// eventHandlers// @lock

	OutRaid.blur = function OutRaid_blur (event)// @startlock
	{// @endlock
		var vIntOnde, vExtOnde, vHautOnde;
		
		vIntOnde = event.currentTarget.value;
		vIntOnde = vIntOnde.replace(",",".");
		vExtOnde = $$('component1_ExtOnde').getValue();
		vExtOnde = vExtOnde.replace(",",".");
		vIntOnde = parseFloat(vIntOnde);
		vExtOnde = parseFloat(vExtOnde);
		if ((vIntOnde > 0) && (vExtOnde > 0)) {
			vHautOnde = parseFloat((vExtOnde - vIntOnde)/2);
			$$('component1_HautOnde').setValue(vHautOnde);
		} else {
			$$('component1_HautOnde').setValue("");
		}
	};// @lock

	OutLc2.blur = function OutLc2_blur (event)// @startlock
	{// @endlock
		var vIntOnde, vExtOnde, vHautOnde;
		
		vIntOnde = event.currentTarget.value;
		vIntOnde = vIntOnde.replace(",",".");
		vExtOnde = $$('component1_ExtOnde').getValue();
		vExtOnde = vExtOnde.replace(",",".");
		vIntOnde = parseFloat(vIntOnde);
		vExtOnde = parseFloat(vExtOnde);
		if ((vIntOnde > 0) && (vExtOnde > 0)) {
			vHautOnde = parseFloat((vExtOnde - vIntOnde)/2);
			$$('component1_HautOnde').setValue(vHautOnde);
		} else {
			$$('component1_HautOnde').setValue("");
		}
	};// @lock

	OutDc2.blur = function OutDc2_blur (event)// @startlock
	{// @endlock
		var vIntOnde, vExtOnde, vHautOnde;
		
		vIntOnde = event.currentTarget.value;
		vIntOnde = vIntOnde.replace(",",".");
		vExtOnde = $$('component1_ExtOnde').getValue();
		vExtOnde = vExtOnde.replace(",",".");
		vIntOnde = parseFloat(vIntOnde);
		vExtOnde = parseFloat(vExtOnde);
		if ((vIntOnde > 0) && (vExtOnde > 0)) {
			vHautOnde = parseFloat((vExtOnde - vIntOnde)/2);
			$$('component1_HautOnde').setValue(vHautOnde);
		} else {
			$$('component1_HautOnde').setValue("");
		}
	};// @lock

	OutLc1.blur = function OutLc1_blur (event)// @startlock
	{// @endlock
		var vIntOnde, vExtOnde, vHautOnde;
		
		vIntOnde = event.currentTarget.value;
		vIntOnde = vIntOnde.replace(",",".");
		vExtOnde = $$('component1_ExtOnde').getValue();
		vExtOnde = vExtOnde.replace(",",".");
		vIntOnde = parseFloat(vIntOnde);
		vExtOnde = parseFloat(vExtOnde);
		if ((vIntOnde > 0) && (vExtOnde > 0)) {
			vHautOnde = parseFloat((vExtOnde - vIntOnde)/2);
			$$('component1_HautOnde').setValue(vHautOnde);
		} else {
			$$('component1_HautOnde').setValue("");
		}
	};// @lock

	OutDc1.blur = function OutDc1_blur (event)// @startlock
	{// @endlock
		var vIntOnde, vExtOnde, vHautOnde;
		
		vIntOnde = event.currentTarget.value;
		vIntOnde = vIntOnde.replace(",",".");
		vExtOnde = $$('component1_ExtOnde').getValue();
		vExtOnde = vExtOnde.replace(",",".");
		vIntOnde = parseFloat(vIntOnde);
		vExtOnde = parseFloat(vExtOnde);
		if ((vIntOnde > 0) && (vExtOnde > 0)) {
			vHautOnde = parseFloat((vExtOnde - vIntOnde)/2);
			$$('component1_HautOnde').setValue(vHautOnde);
		} else {
			$$('component1_HautOnde').setValue("");
		}
	};// @lock

	OutL2.blur = function OutL2_blur (event)// @startlock
	{// @endlock
		var vIntOnde, vExtOnde, vHautOnde;
		
		vIntOnde = event.currentTarget.value;
		vIntOnde = vIntOnde.replace(",",".");
		vExtOnde = $$('component1_ExtOnde').getValue();
		vExtOnde = vExtOnde.replace(",",".");
		vIntOnde = parseFloat(vIntOnde);
		vExtOnde = parseFloat(vExtOnde);
		if ((vIntOnde > 0) && (vExtOnde > 0)) {
			vHautOnde = parseFloat((vExtOnde - vIntOnde)/2);
			$$('component1_HautOnde').setValue(vHautOnde);
		} else {
			$$('component1_HautOnde').setValue("");
		}
	};// @lock

	OutExt.blur = function OutExt_blur (event)// @startlock
	{// @endlock
		var vIntOnde, vExtOnde, vHautOnde;
		
		vIntOnde = event.currentTarget.value;
		vIntOnde = vIntOnde.replace(",",".");
		vExtOnde = $$('component1_ExtOnde').getValue();
		vExtOnde = vExtOnde.replace(",",".");
		vIntOnde = parseFloat(vIntOnde);
		vExtOnde = parseFloat(vExtOnde);
		if ((vIntOnde > 0) && (vExtOnde > 0)) {
			vHautOnde = parseFloat((vExtOnde - vIntOnde)/2);
			$$('component1_HautOnde').setValue(vHautOnde);
		} else {
			$$('component1_HautOnde').setValue("");
		}
	};// @lock

	OutInt.blur = function OutInt_blur (event)// @startlock
	{// @endlock
		var vIntOnde, vExtOnde, vHautOnde;
		
		vIntOnde = event.currentTarget.value;
		vIntOnde = vIntOnde.replace(",",".");
		vExtOnde = $$('component1_ExtOnde').getValue();
		vExtOnde = vExtOnde.replace(",",".");
		vIntOnde = parseFloat(vIntOnde);
		vExtOnde = parseFloat(vExtOnde);
		if ((vIntOnde > 0) && (vExtOnde > 0)) {
			vHautOnde = parseFloat((vExtOnde - vIntOnde)/2);
			$$('component1_HautOnde').setValue(vHautOnde);
		} else {
			$$('component1_HautOnde').setValue("");
		}
	};// @lock

	ListPV.onRowClick = function ListPV_onRowClick (event)// @startlock
	{// @endlock

		var vbNam, NbMet, vAction, vMet, v, vPVID, ibx;
		
		vbNam = $$('component1_RefBel').getValue();
		sources.component1_ficheMethode.query("Soufflet.Reference=:1", vbNam);
		sources.component1_soufflets.query("Reference=:1", vbNam);
		
		for (var i = 1; i < 6; i++) {
			v = "component1_n"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(true);
			v = "component1_Int"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(true);
			v = "component1_Ext"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(true);
			v = "component1_Haut"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(true);
			v = "component1_Nb"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(true);
			v = "component1_L2"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(true);
			v = "component1_Dc1"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(true);
			v = "component1_Lc1"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(true);
			v = "component1_Dc2"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(true);
			v = "component1_Lc2"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(true);
			v = "component1_Raid"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(true);
			v = "component1_mes"+i;
			$$(v).setValue("0Vide");
			$$(v).setReadOnly(true);
		}
		
		vPVID = sources.component1_pVProduction.ID;
		sources.component1_mesures.query("PV.ID = :1 order by ID", { onSuccess: function(event) {
			var ind, nb,v, MesCol, v ;
			MesCol = sources.component1_mesures;
			ind = MesCol.length;
			ibx = 1;
			for (var i = 0; i < ind; i++) {
				MesCol.getElement(i, { onSuccess: function(event) {
					var elem = event.element;
					if (ibx < 6) {
						v = "component1_n"+ibx;
						$$(v).setValue(elem.Num_Piece);
						$$(v).setReadOnly(true);
						v = "component1_Int"+ibx;
						$$(v).setValue(elem.Int_Onde);
						$$(v).setReadOnly(true);
						v = "component1_Ext"+ibx;
						$$(v).setValue(elem.Ext_Onde);
						$$(v).setReadOnly(true);
						v = "component1_Haut"+ibx;
						$$(v).setValue(elem.Haut_Onde);
						$$(v).setReadOnly(true);
						v = "component1_Nb"+ibx;
						$$(v).setValue(elem.Nb_Ondes);
						$$(v).setReadOnly(true);
						v = "component1_L2"+ibx;
						$$(v).setValue(elem.L2);
						$$(v).setReadOnly(true);
						v = "component1_Dc1"+ibx;
						$$(v).setValue(elem.Diam_Collet1);
						$$(v).setReadOnly(true);
						v = "component1_Lc1"+ibx;
						$$(v).setValue(elem.Long_Collet1);
						$$(v).setReadOnly(true);
						v = "component1_Dc2"+ibx;
						$$(v).setValue(elem.Diam_Collet2);
						$$(v).setReadOnly(true);
						v = "component1_Lc2"+ibx;
						$$(v).setValue(elem.Long_Collet2);
						$$(v).setReadOnly(true);
						v = "component1_Raid"+ibx;
						$$(v).setValue(elem.Raideur);
						$$(v).setReadOnly(true);
						v = "component1_mes"+ibx;
						$$(v).setValue(elem.ID);
						ibx += 1;
					}
				}});
			}
		}, params:[vPVID]});
		
		
		$$('component1_btSup').show();
	};// @lock

	cbBellows.click = function cbBellows_click (event)// @startlock
	{// @endlock
		sources.component1_ficheMethode.query("Soufflet.ID=0");
		$$('component1_cMet').setValue("?");
		
	};// @lock

	cbBellows.change = function cbBellows_change (event)// @startlock
	{// @endlock
	var vbID, NbMet, vAction, vMet;
		
		vbID = $$('component1_cbBellows').getValue();
		vAction = $$('component1_cAction').getValue();
		vMet = $$('component1_cMet').getValue();
		if (vAction === "Créer") {
			ds.FicheMethode.query("Soufflet.ID=:1", { 
				onSuccess:function(event) {
					var myCollection = event.entityCollection;
					NbMet = myCollection.length;
					//alert("Recherche une fiche méthode pour le soufflet " + vbID + ". On en trouve " + NbMet);
					if (vMet === "?") {
						if (NbMet === 0) {
							sources.component1_ficheMethode.addNewElement();
							//alert("Il n'y a pas de valeurs de tolérance existantes pour ce soufflet. Merci de les renseigner si vous les avez.");	
							$$('component1_cMet').setValue("Nouveau");
							} else {
							sources.component1_ficheMethode.query("Soufflet.ID=:1", vbID);
							$$('component1_cMet').setValue("Trouvé");
							}
						}
					}, params:[vbID] 
				});
		}
	};// @lock

	cbBellows.blur = function cbBellows_blur (event)// @startlock
	{// @endlock
		
	};// @lock

	scbxDate.click = function scbxDate_click (event)// @startlock
	{// @endlock
		var vNow, vToday;
		
		if ($$('component1_scbxDate').getValue()) {
			$$('component1_scDDeb').show();
			$$('component1_scDFin').show();
			vNow = new Date();
			vToday = vNow.getDate() + '/' + (vNow.getMonth()+1) + '/' +  vNow.getFullYear();
			$$('component1_scDDeb').setValue(vToday);
			$$('component1_scDFin').setValue(vToday);
		} else {
			$$('component1_scDDeb').hide();
			$$('component1_scDFin').hide();
		}
	};// @lock

	scbxSoufflet.click = function scbxSoufflet_click (event)// @startlock
	{// @endlock
		if ($$('component1_scbxSoufflet').getValue()) {
			$$('component1_scbSoufflet').show();
			sources.component1_soufflets1.query("ID > 0 order by Reference");
		} else {
			$$('component1_scbSoufflet').hide();
		}
	};// @lock

	btShow.click = function btShow_click (event)// @startlock
	{// @endlock
		$$('component1_btSup').hide();
		$$('component1_btShow').hide();
		$$('component1_ListPV').disable();
		$$('component1_PanelSearch').show();
		
	};// @lock

	btReset.click = function btReset_click (event)// @startlock
	{// @endlock
		$$('component1_scbSoufflet').hide();
		$$('component1_scDDeb').hide();
		$$('component1_scDFin').hide();
		$$('component1_scLanc').setValue(null);
		$$('component1_scbxSoufflet').uncheck();
		$$('component1_scbxDate').uncheck();
		
	};// @lock

	btSearch.click = function btSearch_click (event)// @startlock
	{// @endlock
		var LQuery, pRef, pCode, pMat, pOutil, pForm, p1C1, p2C1, p1C2, p2C2, pParm, pParM, vUser, vDeb, vFin, elem;
		
		
		$$('component1_btShow').show();
		$$('component1_ListPV').enable();
		$$('component1_ListPV').setReadOnly(true);
		$$('component1_PanelSearch').hide();
		
		
		
		if ($$('component1_scLanc').getValue().length === 0) {
			LQuery = "Num_Lancement = '*' ";
		} else {
			LQuery = "Num_Lancement = '*" + $$('component1_scLanc').getValue() + "*' ";
		}
			
				
		pOutil = "*";
		if ($$('component1_scbxSoufflet').getValue()) {
			pOutil = $$('component1_scbSoufflet').getValue();
			LQuery = LQuery + "and Soufflet.ID = " + pOutil + " ";
		}
		
		pParm = 0;
		pParM = 0;
		if ($$('component1_scbxDate').getValue()) {
			pParm = $$('component1_scDDeb').getValue();
			split_date = pParm.split('/');
			vDeb = new Date(split_date[2], split_date[1]*1 - 1, split_date[0]*1);
			pParM = $$('component1_scDFin').getValue();
			split_date = pParM.split('/');
			vFin = new Date(split_date[2], split_date[1]*1 - 1, split_date[0]*1);
			//alert("Min "+ pParm + "  Max "+pParM);
			LQuery = LQuery + "and ( Date_Creation >= :1 and Date_Creation <= :2 ) ";
			elem = sources.component1_userParam;
    		if (elem.length > 0) {
    			sources.component1_userParam.save();
    		}
    		
		}
		
		//alert(LQuery);
		
		vUser = WAF.directory.currentUser().userName;
		//alert(vUser);
		sources.component1_utilisateurs.query("Login = :1", { onSuccess: function(event) { 
			var vUser;
			vUser = WAF.directory.currentUser().userName;
    		sources.component1_userParam.query("Utilisateur.Login = :1", { onSuccess: function(event) { 
    			elem = sources.component1_userParam;
    			if (elem.length === 0) {
     				sources.component1_userParam.addNewElement();
     				sources.component1_utilisateurs.query("Login = :1", { onSuccess: function(event) { 
      					sources.component1_userParam.Utilisateur.set(sources.component1_utilisateurs);
      					sources.component1_userParam.StQuery = LQuery;
      		      		sources.component1_userParam.save();
     				}, params:[vUser] });
    			} else {
     				sources.component1_userParam.StQuery = LQuery;
     				sources.component1_userParam.save();
    			}
    		}, params:[vUser] });
    		
    	}, params:[vUser] });
		
		WAF.sources.component1_pVProduction.query(LQuery, vDeb, vFin);
		
		
		
	};// @lock

	btSup.click = function btSup_click (event)// @startlock
	{// @endlock
		var isok, vRole;
		
		isok = confirm( "Voulez-vous vraiment supprimer ce PV de production ?");
		
		if (isok) {
			sources.component1_pVProduction.removeCurrent();
			$$('component1_btSup').hide();
		}
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_OutRaid", "blur", OutRaid.blur, "WAF");
	WAF.addListener(this.id + "_OutLc2", "blur", OutLc2.blur, "WAF");
	WAF.addListener(this.id + "_OutDc2", "blur", OutDc2.blur, "WAF");
	WAF.addListener(this.id + "_OutLc1", "blur", OutLc1.blur, "WAF");
	WAF.addListener(this.id + "_OutDc1", "blur", OutDc1.blur, "WAF");
	WAF.addListener(this.id + "_OutL2", "blur", OutL2.blur, "WAF");
	WAF.addListener(this.id + "_OutExt", "blur", OutExt.blur, "WAF");
	WAF.addListener(this.id + "_OutInt", "blur", OutInt.blur, "WAF");
	WAF.addListener(this.id + "_ListPV", "onRowClick", ListPV.onRowClick, "WAF");
	WAF.addListener(this.id + "_cbBellows", "click", cbBellows.click, "WAF");
	WAF.addListener(this.id + "_cbBellows", "change", cbBellows.change, "WAF");
	WAF.addListener(this.id + "_cbBellows", "blur", cbBellows.blur, "WAF");
	WAF.addListener(this.id + "_scbxDate", "click", scbxDate.click, "WAF");
	WAF.addListener(this.id + "_scbxSoufflet", "click", scbxSoufflet.click, "WAF");
	WAF.addListener(this.id + "_btShow", "click", btShow.click, "WAF");
	WAF.addListener(this.id + "_btReset", "click", btReset.click, "WAF");
	WAF.addListener(this.id + "_btSearch", "click", btSearch.click, "WAF");
	WAF.addListener(this.id + "_btSup", "click", btSup.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
