# Pregled projekta

## Implementirane funkcionalnosti MVP

V projektu so implementirane vse zadeve za MVP: organizator upravlja dogodke in program,
 predavatelji oddajajo predloge, udeleženci se prijavijo na dogodek in rezervirajo predavanja, na voljo je čakalni seznam s poskusom samodejne dodelitve sproščenega mesta, organizator pa lahko spremlja zasedenost. Backend in uporabniški vmesnik vključujeta tudi prijavo ter uporabniške vloge. 

Med dodatnimi funkcionalnostmi so  profili, slike dogodkov, izbira sedeža, QR-vstopnice, prijava prisotnosti, arhiviranje in podvajanje dogodkov.

## Ustreznost uporabniškim zgodbam MVP

| Zgodba | Ocena | Ugotovitve |
|---|---|---|
| **US-01 – Upravljanje dogodkov** | Delno | Ustvarjanje, urejanje osnutkov, preverjanje obveznih polj in datumov ter omejitev urejanja na organizatorja so implementirani. **Problem**: Objavo je mogoče izvesti brez razporejenega predavanja, čeprav kriterij zahteva vsaj eno razporejeno predavanje. |
| **US-02 – Predlogi predavanj** | Delno | Oddaja, urejanje predloga v čakanju ter odločitev organizatorja so implementirani. **Problem:** Dokumentirani kriterij zahteva tudi trajanje v minutah; v podatkovnem modelu predloga ni ločenega polja za trajanje, termini pa se določajo z začetkom in koncem pri načrtovanju. |
| **US-03 – Priprava programa** | Večinoma | Organizator lahko razporedi potrjena predavanja v prostor dogodka; preverjajo se časovni okvir dogodka ter prekrivanja prostora in predavatelja. **Problem:** Začetek in konec termina se podata neposredno, ne izračunata iz začetka in trajanja, kot predvideva kriterij. |
| **US-04 – Prijava na dogodek** | Da | Prijava je omejena na udeležence in objavljene dogodke; preverjata se kapaciteta ter podvojena prijava. Vmesnik ponuja prijavo iz seznama objavljenih dogodkov. |
| **US-05 – Rezervacije in osebni urnik** | Da | Rezervacija zahteva aktivno prijavo na dogodek, preveri razpoložljivost in časovni konflikt. Udeleženec vidi osebni urnik in lahko odpove rezervacijo. |
| **US-06 – Samodejni čakalni seznam** | Da | Sistem preprečuje podvojeni vpis, prikazuje položaj, čakalne udeležence ob odpovedi preverja po vrstnem redu ter jih preskoči ob neizpolnjenih pogojih. Samodejna dodelitev je omejena na prihajajoča predavanja in uspešna dodelitev odstrani udeleženca s seznama. |
| **US-07 – Spremljanje zasedenosti** | Da | Organizator vidi število prijav, kapaciteto in prosta mesta dogodka ter potrjene rezervacije, kapaciteto prostora, prosta mesta in čakalne sezname predavanj. Prosta mesta so omejena na najmanj nič. |

---

Glavni obseg vseh sedmih zgodb MVP je v kodi prisoten, vendar implementacija ne izpolni v celoti vseh zapisanih sprejemnih kriterijev.

Največja odstopanja so:
- objava dogodka brez razporejenega predavanja (US-01),
- manjkajoče trajanje predloga (US-02),
- neposreden vnos začetka in konca termina namesto izračuna iz trajanja (US-03).
