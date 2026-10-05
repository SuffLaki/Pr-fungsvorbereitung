# Prüfungstrainer Spedition und Logistik

Lern-App für die IHK-Abschlussprüfung **Kaufmann/-frau für Spedition und Logistikdienstleistung**.
Lernkarten, Prüfungsfragen, Rechner und eine Prüfungssimulation mit echter Prüfungszeit — als Web-App direkt im Browser.

**App öffnen:** https://SuffLaki.github.io/Pr-fungsvorbereitung/

Die App läuft komplett auf deinem Gerät. Kein Server, keine Anmeldung, keine Daten nach außen. Einmal geladen, funktioniert sie auch ohne Internet.

---

## Was drin ist

- 🃏 **60 Lernkarten** mit Leitner-System: Was du kannst, kommt erst nach 1, 3, 7 und 16 Tagen wieder.
- ❓ **123 Prüfungsfragen** mit Erklärung zu jeder Lösung. Die Antwortreihenfolge wird jedes Mal neu gemischt.
- 🧮 **22 Rechenaufgaben** mit vollständigem Rechenweg und **9 Rechnern**: frachtpflichtiges Gewicht, Lademeter, Luftfracht, Seefracht W/M, Haftung in SZR, Lagerkennzahlen, Einfuhrabgaben, Deckungsbeitrag und Skonto.
- ⏱ **Prüfungssimulation** mit den echten Zeiten (180 / 90 / 60 Minuten), Auswertung nach Notenschlüssel und Anzeige der schwächsten Themen.
- 🗣 **Leitfaden** für das fallbezogene Fachgespräch.
- 📋 **Nachschlagetabellen**: Haftungsgrenzen, Incoterms 2020, Lenk- und Ruhezeiten, Umrechnungsschlüssel, Formeln, Zollverfahren, Sozialversicherung 2026.

---

## App auf den Home-Bildschirm legen

1. Öffne **https://SuffLaki.github.io/Pr-fungsvorbereitung/** in **Safari** auf dem iPhone.
2. Tippe unten auf das **Teilen-Symbol** (Quadrat mit Pfeil nach oben).
3. Wähle **„Zum Home-Bildschirm"** und tippe auf **„Hinzufügen"**.

Danach startet der Trainer wie eine normale App im Vollbild und läuft ohne Internet weiter. Am PC genügt das Lesezeichen.

---

## Wie du damit lernst

| Bereich | Wofür |
|---|---|
| **Start** | Prüfungstermin eintragen, Countdown, Lernstand je Prüfungsbereich, Tagesziel |
| **Karten** | Tägliche Wiederholung. „Gewusst" schiebt die Karte eine Box weiter, „Nochmal üben" zurück auf Anfang. |
| **Quiz** | Fragensätze zu 5 bis 30 Fragen, auf Wunsch nach einzelnem Thema. Fragen, die noch nicht saßen, kommen bevorzugt. |
| **Rechnen** | Aufgaben zum Üben und Rechner zum Nachrechnen eigener Fälle |
| **Prüfung** | Durchlauf unter Zeitdruck, danach Auswertung nach Themen |
| **Tabellen** | Zum Nachschlagen beim Üben |

Der Lernfortschritt wird im Speicher des Browsers gesichert und bleibt erhalten, solange du die Website-Daten nicht löschst.

---

## Prüfungsaufbau

| Prüfungsbereich | Art | Dauer | Gewicht |
|---|---|---|---|
| Leistungserstellung in Spedition und Logistik | schriftlich | 180 Min. | 25 % |
| Kaufmännische Steuerung und Kontrolle | schriftlich | 90 Min. | 25 % |
| Wirtschafts- und Sozialkunde | schriftlich | 60 Min. | 25 % |
| Fallbezogenes Fachgespräch | mündlich | max. 30 Min. | 25 % |

Bestanden ist die Prüfung, wenn das Gesamtergebnis und mindestens drei Prüfungsbereiche ausreichend sind — darunter zwingend **Leistungserstellung in Spedition und Logistik**. Dieser Bereich ist in der App als Sperrfach gekennzeichnet.

---

## Eigene Kopie hosten

1. Oben rechts auf **Fork** klicken.
2. In deiner Kopie auf **Settings** → **Pages** gehen, dort **Branch: `main`** und **`/ (root)`** wählen und **Save** klicken.
3. Nach 1–2 Minuten ist die App unter `https://DEINNAME.github.io/Pr-fungsvorbereitung/` erreichbar.

Die App besteht nur aus statischen Dateien. Ein Server oder ein Build-Schritt ist nicht nötig.

| Datei | Inhalt |
|---|---|
| `index.html` | Die komplette App: Aufbau, Design, Fragen, Karten, Tabellen und Logik |
| `sw.js` | Offline-Speicher. Nach einer Änderung an `index.html` die Zeile `const CACHE = "spl-trainer-v1";` hochzählen. |
| `manifest.webmanifest` + `icon-*.png` | App-Name und Icon für den Home-Bildschirm |

---

## Zum Inhalt

Die App ist ein eigenständig formulierter Begleiter zum Buch *„Prüfungswissen KOMPAKT — Kaufmann/Kauffrau für Spedition und Logistikdienstleistung"* (Oppenberg/Schimpf, Westermann, 9. Auflage 2026, ISBN 978-3-427-28485-7). Fragen, Lernkarten und Tabellen folgen den vier Prüfungsbereichen der IHK-Prüfung, sind aber nicht aus dem Buch übernommen.

Beträge, Beitragssätze und der gesetzliche Mindestlohn haben den **Stand 2026**. Prüfe sie vor der Prüfung gegen die dann gültigen Werte — Beitragsbemessungsgrenzen und Mautsätze ändern sich jährlich.
