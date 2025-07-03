# Publications Validation and Performance Optimization TODO

## Current Session: 2025-07-02 16:57
### Active Task: Deploy optimized publications component and test performance

## 🚀 Phase 1: Document All Publications
- [x] Create TODO.md file - COMPLETED
- [x] Extract all 426 publications with metadata - COMPLETED
- [x] Categorize by validation status - COMPLETED (186 need attention)

## 📋 Phase 2: Data Cleanup & Validation
- [x] Create validation strategy document - COMPLETED
- [x] Install axios for HTTP requests - COMPLETED
- [x] Create validation script for DOI links - COMPLETED
- [x] Implement Crossref API integration - COMPLETED
- [x] Run validation script and generate broken links report - COMPLETED
- [x] **CRITICAL FIX**: Fixed 82 DOI URLs with extra path segments - COMPLETED
  - Created backup: backup_publications_20250702_135052/
  - Fixed pattern: https://doi.org/10.1063/XXXXXXX/YYYYYY → https://doi.org/10.1063/XXXXXXX
  - Files affected: 21 year files (2001-2024)
  - Validation test: 100% success rate on fixed URLs
- [ ] Parse and clean publication data structure
- [ ] Fix title/author field inconsistencies

## 🚀 Phase 3: Performance Optimization
- [x] Split publications by year into separate JSON files - COMPLETED (31 year files)
- [x] Create index file with years and counts - COMPLETED
- [x] Implement lazy loading for visible years only - COMPLETED
- [x] Add progressive loading (recent years first) - COMPLETED
- [x] Add search functionality with debouncing - COMPLETED
- [x] Create optimized PublicationsSection component - COMPLETED
- [x] Update App.jsx to use optimized component - COMPLETED (backup created at App.jsx.backup)
- [x] Fix import paths for Vite compatibility - COMPLETED
- [x] Test build process with code splitting - COMPLETED (all years split into separate chunks)
- [ ] Test mobile performance improvements
- [ ] Verify lazy loading functionality
- [ ] Test search functionality
- [ ] Create cleanup script for build

## 🔧 Phase 4: Maintenance System
- [ ] Create GitHub Action for periodic link checking
- [ ] Add admin interface for broken link management
- [ ] Document validation process

## 📊 Progress Tracking
- Total Publications: 426
- Years Covered: 1995-2025
- Data File Size: 3,703 lines (82,730 tokens)

## 🚀 Performance Optimization Results
- ✅ Code Splitting: 31 year chunks created (1995.js through 2025.js)
- ✅ Initial Bundle: Reduced to 485.24 kB (gzipped: 132.79 kB)
- ✅ Lazy Loading: Only recent 3 years (2025, 2024, 2023) load initially
- ✅ Search Index: Pre-built search index for fast queries
- ✅ Virtual Scrolling: @tanstack/react-virtual for large lists
- ✅ Vite Compatibility: Fixed import paths for dynamic imports

## 🔄 For Next Session
- Continue from: Manual testing of optimized component at http://localhost:3000/uonmmm-website/
- Key files: 
  - src/App.jsx (updated to use PublicationsSectionOptimized)
  - src/components/PublicationsSectionOptimized.jsx (deployed)
  - test-manual.md (testing checklist)
- Remaining tasks: Mobile testing, search verification, cleanup

---

# PUBLICATIONS LIST (To Be Validated)

Extracting all publications...

## COMPLETE PUBLICATIONS LIST

Total Publications: 426
Years Covered: 1995 - 2025


### 2025 (1 publications)

1. **[2025-001]**
   - **Title:** Probing and manipulating the Mexican hat-shaped valence band of In2Se3.
   - **Authors:** Felton, J., Harknett, J., Page, J., Yang, Z., Alghofaili, N., O’Shea, J. N., Eaves, L., Kohama, Y., Greenaway, M. T., & Patanè, A. (2025).
   - **Journal:** Nature Communications 2025 16:1, 16(1), 1–9.
   - **Link:** https://doi.org/10.1038/s41467-025-56139-8
   - **Validation Status:** [ ] Not Checked


### 2024 (22 publications)

1. **[2024-001]**
   - **Title:** A versatile system for the growth of porphyrin films via electrospray and molecular sublimation in vacuum and their multi-technique characterization.
   - **Authors:** Goto, F., Calloni, A., Yivlialin, R., Bossi, A., Ciccacci, F., Duò, L., O’Shea, J. N., & Bussetti, G. (2024).
   - **Journal:** Review of Scientific Instruments, 95(9).
   - **Link:** https://doi.org/10.1063/5.0223459
   - **Validation Status:** [ ] Not Checked

2. **[2024-002]**
   - **Title:** Altermagnetic lifting of Kramers spin degeneracy.
   - **Authors:** Krempaský, J., Šmejkal, L., D’Souza, S. W., Hajlaoui, M., Springholz, G., Uhlířová, K., Alarab, F., Constantinou, P. C., Strocov, V., Usanov, D., Pudelko, W. R., González-Hernández, R., Birk Hellenes, A., Jansa, Z., Reichlová, H., Šobáň, Z., Gonzalez Betancourt, R. D., Wadley, P., Sinova, J., … Jungwirth, T. (2024).
   - **Journal:** Nature 2024 626:7999, 626(7999), 517–522.
   - **Link:** https://doi.org/10.1038/s41586-023-06907-7
   - **Validation Status:** [ ] Not Checked

3. **[2024-003]**
   - **Title:** Altermagnetism imaged and controlled down to the nanoscale.
   - **Authors:** Amin, O. J., Din, A. D., Golias, E., Niu, Y., Zakharov, A., Fromage, S. C., Fields, C. J. B., Heywood, S. L., Cousins, R. B., Krempasky, J., Dil, J. H., Kriegner, D., Kiraly, B., Campion, R. P., Rushforth, A. W., Edmonds, K. W., Dhesi, S. S., Šmejkal, L., Jungwirth, T., & Wadley, P. (2024).
   - **Journal:** arXiv:2405.02409v1
   - **Link:** https://arxiv.org/abs/2405.02409v1
   - **Validation Status:** [ ] Not Checked

4. **[2024-004]**
   - **Title:** Antiferromagnetic spintronics and beyond.
   - **Authors:** Dal Din, A., Amin, O. J., Wadley, P., & Edmonds, K. W. (2024).
   - **Journal:** Npj Spintronics 2024 2:1, 2(1), 1–8.
   - **Link:** https://doi.org/10.1038/s44306-024-00029-0
   - **Validation Status:** [ ] Not Checked

5. **[2024-005]**
   - **Title:** Cathodoluminescence spectroscopy of monolayer hexagonal boron nitride.
   - **Authors:** Shima, K., Cheng, T. S., Mellor, C. J., Beton, P. H., Elias, C., Valvin, P., Gil, B., Cassabois, G., Novikov, S. V., & Chichibu, S. F. (2024).
   - **Journal:** Scientific Reports 2024 14:1, 14(1), 1–8.
   - **Link:** https://doi.org/10.1038/s41598-023-50502-9
   - **Validation Status:** [ ] Not Checked

6. **[2024-006]**
   - **Title:** Defect-induced doping and chemisorption of O2 in Se deficient GaSe monolayers.
   - **Authors:** Bradford, J., Rahman, K., Felton, J., Cheng, T. S., Shiffa, M., Beton, P. H., Saywell, A., Greenaway, M. T., Novikov, S. V., O, J. N., & Patanè, A. (2024).
   - **Journal:** 2D Materials, 12(1), 015019–015019.
   - **Link:** https://doi.org/10.1088/2053-1583/AD9D57
   - **Validation Status:** [ ] Not Checked

7. **[2024-007]**
   - **Title:** Epitaxy of GaSe Coupled to Graphene: From In Situ Band Engineering to Photon Sensing.
   - **Authors:** Bradford, J., Dewes, B. T., Shiffa, M., Cottam, N. D., Rahman, K., Cheng, T. S., Novikov, S. V., Makarovsky, O., O’shea, J. N., Beton, P. H., Lara-Avila, S., Harknett, J., Greenaway, M. T., Patanè, A. (2024).
   - **Journal:** Small, 20(40), 2404809–2404809.
   - **Link:** https://doi.org/10.1002/SMLL.202404809
   - **Validation Status:** [ ] Not Checked

8. **[2024-008]**
   - **Title:** H1dd3n variab7es.
   - **Authors:** Moriarty, P. (2024).
   - **Journal:** Physics World, 37(7), 48–48.
   - **Link:** https://doi.org/10.1088/2058-7058/37/07/30
   - **Validation Status:** [ ] Not Checked

9. **[2024-009]**
   - **Title:** High-temperature Brown-Zak oscillations in graphene/hBN moiré field effect transistor fabricated using molecular beam epitaxy.
   - **Authors:** Makarovsky, O., Hill, R. J. A., Cheng, T. S., Summerfield, A., Taniguchi, T., Watanabe, K., Mellor, C. J., Patanè, A., Eaves, L., Novikov, S. V., & Beton, P. H. (2024).
   - **Journal:** Communications Materials 2024 5:1, 5(1), 1–6.
   - **Link:** https://doi.org/10.1038/s43246-024-00633-x
   - **Validation Status:** [ ] Not Checked

10. **[2024-010]**
   - **Title:** Hybrid coherent control of magnons in a ferromagnetic phononic resonator excited by laser pulses.
   - **Authors:** Scherbakov, A. V., Carr, A. D., Linnik, T. L., Kukhtaruk, S. M., Armour, A. D., Nadzeyka, A., Rushforth, A. W., Akimov, A. V., & Bayer, M. (2024).
   - **Journal:** Physical Review Research, 6(1), L012019–L012019.
   - **Link:** https://doi.org/10.1103/PHYSREVRESEARCH.6.L012019
   - **Validation Status:** [ ] Not Checked

11. **[2024-011]**
   - **Title:** Magnetic domain engineering in antiferromagnetic CuMnAs and Mn 2 Au.
   - **Authors:** Reimers, S., Gomonay, O., Amin, O. J., Krizek, F., Barton, L. X., Lytvynenko, Y., Poole, S. F., Novák, V., Campion, R. P., Maccherozzi, F., Carbone, G., Björling, A., Niu, Y., Golias, E., Kriegner, D., Sinova, J., Kläui, M., Jourdan, M., Dhesi, S. S., … Wadley, P. (2024).
   - **Journal:** Physical Review Applied, 21(6).
   - **Link:** https://doi.org/10.1103/PHYSREVAPPLIED.21.064030
   - **Validation Status:** [ ] Not Checked

12. **[2024-012]**
   - **Title:** Nanoscale imaging and control of altermagnetism in MnTe.
   - **Authors:** Amin, O. J., Dal Din, A., Golias, E., Niu, Y., Zakharov, A., Fromage, S. C., Fields, C. J. B., Heywood, S. L., Cousins, R. B., Maccherozzi, F., Krempaský, J., Dil, J. H., Kriegner, D., Kiraly, B., Campion, R. P., Rushforth, A. W., Edmonds, K. W., Dhesi, S. S., Šmejkal, L., … Wadley, P. (2024).
   - **Journal:** Nature 2024 636:8042, 636(8042), 348–353.
   - **Link:** https://doi.org/10.1038/s41586-024-08234-x
   - **Validation Status:** [ ] Not Checked

13. **[2024-013]**
   - **Title:** Néel vector waves in antiferromagnetic CuMnAs excited by surface acoustic waves.
   - **Authors:** Khaliq, M. W., Amin, O. J., Hernández-Mínguez, A., Rovirola, M., Casals, B., Omari, K., Ruiz-Gómez, S., Finizio, S., Campion, R. P., Edmonds, K. W., Novák, V., Mandziak, A., Aballe, L., Niño, M. A., Hernàndez, J. M., Wadley, P., Macià, F., & Foerster, M. (2024).
   - **Journal:** Physical Review Materials, 8(8).
   - **Link:** https://doi.org/10.1103/PHYSREVMATERIALS.8.084406
   - **Validation Status:** [ ] Not Checked

14. **[2024-014]**
   - **Title:** On-Surface Synthesis of Ni-Porphyrin-Doped Graphene Nanoribbons.
   - **Authors:** Edmondson, M., Clarke, M., O’Shea, J. N., Chen, Q., Anderson, H. L., & Saywell, A. (2024).
   - **Journal:** ACS Nano, 18, 33390–33397.
   - **Link:** https://doi.org/10.1021/ACSNANO.4C09188
   - **Validation Status:** [ ] Not Checked

15. **[2024-015]**
   - **Title:** Porphyrin-fused graphene nanoribbons.
   - **Authors:** Chen, Q., Lodi, A., Zhang, H., Gee, A., Wang, H. I., Kong, F., Clarke, M., Edmondson, M., Hart, J., O’Shea, J. N., Stawski, W., Baugh, J., Narita, A., Saywell, A., Bonn, M., Müllen, K., Bogani, L., & Anderson, H. L. (2024).
   - **Journal:** Nature Chemistry 2024, 1–8.
   - **Link:** https://doi.org/10.1038/s41557-024-01477-1
   - **Validation Status:** [ ] Not Checked

16. **[2024-016]**
   - **Title:** Selective Photocatalytic Reduction of CO2 to CH4 over NU-1000 Metal-Organic Frameworks.
   - **Authors:** Korhonen, P., Thangamuthu, M., Castaldelli, E., Diego-Lopez, A., Weilhard, A., Clowes, R., O’shea, J. N., Laybourn, A., & Lanterna, A. E. (2024).
   - **Journal:** ChemRxiv
   - **Link:** https://doi.org/10.26434/CHEMRXIV-2024-RWKXV
   - **Validation Status:** [ ] Not Checked

17. **[2024-017]**
   - **Title:** Spatially-resolved UV-C emission in epitaxial monolayer boron nitride.
   - **Authors:** Rousseau, A., Plo, J., Valvin, P., Cheng, T. S., Bradford, J., James, T. S. S., Wrigley, J., Mellor, C. J., Beton, P. H., Novikov, S. V., Jacques, V., Gil, B., & Cassabois, G. (2024).
   - **Journal:** 2D Materials, 11(2), 025026–025026.
   - **Link:** https://doi.org/10.1088/2053-1583/AD2F45
   - **Validation Status:** [ ] Not Checked

18. **[2024-018]**
   - **Title:** Structure and chemical composition of the Mg electrode during cycling in a simple glyme electrolyte.
   - **Authors:** Dimogiannis, K., Sankowski, A., Holc, C., Parmenter, C. D. J., Newton, G. N., Walsh, D. A., O’Shea, J., Khlobystov, A. N., & Johnson, L. R. (2024).
   - **Journal:** Energy Storage Materials, 67, 103280–103280.
   - **Link:** https://doi.org/10.1016/J.ENSM.2024.103280
   - **Validation Status:** [ ] Not Checked

19. **[2024-019]**
   - **Title:** Template-Directed Synthesis of Strained meso-meso-Linked Porphyrin Nanorings.
   - **Authors:** Van Raden, J. M., Deng, J. R., Gotfredsen, H., Hergenhahn, J., Clarke, M., Edmondson, M., Hart, J., O’Shea, J. N., Duarte, F., Saywell, A., & Anderson, H. L. (2024).
   - **Journal:** Angewandte Chemie International Edition, 63(14), e202400103–e202400103.
   - **Link:** https://doi.org/10.1002/ANIE.202400103
   - **Validation Status:** [ ] Not Checked

20. **[2024-020]**
   - **Title:** Thermally stable Peltier controlled vacuum chamber for electrical transport measurements.
   - **Authors:** Poole, S. F., Amin, O. J., Solomon, A., Barton, L. X., Campion, R. P., Edmonds, K. W., & Wadley, P. (2024).
   - **Journal:** Review of Scientific Instruments, 95(3), 35108–35108.
   - **Link:** https://doi.org/10.1063/5.0186155
   - **Validation Status:** [ ] Not Checked

21. **[2024-021]**
   - **Title:** Wafer-Scale Two-Dimensional Semiconductors for Deep UV Sensing.
   - **Authors:** Shiffa, M., Dewes, B. T., Bradford, J., Cottam, N. D., Cheng, T. S., Mellor, C. J., Makarovskiy, O., Rahman, K., O’Shea, J. N., Beton, P. H., Novikov, S. V., Ben, T., Gonzalez, D., Xie, J., Zhang, L., & Patanè, A. (2024).
   - **Journal:** Small, 20(7), 2305865–2305865.
   - **Link:** https://doi.org/10.1002/SMLL.202305865
   - **Validation Status:** [ ] Not Checked

22. **[2024-022]**
   - **Title:** X-Ray Magnetic Circular Dichroism in Altermagnetic α -MnTe.
   - **Authors:** Hariki, A., Dal Din, A., Amin, O. J., Yamaguchi, T., Badura, A., Kriegner, D., Edmonds, K. W., Campion, R. P., Wadley, P., Backes, D., Veiga, L. S. I., Dhesi, S. S., Springholz, G., Šmejkal, L., Výborný, K., Jungwirth, T., & Kuneš, J. (2024).
   - **Journal:** Physical Review Letters, 132(17).
   - **Link:** https://doi.org/10.1103/PHYSREVLETT.132.176701
   - **Validation Status:** [ ] Not Checked


### 2023 (28 publications)

1. **[2023-001]**
   - **Title:** Adsorption structure of iron phthalocyanine and titanyl phthalocyanine on Cu(1 1 1).
   - **Authors:** Stoodley, M. A., Klein, B. P., Clarke, M., Williams, L. B. S., Rochford, L. A., Ferrer, P., Grinter, D. C., Saywell, A., & Duncan, D. A. (2023).
   - **Journal:** Inorganica Chimica Acta, 557, 121679–121679.
   - **Link:** https://doi.org/10.1016/J.ICA.2023.121679
   - **Validation Status:** [ ] Not Checked

2. **[2023-002]**
   - **Title:** Altermagnetic lifting of Kramers spin degeneracy.
   - **Authors:** Krempaský, J., Šmejkal, L., D’Souza, S. W., Hajlaoui, M., Springholz, G., Uhlířová, K., Alarab, F., Constantinou, P. C., Strokov, V., Usanov, D., Pudelko, W. R., González-Hernández, R., Hellenes, A. B., Jansa, Z., Reichlová, H., Šobáň, Z., Betancourt, R. D. G., Wadley, P., Sinova, J., … Jungwirth, T. (2023).
   - **Journal:** arXiv:2308.10681v1
   - **Link:** https://arxiv.org/abs/2308.10681v1
   - **Validation Status:** [ ] Not Checked

3. **[2023-003]**
   - **Title:** Antiferromagnetic half-skyrmions electrically generated and controlled at room temperature.
   - **Authors:** Amin, O. J., Poole, S. F., Reimers, S., Barton, L. X., Dal Din, A., Maccherozzi, F., Dhesi, S. S., Novák, V., Krizek, F., Chauhan, J. S., Campion, R. P., Rushforth, A. W., Jungwirth, T., Tretiakov, O. A., Edmonds, K. W., & Wadley, P. (2023).
   - **Journal:** Nature Nanotechnology 2023 18:8, 18(8), 849–853.
   - **Link:** https://doi.org/10.1038/s41565-023-01386-3
   - **Validation Status:** [ ] Not Checked

4. **[2023-004]**
   - **Title:** Beyond the quantum woo-niverse.
   - **Authors:** Moriarty, P. (2023).
   - **Journal:** Physics World, 36(6), 56–57.
   - **Link:** https://doi.org/10.1088/2058-7058/36/06/31
   - **Validation Status:** [ ] Not Checked

5. **[2023-005]**
   - **Title:** Bi2Se3 interlayer treatments affecting the Y3Fe5O12 (YIG) platinum spin Seebeck effect.
   - **Authors:** Hu, Y., Weir, M. P., Pereira, H. J., Amin, O. J., Pitcairn, J., Cliffe, M. J., Rushforth, A. W., Kunakova, G., Niherysh, K., Korolkov, V., Kertfoot, J., Makarovsky, O., & Woodward, S. (2023).
   - **Journal:** Applied Physics Letters, 123(22), 223902–223902.
   - **Link:** https://doi.org/10.1063/5.0157778
   - **Validation Status:** [ ] Not Checked

6. **[2023-006]**
   - **Title:** Bimetallic NiPt nanoparticles-enhanced catalyst supported on alginate-based biohydrogels for sustainable hydrogen production.
   - **Authors:** Ramírez, O., Bonardd, S., Saldías, C., Kroff, M., O’Shea, J. N., Díaz Díaz, D., & Leiva, A. (2023).
   - **Journal:** International Journal of Biological Macromolecules, 225, 494–502.
   - **Link:** https://doi.org/10.1016/J.IJBIOMAC.2022.11.106
   - **Validation Status:** [ ] Not Checked

7. **[2023-007]**
   - **Title:** Covalent Template-Directed Synthesis of a Spoked 18-Porphyrin Nanoring.
   - **Authors:** Majewski, M. A., Stawski, W., Raden, J. M. V., Clarke, M., Hart, J., O’Shea, J. N., Saywell, A., & Anderson, H. L. (2023).
   - **Journal:** Angewandte Chemie, 135(18), e202302114–e202302114.
   - **Link:** https://doi.org/10.1002/ANGE.202302114
   - **Validation Status:** [ ] Not Checked

8. **[2023-008]**
   - **Title:** Electrical control of 180° domain walls in an antiferromagnet.
   - **Authors:** Amin, O. J., Reimers, S., Maccherozzi, F., Dhesi, S. S., Novák, V., Campion, R. P., Edmonds, K. W., & Wadley, P. (2023).
   - **Journal:** APL Materials, 11(9).
   - **Link:** https://doi.org/10.1063/5.0156508
   - **Validation Status:** [ ] Not Checked

9. **[2023-009]**
   - **Title:** Electroluminescence from a phthalocyanine monolayer encapsulated in a van der Waals tunnel diode.
   - **Authors:** James, T., Bradford, J., Kerfoot, J., Korolkov, V. V., Alkhamisi, M., Taniguchi, T., Watanabe, K., Nizovtsev, A. S., Antolín, E., Besley, E., Svatek, S. A., & Beton, P. H. (2023).
   - **Journal:** Molecular Physics, 121(7–8), 7–8.
   - **Link:** https://doi.org/10.1080/00268976.2023.2197081
   - **Validation Status:** [ ] Not Checked

10. **[2023-010]**
   - **Title:** Enhanced Photon-Phonon Interaction in WSe2 Acoustic Nanocavities.
   - **Authors:** Carr, A. D., Ruppert, C., Samusev, A. K., Magnabosco, G., Vogel, N., Linnik, T. L., Rushforth, A. W., Bayer, M., Scherbakov, A. V., & Akimov, A. V. (2023).
   - **Journal:** ACS Photonics, 11, 1147–1155.
   - **Link:** https://doi.org/10.1021/ACSPHOTONICS.3C01601
   - **Validation Status:** [ ] Not Checked

11. **[2023-011]**
   - **Title:** Experimental electronic structure of the electrically switchable antiferromagnet CuMnAs.
   - **Authors:** Linn, A. G., Hao, P., Gordon, K. N., Narayan, D., Berggren, B. S., Speiser, N., Reimers, S., Campion, R. P., Novák, V., Dhesi, S. S., Kim, T. K., Cacho, C., Šmejkal, L., Jungwirth, T., Denlinger, J. D., Wadley, P., & Dessau, D. S. (2023).
   - **Journal:** Npj Quantum Materials 2023 8:1, 8(1), 1–8.
   - **Link:** https://doi.org/10.1038/s41535-023-00554-x
   - **Validation Status:** [ ] Not Checked

12. **[2023-012]**
   - **Title:** Graphene nanoribbons with hBN passivated edges grown by high-temperature molecular beam epitaxy.
   - **Authors:** Bradford, J., Cheng, T. S., James, T. S. S., Khlobystov, A. N., Mellor, C. J., Watanabe, K., Taniguchi, T., Novikov, S. V., & Beton, P. H. (2023).
   - **Journal:** 2D Materials, 10(3), 035035–035035.
   - **Link:** https://doi.org/10.1088/2053-1583/ACDEFC
   - **Validation Status:** [ ] Not Checked

13. **[2023-013]**
   - **Title:** Lithium Iron Phosphate/Carbon (LFP/C) Composite Using Nanocellulose as a Reducing Agent and Carbon Source.
   - **Authors:** Kroff, M., Hevia, S. A., O’Shea, J. N., Muro, I. G. de, Palomares, V., Rojo, T., & del Río, R. (2023).
   - **Journal:** Polymers, 15(12), 2628–2628.
   - **Link:** https://doi.org/10.3390/POLYM15122628
   - **Validation Status:** [ ] Not Checked

14. **[2023-014]**
   - **Title:** Magnetic domain engineering in antiferromagnetic CuMnAs and Mn$_2$Au devices.
   - **Authors:** Reimers, S., Gomonay, O., Amin, O. J., Krizek, F., Barton, L. X., Lytvynenko, Y., Poole, S. F., Novák, V., Campion, R. P., Maccherozzi, F., Carbone, D., Björling, A., Niu, Y., Golias, E., Kriegner, D., Sinova, J., Kläui, M., Jourdan, M., Dhesi, S. S., … Wadley, P. (2023).
   - **Journal:** arXiv:2302.09550v3
   - **Link:** https://arxiv.org/abs/2302.09550v3
   - **Validation Status:** [ ] Not Checked

15. **[2023-015]**
   - **Title:** Magneto-Acoustic Waves in antiferromagnetic CuMnAs excited by Surface Acoustic Waves.
   - **Authors:** Khaliq, M. W., Amin, O., Hernández-Mínguez, A., Rovirola, M., Casals, B., Omari, K., Ruiz-Gómez, S., Finizio, S., Campion, R. P., Edmonds, K. W., Novak, V., Mandziak, A., Aballe, L., Niño, M. A., Hernàndez, J. M., Wadley, P., Macià, F., & Foerster, M. (2023).
   - **Journal:** arXiv:2309.08893v1
   - **Link:** https://arxiv.org/abs/2309.08893v1
   - **Validation Status:** [ ] Not Checked

16. **[2023-016]**
   - **Title:** Marrying plasmonic earth-abundant metals with catalytic metals for visible-light-promoted hydrogen generation on biobased materials.
   - **Authors:** Ramírez, O., Castillo, S., Bonardd, S., Saldías, C., O’Shea, J. N., Clive, C. P., Díaz, D. D., & Leiva, A. (2023).
   - **Journal:** Journal of Environmental Chemical Engineering, 11(5), 111036–111036.
   - **Link:** https://doi.org/10.1016/J.JECE.2023.111036
   - **Validation Status:** [ ] Not Checked

17. **[2023-017]**
   - **Title:** Nanostructured, Alkaline Titanate-Converted, and Heat-Treated Ti6Al4V Microspheres via Wet-Chemical Alkaline Modification and their ORR Electrocatalytic Response.
   - **Authors:** Wadge, M. D., Bird, M. A., Sankowski, A., Constantin, H., Fay, M. W., Cooper, T. P., O’Shea, J. N., Khlobystov, A. N., Walsh, D. A., Johnson, L. R., Felfel, R. M., Ahmed, I., & Grant, D. M. (2023).
   - **Journal:** Advanced Materials Interfaces, 10(5), 2201523–2201523.
   - **Link:** https://doi.org/10.1002/ADMI.202201523
   - **Validation Status:** [ ] Not Checked

18. **[2023-018]**
   - **Title:** On-chip phonon-magnon reservoir for neuromorphic computing.
   - **Authors:** Yaremkevich, D. D., Scherbakov, A. V., De Clerk, L., Kukhtaruk, S. M., Nadzeyka, A., Campion, R., Rushforth, A. W., Savel’ev, S., Balanov, A. G., & Bayer, M. (2023).
   - **Journal:** Nature Communications 2023 14:1, 14(1), 1–10.
   - **Link:** https://doi.org/10.1038/s41467-023-43891-y
   - **Validation Status:** [ ] Not Checked

19. **[2023-019]**
   - **Title:** On-surface polymerisation and self-assembly of DPP-based molecular wires.
   - **Authors:** Clarke, M., Bellamy-Carter, A., Malagreca, F., Hart, J., Argent, S. P., O’Shea, J. N., Amabilino, D. B., & Saywell, A. (2023).
   - **Journal:** Molecular Systems Design & Engineering, 8(5), 681–689.
   - **Link:** https://doi.org/10.1039/D2ME00232A
   - **Validation Status:** [ ] Not Checked

20. **[2023-020]**
   - **Title:** Photosensitisation of inkjet printed graphene with stable all-inorganic perovskite nanocrystals.
   - **Authors:** Austin, J. S., Cottam, N. D., Zhang, C., Wang, F., Gosling, J. H., Nelson-Dummet, O., James, T. S. S., Beton, P. H., Trindade, G. F., Zhou, Y., Tuck, C. J., Hague, R., Makarovsky, O., & Turyanska, L. (2023).
   - **Journal:** Nanoscale, 15(5), 2134–2142.
   - **Link:** https://doi.org/10.1039/D2NR06429D
   - **Validation Status:** [ ] Not Checked

21. **[2023-021]**
   - **Title:** Self-assembly and tiling of a prochiral hydrogen-bonded network: Bi-isonicotinic acid on coinage metal surfaces.
   - **Authors:** Allen, A., Abdur Rashid, M., Rahe, P., Jarvis, S. P., O’Shea, J. N., Dunn, J. L., & Moriarty, P. (2023).
   - **Journal:** Molecular Physics, 121(7–8).
   - **Link:** https://doi.org/10.1080/00268976.2023.2192824
   - **Validation Status:** [ ] Not Checked

22. **[2023-022]**
   - **Title:** Self-metalation of tetraphenyl porphyrin on Au(111): Structural characterisation via X-ray standing wave analysis.
   - **Authors:** Frampton, E. S., Edmondson, M., Judd, C. J., Duncan, D. A., Jones, R. G., & Saywell, A. (2023).
   - **Journal:** Inorganica Chimica Acta, 558, 121718–121718.
   - **Link:** https://doi.org/10.1016/J.ICA.2023.121718
   - **Validation Status:** [ ] Not Checked

23. **[2023-023]**
   - **Title:** Shreddinger’s equation.
   - **Authors:** Moriarty, P. (2023).
   - **Journal:** Physics World, 36(9), 44–44.
   - **Link:** https://doi.org/10.1088/2058-7058/36/09/28
   - **Validation Status:** [ ] Not Checked

24. **[2023-024]**
   - **Title:** Studying manganese carbonyl photochemistry in a permanently porous metal–organic framework.
   - **Authors:** Young, R. J., Huxley, M. T., Wu, L., Hart, J., O’Shea, J., Doonan, C. J., Champness, N. R., & Sumby, C. J. (2023).
   - **Journal:** Chemical Science, 14(35), 9409–9417.
   - **Link:** https://doi.org/10.1039/D3SC03553K
   - **Validation Status:** [ ] Not Checked

25. **[2023-025]**
   - **Title:** The adsorption and XPS of triphenylamine-based organic dye molecules on rutile TiO2(110) prepared by UHV-compatible electrospray deposition.
   - **Authors:** Alharbi, N., Hart, J., & O’Shea, J. N. (2023).
   - **Journal:** Surface Science, 735, 122323–122323.
   - **Link:** https://doi.org/10.1016/J.SUSC.2023.122323
   - **Validation Status:** [ ] Not Checked

26. **[2023-026]**
   - **Title:** The Mg Electrode Cycling Mechanism in Simple Salt Glyme Electrolytes.
   - **Authors:** Sankowski, A., Dimogiannis, K., Holc, C., Parmenter, C., Newton, G., Walsh, D., O’Shea, J., Khlobystov, A., & Johnson, L. (2023).
   - **Journal:** ECS Meeting Abstracts, MA2023-02(4), 600–600.
   - **Link:** https://doi.org/10.1149/MA2023-024600MTGABS
   - **Validation Status:** [ ] Not Checked

27. **[2023-027]**
   - **Title:** Ultrafast magnetoacoustics in Galfenol nanostructures.
   - **Authors:** Scherbakov, A. V., Linnik, T. L., Kukhtaruk, S. M., Yakovlev, D. R., Nadzeyka, A., Rushforth, A. W., Akimov, A. V., & Bayer, M. (2023).
   - **Journal:** Photoacoustics, 34, 100565–100565.
   - **Link:** https://doi.org/10.1016/J.PACS.2023.100565
   - **Validation Status:** [ ] Not Checked

28. **[2023-028]**
   - **Title:** X-ray Magnetic Circular Dichroism in Altermagnetic α-MnTe.
   - **Authors:** Hariki, A., Dal Din, A., Amin, O. J., Yamaguchi, T., Badura, A., Kriegner, D., Edmonds, K. W., Campion, R. P., Wadley, P., Backes, D., Veiga, L. S. I., Dhesi, S. S., Springholz, G., Smejkal, L., V´yborn´y, K., Jungwirth, T., & Kuneš, J. (2023).
   - **Journal:** arXiv:2305.03588v2
   - **Link:** https://arxiv.org/abs/2305.03588v2
   - **Validation Status:** [ ] Not Checked


### 2022 (14 publications)

1. **[2022-001]**
   - **Title:** Atomically sharp domain walls in an antiferromagnet.
   - **Authors:** Krizek, F., Reimers, S., Kašpar, Z., Marmodoro, A., Michalička, J., Man, O., Edström, A., Amin, O. J., Edmonds, K. W., Campion, R. P., Maccherozzi, F., Dhesi, S. S., Zubáč, J., Kriegner, D., Carbone, D., Železný, J., Výborný, K., Olejník, K., Novák, V., … Jungwirth, T.
   - **Journal:** Science Advances, 8(13), 3535–3535
   - **Link:** https://doi.org/10.1126/SCIADV.ABN3535
   - **Validation Status:** [ ] Not Checked

