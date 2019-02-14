const actividadesOpc = [
  { value: '', label: '' },
  {
    value: '052=Excavación, rotura y resane de vereda.',
    label: 'Excavación, rotura y resane de vereda.'
  },
  {
    value: '069=Reemplazo de Mástil  3,5 m (Fierro - Madera - FV)',
    label: 'Reemplazo de Mástil 3,5m'
  },
  { value: '070=Reemplazo de Murete', label: 'Reemplazo de Murete' },
  {
    value: '071=Reemplazo de Mástil de 6 m ( Fierro-Madera-FV',
    label: 'Reemplazo de Mástil de 6m'
  },
  {
    value: '072=PINTADO TAPA VARIAS,BISEL,ROTULADO ( casos puntuales)',
    label: 'PINTADO TAPA VARIAS,BISEL,ROTULADO (puntuales)'
  },
  {
    value:
      '073=Adecuación de Conexión Aerea ( Retemplar,trenzar,fijar DMS,entubar acometida, )',
    label: 'Adecuación de Conexión Aerea'
  },
  {
    value:
      '074=Reemplazo Alambrado  Pasantes Monofasico _Trifasico ( casos puntuales)',
    label: 'Reemplazo Alambrado Pasantes M/T (puntuales)'
  },
  {
    value: '075=Resane de Murete ( casos puntuales)',
    label: 'Resane de Murete (puntuales)'
  },
  {
    value: '076=Reemplazo de Caja L-LT-F1,F2,T30.',
    label: 'Reemplazo de Caja L-LT-F1,F2,T30.'
  },
  {
    value: '077=Adecuación de Murete (casos criticos)',
    label: 'Adecuación de Murete (casos criticos)'
  },
  {
    value: '079=Limpieza de Caja  y Ajuste de Conexiones',
    label: 'Limpieza de Caja y Ajuste de Conexiones'
  },
  {
    value: '084=Cambio de medidor por mantenimiento.',
    label: 'Cambio de medidor por mantenimiento.'
  },
  {
    value: '099=CAMBIO DE PORT.FUS.TIPO F1-FUS.LAMINA-BARRA DERIVACION',
    label: 'CAMBIO DE PORT.FUS.TIPO F1-FUS.LAMINA-BARRA DERIVACION'
  },
  { value: '100=Cambio termicos > 100A', label: 'Cambio termicos > 100A' },
  {
    value: '104=Reemplazo de Caja de Distribución Aereo.',
    label: 'Reemplazo de Caja de Distribución Aereo.'
  },
  {
    value: '105=Traslado de acometida aérea',
    label: 'Traslado de acometida aérea'
  },
  { value: '106=Traslado de Murete', label: 'Traslado de Murete' },
  {
    value: '107=Adecuación de conexión subetrranea',
    label: 'Adecuación de conexión subetrranea'
  },
  { value: '108=Cambio de acometida', label: 'Cambio de acometida' },
  { value: '109=Elevar nivel de murete', label: 'Elevar nivel de murete' },
  {
    value: '110=Modificación altura caja de medidor',
    label: 'Modificación altura caja de medidor'
  },
  {
    value: '111=Traslado de conexión a fachada',
    label: 'Traslado de conexión a fachada'
  },
  {
    value: '112=Cambio de protección del cable alimentador del cliente',
    label: 'Cambio de protección del cable alimentador del cliente'
  },
  { value: '113=Picado de nicho en pared', label: 'Picado de nicho en pared' },
  {
    value: '114=SOLDAR TAPA CPV,LT,F1,OTROS',
    label: 'SOLDAR TAPA CPV,LT,F1,OTROS'
  },
  { value: '115=Resane pared / vereda.', label: 'Resane pared / vereda.' },
  { value: '116=Trenzado de acometida', label: 'Trenzado de acometida' },
  { value: '117=Retiro de conexión', label: 'Retiro de conexión' },
  {
    value: '120=INSTALAR  PLANCHA PROTECTORA DE TOMA T30/TC30',
    label: 'INSTALAR  PLANCHA PROTECTORA DE TOMA T30/TC30'
  },
  {
    value: '124=Reemplazo de Caja de Distribución Subterránea',
    label: 'Reemplazo de Caja de Distribución Subterránea'
  },
  {
    value: '125=Cambio de Tablero de medidor',
    label: 'Cambio de Tablero de medidor'
  },
  { value: '128=Soldar seguro de ITM', label: 'Soldar seguro de ITM' },
  {
    value: '130=REPARAR TUB.PVC/METAL,SUBIDA,POSTE,PARED,OTROS',
    label: 'REPARAR TUB.PVC/METAL,SUBIDA,POSTE,PARED,OTROS'
  },
  {
    value: '133=REPARAR PISO,PARED ESPECIAL CASOS PUNTUALES LDS',
    label: 'REPARAR PISO,PARED ESPECIAL CASOS PUNTUALES LDS'
  },
  {
    value: '134=INSTALAR BRAZO EXTENSOR EN POSTE ,CASOS PUNTUALES LDS',
    label: 'INSTALAR BRAZO EXTENSOR EN POSTE ,CASOS PUNTUALES LDS'
  },
  {
    value: '135=REEMPLAZ.- INSTALAC.CAJA BT6 (MURETEoPOSTE)',
    label: 'REEMPLAZ.- INSTALAC.CAJA BT6 (MURETEoPOSTE)'
  },
  {
    value: '139=TAPIADO DE CAJAS L-LT-F1.OTROS.,REZANE,PARED,PISO.',
    label: 'TAPIADO DE CAJAS L-LT-F1.OTROS.,REZANE,PARED,PISO.'
  },
  {
    value:
      '141=Verificar,detectar y  eliminar electrizamiento en Batería o Individuales.',
    label: 'Atender electrizamiento'
  },
  {
    value:
      '155=Instalar protección en la acometida, entrada y salida del mástil.',
    label: 'Instalar protección en la acometida, entrada y salida del mástil.'
  },
  {
    value:
      '156=INSTALAR PROTECCIÓN (TUBO CORRUGADO ) EN LOS CABLES PARA EVITAR EL ECTRIZAMIENTO EN LA CAJA.',
    label: 'INSTALAR PROTECCIÓN (TUBO CORRUGADO ).'
  },
  {
    value: '157=PINTADO DE TAPA Y ROTULADO',
    label: 'PINTADO DE TAPA Y ROTULADO'
  },
  {
    value:
      '056=Reposición de conexión en BT trifásica hasta 20 kW subterránea.',
    label: 'Reposición de conexión en BT trifásica hasta 20 kW subterránea.'
  },
  {
    value: '078=Eliminación Toma T-30(exteriorizar medidor,rezane vereda)',
    label: 'Eliminación Toma T-30'
  },
  {
    value: '122=CAMBIO DE CAJA  TOMA T30-TC30-MT-MM-L-LT-F1 POR LTT-LTR-LR',
    label: 'CAMBIO DE CAJA TOMA T30-TC30-MT-MM-L-LT-F1 POR LTT-LTR-LR'
  }
];

