# Duplicate Removal Summary

## Overview
Successfully removed duplicate publications following the specified rules:
- **Rule A**: Keep BOTH entries for duplicates between 2000 and 2021 (no changes made)
- **Rule B**: For all other duplicate pairs/groups, keep ONLY the later publication (remove earlier ones)

## Publication Count Changes
- **Before**: 643 total publications
- **After**: 628 total publications  
- **Removed**: 15 duplicate publications

## Detailed Removals

### 1. 1996 → 1997 Duplicate (Removed from 1996)
- **Title**: "Resonant magnetotunneling through individual self-assembled InAs quantum dots"
- **Authors**: Itskevich, I., Ihn, T., Thornton, A., et al.
- **DOI**: https://doi.org/10.1103/PhysRevB.54.16401
- **Action**: Kept 1997 version, removed 1996 version

### 2. 2004 → 2005 Duplicate (Removed from 2004)
- **Title**: "Growth induced reordering of fullerene clusters trapped in a two-dimensional supramolecular network"
- **Authors**: Theobald, J. A., Oxtoby, N. S., Champness, N. R., et al.
- **DOI**: https://doi.org/10.1021/LA047533W
- **Action**: Kept 2005 version, removed 2004 version

### 3. 2005 → 2006 Duplicate (Removed from 2005)
- **Title**: "Prospects for high temperature ferromagnetism in (Ga,Mn)As semiconductors"
- **Authors**: Jungwirth, T., Wang, K. Y., Mašek, J., et al.
- **DOI**: https://doi.org/10.1103/PHYSREVB.72.165204
- **Action**: Kept 2006 version, removed 2005 version

### 4. 2010 → 2011 Duplicate (Removed from 2010)
- **Title**: "Guest-induced growth of a surface-based supramolecular bilayer"
- **Authors**: Blunt, M. O., Russell, J. C., Gimenez-Lopez, M. D. C., et al.
- **DOI**: https://doi.org/10.1038/nchem.901
- **Action**: Kept 2011 version, removed 2010 version

### 5. 2011 → 2012 Duplicate (Removed from 2011)
- **Title**: "Broken symmetry and the variation of critical properties in the phase behaviour of supramolecular rhombus tilings"
- **Authors**: Stannard, A., Russell, J. C., Blunt, M. O., et al.
- **DOI**: https://doi.org/10.1038/nchem.1199
- **Action**: Kept 2012 version, removed 2011 version

### 6. 2013 → 2014 Duplicates (Removed 6 from 2013)

#### 6a. Micromagnetic Parameters
- **Title**: "Comparison of micromagnetic parameters of the ferromagnetic semiconductors (Ga,Mn)(As,P) and (Ga,Mn)As"
- **Authors**: Tesařová, N., Butkovičová, D., Campion, R. P., et al.
- **DOI**: https://doi.org/10.1103/PHYSREVB.90.155203

#### 6b. Curie Temperatures
- **Title**: "Determining Curie temperatures in dilute ferromagnetic semiconductors: High Curie temperature (Ga,Mn)As"
- **Authors**: Wang, M., Marshall, R. A., Edmonds, K. W., et al.
- **DOI**: https://doi.org/10.1063/1.4870521/23925

#### 6c. Domain Wall Motion
- **Title**: "Domain wall motion driven by spin Hall effect—Tuning with in-plane magnetic anisotropy"
- **Authors**: Rushforth, A. W.
- **DOI**: https://doi.org/10.1063/1.4873583/131293

#### 6d. Isophthalate Packing
- **Title**: "Packing of isophthalate tetracarboxylic acids on Au(111): Rows and disordered herringbone structures"
- **Authors**: Cebula, I., Smith, E. F., Gimenez-Lopez, M. D. C., et al.
- **DOI**: https://doi.org/10.1021/JP402333M

#### 6e. Spin-dependent Phenomena
- **Title**: "Spin-dependent phenomena and device concepts explored in (Ga,Mn)As"
- **Authors**: Jungwirth, T., Wunderlich, J., Novák, V., et al.
- **DOI**: https://doi.org/10.1103/REVMODPHYS.86.855

#### 6f. Spin-orbit Torque
- **Title**: "Spin-orbit torque opposing the Oersted torque in ultrathin Co/Pt bilayers"
- **Authors**: Skinner, T. D., Wang, M., Hindmarch, A. T., et al.
- **DOI**: https://doi.org/10.1063/1.4864399/236938

**Action**: Kept all 2014 versions, removed all 2013 versions

### 7. 2014 → 2015 Duplicate (Removed from 2014)
- **Title**: "Adsorbate-induced curvature and stiffening of graphene"
- **Authors**: Svatek, S. A., Scott, O. R., Rivett, J. P. H., et al.
- **DOI**: https://doi.org/10.1021/NL503308C
- **Action**: Kept 2015 version, removed 2014 version

### 8. 2020 → 2022 Duplicate (Removed from 2020)
- **Title**: "Bending a photonic wire into a ring"
- **Authors**: Gotfredsen, H., Deng, J. R., Van Raden, J. M., et al.
- **DOI**: https://doi.org/10.1038/s41557-022-01032-w
- **Action**: Kept 2022 version, removed 2020 version

### 9. 2023 → 2024 Duplicate (Removed from 2023)
- **Title**: "Altermagnetic lifting of Kramers spin degeneracy"
- **Authors**: Krempaský, J., Šmejkal, L., D'Souza, S. W., et al.
- **DOI**: https://arxiv.org/abs/2308.10681v1 (2023) vs https://doi.org/10.1038/s41586-023-06907-7 (2024)
- **Action**: Kept 2024 version, removed 2023 version

### 10. 2023 Same-Year Duplicate (Removed 1 from 2023)
- **Title**: "Magneto-Acoustic Waves in antiferromagnetic CuMnAs excited by Surface Acoustic Waves"
- **Authors**: Multiple author variations
- **DOI**: https://arxiv.org/abs/2309.08893v1 vs https://doi.org/10.48550/ARXIV.2309.08893
- **Action**: Kept the second version (arXiv with DOI), removed the first version

## Files Modified
- `/src/data/publications/1996.json` (1 removal)
- `/src/data/publications/2004.json` (1 removal)
- `/src/data/publications/2005.json` (1 removal)
- `/src/data/publications/2010.json` (1 removal)
- `/src/data/publications/2011.json` (1 removal)
- `/src/data/publications/2013.json` (6 removals)
- `/src/data/publications/2014.json` (1 removal)
- `/src/data/publications/2020.json` (1 removal)
- `/src/data/publications/2023.json` (2 removals)

## Index Files Regenerated
- `/src/data/publications/index.json` (updated counts)
- `/src/data/publications/search-index.json` (updated search index)

## Impact
- **Clean database**: No more duplicate publications
- **Preserved newer versions**: All kept publications represent the most recent/published versions
- **Maintained data integrity**: JSON structure and formatting preserved
- **Updated counts**: Index files reflect new totals (628 publications)

All duplicates have been successfully resolved according to the specified rules.