2. **[2022-002]**
   - **Title:** Bending a photonic wire into a ring.
   - **Authors:** Gotfredsen, H., Deng, J. R., Van Raden, J. M., Righetto, M., Hergenhahn, J., Clarke, M., Bellamy-Carter, A., Hart, J., O’Shea, J., Claridge, T. D. W., Duarte, F., Saywell, A., Herz, L. M., &
   - **Journal:** Nature Chemistry 2022 14:12, 14(12), 1436–1442
   - **Link:** https://doi.org/10.1038/s41557-022-01032-w
   - **Validation Status:** [ ] Not Checked

3. **[2022-003]**
   - **Title:** fileogratings.
   - **Authors:** Yan, W., Akimov, A. V., Barra-Burillo, M., Bayer, M., Bradford, J., Gusev, V. E., Hueso, L. E., Kent, A., Kukhtaruk, S., Nadzeyka, A., Patanè, A., Rushforth, A. W., Scherbakov, A. V., Yaremkevich, D. D.,
   - **Journal:** Nano Letters, 22(16), 6509–6515
   - **Link:** https://doi.org/10.1021/ACS.NANOLETT.2C01542
   - **Validation Status:** [ ] Not Checked

4. **[2022-004]**
   - **Title:** Defect-driven antiferromagnetic domain walls in CuMnAs films.
   - **Authors:** Reimers, S., Kriegner, D., Gomonay, O., Carbone, D., Krizek, F., Novák, V., Campion, R. P., Maccherozzi, F., Björling, A., Amin, O. J., Barton, L. X., Poole, S. F., Omari, K. A., Michalička, J., Man, O., Sinova, J.,
   - **Journal:** Nature Communications 2022 13:1, 13(1), 1–7
   - **Link:** https://doi.org/10.1038/s41467-022-28311-x
   - **Validation Status:** [ ] Not Checked

5. **[2022-005]**
   - **Title:** Electrocatalytic hydrogen evolution over micro and mesoporous cobalt metal-organic frameworks. Iqbal, B., Laybourn, A., O’Shea, J. N., Argent, S. P., & Zaheer, M. (2022). Molecular Catalysis, 531, 112711–112711. https://doi.org/10.1016/J.MCAT.2022.112711
   - **Authors:** Exciton and Phonon Radiative Linewidths in Monolayer Boron Nitride. Cassabois, G., Fugallo, G., Elias, C., Valvin, P., Rousseau, A., Gil, B., Summerfield, A., Mellor, C. J., Cheng, T. S., Eaves, L., Foxon, C.
   - **Journal:** Physical Review X, 12(1)
   - **Link:** https://doi.org/10.1103/PHYSREVX.12.011057
   - **Validation Status:** [ ] Not Checked

6. **[2022-006]**
   - **Title:** Highly efficient and selective aqueous
   - **Authors:** phase hydrogenation of aryl ketones, aldehydes, furfural and levulinic acid and its ethyl ester catalyzed by phosphine oxide-decorated polymer immobilized ionic liquid-stabilized ruthenium nanoparticles. Doherty, S., Knight, J. G., Backhouse, T., Tran, T. S. T., Paterson, R., Stahl, F., Alharbi, H. Y., Chamberlain, T. W., Bourne, R. A., Stones, R., Griffiths, A., White, J. P., Aslam, Z., Hardare, C., Daly, H., Hart,
   - **Journal:** Catalysis Science & Technology, 12(11), 3549–3567
   - **Link:** https://doi.org/10.1039/D2CY00205A
   - **Validation Status:** [ ] Not Checked

7. **[2022-007]**
   - **Title:** Hydrogen-Induced Conversion of SnS2 into SnS or Sn: A Route to Create SnS2/SnS Heterostructures.
   - **Authors:** Felton, J., Blundo, E., Kudrynskyi, Z., Ling, S., Bradford, J., Pettinari, G., Cooper, T., Wadge, M., Kovalyuk, Z., Polimeni, A., Beton, P., Grant, D., Walker, G., Patanè, A., Felton, J., Kudrynskyi, Z.,
   - **Journal:** Small, 18(33), 2202661–2202661
   - **Link:** https://doi.org/10.1002/SMLL.202202661
   - **Validation Status:** [ ] Not Checked

8. **[2022-008]**
   - **Title:** Probing the manipulation of antiferromagnetic order in CuMnAs films using neutron diffraction.
   - **Authors:** Poole, S. F., Barton, L. X., Wang, M., Manuel, P., Khalyavin, D., Langridge, S., Edmonds, K. W., Campion, R. P., Novák, V., & Wadley,
   - **Journal:** Applied Physics Letters, 121(5), 52402–52402
   - **Link:** https://doi.org/10.1063/5.0103390/2834075
   - **Validation Status:** [ ] Not Checked

9. **[2022-009]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Spectrum evolution and chirping of laser-induced spin wave packets in thin iron films. Filatov, I. A., Gerevenkov, P. I., Wang, M., Rushforth, A. W., Kalashnikova, A. M., & Khokhlov, N. E. (2022). Applied Physics Letters, 120(11), 112404–112404. https://doi.org/10.1063/5.0077195/2833285
   - **Authors:** NO AUTHORS
   - **Journal:** Spintronics: Materials, Devices, and Applications, 113–138
   - **Link:** https://doi.org/10.1002/9781119698968.CH5
   - **Validation Status:** [ ] Not Checked

10. **[2022-010]**
   - **Title:** Submolecular Resolution Imaging of
   - **Authors:** P3HT:PCBM Nanostructured Films by Atomic Force Microscopy: Implications
   - **Journal:** ACS Applied Nano Materials, 5(10), 13794–13804
   - **Link:** https://doi.org/10.1021/ACSANM.2C01399
   - **Validation Status:** [ ] Not Checked

11. **[2022-011]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Transition magnon modes in thin ferromagnetic nanogratings. Kukhtaruk, S. M., Rushforth, A. W., Godejohann, F., Scherbakov, A. V., & Bayer, M. (2022). Physical Review B, 106(6), 064411–064411. https://doi.org/10.1103/PHYSREVB.106.064411
   - **Authors:** NO AUTHORS
   - **Journal:** ECS Meeting Abstracts, MA2022-01(4), 574–574
   - **Link:** https://doi.org/10.1149/MA2022-014574MTGABS
   - **Validation Status:** [ ] Not Checked

12. **[2022-012]**
   - **Title:** Automated Searching and Identification of Self-Organized Nanostructures. Gordon, O. M., Hodgkinson, J. E. A., Farley, S. M., Hunsicker, E. L., & Moriarty, P. J. (2020). Nano Letters, 20(10), 7688–7693. https://doi.org/10.1021/ACS.NANOLETT.0C03213
   - **Authors:** Bending a photonic wire into a ring. Gotfredsen, H., Deng, J. R., Van Raden, J. M., Righetto, M., Hergenhahn, J., Clarke, M., Bellamy-Carter, A., Hart, J., O’Shea, J., Claridge, T. D. W., Duarte, F., Saywell, A., Herz, L. M., &
   - **Journal:** Nature Chemistry 2022 14:12, 14(12), 1436–1442
   - **Link:** https://doi.org/10.1038/s41557-022-01032-w
   - **Validation Status:** [ ] Not Checked

13. **[2022-013]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** On-surface chemical reactions characterised by ultra-high resolution scanning probe microscopy. Sweetman, A., Champness, N., Saywell, A., Adam Sweetman, S., Champness, N. R., Soc Rev, C., Zhang, C., & Pu, K. (2020). Chemical Society Reviews, 49(13), 4189–4202. https://doi.org/10.1039/D0CS00166J
   - **Authors:** NO AUTHORS
   - **Journal:** Chemical Communications, 58(42), 6247–6250
   - **Link:** https://doi.org/10.1039/D2CC00820C
   - **Validation Status:** [ ] Not Checked

14. **[2022-014]**
   - **Title:** Using polycyclic aromatic hydrocarbons for graphene growth on Cu(111) under ultra-high vacuum.
   - **Authors:** Klein, B. P., Stoodley, M. A., Edmondson, M., Rochford, L. A., Walker, M., Sattler, L., Weber, S. M., Hilt, G., Williams, L. B. S., Lee, T. L.,
   - **Journal:** Applied Physics Letters, 121(19), 191603–191603
   - **Link:** https://doi.org/10.1063/5.0122914/2834463
   - **Validation Status:** [ ] Not Checked


### 2021 (9 publications)

1. **[2021-001]**
   - **Title:** A soft x-ray probe of a titania photoelectrode sensitized with a triphenylamine dye. Temperton, R. H., Hart, J., Verykokkos, N., Gibson, E., & O’Shea, J. N. (2021). Journal of Chemical Physics, 154(23), 234707–234707. https://doi.org/10.1063/5.0050531/200186
   - **Authors:** Additively manufactured ultra-high vacuum chamber for portable quantum technologies. Cooper, N., Coles, L. A., Everton, S., Maskery, I., Campion, R. P., Madkhaly, S., Morley, C., O’Shea, J., Evans, W., Saint, R., Krüger, P., Oručević, F., Tuck, C., Wildman, R. D., Fromhold, T. M., &
   - **Journal:** Additive Manufacturing, 40, 101898–101898
   - **Link:** https://doi.org/10.1016/J.ADDMA.2021.101898
   - **Validation Status:** [ ] Not Checked

2. **[2021-002]**
   - **Title:** An in situ exploration of subsurface defect migration to a liquid water-exposed rutile TiO2(110) surface by XPS. Ahmed, M. H. M., Temperton, R. H., & O’Shea, J. N. (2021). Surface and Interface Analysis, 53(12), 1013–1019. https://doi.org/10.1002/SIA.6906
   - **Authors:** Band gap measurements of monolayer h-BN and insights into carbon-related point defects. Román, R. J. P., Costa, F. J. R. C., Zobelli, A., Elias, C., Valvin, P., Cassabois, G., Gil, B., Summerfield, A., Cheng, T. S., Mellor, C.
   - **Journal:** 2D Materials, 8(4), 044001–044001
   - **Link:** https://doi.org/10.1088/2053-1583/AC0D9C
   - **Validation Status:** [ ] Not Checked

3. **[2021-003]**
   - **Title:** Characterisation and Interpretation of On-Surface Chemical Reactions Studied by Ultra-High-Resolution Scanning Probe Microscopy. Sweetman, A., Champness, N. R., & Saywell, A. (2021). Supramolecular Chemistry on Surfaces: 2D Networks and 2D Structures, 9–42. https://doi.org/10.1002/9783527816699.CH2
   - **Authors:** Chemical shielding of H2O and HF encapsulated inside a C60 cage. Jarvis, S. P., Sang, H., Junqueira, F., Gordon, O., Hodgkinson, J. E. A., Saywell, A., Rahe, P., Mamone, S., Taylor, S., Sweetman, A., Leaf, J., Duncan, D. A., Lee, T. L., Thakur, P. K., Hoffman, G., Whitby, R.
   - **Journal:** Communications Chemistry 2021 4:1, 4(1), 1–7
   - **Link:** https://doi.org/10.1038/s42004-021-00569-0
   - **Validation Status:** [ ] Not Checked

4. **[2021-004]**
   - **Title:** Cyclic Single Atom Vertical Manipulation on a Nonmetallic Surface. Abbasi-Pérez, D., Sang, H., Junqueira, F. L. Q., Sweetman, A., Recio, J. M., Moriarty, P., & Kantorovich, L. (2021). Journal of Physical Chemistry Letters, 12(46), 11383–11390. https://doi.org/10.1021/ACS.JPCLETT.1C02271
   - **Authors:** Effect of magnetic anisotropy relaxation on laser-induced magnetization precession in thin galfenol films. Gerevenkov, P. I., Kuntu, D. V., Filatov, I. A., Shelukhin, L. A., Wang, M., Pattnaik, D. P., Rushforth, A. W., Kalashnikova, A. M., &
   - **Journal:** Physical Review Materials, 5(9), 094407–094407
   - **Link:** https://doi.org/10.1103/PHYSREVMATERIALS.5.094407
   - **Validation Status:** [ ] Not Checked

5. **[2021-005]**
   - **Title:** Epitaxy of boron nitride monolayers for graphene-based lateral heterostructures.
   - **Authors:** Wrigley, J., Bradford, J., James, T., Cheng, T. S., Thomas, J., Mellor, C. J., Khlobystov, A. N., Eaves, L., Foxon, C. T., Novikov, S. V.,
   - **Journal:** 2D Materials, 8(3), 034001–034001
   - **Link:** https://doi.org/10.1088/2053-1583/ABEA66
   - **Validation Status:** [ ] Not Checked

6. **[2021-006]**
   - **Title:** Flights of fancy, feet on the ground. Moriarty, P. (2021). Physics World, 34(9), 46–47. https://doi.org/10.1088/2058-7058/34/09/33
   - **Authors:** Gender issues in fundamental physics: Strumia’s bibliometric analysis fails to account for key confounders and
   - **Journal:** Quantitative Science Studies, 2(1), 263–272
   - **Link:** https://doi.org/10.1162/QSS_A_00117
   - **Validation Status:** [ ] Not Checked

7. **[2021-007]**
   - **Title:** High open-circuit voltage in transition metal dichalcogenide solar cells.
   - **Authors:** Svatek, S. A., Bueno-Blanco, C., Lin, D. Y., Kerfoot, J., Macías, C., Zehender, M. H., Tobías, I., García-Linares, P., Taniguchi, T.,
   - **Journal:** Nano Energy, 79, 105427–105427
   - **Link:** https://doi.org/10.1016/J.NANOEN.2020.105427
   - **Validation Status:** [ ] Not Checked

8. **[2021-008]**
   - **Title:** Magnetism and magnetoresistance in the critical region of a dilute ferromagnet.
   - **Authors:** Wang, M., Howells, B., Marshall, R. A., Taylor, J. M., Edmonds, K. W.,
   - **Journal:** Scientific Reports 2021 11:1, 11(1), 1–7
   - **Link:** https://doi.org/10.1038/s41598-021-81893-2
   - **Validation Status:** [ ] Not Checked

9. **[2021-009]**
   - **Title:** Origin of    C  60   surface reconstruction resolved by atomic force microscopy. Forcieri, L., Taylor, S., Moriarty, P., & Jarvis, S. P. (2021). Physical Review B, 104(20), 205428–205428. https://doi.org/10.1103/PhysRevB.104.205428
   - **Authors:** Protected Long-Distance Guiding of Hypersound Underneath a Nanocorrugated Surface. Yaremkevich, D. D., Scherbakov, A. V., Kukhtaruk, S. M., Linnik, T. L., Khokhlov, N. E., Godejohann, F., Dyatlova, O. A., Nadzeyka, A., Pattnaik, D. P., Wang, M., Roy, S., Campion, R. P., Rushforth, A. W.,
   - **Journal:** ACS Nano, 15(3), 4802–4810
   - **Link:** https://doi.org/10.1021/ACSNANO.0C09475
   - **Validation Status:** [ ] Not Checked


### 2020 (23 publications)

1. **[2020-001]**
   - **Title:** A LEGO^TM dynamic force “macroscope”. Taylor, D., Smaje, ; H, Moriarty, ; P, Smaje, H., & Moriarty, P. (2020). American Journal of Physics, 88(11), 906–917. https://doi.org/10.1119/10.0001700
   - **Authors:** Atomic reconstruction in twisted bilayers of transition metal dichalcogenides. Weston, A., Zou, Y., Enaldiev, V., Summerfield, A., Clark, N., Zólyomi, V., Graham, A., Yelgel, C., Magorrian, S., Zhou, M., Zultak, J., Hopkinson, D., Barinov, A., Bointon, T. H., Kretinin, A., Wilson, N. R.,
   - **Journal:** Nature Nanotechnology 2020 15:7, 15(7), 592–597
   - **Link:** https://doi.org/10.1038/s41565-020-0682-9
   - **Validation Status:** [ ] Not Checked

2. **[2020-002]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Complementary Lateral-Spin–Orbit Building Blocks for Programmable Logic and In-Memory Computing. Zhang, N., Cao, Y., Li, Y., Rushforth, A. W., Ji, Y., Zheng, H., & Wang, K. (2020). Advanced Electronic Materials, 6(8), 2000296–2000296. https://doi.org/10.1002/AELM.202000296
   - **Authors:** NO AUTHORS
   - **Journal:** Journal of Physics D: Applied Physics, 53(16), 164001–164001
   - **Link:** https://doi.org/10.1088/1361-6463/AB6CC7
   - **Validation Status:** [ ] Not Checked

3. **[2020-003]**
   - **Title:** Deterministic Magnetization Switching Using Lateral Spin–Orbit Torque.
   - **Authors:** Cao, Y., Sheng, Y., William Edmonds, K., Ji, Y., Zheng, H., Wang, K., Cao, Y., Sheng, Y., Ji, Y., Zheng, H., Wang, K., & Edmonds, K. W.
   - **Journal:** Advanced Materials, 32(16), 1907929–1907929
   - **Link:** https://doi.org/10.1002/ADMA.201907929
   - **Validation Status:** [ ] Not Checked

4. **[2020-004]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Electrical control of antiferromagnets for the next generation of computing technology. Amin, O. J., Edmonds, K. W., & Wadley, P. (2020). Applied Physics Letters, 117(1), 10501–10501. https://doi.org/10.1063/5.0013917/39017
   - **Authors:** NO AUTHORS
   - **Journal:** Machine Learning: Science and Technology, 1(1), 15001–15001
   - **Link:** https://doi.org/10.1088/2632-2153/ab42ec
   - **Validation Status:** [ ] Not Checked

5. **[2020-005]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Emerging edge states on the surface of the epitaxial semimetal CuMnAs thin film. Nguyen, G. D., Pitike, K. C., Wadley, P., Cooper, V. R., Yoon, M., Berlijn, T., & Li, A. P. (2020). Applied Physics Letters, 116(6), 61603–61603. https://doi.org/10.1063/1.5130624/8748802
   - **Authors:** NO AUTHORS
   - **Journal:** ACS Nano, 14(10), 13886–13893
   - **Link:** https://doi.org/10.1021/ACSNANO.0C06280
   - **Validation Status:** [ ] Not Checked

6. **[2020-006]**
   - **Title:** Highly efficient hydrogen evolution reaction, plasmon-enhanced by AuNP-L-TiO2NP photocatalysts.
   - **Authors:** Castillo-Rodriguez, J., Ortiz, P. D., Isaacs, M., Martinez, N. P., O’Shea, J. N., Hart, J., Temperton, R., Zarate, X., Contreras, D., &
   - **Journal:** New Journal of Chemistry, 44(38), 16491–16500
   - **Link:** https://doi.org/10.1039/D0NJ03250F
   - **Validation Status:** [ ] Not Checked

7. **[2020-007]**
   - **Title:** Identifying carbon as the source of visible single-photon emission from hexagonal boron nitride.
   - **Authors:** Mendelson, N., Chugh, D., Reimers, J. R., Cheng, T. S., Gottscholl, A., Long, H., Mellor, C. J., Zettl, A., Dyakonov, V., Beton, P. H., Novikov, S. V., Jagadish, C., Tan, H. H., Ford, M. J., Toth, M., Bradac,
   - **Journal:** Nature Materials 2020 20:3, 20(3), 321–328
   - **Link:** https://doi.org/10.1038/s41563-020-00850-y
   - **Validation Status:** [ ] Not Checked

8. **[2020-008]**
   - **Title:** Improving the segmentation of scanning probe microscope images using convolutional neural networks. Farley, S., Hodgkinson, J. E. A., Gordon, O. M., Turner, J., Soltoggio, A., Moriarty, P. J., & Hunsicker, E. (2020). Machine Learning: Science and Technology, 2(1), 15015–15015. https://doi.org/10.1088/2632-2153/abc81c
   - **Authors:** Investigation of magnetic anisotropy and heat dissipation in thin films of compensated antiferromagnet CuMnAs by
   - **Journal:** Journal of Applied Physics, 127(23), 233904–233904
   - **Link:** https://doi.org/10.1063/5.0006185/1062586
   - **Validation Status:** [ ] Not Checked

9. **[2020-009]**
   - **Title:** Low-energy switching of antiferromagnetic CuMnAs/GaP using sub-10 nanosecond current pulses.
   - **Authors:** Omari, K. A., Barton, ; L X, Amin, ; O, Campion, ; R P, Rushforth, ; A W, Kent, ; A J, Wadley, ; P, Edmonds, ; K W, Barton, L. X., Amin, O., Campion, R. P., Rushforth, A. W., Kent, A. J., Wadley, P., &
   - **Journal:** Journal of Applied Physics, 127(19), 193906–193906
   - **Link:** https://doi.org/10.1063/5.0006183
   - **Validation Status:** [ ] Not Checked

10. **[2020-010]**
   - **Title:** Machine learning at the (sub)atomic scale: Next generation scanning probe microscopy. Gordon, O. M., & Moriarty, P. J. (2020). Machine Learning: Science and Technology, 1(2), 23001–23001. https://doi.org/10.1088/2632-2153/ab7d2f
   - **Authors:** Magneto-Seebeck microscopy of domain switching in collinear antiferromagnet CuMnAs. Janda, T., Godinho, J., Ostatnicky, T., Pfitzner, E., Ulrich, G., Hoehl, A., Reimers, S., Šobáň, Z., Metzger, T., Reichlová, H., Novák, V., Campion, R. P., Heberle, J., Wadley, P., Edmonds, K. W., Amin, O. J., Chauhan, J. S., Dhesi, S. S., Maccherozzi, F., … Wunderlich, J.
   - **Journal:** Physical Review Materials, 4(9), 094413–094413
   - **Link:** https://doi.org/10.1103/PHYSREVMATERIALS.4.094413
   - **Validation Status:** [ ] Not Checked

11. **[2020-011]**
   - **Title:** Magnon polaron formed by selectively coupled coherent magnon and phonon modes of a surface patterned ferromagnet.
   - **Authors:** Godejohann, F., Scherbakov, A. V., Kukhtaruk, S. M., Poddubny, A. N., Yaremkevich, D. D., Wang, M., Nadzeyka, A., Yakovlev, D. R., Rushforth,
   - **Journal:** Physical Review B, 102(14), 144438–144438
   - **Link:** https://doi.org/10.1103/PHYSREVB.102.144438
   - **Validation Status:** [ ] Not Checked

12. **[2020-012]**
   - **Title:** Merging phonons and magnons in periodic ferromagnetic nanostructures.
   - **Authors:** Scherbakov, A., Godejohann, F., Kukhtaruk, S., Poddubny, A., Yaremkevich, D., Wang, M., Nadzeyka, A., Yakovlev, D., Rushforth, A.,
   - **Journal:** 3043–3043
   - **Link:** https://doi.org/10.48465/FA.2020.0746
   - **Validation Status:** [ ] Not Checked

13. **[2020-013]**
   - **Title:** Modeling Photocathode Performance Using MedeA-VASP Simulation Software. Williams, J. O. D., Lapington, J. S., Campion, R., Foxon, T., Temperton, R. H., & O’Shea, J. N. (2020). IEEE Transactions on Nuclear Science, 67(9), 1987–1992. https://doi.org/10.1109/TNS.2020.3011355
   - **Authors:** Molecular beam epitaxy of CuMnAs. Krizek, F., Kašpar, Z., Vetushka, A., Kriegner, D., Fiordaliso, E. M., Michalicka, J., Man, O., Zubáč, J., Brajer, M., Hills, V. A., Edmonds, K. W., Wadley, P., Campion, R. P., Olejník, K., Jungwirth, T., &
   - **Journal:** Physical Review Materials, 4(1), 014409–014409
   - **Link:** https://doi.org/10.1103/PHYSREVMATERIALS.4.014409
   - **Validation Status:** [ ] Not Checked

14. **[2020-014]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Molecular Diffusion and Self-Assembly: Quantifying the Influence of Substrate hcp and fcc Atomic Stacking. Edmondson, M., & Saywell, A. (2022). Nano Letters, 22(20), 8210–8215. https://doi.org/10.1021/ACS.NANOLETT.2C02895
   - **Authors:** NO AUTHORS
   - **Journal:** Physical Review Letters, 125(20), 206803–206803
   - **Link:** https://doi.org/10.1103/PHYSREVLETT.125.206803
   - **Validation Status:** [ ] Not Checked

15. **[2020-015]**
   - **Title:** Natural optical activity as the origin of the large chiroptical properties in π-conjugated polymer thin films.
   - **Authors:** Wade, J., Hilfiker, J. N., Brandt, J. R., Liirò-Peluso, L., Wan, L., Shi, X., Salerno, F., Ryan, S. T. J., Schöche, S., Arteaga, O., Jávorfi, T., Siligardi, G., Wang, C., Amabilino, D. B., Beton, P. H., Campbell,
   - **Journal:** Nature Communications 2020 11:1, 11(1), 1–11
   - **Link:** https://doi.org/10.1038/s41467-020-19951-y
   - **Validation Status:** [ ] Not Checked

16. **[2020-016]**
   - **Title:** Production and processing of graphene and related materials.
   - **Authors:** Backes, C., Abdelkader, A. M., Alonso, C., Andrieux-Ledier, A., Arenal, R., Azpeitia, J., Balakrishnan, N., Banszerus, L., Barjon, J., Bartali, R., Bellani, S., Berger, C., Berger, R., Ortega, M. M. B., Bernard, C., Beton, P. H., Beyer, A., Bianco, A., Bøggild, P., … Garcia-Hernandez,
   - **Journal:** 2D Materials, 7(2), 022001–022001
   - **Link:** https://doi.org/10.1088/2053-1583/AB1E0A
   - **Validation Status:** [ ] Not Checked

17. **[2020-017]**
   - **Title:** Quadruped Molecular Anchoring to an Insulator: Functionalized Ferrocene on CaF 2 Bulk and Thin Film Surfaces. Laflö, L., Schlage, F. A., Kantorovich, L., Moriarty, P. J., Reichling, M., & Rahe, P. (2020). J. Phys. Chem. C, 124, 9907–9907. https://doi.org/10.1021/acs.jpcc.0c00115
   - **Authors:** Quenching of an antiferromagnet into high resistivity states using electrical or ultrashort optical pulses. Kašpar, Z., Surýnek, M., Zubáč, J., Krizek, F., Novák, V., Campion, R. P., Wörnle, M. S., Gambardella, P., Marti, X., Němec, P., Edmonds, K. W., Reimers, S., Amin, O. J., Maccherozzi, F., Dhesi, S. S., Wadley, P.,
   - **Journal:** Nature Electronics 2020 4:1, 4(1), 30–37
   - **Link:** https://doi.org/10.1038/s41928-020-00506-4
   - **Validation Status:** [ ] Not Checked

18. **[2020-018]**
   - **Title:** Resonant thermal energy transfer to magnons in a ferromagnetic nanolayer.
   - **Authors:** Kobecki, M., Scherbakov, A. V., Linnik, T. L., Kukhtaruk, S. M., Gusev, V. E., Pattnaik, D. P., Akimov, I. A., Rushforth, A. W., Akimov, A. V.,
   - **Journal:** Nature Communications 2020 11:1, 11(1), 1–7
   - **Link:** https://doi.org/10.1038/s41467-020-17635-1
   - **Validation Status:** [ ] Not Checked

19. **[2020-019]**
   - **Title:** Resonant tunnelling into the two-dimensional subbands of InSe layers.
   - **Authors:** Kudrynskyi, Z. R., Kerfoot, J., Mazumder, D., Greenaway, M. T., Vdovin, E. E., Makarovsky, O., Kovalyuk, Z. D., Eaves, L., Beton, P. H., &
   - **Journal:** Communications Physics 2020 3:1, 3(1), 1–7
   - **Link:** https://doi.org/10.1038/s42005-020-0290-x
   - **Validation Status:** [ ] Not Checked

20. **[2020-020]**
   - **Title:** Spectrum evolution of magnetostatic waves excited through ultrafast laser-induced heating. Filatov, I. A., Gerevenkov, P. I., Wang, M., Rushforth, A. W., Kalashnikova, A. M., & Khokhlov, N. E. (2020). Journal of Physics: Conference Series, 1697(1), 012193–012193. https://doi.org/10.1088/1742-6596/1697/1/012193
   - **Authors:** Spin flop and crystalline anisotropic magnetoresistance in CuMnAs. Wang, M., Andrews, C., Reimers, S., Amin, O. J., Wadley, P., Campion, R. P., Poole, S. F., Felton, J., Edmonds, K. W., Gallagher, B. L., Rushforth, A. W., Makarovsky, O., Gas, K., Sawicki, M., Kriegner, D., Zubáč, J., Olejník, K., Novák, V., Jungwirth, T., … MacCherozzi, F. (2020a). Physical Review B, 101(9), 094429–094429. https://doi.org/10.1103/PHYSREVB.101.094429 Step-flow growth of graphene-boron nitride lateral heterostructures by molecular beam epitaxy. Thomas, J., Bradford, J., Cheng, T. S., Summerfield, A., Wrigley, J., Mellor, C. J., Khlobystov, A. N., Foxon, C. T., Eaves, L., Novikov, S.
   - **Journal:** 2D Materials, 7(3), 035014–035014
   - **Link:** https://doi.org/10.1088/2053-1583/AB89E7
   - **Validation Status:** [ ] Not Checked

21. **[2020-021]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Structural characterisation of molecular conformation and the incorporation of adatoms in an on-surface Ullmann-type reaction. Judd, C. J., Junqueira, F. L. Q., Haddow, S. L., Champness, N. R., Duncan, D. A., Jones, R. G., & Saywell, A. (2020). Communications Chemistry 2020 3:1, 3(1), 1–8. https://doi.org/10.1038/s42004-020-00402-0
   - **Authors:** NO AUTHORS
   - **Journal:** Physical Review Applied, 13(2), 024039–024039
   - **Link:** https://doi.org/10.1103/PHYSREVAPPLIED.13.024039
   - **Validation Status:** [ ] Not Checked

22. **[2020-022]**
   - **Title:** Triplet Excitation and Electroluminescence from a Supramolecular Monolayer Embedded in a Boron Nitride Tunnel Barrier.
   - **Authors:** Svatek, S. A., Kerfoot, J., Summerfield, A., Nizovtsev, A. S., Korolkov, V. V., Taniguchi, T., Watanabe, K., Antolín, E., Besley, E.,
   - **Journal:** Nano Letters, 20(1), 278–283
   - **Link:** https://doi.org/10.1021/ACS.NANOLETT.9B03787
   - **Validation Status:** [ ] Not Checked

23. **[2020-023]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Tuning Interfacial Spins in Antiferromagnetic-Ferromagnetic-Heavy-Metal Heterostructures via Spin-Orbit Torque. Liu, X. H., Edmonds, K. W., Zhou, Z. P., & Wang, K. Y. (2020). Physical Review Applied, 13(1), 014059–014059. https://doi.org/10.1103/PHYSREVAPPLIED.13.014059
   - **Authors:** NO AUTHORS
   - **Journal:** Chemical Physics Letters, 747, 137309–137309
   - **Link:** https://doi.org/10.1016/J.CPLETT.2020.137309
   - **Validation Status:** [ ] Not Checked


### 2019 (15 publications)

1. **[2019-001]**
   - **Title:** AIRBED: A Simplified Density Functional Theory Model for Physisorption on Surfaces. Mason, S. E., Beton, P. H., & Besley, N. A. (2019). Journal of Chemical Theory and Computation, 15(10), 5628–5634. https://doi.org/10.1021/ACS.JCTC.9B00576
   - **Authors:** Current-induced fragmentation of antiferromagnetic domains. Wörnle, M. S., Welter, P., Kašpar, Z., Olejník, K., Novák, V., Campion, R. P., Wadley, P., Jungwirth, T., Degen, C. L., & Gambardella, P.
   - **Journal:** NO JOURNAL
   - **Link:** https://arxiv.org/abs/1912.05287v1
   - **Validation Status:** [ ] Not Checked

2. **[2019-002]**
   - **Title:** Design and optical characterisation of an efficient light trapping structure for dye-sensitized solar cell integrated windows. Knott, A., Liu, X., Makarovskiy, O., O’Shea, J., Tuck, C., & Wu, Y. (2019). Building Simulation, 12(1), 41–49. https://doi.org/10.1007/S12273-018-0485-1
   - **Authors:** Direct band-gap crossover in epitaxial monolayer boron nitride. Elias, C., Valvin, P., Pelini, T., Summerfield, A., Mellor, C. J., Cheng, T. S., Eaves, L., Foxon, C. T., Beton, P. H., Novikov, S. V.,
   - **Journal:** Nature Communications 2019 10:1, 10(1), 1–7
   - **Link:** https://doi.org/10.1038/s41467-019-10610-5
   - **Validation Status:** [ ] Not Checked

3. **[2019-003]**
   - **Title:** Direct Synthesis of Multiplexed Metal-Nanowire-Based Devices by Using Carbon Nanotubes as Vector Templates.
   - **Authors:** Clément, P., Xu, X., Stoppiello, C. T., Rance, G. A., Attanzio, A., O’Shea, J. N., Temperton, R. H., Khlobystov, A. N., Lovelock, K. R. J., Seymour, J. M., Fogarty, R. M., Baker, A., Bourne, R. A., Hall, B.,
   - **Journal:** Angewandte Chemie International Edition, 58(29), 9928–9932
   - **Link:** https://doi.org/10.1002/ANIE.201902857
   - **Validation Status:** [ ] Not Checked

