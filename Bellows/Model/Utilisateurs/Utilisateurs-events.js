﻿model.Utilisateurs.events.onInit = function() {	this.UID_Creation = currentUser().fullName;	this.Date_Creation = new Date();	this.UID_MAJ = currentUser().fullName;	this.Derniere_MAJ = new Date();};model.Utilisateurs.events.onSave = function() {	var Prenom, UsFonct, cAction, newEleve, newUser, ExUser;		this.UID_MAJ = currentUser().fullName;	this.Derniere_MAJ = new Date();	Prenom = this.Prenom;	this.Nom = this.Nom.toUpperCase();	this.Prenom = Prenom.charAt(0).toUpperCase() + Prenom.substring(1,Prenom.length).toLowerCase();	this.Nom_Prenom = this.Nom + " " + this.Prenom;	UsFonct = this.Fonction;	cAction = this.Action;		if (cAction === 'Créer') {		newUser = directory.addUser(this.Login, this.Password, this.Nom_Prenom);		newUser.putInto (UsFonct);		directory.save();				if (UsFonct === 'Ingénieur') {			newInge = ds.Ingenieurs.createEntity();			newInge.Nom_Complet = this.Nom_Prenom;			newInge.Utilisateur = this.ID;			newInge.save();		}	}		if (cAction === 'UpdPswd') {		ExUser = directory.user(this.Login);		if (ExUser != null) {    		ExUser.setPassword(this.Password);   // only the HA1 key will be stored in the directory		}		directory.save();	}};