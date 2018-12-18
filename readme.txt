BITS Beh�rden-IT-Sicherheitstraining



Stand: 11.12.2018

Version 5.01


Ansprechpartner Dr. Lutz Gollan, Beh�rde f�r Inneres und Sport, Hamburg
E-Mail: Lutz.Gollan@bis.hamburg.de



1.�berblick

Unter dem Titel �BITS Beh�rden-IT-Sicherheitstraining� hat im Jahr 2006 eine Arbeitsgruppe des Arbeitskreises Informationstechnologie des St�dte- und Gemeindebundes Nordrhein-Westfalen das f�r Unternehmen konzipierte Computersicherheitstraining �open beware!� an die Anforderungen von Verwaltungen angepasst. Mittlerweile liegt die aktualisierte Version 5 vor. Seit Oktober 2010 wird BITS von der Kommunal Agentur NRW GmbH (https://www.kommunalagenturnrw.de) mit Unterst�tzung von Dr. Lutz Gollan, Beh�rde f�r Inneres und Sport, Hamburg, herausgegeben. Die letzten �nderungen sind der Changelog-Datei zu entnehmen.



2.Ziel

Durch das Training sollen die Mitarbeiterinnen und Mitarbeiter von Verwaltungen, die regelm��ig an EDV-Arbeitspl�tzen und insbesondere mit dem Internet besch�ftigt sind, durch gezielte Information und Selbstlerneinheiten f�r die Sicherheitsaspekte der Computer- und Internetnutzung sensibilisiert werden.


Das Training ist kostenlos und vollst�ndig browserbasiert.



3.Installation und Anpassung

�BITS Beh�rden-IT-Sicherheitstraining� steht als ZIP-Datei zur Verf�gung. F�r die Mitarbeiterschaft kann es auf einem Server, einem Arbeitsplatz oder auf einem Wechselspeichermedium (DVD, USB-Stick) entpackt werden. Da �BITS Beh�rden-IT-Sicherheitstraining� HTML-basiert ist, kann es problemlos in einen Intranetauftritt integriert werden. 

BITS kann auch auf ein Microsoft Sharepoint-Verzeichnis geladen und direkt dort aufgerufen werden.



In einigen Ordnern befindet sich eine Readme.txt, die Hinweise zum Anpassen, etwa der CSS-Dateien, gibt.



Vor der Freigabe f�r die Mitarbeiterschaft sollte die Seite �Ansprechpersonen� f�r die entsprechende Verwaltung angepasst werden. Dies ist die Datei �index.htm� im Pfad �allgemeines\ansprechpartner�. Hierzu sind HTML-Kenntnisse erforderlich. Gleiches gilt f�r den Fall, dass anderslautende Dienstvereinbarungen oder -anweisungen, insbesondere f�r die Kapitel "E-Mail" und "Vertrauliche Daten", existieren. Diese und weitere Dokumente k�nnen �ber die Seite "allgemeines\dokumente" verlinkt werden.

Das Bild im Kopf von BITS ist die Datei header.jpg im Pfad "images\design" (960px breit, 140px hoch). Dazu kommt das linke Bild mit den "Logos" im gleichen Ordner (logolinks.jpg 220px breit, 140px hoch).

Bitte bedenken Sie, dass BITS nur ein Angebot darstellt und leicht auf die lokalen Anforderungen hin angepasst werden kann.



�ber die Herausgeber bzw. den oben genannten Ansprechpartner kann der MD5-Hashwert der BITS-Version abgefragt werden. Dadurch soll verhindert werden, dass eine manipulierte BITS-Version heruntergeladen bzw. eingesetzt wird.



4. Bedienung und technische Anforderungen

Die Bedienung von �BITS Beh�rden-IT-Sicherheitstraining� erfolgt durch den Aufruf der �index.html�-Seite (unmittelbar oder durch Verlinkung hierauf). Anschlie�end k�nnen die weitestgehend barrierefreien Seiten durch die Maus oder durch Tastaturbefehle genutzt werden.



BITS unterst�tzt grunds�tzlich jeden aktuellen Browser. JavaScript muss aktiviert sein, andernfalls kommt es bei der Navigation und bei den Wissenstests zu Problemen. Eine Soundkarte bzw. Lautsprecher sind zur Nutzung nicht erforderlich. Dank des direkt eingebundenen Bootstrap-Frameworks und des responsiven Webdesigns ist auch eine Nutzung �ber mobile Endger�te m�glich. BITS wurde mit den Browsern MS Internet Explorer, Edge, Vivaldi, Mozilla Firefox und Chrome getestet.



5. "Gewinnspiel"

Es besteht die M�glichkeit, dass bei den Wissenschecks am Ende der Lektionen bei Anklicken der richtigen Antwort Buchstaben eingeblendet werden. Wenn die entsprechenden Buchstaben durch den Nutzer innerhalb eines Gewinnspiels der Beh�rde eingesendet werden, kann so ein Anreiz zur Nutzung von BITS geschaffen werden.



5.1

Das Gewinnspiel ist zun�chst ausgeschaltet und wird �ber eine Einstellung in der CSS-Definition sichtbar gemacht.

�ndern von
	/*  Wissensquiz - Gewinnspiel einschalten / ausschalten */
		.panel-footer-quiz {
		  visibility: hidden;
		  /* visibility: visible;  */
		} 
in
	/* Wissensquiz - Gewinnspiel einschalten / ausschalten */
		.panel-footer-quiz {
		  /*  visibility: hidden; */
		  visibility: visible;  
		  }



5.2
Als Standardl�sung ist folgender Satz bereite hinterlegt:
Sicherheit_entsteht,_wenn_alle_mitmachen!

Sie k�nnen diese �ndern. Der Wissens-Check ist dazu jeweils in den Dateien test0*.htm in den Lektrionen in folgender Reihenfolge anzupassen:
1	\e-mail\test01.htm		Si
2	\e-mail\test02.htm		ch
3	\e-mail\test03.htm		er
4	\e-mail\test04.htm		he
5	\viren\test01.htm		it
6	\viren\test02.htm		_e
7	\viren\test03.htm		nt
8	\viren\test04.htm		st
9	\passworte\test01.htm		eh
10	\passworte\test02.htm		h
11	\passworte\test03.htm		t
12	\passworte\test04.htm		,
13	\passworte\test05.htm		_
14	\passworte\test06.htm		w
15	\internet\test01.htm		e
16	\internet\test02.htm		n
17	\internet\test03.htm		n
18	\internet\test04.htm		_
19	\vertraulich\test01.htm		a
20	\vertraulich\test02.htm		l
21	\vertraulich\test03.htm		l
22	\socialmedia\test01.htm		e
23	\socialmedia\test02.htm		_
24	\socialmedia\test03.htm		m
25	\cloud\test01.htm		i
26	\cloud\test02.htm		ma
27	\cloud\test03.htm		a
28	\cloud\test04.htm		c
29	\mobile\test01.htm		h
30	\mobile\test02.htm		e
31	\mobile\test03.htm		n
32	\mobile\test04.htm		!

Im HTML-Quellcode zum Beispiel in der Datei  \e-mailt\test01.htm die Buchstaben "Si" hinterlegt worden. Dort k�nnen im L�sungs-Bereich 
          <h4 class="modal-title">Richtig !</h4>
        		<div class="panel-footer-quiz">
				<h5>
				Zur L�sung des Quiz notieren Sie folgende Buchstaben:</h5>
				<h3>
				<span class="label label-warning">S</span>
				<span class="label label-warning">i</span>
				</h3>
				</div>
in Zeilen 163 und 164 die Buchstaben nach Belieben angepasst und bei Bedarf die Zeilen kopiert und eingef�gt (bei mehr als 2 L�sungsbuchstaben) 
oder gel�scht (nur 1 L�sungsbuchstabe)			
				<span class="label label-warning">S</span>
				<span class="label label-warning">i</span>
		

6. BITS-Portal

F�r Administratoren steht kostenfrei das BITS-Portal http://www.bits-portal.eu zur Verf�gung. Dort werden Beta-Versionen bereitgehalten, neue Funktionen und Inhalte vorgestellt und diskutiert.



7.Rechtliches

�BITS Beh�rden-IT-Sicherheitstraining� basiert auf open beware!, das von der BDG GmbH & Co. KG, jetzt NTT Security (Germany) GmbH, herausgegeben wurde.

Die Urheber sind Herr Dr. Lutz Gollan und Herr Hartmut Honermann, PureSec GmbH.



Die technische Realisierung erfolgt durch Herrn Werner Eising, Stadt Coesfeld.



BITS ist kostenlos und steht unter der Creative Commons (CC) Lizenz BY-SA (https://creativecommons.org/licenses/by-sa/3.0/de/).


Sie d�rfen:

� Teilen � das Material in jedwedem Format oder Medium vervielf�ltigen und weiterverbreiten
-
� Bearbeiten � das Material remixen, ver�ndern und darauf aufbauen
und zwar f�r beliebige Zwecke, sogar kommerziell.


Der Lizenzgeber kann diese Freiheiten nicht widerrufen solange Sie sich an die Lizenzbedingungen halten:

� Namensnennung � Sie m�ssen angemessene Urheber- und Rechteangaben machen, einen Link zur Lizenz (diese Seite) beif�gen und angeben, ob �nderungen vorgenommen wurden. Diese Angaben d�rfen in jeder angemessenen Art und Weise gemacht werden, allerdings nicht so, dass der Eindruck entsteht, der Lizenzgeber unterst�tze gerade Sie oder Ihre Nutzung besonders.

� Weitergabe unter gleichen Bedingungen � Wenn Sie das Material remixen, ver�ndern oder anderweitig direkt darauf aufbauen, d�rfen Sie Ihre Beitr�ge nur unter derselben Lizenz wie das Original verbreiten

- Keine weiteren Einschr�nkungen � Sie d�rfen keine zus�tzlichen Klauseln oder technische Verfahren einsetzen, die anderen rechtlich irgendetwas untersagen, was die Lizenz erlaubt.



Das integrierte Bootstrap-Framework (https://getbootstrap.com/) steht unter der MIT-Lizenz, bei einer Ver�nderung von BITS etc. d�rfen die Lizenzhinweise nicht aus dem Quelltext entfernt werden. Das Copyright f�r Bootstrap liegt bei Twitter.



Die Grafiken sind unterliegen der Common Criteria CC0 (https://openclipart.org/share und https://pixabay.com/). Die Grafik viren03b-bot.jpg wurde von Herrn J�rg Lekschas erstellt.

 Das Urheberrecht f�r die Grafik header.jpg im Kopfbereich von BITS liegt bei fotolia.de/kras99. Beim Kapitel "Cloud" hat Frau Heike Brzezina wertvolle Hinweise gegeben.



�nderungs- oder Erg�nzungsw�nsche nimmt Dr. Lutz Gollan (Lutz.Gollan@bis.hamburg.de) gerne entgegen.



-------------------------------------------------------------