4. **[2019-004]**
   - **Title:** Epitaxial multilayers of alkanes on two-dimensional black phosphorus as passivating and electrically insulating nanostructures.
   - **Authors:** Bolognesi, M., Brucale, M., Lorenzoni, A., Prescimone, F., Moschetto, S., Korolkov, V. V., Baldoni, M., Serrano-Ruiz, M., Caporali, M., Mercuri, F., Besley, E., Muccini, M., Peruzzini, M., Beton, P. H., &
   - **Journal:** Nanoscale, 11(37), 17252–17261
   - **Link:** https://doi.org/10.1039/C9NR01155B
   - **Validation Status:** [ ] Not Checked

5. **[2019-005]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Nanoscale, 11(28), 13450–13457. https://doi.org/10.1039/C9NR03707A
   - **Authors:** NO AUTHORS
   - **Journal:** Physical Chemistry Chemical Physics, 21(3), 1393–1398
   - **Link:** https://doi.org/10.1039/C8CP06912C
   - **Validation Status:** [ ] Not Checked

6. **[2019-006]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Manipulation of Magnetization by Spin–Orbit Torque. Li, Y., Edmonds, K. W., Liu, X., Zheng, H., & Wang, K. (2019). Advanced Quantum Technologies, 2(1–2), 1800052–1800052. https://doi.org/10.1002/QUTE.201800052
   - **Authors:** NO AUTHORS
   - **Journal:** Scientific Reports 2019 9:1, 9(1), 1–6
   - **Link:** https://doi.org/10.1038/s41598-019-39775-1
   - **Validation Status:** [ ] Not Checked

7. **[2019-007]**
   - **Title:** On-Surface Synthesis within a Porphyrin Nanoring Template. Judd, C. J., Kondratuk, D. V., Anderson, H. L., & Saywell, A. (2019). Scientific Reports 2019 9:1, 9(1), 1–8. https://doi.org/10.1038/s41598-019-45359-w
   - **Authors:** Optical Excitation of Propagating Magnetostatic Waves in an Epitaxial Galfenol Film by Ultrafast Magnetic Anisotropy Change. Khokhlov, N. E., Gerevenkov, P. I., Shelukhin, L. A., Azovtsev, A. V., Pertsev, N. A., Wang, M., Rushforth, A. W., Scherbakov, A. V., &
   - **Journal:** Physical Review Applied, 12(4), 044044–044044
   - **Link:** https://doi.org/10.1103/PHYSREVAPPLIED.12.044044
   - **Validation Status:** [ ] Not Checked

8. **[2019-008]**
   - **Title:** Optical Excitation of Single- and Multimode Magnetization Precession in Fe—Ga Nanolayers.
   - **Authors:** Scherbakov, A. V., Danilov, A. P., Godejohann, F., Linnik, T. L., Glavin, B. A., Shelukhin, L. A., Pattnaik, D. P., Wang, M., Rushforth,
   - **Journal:** Physical Review Applied, 11(3), 031003–031003
   - **Link:** https://doi.org/10.1103/PHYSREVAPPLIED.11.031003
   - **Validation Status:** [ ] Not Checked

9. **[2019-009]**
   - **Title:** Ordering, flexibility and frustration in arrays of porphyrin nanorings.
   - **Authors:** Summerfield, A., Baldoni, M., Kondratuk, D. V., Anderson, H. L.,
   - **Journal:** Nature Communications 2019 10:1, 10(1), 1–7
   - **Link:** https://doi.org/10.1038/s41467-019-11009-y
   - **Validation Status:** [ ] Not Checked

10. **[2019-010]**
   - **Title:** Resonant inelastic X-ray scattering of a
   - **Authors:** Ru photosensitizer: Insights from individual ligands to the electronic structure of the complete molecule. Temperton, R. H., Skowron, S. T., Handrup, K., Gibson, A. J., Nicolaou, A., Jaouen, N., Besley, E.,
   - **Journal:** Journal of Chemical Physics, 151(7), 74701–74701
   - **Link:** https://doi.org/10.1063/1.5114692/197975
   - **Validation Status:** [ ] Not Checked

11. **[2019-011]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Rushing or dragging? An analysis of the ‘universality’ of correlated fluctuations in hi-hat timing and dynamics. Gordon, O., Coy, D., Matthews, J., Kandola-McNicholas, E., Llewellyn, O., Bokhari, A., & Moriarty, P. (2019).
   - **Authors:** NO AUTHORS
   - **Journal:** Review of Scientific Instruments, 90(10), 103704–103704
   - **Link:** https://doi.org/10.1063/1.5099590/360585
   - **Validation Status:** [ ] Not Checked

12. **[2019-012]**
   - **Title:** Spin Logic Devices via Electric Field Controlled Magnetization Reversal by Spin-Orbit Torque.
   - **Authors:** Yang, M., Luo, J., Ji, Y., Zheng, H.-Z., Wang, K., Deng, Y., Wu, Z., Cai, K., Edmonds, K. W., Li, Y., Sheng, Y., Wang, S., & Cui, Y.
   - **Journal:** IEEE Electron Device Letters, 40(9), 1554–1557
   - **Link:** https://doi.org/10.1109/LED.2019.2932479
   - **Validation Status:** [ ] Not Checked

13. **[2019-013]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Spintronic Synapses: Tuning a Binary Ferromagnet into a Multistate Synapse with Spin–Orbit-Torque-Induced Plasticity. Cao, Y., Rushforth, Andrew W., Sheng, Y., Zheng, H., & Wang, K. (2019a). Advanced Functional Materials, 29(25), 1970175–1970175. https://doi.org/10.1002/ADFM.201970175
   - **Authors:** NO AUTHORS
   - **Journal:** Physical Review B, 99(14), 140411–140411
   - **Link:** https://doi.org/10.1103/PHYSREVB.99.140411
   - **Validation Status:** [ ] Not Checked

14. **[2019-014]**
   - **Title:** Thermal stability of interstitial and substitutional Mn in ferromagnetic (Ga,Mn)As.
   - **Authors:** Lima, T. A. L., Wahl, U., Costa, A., Augustyns, V., Edmonds, K. W., Gallagher, B. L., Campion, R. P., Araújo, J. P., Correia, J. G., Da
   - **Journal:** Physical Review B, 100(14), 144409–144409
   - **Link:** https://doi.org/10.1103/PHYSREVB.100.144409
   - **Validation Status:** [ ] Not Checked

15. **[2019-015]**
   - **Title:** Tuning a Binary Ferromagnet into a Multistate Synapse with Spin–Orbit-Torque-Induced Plasticity. Cao, Y., Rushforth, A. W., Sheng, Y., Zheng, H., & Wang, K. (2019b). Advanced Functional Materials, 29(25), 1808104–1808104. https://doi.org/10.1002/ADFM.201808104
   - **Authors:** Two-Dimensional Diffusion of Excitons in a Perylene Diimide Monolayer Quenched by a Fullerene Heterojunction. Kerfoot, J., Korolkov, V. V., Svatek, S. A., Alkhamisi, M., Taniguchi,
   - **Journal:** Journal of Physical Chemistry C, 123(19), 12249–12254
   - **Link:** https://doi.org/10.1021/ACS.JPCC.9B01413
   - **Validation Status:** [ ] Not Checked


### 2018 (22 publications)

1. **[2018-001]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Ultra-high resolution imaging of thin films and single strands of polythiophene using atomic force microscopy. Korolkov, V. V., Summerfield, A., Murphy, A., Amabilino, D. B., Watanabe, K., Taniguchi, T., & Beton, P. H. (2019). Nature Communications 2019 10:1, 10(1), 1–8. https://doi.org/10.1038/s41467-019-09571-6
   - **Authors:** NO AUTHORS
   - **Journal:** Advanced Electronic Materials, 4(9), 1800224–1800224
   - **Link:** https://doi.org/10.1002/AELM.201800224
   - **Validation Status:** [ ] Not Checked

2. **[2018-002]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Adsorption of Hexacontane on Hexagonal Boron Nitride. Albar, J. D., Korolkov, V. V., Baldoni, M., Watanabe, K., Taniguchi, T., Besley, E., & Beton, P. H. (2018). Journal of Physical Chemistry C, 122(48), 27575–27581. https://doi.org/10.1021/ACS.JPCC.8B10167
   - **Authors:** NO AUTHORS
   - **Journal:** Chemistry – A European Journal, 24(1), 56–61
   - **Link:** https://doi.org/10.1002/CHEM.201704693
   - **Validation Status:** [ ] Not Checked

3. **[2018-003]**
   - **Title:** Band structure of CuMnAs probed by optical and photoemission spectroscopy.
   - **Authors:** Veis, M., Minár, J., Steciuk, G., Palatinus, L., Rinaldi, C., Cantoni, M., Kriegner, D., Tikuišis, K. K., Hamrle, J., Zahradník, M., Antoš, R., Železný, J., Šmejkal, L., Marti, X., Wadley, P., Campion, R. P.,
   - **Journal:** Physical Review B, 97(12), 125109–125109
   - **Link:** https://doi.org/10.1103/PHYSREVB.97.125109
   - **Validation Status:** [ ] Not Checked

4. **[2018-004]**
   - **Title:** Beauty and the biased. Moriarty, P. (2018a). Physics World, 31(12), 17–17. https://doi.org/10.1088/2058-7058/31/12/22
   - **Authors:** Coherent acoustic phonons in van der Waals nanolayers and heterostructures. Greener, J. D. G., Akimov, A. V., Gusev, V. E., Kudrynskyi, Z. R., Beton, P. H., Kovalyuk, Z. D., Taniguchi, T., Watanabe, K., Kent, A. J.,
   - **Journal:** Physical Review B, 98(7)
   - **Link:** https://doi.org/10.1103/PHYSREVB.98.075408
   - **Validation Status:** [ ] Not Checked

5. **[2018-005]**
   - **Title:** Current polarity-dependent manipulation of antiferromagnetic domains.
   - **Authors:** Wadley, P., Reimers, S., Grzybowski, M. J., Andrews, C., Wang, M., Chauhan, J. S., Gallagher, B. L., Campion, R. P., Edmonds, K. W., Dhesi, S. S., Maccherozzi, F., Novak, V., Wunderlich, J., & Jungwirth, T.
   - **Journal:** Nature Nanotechnology 2018 13:5, 13(5), 362–365
   - **Link:** https://doi.org/10.1038/s41565-018-0079-1
   - **Validation Status:** [ ] Not Checked

6. **[2018-006]**
   - **Title:** Electrically induced and detected Néel vector reversal in a collinear antiferromagnet.
   - **Authors:** Godinho, J., Reichlová, H., Kriegner, D., Novák, V., Olejník, K., Kašpar, Z., Šobáň, Z., Wadley, P., Campion, R. P., Otxoa, R. M., Roy, P.
   - **Journal:** Nature Communications 2018 9:1, 9(1), 1–8
   - **Link:** https://doi.org/10.1038/s41467-018-07092-2
   - **Validation Status:** [ ] Not Checked

7. **[2018-007]**
   - **Title:** Epitaxial growth of γ-InSe and α, β, and γ-In2Se3 on ε-GaSe.
   - **Authors:** Balakrishnan, N., Steer, E. D., Smith, E. F., Kudrynskyi, Z. R.,
   - **Journal:** 2D Materials, 5(3), 035026–035026
   - **Link:** https://doi.org/10.1088/2053-1583/AAC479
   - **Validation Status:** [ ] Not Checked

8. **[2018-008]**
   - **Title:** Formation routes and structural details
   - **Authors:** of the CaF1 layer on Si(111) from high-resolution noncontact atomic
   - **Journal:** Physical Review B, 97(12)
   - **Link:** https://doi.org/10.1103/PHYSREVB.97.125418
   - **Validation Status:** [ ] Not Checked

9. **[2018-009]**
   - **Title:** Generation of a localized microwave magnetic field by coherent phonons in a ferromagnetic nanograting.
   - **Authors:** Salasyuk, A. S., Rudkovskaya, A. V., Danilov, A. P., Glavin, B. A., Kukhtaruk, S. M., Wang, M., Rushforth, A. W., Nekludova, P. A., Sokolov, S. V., Elistratov, A. A., Yakovlev, D. R., Bayer, M., Akimov, A. V.,
   - **Journal:** Physical Review B, 97(6), 060404–060404
   - **Link:** https://doi.org/10.1103/PHYSREVB.97.060404
   - **Validation Status:** [ ] Not Checked

10. **[2018-010]**
   - **Title:** and Microelectronics: Materials, Processing, Measurement, and Phenomena, 36(2), 2–103. https://doi.org/10.1116/1.5011280/592946
   - **Authors:** High-Temperature Molecular Beam Epitaxy of Hexagonal Boron Nitride with High Active Nitrogen Fluxes. Cheng, T. S., Summerfield, A., Mellor, C. J., Khlobystov, A. N., Eaves,
   - **Journal:** Materials 2018, Vol. 11, Page 1119, 11(7), 1119–1119
   - **Link:** https://doi.org/10.3390/MA11071119
   - **Validation Status:** [ ] Not Checked

11. **[2018-011]**
   - **Title:** Lattice-Matched Epitaxial Graphene Grown on Boron Nitride.
   - **Authors:** Davies, A., Albar, J. D., Summerfield, A., Thomas, J. C., Cheng, T. S., Korolkov, V. V., Stapleton, E., Wrigley, J., Goodey, N. L., Mellor, C. J., Khlobystov, A. N., Watanabe, K., Taniguchi, T., Foxon, C. T., Eaves,
   - **Journal:** Nano Letters, 18(1), 498–504
   - **Link:** https://doi.org/10.1021/ACS.NANOLETT.7B04453
   - **Validation Status:** [ ] Not Checked

12. **[2018-012]**
   - **Title:** Moiré-Modulated Conductance of Hexagonal Boron Nitride Tunnel Barriers.
   - **Authors:** Summerfield, A., Kozikov, A., Cheng, T. S., Davies, A., Cho, Y. J., Khlobystov, A. N., Mellor, C. J., Foxon, C. T., Watanabe, K., Taniguchi, T., Eaves, L., Novoselov, K. S., Novikov, S. V., & Beton, P. H.
   - **Journal:** Nano Letters, 18(7), 4241–4246
   - **Link:** https://doi.org/10.1021/ACS.NANOLETT.8B01223
   - **Validation Status:** [ ] Not Checked

13. **[2018-013]**
   - **Title:** Physical Review B, 98(6), 060406–060406. https://doi.org/10.1103/PHYSREVB.98.060406
   - **Authors:** Out of this solar system. Moriarty, P. (2018b). Physics World, 31(2), 22–22. https://doi.org/10.1088/2058-7058/31/2/25
   - **Journal:** Nature Materials 2018 17:7, 17(7), 566–567
   - **Link:** https://doi.org/10.1038/s41563-018-0125-2
   - **Validation Status:** [ ] Not Checked

14. **[2018-014]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Scanning photocurrent microscopy of 3D printed light trapping structures in dye-sensitized solar cells. Knott, A., Makarovskiy, O., O’Shea, J., Wu, Y., & Tuck, C. (2018). Solar Energy Materials and Solar Cells, 180, 103–109. https://doi.org/10.1016/J.SOLMAT.2018.02.028
   - **Authors:** NO AUTHORS
   - **Journal:** Journal of Physical Chemistry C, 122(33), 19067–19074
   - **Link:** https://doi.org/10.1021/ACS.JPCC.8B06036
   - **Validation Status:** [ ] Not Checked

15. **[2018-015]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Spin switching in antiferromagnets using Néel-order spin-orbit torques*. Wadley, P., & Edmonds, K. W. (2018). Chinese Physics B, 27(10), 107201–107201. https://doi.org/10.1088/1674-1056/27/10/107201
   - **Authors:** NO AUTHORS
   - **Journal:** Nature Physics 2018 14:3, 14(3), 220–228
   - **Link:** https://doi.org/10.1038/s41567-018-0062-7
   - **Validation Status:** [ ] Not Checked

16. **[2018-016]**
   - **Title:** Substrate-induced shifts and screening in the fluorescence spectra of supramolecular adsorbed organic monolayers.
   - **Authors:** Kerfoot, J., Korolkov, V. V., Nizovtsev, A. S., Jones, R., Taniguchi, T., Watanabe, K., Lesanovsky, I., Olmos, B., Besley, N. A., Besley, E.,
   - **Journal:** Journal of Chemical Physics, 149(5), 54701–54701
   - **Link:** https://doi.org/10.1063/1.5041418/362448
   - **Validation Status:** [ ] Not Checked

17. **[2018-017]**
   - **Title:** Supramolecular assemblies on surfaces: Nanopatterning, functionality, and reactivity.
   - **Authors:** Goronzy, D. P., Ebrahimi, M., Rosei, F., Arramel, Fang, Y., De Feyter, S., Tait, S. L., Wang, C., Beton, P. H., Wee, A. T. S., Weiss, P. S.,
   - **Journal:** ACS Nano, 12(8), 7445–7481
   - **Link:** https://doi.org/10.1021/ACSNANO.8B03513
   - **Validation Status:** [ ] Not Checked

18. **[2018-018]**
   - **Title:** Switching the uniaxial magnetic anisotropy by ion irradiation induced compensation.
   - **Authors:** Yuan, Y., Amarouche, T., Xu, C., Rushforth, A., Böttger, R., Edmonds, K., Campion, R., Gallagher, B., Helm, M., Von Bardeleben, H. J., &
   - **Journal:** Journal of Physics D: Applied Physics, 51(14), 145001–145001
   - **Link:** https://doi.org/10.1088/1361-6463/AAB1DB
   - **Validation Status:** [ ] Not Checked

19. **[2018-019]**
   - **Title:** Terahertz electrical writing speed in an antiferromagnetic memory.
   - **Authors:** Olejník, K., Seifert, T., Kašpar, Z., Novák, V., Wadley, P., Campion, R. P., Baumgartner, M., Gambardella, P., Nemec, P., Wunderlich, J., Sinova, J., Kužel, P., Müller, M., Kampfrath, T., & Jungwirth, T.
   - **Journal:** Science Advances, 4(3)
   - **Link:** https://doi.org/10.1126/SCIADV.AAR3566
   - **Validation Status:** [ ] Not Checked

20. **[2018-020]**
   - **Title:** The growth and fluorescence of phthalocyanine monolayers, thin films and multilayers on hexagonal boron nitride.
   - **Authors:** Alkhamisi, M., Korolkov, V. V., Nizovtsev, A. S., Kerfoot, J., Taniguchi, T., Watanabe, K., Besley, N. A., Besley, E., & Beton, P.
   - **Journal:** Chemical Communications, 54(85), 12021–12024
   - **Link:** https://doi.org/10.1039/C8CC06304D
   - **Validation Status:** [ ] Not Checked

21. **[2018-021]**
   - **Title:** The wow and the woo. Moriarty, P. (2018c). Physics World, 31(6), 38–39. https://doi.org/10.1088/2058-7058/31/6/33
   - **Authors:** Ultra-fast intramolecular vibronic coupling revealed by RIXS and RPES maps of an aromatic adsorbate on TiO2(110). O’Shea, J. N., Handrup, K., Temperton, R. H., Gibson, A. J., Nicolaou, A., Jaouen, N., Taylor, J. B., Mayor, L. C., Swarbrick, J. C., &
   - **Journal:** Journal of Chemical Physics, 148(20), 204705–204705
   - **Link:** https://doi.org/10.1063/1.5024862/197024
   - **Validation Status:** [ ] Not Checked

22. **[2018-022]**
   - **Title:** Van der Waals epitaxy of two-dimensional
   - **Authors:** single-layer h-BN on graphite by molecular beam epitaxy: Electronic properties and band structure. Pierucci, D., Zribi, J., Henck, H., Chaste, J., Silly, M. G., Bertran, F., Le Fevre, P., Gil, B., Summerfield, A., Beton, P. H., Novikov, S. V., Cassabois, G., Rault, J.
   - **Journal:** Applied Physics Letters, 112(25), 253102–253102
   - **Link:** https://doi.org/10.1063/1.5029220/35726
   - **Validation Status:** [ ] Not Checked


### 2017 (20 publications)

1. **[2017-001]**
   - **Title:** Adsorption and charge transfer interactions of bi-isonicotinic acid on Ag(111). Temperton, R. H., Gibson, A. J., Handrup, K., & O’Shea, J. N. (2017). Journal of Chemical Physics, 147(5), 54703–54703. https://doi.org/10.1063/1.4996746/904591
   - **Authors:** An atomic carbon source for high temperature molecular beam epitaxy of graphene. Albar, J. D., Summerfield, A., Cheng, T. S., Davies, A., Smith, E. F., Khlobystov, A. N., Mellor, C. J., Taniguchi, T., Watanabe, K., Foxon, C.
   - **Journal:** Scientific Reports 2017 7:1, 7(1), 1–8
   - **Link:** https://doi.org/10.1038/s41598-017-07021-1
   - **Validation Status:** [ ] Not Checked

2. **[2017-002]**
   - **Title:** Antiferromagnetic CuMnAs multi-level memory cell with microelectronic compatibility.
   - **Authors:** Olejník, K., Schuler, V., Marti, X., Novák, V., Kašpar, Z., Wadley, P., Campion, R. P., Edmonds, K. W., Gallagher, B. L., Garces, J.,
   - **Journal:** Nature Communications 2017 8:1, 8(1), 1–7
   - **Link:** https://doi.org/10.1038/ncomms15434
   - **Validation Status:** [ ] Not Checked

3. **[2017-003]**
   - **Title:** Automated extraction of single H atoms with STM: tip state dependency.
   - **Authors:** Gordon, O. M., Junqueira, F. L. Q., Moriarty, P. J., Shirley, Y. L., Ellsworth-Bowers, T. P., Svoboda, B., Møller, M., Jarvis, S. P., Guérinet, L., Sharp, P., Woolley, R., Rahe, P., & Moriarty, P.
   - **Journal:** Nanotechnology, 28(7), 075302–075302
   - **Link:** https://doi.org/10.1088/1361-6528/28/7/075302
   - **Validation Status:** [ ] Not Checked

4. **[2017-004]**
   - **Title:** Boundary effects in a quasi-two-dimensional driven granular fluid. Smith, N. D., & Smith, M. I. (2017). Physical Review E, 96(6). https://doi.org/10.1103/PHYSREVE.96.062910
   - **Authors:** Control of antiferromagnetic spin axis orientation in bilayer Fe/CuMnAs films. Wadley, P., Edmonds, K. W., Shahedkhah, M. R., Campion, R. P., Gallagher, B. L., Železný, J., Kuneš, J., Novák, V., Jungwirth, T.,
   - **Journal:** Scientific Reports 2017 7:1, 7(1), 1–6
   - **Link:** https://doi.org/10.1038/s41598-017-11653-8
   - **Validation Status:** [ ] Not Checked

5. **[2017-005]**
   - **Title:** Deep ultraviolet emission in hexagonal boron nitride grown by high-temperature molecular beam epitaxy.
   - **Authors:** Vuong, T. Q. P., Cassabois, G., Valvin, P., Rousseau, E., Summerfield, A., Mellor, C. J., Cho, Y., Cheng, T. S., Albar, J. D., Eaves, L.,
   - **Journal:** 2D Materials, 4(2), 021023–021023
   - **Link:** https://doi.org/10.1088/2053-1583/AA604A
   - **Validation Status:** [ ] Not Checked

6. **[2017-006]**
   - **Title:** Deterministic control of magnetic vortex wall chirality by electric field.
   - **Authors:** Beardsley, R. P., Bowe, S., Parkes, D. E., Reardon, C., Edmonds, K. W.,
   - **Journal:** Scientific Reports 2017 7:1, 7(1), 1–6
   - **Link:** https://doi.org/10.1038/s41598-017-07944-9
   - **Validation Status:** [ ] Not Checked

7. **[2017-007]**
   - **Title:** Effect of lithographically-induced
   - **Authors:** strain relaxation on the magnetic domain configuration in microfabricated epitaxially grown Fe81Ga19. Beardsley, R. P., Parkes, D. E., Zemen, J., Bowe, S., Edmonds, K. W., Reardon, C., Maccherozzi, F., Isakov, I., Warburton, P. A., Campion, R. P.,
   - **Journal:** Scientific Reports 2017 7:1, 7(1), 1–6
   - **Link:** https://doi.org/10.1038/srep42107
   - **Validation Status:** [ ] Not Checked

8. **[2017-008]**
   - **Title:** Electric field control of deterministic
   - **Authors:** current-induced magnetization switching in a hybrid ferromagnetic/ferroelectric structure. Cai, K., Yang, M., Ju, H., Wang, S., Ji, Y., Li, B., Edmonds, K. W., Sheng, Y., Zhang, B., Zhang,
   - **Journal:** Nature Materials 2017 16:7, 16(7), 712–716
   - **Link:** https://doi.org/10.1038/nmat4886
   - **Validation Status:** [ ] Not Checked

9. **[2017-009]**
   - **Title:** Engineering p–n junctions and bandgap tuning of InSe nanolayers by controlled oxidation.
   - **Authors:** Balakrishnan, N., Kudrynskyi, Z. R., Smith, E. F., Fay, M. W., Makarovsky, O., Kovalyuk, Z. D., Eaves, L., Beton, P. H., & Patanè,
   - **Journal:** 2D Materials, 4(2), 025043–025043
   - **Link:** https://doi.org/10.1088/2053-1583/AA61E0
   - **Validation Status:** [ ] Not Checked

10. **[2017-010]**
   - **Title:** Exploring ultra-fast charge transfer and
   - **Authors:** vibronic coupling with N 1s RIXS maps of an aromatic molecule coupled
   - **Journal:** Journal of Chemical Physics, 147(13), 134705–134705
   - **Link:** https://doi.org/10.1063/1.4999135/195635
   - **Validation Status:** [ ] Not Checked

11. **[2017-011]**
   - **Title:** Faradaic processes beyond Nernst’s law:
   - **Authors:** Density functional theory assisted modelling of partial electron
   - **Journal:** Chemical Communications, 53(75), 10414–10417
   - **Link:** https://doi.org/10.1039/C7CC04344A
   - **Validation Status:** [ ] Not Checked

12. **[2017-012]**
   - **Title:** Giant Quantum Hall Plateau in Graphene Coupled to an InSe van der Waals Crystal.
   - **Authors:** Kudrynskyi, Z. R., Bhuiyan, M. A., Makarovsky, O., Greener, J. D. G., Vdovin, E. E., Kovalyuk, Z. D., Cao, Y., Mishchenko, A., Novoselov, K.
   - **Journal:** Physical Review Letters, 119(15)
   - **Link:** https://doi.org/10.1103/PHYSREVLETT.119.157701
   - **Validation Status:** [ ] Not Checked

13. **[2017-013]**
   - **Title:** Imaging Current-Induced Switching of Antiferromagnetic Domains in CuMnAs.
   - **Authors:** Grzybowski, M. J., Wadley, P., Edmonds, K. W., Beardsley, R., Hills, V., Campion, R. P., Gallagher, B. L., Chauhan, J. S., Novak, V.,
   - **Journal:** Physical Review Letters, 118(5), 057701–057701
   - **Link:** https://doi.org/10.1103/PHYSREVLETT.118.057701
   - **Validation Status:** [ ] Not Checked

14. **[2017-014]**
   - **Title:** Investigation of exchange coupled bilayer Fe/CuMnAs by pump–probe experiment.
   - **Authors:** Saidl, V., Němec, P., Wadley, P., Edmonds, K. W., Campion, R. P.,
   - **Journal:** Physica Status Solidi (RRL) – Rapid Research Letters, 11(4), 1600441–1600441
   - **Link:** https://doi.org/10.1002/PSSR.201600441
   - **Validation Status:** [ ] Not Checked

15. **[2017-015]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Mechano-chemical manipulation of Sn chains on Si(1 0 0) by NC-AFM. Sweetman, A., Lekkas, I., & Moriarty, P. (2016). Journal of Physics: Condensed Matter, 29(7), 074003–074003. https://doi.org/10.1088/1361-648X/29/7/074003
   - **Authors:** NO AUTHORS
   - **Journal:** Chemical Physics Letters, 682, 15–19
   - **Link:** https://doi.org/10.1016/J.CPLETT.2017.05.068
   - **Validation Status:** [ ] Not Checked

16. **[2017-016]**
   - **Title:** Optical determination of the Néel vector in a CuMnAs thin-film antiferromagnet.
   - **Authors:** Saidl, V., Němec, P., Wadley, P., Hills, V., Campion, R. P., Novák, V., Edmonds, K. W., Maccherozzi, F., Dhesi, S. S., Gallagher, B. L., Trojánek, F., Kuneš, J., Železný, J., Malý, P., & Jungwirth, T.
   - **Journal:** Nature Photonics 2016 11:2, 11(2), 91–96
   - **Link:** https://doi.org/10.1038/nphoton.2016.255
   - **Validation Status:** [ ] Not Checked

17. **[2017-017]**
   - **Title:** Probing properties of molecule-based interface systems: General discussion and Discussion of the Concluding Remarks.
   - **Authors:** Amabilino, D., Bâldea, I., Batteas, J., Beton, P., Bilbao, N., Costantini, G., Davidson, J., De Feyter, S., Diaz Fernandez, Y., Ernst, K. H., Hirsch, B., Jabbarzadeh, A., Jones, R., Kühnle, A., Lackinger, M., Li, Z., Lin, N., Linderoth, T. R., Martsinovich, N., … Tait, S. L.
   - **Journal:** Faraday Discussions, 204(0), 503–530
   - **Link:** https://doi.org/10.1039/C7FD90077E
   - **Validation Status:** [ ] Not Checked

18. **[2017-018]**
   - **Title:** Resonant core spectroscopies of the
   - **Authors:** charge transfer interactions between C60 and the surfaces of Au(111),
   - **Journal:** Surface Science, 657, 69–78
   - **Link:** https://doi.org/10.1016/J.SUSC.2016.11.009
   - **Validation Status:** [ ] Not Checked

19. **[2017-019]**
   - **Title:** Nature Communications 2017 8:1, 8(1), 1–8. https://doi.org/10.1038/s41467-017-01797-6
   - **Authors:** The effect of dynamical compressive and shear strain on magnetic anisotropy in a low symmetry ferromagnetic film. Linnik, T. L., Kats, V. N., Jager, J., Salasyuk, A. S., Yakovlev, D. R., Rushforth, A. W., Akimov, A. V., Kalashnikova, A. M., Bayer, M.,
   - **Journal:** Physica Scripta, 92(5), 054006–054006
   - **Link:** https://doi.org/10.1088/1402-4896/AA6943
   - **Validation Status:** [ ] Not Checked

20. **[2017-020]**
   - **Title:** Ullmann Coupling Reactions on Ag(111)
   - **Authors:** and Ag(110); Substrate Influence on the Formation of Covalently Coupled
   - **Journal:** Scientific Reports 2017 7:1, 7(1), 1–7
   - **Link:** https://doi.org/10.1038/s41598-017-13315-1
   - **Validation Status:** [ ] Not Checked


### 2016 (16 publications)

1. **[2016-001]**
   - **Title:** A Combined Monte Carlo and Hückel Theory Simulation of Orientational Ordering in C60 Assemblies. Leaf, J., Stannard, A., Jarvis, S. P., Moriarty, P., & Dunn, J. L. (2016). Journal of Physical Chemistry C, 120(15), 8139–8147. https://doi.org/10.1021/ACS.JPCC.6B00638
   - **Authors:** Antiferromagnetic multi-level memory cell. Schuler, V., Olejnik, K., Marti, X., Novak, V., Wadley, P., Campion, R. P., Edmonds, K. W., Gallagher, B. L., Garces, J., Baumgartner, M.,
   - **Journal:** NO JOURNAL
   - **Link:** https://arxiv.org/abs/1608.03238v1
   - **Validation Status:** [ ] Not Checked

2. **[2016-002]**
   - **Title:** Antiferromagnetic spintronics. Jungwirth, T., Marti, X., Wadley, P., & Wunderlich, J. (2016). Nature Nanotechnology 2016 11:3, 11(3), 231–241. https://doi.org/10.1038/nnano.2016.18
   - **Authors:** Contributions from coherent and incoherent lattice excitations to ultrafast optical control of magnetic anisotropy of metallic films. Kats, V. N., Linnik, T. L., Salasyuk, A. S., Rushforth, A. W., Wang, M., Wadely, P., Akimov, A. V., Cavill, S.
   - **Journal:** Https://Doi.Org/10.1117/12.2238020, 9835, 200–204
   - **Link:** https://doi.org/10.1117/12.2238020
   - **Validation Status:** [ ] Not Checked

3. **[2016-003]**
   - **Title:** DMD-based software-configurable spatially-offset Raman spectroscopy for spectral depth-profiling of optically turbid samples. Gibson, G., Liao, Z., Padgett, M., Sinjab, F., & Notingher, I. (2016). Optics Express, Vol. 24, Issue 12, Pp. 12701-12712, 24(12), 12701–12712. https://doi.org/10.1364/OE.24.012701
   - **Authors:** Enhancement of CO2 Adsorption and Catalytic Properties by Fe-Doping of [Ga2(OH)2(L)] (H4L = Biphenyl-3,3′,5,5′-tetracarboxylic Acid), MFM-300(Ga2). Krap, C. P., Newby, R., Dhakshinamoorthy, A., García, H., Cebula, I., Easun, T. L., Savage, M., Eyley, J. E., Gao, S., Blake, A. J., Lewis, W., Beton, P. H., Warren, M. R., Allan, D. R., Frogley, M. D., Tang, C. C., Cinque,
   - **Journal:** Inorganic Chemistry, 55(3), 1076–1088
   - **Link:** https://doi.org/10.1021/ACS.INORGCHEM.5B02108
   - **Validation Status:** [ ] Not Checked

