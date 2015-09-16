/*
 * Copyright (C) 2015 con terra GmbH (info@conterra.de)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define({
    bundleName: "Query Builder",
    bundleDescription: "Das Bundle erm\u00f6glicht es benutzerdefinierte QueryTools zu erstellen",
    wizard: {
        toolTitle: "Eigene Query erstellen",
        toolToolTip: "Bauen Sie Ihre eigene Query",
        windowTitle: "Custom Query Tool",
        title: "Titel",
        builder: "Bauen",
        options: "Optionen",
        manual: "Manuell",
        iconClass: "Icon Klasse",
        iconClassHelp: "Hilfe zur Icon Class",
        complexQueryHelp: "Hilfe zur Complex Query",
        customQuery: "Custom Query",
        queryDefinition: "Query Definiton:",
        useExtent: "Aktueller Kartenausschnitt",
        count: "Anzahl der Ergebnisse",
        ignoreCase: "Groß-/Kleinschreibung unterscheiden",
        locale: "Sprache",
        addField: "Feld hinzuf\u00fcgen",
        storeId: "Store",
        cancel: "Abbrechen",
        done: "Suchen",
        typeInTitle: "Titel eingeben",
        match: "Felder verkn\u00fcpfen",
        match1: "Features abfragen, die ",
        match2: " der folgenden Ausr\u00fccke erf\u00fcllen",
        changeToManual: "Sind Sie sicher? Die Query wird nur noch manuell zu \u00e4ndern sein!",
        and: "und",
        or: "oder",
        yes: "ja",
        no: "nein",
        fields: {
            typeInValue: "Wert eingeben",
            is: "ist gleich",
            eqw: "ist gleich (wildcard)",
            suggest: "\u00e4hnelt",
            contains: "enth\u00e4lt",
            contains_not: "enth\u00e4lt nicht",
            starts_with: "beginnt mit",
            ends_with: "endet mit",
            is_greater_than: "ist gr\u00f6\u00dfer",
            is_greater_or_equal: "ist gr\u00f6\u00dfer / gleich",
            is_less_than: "ist kleiner",
            is_less_or_equal: "ist kleiner / gleich",
            before: "vor",
            after: "nach",
            yes: "ja",
            no: "nein"
        }
    }
});
