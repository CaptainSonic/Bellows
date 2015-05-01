
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Gest_Bellows';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
	$$("cchg").hide();
	$$("component1_ListBell").setRowHeight(22);

	// @region namespaceDeclaration// @startlock
	var cNbParois = {};	// @textField
	var cAnnee = {};	// @textField
	var cShSx = {};	// @combobox
	var cCode = {};	// @textField
	var cRefC = {};	// @textField
	var bUndo = {};	// @button
	var bSave = {};	// @button
	var bUpdate = {};	// @button
	var bNew = {};	// @button
	var fCode = {};	// @textField
	var fRef = {};	// @textField
	// @endregion// @endlock

	// eventHandlers// @lock

	cNbParois.change = function cNbParois_change (event)// @startlock
	{// @endlock
		var CNbParois;
		CNbParois = $$('component1_cNbParois').getValue();
		
		if ((CNbParois < 0) && (CNbParois > 20)) {
			alert("Le nombre de parois doit être compris entre 0 et 20");
			$$('component1_cNbParois').setValue(0);
		} 
	};// @lock

	cAnnee.change = function cAnnee_change (event)// @startlock
	{// @endlock
		var CAnnee;
		CAnnee = $$('component1_cAnnee').getValue();
				
		if ((CAnnee < 1980) && (CAnnee > 2050)) {
			alert("L'année doit être comprise entre 1980 et 2050");
			$$('component1_cAnnee').setValue(0);
		} 
	};// @lock

	cShSx.blur = function cShSx_blur (event)// @startlock
	{// @endlock
		var vRef, NbSamRef, vAction;
		
		
		vRef =  event.currentTarget.value + $$('component1_cRefC').getValue();
		$$('component1_cRef').setValue(vRef);
		
		vAction = $$('component1_cAction').getValue();
		if (vAction === "Créer") {
			ds.Soufflets.query("Reference=:1", { 
				onSuccess:function(event) {
					var myCollection = event.entityCollection;
					NbSamRef = myCollection.length;
					if (NbSamRef > 0) {
						alert("Cette référence de soufflet (" + vRef +") est déjà utilisée. Merci de saisir une référence de soufflet différente.");	
						$$('component1_cRefC').setValue(null);
						$$('component1_cRef').setValue(null);
						//$$('component1_clogin').focus(true);
						$$('component1_bSave').disable();
						}
					}, params:[vRef] 
				});
		}
	};// @lock

	cCode.blur = function cCode_blur (event)// @startlock
	{// @endlock
		var CodeEntry, NbSamCode, vAction;
		
		CodeEntry = event.currentTarget.value;
		vAction = $$('component1_cAction').getValue();
		if (vAction === "Créer") {
			ds.Soufflets.query("Code=:1", { 
				onSuccess:function(event) {
					var myCollection = event.entityCollection;
					NbSamCode = myCollection.length;
					if (NbSamCode > 0) {
						alert("Ce code de soufflet (" + CodeEntry +") est déjà utilisé. Merci de saisir un code de soufflet différent");	
						$$('component1_cCode').setValue(null);
						//$$('component1_clogin').focus(true);
						$$('component1_bSave').disable();
						}
					}, params:[CodeEntry] 
				});
		}
	};// @lock

	cRefC.change = function cRefC_change (event)// @startlock
	{// @endlock
		var CRef;
		CRef = $$('component1_cRefC').getValue();
				
		if (CRef.length > 2) {
			$$('component1_bSave').enable();
		} else {
			$$('component1_bSave').disable();
		}
	};// @lock

	cRefC.blur = function cRefC_blur (event)// @startlock
	{// @endlock
		var vRef, NbSamRef, vAction;
		
		
		vRef = $$('component1_cShSx').getValue() + event.currentTarget.value;
		$$('component1_cRef').setValue(vRef);
		
		vAction = $$('component1_cAction').getValue();
		if (vAction === "Créer") {
			ds.Soufflets.query("Reference=:1", { 
				onSuccess:function(event) {
					var myCollection = event.entityCollection;
					NbSamRef = myCollection.length;
					if (NbSamRef > 0) {
						alert("Cette référence de soufflet (" + vRef +") est déjà utilisée. Merci de saisir une référence de soufflet différente.");	
						$$('component1_cRefC').setValue(null);
						$$('component1_cRef').setValue(null);
						//$$('component1_clogin').focus(true);
						$$('component1_bSave').disable();
						}
					}, params:[vRef] 
				});
		}
	};// @lock

	bUndo.click = function bUndo_click (event)// @startlock
	{// @endlock
		
		
		$$('component1_cAction').setValue("-");
		$$('component1').loadComponent("/Gest_Bellows.waComponent");
		
	};// @lock

	bSave.click = function bSave_click (event)// @startlock
	{// @endlock
		var vRef,vAction, vTrsf;
		
		vAction = $$('component1_cAction').getValue();
		if (vAction === "Créer") {
			vRef = $$('component1_cShSx').getValue() + $$('component1_cRefC').getValue();
			$$('component1_cRef').setValue(vRef);
		}
		
		$$('component1_bUpdate').show();
		$$('component1_bSave').hide();
		$$('component1_bUndo').hide();
		$$('component1_bNew').show();
		$$('component1_ListBell').enable();
		$$('component1_ListBell').setReadOnly(true);
		
		$$('component1_cRef').show();
		$$('component1_cRefC').hide();
		$$('component1_cShSx').hide();
		$$('component1_cCode').setReadOnly(true);
		$$('component1_cAnnee').setReadOnly(true);
		$$('component1_cMatNom').show();
		$$('component1_cbMat').hide();
		$$('component1_cNbParois').setReadOnly(true);
		$$('component1_cEpParois').setReadOnly(true);
		$$('component1_cNbOndes').setReadOnly(true);
		$$('component1_cCollet1').show();
		$$('component1_cbCollet1').hide();
		$$('component1_cDiaCol1').setReadOnly(true);
		$$('component1_cCollet2').show();
		$$('component1_cbCollet2').hide();
		$$('component1_cDiaCol2').setReadOnly(true);
		$$('component1_cDiaEOnde').setReadOnly(true);
		$$('component1_cDiaIOnde').setReadOnly(true);
		$$('component1_cL2').setReadOnly(true);
		$$('component1_cL3').setReadOnly(true);
		$$('component1_cRaideur').setReadOnly(true);
		$$('component1_cPExt').setReadOnly(true);
		$$('component1_cPInt').setReadOnly(true);
		$$('component1_cRefOut').show();
		$$('component1_cbRefOut').hide();
		$$('component1_cForm').show();
		$$('component1_cbForm').hide();
		$$('component1_cSurf').setReadOnly(true);
		$$('component1_cComp').setReadOnly(true);
		$$('component1_cObs').setReadOnly(true);
		$$('component1_cbActif').hide();
		
		vTrsf = $$('component1_cbCollet1').getValue();
		$$('component1_cCollet1').setValue(vTrsf);
		vTrsf = $$('component1_cbCollet2').getValue();
		$$('component1_cCollet2').setValue(vTrsf);
		vTrsf = $$('component1_cbForm').getValue();
		$$('component1_cForm').setValue(vTrsf);
		
		$$('component1_cAction').setValue("-");
		
		$$('component1_cDiamP').show();
		$$('component1_xDiamP').hide();
		$$('component1_cEpPlaque').show();
		$$('component1_xEpPlaque').hide();
		$$('component1_cProfEmp').show();
		$$('component1_xProfEmp').hide();
		$$('component1_cMatCode').show();
		$$('component1_xMatCode').hide();
		$$('component1_cMatTyp').show();
		$$('component1_xMatTyp').hide();


		sources.component1_soufflets.Matiere.set(sources.component1_matieres);
		sources.component1_soufflets.Outil.set(sources.component1_outils);
		sources.component1_soufflets.save();
		
				
	};// @lock

	bUpdate.click = function bUpdate_click (event)// @startlock
	{// @endlock
		var vTrsf;
		
		$$('component1_bUpdate').hide();
		$$('component1_bSave').show();
		$$('component1_bSave').enable();
		$$('component1_bUndo').show();
		$$('component1_bNew').hide();
		$$('component1_ListBell').disable();
		
		$$('component1_cRef').show();
		$$('component1_cRefC').hide();
		$$('component1_cShSx').hide();
		$$('component1_cCode').setReadOnly(false);
		$$('component1_cAnnee').setReadOnly(false);
		$$('component1_cMatNom').hide();
		$$('component1_cbMat').show();
		$$('component1_cNbParois').setReadOnly(false);
		$$('component1_cEpParois').setReadOnly(false);
		$$('component1_cNbOndes').setReadOnly(false);
		$$('component1_cCollet1').hide();
		$$('component1_cbCollet1').show();
		$$('component1_cDiaCol1').setReadOnly(false);
		$$('component1_cCollet2').hide();
		$$('component1_cbCollet2').show();
		$$('component1_cDiaCol2').setReadOnly(false);
		$$('component1_cDiaEOnde').setReadOnly(false);
		$$('component1_cDiaIOnde').setReadOnly(false);
		$$('component1_cL2').setReadOnly(false);
		$$('component1_cL3').setReadOnly(false);
		$$('component1_cRaideur').setReadOnly(false);
		$$('component1_cPExt').setReadOnly(false);
		$$('component1_cPInt').setReadOnly(false);
		$$('component1_cRefOut').hide();
		$$('component1_cbRefOut').show();
		$$('component1_cForm').hide();
		$$('component1_cbForm').show();
		$$('component1_cSurf').setReadOnly(false);
		$$('component1_cComp').setReadOnly(false);
		$$('component1_cObs').setReadOnly(false);
		$$('component1_cbActif').show();
		
		$$('component1_cDiamP').hide();
		$$('component1_xDiamP').show();
		$$('component1_cEpPlaque').hide();
		$$('component1_xEpPlaque').show();
		$$('component1_cProfEmp').hide();
		$$('component1_xProfEmp').show();
		$$('component1_cMatCode').hide();
		$$('component1_xMatCode').show();
		$$('component1_cMatTyp').hide();
		$$('component1_xMatTyp').show();
		
		vTrsf = $$('component1_cxMat').getValue();
		$$('component1_cbMat').setValue(vTrsf);
		vTrsf = $$('component1_cCollet1').getValue();
		$$('component1_cbCollet1').setValue(vTrsf);
		vTrsf = $$('component1_cCollet2').getValue();
		$$('component1_cbCollet2').setValue(vTrsf);
		vTrsf = $$('component1_cxRefOut').getValue();
		$$('component1_cbRefOut').setValue(vTrsf);
		vTrsf = $$('component1_cForm').getValue();
		$$('component1_cbForm').setValue(vTrsf);
		
		$$('component1_cAction').setValue("Modifier");
		
		
	};// @lock

	bNew.click = function bNew_click (event)// @startlock
	{// @endlock
		var CLogin, CDateEntree, CFonction;
		
		sources.component1_soufflets.addNewElement();
		
		$$('component1_bUpdate').hide();
		$$('component1_bSave').show();
		$$('component1_bSave').disable();
		$$('component1_bUndo').show();
		$$('component1_bNew').hide();
		$$('component1_ListBell').disable();
		
		$$('component1_cRef').hide();
		$$('component1_cRefC').show();
		$$('component1_cRefC').setValue(null);
		$$('component1_cShSx').show();
		$$('component1_cCode').setReadOnly(false);
		$$('component1_cAnnee').setReadOnly(false);
		$$('component1_cMatNom').hide();
		$$('component1_cbMat').show();
		$$('component1_cNbParois').setReadOnly(false);
		$$('component1_cEpParois').setReadOnly(false);
		$$('component1_cNbOndes').setReadOnly(false);
		$$('component1_cCollet1').hide();
		$$('component1_cbCollet1').show();
		$$('component1_cDiaCol1').setReadOnly(false);
		$$('component1_cCollet2').hide();
		$$('component1_cbCollet2').show();
		$$('component1_cDiaCol2').setReadOnly(false);
		$$('component1_cDiaEOnde').setReadOnly(false);
		$$('component1_cDiaIOnde').setReadOnly(false);
		$$('component1_cL2').setReadOnly(false);
		$$('component1_cL3').setReadOnly(false);
		$$('component1_cRaideur').setReadOnly(false);
		$$('component1_cPExt').setReadOnly(false);
		$$('component1_cPInt').setReadOnly(false);
		$$('component1_cRefOut').hide();
		$$('component1_cbRefOut').show();
		$$('component1_cForm').hide();
		$$('component1_cbForm').show();
		$$('component1_cSurf').setReadOnly(false);
		$$('component1_cComp').setReadOnly(false);
		$$('component1_cObs').setReadOnly(false);
		$$('component1_cbActif').hide();
		
		$$('component1_cDiamP').hide();
		$$('component1_xDiamP').show();
		$$('component1_cEpPlaque').hide();
		$$('component1_xEpPlaque').show();
		$$('component1_cProfEmp').hide();
		$$('component1_xProfEmp').show();
		$$('component1_cMatCode').hide();
		$$('component1_xMatCode').show();
		$$('component1_cMatTyp').hide();
		$$('component1_xMatTyp').show();
		
		$$('component1_cRefC').focus();
		$$('component1_cAction').setValue("Créer");
					
	};// @lock

	fCode.keyup = function fCode_keyup (event)// @startlock
	{// @endlock
		$$('component1_fRef').setValue(null);
		WAF.sources.component1_soufflet.query("Code = :1", event.currentTarget.value + "*");
	};// @lock

	fRef.keyup = function fRef_keyup (event)// @startlock
	{// @endlock
		$$('component1_fCode').setValue(null);
		WAF.sources.component1_soufflet.query("Reference = :1", event.currentTarget.value + "*");
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_cNbParois", "change", cNbParois.change, "WAF");
	WAF.addListener(this.id + "_cAnnee", "change", cAnnee.change, "WAF");
	WAF.addListener(this.id + "_cShSx", "blur", cShSx.blur, "WAF");
	WAF.addListener(this.id + "_cRefC", "change", cRefC.change, "WAF");
	WAF.addListener(this.id + "_cCode", "blur", cCode.blur, "WAF");
	WAF.addListener(this.id + "_cRefC", "blur", cRefC.blur, "WAF");
	WAF.addListener(this.id + "_bUndo", "click", bUndo.click, "WAF");
	WAF.addListener(this.id + "_bSave", "click", bSave.click, "WAF");
	WAF.addListener(this.id + "_bUpdate", "click", bUpdate.click, "WAF");
	WAF.addListener(this.id + "_bNew", "click", bNew.click, "WAF");
	WAF.addListener(this.id + "_fCode", "keyup", fCode.keyup, "WAF");
	WAF.addListener(this.id + "_fRef", "keyup", fRef.keyup, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