4. **[2016-004]**
   - **Title:** Hexagonal Boron Nitride Tunnel Barriers Grown on Graphite by High Temperature Molecular Beam Epitaxy.
   - **Authors:** Cho, Y. J., Summerfield, A., Davies, A., Cheng, T. S., Smith, E. F., Mellor, C. J., Khlobystov, A. N., Foxon, C. T., Eaves, L., Beton, P. H.,
   - **Journal:** Scientific Reports 2016 6:1, 6(1), 1–7
   - **Link:** https://doi.org/10.1038/srep34474
   - **Validation Status:** [ ] Not Checked

5. **[2016-005]**
   - **Title:** of Vacuum Science & Technology B, Nanotechnology and
   - **Authors:** Microelectronics: Materials, Processing, Measurement, and Phenomena, 34(2), 51–51. https://doi.org/10.1116/1.4938157/592974 Light-Induced Translation of Motorized Molecules on a Surface. Saywell, A., Bakker, A., Mielke, J., Kumagai, T., Wolf, M.,
   - **Journal:** ACS Nano, 10(12), 10945–10952
   - **Link:** https://doi.org/10.1021/ACSNANO.6B05650
   - **Validation Status:** [ ] Not Checked

6. **[2016-006]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Naphthalocyanine Thin Films and Field Effect Transistors. Esmail, A. M. S., Staddon, C. R., & Beton, P. H. (2016). Journal of Physical Chemistry C, 120(28), 15338–15341. https://doi.org/10.1021/ACS.JPCC.6B06134
   - **Authors:** NO AUTHORS
   - **Journal:** Soft Matter, 12(42), 8790–8797
   - **Link:** https://doi.org/10.1039/C6SM01901C
   - **Validation Status:** [ ] Not Checked

7. **[2016-007]**
   - **Title:** Organisation and ordering of 1D porphyrin polymers synthesised by on-surface Glaser coupling. Saywell, A., Browning, A. S., Rahe, P., Anderson, H. L., & Beton, P. H. (2016). Chemical Communications, 52(68), 10342–10345. https://doi.org/10.1039/C6CC03758E
   - **Authors:** Piezo Voltage Controlled Planar Hall Effect Devices. Zhang, B., Meng, K. K., Yang, M. Y., Edmonds, K. W., Zhang, H., Cai, K. M., Sheng, Y., Zhang, N., Ji, Y., Zhao, J. H., Zheng, H. Z., &
   - **Journal:** Scientific Reports 2016 6:1, 6(1), 1–6
   - **Link:** https://doi.org/10.1038/srep28458
   - **Validation Status:** [ ] Not Checked

8. **[2016-008]**
   - **Title:** Precise tuning of the Curie temperature
   - **Authors:** of (Ga,Mn)As-based magnetic semiconductors by hole compensation: Support for valence-band ferromagnetism. Zhou, S., Li, L., Yuan, Y., Rushforth, A. W., Chen, L., Wang, Y., Böttger, R., Heller, R., Zhao, J., Edmonds, K. W., Campion, R. P., Gallagher, B. L., Timm, C., & Helm,
   - **Journal:** Physical Review B, 94(7), 075205–075205
   - **Link:** https://doi.org/10.1103/PHYSREVB.94.075205
   - **Validation Status:** [ ] Not Checked

9. **[2016-009]**
   - **Title:** Quantum confinement and photoresponsivity of β-In2Se3 nanosheets grown by physical vapour transport.
   - **Authors:** Balakrishnan, N., Staddon, C. R., Smith, E. F., Stec, J., Gay, D., Mudd, G. W., Makarovsky, O., Kudrynskyi, Z. R., Kovalyuk, Z. D., Eaves,
   - **Journal:** 2D Materials, 3(2), 025030–025030
   - **Link:** https://doi.org/10.1088/2053-1583/3/2/025030
   - **Validation Status:** [ ] Not Checked

10. **[2016-010]**
   - **Title:** Rheological Properties of Viscoelastic Drops on Superamphiphobic Substrates. Harrold, V. C., Paven, M., Vollmer, D., & Sharp, J. S. (2016). Langmuir, 32(16), 4071–4076. https://doi.org/10.1021/ACS.LANGMUIR.6B00779
   - **Authors:** Spin-orbit torque in Pt/CoNiCo/Pt symmetric devices. Yang, M., Cai, K., Ju, H., Edmonds, K. W., Yang, G., Liu, S., Li, B.,
   - **Journal:** Scientific Reports 2016 6:1, 6(1), 1–7
   - **Link:** https://doi.org/10.1038/srep20778
   - **Validation Status:** [ ] Not Checked

11. **[2016-011]**
   - **Title:** Spintronics: Electrical switching of an antiferromagnet.
   - **Authors:** Wadley, P., Howells, B., Železný, J., Andrews, C., Hills, V., Campion, R. P., Novák, V., Olejník, K., Maccherozzi, F., Dhesi, S. S., Martin, S. Y., Wagner, T., Wunderlich, J., Freimuth, F., Mokrousov, Y., Kuneš, J., Chauhan, J. S., Grzybowski, M. J., Rushforth, A. W., … Jungwirth, T.
   - **Journal:** Science, 351(6273), 587–590
   - **Link:** https://doi.org/10.1126/SCIENCE.AAB1031
   - **Validation Status:** [ ] Not Checked

12. **[2016-012]**
   - **Title:** Strain-Engineered Graphene Grown on Hexagonal Boron Nitride by Molecular Beam Epitaxy.
   - **Authors:** Summerfield, A., Davies, A., Cheng, T. S., Korolkov, V. V., Cho, Y., Mellor, C. J., Foxon, C. T., Khlobystov, A. N., Watanabe, K., Taniguchi,
   - **Journal:** Scientific Reports 2016 6:1, 6(1), 1–10
   - **Link:** https://doi.org/10.1038/srep22440
   - **Validation Status:** [ ] Not Checked

13. **[2016-013]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** The interplay of crack hopping, delamination and interface failure in drying nanoparticle films. Yang, B., Sharp, J. S., & Smith, M. I. (2016). Scientific Reports 2016 6:1, 6(1), 1–9. https://doi.org/10.1038/srep32296
   - **Authors:** NO AUTHORS
   - **Journal:** Physical Review B, 93(18), 184417–184417
   - **Link:** https://doi.org/10.1103/PHYSREVB.93.184417
   - **Validation Status:** [ ] Not Checked

14. **[2016-014]**
   - **Title:** of Vacuum Science & Technology B, Nanotechnology and
   - **Authors:** Microelectronics: Materials, Processing, Measurement, and Phenomena, 34(1), 11801–11801. https://doi.org/10.1116/1.4936886/466588 Ultrafast changes of magnetic anisotropy driven by laser-generated coherent and noncoherent phonons in metallic films. Kats, V. N., Linnik, T. L., Salasyuk, A. S., Rushforth, A. W., Wang, M., Wadley, P., Akimov, A. V., Cavill, S. A., Holy, V., Kalashnikova, A.
   - **Journal:** Physical Review B, 93(21), 214422–214422
   - **Link:** https://doi.org/10.1103/PHYSREVB.93.214422
   - **Validation Status:** [ ] Not Checked

15. **[2016-015]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Visualizing the orientational dependence of an intermolecular potential. Sweetman, A., Rashid, M. A., Jarvis, S. P., Dunn, J. L., Rahe, P., & Moriarty, P. (2016). Nature Communications 2016 7:1, 7(1), 1–7. https://doi.org/10.1038/ncomms10621
   - **Authors:** NO AUTHORS
   - **Journal:** Scientific Reports 2016 6:1, 6(1), 1–7
   - **Link:** https://doi.org/10.1038/srep21290
   - **Validation Status:** [ ] Not Checked

16. **[2016-016]**
   - **Title:** Towards quantitative molecular mapping
   - **Authors:** of cells by Raman microscopy: Using AFM for decoupling molecular
   - **Journal:** Faraday Discussions, 187(0), 199–212
   - **Link:** https://doi.org/10.1039/C5FD00172B
   - **Validation Status:** [ ] Not Checked


### 2015 (18 publications)

1. **[2015-001]**
   - **Title:** 3D ToF-SIMS imaging of polymer multilayer films using argon cluster sputter depth profiling. Bailey, J., Havelund, R., Shard, A. G., Gilmore, I. S., Alexander, M. R., Sharp, J. S., & Scurr, D. J. (2015). ACS Applied Materials and Interfaces, 7(4), 2654–2659. https://doi.org/10.1021/AM507663V
   - **Authors:** Adsorbate-induced curvature and stiffening of graphene. Svatek, S. A., Scott, O. R., Rivett, J. P. H., Wright, K., Baldoni, M., Bichoutskaia, E., Taniguchi, T., Watanabe, K., Marsden, A. J., Wilson,
   - **Journal:** Nano Letters, 15(1), 159–164
   - **Link:** https://doi.org/10.1021/NL503308C
   - **Validation Status:** [ ] Not Checked

2. **[2015-002]**
   - **Title:** Antiferromagnetic structure in tetragonal CuMnAs thin films.
   - **Authors:** Wadley, P., Hills, V., Shahedkhah, M. R., Edmonds, K. W., Campion, R. P., Novák, V., Ouladdiaf, B., Khalyavin, D., Langridge, S., Saidl, V., Nemec, P., Rushforth, A. W., Gallagher, B. L., Dhesi, S. S.,
   - **Journal:** Scientific Reports 2015 5:1, 5(1), 1–6
   - **Link:** https://doi.org/10.1038/srep17079
   - **Validation Status:** [ ] Not Checked

3. **[2015-003]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Electronic structure of (Ga,Mn)As as seen by synchrotron radiation. Edmonds, K., Van Der Laan, G., & Panaccione, G. (2015). Semiconductor Science and Technology, 30(4), 043001–043001. https://doi.org/10.1088/0268-1242/30/4/043001
   - **Authors:** NO AUTHORS
   - **Journal:** Journal of Colloid and Interface Science, 453, 252–259
   - **Link:** https://doi.org/10.1016/J.JCIS.2015.05.007
   - **Validation Status:** [ ] Not Checked

4. **[2015-004]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Emergent rhombus tilings from molecular interactions with m-fold rotational symmetry. Whitelam, S., Tamblyn, I., Garrahan, J. P., & Beton, P. H. (2015). Physical Review Letters, 114(11). https://doi.org/10.1103/PHYSREVLETT.114.115702
   - **Authors:** NO AUTHORS
   - **Journal:** Scientific Reports 2015 5:1, 5(1), 1–7
   - **Link:** https://doi.org/10.1038/srep14175
   - **Validation Status:** [ ] Not Checked

5. **[2015-005]**
   - **Title:** Graphene-InSe-graphene van der Waals heterostructures.
   - **Authors:** Svatek, S. A., Mudd, G. W., Kudrynskyi, Z. R., Makarovsky, O., Kovalyuk, Z. D., Mellor, C. J., Eaves, L., Beton, P. H., & Patanè,
   - **Journal:** Journal of Physics: Conference Series, 647(1), 012001–012001
   - **Link:** https://doi.org/10.1088/1742-6596/647/1/012001
   - **Validation Status:** [ ] Not Checked

6. **[2015-006]**
   - **Title:** High Broad-Band Photoresponsivity of Mechanically Formed InSe–Graphene van der Waals Heterostructures.
   - **Authors:** Mudd, G. W., Svatek, S. A., Hague, L., Makarovsky, O., Kudrynskyi, Z. R., Mellor, C. J., Beton, P. H., Eaves, L., Novoselov, K. S., Kovalyuk, Z. D., Vdovin, E. E., Marsden, A. J., Wilson, N. R., Patanè, A., Mudd, G. W., Svatek, S. A., Makarovsky, O., Kudrynskyi, Z. R., Mellor, C. J., …
   - **Journal:** Advanced Materials, 27(25), 3760–3766
   - **Link:** https://doi.org/10.1002/ADMA.201500889
   - **Validation Status:** [ ] Not Checked

7. **[2015-007]**
   - **Title:** Identification of the interstitial Mn site in ferromagnetic (Ga,Mn)As.
   - **Authors:** Lima, T. A. L., Wahl, U., Augustyns, V., Silva, D. J., Costa, A., Houben, K., Edmonds, K. W., Gallagher, B. L., Campion, R. P., Van Bael, M. J., Da Silva, M. R., Correia, J. G., Araújo, J. P., Temst, K.,
   - **Journal:** Applied Physics Letters, 106(1), 12406–12406
   - **Link:** https://doi.org/10.1063/1.4905556/28015
   - **Validation Status:** [ ] Not Checked

8. **[2015-008]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Insights into Kelvin probe force microscopy data of insulator-supported molecules. Neff, J. L., & Rahe, P. (2015). Physical Review B – Condensed Matter and Materials Physics, 91(8). https://doi.org/10.1103/PHYSREVB.91.085424
   - **Authors:** NO AUTHORS
   - **Journal:** AIP Advances, 5(12), 127108–127108
   - **Link:** https://doi.org/10.1063/1.4937556/661096
   - **Validation Status:** [ ] Not Checked

9. **[2015-009]**
   - **Title:** Intermolecular artifacts in probe microscope images of C60 assemblies. Jarvis, S. P., Rashid, M. A., Sweetman, A., Leaf, J., Taylor, S., Moriarty, P., & Dunn, J. (2015). Physical Review B – Condensed Matter and Materials Physics, 92(24). https://doi.org/10.1103/PHYSREVB.92.241405
   - **Authors:** Ligand-Induced Control of Photoconductive Gain and Doping in a Hybrid Graphene–Quantum Dot Transistor. Turyanska, L., Makarovsky, O., Svatek, S. A., Beton, P. H., Mellor, C. J., Patanè, A., Eaves, L., Thomas, N. R., Fay, M. W., Marsden, A. J.,
   - **Journal:** Advanced Electronic Materials, 1(7)
   - **Link:** https://doi.org/10.1002/AELM.201500062
   - **Validation Status:** [ ] Not Checked

10. **[2015-010]**
   - **Title:** Magnetic coupling in ferromagnetic semiconductor (Ga,Mn)As/(Al,Ga,Mn)As bilayers.
   - **Authors:** Wang, M., Wadley, P., Campion, R. P., Rushforth, A. W., Edmonds, K. W., Gallagher, B. L., Charlton, T. R., Kinane, C. J., & Langridge, S.
   - **Journal:** Journal of Applied Physics, 118(5), 53913–53913
   - **Link:** https://doi.org/10.1063/1.4928206/140836
   - **Validation Status:** [ ] Not Checked

11. **[2015-011]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Measuring the mechanical properties of molecular conformers. Jarvis, S. P., Taylor, S., Baran, J. D., Champness, N. R., Larsson, J. A., & Moriarty, P. (2015). Nature Communications 2015 6:1, 6(1), 1–7. https://doi.org/10.1038/ncomms9338
   - **Authors:** NO AUTHORS
   - **Journal:** Scientific Reports 2015 5:1, 5(1), 1–5
   - **Link:** https://doi.org/10.1038/srep07921
   - **Validation Status:** [ ] Not Checked

12. **[2015-012]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Nano-contact microscopy of supracrystals. Sweetman, A., Goubet, N., Lekkas, I., Pileni, M. P., & Moriarty, P. (2015). Beilstein Journal of Nanotechnology 6:126, 6(1), 1229–1236. https://doi.org/10.3762/BJNANO.6.126
   - **Authors:** NO AUTHORS
   - **Journal:** Journal of Physical Chemistry C, 119(41), 23544–23551
   - **Link:** https://doi.org/10.1021/ACS.JPCC.5B07133
   - **Validation Status:** [ ] Not Checked

13. **[2015-013]**
   - **Title:** Paramagnetic to antiferromagnetic transition in epitaxial tetragonal CuMnAs (invited).
   - **Authors:** Hills, V., Wadley, P., Campion, R. P., Novak, V., Beardsley, R., Edmonds, K. W., Gallagher, B. L., Ouladdiaf, B., & Jungwirth, T.
   - **Journal:** Journal of Applied Physics, 117(17), 172608–172608
   - **Link:** https://doi.org/10.1063/1.4914119/374320
   - **Validation Status:** [ ] Not Checked

14. **[2015-014]**
   - **Title:** Physisorption Controls the Conformation and Density of States of an Adsorbed Porphyrin.
   - **Authors:** Jarvis, S. P., Taylor, S., Baran, J. D., Thompson, D., Saywell, A., Mangham, B., Champness, N. R., Larsson, J. A., & Moriarty, P.
   - **Journal:** Journal of Physical Chemistry C, 119(50), 27982–27994
   - **Link:** https://doi.org/10.1021/ACS.JPCC.5B08350
   - **Validation Status:** [ ] Not Checked

15. **[2015-015]**
   - **Title:** Resonant driving of magnetization precession in a ferromagnetic layer by coherent monochromatic phonons.
   - **Authors:** Jäger, J. V., Scherbakov, A. V., Glavin, B. A., Salasyuk, A. S., Campion, R. P., Rushforth, A. W., Yakovlev, D. R., Akimov, A. V., &
   - **Journal:** Physical Review B – Condensed Matter and Materials Physics, 92(2), 020404–020404
   - **Link:** https://doi.org/10.1103/PHYSREVB.92.020404
   - **Validation Status:** [ ] Not Checked

16. **[2015-016]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Strain Induced Vortex Core Switching in Planar Magnetostrictive Nanostructures. Ostler, T. A., Cuadrado, R., Chantrell, R. W., Rushforth, A. W., & Cavill, S. A. (2015). Physical Review Letters, 115(6), 067202–067202. https://doi.org/10.1103/PHYSREVLETT.115.067202
   - **Authors:** NO AUTHORS
   - **Journal:** Nature Chemistry 2015 7:4, 7(4), 317–322
   - **Link:** https://doi.org/10.1038/nchem.2182
   - **Validation Status:** [ ] Not Checked

17. **[2015-017]**
   - **Title:** Van der Waals-Induced Chromatic Shifts in Hydrogen-Bonded Two-Dimensional Porphyrin Arrays on Boron Nitride.
   - **Authors:** Korolkov, V. V., Svatek, S. A., Summerfield, A., Kerfoot, J., Yang, L., Taniguchi, T., Watanabe, K., Champness, N. R., Besley, N. A., &
   - **Journal:** ACS Nano, 9(10), 10347–10355
   - **Link:** https://doi.org/10.1021/ACSNANO.5B04443
   - **Validation Status:** [ ] Not Checked

18. **[2015-018]**
   - **Title:** Adsorbate-induced curvature and stiffening of graphene.
   - **Authors:** Svatek, S. A., Scott, O. R., Rivett, J. P. H., Wright, K., Baldoni, M., Bichoutskaia, E., Taniguchi, T., Watanabe, K., Marsden, A. J., Wilson,
   - **Journal:** Nano Letters, 15(1), 159–164
   - **Link:** https://doi.org/10.1021/NL503308C
   - **Validation Status:** [ ] Not Checked


### 2014 (21 publications)

1. **[2014-001]**
   - **Title:** Bimolecular porous supramolecular
   - **Authors:** networks deposited from solution on layered materials: Graphite, boron nitride and molybdenum disulphide. Korolkov, V. V., Svatek, S. A., Allen, S., Roberts, C. J., Tendler, S. J. B., Taniguchi, T., Watanabe,
   - **Journal:** Chemical Communications, 50(64), 8882–8885
   - **Link:** https://doi.org/10.1039/C4CC03720K
   - **Validation Status:** [ ] Not Checked

2. **[2014-002]**
   - **Title:** Charge transfer from an adsorbed
   - **Authors:** ruthenium-based photosensitizer through an ultra-thin aluminium oxide
   - **Journal:** Journal of Chemical Physics, 140(23), 234708–234708
   - **Link:** https://doi.org/10.1063/1.4882867/73465
   - **Validation Status:** [ ] Not Checked

3. **[2014-003]**
   - **Title:** Co-localised Raman and force
   - **Authors:** spectroscopy reveal the roles of hydrogen bonds and n-n interactions in defining the mechanical properties of diphenylalanine nano- And micro-
   - **Journal:** Applied Physics Letters, 104(25), 17–17
   - **Link:** https://doi.org/10.1063/1.4885090/891802
   - **Validation Status:** [ ] Not Checked

4. **[2014-004]**
   - **Title:** Common physical framework explains phase behavior and dynamics of atomic, molecular, and polymeric network formers. Whitelam, S., Tamblyn, I., Haxton, T. K., Wieland, M. B., Champness, N. R., Garrahan, J. P., & Beton, P. H. (2014). Physical Review X, 4(1). https://doi.org/10.1103/PHYSREVX.4.011044
   - **Authors:** Comparison of micromagnetic parameters of the ferromagnetic semiconductors (Ga,Mn)(As,P) and (Ga,Mn)As. Tesařová, N., Butkovičová, D., Campion, R. P., Rushforth, A. W., Edmonds, K. W., Wadley, P., Gallagher, B. L., Schmoranzerová, E., Trojánek, F., Malý, P., Motloch, P., Novák, V., Jungwirth, T., &
   - **Journal:** Physical Review B – Condensed Matter and Materials Physics, 90(15), 155203–155203
   - **Link:** https://doi.org/10.1103/PHYSREVB.90.155203
   - **Validation Status:** [ ] Not Checked

5. **[2014-005]**
   - **Title:** Control theory for scanning probe microscopy revisited. Stirling, J. (2014). Beilstein Journal of Nanotechnology 5:38, 5(1), 337–345. https://doi.org/10.3762/BJNANO.5.38
   - **Authors:** Critical Assessment of the Evidence for Striped Nanoparticles. Stirling, J., Lekkas, I., Sweetman, A., Djuranovic, P., Guo, Q., Pauw,
   - **Journal:** PLOS ONE, 9(11), e108482–e108482
   - **Link:** https://doi.org/10.1371/JOURNAL.PONE.0108482
   - **Validation Status:** [ ] Not Checked

6. **[2014-006]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Determining Curie temperatures in dilute ferromagnetic semiconductors: High Curie temperature (Ga,Mn)As. Wang, M., Marshall, R. A., Edmonds, K. W., Rushforth, A. W., Campion, R. P., & Gallagher, B. L. (2014). Applied Physics Letters, 104(13), 132406–132406. https://doi.org/10.1063/1.4870521/23925
   - **Authors:** NO AUTHORS
   - **Journal:** Applied Physics Letters, 104(16), 162408–162408
   - **Link:** https://doi.org/10.1063/1.4873583/131293
   - **Validation Status:** [ ] Not Checked

7. **[2014-007]**
   - **Title:** Fullerenes as adhesive layers for mechanical peeling of metallic, molecular and polymer thin films. Wieland, M. B., Slater, A. G., Mangham, B., Champness, N. R., & Beton, P. H. (2014). Beilstein Journal of Nanotechnology 5:46, 5(1), 394–401. https://doi.org/10.3762/BJNANO.5.46
   - **Authors:** Height dependent molecular trapping in stacked cyclic porphyrin nanorings. Wieland, M. B., Perdigão, L. M. A., Kondratuk, D. V., Shea, J. N. O., Anderson, H. L., & Beton, P. H. (2014a). Chemical Communications, 50(55), 7332–7335. https://doi.org/10.1039/C4CC02629B
   - **Journal:** Physical Review B – Condensed Matter and Materials Physics, 90(16)
   - **Link:** https://doi.org/10.1103/PHYSREVB.90.165425
   - **Validation Status:** [ ] Not Checked

8. **[2014-008]**
   - **Title:** Mapping the force field of a hydrogen-bonded assembly.
   - **Authors:** Sweetman, A. M., Jarvis, S. P., Sang, H., Lekkas, I., Rahe, P., Wang, Y., Wang, J., Champness, N. R., Kantorovich, L., & Moriarty, P.
   - **Journal:** Nature Communications 2014 5:1, 5(1), 1–7
   - **Link:** https://doi.org/10.1038/ncomms4931
   - **Validation Status:** [ ] Not Checked

9. **[2014-009]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Mechanical vibrations of magnetically levitated viscoelastic droplets. Temperton, R. H., Hill, R. J. A., & Sharp, J. S. (2014). Soft Matter, 10(29), 5375–5379. https://doi.org/10.1039/C4SM00982G
   - **Authors:** NO AUTHORS
   - **Journal:** Langmuir, 30(19), 5455–5459
   - **Link:** https://doi.org/10.1021/LA5005159
   - **Validation Status:** [ ] Not Checked

10. **[2014-010]**
   - **Title:** Packing of isophthalate tetracarboxylic acids on Au(111): Rows and disordered herringbone structures. Cebula, I., Smith, E. F., Gimenez-Lopez, M. D. C., Yang, S., Schröder, M., Champness, N. R., & Beton, P. H. (2013). Journal of Physical Chemistry C, 117(36), 18381–18385. https://doi.org/10.1021/JP402333M
   - **Authors:** Porous macromolecular dihydropyridyl frameworks exhibiting catalytic and halochromic activity. Xiao, B., Easun, T. L., Dhakshinamoorthy, A., Cebula, I., Beton, P. H.,
   - **Journal:** Journal of Materials Chemistry A, 2(46), 19889–19896
   - **Link:** https://doi.org/10.1039/C4TA02521K
   - **Validation Status:** [ ] Not Checked

11. **[2014-011]**
   - **Title:** Room Temperature Electroluminescence from Mechanically Formed van der Waals III–VI Homojunctions and Heterojunctions.
   - **Authors:** Balakrishnan, N., Kudrynskyi, Z. R., Fay, M. W., Mudd, G. W., Svatek, S. A., Makarovsky, O., Kovalyuk, Z. D., Eaves, L., Beton, P. H., Patanè, A., Balakrishnan, N., Mudd, G. W., Svatek, S. A., Makarovsky, O., Eaves, L., Beton, P. H., Patanè, A., Fay, M. W., Kudrynskyi, Z. R., & Kovalyuk, Z. D. (2014b). Advanced Optical Materials, 2(11), 1064–1069. https://doi.org/10.1002/ADOM.201400202 Room-temperature antiferromagnetic memory resistor. Marti, X., Fina, I., Frontera, C., Liu, J., Wadley, P., He, Q., Paull, R. J., Clarkson, J. D., Kudrnovský, J., Turek, I., Kuneš, J., Yi, D., Chu, J. H., Nelson, C. T., You, L., Arenholz, E., Salahuddin, S.,
   - **Journal:** Nature Materials 2014 13:4, 13(4), 367–374
   - **Link:** https://doi.org/10.1038/nmat3861
   - **Validation Status:** [ ] Not Checked

12. **[2014-012]**
   - **Title:** Simulated structure and imaging of NTCDI on Si(1 1 1)-7 × 7: A combined STM, NC-AFM and DFT study. Jarvis, S. P., Sweetman, A. M., Lekkas, I., Champness, N. R., Kantorovich, L., & Moriarty, P. (2014). Journal of Physics: Condensed Matter, 27(5), 054004–054004. https://doi.org/10.1088/0953-8984/27/5/054004
   - **Authors:** Spin-dependent phenomena and device concepts explored in (Ga,Mn)As. Jungwirth, T., Wunderlich, J., Novák, V., Olejník, K., Gallagher, B. L., Campion, R. P., Edmonds, K. W., Rushforth, A. W., Ferguson, A. J.,
   - **Journal:** Reviews of Modern Physics, 86(3), 855–896
   - **Link:** https://doi.org/10.1103/REVMODPHYS.86.855
   - **Validation Status:** [ ] Not Checked

13. **[2014-013]**
   - **Title:** Spin-orbit torque opposing the Oersted torque in ultrathin Co/Pt bilayers.
   - **Authors:** Skinner, T. D., Wang, M., Hindmarch, A. T., Rushforth, A. W., Irvine,
   - **Journal:** Applied Physics Letters, 104(6), 62401–62401
   - **Link:** https://doi.org/10.1063/1.4864399/236938
   - **Validation Status:** [ ] Not Checked

14. **[2014-014]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Surface-based supramolecular chemistry using hydrogen bonds. Slater, A. G., Perdigão, L. M. A., Beton, P. H., & Champness, N. R. (2014). Accounts of Chemical Research, 47(12), 3417–3427. https://doi.org/10.1021/AR5001378
   - **Authors:** NO AUTHORS
   - **Journal:** Applied Physics Letters, 105(1), 12402–12402
   - **Link:** https://doi.org/10.1063/1.4888645/596287
   - **Validation Status:** [ ] Not Checked

15. **[2014-015]**
   - **Title:** The power of YouTube. Moriarty, P. (2014). Physics World, 27(03), 31–31. https://doi.org/10.1088/2058-7058/27/03/36
   - **Authors:** Ultrafast delocalization of excitation in synthetic light-harvesting nanorings. Yong, C. K., Parkinson, P., Kondratuk, D. V., Chen, W. H., Stannard, A., Summerfield, A., Sprafke, J. K., O’Sullivan, M. C., Beton, P. H.,
   - **Journal:** Chemical Science, 6(1), 181–189
   - **Link:** https://doi.org/10.1039/C4SC02424A
   - **Validation Status:** [ ] Not Checked

16. **[2014-016]**
   - **Title:** Uncertainties in forces extracted from
   - **Authors:** non-contact atomic force microscopy measurements by fitting of
   - **Journal:** Beilstein Journal of Nanotechnology 5:45, 5(1), 386–393
   - **Link:** https://doi.org/10.3762/BJNANO.5.45
   - **Validation Status:** [ ] Not Checked

17. **[2014-017]**
   - **Title:** Unique determination of ‘subatomic’ contrast by imaging covalent backbonding. Sweetman, A., Rahe, P., & Moriarty, P. (2014). Nano Letters, 14(5), 2265–2270. https://doi.org/10.1021/NL4041803
   - **Authors:** Vernier-Templated Synthesis, Crystal Structure, and Supramolecular Chemistry of a 12-Porphyrin Nanoring. Kondratuk, D. V., Sprafke, J. K., O’Sullivan, M. C., Perdigao, L. M. A., Saywell, A., Malfois, M., O’Shea, J. N., Beton, P. H., Thompson, A.
   - **Journal:** Chemistry – A European Journal, 20(40), 12826–12834
   - **Link:** https://doi.org/10.1002/CHEM.201403714
   - **Validation Status:** [ ] Not Checked

18. **[2014-018]**
   - **Title:** Visualizing the ‘Invisible’. Moriarty, P. (2015). Leonardo, 48(1), 64–65. https://doi.org/10.1162/LEON_A_00897
   - **Authors:** Voltage controlled modification of flux closure domains in planar magnetic structures for microwave applications. Parkes, D. E., Beardsley, R., Bowe, S., Isakov, I., Warburton, P. A., Edmonds, K. W., Campion, R. P., Gallagher, B. L., Rushforth, A. W.,
   - **Journal:** Applied Physics Letters, 105(6), 62405–62405
   - **Link:** https://doi.org/10.1063/1.4892942/385467
   - **Validation Status:** [ ] Not Checked

19. **[2014-019]**
   - **Title:** Calculation of the effect of tip geometry on noncontact atomic force microscopy using a qPlus sensor. Stirling, J., & Shaw, G. A. (2013). Beilstein Journal of Nanotechnology 4:2, 4(1), 10–19. https://doi.org/10.3762/BJNANO.4.2
   - **Authors:** Comparison of micromagnetic parameters of the ferromagnetic semiconductors (Ga,Mn)(As,P) and (Ga,Mn)As. Tesařová, N., Butkovičová, D., Campion, R. P., Rushforth, A. W., Edmonds, K. W., Wadley, P., Gallagher, B. L., Schmoranzerová, E., Trojánek, F., Malý, P., Motloch, P., Novák, V., Jungwirth, T., &
   - **Journal:** Physical Review B – Condensed Matter and Materials Physics, 90(15), 155203–155203
   - **Link:** https://doi.org/10.1103/PHYSREVB.90.155203
   - **Validation Status:** [ ] Not Checked

20. **[2014-020]**
   - **Title:** Spin-dependent phenomena and device concepts explored in (Ga,Mn)As.
   - **Authors:** Jungwirth, T., Wunderlich, J., Novák, V., Olejník, K., Gallagher, B. L., Campion, R. P., Edmonds, K. W., Rushforth, A. W., Ferguson, A. J.,
   - **Journal:** Reviews of Modern Physics, 86(3), 855–896
   - **Link:** https://doi.org/10.1103/REVMODPHYS.86.855
   - **Validation Status:** [ ] Not Checked

21. **[2014-021]**
   - **Title:** Spin-orbit torque opposing the Oersted torque in ultrathin Co/Pt bilayers.
   - **Authors:** Skinner, T. D., Wang, M., Hindmarch, A. T., Rushforth, A. W., Irvine,
   - **Journal:** Applied Physics Letters, 104(6), 62401–62401
   - **Link:** https://doi.org/10.1063/1.4864399/236938
   - **Validation Status:** [ ] Not Checked


### 2013 (19 publications)

1. **[2013-001]**
   - **Title:** Anisotropic current-controlled magnetization reversal in the ferromagnetic semiconductor (Ga,Mn)As.
   - **Authors:** Li, Y., Cao, Y. F., Wei, G. N., Li, Y., Ji, Y., Wang, K. Y., Edmonds, K. W., Campion, R. P., Rushforth, A. W., Foxon, C. T., & Gallagher,
   - **Journal:** Applied Physics Letters, 103(2), 22401–22401
   - **Link:** https://doi.org/10.1063/1.4813085/129937
   - **Validation Status:** [ ] Not Checked

