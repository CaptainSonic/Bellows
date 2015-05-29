
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
	$$("component1_ListPV").setRowHeight(22);
	$$("component1_ListMesure").setRowHeight(22);
	
	var vUser;
	
	vUser = WAF.directory.currentUser().userName;
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
	var ListMesure = {};	// @dataGrid
	var btSupMes = {};	// @buttonImage
	var btNewMes = {};	// @buttonImage
	var btUpdMes = {};	// @buttonImage
	var btSaveMes = {};	// @buttonImage
	var btnBellow = {};	// @buttonImage
	var btnClient = {};	// @buttonImage
	var btSup = {};	// @buttonImage
	var cQuant = {};	// @textField
	var cNumCom = {};	// @textField
	var cNumLanc = {};	// @textField
	var ListPV = {};	// @dataGrid
	var bUndo = {};	// @button
	var bSave = {};	// @button
	var bUpdate = {};	// @button
	var bNew = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	ListMesure.onRowClick = function ListMesure_onRowClick (event)// @startlock
	{// @endlock
		var vRole;
		
		vRole = $$("component1_cRole").getValue();
		if (vRole === "Administrateur") {
			$$('component1_btSupMes').show();
			$$('component1_btUpdMes').show();
			$$('component1_btSaveMes').hide();
		}
	};// @lock

	btSupMes.click = function btSupMes_click (event)// @startlock
	{// @endlock
		var isok, vRole;
		
		isok = confirm( "Voulez-vous vraiment supprimer cette mesure de ce PV de production ?");
		
		if (isok) {
			sources.component1_mesures.removeCurrent();
			$$('component1_btSupMes').hide();
			$$('component1_btUpdMes').hide();
		}
	};// @lock

	btNewMes.click = function btNewMes_click (event)// @startlock
	{// @endlock
		sources.component1_mesures.addNewElement();
		
		$$('component1_btSupMes').hide();
		$$('component1_btSaveMes').show();
		$$('component1_btUpdMes').hide();
		$$('component1_btNewMes').hide();
		$$('component1_bUpdate').hide();
		$$('component1_btSup').hide();
		$$('component1_bNew').hide();
		$$('component1_ListPV').disable();
		$$("component1_ListMesure").disable();
		
		$$('component1_cNumLanc').hide();
		$$('component1_cNumCom').hide();
		$$('component1_cRefClient').hide();
		$$('component1_cNomClient').hide();
		$$('component1_cDesign').hide();
		$$('component1_cRefBellow').hide();
		$$('component1_cCodeBellow').hide();
		$$('component1_cQuant').hide();
		$$('component1_cNbOndes').hide();
		$$('component1_cEpParois').hide();
		$$('component1_cDiaCol1').hide();
		$$('component1_cDiaCol2').hide();
		$$('component1_cDiaEOnde').hide();
		$$('component1_cDiaIOnde').hide();
		$$('component1_cL2').hide();
		$$('component1_cL3').hide();
		$$('component1_cRaideur').hide();
		$$('component1_LibCD').hide();
		$$('component1_cbMoyenC').show();
		$$('component1_mPiece').show();
		$$('component1_LibMes').show();
		$$('component1_mNbOndes').show();
		$$('component1_mEpParois').show();
		$$('component1_mDiaCol1').show();
		$$('component1_mDiaCol2').show();
		$$('component1_mDiaEOnde').show();
		$$('component1_mDiaIOnde').show();
		$$('component1_mL2').show();
		$$('component1_mL3').show();
		$$('component1_mRaideur').show();
		
		
	};// @lock

	btUpdMes.click = function btUpdMes_click (event)// @startlock
	{// @endlock
			
		$$('component1_btSupMes').hide();
		$$('component1_btSaveMes').show();
		$$('component1_btUpdMes').hide();
		$$('component1_btNewMes').hide();
		$$('component1_bUpdate').hide();
		$$('component1_btSup').hide();
		$$('component1_bNew').hide();
		$$('component1_ListPV').disable();
		$$("component1_ListMesure").disable();
		
		$$('component1_cNumLanc').hide();
		$$('component1_cNumCom').hide();
		$$('component1_cRefClient').hide();
		$$('component1_cNomClient').hide();
		$$('component1_cDesign').hide();
		$$('component1_cRefBellow').hide();
		$$('component1_cCodeBellow').hide();
		$$('component1_cQuant').hide();
		$$('component1_cNbOndes').hide();
		$$('component1_cEpParois').hide();
		$$('component1_cDiaCol1').hide();
		$$('component1_cDiaCol2').hide();
		$$('component1_cDiaEOnde').hide();
		$$('component1_cDiaIOnde').hide();
		$$('component1_cL2').hide();
		$$('component1_cL3').hide();
		$$('component1_cRaideur').hide();
		$$('component1_LibCD').hide();
		$$('component1_cbMoyenC').show();
		$$('component1_mPiece').show();
		$$('component1_LibMes').show();
		$$('component1_mNbOndes').show();
		$$('component1_mEpParois').show();
		$$('component1_mDiaCol1').show();
		$$('component1_mDiaCol2').show();
		$$('component1_mDiaEOnde').show();
		$$('component1_mDiaIOnde').show();
		$$('component1_mL2').show();
		$$('component1_mL3').show();
		$$('component1_mRaideur').show();
		$$('component1_cbMoyenC').setValue($$('component1_mMoyenC').getValue());
		
				
	};// @lock

	btSaveMes.click = function btSaveMes_click (event)// @startlock
	{// @endlock
		var vPVID, vMoyen;
			
		$$('component1_btSupMes').hide();
		$$('component1_btSaveMes').hide();
		$$('component1_btUpdMes').hide();
		$$('component1_btNewMes').show();
		$$('component1_bUpdate').hide();
		$$('component1_btSup').hide();
		$$('component1_bNew').show();
		$$('component1_ListPV').enable();
		$$("component1_ListMesure").enable();
		$$('component1_ListPV').setReadOnly(true);
		$$('component1_ListMesure').setReadOnly(true);
		$$('component1_cNumLanc').show();
		$$('component1_cNumCom').show();
		$$('component1_cRefClient').show();
		$$('component1_cNomClient').show();
		$$('component1_cDesign').show();
		$$('component1_cRefBellow').show();
		$$('component1_cCodeBellow').show();
		$$('component1_cQuant').show();
		$$('component1_cNbOndes').show();
		$$('component1_cEpParois').show();
		$$('component1_cDiaCol1').show();
		$$('component1_cDiaCol2').show();
		$$('component1_cDiaEOnde').show();
		$$('component1_cDiaIOnde').show();
		$$('component1_cL2').show();
		$$('component1_cL3').show();
		$$('component1_cRaideur').show();
		$$('component1_LibCD').show();
		$$('component1_cbMoyenC').hide();
		$$('component1_mPiece').hide();
		$$('component1_LibMes').hide();
		$$('component1_mNbOndes').hide();
		$$('component1_mEpParois').hide();
		$$('component1_mDiaCol1').hide();
		$$('component1_mDiaCol2').hide();
		$$('component1_mDiaEOnde').hide();
		$$('component1_mDiaIOnde').hide();
		$$('component1_mL2').hide();
		$$('component1_mL3').hide();
		$$('component1_mRaideur').hide();
		$$('component1_mMoyenC').setValue($$('component1_cbMoyenC').getValue());
		
		sources.component1_mesures.PV.set(sources.component1_pVProduction);
		sources.component1_mesures.save();
		
		vPVID = sources.component1_pVProduction.ID;
		sources.component1_mesures.query("PV.ID = :1 order by ID desc", vPVID);
		
	};// @lock

	btnBellow.click = function btnBellow_click (event)// @startlock
	{// @endlock
		WAF.sources.component1_soufflets.query("Actif is true order by Reference");
	};// @lock

	btnClient.click = function btnClient_click (event)// @startlock
	{// @endlock
		WAF.sources.component1_clients.query("Actif is true order by Reference");
	};// @lock

	btSup.click = function btSup_click (event)// @startlock
	{// @endlock
		var isok, vRole;
		
		isok = confirm( "Voulez-vous vraiment supprimer ce PV de production ?");
		
		if (isok) {
			sources.component1_pVProduction.removeCurrent();
			$$('component1_btSup').hide();
			$$('component1_bUpdate').hide();
		}
	};// @lock

	cQuant.change = function cQuant_change (event)// @startlock
	{// @endlock
		var CNum, CCom, cQua;
		CNum = $$('component1_cNumLanc').getValue();
		CCom = $$('component1_cNumCom').getValue();
		CQua = parseInt($$('component1_cQuant').getValue(),10);
		
		if ((CNum.length > 2) && (CCom.length > 2) && (CQua > 0)) {
			$$('component1_bSave').enable();
		} else {
			$$('component1_bSave').disable();
		}
	};// @lock

	cNumCom.change = function cNumCom_change (event)// @startlock
	{// @endlock
		var CNum, CCom, cQua;
		CNum = $$('component1_cNumLanc').getValue();
		CCom = $$('component1_cNumCom').getValue();
		CQua = parseInt($$('component1_cQuant').getValue(),10);
		
		if ((CNum.length > 2) && (CCom.length > 2) && (CQua > 0)) {
			$$('component1_bSave').enable();
		} else {
			$$('component1_bSave').disable();
		}
	};// @lock

	cNumLanc.change = function cNumLanc_change (event)// @startlock
	{// @endlock
		var CNum, CCom, cQua;
		CNum = $$('component1_cNumLanc').getValue();
		CCom = $$('component1_cNumCom').getValue();
		CQua = parseInt($$('component1_cQuant').getValue(),10);
		
		if ((CNum.length > 2) && (CCom.length > 2) && (CQua > 0)) {
			$$('component1_bSave').enable();
		} else {
			$$('component1_bSave').disable();
		}
	};// @lock

	cNumLanc.blur = function cNumLanc_blur (event)// @startlock
	{// @endlock
		var CodeEntry, NbSamCode, vAction;
		
		CodeEntry = event.currentTarget.value;
		vAction = $$('component1_cAction').getValue();
		if (vAction === "Créer") {
			ds.PVProduction.query("Num_Lancement=:1", { 
				onSuccess:function(event) {
					var myCollection = event.entityCollection;
					NbSamCode = myCollection.length;
					if (NbSamCode > 0) {
						alert("Ce numéro de lancement (" + CodeEntry +") est déjà utilisé. Merci de saisir un numéro de lancement différent.");	
						$$('component1_cNumLanc').setValue(null);
						$$('component1_bSave').disable();
						}
					}, params:[CodeEntry] 
				});
		}
	};// @lock

	ListPV.onRowClick = function ListPV_onRowClick (event)// @startlock
	{// @endlock
		var vRole, vPVID;
		
		$$('component1_bUpdate').show();
		vRole = $$("component1_cRole").getValue();
		if (vRole === "Administrateur") {
			$$('component1_btSup').show();
			$$('component1_btNewMes').show();
			$$('component1_btSupMes').hide();
			$$('component1_btUpdMes').hide();
			$$('component1_btSaveMes').hide();
		}
		vPVID = sources.component1_pVProduction.ID;
		sources.component1_mesures.query("PV.ID = :1 order by ID desc", vPVID);
	};// @lock

	bUndo.click = function bUndo_click (event)// @startlock
	{// @endlock
		$$('component1_cNumLanc').getLabel().setTextColor("black");
		$$('component1_cNumCom').getLabel().setTextColor("black");
		$$('component1_cQuant').getLabel().setTextColor("black");
		$$('component1_ListPV').enable();
		$$('component1_ListPV').setReadOnly(true);
		$$('component1_cAction').setValue("-");
		$$('component1').loadComponent("/Gest_PV.waComponent");
		
	};// @lock

	bSave.click = function bSave_click (event)// @startlock
	{// @endlock
		var vActif;
		
		$$('component1_bUpdate').hide();
		$$('component1_bSave').hide();
		$$('component1_bUndo').hide();
		$$('component1_bNew').show();
		$$('component1_btnClient').hide();
		$$('component1_btnBellow').hide();
		$$('component1_btSup').hide();
		$$('component1_ListPV').enable();
		$$('component1_ListPV').setReadOnly(true);
		$$('component1_cNumLanc').setReadOnly(true);
		$$('component1_cNumCom').setReadOnly(true);
		$$('component1_cRefClient').show();
		$$('component1_cNomClient').show();
		$$('component1_cbClients').hide();
		$$('component1_xNomClient').hide();
		$$('component1_cDesign').setReadOnly(true);
		$$('component1_cRefBellow').show();
		$$('component1_cCodeBellow').show();
		$$('component1_cbBellows').hide();
		$$('component1_xCodeBellow').hide();
		$$('component1_cQuant').setReadOnly(true);
		$$('component1_cNbOndes').setReadOnly(true);
		$$('component1_cEpParois').setReadOnly(true);
		$$('component1_cDiaCol1').setReadOnly(true);
		$$('component1_cDiaCol2').setReadOnly(true);
		$$('component1_cDiaEOnde').setReadOnly(true);
		$$('component1_cDiaIOnde').setReadOnly(true);
		$$('component1_cL2').setReadOnly(true);
		$$('component1_cL3').setReadOnly(true);
		$$('component1_cRaideur').setReadOnly(true);
		$$('component1_rNbOndes').show();
		$$('component1_rEpParois').show();
		$$('component1_rDiaCol1').show();
		$$('component1_rDiaCol2').show();
		$$('component1_rDiaEOnde').show();
		$$('component1_rDiaIOnde').show();
		$$('component1_rL2').show();
		$$('component1_rL3').show();
		$$('component1_rRaideur').show();
		$$('component1_xNbOndes').hide();
		$$('component1_xEpParois').hide();
		$$('component1_xDiaCol1').hide();
		$$('component1_xDiaCol2').hide();
		$$('component1_xDiaEOnde').hide();
		$$('component1_xDiaIOnde').hide();
		$$('component1_xL2').hide();
		$$('component1_xL3').hide();
		$$('component1_xRaideur').hide();
		$$("component1_ListMesure").show();
		$$('component1_btNewMes').show();
		$$('component1_btSupMes').hide();
		$$('component1_btUpdMes').hide();
		$$('component1_btSaveMes').hide();
		$$('component1_cNumLanc').getLabel().setTextColor("black");
		$$('component1_cNumCom').getLabel().setTextColor("black");
		$$('component1_cQuant').getLabel().setTextColor("black");
	
		$$('component1_cAction').setValue("-");

		sources.component1_pVProduction.Client.set(sources.component1_clients);
		sources.component1_pVProduction.Soufflet.set(sources.component1_soufflets);
		sources.component1_pVProduction.save();
		
				
	};// @lock

	bUpdate.click = function bUpdate_click (event)// @startlock
	{// @endlock
		var vClient, vBellow;
		
		$$('component1_bUpdate').hide();
		$$('component1_bSave').show();
		$$('component1_bUndo').show();
		$$('component1_bNew').hide();
		$$('component1_btnClient').show();
		$$('component1_btnBellow').show();
		$$('component1_btSup').hide();
		$$('component1_ListPV').disable();
		$$('component1_cNumLanc').setReadOnly(true);
		$$('component1_cNumCom').setReadOnly(true);
		$$('component1_cRefClient').hide();
		$$('component1_cNomClient').hide();
		vClient = $$('component1_cRefClient').getValue();
		$$('component1_cbClients').show();
		$$('component1_xNomClient').show();
		$$('component1_cDesign').setReadOnly(false);
		$$('component1_cRefBellow').hide();
		$$('component1_cCodeBellow').hide();
		vBellow = $$('component1_cRefBellow').getValue();
		$$('component1_cbBellows').show();
		$$('component1_xCodeBellow').show();
		$$('component1_cQuant').setReadOnly(false);
		$$('component1_cNbOndes').setReadOnly(false);
		$$('component1_cEpParois').setReadOnly(false);
		$$('component1_cDiaCol1').setReadOnly(false);
		$$('component1_cDiaCol2').setReadOnly(false);
		$$('component1_cDiaEOnde').setReadOnly(false);
		$$('component1_cDiaIOnde').setReadOnly(false);
		$$('component1_cL2').setReadOnly(false);
		$$('component1_cL3').setReadOnly(false);
		$$('component1_cRaideur').setReadOnly(false);
		$$('component1_rNbOndes').hide();
		$$('component1_rEpParois').hide();
		$$('component1_rDiaCol1').hide();
		$$('component1_rDiaCol2').hide();
		$$('component1_rDiaEOnde').hide();
		$$('component1_rDiaIOnde').hide();
		$$('component1_rL2').hide();
		$$('component1_rL3').hide();
		$$('component1_rRaideur').hide();
		$$('component1_xNbOndes').show();
		$$('component1_xEpParois').show();
		$$('component1_xDiaCol1').show();
		$$('component1_xDiaCol2').show();
		$$('component1_xDiaEOnde').show();
		$$('component1_xDiaIOnde').show();
		$$('component1_xL2').show();
		$$('component1_xL3').show();
		$$('component1_xRaideur').show();
		$$("component1_ListMesure").hide();
		$$('component1_btNewMes').hide();
		$$('component1_btSupMes').hide();
		$$('component1_btUpdMes').hide();
		$$('component1_btSaveMes').hide();
		
		$$('component1_cAction').setValue("Modifier");
		sources.component1_clients.query("Reference = :1", vClient);
		sources.component1_soufflets.query("Reference = :1", vBellow);
		
		
	};// @lock

	bNew.click = function bNew_click (event)// @startlock
	{// @endlock
		var CLogin, CDateEntree, CFonction;
		
		sources.component1_pVProduction.addNewElement();
		
		$$('component1_bUpdate').hide();
		$$('component1_bSave').show();
		$$('component1_bSave').disable();
		$$('component1_bUndo').show();
		$$('component1_bNew').hide();
		$$('component1_btnClient').hide();
		$$('component1_btnBellow').hide();
		$$('component1_btSup').hide();
		$$('component1_ListPV').disable();
		$$('component1_cNumLanc').setReadOnly(false);
		$$('component1_cNumCom').setReadOnly(false);
		$$('component1_cRefClient').hide();
		$$('component1_cNomClient').hide();
		$$('component1_cbClients').show();
		$$('component1_xNomClient').show();
		$$('component1_cDesign').setReadOnly(false);
		$$('component1_cRefBellow').hide();
		$$('component1_cCodeBellow').hide();
		$$('component1_cbBellows').show();
		$$('component1_xCodeBellow').show();
		$$('component1_cQuant').setReadOnly(false);
		$$('component1_cNbOndes').setReadOnly(false);
		$$('component1_cEpParois').setReadOnly(false);
		$$('component1_cDiaCol1').setReadOnly(false);
		$$('component1_cDiaCol2').setReadOnly(false);
		$$('component1_cDiaEOnde').setReadOnly(false);
		$$('component1_cDiaIOnde').setReadOnly(false);
		$$('component1_cL2').setReadOnly(false);
		$$('component1_cL3').setReadOnly(false);
		$$('component1_cRaideur').setReadOnly(false);
		$$('component1_rNbOndes').hide();
		$$('component1_rEpParois').hide();
		$$('component1_rDiaCol1').hide();
		$$('component1_rDiaCol2').hide();
		$$('component1_rDiaEOnde').hide();
		$$('component1_rDiaIOnde').hide();
		$$('component1_rL2').hide();
		$$('component1_rL3').hide();
		$$('component1_rRaideur').hide();
		$$('component1_xNbOndes').show();
		$$('component1_xEpParois').show();
		$$('component1_xDiaCol1').show();
		$$('component1_xDiaCol2').show();
		$$('component1_xDiaEOnde').show();
		$$('component1_xDiaIOnde').show();
		$$('component1_xL2').show();
		$$('component1_xL3').show();
		$$('component1_xRaideur').show();
		$$("component1_ListMesure").hide();
		$$('component1_btNewMes').hide();
		$$('component1_btSupMes').hide();
		$$('component1_btUpdMes').hide();
		$$('component1_btSaveMes').hide();
		$$('component1_cNumLanc').getLabel().setTextColor("red");
		$$('component1_cNumCom').getLabel().setTextColor("red");
		$$('component1_cQuant').getLabel().setTextColor("red");
		$$('component1_cNumLanc').focus();
		$$('component1_cAction').setValue("Créer");
		WAF.sources.component1_clients.query("Actif is true order by Reference");
		WAF.sources.component1_soufflets.query("Actif is true order by Reference");
					
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_ListMesure", "onRowClick", ListMesure.onRowClick, "WAF");
	WAF.addListener(this.id + "_btSupMes", "click", btSupMes.click, "WAF");
	WAF.addListener(this.id + "_btNewMes", "click", btNewMes.click, "WAF");
	WAF.addListener(this.id + "_btUpdMes", "click", btUpdMes.click, "WAF");
	WAF.addListener(this.id + "_btSaveMes", "click", btSaveMes.click, "WAF");
	WAF.addListener(this.id + "_btnBellow", "click", btnBellow.click, "WAF");
	WAF.addListener(this.id + "_btnClient", "click", btnClient.click, "WAF");
	WAF.addListener(this.id + "_btSup", "click", btSup.click, "WAF");
	WAF.addListener(this.id + "_cQuant", "change", cQuant.change, "WAF");
	WAF.addListener(this.id + "_cNumCom", "change", cNumCom.change, "WAF");
	WAF.addListener(this.id + "_cNumLanc", "change", cNumLanc.change, "WAF");
	WAF.addListener(this.id + "_cNumLanc", "blur", cNumLanc.blur, "WAF");
	WAF.addListener(this.id + "_ListPV", "onRowClick", ListPV.onRowClick, "WAF");
	WAF.addListener(this.id + "_bUndo", "click", bUndo.click, "WAF");
	WAF.addListener(this.id + "_bSave", "click", bSave.click, "WAF");
	WAF.addListener(this.id + "_bUpdate", "click", bUpdate.click, "WAF");
	WAF.addListener(this.id + "_bNew", "click", bNew.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
