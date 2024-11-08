import React from 'react';

import styles from './filmTableRow.module.scss';

const FilmTableRow = React.memo(({ label, value }: { label: string; value: React.ReactNode }) => (
    <tr className={styles.filmInfo__item}>
        <th className={styles.filmTableRow__item_title}>{label}</th>
        <td className={styles.filmTableRow__item_text}>{value}</td>
    </tr>
));

export default FilmTableRow;