2. **[2013-002]**
   - **Title:** Crystalline anisotropic magnetoresistance in quaternary ferromagnetic semiconductor (Ga,Mn)(As,Sb).
   - **Authors:** Howells, B., Wang, M., Edmonds, K. W., Wadley, P., Campion, R. P.,
   - **Journal:** Applied Physics Letters, 102(5), 52407–52407
   - **Link:** https://doi.org/10.1063/1.4791580/1068542
   - **Validation Status:** [ ] Not Checked

3. **[2013-003]**
   - **Title:** Determining Curie temperatures in dilute ferromagnetic semiconductors: High Curie temperature (Ga,Mn)As. Wang, M., Marshall, R. A., Edmonds, K. W., Rushforth, A. W., Campion, R. P., & Gallagher, B. L. (2014). Applied Physics Letters, 104(13), 132406–132406. https://doi.org/10.1063/1.4870521/23925
   - **Authors:** Diagnosis of tumors during tissue-conserving surgery with integrated autofluorescence and Raman scattering microscopy. Kong, K., Rowlands, C. J., Varma, S., Perkins, W., Leach, I. H.,
   - **Journal:** Proceedings of the National Academy of Sciences of the United States of America, 110(38), 15189–15194
   - **Link:** https://doi.org/10.1073/PNAS.1311289110
   - **Validation Status:** [ ] Not Checked

4. **[2013-004]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Domain wall motion driven by spin Hall effect—Tuning with in-plane magnetic anisotropy. Rushforth, A. W. (2014). Applied Physics Letters, 104(16), 162408–162408. https://doi.org/10.1063/1.4873583/131293
   - **Authors:** NO AUTHORS
   - **Journal:** Applied Physics Letters, 102(3), 32405–32405
   - **Link:** https://doi.org/10.1063/1.4789396/385177
   - **Validation Status:** [ ] Not Checked

5. **[2013-005]**
   - **Title:** Enhanced inverse spin-Hall effect in ultrathin ferromagnetic/normal metal bilayers.
   - **Authors:** Skinner, T. D., Kurebayashi, H., Fang, D., Heiss, D., Irvine, A. C., Hindmarch, A. T., Wang, M., Rushforth, A. W., & Ferguson, A. J.
   - **Journal:** Applied Physics Letters, 102(7), 72401–72401
   - **Link:** https://doi.org/10.1063/1.4792693/24374
   - **Validation Status:** [ ] Not Checked

6. **[2013-006]**
   - **Title:** High Curie temperatures at low compensation in the ferromagnetic semiconductor (Ga,Mn)As.
   - **Authors:** Wang, M., Edmonds, K. W., Gallagher, B. L., Rushforth, A. W., Makarovsky, O., Patanè, A., Campion, R. P., Foxon, C. T., Novak, V.,
   - **Journal:** Physical Review B – Condensed Matter and Materials Physics, 87(12), 121301–121301
   - **Link:** https://doi.org/10.1103/PHYSREVB.87.121301
   - **Validation Status:** [ ] Not Checked

7. **[2013-007]**
   - **Title:** Improving secondary ion mass spectrometry C60n+ sputter depth profiling of challenging polymers with nitric oxide gas dosing.
   - **Authors:** Havelund, R., Licciardello, A., Bailey, J., Tuccitto, N., Sapuppo, D., Gilmore, I. S., Sharp, J. S., Lee, J. L. S., Mouhib, T., & Delcorte,
   - **Journal:** Analytical Chemistry, 85(10), 5064–5070
   - **Link:** https://doi.org/10.1021/AC4003535
   - **Validation Status:** [ ] Not Checked

8. **[2013-008]**
   - **Title:** Magnetic and structural properties of (Ga,Mn)As/(Al,Ga,Mn)As bilayer films.
   - **Authors:** Wang, M., Rushforth, A. W., Hindmarch, A. T., Campion, R. P., Edmonds,
   - **Journal:** Applied Physics Letters, 102(11), 112404–112404
   - **Link:** https://doi.org/10.1063/1.4795444/25510
   - **Validation Status:** [ ] Not Checked

9. **[2013-009]**
   - **Title:** Magnetostrictive thin films for microwave spintronics.
   - **Authors:** Parkes, D. E., Shelford, L. R., Wadley, P., Holý, V., Wang, M., Hindmarch, A. T., Van Der Laan, G., Campion, R. P., Edmonds, K. W.,
   - **Journal:** Scientific Reports 2013 3:1, 3(1), 1–6
   - **Link:** https://doi.org/10.1038/srep02220
   - **Validation Status:** [ ] Not Checked

10. **[2013-010]**
   - **Title:** Mechanical stiffening of porphyrin nanorings through supramolecular columnar stacking.
   - **Authors:** Svatek, S. A., Perdigão, L. M. A., Stannard, A., Wieland, M. B., Kondratuk, D. V., Anderson, H. L., O’Shea, J. N., & Beton, P. H.
   - **Journal:** Nano Letters, 13(7), 3391–3395
   - **Link:** https://doi.org/10.1021/NL4017557
   - **Validation Status:** [ ] Not Checked

11. **[2013-011]**
   - **Title:** Non-invasive label-free monitoring the cardiac differentiation of human embryonic stem cells in-vitro by Raman spectroscopy. Pascut, F. C., Kalra, S., George, V., Welch, N., Denning, C., & Notingher, I. (2013). Biochimica et Biophysica Acta (BBA) – General Subjects, 1830(6), 3517–3524. https://doi.org/10.1016/J.BBAGEN.2013.01.030
   - **Authors:** Obtaining the structure factors for an epitaxial film using Cu X-ray radiation. Wadley, P., Crespi, A., Gázquez, J., Roldán, M. A., García, P., Novak, V., Campion, R., Jungwirth, T., Rinaldi, C., Martí, X., Holy, V.,
   - **Journal:** Journal of Applied Crystallography, 46(6), 1749–1754
   - **Link:** https://doi.org/10.1107/S002188981302414X
   - **Validation Status:** [ ] Not Checked

12. **[2013-012]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Optimal geometry for a quartz multipurpose SPM sensor. Stirling, J. (2013). Beilstein Journal of Nanotechnology 4:43, 4(1), 370–376. https://doi.org/10.3762/BJNANO.4.43
   - **Authors:** NO AUTHORS
   - **Journal:** Journal of Physical Chemistry C, 117(36), 18381–18385
   - **Link:** https://doi.org/10.1021/JP402333M
   - **Validation Status:** [ ] Not Checked

13. **[2013-013]**
   - **Title:** Picosecond inverse magnetostriction in galfenol thin films.
   - **Authors:** Jäger, J. V., Scherbakov, A. V., Linnik, T. L., Yakovlev, D. R., Wang, M., Wadley, P., Holy, V., Cavill, S. A., Akimov, A. V., Rushforth, A.
   - **Journal:** Applied Physics Letters, 103(3), 32409–32409
   - **Link:** https://doi.org/10.1063/1.4816014/312139
   - **Validation Status:** [ ] Not Checked

14. **[2013-014]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Quantized phonon modes in loaded polymer films. Farmer, D. J., Akimov, A. V., Sharp, J. S., & Kent, A. J. (2013). Journal of Applied Physics, 113(3), 25–25. https://doi.org/10.1063/1.4774689/346282
   - **Authors:** NO AUTHORS
   - **Journal:** Physical Review B – Condensed Matter and Materials Physics, 88(3)
   - **Link:** https://doi.org/10.1103/PHYSREVB.88.035447
   - **Validation Status:** [ ] Not Checked

15. **[2013-015]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Scanning probe image wizard: A toolbox for automated scanning probe microscopy data analysis. Stirling, J., Woolley, R. A. J., & Moriarty, P. (2013). Review of Scientific Instruments, 84(11), 113701–113701. https://doi.org/10.1063/1.4827076/358730
   - **Authors:** NO AUTHORS
   - **Journal:** Physical Review B – Condensed Matter and Materials Physics, 87(7)
   - **Link:** https://doi.org/10.1103/PHYSREVB.87.075310
   - **Validation Status:** [ ] Not Checked

16. **[2013-016]**
   - **Title:** Single molecule magnets with protective
   - **Authors:** ligand shells on gold and titanium dioxide surfaces: In situ
   - **Journal:** Journal of Chemical Physics, 139(15), 154708–154708
   - **Link:** https://doi.org/10.1063/1.4825382/193941
   - **Validation Status:** [ ] Not Checked

17. **[2013-017]**
   - **Title:** Solution preparation of two-dimensional
   - **Authors:** covalently linked networks by polymerization of
   - **Journal:** ACS Nano, 7(4), 3014–3021
   - **Link:** https://doi.org/10.1021/NN400337V
   - **Validation Status:** [ ] Not Checked

18. **[2013-018]**
   - **Title:** Structural development and energy dissipation in simulated silicon apices. Jarvis, S. P., Kantorovich, L., & Moriarty, P. (2013). Beilstein Journal of Nanotechnology 4:106, 4(1), 941–948. https://doi.org/10.3762/BJNANO.4.106
   - **Authors:** Tetragonal phase of epitaxial room-temperature antiferromagnet CuMnAs. Wadley, P., Novák, V., Campion, R. P., Rinaldi, C., Martí, X., Reichlová, H., Železný, J., Gazquez, J., Roldan, M. A., Varela, M., Khalyavin, D., Langridge, S., Kriegner, D., MácA, F., Mašek, J., Bertacco, R., Holý, V., Rushforth, A. W., Edmonds, K. W., … Jungwirth,
   - **Journal:** Nature Communications 2013 4:1, 4(1), 1–6
   - **Link:** https://doi.org/10.1038/ncomms3322
   - **Validation Status:** [ ] Not Checked

19. **[2013-019]**
   - **Title:** Tuning the Bandgap of Exfoliated InSe Nanosheets by Quantum Confinement.
   - **Authors:** Mudd, G. W., Svatek, S. A., Ren, T., Patanè, A., Makarovsky, O., Eaves, L., Beton, P. H., Kovalyuk, Z. D., Lashkarev, G. V., Kudrynskyi, Z. R., Dmitriev G W Mudd, A. I., Svatek, S. A., Ren, T. H., Patanè, A., Makarovsky, O., Eaves, L., Beton, P. H., Kovalyuk, Z. D., Lashkarev, G.
   - **Journal:** Advanced Materials, 25(40), 5714–5718
   - **Link:** https://doi.org/10.1002/ADMA.201302616
   - **Validation Status:** [ ] Not Checked


### 2012 (16 publications)

1. **[2012-001]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Vibrational modes of elongated sessile liquid droplets. Temperton, R. H., & Sharp, J. S. (2013). Langmuir, 29(15), 4737–4742. https://doi.org/10.1021/LA304520C
   - **Authors:** NO AUTHORS
   - **Journal:** Journal of Physical Chemistry C, 116(34), 18184–18192
   - **Link:** https://doi.org/10.1021/JP3025864
   - **Validation Status:** [ ] Not Checked

2. **[2012-002]**
   - **Title:** Charge transfer from an aromatic
   - **Authors:** adsorbate to a semiconductor TiO 2 surface probed on the femtosecond
   - **Journal:** Physical Review Letters, 109(1), 017401–017401
   - **Link:** https://doi.org/10.1103/PHYSREVLETT.109.017401
   - **Validation Status:** [ ] Not Checked

3. **[2012-003]**
   - **Title:** Complex design of dissipation signals in non-contact atomic force microscopy. Bamidele, J., Li, Y. J., Jarvis, S., Naitoh, Y., Sugawara, Y., & Kantorovich, L. (2012). Physical Chemistry Chemical Physics, 14(47), 16250–16257. https://doi.org/10.1039/C2CP43121A
   - **Authors:** Cytoplasmic RNA in undifferentiated neural stem cells: A potential label-free raman spectral marker for
   - **Journal:** Analytical Chemistry, 84(7), 3155–3162
   - **Link:** https://doi.org/10.1021/AC202994E
   - **Validation Status:** [ ] Not Checked

4. **[2012-004]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Effect of the tip state during qPlus noncontact atomic force microscopy of Si(100) at 5 K: Probing the probe. Sweetman, A., Jarvis, S., Danza, R., & Moriarty, P. (2012). Beilstein Journal of Nanotechnology 3:3, 3(1), 25–32. https://doi.org/10.3762/BJNANO.3.3
   - **Authors:** NO AUTHORS
   - **Journal:** Journal of Chemical Physics, 137(22), 224706–224706
   - **Link:** https://doi.org/10.1063/1.4770496/194939
   - **Validation Status:** [ ] Not Checked

5. **[2012-005]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Fabrication of metallic magnetic nanostructures by argon ion milling using a reversed-polarity planar magnetron ion source. Hindmarch, A. T., Parkes, D. E., & Rushforth, A. W. (2012). Vacuum, 86(10), 1600–1604. https://doi.org/10.1016/J.VACUUM.2012.02.019
   - **Authors:** NO AUTHORS
   - **Journal:** Soft Matter, 8(14), 3751–3755
   - **Link:** https://doi.org/10.1039/C2SM25147G
   - **Validation Status:** [ ] Not Checked

6. **[2012-006]**
   - **Title:** Identifying passivated dynamic force microscopy tips on H:Si(100). Sharp, P., Jarvis, S., Woolley, R., Sweetman, A., Kantorovich, L., Pakes, C., & Moriarty, P. (2012). Applied Physics Letters, 100(23), 233120–233120. https://doi.org/10.1063/1.4726086/282134
   - **Authors:** Investigations of the supramolecular structure of individual diphenylalanine nano- and microtubes by
   - **Journal:** Biomacromolecules, 13(7), 2181–2187
   - **Link:** https://doi.org/10.1021/BM3005929
   - **Validation Status:** [ ] Not Checked

7. **[2012-007]**
   - **Title:** Label-free molecular analysis of live Neospora caninum tachyzoites in host cells by selective scanning Raman micro-spectroscopy. Kong, K., Rowlands, C. J., Elsheikha, H., & Notingher, I. (2012). Analyst, 137(18), 4119–4122. https://doi.org/10.1039/C2AN35640F
   - **Authors:** Magnetic domain wall propagation under ferroelectric control. Mikheev, E., Stolichnov, I., De Ranieri, E., Wunderlich, J., Trodahl, H. J., Rushforth, A. W., Riester, S. W. E., Campion, R. P., Edmonds, K.
   - **Journal:** Physical Review B – Condensed Matter and Materials Physics, 86(23), 235130–235130
   - **Link:** https://doi.org/10.1103/PHYSREVB.86.235130
   - **Validation Status:** [ ] Not Checked

8. **[2012-008]**
   - **Title:** Manifestation of dynamic Jahn–Teller
   - **Authors:** distortions and surface interactions in scanning tunnelling microscopy images of the fullerene anion C−60. Man, H., Halim, M., Sawa, H., -, al, Khomskii -, D. I., compounds Sohan Lal, C., Pandey -, S. K., Dunn,
   - **Journal:** New Journal of Physics, 14(8), 083038–083038
   - **Link:** https://doi.org/10.1088/1367-2630/14/8/083038
   - **Validation Status:** [ ] Not Checked

9. **[2012-009]**
   - **Title:** Near-field Raman spectroscopy of
   - **Authors:** biological nanomaterials by in situ laser-induced synthesis of
   - **Journal:** Optics Letters, Vol. 37, Issue 12, Pp. 2256-2258, 37(12), 2256–2258
   - **Link:** https://doi.org/10.1364/OL.37.002256
   - **Validation Status:** [ ] Not Checked

10. **[2012-010]**
   - **Title:** Non-volatile ferroelectric gating of magnetotransport anisotropy in (Ga,Mn)(As,P).
   - **Authors:** Mikheev, E., Stolichnov, I., Huang, Z., Rushforth, A. W., Haigh, J. A., Campion, R. P., Edmonds, K. W., Gallagher, B. L., & Setter, N.
   - **Journal:** Applied Physics Letters, 100(26), 262906–262906
   - **Link:** https://doi.org/10.1063/1.4731245/126514
   - **Validation Status:** [ ] Not Checked

11. **[2012-011]**
   - **Title:** Non-volatile voltage control of magnetization and magnetic domain walls in magnetostrictive epitaxial thin films.
   - **Authors:** Parkes, D. E., Cavill, S. A., Hindmarch, A. T., Wadley, P., McGee, F., Staddon, C. R., Edmonds, K. W., Campion, R. P., Gallagher, B. L., &
   - **Journal:** Applied Physics Letters, 101(7), 72402–72402
   - **Link:** https://doi.org/10.1063/1.4745789/111859
   - **Validation Status:** [ ] Not Checked

12. **[2012-012]**
   - **Title:** Piezoelectric strain induced variation of the magnetic anisotropy in a high Curie temperature (Ga,Mn)As sample.
   - **Authors:** Casiraghi, A., Rushforth, A. W., Zemen, J., Haigh, J. A., Wang, M.,
   - **Journal:** Applied Physics Letters, 101(8), 82406–82406
   - **Link:** https://doi.org/10.1063/1.4746250/111961
   - **Validation Status:** [ ] Not Checked

13. **[2012-013]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Precise orientation of a single C 60 molecule on the tip of a scanning probe microscope. Chiutu, C., Sweetman, A. M., Lakin, A. J., Stannard, A., Jarvis, S., Kantorovich, L., Dunn, J. L., & Moriarty, P. (2012). Physical Review Letters, 108(26). https://doi.org/10.1103/PHYSREVLETT.108.268302
   - **Authors:** NO AUTHORS
   - **Journal:** Physical Review Letters, 108(3)
   - **Link:** https://doi.org/10.1103/PHYSREVLETT.108.035702
   - **Validation Status:** [ ] Not Checked

14. **[2012-014]**
   - **Title:** Role of orbital overlap in atomic manipulation. Jarvis, S., Sweetman, A., Bamidele, J., Kantorovich, L., & Moriarty, P. (2012). Physical Review B – Condensed Matter and Materials Physics, 85(23). https://doi.org/10.1103/PHYSREVB.85.235305
   - **Authors:** Room-temperature antiferromagnetism in CuMnAs. MácA, F., Mašek, J., Stelmakhovych, O., Martí, X., Reichlová, H., Uhlířová, K., Beran, P., Wadley, P., Novák, V., & Jungwirth, T.
   - **Journal:** Journal of Magnetism and Magnetic Materials, 324(8), 1606–1612
   - **Link:** https://doi.org/10.1016/J.JMMM.2011.12.017
   - **Validation Status:** [ ] Not Checked

15. **[2012-015]**
   - **Title:** Surface transfer doping of hydrogen-terminated diamond by C 60F 48: Energy level scheme and doping efficiency.
   - **Authors:** Edmonds, M. T., Wanke, M., Tadich, A., Vulling, H. M., Rietwyk, K. J., Sharp, P. L., Stark, C. B., Smets, Y., Schenk, A., Wu, Q. H., Ley, L.,
   - **Journal:** Journal of Chemical Physics, 136(12), 124701–124701
   - **Link:** https://doi.org/10.1063/1.3695643/72668
   - **Validation Status:** [ ] Not Checked

16. **[2012-016]**
   - **Title:** Two Vernier-Templated Routes to a 24-Porphyrin Nanoring.
   - **Authors:** Kondratuk, D. V., Perdigao, L. M. A., O’Sullivan, M. C., Svatek, S.,
   - **Journal:** Angewandte Chemie International Edition, 51(27), 6696–6699
   - **Link:** https://doi.org/10.1002/ANIE.201202870
   - **Validation Status:** [ ] Not Checked


### 2011 (24 publications)

1. **[2011-001]**
   - **Title:** Analysing Surface Structures on (Ga, Mn)As by Atomic Force Microscopy. Piano, S., Rushforth, A. W., Edmonds, K. W., Campion, R. P., Adesso, G., & Gallagher, B. L. (2012). Journal of Nanoscience and Nanotechnology, 12(9), 7545–7549. https://doi.org/10.1166/JNN.2012.6553
   - **Authors:** Broken symmetry and the variation of critical properties in the phase behaviour of supramolecular rhombus tilings. Stannard, A., Russell, J. C., Blunt, M. O., Salesiotis, C., Giménez-López, M. D. C., Taleb, N., Schröder, M., Champness, N. R.,
   - **Journal:** Nature Chemistry 2011 4:2, 4(2), 112–117
   - **Link:** https://doi.org/10.1038/nchem.1199
   - **Validation Status:** [ ] Not Checked

2. **[2011-002]**
   - **Title:** Rapid acquisition of Raman spectral maps through minimal sampling: Applications in tissue imaging. Rowlands, C. J., Varma, S., Perkins, W., Leach, I., Williams, H., & Notingher, I. (2012). Journal of Biophotonics, 5(3), 220–229. https://doi.org/10.1002/JBIO.201100098
   - **Authors:** Resonant properties of sessile droplets; contact angle dependence of the resonant frequency and width in
   - **Journal:** Soft Matter, 8(2), 399–407
   - **Link:** https://doi.org/10.1039/C1SM06916K
   - **Validation Status:** [ ] Not Checked

3. **[2011-003]**
   - **Title:** A single centre water splitting dye
   - **Authors:** complex adsorbed on rutile TiO 2(110): Photoemission, x-ray absorption,
   - **Journal:** Journal of Chemical Physics, 135(11), 114703–114703
   - **Link:** https://doi.org/10.1063/1.3637497/190056
   - **Validation Status:** [ ] Not Checked

4. **[2011-004]**
   - **Title:** Automated probe microscopy via evolutionary optimization at the atomic scale. Woolley, R. A. J., Stirling, J., Radocea, A., Krasnogor, N., & Moriarty, P. (2011). Applied Physics Letters, 98(25). https://doi.org/10.1063/1.3600662/340700
   - **Authors:** Broken symmetry and the variation of critical properties in the phase behaviour of supramolecular rhombus tilings. Stannard, A., Russell, J. C., Blunt, M. O., Salesiotis, C., Giménez-López, M. D. C., Taleb, N., Schröder, M., Champness, N. R.,
   - **Journal:** Nature Chemistry 2011 4:2, 4(2), 112–117
   - **Link:** https://doi.org/10.1038/nchem.1199
   - **Validation Status:** [ ] Not Checked

5. **[2011-005]**
   - **Title:** Characterization and local magnetic modification of ion irradiated GaMnAs.
   - **Authors:** Li, L., Yao, S. D., Roshchupkina, O., Prucnal, S., Akhmadaliev, S., Campion, R. P., Rushforth, A. W., Fassbender, J., Helm, M., Gallagher,
   - **Journal:** Nuclear Instruments and Methods in Physics Research Section B: Beam Interactions with Materials and Atoms, 269(21), 2469–2473
   - **Link:** https://doi.org/10.1016/J.NIMB.2011.07.096
   - **Validation Status:** [ ] Not Checked

6. **[2011-006]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Charge transfer dynamics of model charge transfer centers of a multicenter water splitting dye complex on rutile TiO2(110). Weston, M., Britton, A. J., & O’Shea, J. N. (2011). Journal of Chemical Physics, 134(5), 54705–54705. https://doi.org/10.1063/1.3549573/983577
   - **Authors:** NO AUTHORS
   - **Journal:** Journal of Chemical Physics, 135(16), 164702–164702
   - **Link:** https://doi.org/10.1063/1.3656682/70882
   - **Validation Status:** [ ] Not Checked

7. **[2011-007]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Coherent hypersonic closed-pipe organ like modes in supported polymer films. Akimov, A. V., Young, E. S. K., Sharp, J. S., Gusev, V., & Kent, A. J. (2011). Applied Physics Letters, 99(2). https://doi.org/10.1063/1.3605567/937820
   - **Authors:** NO AUTHORS
   - **Journal:** Langmuir, 27(15), 9367–9371
   - **Link:** https://doi.org/10.1021/LA201984Y
   - **Validation Status:** [ ] Not Checked

8. **[2011-008]**
   - **Title:** Detection of stacking faults breaking the [110]/[11̄0] symmetry in ferromagnetic semiconductors (Ga,Mn)As and (Ga,Mn)(As,P).
   - **Authors:** Kopecký, M., Kub, J., MácA, F., Mažek, J., Pacherová, O., Rushforth, A. W., Gallagher, B. L., Campion, R. P., Novák, V., & Jungwirth, T.
   - **Journal:** Physical Review B – Condensed Matter and Materials Physics, 83(23), 235324–235324
   - **Link:** https://doi.org/10.1103/PHYSREVB.83.235324
   - **Validation Status:** [ ] Not Checked

9. **[2011-009]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Dewetting of Au nanoparticle assemblies. Alhummiany, H., Jarvis, S., Woolley, R. A. J., Stannard, A., Blunt, M., & Moriarty, P. (2011). Journal of Materials Chemistry, 21(42), 16983–16989. https://doi.org/10.1039/C1JM12182K
   - **Authors:** NO AUTHORS
   - **Journal:** Journal of Physics: Condensed Matter, 23(8), 083001–083001
   - **Link:** https://doi.org/10.1088/0953-8984/23/8/083001
   - **Validation Status:** [ ] Not Checked

10. **[2011-010]**
   - **Title:** Dimerization of tri(4-bromophenyl)benzene by aryl-aryl coupling from solution on a gold surface. Russell, J. C., Blunt, M. O., Garfitt, J. M., Scurr, D. J., Alexander, M., Champness, N. R., & Beton, P. H. (2011). Journal of the American Chemical Society, 133(12), 4220–4223. https://doi.org/10.1021/JA110837S
   - **Authors:** Discrimination between basal cell carcinoma and hair follicles in skin tissue sections by Raman micro-spectroscopy. Larraona-Puy, M., Ghita, A., Zoladek, A., Perkins, W., Varma, S., Leach, I. H., Koloydenko, A. A., Williams, H., & Notingher, I.
   - **Journal:** Journal of Molecular Structure, 993(1–3), 57–61
   - **Link:** https://doi.org/10.1016/J.MOLSTRUC.2010.10.046
   - **Validation Status:** [ ] Not Checked

11. **[2011-011]**
   - **Title:** Effects of substrate constraint on crack pattern formation in thin films of colloidal polystyrene particles. Smith, M. I., & Sharp, J. S. (2011). Langmuir, 27(13), 8009–8017. https://doi.org/10.1021/LA2000624
   - **Authors:** Enhanced Curie temperature and nonvolatile switching of ferromagnetism in ultrathin (Ga,Mn)As channels. Stolichnov, I., Riester, S. W. E., Mikheev, E., Setter, N., Rushforth, A. W., Edmonds, K. W., Campion, R. P., Foxon, C. T., Gallagher, B. L., Jungwirth, T., & Trodahl, H. J. (2011a). Physical Review B – Condensed Matter and Materials Physics, 83(11), 115203–115203. https://doi.org/10.1103/PHYSREVB.83.115203 Fast switching of magnetization in the ferromagnetic semiconductor (Ga,Mn)(As,P) using nonequilibrium phonon pulses. Casiraghi, A., Walker, P., Akimov, A. V., Edmonds, K. W., Rushforth, A. W., De Ranieri, E., Campion, R. P., Gallagher, B. L., & Kent, A. J.
   - **Journal:** Applied Physics Letters, 99(26), 262503–262503
   - **Link:** https://doi.org/10.1063/1.3672029/321978
   - **Validation Status:** [ ] Not Checked

12. **[2011-012]**
   - **Title:** Ferroelectric polymer gates for non-volatile field effect control of ferromagnetism in (Ga, Mn)As layers.
   - **Authors:** Stolichnov, I., Riester, S. W. E., Mikheev, E., Setter, N., Rushforth, A. W., Edmonds, K. W., Campion, R. P., Foxon, C. T., Gallagher, B. L., Jungwirth, T., & Trodahl, H. J. (2011b). Nanotechnology, 22(25), 254004–254004. https://doi.org/10.1088/0957-4484/22/25/254004 Fluorination of the diamond surface by photoinduced dissociation of C 60F48. Rietwyk, K. J., Wanke, M., Vulling, H. M., Edmonds, M. T., Sharp, P. L., Smets, Y., Wu, Q. H., Tadich, A., Rubanov, S., Moriarty, P. J., Ley,
   - **Journal:** Physical Review B – Condensed Matter and Materials Physics, 84(3)
   - **Link:** https://doi.org/10.1103/PHYSREVB.84.035404
   - **Validation Status:** [ ] Not Checked

13. **[2011-013]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Haptic-STM: A human-in-the-loop interface to a scanning tunneling microscope. Perdigão, L. M. A., & Saywell, A. (2011). Review of Scientific Instruments, 82(7). https://doi.org/10.1063/1.3600572/354412
   - **Authors:** NO AUTHORS
   - **Journal:** Journal of Polymer Science Part B: Polymer Physics, 49(10), 732–739
   - **Link:** https://doi.org/10.1002/POLB.22238
   - **Validation Status:** [ ] Not Checked

14. **[2011-014]**
   - **Title:** Magnetic linear dichroism in the angular dependence of core-level photoemission from (Ga,Mn)as using hard x rays.
   - **Authors:** Edmonds, K. W., Van Der Laan, G., Farley, N. R. S., Campion, R. P., Gallagher, B. L., Foxon, C. T., Cowie, B. C. C., Warren, S., &
   - **Journal:** Physical Review Letters, 107(19), 197601–197601
   - **Link:** https://doi.org/10.1103/PHYSREVLETT.107.197601
   - **Validation Status:** [ ] Not Checked

15. **[2011-015]**
   - **Title:** Magnetism and carrier modulation in (Ga,Mn)As/organic-dye hybrid devices.
   - **Authors:** Herrera Diez, L., Konuma, M., Placidi, E., Arciprete, F., Rushforth, A. W., Campion, R. P., Gallagher, B. L., Honolka, J., & Kern, K.
   - **Journal:** Applied Physics Letters, 98(2)
   - **Link:** https://doi.org/10.1063/1.3543843/122479
   - **Validation Status:** [ ] Not Checked

16. **[2011-016]**
   - **Title:** Manipulating Si(100) at 5 K using qPlus
   - **Authors:** frequency modulated atomic force microscopy: Role of defects and
   - **Journal:** Physical Review B – Condensed Matter and Materials Physics, 84(8)
   - **Link:** https://doi.org/10.1103/PHYSREVB.84.085426
   - **Validation Status:** [ ] Not Checked

17. **[2011-017]**
   - **Title:** Microstructural, chemical bonding,
   - **Authors:** stress development and charge storage characteristics of Ge nanocrystals
   - **Journal:** Journal of Nanoparticle Research, 13(2), 587–595
   - **Link:** https://doi.org/10.1007/S11051-010-0054-8
   - **Validation Status:** [ ] Not Checked

18. **[2011-018]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Origin of in-plane uniaxial magnetic anisotropy in CoFeB amorphous ferromagnetic thin films. Hindmarch, A. T., Rushforth, A. W., Campion, R. P., Marrows, C. H., & Gallagher, B. L. (2011). Physical Review B – Condensed Matter and Materials Physics, 83(21), 212404–212404. https://doi.org/10.1103/PHYSREVB.83.212404
   - **Authors:** NO AUTHORS
   - **Journal:** Experiments in Fluids, 50(5), 1385–1391
   - **Link:** https://doi.org/10.1007/S00348-010-0998-6
   - **Validation Status:** [ ] Not Checked

19. **[2011-019]**
   - **Title:** Polarized x-ray spectroscopy of quaternary ferromagnetic semiconductor (Ga,Mn)(As,P) thin films.
   - **Authors:** Wadley, P., Casiraghi, A., Wang, M., Edmonds, K. W., Campion, R. P., Rushforth, A. W., Gallagher, B. L., Staddon, C. R., Wang, K. Y., Der
   - **Journal:** Applied Physics Letters, 99(2), 22502–22502
   - **Link:** https://doi.org/10.1063/1.3609776/937752
   - **Validation Status:** [ ] Not Checked

20. **[2011-020]**
   - **Title:** Single molecule magnets on a gold surface: In situ electrospray deposition, x-ray absorption and photoemission.
   - **Authors:** Saywell, A., Britton, A. J., Taleb, N., Del Carmen Giménez-López, M.,
   - **Journal:** Nanotechnology, 22(7), 075704–075704
   - **Link:** https://doi.org/10.1088/0957-4484/22/7/075704
   - **Validation Status:** [ ] Not Checked

21. **[2011-021]**
   - **Title:** Surface morphology and magnetic anisotropy in (Ga,Mn)As.
   - **Authors:** Piano, S., Marti, X., Rushforth, A. W., Edmonds, K. W., Campion, R. P., Wang, M., Caha, O., Schülli, T. U., Hol, V., & Gallagher, B. L.
   - **Journal:** Applied Physics Letters, 98(15), 152503–152503
   - **Link:** https://doi.org/10.1063/1.3579534/340278
   - **Validation Status:** [ ] Not Checked

22. **[2011-022]**
   - **Title:** Tailoring the magnetism of GaMnAs films by ion irradiation.
   - **Authors:** Li, L., Yao, S. D., Zhou, S., Bürger, D., Roshchupkina, O., Akhmadaliev, S., Rushforth, A. W., Campion, R. P., Fassbender, J., Helm,
   - **Journal:** Journal of Physics D: Applied Physics, 44(4), 045001–045001
   - **Link:** https://doi.org/10.1088/0022-3727/44/4/045001
   - **Validation Status:** [ ] Not Checked

23. **[2011-023]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Toggling bistable atoms via mechanical switching of bond angle. Sweetman, A., Jarvis, S., Danza, R., Bamidele, J., Gangopadhyay, S., Shaw, G. A., Kantorovich, L., & Moriarty, P. (2011). Physical Review Letters, 106(13). https://doi.org/10.1103/PHYSREVLETT.106.136101
   - **Authors:** NO AUTHORS
   - **Journal:** Chemical Science, 2(8), 1440–1448
   - **Link:** https://doi.org/10.1039/C1SC00251A
   - **Validation Status:** [ ] Not Checked

