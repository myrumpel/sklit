export const processingOfInvoicesData = {
  title: 'Обработка накладных',
  subtitle_1: 'Передача накладных в программу складского учета',
  subtitle_2: 'Формат накладной для экспорта в вашу складскую программу',
  content: {
    text_1: 'Получить накладные электронной почтой довольно просто. Нужно:',
    list: [
      'Зайти в почту.',
      'Обновить список входящих писем.',
      'Отобрать письма от поставщиков с электронными накладными.',
      'Сохранить файлы в определенные папки.',
      'Если поставщик пакует файлы с накладными, распаковать.',
    ],
    textList_1: [
      'Потом зайти в программу учета материалов и обработать накладные.',
      'Если Вы получаете накладные через программу СКЛИТ, то после обновления прайсов Вы просто заходите в программу учета материалов. Они уже там. Обработка накладных включает в себя несколько этапов. Проверка на браки, формирование розничных цен, печать протокола расчета розничных цен, ценников, стеллажных карт и др. Есть несколько вариантов передачи накладных в складскую программу. Они отличаются частью обработки, которая выполняется в программе СКЛИТ. Можно всю обработку провести в складской программе, тогда Ваши программисты забирают файлы накладных сразу, как только они поступили. Можно проверку на браки, ценообразование и печать выполнить в СКЛИТе. Тогда файл с накладной, уже проверенной на браки и с рассчитанными ценами, экспортируется из программы СКЛИТ в складской учет.',
      'Есть несколько моментов, которые делают получение накладных в нашу программу особенно удобным.',
      'Во-первых, проверка поступающего товара по самому свежему перечню браков.',
      'Во-вторых, объем архива накладных настраивается в программе. Обычно это год. При пополнении списка браков проверяется наличие наличие забракованных серий в ранее полученных накладных.',
      'В-третьих, возможны такие ситуации, когда Вы заказываете товар, например, в количестве 3 штук по 100 рублей. Оптовик Вам подтверждает эту цену и заказанное Вами количество. Но отгружает или недостаточное количество или на момент отгрузки цена изменится и цена в накладной уже не 100, а 107 рублей. В большом потоке товаров Вы этого не заметите. А СКЛИТ сразу Вам укажет на это несоответствие.',
      'Вы можете получать накладные и передавать их в программу складского учета как угодно. Если Вам нравится работать с электронной почтой, очень хорошо. Однако, советуем, в любом случае получать накладные и в СКЛИТ. Лишняя проверка на браки еще никому не вредила. Как только оптовики видят Ваш контроль за количеством и ценами заказа и отгрузки, недоразумения с ценами исчезают.',
    ],
    textList_2: ['Экспортируем накладные'],
    textList_3: [
      'В программе СКЛИТ => форма "реестр накладных" отмечаем необходимые накладные галочками и нажимаем экспорт(Накладные должны быть расценены). Накладные появятся в папке для экспорта накладных(по умолчанию папка Nakl_exp в корневом каталоге программы СКЛИТ)',
      'Файл накладной должен содержать следующую информацию:',
    ],
  },
  table: [
    {
      code: 'Код товара поставщика',
      description: 'ID_ORIG',
    },
    {
      code: 'Наименование поставщика',
      description: 'TOV_ORIG',
    },
    {
      code: 'Наименование из справочника СКЛИТ',
      description: 'TOVAR',
    },
    {
      code: 'Количество',
      description: 'KOL_VO',
    },
    {
      code: 'Цена поставщика с НДС',
      description: 'PR_W_NDS',
    },
    {
      code: 'Сумма по позиции с НДС',
      description: 'SUMMA',
    },
    {
      code: 'Розничный процент',
      description: 'BL_ROSN_NC',
    },
    {
      code: 'Розничная цена',
      description: 'BL_ROSN_PR',
    },
    {
      code: 'Сумма розничная по позиции',
      description: 'SUM_ROSN_A',
    },
    {
      code: 'Производитель',
      description: 'MAK_ORIG',
    },
    {
      code: 'Производитель из справочника СКЛИТ',
      description: 'MAKER',
    },
    {
      code: 'Процент наценки поставщика',
      description: 'NAC_OPT',
    },
    {
      code: 'НДС поставщика %',
      description: 'PROC_NDS',
    },
    {
      code: 'Сумма НДС по позиции',
      description: 'SUM_NDS',
    },
    {
      code: 'Сумма НДС розничная по позиции',
      description: 'ROSN_NDS_A',
    },
    {
      code: 'Цена по гос. реестру',
      description: 'PR_REE',
    },
    {
      code: 'Цена завода без НДС',
      description: 'PR_MAK',
    },
    {
      code: 'Цена завода с НДС',
      description: 'PR_MAK_NDS',
    },
    {
      code: 'Срок годности препарата',
      description: 'DATE_GOD',
    },
    {
      code: 'Серия',
      description: 'SERIA',
    },
    {
      code: 'Единица измерения',
      description: 'ED_IZM',
    },
    {
      code: 'ГТД',
      description: 'GTD',
    },
    {
      code: 'Местный сертификат',
      description: 'PROTOKOL',
    },
    {
      code: 'Признак ЖВЛП',
      description: 'ZV',
    },
    {
      code: 'Сертификат',
      description: 'SERT',
    },
    {
      code: 'Номер накладной',
      description: 'NAKL_NUM',
    },
    {
      code: 'Дата накладной',
      description: 'NAKL_DATE',
    },
    {
      code: 'Дата оплаты накладной',
      description: 'DATE_OPL',
    },
    {
      code: 'Сумма по всей накладной с НДС',
      description: 'SUM_W_NDS',
    },
    {
      code: 'Сумма НДС по всей накладной',
      description: 'SUMMA_NDS',
    },
    {
      code: 'Дата расценки',
      description: 'NAKL_PRIH',
    },
    {
      code: 'Сумма розничная',
      description: 'SUM_ROSN_B',
    },
    {
      code: 'Сумма НДС розничная',
      description: 'ROSN_NDS_B',
    },
    {
      code: 'Наименование поставщика',
      description: 'POST',
    },
    {
      code: 'Клиент',
      description: 'NAME',
    },
    {
      code: 'Штрих-код',
      description: 'SCAN_CODE',
    },
    {
      code: 'Цена поставщика без НДС',
      description: 'PR_WO_NDS',
    },
    {
      code: 'Сумма по позиции без НДС',
      description: 'SUM_B_NDS',
    },
    {
      code: 'Код товара из справочника СКЛИТ',
      description: 'ID_TOV',
    },
    {
      code: 'Код производителя из справочника СКЛИТ',
      description: 'ID_MAK',
    },
  ],
};