const areaSolicitanteOpc = [
  { value: '', label: '' },
  {
    value: 'I=CLIENTES INTERNOS AREA MEDIDORES',
    label: 'Clientes Internos Area Medidores'
  },
  { value: 'R=CLIENTES RECLAMOS', label: 'Clientes Reclamos' },
  { value: 'E=EMERGENCIA', label: 'Emergencia' },
  { value: 'F=FONOLUZ', label: 'Fonoluz' },
  { value: 'M=MEDIDORES', label: 'Medidores' },
  { value: 'P=PERDIDAS', label: 'DOC' }
];

const tipoOrdenOpc = [
  { value: '', label: '' },
  { value: 'CA=CARTA', label: 'Carta' },
  { value: 'CT=CONTRASTE', label: 'Contraste' },
  { value: 'CO=CORREO', label: 'Correo' },
  { value: 'FI=FISCALIZACION', label: 'Fiscalización' },
  { value: 'IP=IP', label: 'IP' },
  { value: 'MA=MANSER', label: 'MANSER' },
  { value: 'OD=ODA', label: 'SAE' },
  { value: 'OP=OP', label: 'OP' }
];

const solicitudAtencionOpc = [
  { value: '', label: '' },
  {
    value: 'SAES=SISTEMA DE ATENCION DE EMERGENCIA DE SUMINISTROS',
    label: 'SAES'
  },
  { value: 'SAS=SISTEMA DE ATENCION DE SUMINISTROS', label: 'SAS' }
];

module.exports = {
  actividadesOpc,
  areaSolicitanteOpc,
  tipoOrdenOpc,
  solicitudAtencionOpc
};