24. **[2011-024]**
   - **Title:** Vernier templating and synthesis of a 12-porphyrin nano-ring.
   - **Authors:** O’Sullivan, M. C., Sprafke, J. K., Kondratuk, D. V., Rinfray, C., Claridge, T. D. W., Saywell, A., Blunt, M. O., O’Shea, J. N., Beton, P.
   - **Journal:** Nature 2011 469:7328, 469(7328), 72–75
   - **Link:** https://doi.org/10.1038/nature09683
   - **Validation Status:** [ ] Not Checked


### 2010 (22 publications)

1. **[2010-001]**
   - **Title:** Graphene formation by decomposition of C60. Perdigão, L. M. A., Sabki, S. N., Garfitt, J. M., Capiod, P., & Beton, P. H. (2011). Journal of Physical Chemistry C, 115(15), 7472–7476. https://doi.org/10.1021/JP111462T
   - **Authors:** Guest-induced growth of a surface-based supramolecular bilayer. Blunt, M. O., Russell, J. C., Gimenez-Lopez, M. D. C., Taleb, N., Lin,
   - **Journal:** Nature Chemistry 2010 3:1, 3(1), 74–78
   - **Link:** https://doi.org/10.1038/nchem.901
   - **Validation Status:** [ ] Not Checked

2. **[2010-002]**
   - **Title:** A novel tripod-driven platform for in-situ positioning of samples and electrical probes in a TEM.
   - **Authors:** Medford, B. D., Rogers, B. L., Laird, D., Berdunov, N., Lockwood, A. J., Gnanavel, T., Guan, W., Wang, J., Möbus, G., Inkson, B. J., &
   - **Journal:** Journal of Physics: Conference Series, 241(1), 012057–012057
   - **Link:** https://doi.org/10.1088/1742-6596/241/1/012057
   - **Validation Status:** [ ] Not Checked

3. **[2010-003]**
   - **Title:** Above-barrier surface electron resonances induced by a molecular network.
   - **Authors:** Stiufiuc, R., Perdigão, L. M. A., Grandidier, B., Deresmes, D., Allan, G., Delerue, C., Stiévenard, D., Beton, P. H., Erwin, S. C., Sassi, M.,
   - **Journal:** Physical Review B – Condensed Matter and Materials Physics, 81(4)
   - **Link:** https://doi.org/10.1103/PHYSREVB.81.045421
   - **Validation Status:** [ ] Not Checked

4. **[2010-004]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Calculation of images of oriented C60 molecules using molecular orbital theory. Hands, I. D., Dunn, J. L., & Bates, C. A. (2010a). Physical Review B – Condensed Matter and Materials Physics, 81(20). https://doi.org/10.1103/PHYSREVB.81.205440
   - **Authors:** NO AUTHORS
   - **Journal:** Journal of Chemical Physics, 133(9), 94705–94705
   - **Link:** https://doi.org/10.1063/1.3488299/189016
   - **Validation Status:** [ ] Not Checked

5. **[2010-005]**
   - **Title:** Coherent elastic waves in a one-dimensional polymer hypersonic crystal. Walker, P. M., Sharp, J. S., Akimov, A. V., & Kent, A. J. (2010). Applied Physics Letters, 97(7), 73106–73106. https://doi.org/10.1063/1.3479929/339593
   - **Authors:** Conformation and Packing of Porphyrin Polymer Chains Deposited Using Electrospray on a Gold Surface. Saywell, A., Sprafke, J. K., Esdaile, L. J., Britton, A. J., Rienzo, A., Anderson, H. L., OShea, J. N., Beton, P. H., Saywell, A., Britton, A. J., Rienzo, A., Beton, P. H., Sprafke, J. K., Esdaile, L. J., &
   - **Journal:** Angewandte Chemie International Edition, 49(48), 9136–9139
   - **Link:** https://doi.org/10.1002/ANIE.201004896
   - **Validation Status:** [ ] Not Checked

6. **[2010-006]**
   - **Title:** Current-driven domain wall motion across a wide temperature range in a (Ga,Mn)(As,P) device.
   - **Authors:** Wang, K. Y., Edmonds, K. W., Irvine, A. C., Tatara, G., De Ranieri, E., Wunderlich, J., Olejnik, K., Rushforth, A. W., Campion, R. P.,
   - **Journal:** Applied Physics Letters, 97(26), 262102–262102
   - **Link:** https://doi.org/10.1063/1.3532095/339579
   - **Validation Status:** [ ] Not Checked

7. **[2010-007]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Dilatancy in the flow and fracture of stretched colloidal suspensions. Smith, M. I., Besseling, R., Cates, M. E., & Bertola, V. (2010). Nature Communications 2010 1:1, 1(1), 1–5. https://doi.org/10.1038/ncomms1119
   - **Authors:** NO AUTHORS
   - **Journal:** Langmuir, 26(17), 13892–13896
   - **Link:** https://doi.org/10.1021/LA1004787
   - **Validation Status:** [ ] Not Checked

8. **[2010-008]**
   - **Title:** Domain wall resistance in perpendicular (Ga,Mn)As: Dependence on pinning.
   - **Authors:** Wang, K. Y., Edmonds, K. W., Irvine, A. C., Wunderlich, J., Olejnik, K., Rushforth, A. W., Campion, R. P., Williams, D. A., Foxon, C. T.,
   - **Journal:** Journal of Magnetism and Magnetic Materials, 322(21), 3481–3484
   - **Link:** https://doi.org/10.1016/J.JMMM.2010.06.049
   - **Validation Status:** [ ] Not Checked

9. **[2010-009]**
   - **Title:** Effect of polymer additives on the wetting of impacting droplets. Smith, M. I., & Bertola, V. (2010). Physical Review Letters, 104(15). https://doi.org/10.1103/PHYSREVLETT.104.154502
   - **Authors:** Element-resolved orbital polarization in (III,Mn)As ferromagnetic semiconductors from K -edge x-ray magnetic circular dichroism. Wadley, P., Freeman, A. A., Edmonds, K. W., Van Der Laan, G., Chauhan, J. S., Campion, R. P., Rushforth, A. W., Gallagher, B. L., Foxon, C. T.,
   - **Journal:** Physical Review B – Condensed Matter and Materials Physics, 81(23), 235208–235208
   - **Link:** https://doi.org/10.1103/PHYSREVB.81.235208
   - **Validation Status:** [ ] Not Checked

10. **[2010-010]**
   - **Title:** Entropically stabilized growth of a two-dimensional random tiling. Stannard, A., Blunt, M. O., Beton, P. H., & Garrahan, J. P. (2010). Physical Review E – Statistical, Nonlinear, and Soft Matter Physics, 82(4). https://doi.org/10.1103/PHYSREVE.82.041109
   - **Authors:** Exchange bias in a ferromagnetic semiconductor induced by a ferromagnetic metal: Fe/(Ga,Mn)As bilayer films studied by XMCD measurements and SQUID magnetometry. Olejnik, K., Wadley, P., Haigh, J. A., Edmonds, K. W., Campion, R. P., Rushforth, A. W., Gallagher, B. L., Foxon, C. T., Jungwirth, T., Wunderlich, J., Dhesi, S. S., Cavill, S. A., Van Der Laan, G., & Arenholz, E.
   - **Journal:** Physical Review B – Condensed Matter and Materials Physics, 81(10), 104402–104402
   - **Link:** https://doi.org/10.1103/PHYSREVB.81.104402
   - **Validation Status:** [ ] Not Checked

11. **[2010-011]**
   - **Title:** Fullerene adsorption on semiconductor surfaces. Moriarty, P. J. (2010). Surface Science Reports, 65(7), 175–227. https://doi.org/10.1016/J.SURFREP.2010.08.001
   - **Authors:** Guest-induced growth of a surface-based supramolecular bilayer. Blunt, M. O., Russell, J. C., Gimenez-Lopez, M. D. C., Taleb, N., Lin,
   - **Journal:** Nature Chemistry 2010 3:1, 3(1), 74–78
   - **Link:** https://doi.org/10.1038/nchem.901
   - **Validation Status:** [ ] Not Checked

12. **[2010-012]**
   - **Title:** Magnetic aftereffect in compressively strained GaMnAs studied using Kerr microscopy.
   - **Authors:** Herrera Diez, L., Honolka, J., Kern, K., Kronmüller, H., Placidi, E., Arciprete, F., Rushforth, A. W., Campion, R. P., & Gallagher, B. L.
   - **Journal:** Physical Review B – Condensed Matter and Materials Physics, 81(9), 094412–094412
   - **Link:** https://doi.org/10.1103/PHYSREVB.81.094412
   - **Validation Status:** [ ] Not Checked

13. **[2010-013]**
   - **Title:** Maintenance of pluripotency in human embryonic stem cells cultured on a synthetic substrate in conditioned medium.
   - **Authors:** Mahlstedt, M. M., Anderson, D., Sharp, J. S., McGilvray, R., Barbadillo Muñoz, M. D., Buttery, L. D., Alexander, M. R., Rose, F. R. A. J.,
   - **Journal:** Biotechnology and Bioengineering, 105(1), 130–140
   - **Link:** https://doi.org/10.1002/BIT.22520
   - **Validation Status:** [ ] Not Checked

14. **[2010-014]**
   - **Title:** Microscopic analysis of the valence band and impurity band theories of (Ga,Mn)As.
   - **Authors:** Mašek, J., MácA, F., Kudrnovský, J., Makarovsky, O., Eaves, L., Campion, R. P., Edmonds, K. W., Rushforth, A. W., Foxon, C. T.,
   - **Journal:** Physical Review Letters, 105(22), 227202–227202
   - **Link:** https://doi.org/10.1103/PHYSREVLETT.105.227202
   - **Validation Status:** [ ] Not Checked

15. **[2010-015]**
   - **Title:** Microstructural characteristics and
   - **Authors:** phonon structures in luminescence from surface oxidized Ge nanocrystals
   - **Journal:** Journal of Applied Physics, 108(5), 53510–53510
   - **Link:** https://doi.org/10.1063/1.3475717/345667
   - **Validation Status:** [ ] Not Checked

16. **[2010-016]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Microtextured surfaces with gradient wetting properties. Langley, K. R., & Sharp, J. S. (2010). Langmuir, 26(23), 18349–18356. https://doi.org/10.1021/LA1036212
   - **Authors:** NO AUTHORS
   - **Journal:** Optics Letters, Vol. 35, Issue 24, Pp. 4193-4195, 35(24), 4193–4195
   - **Link:** https://doi.org/10.1364/OL.35.004193
   - **Validation Status:** [ ] Not Checked

17. **[2010-017]**
   - **Title:** Self-assembled aggregates formed by single-molecule magnets on a gold surface.
   - **Authors:** Saywell, A., Magnano, G., Satterley, C. J., Perdigão, L. M. A., Britton, A. J., Taleb, N., Del Carmen Giménez-López, M., Champness, N.
   - **Journal:** Nature Communications 2010 1:1, 1(1), 1–8
   - **Link:** https://doi.org/10.1038/ncomms1075
   - **Validation Status:** [ ] Not Checked

18. **[2010-018]**
   - **Title:** Solubilized derivatives of perylenetetracarboxylic dianhydride (PTCDA) adsorbed on highly oriented pyrolytic graphite. Russell, J. C., Blunt, M. O., Goretzki, G., Phillips, A. G., Champness, N. R., & Beton, P. H. (2010). Langmuir, 26(6), 3972–3974. https://doi.org/10.1021/LA903335V
   - **Authors:** Supramolecular Assemblies Formed on an Epitaxial Graphene Superstructure. Pollard, A. J., Perkins, E. W., Smith, N. A., Saywell, A., Goretzki, G., Phillips, A. G., Argent, S. P., Sachdev, H., Müller, F., Hüfner, S., Gsell, S., Fischer, M., Schreck, M., Osterwalder, J., Greber, T., Berner, S., Champness, N. R., Beton, P. H., Pollard, A. J., … Schreck,
   - **Journal:** Angewandte Chemie International Edition, 49(10), 1794–1799
   - **Link:** https://doi.org/10.1002/ANIE.200905503
   - **Validation Status:** [ ] Not Checked

19. **[2010-019]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Tailoring pores for guest entrapment in a unimolecular surface self-assembled hydrogen bonded network. Phillips, A. G., Perdigão, L. M. A., Beton, P. H., & Champness, N. R. (2010). Chemical Communications, 46(16), 2775–2777. https://doi.org/10.1039/B926824C
   - **Authors:** NO AUTHORS
   - **Journal:** Chemical Communications, 46(38), 7157–7159
   - **Link:** https://doi.org/10.1039/C0CC01810D
   - **Validation Status:** [ ] Not Checked

20. **[2010-020]**
   - **Title:** Theoretical and experimental comparison of SnPc, PbPc, and CoPc adsorption on Ag(111).
   - **Authors:** Baran, J. D., Larsson, J. A., Woolley, R. A. J., Cong, Y., Moriarty, P.
   - **Journal:** Physical Review B – Condensed Matter and Materials Physics, 81(7)
   - **Link:** https://doi.org/10.1103/PHYSREVB.81.075413
   - **Validation Status:** [ ] Not Checked

21. **[2010-021]**
   - **Title:** Tuning perpendicular magnetic anisotropy in (Ga,Mn)(As,P) by thermal annealing.
   - **Authors:** Casiraghi, A., Rushforth, A. W., Wang, M., Farley, N. R. S., Wadley, P., Hall, J. L., Staddon, C. R., Edmonds, K. W., Campion, R. P., Foxon,
   - **Journal:** Applied Physics Letters, 97(12), 122504–122504
   - **Link:** https://doi.org/10.1063/1.3491841/810395
   - **Validation Status:** [ ] Not Checked

22. **[2010-022]**
   - **Title:** Valence-state model of strain-dependent MnL2,3 x-ray magnetic circular dichroism from ferromagnetic semiconductors. Van Der Laan, G., Edmonds, K. W., Arenholz, E., Farley, N. R. S., & Gallagher, B. L. (2010). Physical Review B – Condensed Matter and Materials Physics, 81(21), 214422–214422. https://doi.org/10.1103/PHYSREVB.81.214422
   - **Authors:** Visualization of static Jahn-Teller effects in the fullerene anion C 60 -. Hands, I. D., Dunn, J. L., & Bates, C. A. (2010b). Physical Review B – Condensed Matter and Materials Physics, 82(15). https://doi.org/10.1103/PHYSREVB.82.155425 X-ray absorption and photoemission spectroscopy of zinc protoporphyrin adsorbed on rutile TiO2 (110)
   - **Journal:** Journal of Chemical Physics, 132(8), 84703–84703
   - **Link:** https://doi.org/10.1063/1.3336747/188746
   - **Validation Status:** [ ] Not Checked


### 2009 (10 publications)

1. **[2009-001]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** A low field technique for measuring magnetic and magnetoresistance anisotropy coefficients applied to (Ga,Mn)As. Haigh, J. A., Rushforth, A. W., King, C. S., Edmonds, K. W., Campion, R. P., Foxon, C. T., & Gallagher, B. L. (2009). Applied Physics Letters, 95(23), 232102–232102. https://doi.org/10.1063/1.3268789/120838
   - **Authors:** NO AUTHORS
   - **Journal:** Journal of Chemical Physics, 130(16), 164704–164704
   - **Link:** https://doi.org/10.1063/1.3122685/905013
   - **Validation Status:** [ ] Not Checked

2. **[2009-002]**
   - **Title:** Adsorption of PTCDI on Au(1 1 1): Photoemission and scanning tunnelling microscopy. O’Shea, J. N., Saywell, A., Magnano, G., Perdigão, L. M. A., Satterley, C. J., Beton, P. H., & Dhanak, V. R. (2009). Surface Science, 603(20), 3094–3098. https://doi.org/10.1016/J.SUSC.2009.08.024
   - **Authors:** C60 submonolayers on the Si(1 1 1)-(7 × 7) surface: Does a mixture of physisorbed and chemisorbed states exist? Gangopadhyay, S., Woolley, R. A. J., Danza, R., Phillips, M. A.,
   - **Journal:** Surface Science, 603(18), 2896–2901
   - **Link:** https://doi.org/10.1016/J.SUSC.2009.07.043
   - **Validation Status:** [ ] Not Checked

3. **[2009-003]**
   - **Title:** Direct measurement of electrical conductance through a self-assembled molecular layer.
   - **Authors:** Song, F., Wells, J. W., Handrup, K., Li, Z. S., Bao, S. N., Schulte, K., Ahola-Tuomi, M., Mayor, L. C., Swarbrick, J. C., Perkins, E. W.,
   - **Journal:** Nature Nanotechnology 2009 4:6, 4(6), 373–376
   - **Link:** https://doi.org/10.1038/nnano.2009.82
   - **Validation Status:** [ ] Not Checked

4. **[2009-004]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Dynamic scanning probe microscopy of adsorbed molecules on graphite. Berdunov, N., Pollard, A. J., & Beton, P. H. (2009). Applied Physics Letters, 94(4), 43110–43110. https://doi.org/10.1063/1.3075054/337816
   - **Authors:** NO AUTHORS
   - **Journal:** Langmuir, 25(4), 2278–2281
   - **Link:** https://doi.org/10.1021/LA8035314
   - **Validation Status:** [ ] Not Checked

5. **[2009-005]**
   - **Title:** Formation of monolayer graphene by annealing sacrificial nickel thin films.
   - **Authors:** Pollard, A. J., Nair, R. R., Sabki, S. N., Staddon, C. R., Perdigao, L. M. A., Hsu, C. H., Garfitt, J. M., Gangopadhyay, S., Gleeson, H. F.,
   - **Journal:** Journal of Physical Chemistry C, 113(38), 16565–16567
   - **Link:** https://doi.org/10.1021/JP906066Z
   - **Validation Status:** [ ] Not Checked

6. **[2009-006]**
   - **Title:** How Does Graphene Grow? Easy Access to Well-Ordered Graphene Films.
   - **Authors:** Müller, F., Sachdev, H., Hüfner, S., Pollard, A. J., Perkins, E. W., Russell, J. C., Beton, P. H., Gsell, S., Fischer, M., Schreck, M., &
   - **Journal:** Small, 5(20), 2291–2296
   - **Link:** https://doi.org/10.1002/SMLL.200900158
   - **Validation Status:** [ ] Not Checked

7. **[2009-007]**
   - **Title:** Langmuir–Blodgett films of C60 and C60O on Silicon: Islands, rings and grains. Yan, C., Dybek, A., Hanson, C., Schulte, K., Cafolla, A. A., Dennis, J., & Moriarty, P. (2009). Thin Solid Films, 517(5), 1650–1654. https://doi.org/10.1016/J.TSF.2008.10.015
   - **Authors:** Manipulation of the magnetic configuration of (Ga,Mn)As nanostructures. Haigh, J. A., Wang, M., Rushforth, A. W., Ahmad, E., Edmonds, K. W.,
   - **Journal:** Applied Physics Letters, 95(6), 62502–62502
   - **Link:** https://doi.org/10.1063/1.3200242/338274
   - **Validation Status:** [ ] Not Checked

8. **[2009-008]**
   - **Title:** Microscopic mechanism of the noncrystalline anisotropic magnetoresistance in (Ga,Mn)As. Výborný, K., Kučera, J., Sinova, J., Rushforth, A. W., Gallagher, B. L., & Jungwirth, T. (2009). Physical Review B – Condensed Matter and Materials Physics, 80(16), 165204–165204. https://doi.org/10.1103/PHYSREVB.80.165204
   - **Authors:** Modelling approaches to the dewetting of evaporating thin films of nanoparticle suspensions. Thiele, U., Vancea, I., Archer, A. J., Robbins, M. J., Frastia, L., Stannard, A., Pauliac-Vaujour, E., Martin, C. P., Blunt, M. O., &
   - **Journal:** Journal of Physics: Condensed Matter, 21(26), 264016–264016
   - **Link:** https://doi.org/10.1088/0953-8984/21/26/264016
   - **Validation Status:** [ ] Not Checked

9. **[2009-009]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Physica Status Solidi (b), 246(7), 1435–1439. https://doi.org/10.1002/PSSB.200945209
   - **Authors:** NO AUTHORS
   - **Journal:** Applied Physics Letters, 95(6), 63112–63112
   - **Link:** https://doi.org/10.1063/1.3197595/338392
   - **Validation Status:** [ ] Not Checked

10. **[2009-010]**
   - **Title:** The origin and control of the sources of AMR in (Ga,Mn)As devices.
   - **Authors:** Rushforth, A. W., Výborný, K., King, C. S., Edmonds, K. W., Campion, R. P., Foxon, C. T., Wunderlich, J., Irvine, A. C., Novák, V., Olejník, K., Kovalev, A. A., Sinova, J., Jungwirth, T., & Gallagher, B. L. (2009a). Journal of Magnetism and Magnetic Materials, 321(8), 1001–1008. https://doi.org/10.1016/J.JMMM.2008.04.070 Toward a low-voltage multiferroic transistor: Magnetic (Ga,Mn)As under ferroelectric control. Riester, S. W. E., Stolichnov, I., Trodahl, H. J., Setter, N., Rushforth, A. W., Edmonds, K. W., Campion, R. P., Foxon, C. T.,
   - **Journal:** Applied Physics Letters, 94(6)
   - **Link:** https://doi.org/10.1063/1.3076107/120976
   - **Validation Status:** [ ] Not Checked


### 2008 (23 publications)

1. **[2008-001]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** A compact combined ultrahigh vacuum scanning tunnelling microscope (UHV STM) and near-field optical microscope. Woolley, R. A. J., Hayton, J. A., Cavill, S., Ma, J., Beton, P. H., & Moriarty, P. (2008). Measurement Science and Technology, 19(4), 045301–045301. https://doi.org/10.1088/0957-0233/19/4/045301
   - **Authors:** NO AUTHORS
   - **Journal:** Applied Physics Letters, 93(13), 132103–132103
   - **Link:** https://doi.org/10.1063/1.2992200/335885
   - **Validation Status:** [ ] Not Checked

2. **[2008-002]**
   - **Title:** An extensive comparison of anisotropies in MBE grown (Ga,Mn)As material.
   - **Authors:** Gould, C., Mark, S., Pappert, K., Dengel, R. G., Wenisch, J., Campion, R. P., Rushforth, A. W., Chiba, D., Li, Z., Liu, X., Van Roy, W., Ohno, H., Furdyna, J. K., Gallagher, B., Brunner, K., Schmidt, G., &
   - **Journal:** New Journal of Physics, 10(5), 055007–055007
   - **Link:** https://doi.org/10.1088/1367-2630/10/5/055007
   - **Validation Status:** [ ] Not Checked

3. **[2008-003]**
   - **Title:** C 1s photoemission and shake-up features of (C59N)2. Schulte, K., Wang, L., Prassides, K., Tagmatarchis, N., & Moriarty, P. J. (2008). Journal of Physics: Conference Series, 100(7), 072024–072024. https://doi.org/10.1088/1742-6596/100/7/072024
   - **Authors:** Compositional dependence of ferromagnetism in (Al,Ga,Mn)As magnetic semiconductors. Rushforth, A. W., Farley, N. R. S., Campion, R. P., Edmonds, K. W.,
   - **Journal:** Physical Review B – Condensed Matter and Materials Physics, 78(8), 085209–085209
   - **Link:** https://doi.org/10.1103/PHYSREVB.78.085209
   - **Validation Status:** [ ] Not Checked

4. **[2008-004]**
   - **Title:** Constrained Molecular Manipulation Mediated by Attractive and Repulsive Tip–Adsorbate Forces. Martsinovich, N., Kantorovich, L., Fawcett, R. H. J., Humphry, M. J., & Beton, P. H. (2008). Small, 4(6), 765–769. https://doi.org/10.1002/SMLL.200700580
   - **Authors:** Curie point singularity in the temperature derivative of resistivity in (Ga,Mn)As. Novák, V., Olejník, K., Wunderlich, J., Cukr, M., Výborný, K., Rushforth, A. W., Edmonds, K. W., Campion, R. P., Gallagher, B. L.,
   - **Journal:** Physical Review Letters, 101(7), 077201–077201
   - **Link:** https://doi.org/10.1103/PHYSREVLETT.101.077201
   - **Validation Status:** [ ] Not Checked

5. **[2008-005]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Physical Review Letters, 100(4), 047202–047202. https://doi.org/10.1103/PHYSREVLETT.100.047202
   - **Authors:** NO AUTHORS
   - **Journal:** Journal of Physical Chemistry C, 112(39), 15195–15203
   - **Link:** https://doi.org/10.1021/JP803399D
   - **Validation Status:** [ ] Not Checked

6. **[2008-006]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Electrospray deposition of C60 on a hydrogen-bonded supramolecular network. Saywell, A., Magnano, G., Satterley, C. J., Perdigão, L. M. A., Champness, N. R., Beton, P. H., & O’Shea, J. N. (2008). Journal of Physical Chemistry C, 112(20), 7706–7709. https://doi.org/10.1021/JP7119944
   - **Authors:** NO AUTHORS
   - **Journal:** Journal of Physics: Conference Series, 100(1), 012017–012017
   - **Link:** https://doi.org/10.1088/1742-6596/100/1/012017
   - **Validation Status:** [ ] Not Checked

7. **[2008-007]**
   - **Title:** Fingering instabilities in dewetting nanofluids.
   - **Authors:** Pauliac-Vaujour, E., Stannard, A., Martin, C. P., Blunt, M. O.,
   - **Journal:** Physical Review Letters, 100(17)
   - **Link:** https://doi.org/10.1103/PHYSREVLETT.100.176102
   - **Validation Status:** [ ] Not Checked

8. **[2008-008]**
   - **Title:** Formation of an ordered pattern of Bi nanolines on InAs(100) by self-assembly.
   - **Authors:** Ahola-Tuomi, M., Laukkanen, P., Punkkinen, M. P. J., Perälä, R. E.,
   - **Journal:** Applied Physics Letters, 92(1), 21–21
   - **Link:** https://doi.org/10.1063/1.2831691/913486
   - **Validation Status:** [ ] Not Checked

9. **[2008-009]**
   - **Title:** Front instabilities in evaporatively dewetting nanofluids. Vancea, I., Thiele, U., Pauliac-Vaujour, E., Stannard, A., Martin, C. P., Blunt, M. O., & Moriarty, P. J. (2008). Physical Review E – Statistical, Nonlinear, and Soft Matter Physics, 78(4). https://doi.org/10.1103/PHYSREVE.78.041601
   - **Authors:** Functionalized Supramolecular Nanoporous Arrays for Surface Templating. Perdigão, L. M. A., Saywell, A., Fontes, G. N., Staniec, P. A., Goretzki, G., Phillips, A. G., Champness, N. R., & Beton, P. H.
   - **Journal:** Chemistry – A European Journal, 14(25), 7600–7607
   - **Link:** https://doi.org/10.1002/CHEM.200800476
   - **Validation Status:** [ ] Not Checked

10. **[2008-010]**
   - **Title:** Huge tunnelling anisotropic magnetoresistance in (Ga,Mn)As nanoconstrictions.
   - **Authors:** Giddings, A. D., Makarovsky, O. N., Khalid, M. N., Yasin, S., Edmonds, K. W., Campion, R. P., Wunderlich, J., Jungwirth, T., Williams, D. A.,
   - **Journal:** New Journal of Physics, 10(8), 085004–085004
   - **Link:** https://doi.org/10.1088/1367-2630/10/8/085004
   - **Validation Status:** [ ] Not Checked

11. **[2008-011]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Insulin fibril nucleation: The role of prefibrillar aggregates. Smith, M. I., Sharp, J. S., & Roberts, C. J. (2008). Biophysical Journal, 95(7), 3400–3406. https://doi.org/10.1529/biophysj.108.131482
   - **Authors:** NO AUTHORS
   - **Journal:** Macromolecules, 41(13), 4811–4816
   - **Link:** https://doi.org/10.1021/MA8001593
   - **Validation Status:** [ ] Not Checked

12. **[2008-012]**
   - **Title:** Lithographically and electrically controlled strain effects on anisotropic magnetoresistance in (Ga,Mn)As.
   - **Authors:** De Ranieri, E., Rushforth, A. W., Výborný, K., Rana, U., Ahmad, E., Campion, R. P., Foxon, C. T., Gallagher, B. L., Irvine, A. C.,
   - **Journal:** New Journal of Physics, 10(6), 065003–065003
   - **Link:** https://doi.org/10.1088/1367-2630/10/6/065003
   - **Validation Status:** [ ] Not Checked

13. **[2008-013]**
   - **Title:** Loss of long-range magnetic order in a nanoparticle assembly due to random anisotropy.
   - **Authors:** Binns, C., Howes, P. B., Baker, S. H., Marchetto, H., Potenza, A., Steadman, P., Dhesi, S. S., Roy, M., Everard, M. J., & Rushforth, A.
   - **Journal:** Journal of Physics: Condensed Matter, 20(5), 055213–055213
   - **Link:** https://doi.org/10.1088/0953-8984/20/5/055213
   - **Validation Status:** [ ] Not Checked

14. **[2008-014]**
   - **Title:** Magnetic properties of sol-gel-derived doped ZnO as a potential ferromagnetic semiconductor: A synchrotron-based study.
   - **Authors:** Farley, N. R. S., Edmonds, K. W., Freeman, A. A., Van Der Laan, G.,
   - **Journal:** New Journal of Physics, 10(5), 055012–055012
   - **Link:** https://doi.org/10.1088/1367-2630/10/5/055012
   - **Validation Status:** [ ] Not Checked

15. **[2008-015]**
   - **Title:** Magnetic reversal under external field and current-driven domain wall motion in (Ga,Mn)As: Influence of extrinsic pinning.
   - **Authors:** Wang, K. Y., Irvine, A. C., Wunderlich, J., Edmonds, K. W., Rushforth, A. W., Campion, R. P., Foxon, C. T., Williams, D. A., & Gallagher,
   - **Journal:** New Journal of Physics, 10(8), 085007–085007
   - **Link:** https://doi.org/10.1088/1367-2630/10/8/085007
   - **Validation Status:** [ ] Not Checked

16. **[2008-016]**
   - **Title:** Molecular beam epitaxy grown (Ga,Mn)(As,P) with perpendicular to plane magnetic easy axis.
   - **Authors:** Rushforth, A. W., Wang, M., Farley, N. R. S., Campion, R. P., Edmonds,
   - **Journal:** Journal of Applied Physics, 104(7), 73908–73908
   - **Link:** https://doi.org/10.1063/1.2991355/146177
   - **Validation Status:** [ ] Not Checked

17. **[2008-017]**
   - **Title:** Molecular damage in bi-isonicotinic acid adsorbed on rutile TiO2(1 1 0). O’Shea, J. N., Taylor, J. B., Mayor, L. C., Swarbrick, J. C., & Schnadt, J. (2008). Surface Science, 602(9), 1693–1698. https://doi.org/10.1016/J.SUSC.2008.03.005
   - **Authors:** Nanoscale Characterisation of MBE-Grown GaMnN/(001) GaAs. Fay, M. W., Han, Y., Novikov, S. V., Edmonds, K. W., Gallagher, B. L.,
   - **Journal:** Microscopy of Semiconducting Materials 2007, 103–106
   - **Link:** https://doi.org/10.1007/978-1-4020-8615-1_23
   - **Validation Status:** [ ] Not Checked

18. **[2008-018]**
   - **Title:** Non-volatile ferroelectric control of ferromagnetism in (Ga,Mn)As.
   - **Authors:** Stolichnov, I., Riester, S. W. E., Trodahl, H. J., Setter, N., Rushforth, A. W., Edmonds, K. W., Campion, R. P., Foxon, C. T.,
   - **Journal:** Nature Materials 2008 7:6, 7(6), 464–467
   - **Link:** https://doi.org/10.1038/nmat2185
   - **Validation Status:** [ ] Not Checked

19. **[2008-019]**
   - **Title:** Photoemission, resonant photoemission,
   - **Authors:** and x-ray absorption of a Ru(II) complex adsorbed on rutile TiO2(110)
   - **Journal:** Journal of Chemical Physics, 129(11), 114701–114701
   - **Link:** https://doi.org/10.1063/1.2975339/296017
   - **Validation Status:** [ ] Not Checked

20. **[2008-020]**
   - **Title:** Random tiling and topological defects in a two-dimensional molecular network.
   - **Authors:** Blunt, M. O., Russell, J. C., Giménez-López, M. D. C., Garrahan, J. P.,
   - **Journal:** Science, 322(5904), 1077–1081
   - **Link:** https://doi.org/10.1126/SCIENCE.1163338
   - **Validation Status:** [ ] Not Checked

21. **[2008-021]**
   - **Title:** Reclaiming academia from post-academia. Moriarty, P. (2008). Nature Nanotechnology 2008 3:2, 3(2), 60–62. https://doi.org/10.1038/nnano.2008.11
   - **Authors:** Role of interaction anisotropy in the formation and stability of molecular templates. Weber, U. K., Burlakov, V. M., Perdigão, L. M. A., Fawcett, R. H. J., Beton, P. H., Champness, N. R., Jefferson, J. H., Briggs, G. A. D.,
   - **Journal:** Physical Review Letters, 100(15)
   - **Link:** https://doi.org/10.1103/PHYSREVLETT.100.156101
   - **Validation Status:** [ ] Not Checked

