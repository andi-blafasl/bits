BITS Beh�rden-IT-Sicherheitstraining

Stand: 07.02.2017
Version 4.01
Autoren: AK IT StGB NRW, Dr. Lutz Gollan (Beh�rde f�r Inneres und Sport, Hamburg), Werner Eising (technische Unterst�tzung, Stadt Coesfeld), J�rg Lekschas (Bots-Seite, Robert-Koch-Institut, Berlin).
Ansprechpartner Dr. Lutz Gollan
E-Mail: Lutz.Gollan@bis.hamburg.de

1.�berblick
Unter dem Titel �BITS Beh�rden-IT-Sicherheitstraining� hat im Jahr 2006 eine Arbeitsgruppe des Arbeitskreises Informationstechnologie des St�dte- und Gemeindebundes Nordrhein-Westfalen das f�r Unternehmen konzipierte Computersicherheitstraining �open beware!� an die Anforderungen von Verwaltungen angepasst. Mittlerweile liegt die aktualisierte Version 4.01 vor. Seit Oktober 2010 wird BITS von der Kommunal Agentur NRW GmbH (http://www.kommunalagenturnrw.de) mit Unterst�tzung von Dr. Lutz Gollan, Beh�rde f�r Inneres und Sport, Hamburg, herausgegeben.

2.Ziel
Durch das Training sollen die Mitarbeiterinnen und Mitarbeiter von Verwaltungen, die regelm��ig an EDV-Arbeitspl�tzen und insbesondere mit dem Internet besch�ftigt sind, durch gezielte Information und Selbstlerneinheiten f�r die Sicherheitsaspekte der Computer- und Internetnutzung sensibilisiert werden.
Das Training ist kostenlos, vollst�ndig browserbasiert und kann in jedes Intranet eingebettet werden.

3.Installation
�BITS Beh�rden-IT-Sicherheitstraining� steht als ZIP-Datei zur Verf�gung. F�r die Mitarbeiterschaft kann es auf einem Server, einem Arbeitsplatz oder auf einem Wechselspeichermedium (DVD, USB-Stick) entpackt werden. Da �BITS Beh�rden-IT-Sicherheitstraining� HTML-basiert ist, kann es problemlos in einen Intranetauftritt integriert werden.

BITS kann auch auf ein Microsoft Sharepoint-Verzeichnis geladen und direkt dort aufgerufen werden. F�r diesen Fall ist jedoch der Ordner "tools" vorher zu l�schen. Er beinhaltet Dateien (.bat), die von Sharepoint nicht akzeptiert werden. 

Vor der Freigabe f�r die Mitarbeiterschaft sollte die Seite �Ansprechpersonen� f�r die entsprechende Verwaltung angepasst werden. Dies ist die Datei �index.htm� im Pfad �allgemeines\ansprechpartner�. Hierzu sind HTML-Kenntnisse erforderlich. Gleiches gilt f�r den Fall, dass anders lautende Dienstvereinbarungen oder -anweisungen, insbesondere f�r die Kapitel "E-Mail" und "Vertrauliche Daten", existieren. Diese und weitere Dokumente k�nnen �ber die Seite "allgemeines\dokumente" verlinkt werden. Das Logo im Kopf von BITS ist die Datei kopfbild.jpg im Pfad "\images\individuell". Bitte bedenken Sie, dass BITS nur ein Angebot darstellt und leicht auf die lokalen Anforderungen hin angepasst werden kann.

�ber die Herausgeber bzw. den oben genannten Ansprechpartner kann der MD5-Hashwert der BITS-Version abgefragt werden. Dadurch soll verhindert werden, dass eine manipulierte BITS-Version heruntergeladen bzw. eingesetzt wird.

4. Bedienung und technische Anforderungen
Die Bedienung von �BITS Beh�rden-IT-Sicherheitstraining� erfolgt durch den Aufruf der �index.html�-Seite (unmittelbar oder durch Verlinkung hierauf). Anschlie�end k�nnen die weitestgehend barrierefreien Seiten durch die Maus oder durch Tastaturbefehle genutzt werden.
�BITS Beh�rden-IT-Sicherheitstraining� unterst�tzt gruns�tzlich jeden Browser. JavaScript muss jedoch aktiviert sein, andernfalls kommt es bei der Navigation und bei den Wissenstests zu Problemen. Eine Soundkarte bzw. Lautsprecher sind zur Nutzung nicht erforderlich. Es wird eine Bildschirmaufl�sung von 1280x1024 Punkten empfohlen.

�BITS Beh�rden-IT-Sicherheitstraining� wurde getestet mit den Browsern MS Internet Explorer, Opera, Vivaldi, Mozilla Firefox, Chrome und Konqueror.

5. Suchfunktion
Die Suchfunktion ("suche.htm" im Hauptverzeichnis) erlaubt eine Offline-Suche aller BITS-Seiten. Hierf�r sind in allen Seiten, die durchsucht werden sollen, im Bereich class=mittecontent01 die Inhalte mit dem <content>-Tag einzuschlie�en. Dies ist f�r alle Lektionen bereits erfolgt; eigene Seiten, die ebenfalls durchsucht werden sollen, w�ren entsprechend anzupassen. Sofern neue Seiten zu BITS lokal hinzugef�gt werden gibt es zwei alternative M�glichkeiten, den Suchindex f�r das Javascript  offlinesearchengine_js.js anzupassen:
1.	H�ndische Aktualisierung
Einf�gen der Seiteninformationen f�r jede neue Seite in dem Script offlinesearchengine_js.js in dem Bereich der Zeilen 320 � 496 mit folgender Syntax:
		['SEITENTITEL, 'RELATIVER_DATEIPFAD/DATEINAME.htm'],
Beispiel:
		['Social Media sicher nutzen', 'lektionen/socialmedia/socialmedia05.htm'],

ODER

2.	Nutzung des Tools tools/suchindex.bat zum automatisierten Erzeugen der Syntax f�r die Volltextrecherche

    2.1  Zun�chst muss dazu der unter der GPL stehende Stream Line Editor "sed" (https://www.gnu.org/software/sed/ - Download der kompatiblen Version 4.01.2.1 f�r Windows unter https://sourceforge.net/projects/gnuwin32/files/sed/4.2.1/sed-4.2.1-setup.exe/download) heruntergeladen und in das Verzeichnis "\bits\tools\bin" kopiert werden (einschl. der zugeh�rigen Dlls).
 
    2.2  Start der im Ordner tools liegende suchindex.bat zum Erzeugen der Syntax f�r die Volltextrecherche;

    2.3 Danach h�ndische Nacharbeiten nach eingeblendeter Detail-Anleitung.

Der generierte Code ist in die Datei offlinesearchengine_js.js h�ndisch in dem Bereich der Zeilen 320 � 496 einzuf�gen.

Bei einigen Opera-Versionen kann es zu Fehlermeldungen bei der Nutzung der Suche kommen. In der beigef�gten PDF-Datei "BITS-Opera-Einstellungen-Suche.pdf" wird die Abhilfe beschrieben.

6. "Gewinnspiel"
Es besteht die M�glichkeit, dass bei den Wissenschecks am Ende der Lektionen bei Anklicken der richtigen Antwort ein Buchstabe (= eine Bild-Datei) eingeblendet wird. Wenn die entsprechenden Buchstaben durch den Nutzer innerhalb eines Gewinnspiels der Beh�rde eingesendet werden, kann so ein Anreiz zur Nutzung von BITS geschaffen werden. Hierf�r muss zuvor im jeweiligen Unterordner "loesungswort" der Lektionen (alle au�er "Am Arbeitsplatz") die zur jeweiligen Frage geh�rende, nummerierte GIF-Datei durch eine GIF-Datei mit dem richtigen L�sungsbuchstaben ausgetauscht werden. Beispiel: Bei der 2. Testfrage der Lektion "E-Mail" soll als L�sungsbuchstabe ein "B" erscheinen. Im Unterordner "loesungswort" zur Lektion "E-Mail" ist die Datei "2.gif" durch ein GIF-Bild des Buchstabens "B" auszutauschen und in "2.gif" umbenennen. Im Ordner "bits\images\buchstaben" finden Sie alle Buchstaben und diverse Sonderzeichen, die Sie kopieren k�nnen. Derzeit gibt es acht Wissenschecks mit insgesamt 27 Fragen, so dass ein Satz mit 27 Zeichen als L�sung gew�hlt werden sollte. Auf der Startseite der Tests befindet sich im HTML-Code ausgeklammerter Text, der aktiviert werden muss.

7. BITS-Portal
F�r Administratoren steht kostenfrei das BITS-Portal http://www.bits-portal.eu zur Verf�gung. Dort werden Beta-Versionen, neue Funktionen und Inhalte diskutiert und auch alternative Versionen zum Download bereitgehalten.

8.Rechtliches
�BITS Beh�rden-IT-Sicherheitstraining� basiert auf open beware!, das von der BDG GmbH & Co. KG, jetzt NTT Security (Germany) GmbH, herausgegeben wurde.
Die Urheber sind Herr Dr. Lutz Gollan und Herr Hartmut Honermann, NTT Security (Germany) GmbH.
BITS ist kostenlos und steht unter der Creative Commons (CC) Lizenz BY-SA (https://creativecommons.org/licenses/by-sa/3.0/de/).
Sie d�rfen:
- Teilen � das Material in jedwedem Format oder Medium vervielf�ltigen und weiterverbreiten
- Bearbeiten � das Material remixen, ver�ndern und darauf aufbauen
und zwar f�r beliebige Zwecke, sogar kommerziell.
Der Lizenzgeber kann diese Freiheiten nicht widerrufen solange Sie sich an die Lizenzbedingungen halten.
Bedingungen:
- Namensnennung � Sie m�ssen angemessene Urheber- und Rechteangaben machen, einen Link zur Lizenz (diese Seite) beif�gen und angeben, ob �nderungen vorgenommen wurden. Diese Angaben d�rfen in jeder angemessenen Art und Weise gemacht werden, allerdings nicht so, dass der Eindruck entsteht, der Lizenzgeber unterst�tze gerade Sie oder Ihre Nutzung besonders.
- Weitergabe unter gleichen Bedingungen � Wenn Sie das Material remixen, ver�ndern oder anderweitig direkt darauf aufbauen, d�rfen Sie Ihre Beitr�ge nur unter derselben Lizenz wie das Original verbreiten.
- Keine weiteren Einschr�nkungen � Sie d�rfen keine zus�tzlichen Klauseln oder technische Verfahren einsetzen, die anderen rechtlich irgendetwas untersagen, was die Lizenz erlaubt.

Die Grafiken sind unterliegen der CC0 1.0 Universal (CC0 1.0) (https://openclipart.org/share). Die Grafik viren03b-bot.jpg wurde von Herrn J�rg Lekschas erstellt.

Beim Kapitel "Cloud" hat Frau Heike Brzezina wertvolle Hinweise gegeben.


�nderungs- oder Erg�nzungsw�nsche nimmt Dr. Lutz Gollan (Lutz.Gollan@bis.hamburg.de) gerne entgegen.

-------------------------------------------------------------

CHANGELOG
Die �nderungen zur Vorversionen sind in der Datei BITS401-Changelog.PDF dargestellt.


