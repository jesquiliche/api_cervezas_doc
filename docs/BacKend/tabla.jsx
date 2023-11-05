

import React from 'react';

export function TablaConImagenes() {
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>nombre</th>
          <th>imagen</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>POMELO IPA IDA Y VUELTA 24x33cl</td>
          <td>
            <img src="https://res.cloudinary.com/dkrew530b/image/upload/v1697309153/pomelo_ipa_ida_y_vuelta_24x33cl_4baeb73584.jpg" alt="Imagen 1" width="100" />
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>DIPA or Nothing 12x33</td>
          <td>
            <img src="https://res.cloudinary.com/dkrew530b/image/upload/v1697311032/dipa_or_nothing_12x33_a547d464d5.jpg" alt="Imagen 2" width="100" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default TablaConImagenes;