22. **[2008-022]**
   - **Title:** Strain dependence of the Mn anisotropy in ferromagnetic semiconductors observed by x-ray magnetic circular dichroism. Edmonds, K. W., Van Der Laan, G., Farley, N. R. S., Arenholz, E., Campion, R. P., Foxon, C. T., & Gallagher, B. L. (2008). Physical Review B – Condensed Matter and Materials Physics, 77(11), 113205–113205. https://doi.org/10.1103/PHYSREVB.77.113205
   - **Authors:** Valence band orbital polarization in III-V ferromagnetic semiconductors. Freeman, A. A., Edmonds, K. W., Van Der Laan, G., Campion, R. P., Rushforth, A. W., Farley, N. R. S., Johal, T. K., Foxon, C. T.,
   - **Journal:** Physical Review B – Condensed Matter and Materials Physics, 77(7), 073304–073304
   - **Link:** https://doi.org/10.1103/PHYSREVB.77.073304
   - **Validation Status:** [ ] Not Checked

23. **[2008-023]**
   - **Title:** Voltage control of magnetocrystalline anisotropy in ferromagnetic- semiconductor-piezoelectric hybrid structures.
   - **Authors:** Rushforth, A. W., De Ranieri, E., Zemen, J., Wunderlich, J., Edmonds, K. W., King, C. S., Ahmad, E., Campion, R. P., Foxon, C. T., Gallagher,
   - **Journal:** Physical Review B – Condensed Matter and Materials Physics, 78(8), 085314–085314
   - **Link:** https://doi.org/10.1103/PHYSREVB.78.085314
   - **Validation Status:** [ ] Not Checked


### 2007 (12 publications)

1. **[2007-001]**
   - **Title:** Adsorption and charge transfer dynamics of bi-isonicotinic acid on Au(111). Ben Taylor, J., Mayor, L. C., Swarbrick, J. C., O’Shea, J. N., Isvoranu, C., & Schnadt, J. (2007). Journal of Chemical Physics, 127(13), 134707–134707. https://doi.org/10.1063/1.2781510/567088
   - **Authors:** Anisotropic magnetoresistance components in (Ga,Mn)As. Rushforth, A. W., Výborný, K., King, C. S., Edmonds, K. W., Campion, R. P., Foxon, C. T., Wunderlich, J., Irvine, A. C., Vašek, P., Novák, V.,
   - **Journal:** Physical Review Letters, 99(14), 147207–147207
   - **Link:** https://doi.org/10.1103/PHYSREVLETT.99.147207
   - **Validation Status:** [ ] Not Checked

2. **[2007-002]**
   - **Title:** Character of states near the Fermi level in (Ga,Mn)As: Impurity to valence band crossover.
   - **Authors:** Jungwirth, T., Sinova, J., MacDonald, A. H., Gallagher, B. L., Novák, V., Edmonds, K. W., Rushforth, A. W., Campion, R. P., Foxon, C. T., Eaves, L., Olejník, E., Mašek, J., Yang, S. R. E., Wunderlich, J.,
   - **Journal:** Physical Review B – Condensed Matter and Materials Physics, 76(12), 125206–125206
   - **Link:** https://doi.org/10.1103/PHYSREVB.76.125206
   - **Validation Status:** [ ] Not Checked

3. **[2007-003]**
   - **Title:** Charge transport in cellular nanoparticle networks: Meandering through nanoscale mazes.
   - **Authors:** Blunt, M. O., Šuvakov, M., Pulizzi, F., Martin, C. P., Pauliac-Vaujour, E., Stannard, A., Rushforth, A. W., Tadić, B., & Moriarty, P.
   - **Journal:** Nano Letters, 7(4), 855–860
   - **Link:** https://doi.org/10.1021/NL061656E
   - **Validation Status:** [ ] Not Checked

4. **[2007-004]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Charge-transfer dynamics at model metal—Organic solar cell surfaces. Taylor, J. B., Mayor, L. C., Swarbrick, J. C., O’Shea, J. N., & Schnadt, J. (2007). Journal of Physical Chemistry C, 111(44), 16646–16655. https://doi.org/10.1021/JP075366D
   - **Authors:** NO AUTHORS
   - **Journal:** Physical Review B – Condensed Matter and Materials Physics, 76(24)
   - **Link:** https://doi.org/10.1103/PHYSREVB.76.245402
   - **Validation Status:** [ ] Not Checked

5. **[2007-005]**
   - **Title:** Coercivity enlargement in (Ga,Mn)As thin films with small amount of MnAs nanoclusters.
   - **Authors:** Sawicki, M., Wang, K. Y., Edmonds, K. W., Campion, R. P., Rushforth, A.
   - **Journal:** Journal of Magnetism and Magnetic Materials, 310(2), 2126–2128
   - **Link:** https://doi.org/10.1016/J.JMMM.2006.10.934
   - **Validation Status:** [ ] Not Checked

6. **[2007-006]**
   - **Title:** Depth dependence of the Mn valence and Mn-Mn coupling in (Ga,Mn)N.
   - **Authors:** Freeman, A. A., Edmonds, K. W., Farley, N. R. S., Novikov, S. V., Campion, R. P., Foxon, C. T., Gallagher, B. L., Sarigiannidou, E., &
   - **Journal:** Physical Review B – Condensed Matter and Materials Physics, 76(8), 081201–081201
   - **Link:** https://doi.org/10.1103/PHYSREVB.76.081201
   - **Validation Status:** [ ] Not Checked

7. **[2007-007]**
   - **Title:** Domain imaging and domain wall propagation in (Ga, Mn)As thin films with tensile strain.
   - **Authors:** Wang, K. Y., Rushforth, A. W., Grant, V. A., Campion, R. P., Edmonds, K. W., Staddon, C. R., Foxon, C. T., Gallagher, B. L., Wunderlich, J.,
   - **Journal:** Journal of Applied Physics, 101(10), 106101–106101
   - **Link:** https://doi.org/10.1063/1.2732406/926090
   - **Validation Status:** [ ] Not Checked

8. **[2007-008]**
   - **Title:** Electrospray deposition of carbon nanotubes in vacuum. O’Shea, J. N., Taylor, J. B., Swarbrick, J. C., Magnano, G., Mayor, L. C., & Schulte, K. (2007). Nanotechnology, 18(3), 035707–035707. https://doi.org/10.1088/0957-4484/18/3/035707
   - **Authors:** Electrospray deposition of fullerenes in ultra-high vacuum: In situ scanning tunnelingmicroscopy and photoemission spectroscopy. Satterley, C. J., Perdigão, L. M. A., Saywell, A., Magnano, G., Rienzo, A., Mayor, L. C., Dhanak, V. R., Beton, P. H., & O’Shea, J. N.
   - **Journal:** Nanotechnology, 18(45), 455304–455304
   - **Link:** https://doi.org/10.1088/0957-4484/18/45/455304
   - **Validation Status:** [ ] Not Checked

9. **[2007-009]**
   - **Title:** Growth front nucleation of rubrene thin films for high mobility organic transistors. Hsu, C. H., Deng, J., Staddon, C. R., & Beton, P. H. (2007). Applied Physics Letters, 91(19), 193505–193505. https://doi.org/10.1063/1.2805030/119057
   - **Authors:** Hierarchical Organisation on a Two-Dimensional Supramolecular Network. Staniec, P. A., A Perdig, L. M., Saywell, A., Champness, N. R., Beton, P. H., Staniec, P. A., A Perdig, L. M., Saywell, A., Beton, P. H., &
   - **Journal:** ChemPhysChem, 8(15), 2177–2181
   - **Link:** https://doi.org/10.1002/CPHC.200700513
   - **Validation Status:** [ ] Not Checked

10. **[2007-010]**
   - **Title:** Honeycomb Networks and Chiral Superstructures Formed by Cyanuric Acid and Melamine on Au(111). Staniec, P. A., Perdigão, L. M. A., Rogers, B. L., Champness, N. R., & Beton, P. H. (2007). https://doi.org/10.1021/JP064964
   - **Authors:** Local control of magnetocrystalline anisotropy in (Ga,Mn)As microdevices: Demonstration in current-induced switching. Wunderlich, J., Irvine, A. C., Zemen, J., Holý, V., Rushforth, A. W., De Ranieri, E., Rana, U., Výborný, K., Sinova, J., Foxon, C. T., Campion, R. P., Williams, D. A., Gallagher, B. L., & Jungwirth, T.
   - **Journal:** Physical Review B – Condensed Matter and Materials Physics, 76(5), 054424–054424
   - **Link:** https://doi.org/10.1103/PHYSREVB.76.054424
   - **Validation Status:** [ ] Not Checked

11. **[2007-011]**
   - **Title:** Measuring the hole chemical potential in ferromagnetic Ga1-x Mnx AsGaAs heterostructures by photoexcited resonant tunneling. Thomas, O., Makarovsky, O., Pataǹ, A., Eaves, L., Campion, R. P., Edmonds, K. W., Foxon, C. T., & Gallagher, B. L. (2007). Applied Physics Letters, 90(8). https://doi.org/10.1063/1.2709624/129029
   - **Authors:** Microstructural characterization of low-temperature grown GaMnN on GaAs(0 0 1) substrates by plasma-assisted MBE. Han, Y., Fay, M. W., Brown, P. D., Novikov, S. V., Edmonds, K. W.,
   - **Journal:** Semiconductor Science and Technology, 22(10), 1131–1131
   - **Link:** https://doi.org/10.1088/0268-1242/22/10/009
   - **Validation Status:** [ ] Not Checked

12. **[2007-012]**
   - **Title:** Secondary magnetic phases in (Ga,Mn)As determined by x-ray magnetic circular dichroism.
   - **Authors:** Edmonds, K. W., Freeman, A. A., Farley, N. R. S., Wang, K. Y., Campion, R. P., Gallagher, B. L., Foxon, C. T., Van Der Laan, G., &
   - **Journal:** Journal of Applied Physics, 102(2), 23902–23902
   - **Link:** https://doi.org/10.1063/1.2756046/380300
   - **Validation Status:** [ ] Not Checked


### 2006 (11 publications)

1. **[2006-001]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** The growth of high quality GaMnAs layers and heterostructures by molecular beam epitaxy. Campion, R. P., Grant, V. A., Edmonds, K. W., Gallagher, B. L., & Foxon, C. T. (2007). Physica Status Solidi (b), 244(8), 2944–2949. https://doi.org/10.1002/PSSB.200675624
   - **Authors:** NO AUTHORS
   - **Journal:** Physica Status Solidi c, 3(12), 4078–4081
   - **Link:** https://doi.org/10.1002/PSSC.200672836
   - **Validation Status:** [ ] Not Checked

2. **[2006-002]**
   - **Title:** Angle-dependent X-ray magnetic circular dichroism from (Ga,Mn)As: Anisotropy and identification of hybridized states.
   - **Authors:** Edmonds, K. W., Van Der Laan, G., Freeman, A. A., Farley, N. R. S., Johal, T. K., Campion, R. P., Foxon, C. T., Gallagher, B. L., &
   - **Journal:** Physical Review Letters, 96(11), 117207–117207
   - **Link:** https://doi.org/10.1103/PHYSREVLETT.96.117207
   - **Validation Status:** [ ] Not Checked

3. **[2006-003]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Bimolecular networks and supramolecular traps on Au(111). Perdigão, L. M. A., Perking, E. W., Ma, J., Staniec, P. A., Rogers, B. L., Champness, N. R., & Beton, P. H. (2006). Journal of Physical Chemistry B, 110(25), 12539–12542. https://doi.org/10.1021/JP060062X
   - **Authors:** NO AUTHORS
   - **Journal:** Philosophical Magazine Letters, 86(6), 395–401
   - **Link:** https://doi.org/10.1080/09500830600847087
   - **Validation Status:** [ ] Not Checked

4. **[2006-004]**
   - **Title:** Control of coercivities in (Ga,Mn)As thin films by small concentrations of MnAs nanoclusters.
   - **Authors:** Wang, K. Y., Sawicki, M., Edmonds, K. W., Campion, R. P., Rushforth, A. W., Freeman, A. A., Foxon, C. T., Gallagher, B. L., & Dietl, T.
   - **Journal:** Applied Physics Letters, 88(2), 1–3
   - **Link:** https://doi.org/10.1063/1.2162856/921368
   - **Validation Status:** [ ] Not Checked

5. **[2006-005]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Dianhydride-amine hydrogen bonded perylene tetracarboxylic dianhydride and tetraaminobenzene rows. Ma, J., Rogers, B. L., Humphry, M. J., Ring, D. J., Goretzki, G., Champness, N. R., & Beton, P. H. (2006). Journal of Physical Chemistry B, 110(25), 12207–12210. https://doi.org/10.1021/JP057304Y
   - **Authors:** NO AUTHORS
   - **Journal:** Applied Surface Science, 252(15), 5622–5626
   - **Link:** https://doi.org/10.1016/J.APSUSC.2005.12.025
   - **Validation Status:** [ ] Not Checked

6. **[2006-006]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Experimental and theoretical identification of adenine monolayers on Ag-terminated Si(111). Perdigão, L. M. A., Staniec, P. A., Champness, N. R., Kelly, R. E. A., Kantorovich, L. N., & Beton, P. H. (2006). Physical Review B – Condensed Matter and Materials Physics, 73(19). https://doi.org/10.1103/PHYSREVB.73.195423
   - **Authors:** NO AUTHORS
   - **Journal:** Physical Review B – Condensed Matter and Materials Physics, 73(8), 081305–081305
   - **Link:** https://doi.org/10.1103/PHYSREVB.73.081305
   - **Validation Status:** [ ] Not Checked

7. **[2006-007]**
   - **Title:** Ferromagnetic nanodevices based on (Ga,Mn)As. Edmonds, K. W. (2006). Current Opinion in Solid State and Materials Science, 10(2), 108–113. https://doi.org/10.1016/J.COSSMS.2006.11.005
   - **Authors:** Giant anisotropy in x-ray magnetic linear dichroism in (Ga,Mn)As. Freeman, A. A., Edmonds, K. W., Van Der Laan, G., Farley, N. R. S., Johal, T. K., Arenholz, E., Campion, R. P., Foxon, C. T., &
   - **Journal:** Physical Review B – Condensed Matter and Materials Physics, 73(23), 233303–233303
   - **Link:** https://doi.org/10.1103/PHYSREVB.73.233303
   - **Validation Status:** [ ] Not Checked

8. **[2006-008]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Hydrogen-bonded PTCDA-melamine networks and mixed phases. Swarbrick, J. C., Rogers, B. L., Champness, N. R., & Beton, P. H. (2006). Journal of Physical Chemistry B, 110(12), 6110–6114. https://doi.org/10.1021/JP056517K
   - **Authors:** NO AUTHORS
   - **Journal:** Physical Review Letters, 97(23)
   - **Link:** https://doi.org/10.1103/PHYSREVLETT.97.236102
   - **Validation Status:** [ ] Not Checked

9. **[2006-009]**
   - **Title:** Lateral translation of covalently bound fullerenes.
   - **Authors:** Humphry, M. J., Beton, P. H., Keeling, D. L., Fawcett, R. H. J., Moriarty, P., Butcher, M. J., Birkett, P. R., Walton, D. R. M., Taylor,
   - **Journal:** Journal of Physics: Condensed Matter, 18(33), S1837–S1837
   - **Link:** https://doi.org/10.1088/0953-8984/18/33/S05
   - **Validation Status:** [ ] Not Checked

10. **[2006-010]**
   - **Title:** Local structure around Mn atoms in cubic (Ga,Mn)N thin films probed by fluorescence extended x-ray absorption fine structure. He, B., Zhang, X., Wei, S., Oyanagi, H., Novikov, S. V., Edmonds, K. W., Foxon, C. T., Zhou, G., & Jia, Y. (2006). Applied Physics Letters, 88(5), 1–3. https://doi.org/10.1063/1.2168228/327939
   - **Authors:** Low-temperature magnetization of (Ga,Mn)As semiconductors. Jungwirth, T., Mašek, J., Wang, K. Y., Edmonds, K. W., Sawicki, M., Polini, M., Sinova, J., MacDonald, A. H., Campion, R. P., Zhao, L. X., Farley, N. R. S., Johal, T. K., Van Der Laan, G., Foxon, C. T., &
   - **Journal:** Physical Review B – Condensed Matter and Materials Physics, 73(16), 165205–165205
   - **Link:** https://doi.org/10.1103/PHYSREVB.73.165205
   - **Validation Status:** [ ] Not Checked

11. **[2006-011]**
   - **Title:** Magnetic domain structure and magnetization reversal in (311)B Ga 0.91Mn0.09As films.
   - **Authors:** Pross, A., Bending, S. J., Wang, K. Y., Edmonds, K. W., Campion, R. P.,
   - **Journal:** Journal of Applied Physics, 99(9), 93908–93908
   - **Link:** https://doi.org/10.1063/1.2199975/294228
   - **Validation Status:** [ ] Not Checked


### 2005 (18 publications)

1. **[2005-001]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Surface self-assembly of the cyanuric acid–melamine hydrogen bonded network. Perdigão, L. M. A., Champness, N. R., & Beton, P. H. (2006). Chemical Communications, 5, 538–540. https://doi.org/10.1039/B514389F
   - **Authors:** NO AUTHORS
   - **Journal:** Physical Review B – Condensed Matter and Materials Physics, 72(8), 085201–085201
   - **Link:** https://doi.org/10.1103/PHYSREVB.72.085201
   - **Validation Status:** [ ] Not Checked

2. **[2005-002]**
   - **Title:** Bond breaking coupled with translation in rolling of covalently bound molecules. Keeling, D. L., Humphry, M. J., Fawcett, R. H. J., Beton, P. H., Hobbs, C., & Kantorovich, L. (2005). Physical Review Letters, 94(14). https://doi.org/10.1103/PHYSREVLETT.94.146104
   - **Authors:** Bulk and surface charge states of K3 C60. Schiessling, J., Kjeldgaard, L., Käämbre, T., Marenne, I., O’Shea, J. N., Schnadt, J., Glover, C. J., Nagasono, M., Nordlund, D., Garnier, M. G., Qian, L., Rubensson, J. E., Rudolf, P., Mårtensson, N., Nordgren,
   - **Journal:** Physical Review B – Condensed Matter and Materials Physics, 71(16)
   - **Link:** https://doi.org/10.1103/PHYSREVB.71.165420
   - **Validation Status:** [ ] Not Checked

3. **[2005-003]**
   - **Title:** (C6H5)5C60H at Si(111) (7×7) and Ag:Si(111) (3×3)R30deg; surfaces.
   - **Authors:** Phillips, M. A., O’Shea, J. N., Birkett, P. R., Purton, J., Kroto, H.
   - **Journal:** Physical Review B – Condensed Matter and Materials Physics, 72(7), 075426–075426
   - **Link:** https://doi.org/10.1103/PHYSREVB.72.075426
   - **Validation Status:** [ ] Not Checked

4. **[2005-004]**
   - **Title:** Determination of the Mn concentration in GaMnAs.
   - **Authors:** Zhao, L. X., Campion, R. P., Fewster, P. F., Martin, R. W., Ber, B. Y., Kovarsky, A. P., Staddon, C. R., Wang, K. Y., Edmonds, K. W., Foxon, C.
   - **Journal:** Semiconductor Science and Technology, 20(5), 369–369
   - **Link:** https://doi.org/10.1088/0268-1242/20/5/008
   - **Validation Status:** [ ] Not Checked

5. **[2005-005]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Microelectronics Journal, 36(3–6), 331–333. https://doi.org/10.1016/J.MEJO.2005.02.110
   - **Authors:** NO AUTHORS
   - **Journal:** Physical Review B – Condensed Matter and Materials Physics, 71(6), 064418–064418
   - **Link:** https://doi.org/10.1103/PHYSREVB.71.064418
   - **Validation Status:** [ ] Not Checked

6. **[2005-006]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** (Ga,Mn)As grown on (311) GaAs substrates: Modified Mn incorporation and magnetic anisotropies. Wang, K. Y., Edmonds, K. W., Zhao, L. X., Sawicki, M., Campion, R. P., Gallagher, B. L., & Foxon, C. T. (2005). Physical Review B – Condensed Matter and Materials Physics, 72(11), 115207–115207. https://doi.org/10.1103/PHYSREVB.72.115207
   - **Authors:** NO AUTHORS
   - **Journal:** Langmuir, 21(5), 2038–2041
   - **Link:** https://doi.org/10.1021/LA047533W
   - **Validation Status:** [ ] Not Checked

7. **[2005-007]**
   - **Title:** In-plane uniaxial anisotropy rotations in (Ga,Mn)As thin films.
   - **Authors:** Sawicki, M., Wang, K. Y., Edmonds, K. W., Campion, R. P., Staddon, C. R., Farley, N. R. S., Foxon, C. T., Papis, E., Kamiñska, E., Piotrowska,
   - **Journal:** Physical Review B – Condensed Matter and Materials Physics, 71(12), 121302–121302
   - **Link:** https://doi.org/10.1103/PHYSREVB.71.121302
   - **Validation Status:** [ ] Not Checked

8. **[2005-008]**
   - **Title:** Intrinsic and extrinsic contributions to the lattice parameter of GaMnAs. Zhao, L. X., Staddon, C. R., Wang, K. Y., Edmonds, K. W., Campion, R. P., Gallagher, B. L., & Foxon, C. T. (2005). Applied Physics Letters, 86(7), 1–3. https://doi.org/10.1063/1.1864238/237763
   - **Authors:** Large tunneling anisotropic magnetoresistance in (Ga,Mn)as nanoconstrictions. Giddings, A. D., Khalid, M. N., Jungwirth, T., Wunderlich, J., Yasin, S., Campion, R. P., Edmonds, K. W., Sinova, J., Ito, K., Wang, K. Y.,
   - **Journal:** Physical Review Letters, 94(12), 127202–127202
   - **Link:** https://doi.org/10.1103/PHYSREVLETT.94.127202
   - **Validation Status:** [ ] Not Checked

9. **[2005-009]**
   - **Title:** Mn doping and p-type conductivity in zinc-blende GaMnN layers grown by molecular beam epitaxy.
   - **Authors:** Novikov, S. V., Edmonds, ; K W, Zhao, ; L X, Giddings, ; A D, Wang, ; K Y, Campion, ; R P, Staddon, ; C R, Fay, ; M W, Han, ; Y, Brown, ; P D, Sawicki, ; M, Gallagher, ; B L, Foxon, ; C T, Edmonds, K. W., Zhao, L. X., Giddings, A. D., Wang, K. Y., Campion, R. P., Staddon, C. R., …
   - **Journal:** Journal of Vacuum Science & Technology B: Microelectronics and Nanometer Structures Processing, Measurement, and Phenomena, 23(3), 1294–1298
   - **Link:** https://doi.org/10.1116/1.1868699
   - **Validation Status:** [ ] Not Checked

10. **[2005-010]**
   - **Title:** Molecular beam epitaxy of p-type cubic GaMnN layers.
   - **Authors:** Foxon, C. T., Novikov, S. V., Zhao, L. X., Edmonds, K. W., Giddings, A. D., Wang, K. Y., Campion, R. P., Staddon, C. R., Fay, M. W., Han, Y.,
   - **Journal:** Journal of Crystal Growth, 278(1–4), 685–689
   - **Link:** https://doi.org/10.1016/J.JCRYSGRO.2004.12.112
   - **Validation Status:** [ ] Not Checked

11. **[2005-011]**
   - **Title:** Molecular orbitals tell the story. O’Shea, J. N. (2005). Science, 310(5747), 453–454. https://doi.org/10.1126/SCIENCE.1119274
   - **Authors:** Phase and molecular orientation in metal-free phthalocyanine films on conducting glass: Characterization of two deposition methods. Alfredsson, Y., Åhlund, J., Nilson, K., Kjeldgaard, L., O’Shea, J. N., Theobald, J., Bao, Z., Mårtensson, N.,
   - **Journal:** Thin Solid Films, 493(1–2), 13–19
   - **Link:** https://doi.org/10.1016/J.TSF.2005.05.012
   - **Validation Status:** [ ] Not Checked

12. **[2005-012]**
   - **Title:** Photoelectron spectroscopy study of Ga1−xMnxAs(0 0 1) surface oxide and low temperature cleaning.
   - **Authors:** Hatfield, S. A., Veal, T. D., McConville, C. F., Bell, G. R., Edmonds,
   - **Journal:** Surface Science, 585(1–2), 66–74
   - **Link:** https://doi.org/10.1016/J.SUSC.2005.04.012
   - **Validation Status:** [ ] Not Checked

13. **[2005-013]**
   - **Title:** Prospects for high temperature ferromagnetism in (Ga,Mn)As semiconductors.
   - **Authors:** Jungwirth, T., Wang, K. Y., Mašek, J., Edmonds, K. W., König, J., Sinova, J., Polini, M., Goncharuk, N. A., MacDonald, A. H., Sawicki, M., Rushforth, A. W., Campion, R. P., Zhao, L. X., Foxon, C. T., &
   - **Journal:** Physical Review B – Condensed Matter and Materials Physics, 72(16), 165204–165204
   - **Link:** https://doi.org/10.1103/PHYSREVB.72.165204
   - **Validation Status:** [ ] Not Checked

14. **[2005-014]**
   - **Title:** P-type conductivity in cubic (Ga,Mn)N thin films.
   - **Authors:** Edmonds, K. W., Novikov, S. V., Sawicki, M., Campion, R. P., Staddon, C. R., Giddings, A. D., Zhao, L. X., Wang, K. Y., Dietl, T., Foxon, C.
   - **Journal:** Applied Physics Letters, 86(15), 1–3
   - **Link:** https://doi.org/10.1063/1.1900924/899192
   - **Validation Status:** [ ] Not Checked

15. **[2005-015]**
   - **Title:** Spin reorientation transition in single-domain (Ga,Mn)as. Wang, K. Y., Sawicki, M., Edmonds, K. W., Campion, R. P., Maat, S., Foxon, C. T., Gallagher, B. L., & Dietl, T. (2005). Physical Review Letters, 95(21), 217204–217204. https://doi.org/10.1103/PHYSREVLETT.95.217204
   - **Authors:** Square, hexagonal, and row phases of PTCDA and PTCDI on Ag-Si(111)√3 × √3R30°. Swarbrick, J. C., Ma, J., Theobald, J. A., Oxtoby, N. S., O’Shea, J. N., Champness, N. R., & Beton, P. H. (2005a). Journal of Physical Chemistry B, 109(24), 12167–12174. https://doi.org/10.1021/JP0508305 Structural characterisation of zinc-blende Ga1−xMnxN epilayers grown by MBE as a function of Ga flux. Han, Y., Fay, M. W., Brown, P. D., Novikov, S. V., Edmonds, K. W., Gallagher, B. L., Campion, R. P., Staddon, C. R., & Foxon, C. T.
   - **Journal:** Journal of Crystal Growth, 284(3–4), 324–334
   - **Link:** https://doi.org/10.1016/J.JCRYSGRO.2005.07.015
   - **Validation Status:** [ ] Not Checked

16. **[2005-016]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Time-resolved light scattering studies of phase separation in thin film semiconducting polymer blends during spin-coating. Jukes, P. C., Heriot, S. Y., Sharp, J. S., & Jones, R. A. L. (2005). Macromolecules, 38(6), 2030–2032. https://doi.org/10.1021/MA0477145
   - **Authors:** NO AUTHORS
   - **Journal:** Applied Physics Letters, 87(21), 1–3
   - **Link:** https://doi.org/10.1063/1.2132525/328386
   - **Validation Status:** [ ] Not Checked

17. **[2005-017]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Well-shielded cerium atoms: Electronic structure of adsorbed Ce@C 82 on Si surfaces. Schulte, K., Wang, L., Moriarty, P. J., Purton, J., Patel, S., Shinohara, H., Kanai, M., & Dennis, T. J. S. (2005). Physical Review B – Condensed Matter and Materials Physics, 71(11). https://doi.org/10.1103/PHYSREVB.71.115437
   - **Authors:** NO AUTHORS
   - **Journal:** Nuclear Instruments and Methods in Physics Research Section A: Accelerators, Spectrometers, Detectors and Associated Equipment, 547(1), 208–215
   - **Link:** https://doi.org/10.1016/J.NIMA.2005.05.026
   - **Validation Status:** [ ] Not Checked

18. **[2005-018]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Effect of sample preparation on the glass-transition of thin polystyrene films. Fakhraai, Z., Sharp, J. S., & Forrest, J. A. (2004). Journal of Polymer Science Part B: Polymer Physics, 42(24), 4503–4507. https://doi.org/10.1002/POLB.20281
   - **Authors:** NO AUTHORS
   - **Journal:** Langmuir, 21(5), 2038–2041
   - **Link:** https://doi.org/10.1021/LA047533W
   - **Validation Status:** [ ] Not Checked


### 2004 (11 publications)

1. **[2004-001]**
   - **Title:** Anisotropic magnetoresistance in a two-dimensional electron gas in a quasirandom magnetic field. Rushforth, A. W., Gallagher, B. L., Main, P. C., Neumann, A. C., Henini, M., Marrows, C. H., & Mickey, B. J. (2004). Physical Review B – Condensed Matter and Materials Physics, 70(19), 1–4. https://doi.org/10.1103/PHYSREVB.70.193313
   - **Authors:** Comment on “X-Ray Studies of the Structure and Electronic Behavior of Alkanethiolate-Capped Gold
   - **Journal:** Physical Review Letters, 92(10)
   - **Link:** https://doi.org/10.1103/PhysRevLett.92.109601
   - **Validation Status:** [ ] Not Checked

2. **[2004-002]**
   - **Title:** Does an Encapsulated Atom ‘feel’ the Effects of Adsorption?: X-ray Standing Wave Spectroscopy of Ce@C82 on Ag(111).
   - **Authors:** Woolley, R. A. J., Schulte, K. H. G., Wang, L., Moriarty, P. J., Cowie,
   - **Journal:** Nano Letters, 4(2), 361–364
   - **Link:** https://doi.org/10.1021/NL035041I
   - **Validation Status:** [ ] Not Checked

3. **[2004-003]**
   - **Title:** Influence of low temperature annealing on the micromagnetic structure of GaMnAs films. Pross, A., Bending, S., Edmonds, K., Campion, R. P., Foxon, C. T., & Gallagher, B. (2004a). Journal of Applied Physics, 95(6), 3225–3227. https://doi.org/10.1063/1.1643197
   - **Authors:** Influence of the Mn interstitial on the magnetic and transport properties of (Ga,Mn)As. Wang, K. Y., Edmonds, K. W., Campion, R. P., Gallagher, B. L., Farley, N. R. S., Foxon, C. T., Sawicki, M., Boguslawski, P., & Dietl, T.
   - **Journal:** Journal of Applied Physics, 95(11), 6512–6514
   - **Link:** https://doi.org/10.1063/1.1669337
   - **Validation Status:** [ ] Not Checked

4. **[2004-004]**
   - **Title:** Insulating surface layer on single crystal K $\mathsf{_{3}}\mathsf{C}\mathsf{_{60}}$.
   - **Authors:** Schiessling, J., Kjeldgaard, L., Käämbre, T., Marenne, I., Qian, L., O’Shea, J. N., Schnadt, J., Garnier, M. G., Nordlund, D., Nagasono, M., Glover, C. J., Rubensson, J. E., Mårtensson, N., Rudolf, P., Nordgren,
   - **Journal:** The European Physical Journal B – Condensed Matter and Complex Systems 2004 41:4, 41(4), 435–438
   - **Link:** https://doi.org/10.1140/EPJB/E2004-00335-2
   - **Validation Status:** [ ] Not Checked

5. **[2004-005]**
   - **Title:** Magnetic domain imaging of ferromagnetic GaMnAs films. Pross, A., Bending, S., Edmonds, K., Campion, R. P., Foxon, C. T., & Gallagher, B. (2004b). Journal of Applied Physics, 95(11), 7399–7401. https://doi.org/10.1063/1.1669113
   - **Authors:** Mn Interstitial Diffusion in (Ga, Mn)As. Edmonds, K. W., Bogusławski, P., Wang, K. Y., Campion, R. P., Novikov, S. N., Farley, N. R. S., Gallagher, B. L., Foxon, C. T., Sawicki, M.,
   - **Journal:** Physical Review Letters, 92(3), 4–4
   - **Link:** https://doi.org/10.1103/PHYSREVLETT.92.037201
   - **Validation Status:** [ ] Not Checked

6. **[2004-006]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Mn L3,2 x-ray absorption from (Ga,Mn)As and (Ga,Mn)N. Edmonds, K. W., Farley, N. R. S., Johal, T. K., Campion, R. P., Gallagher, B. L., Foxon, C. T., & Van Der Laan, G. (2004). Journal of Applied Physics, 95(11), 7166–7168. https://doi.org/10.1063/1.1667419
   - **Authors:** NO AUTHORS
   - **Journal:** The Journal of Chemical Physics, 121(20), 10203–10208
   - **Link:** https://doi.org/10.1063/1.1802292
   - **Validation Status:** [ ] Not Checked

7. **[2004-007]**
   - **Title:** Morphology, structure, and electronic properties of Ce@C82 films on Ag:Si(1 1 1)-(√3 × √3)R30°.
   - **Authors:** Wang, L., Schulte, K., Woolley, R. A. J., Kanai, M., Dennis, T. J. S., Purton, J., Patel, S., Gorovikov, S., Dhanak, V. R., Smith, E. F.,
   - **Journal:** Surface Science, 564(1–3), 156–164
   - **Link:** https://doi.org/10.1016/J.SUSC.2004.06.189
   - **Validation Status:** [ ] Not Checked

8. **[2004-008]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Nanoparticle networks on silicon: Self-organized or disorganized? Martin, C. P., Blunt, M. O., & Moriarty, P. (2004). Nano Letters, 4(12), 2389–2392. https://doi.org/10.1021/NL048536W
   - **Authors:** NO AUTHORS
   - **Journal:** Journal of the American Chemical Society, 126(41), 13212–13213
   - **Link:** https://doi.org/10.1021/JA047417F
   - **Validation Status:** [ ] Not Checked

9. **[2004-009]**
   - **Title:** Noninvasive detection of the evolution of the charge states of a double dot system. Rushforth, A. W., Smith, C. G., Godfrey, M. D., Beere, H. E., Ritchie, D. A., & Pepper, M. (2004a). Physical Review B, 69(11), 113309–113309. https://doi.org/10.1103/PhysRevB.69.113309
   - **Authors:** Non-invasive detection of the ionic and covalent charge states of an isolated double dot system. Rushforth, A. W., Smith, C. G., Godfrey, M. D., Beere, H. E., Ritchie, D. A., & Pepper, M. (2004b). Physica E: Low-Dimensional Systems and Nanostructures, 22(1–3), 522–525. https://doi.org/10.1016/J.PHYSE.2003.12.060
   - **Journal:** Journal of Materials Chemistry, 14(7), 1087–1092
   - **Link:** https://doi.org/10.1039/B313271D
   - **Validation Status:** [ ] Not Checked

10. **[2004-010]**
   - **Title:** Surface effects in Mn L3,2 x-ray absorption spectra from (Ga,Mn)As.
   - **Authors:** Edmonds, K. W., Farley, N. R. S., Campion, R. P., Foxon, C. T., Gallagher, B. L., Johal, T. K., Van Der Laan, G., MacKenzie, M.,
   - **Journal:** Applied Physics Letters, 84(20), 4065–4067
   - **Link:** https://doi.org/10.1063/1.1751619
   - **Validation Status:** [ ] Not Checked

11. **[2004-011]**
   - **Title:** The growth of high quality GaMnAs films by MBE.
   - **Authors:** Foxon, C. T., Campion, R. P., Edmonds, K. W., Zhao, L., Wang, K.,
   - **Journal:** Journal of Materials Science: Materials in Electronics, 15(11), 727–731
   - **Link:** https://doi.org/10.1023/B:JMSE.0000043420.48864.07
   - **Validation Status:** [ ] Not Checked


### 2003 (11 publications)

1. **[2003-001]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** X-ray photoelectron spectroscopy of fluorescein adsorbed on model solar-cell surfaces. O’Shea, J. N., Taylor, J. B., & Smith, E. F. (2004). Surface Science, 548(1–3), 317–323. https://doi.org/10.1016/J.SUSC.2003.11.019
   - **Authors:** NO AUTHORS
   - **Journal:** Physical Review B, 67(12)
   - **Link:** https://doi.org/10.1103/PhysRevB.67.125413
   - **Validation Status:** [ ] Not Checked

2. **[2003-002]**
   - **Title:** Alignment of valence photoemission,
   - **Authors:** x-ray absorption, and substrate density of states for an adsorbate on a
   - **Journal:** Physical Review B, 67(23), 235420–235420
   - **Link:** https://doi.org/10.1103/PhysRevB.67.235420
   - **Validation Status:** [ ] Not Checked

3. **[2003-003]**
   - **Title:** Assembly and processing of hydrogen bond induced supramolecular nanostructures. Keeling, D. L., Oxtoby, N. S., Wilson, C., Humphry, M. J., Champness, N. R., & Beton, P. H. (2003). Nano Letters, 3(1), 9–12. https://doi.org/10.1021/nl025821b
   - **Authors:** Competing interactions of noble metals and fullerenes with the Si(111)7×7 surface. O’Shea, J. N., Phillips, M. A., Taylor, M. D. R., Beton, P. H., Moriarty, P., Kanai, M., Dennis, T. J. S., Dhanak, V. R., Patel, S.,
   - **Journal:** The Journal of Chemical Physics, 119(24), 13046–13052
   - **Link:** https://doi.org/10.1063/1.1628225
   - **Validation Status:** [ ] Not Checked

4. **[2003-004]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Applied Physics Letters, 83(2), 320–322. https://doi.org/10.1063/1.1590433
   - **Authors:** NO AUTHORS
   - **Journal:** Physical Review B, 67(3)
   - **Link:** https://doi.org/10.1103/PhysRevB.67.035309
   - **Validation Status:** [ ] Not Checked

5. **[2003-005]**
   - **Title:** Excited-state charge transfer dynamics in systems of aromatic adsorbates on TiO2 studied with resonant core techniques.
   - **Authors:** Schnadt, J., O’shea, ; J N, Patthey, ; L, Kjeldgaard, ; L, Åhlund, ; J, Nilson, ; K, Schiessling, ; J, Krempaský, ; J, Shi, ; M, Karis, ; O, Glover, ; C, Siegbahn, ; H, Mårtensson, ; N, Brühwiler, P. A., O’shea, J. N., Patthey, L., Kjeldgaard, L., Nilson, K., Schiessling, J., … Brü,
   - **Journal:** The Journal of Chemical Physics, 119(23), 12462–12472
   - **Link:** https://doi.org/10.1063/1.1586692
   - **Validation Status:** [ ] Not Checked

6. **[2003-006]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Fractal-compact island transition and self-limiting growth of pentacene on polymers. Luo, Y., Wang, G., Theobald, J. A., & Beton, P. H. (2003). Surface Science, 537(1–3), 241–246. https://doi.org/10.1016/S0039-6028(03)00605-8
   - **Authors:** NO AUTHORS
   - **Journal:** Physical Review Letters, 91(23)
   - **Link:** https://doi.org/10.1103/PHYSREVLETT.91.235701
   - **Validation Status:** [ ] Not Checked

7. **[2003-007]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Graphical computing in the undergraduate laboratory: Teaching and interfacing with LabVIEW. Moriarty, P. J., Gallagher, B. L., Mellor, C. J., & Baines, R. R. (2003). American Journal of Physics, 71(10), 1062–1074. https://doi.org/10.1119/1.1582189
   - **Authors:** NO AUTHORS
   - **Journal:** Applied Physics Letters, 83(15), 3108–3110
   - **Link:** https://doi.org/10.1063/1.1617375
   - **Validation Status:** [ ] Not Checked

8. **[2003-008]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** High-quality GaMnAs films grown with arsenic dimers. Campion, R. P., Edmonds, K. W., Zhao, L. X., Wang, K. Y., Foxon, C. T., Gallagher, B. L., & Staddon, C. R. (2003a). Journal of Crystal Growth, 247(1–2), 42–48. https://doi.org/10.1016/S0022-0248(02)01939-5
   - **Authors:** NO AUTHORS
   - **Journal:** Journal of Applied Physics, 93(10), 6787–6789
   - **Link:** https://doi.org/10.1063/1.1556110
   - **Validation Status:** [ ] Not Checked

9. **[2003-009]**
   - **Title:** P-type conductivity in cubic GaMnN layers grown by molecular beam epitaxy.
   - **Authors:** Novikov, S. V., Edmonds, K. W., Giddings, A. D., Wang, K. Y., Staddon,
   - **Journal:** Semiconductor Science and Technology, 19(3), L13–L13
   - **Link:** https://doi.org/10.1088/0268-1242/19/3/L02
   - **Validation Status:** [ ] Not Checked

10. **[2003-010]**
   - **Title:** Realization of quantum-dot cellular automata using semiconductor quantum dots.
   - **Authors:** Smith, C. G., Gardelis, S., Rushforth, A. W., Crook, R., Cooper, J.,
   - **Journal:** Superlattices and Microstructures, 34(3–6), 195–203
   - **Link:** https://doi.org/10.1016/J.SPMI.2004.03.009
   - **Validation Status:** [ ] Not Checked

11. **[2003-011]**
   - **Title:** Structural study of adsorption of isonicotinic acid and related molecules on rutile TiO2(1 1 0) I: XAS and STM.
   - **Authors:** Schnadt, J., Schiessling, J., O’Shea, J. N., Gray, S. M., Patthey, L., Johansson, M. K. J., Shi, M., Krempaský, J., Åhlund, J., Karlsson, P.
   - **Journal:** Surface Science, 540(1), 39–54
   - **Link:** https://doi.org/10.1016/S0039-6028(03)00827-6
   - **Validation Status:** [ ] Not Checked


### 2002 (7 publications)

1. **[2002-001]**
   - **Title:** The growth of GaMnAs films by molecular beam epitaxy using arsenic dimers. Campion, R. P., Edmonds, K. W., Zhao, L. X., Wang, K. Y., Foxon, C. T., Gallagher, B. L., & Staddon, C. R. (2003b). Journal of Crystal Growth, 251(1–4), 311–316. https://doi.org/10.1016/S0022-0248(02)02291-1
   - **Authors:** Anisotropic Magnetoresistance in GaMnAs films. Wang, K. Y., Edmonds, K. W., Campion, R. P., Zhao, L. X., Neumann, A. C., Foxon, C. T., Gallagher, B. L., Main, P. C., & Marrows, C. H.
   - **Journal:** NO JOURNAL
   - **Link:** https://arxiv.org/abs/cond-mat/0211697v1
   - **Validation Status:** [ ] Not Checked

2. **[2002-002]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Attractive mode manipulation of covalently bound molecules. Keeling, D. L., Humphry, M. J., Moriarty, P., & Beton, P. H. (2002). Chemical Physics Letters, 366(3–4), 300–304. https://doi.org/10.1016/S0009-2614(02)01588-9
   - **Authors:** NO AUTHORS
   - **Journal:** Applied Physics Letters, 81(26), 5039–5041
   - **Link:** https://doi.org/10.1063/1.1526924
   - **Validation Status:** [ ] Not Checked

3. **[2002-003]**
   - **Title:** Even-odd transition in the Shubnikov–de
   - **Authors:** Haas oscillations in a two-dimensional electron gas subjected to
   - **Journal:** Physical Review B, 66(3), 035328–035328
   - **Link:** https://doi.org/10.1103/PhysRevB.66.035328
   - **Validation Status:** [ ] Not Checked

4. **[2002-004]**
   - **Title:** Experimental evidence for sub-3-fs charge transfer from an aromatic adsorbate to a semiconductor.
   - **Authors:** Schnadt, J., Brühwiler, P. A., Patthey, L., O’Shea, J. N., Södergren, S., Odelius, M., Ahuja, R., Karis, O., Bässler, M., Persson, P.,
   - **Journal:** Nature 2002 418:6898, 418(6898), 620–623
   - **Link:** https://doi.org/10.1038/nature00952
   - **Validation Status:** [ ] Not Checked

5. **[2002-005]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Hall effect and hole densities in Ga1−xMnxAs. Edmonds, K. W., Wang, K. Y., Campion, R. P., Neumann, A. C., Foxon, C. T., Gallagher, B. L., & Main, P. C. (2002). Applied Physics Letters, 81(16), 3010–3012. https://doi.org/10.1063/1.1512822
   - **Authors:** NO AUTHORS
   - **Journal:** Applied Physics Letters, 81(26), 4991–4993
   - **Link:** https://doi.org/10.1063/1.1529079
   - **Validation Status:** [ ] Not Checked

6. **[2002-006]**
   - **Title:** Magnetism in exposed and coated nanoclusters studied by dichroism in X-ray absorption and photoemission. Binns, C., Baker, S. H., Edmonds, K. W., Finetti, P., Maher, M. J., Louch, S. C., Dhesi, S. S., & Brookes, N. B. (2002). Physica B: Condensed Matter, 318(4), 350–359. https://doi.org/10.1016/S0921-4526(02)00804-9
   - **Authors:** Magnetism in Fe Nanoclusters-From Isolated Particles to Nanostructured Materials. Binns, C., Baker, S. H., Maher, M. J., Louch, S., Thornton, S. C., Edmonds, K. W., Dhesi, S. S., & Brookes, N. B. (n.d.). https://doi.org/10.1002/1521-396X
   - **Journal:** Physica E: Low-Dimensional Systems and Nanostructures, 12(1–4), 212–215
   - **Link:** https://doi.org/10.1016/S1386-9477(01)00328-9
   - **Validation Status:** [ ] Not Checked

7. **[2002-007]**
   - **Title:** Nanostructured Cellular Networks. Moriarty, P., Taylor, M. D. R., & Brust, M. (2002). Physical Review Letters, 89(24). https://doi.org/10.1103/PHYSREVLETT.89.248303
   - **Authors:** Quasi-ballistic transport of 2D electrons through magnetic barriers. Hong, J., Kubrak, V., Edmonds, K. W., Neumann, A. C., Gallagher, B. L., Main, P. C., Henini, M., Marrows, C. H., Hickey, B. J., & Thoms, S.
   - **Journal:** Physica E: Low-Dimensional Systems and Nanostructures, 12(1–4), 229–232
   - **Link:** https://doi.org/10.1016/S1386-9477(01)00344-7
   - **Validation Status:** [ ] Not Checked


### 2001 (4 publications)

1. **[2001-001]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Atomic scale protection using fullerene encapsulation. Cotier, B. N., Upward, M. D., Jones, F. H., Moriarty, P., & Beton, P. H. (2001). Applied Physics Letters, 78(1), 126–128. https://doi.org/10.1063/1.1336553
   - **Authors:** NO AUTHORS
   - **Journal:** Nuclear Instruments and Methods in Physics Research Section B: Beam Interactions with Materials and Atoms, 184(4), 609–614
   - **Link:** https://doi.org/10.1016/S0168-583X(01)00796-0
   - **Validation Status:** [ ] Not Checked

2. **[2001-002]**
   - **Title:** Electrical transport of 2D electrons in non-uniform magnetic fields.
   - **Authors:** Gallagher, B. L., Kubrak, V., Rushforth, A. W., Neumann, A. C., Edmonds, K. W., Main, P. C., Henini, M., Marrows, C. H., Hickey, B. J.,
   - **Journal:** Physica E: Low-Dimensional Systems and Nanostructures, 11(2–3), 171–176
   - **Link:** https://doi.org/10.1016/S1386-9477(01)00197-7
   - **Validation Status:** [ ] Not Checked

3. **[2001-003]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Magnetic force microscopy studies of the domain structure of Co/Pd multilayers in a magnetic field. Rushforth, A. W., Main, P. C., Gallagher, B. L., Marrows, C. H., Hickey, B. J., Dahlberg, E. D., & Eames, P. (2001). Journal of Applied Physics, 89(11), 7534–7536. https://doi.org/10.1063/1.1359792
   - **Authors:** NO AUTHORS
   - **Journal:** Reports on Progress in Physics, 64(3), 297–297
   - **Link:** https://doi.org/10.1088/0034-4885/64/3/201
   - **Validation Status:** [ ] Not Checked

4. **[2001-004]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Orientationally ordered island growth of higher fullerenes on Ag/Si(111)−(3×3)R30°<. Butcher, M. J., Nolan, J. W., Hunt, M. R. C., Beton, P. H., Dunsch, L., Kuran, P., Georgi, P., & Dennis, T. J. S. (2001). Physical Review B, 64(19). https://doi.org/10.1103/PhysRevB.64.195401
   - **Authors:** NO AUTHORS
   - **Journal:** Chemical Physics Letters, 348(1–2), 27–33
   - **Link:** https://doi.org/10.1016/S0009-2614(01)01055-7
   - **Validation Status:** [ ] Not Checked


### 2000 (6 publications)

1. **[2000-001]**
   - **Title:** Chemisorption of azafullerene on silicon: Isolating C59N monomers.
   - **Authors:** Butcher, M. J., Jones, F. H., Cotier, B. N., Taylor, M. D. R., Moriarty, P., Beton, P. H., Prassides, K., Tagmatarchis, N., Comicioli,
   - **Journal:** Materials Science and Engineering: B, 74(1–3), 202–205
   - **Link:** https://doi.org/10.1016/S0921-5107(99)00562-0
   - **Validation Status:** [ ] Not Checked

2. **[2000-002]**
   - **Title:** Deposition of Fe clusters on Si surfaces.
   - **Authors:** Upward, M. D., Cotier, ; B N, Moriarty, ; P, Beton, ; P H, Baker, S. H., Binns, ; C, Edmonds, ; K, Cotier, B. N., Moriarty, P., Beton, P. H.,
   - **Journal:** Journal of Vacuum Science & Technology B: Microelectronics and Nanometer Structures Processing, Measurement, and Phenomena, 18(6), 2646–2649
   - **Link:** https://doi.org/10.1116/1.1320808
   - **Validation Status:** [ ] Not Checked

3. **[2000-003]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Digital scanning probe microscope controller for molecular manipulation applications. Humphry, M. J., Chettle, R., Moriarty, P. J., Upward, M. D., & Beton, P. H. (2000). Review of Scientific Instruments, 71(4), 1698–1701. https://doi.org/10.1063/1.1150522
   - **Authors:** NO AUTHORS
   - **Journal:** Applied Physics Letters, 77(8), 1144–1146
   - **Link:** https://doi.org/10.1063/1.1289797
   - **Validation Status:** [ ] Not Checked

4. **[2000-004]**
   - **Title:** Growth and modification of Ag islands on hydrogen terminated Si(100) surfaces. Butcher, M. J., Jones, F. H., & Beton, P. H. (2000). Journal of Vacuum Science & Technology B: Microelectronics and Nanometer Structures Processing, Measurement, and Phenomena, 18(1), 13–15. https://doi.org/10.1116/1.591142
   - **Authors:** N 1s x-ray absorption study of the bonding interaction of bi-isonicotinic acid adsorbed on rutile TiO 2 (110). Persson, P., Lunell, S., Brühwiler, P. A., Schnadt, J., Södergren, S., O’shea, J. N., Karis, O., Siegbahn, H., Mårtensson, N., Bässler, M.,
   - **Journal:** J. Chem. Phys, 112, 3945–3948
   - **Link:** https://doi.org/10.1063/1.480945
   - **Validation Status:** [ ] Not Checked

5. **[2000-005]**
   - **Title:** The transport of 2D electrons through magnetic barriers.
   - **Authors:** Kubrak, V., Rushforth, A. W., Neumann, A. C., Rahman, F., Gallagher, B. L., Main, P. C., Henini, M., Marrows, C. H., & Hickey, B. J.
   - **Journal:** Physica E: Low-Dimensional Systems and Nanostructures, 7(3–4), 997–1000
   - **Link:** https://doi.org/10.1016/S1386-9477(00)00103-X
   - **Validation Status:** [ ] Not Checked

6. **[2000-006]**
   - **Title:** Transport properties of a two-dimensional electron gas due to a spatially random magnetic field.
   - **Authors:** Rushforth, A. W., Gallagher, B. L., Main, P. C., Neumann, A. C., Marrows, C. H., Zoller, I., Howson, M. A., Hickey, B. J., & Henini,
   - **Journal:** Physica E: Low-Dimensional Systems and Nanostructures, 6(1–4), 751–754
   - **Link:** https://doi.org/10.1016/S1386-9477(99)00195-2
   - **Validation Status:** [ ] Not Checked


### 1999 (3 publications)

1. **[1999-001]**
   - **Title:** Adsorption of cobalt phthalocyanine on Ag terminated Si(111). Upward, M. D., Beton, P. H., & Moriarty, P. (1999). Surface Science, 441(1), 21–25. https://doi.org/10.1016/S0039-6028(99)00778-5
   - **Authors:** C59N Monomers: Stabilization through Immobilization. Butcher, M. J., Jones, F. H., Beton, P. H., Moriarty, P., Cotier, B. N., Upward, M. D., Prassides, K., Kordatos, K., Tagmatarchis, N., Wudl, F., Dhanak, V., Johal, T. K., Crotti, C., Comicioli, C., &
   - **Journal:** Physical Review Letters, 83(17), 3478–3481
   - **Link:** https://doi.org/10.1103/PhysRevLett.83.3478
   - **Validation Status:** [ ] Not Checked

2. **[1999-002]**
   - **Title:** Effects on the resonant tunneling
   - **Authors:** characteristics of a double-barrier diode of intentional and
   - **Journal:** Journal of Applied Physics, 86(3), 1452–1455
   - **Link:** https://doi.org/10.1063/1.370911
   - **Validation Status:** [ ] Not Checked

3. **[1999-003]**
   - **Title:** Oscillations in the valence-band photoemission spectrum of the heterofullerene C59N: A photoelectron interference phenomenon.
   - **Authors:** Jones, F. H., Butcher, M. J., Cotier, B. N., Moriarty, P., Beton, P. H., Dhanak, V. R., Prassides, K., Kordatos, K., Tagmatarchis, N., &
   - **Journal:** Physical Review B, 59(15), 9834–9837
   - **Link:** https://doi.org/10.1103/PhysRevB.59.9834
   - **Validation Status:** [ ] Not Checked


### 1998 (4 publications)

1. **[1998-001]**
   - **Title:** Room temperature manipulation of the heterofullerene C59N on Si(100)-2×1. Butcher, M. J., Jones, F. H., Moriarty, P., Beton, P. H., Prassides, K., Kordatos, K., & Tagmatarchis, N. (1999). Applied Physics Letters, 75(8), 1074–1076. https://doi.org/10.1063/1.124601
   - **Authors:** A self-assembled InAs quantum dot used as a quantum microscope looking into a two-dimensional electron gas. Ihn, T., Thornton, A., Itskevich, I. E., Beton, P. H., Martin, P., Moriarty, P., Müller, E., Nogaret, A., Main, P. C., Eaves, L., &
   - **Journal:** Physics-Uspekhi, 41(2), 122–122
   - **Link:** https://doi.org/10.1070/PU1998V041N02ABEH000342
   - **Validation Status:** [ ] Not Checked

2. **[1998-002]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** C60 adsorption on the Si(110)-(16 × 2) surface. Ma, Y. R., Moriarty, P., Upward, M. D., & Beton, P. H. (1998). Surface Science, 397(1–3), 421–425. https://doi.org/10.1016/S0039-6028(97)00716-4
   - **Authors:** NO AUTHORS
   - **Journal:** Physical Review B, 57(1), 362–369
   - **Link:** https://doi.org/10.1103/PhysRevB.57.362
   - **Validation Status:** [ ] Not Checked

3. **[1998-003]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Functionalized fullerenes on silicon surfaces. Upward, M. D., Moriarty, P., Beton, P. H., Birkett, P. R., Kroto, H. W., Walton, D. R. M., & Taylor, R. (1998). Surface Science, 405(2–3), L526–L531. https://doi.org/10.1016/S0039-6028(98)00144-7
   - **Authors:** NO AUTHORS
   - **Journal:** Physical Review B, 57(12), R6815–R6818
   - **Link:** https://doi.org/10.1103/PhysRevB.57.R6815
   - **Validation Status:** [ ] Not Checked

4. **[1998-004]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Probing the interactions of on Si(100)- using anisotropic molecular manipulation. Moriarty, P., Ma, Y. R., Upward, M. D., Beton, P. H., & Teehan, D. (1998). Semiconductor Science and Technology, 13(8A), A47–A47. https://doi.org/10.1088/0268-1242/13/8A/016
   - **Authors:** NO AUTHORS
   - **Journal:** Surface Science, 405(1), 21–26
   - **Link:** https://doi.org/10.1016/S0039-6028(97)01074-1
   - **Validation Status:** [ ] Not Checked


### 1997 (5 publications)

1. **[1997-001]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Translation, rotation and removal of C60 on Si(100)-2 × 1 using anisotropic molecular manipulation. Moriarty, P., Ma, Y. R., Upward, M. D., & Beton, P. H. (1998). Surface Science, 407(1–3), 27–35. https://doi.org/10.1016/S0039-6028(98)00082-X
   - **Authors:** NO AUTHORS
   - **Journal:** Physical Review B, 55(23), 15397–15400
   - **Link:** https://doi.org/10.1103/PhysRevB.55.15397
   - **Validation Status:** [ ] Not Checked

2. **[1997-002]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Disorder-Order Ripening of C60 Islands. Ma, Y. R., Moriarty, P., & Beton, P. H. (1997). Physical Review Letters, 78(13), 2588–2591. https://doi.org/10.1103/PhysRevLett.78.2588
   - **Authors:** NO AUTHORS
   - **Journal:** Physical Review B, 56(4), R1704–R1707
   - **Link:** https://doi.org/10.1103/PhysRevB.56.R1704
   - **Validation Status:** [ ] Not Checked

3. **[1997-003]**
   - **Title:** Investigation and Manipulation of C60 on a Si Surface Using a Scanning Tunneling Microscope. Moriarty, P., Dunn, A. W., Ma, Y. R., Upward, M. D., & Beton, P. H. (1997). Fullerenes, Nanotubes, and Carbon Nanostructures, 5(4), 769–780. https://doi.org/10.1080/15363839708012230
   - **Authors:** MBE growth and magnetotunnelling transport properties of a single GaAs/AlAs/GaAs barrier incorporating InAs quantum dots. Henini, M., Itskevich, I. E., Ihn, T., Moriarty, P., Nogaret, A., Beton, P. H., Eaves, L., Main, P. C., Middleton, J. R., & Chauhan,
   - **Journal:** Journal of Crystal Growth, 175–176(PART 2), 782–786
   - **Link:** https://doi.org/10.1016/S0022-0248(96)01035-4
   - **Validation Status:** [ ] Not Checked

4. **[1997-004]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Measurement and manipulation of Mn clusters on clean and fullerene terminated Si(111)-7×7. Upward, M. D., Moriarty, P., Beton, P. H., Baker, S. H., Binns, C., & Edmonds, K. (1997). Applied Physics Letters, 70(16), 2114–2116. https://doi.org/10.1063/1.118965
   - **Authors:** NO AUTHORS
   - **Journal:** Applied Physics Letters, 71(20), 2937–2939
   - **Link:** https://doi.org/10.1063/1.120221
   - **Validation Status:** [ ] Not Checked

5. **[1997-005]**
   - **Title:** Nanometer scale patterning of C60 multilayers using molecular manipulation. Dunn, A. W., Moriarty, P., Beton, P. H., & Phys Lett, A. (1997). Journal of Vacuum Science & Technology A, 15(3), 1478–1481. https://doi.org/10.1116/1.580565
   - **Authors:** Resonant magnetotunneling through individual self-assembled InAs quantum dots. Thornton, A., Itskevich, I. E., Ihn, T., Henini, M., Moriarty, P., Nogaret, A., Beton, P. H., Eaves, L., Main, P. C., Middleton, J. R.,
   - **Journal:** Superlattices and Microstructures, 21(2), 255–258
   - **Link:** https://doi.org/10.1006/SPMI.1996.0192
   - **Validation Status:** [ ] Not Checked


### 1996 (6 publications)

1. **[1996-001]**
   - **Title:** Structural and optical characterization of self-assembled InAs-GaAs quantum dots grown on high index surfaces. Henini, M., Sanguinetti, S., Brusaferri, L., Grilli, E., Guzzi, M., Upward, M. D., Moriarty, P., & Beton, P. H. (1997). Microelectronics Journal, 28(8–10), 933–938. https://doi.org/10.1016/S0026-2692(96)00132-2
   - **Authors:** (2×4)/c(2×8) to (4×2)/c(8×2) transition on GaAs(001) surfaces. Moriarty, P., Beton, ; P H, Ma, Y.-R., Dunn, ; A W, Henini, ; M, Woolf,
   - **Journal:** Journal of Vacuum Science & Technology B: Microelectronics and Nanometer Structures Processing, Measurement, and Phenomena, 14(2), 943–947
   - **Link:** https://doi.org/10.1116/1.589180
   - **Validation Status:** [ ] Not Checked

2. **[1996-002]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Adsorbed and substituted Sb dimers on GaAs(001). Moriarty, P., Beton, P. H., Ma, Y. R., Henini, M., & Woolf, D. A. (1996). Physical Review B, 53(24). https://doi.org/10.1103/PhysRevB.53.R16148
   - **Authors:** NO AUTHORS
   - **Journal:** Journal of Vacuum Science & Technology B: Microelectronics and Nanometer Structures Processing, Measurement, and Phenomena, 14(3), 1596–1599
   - **Link:** https://doi.org/10.1116/1.589197
   - **Validation Status:** [ ] Not Checked

3. **[1996-003]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Creation and annihilation of positively and negatively charged excitions in GaAs quantum wells. Buhmann, H., Beton, P. H., Eaves, L., & Henini, M. (1996). Surface Science, 361–362, 447–450. https://doi.org/10.1016/0039-6028(96)00442-6
   - **Authors:** NO AUTHORS
   - **Journal:** Solid-State Electronics, 40(1–8), 265–269
   - **Link:** https://doi.org/10.1016/0038-1101(95)00262-6
   - **Validation Status:** [ ] Not Checked

4. **[1996-004]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Island, trimer, and chain formation on the Sb‐terminated GaAs(111)B surface. Moriarty, P., Beton, P. H., Henini, M., Woolf, D. A., Appl Phys, J., & Chem Phys, J. (1996). Journal of Vacuum Science & Technology B: Microelectronics and Nanometer Structures Processing, Measurement, and Phenomena, 14(2), 1024–1028. https://doi.org/10.1116/1.588447
   - **Authors:** NO AUTHORS
   - **Journal:** Applied Physics Letters, 69(4), 506–508
   - **Link:** https://doi.org/10.1063/1.117768
   - **Validation Status:** [ ] Not Checked

5. **[1996-005]**
   - **Title:** Resonant magnetotunneling through individual self-assembled InAs quantum dots.
   - **Authors:** Itskevich, I., Ihn, T., Thornton, A., Henini, M., Foster, T., Moriarty,
   - **Journal:** Physical Review B, 54(23), 16401–16404
   - **Link:** https://doi.org/10.1103/PhysRevB.54.16401
   - **Validation Status:** [ ] Not Checked

6. **[1996-006]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Room temperature manipulation of C60 molecules on a Si surface. Beton, P. H., Dunn, A. W., & Moriarty, P. (1996). Surface Science, 361–362, 878–881. https://doi.org/10.1016/0039-6028(96)00555-9
   - **Authors:** NO AUTHORS
   - **Journal:** Surface Science, 365(3), L663–L668
   - **Link:** https://doi.org/10.1016/0039-6028(96)00884-9
   - **Validation Status:** [ ] Not Checked


### 1995 (5 publications)

1. **[1995-001]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** STM investigation and manipulation of molecules adsorbed on an Si(111) surface. Dunn, A. W., Moriarty, P., Upward, M. D., Nogaret, A., & Beton, P. H. (1996). Semiconductor Science and Technology, 11(11S), 1563–1563. https://doi.org/10.1088/0268-1242/11/11S/019
   - **Authors:** NO AUTHORS
   - **Journal:** Materials Science and Engineering: B, 35(1–3), 192–197
   - **Link:** https://doi.org/10.1016/0921-5107(95)01367-9
   - **Validation Status:** [ ] Not Checked

2. **[1995-002]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Atomic scale modifications of GaAs using a scanning tunneling microscope. Moriarty, P., Beton, P. H., & Woolf, D. A. (1995a). Applied Physics Letters, 66(12), 1515–1517. https://doi.org/10.1063/1.113631
   - **Authors:** NO AUTHORS
   - **Journal:** Il Nuovo Cimento D, 17(11–12), 1395–1400
   - **Link:** https://doi.org/10.1007/BF02457216
   - **Validation Status:** [ ] Not Checked

3. **[1995-003]**
   - **Title:** Double chain structures on the Sb-terminated GaAs(111)B surface. Moriarty, P., Beton, P. H., & Woolf, D. A. (1995b). Physical Review B, 51(12), 7950–7953. https://doi.org/10.1103/PhysRevB.51.7950
   - **Authors:** Effect of a parallel magnetic field on the resonant-tunneling current through a quantum wire. Mori, N., Beton, P. H., Wang, J., & Eaves, L. (1995a). Physical Review B, 52(3), 1504–1507. https://doi.org/10.1103/PhysRevB.52.1504
   - **Journal:** Physical Review B, 51(12), 7969–7972
   - **Link:** https://doi.org/10.1103/PhysRevB.51.7969
   - **Validation Status:** [ ] Not Checked

4. **[1995-004]** [ISSUES: EMPTY_AUTHORS, TITLE_CONTAINS_AUTHORS]
   - **Title:** Landau-level populations and slow energy relaxation of a two-dimensional electron gas probed by tunneling spectroscopy. Neves, B. R. A., Mori, N., Beton, P. H., Eaves, L., Wang, J., & Henini, M. (1995). Physical Review B, 52(7), 4666–4669. https://doi.org/10.1103/PhysRevB.52.4666
   - **Authors:** NO AUTHORS
   - **Journal:** Applied Physics Letters, 67(8), 1075–1077
   - **Link:** https://doi.org/10.1063/1.114469
   - **Validation Status:** [ ] Not Checked

5. **[1995-005]**
   - **Title:** Measuring the Probability Density of Quantum Confined States. Beton, P. H., Wang, J., Mori, N., Eaves, L., Main, P. C., Foster, T. J., & Henini, M. (1995a). Physical Review Letters, 75(10), 1996–1999. https://doi.org/10.1103/PhysRevLett.75.1996
   - **Authors:** Resonant magnetotunneling via quantum confined states. Beton, P. H., Wang, J., Mori, N., Eaves, L., Buhmann, H., Mansouri, L., Main, P. C., Foster, T. J., & Henini, M. (1995b). Physica B: Condensed Matter, 211(1–4), 423–429. https://doi.org/10.1016/0921-4526(94)01084-E
   - **Journal:** Physica B: Condensed Matter, 211(1–4), 433–436
   - **Link:** https://doi.org/10.1016/0921-4526(94)01086-G
   - **Validation Status:** [ ] Not Checked


## DATA QUALITY SUMMARY

- Publications with empty authors: 93
- Publications with malformed titles: 93
- Publications with missing links: 0
- Total publications needing attention: 186
