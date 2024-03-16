export const materialsAccountingData = {
  title: 'Учет материалов',
  subtitle: 'Программа учета материалов',
  content: {
    element_1: {
      text: [
        'Открытие аптеки - это принятие ряда ответственных решений. Одно из них это выбор программы учета материалов. Алгоритм-С, БЭСТ, 1-С, Рецепт торговли… Их много. Отличие в цене, функциональных возможностях, качестве обслуживания и прочее. Мы предлагаем Вам отложить выбор программы "на потом", и бесплатно воспользоваться нашей программой учёта материалов.',
        'Приходная часть реализована в программе просмотра прайсов (проверка товара на браки, ценообразование, передача накладной на первый стол или на точку сети). На первый стол устанавливается расходный модуль.',
        'Оборудование можете приобрести самостоятельно или получить у нас с рассрочкой платежа на 1 год.',
        'Это очень просто и работает отлично как на одиночных аптеках, так и в небольших сетях. Возможна схема, в которой центральный офис получает все накладные, проверяет на браки, выполняет ценообразование и передает в реализацию на точки сети.',
        'Если нашего функционала, со временем, Вам покажется мало - выберете и приобретете, не торопясь, программу под свои нужды. Приобретенное у нас оборудование подойдет для любой программы.',
      ],
    },
    element_2: {
      title: 'Складская программа СКЛИТ',
      text: [
        'Складская программа СКЛИТ позволяет организовать розничную продажу в отдельной аптеке или в небольшой сети',
        'Склад работает на основе приходных накладных полученных с помощью программы "Просмотр прайсов"',
      ],
    },
    element_3: {
      title: 'Необходимое оборудование',
      textList: [
        '- Компьютер для кассы',
        '- Сканер штрих кодов',
        '- Принтер чеков/фискальный регистратор/онлайн касса',
      ],
    },
    element_4: {
      title: 'Дополнительное оборудование',
      textList: ['- Принтер этикеток(ценников/штрих кодов)'],
    },
    element_5: {
      title: 'Возможности складской программы:',
      textList: [
        '- Передача расцененной накладной в продажу',
        '- Поиск товара на складе',
        '- Продажа товара',
        '- Продажа товара поштучно (деление упаковки)',
        '- Печать чека(возможен как обычный принтер так и фискальный аппарат)',
        '- Просмотр остатков на складе',
        '- Возможность использовать свои штрих кода(Решение проблемы, когда в разных партиях приходит один товар по разным ценам)',
        '- Использование дисконтных карт',
        '- Просмотр продаж за период',
        '- Возможность работы нескольких касс',
        '- Проведение инвентаризации',
        '- Формирование автозаказа на основе продаж за период',
      ],
    },
    element_6: {
      title: 'Начало работы',
      text: 'Перед началом работы необходимо ввести остатки аптеки в программу складскую программу. (Это делается один раз.) Это можно сделать через создание новой накладной и добавлением в нее всех имеющихся товаров, их количество и цен. Подробней о создании накладной описано ниже.',
    },
    element_7: {
      title: 'Подготовка накладной к продаже',
      content: {
        text_1: [
          'Для отправки в продажу накладная должна быть расценена.',
          '*Накладная,введенная вручную, уже расценена.',
          'Кнопка "Печать" позволяет распечатать "Ценники на витрину", "Стелажные карты", "Собственные штрих-кода".\n',
        ],
        text_2:
          'Если вы не используете свои штрих-коды, то следует убедиться, что поставщик проставил в накладной все штрих-коды. Если в накладной имеются товары, которые продаются поштучно - необходимо выставить количество штук в упаковке в этих позициях Для этого выбираем нужную накладную и нажимаем кнопку "Распознать"',
        subtitle: 'Откроется окно с позициями по накладной:',
        textList_1: [
          '1) Выбираем позицию.',
          '2) Если пустое поле штрих-код пустое - сканируем в это поле код с упаковки',
          '3) Если товар продается поштучно - заполняем поле "Штук в упаковке"',
          '4) Нажимаем кнопку "Сохранить и выйти"',
        ],
      },
      images: {
        img_1: 'assets/pharmaciesImages/uchet/uchet1.jpg',
        img_2: 'assets/pharmaciesImages/uchet/uchet2.jpg',
        img_3: 'assets/pharmaciesImages/uchet/uchet3.jpg',
      },
    },
    element_8: {
      title: 'Отправка накладных в продажу',
      content: {
        text_1:
          'После того как накладная подготовлена - отправим её в продажу:',
        text_2:
          'Колонка "Дата отправки в продажу" заполнится текущей датой. Это означает что накладная была успешно добавлена на склад',
        text_3: [
          'Как только накладная была отправлена в складскую программу позиции по накладной доступны для продажи.',
          'Если вы неправильно расценили или просто передумали продавать товар по этой накладной - можете её вернуть из продажи нажав на кнопку "Из продажи".',
          '*Накладную возможно вернуть из продажи только до тех пор, пока не было движения товара (то есть ничего из неё не продавалось)',
        ],
        textList: ['Выберем накладную', 'Нажмем кнопку "В продажу"'],
      },
      image: 'assets/pharmaciesImages/uchet/uchet4.jpg',
    },
    element_9: {
      title: 'Вход в складскую программу',
      text:
        'При запуске складской программы она потребует логин и пароль.\n' +
        'Вводим логин и пароль и нажимаем кнопку войти',
      image: 'assets/pharmaciesImages/uchet/uchet5.jpg',
    },
    element_10: {
      title: 'Добавление товара в чек',
      text_1:
        'Сразу после входа в программу откроется окно продаж. Программа готова к работе. Для добавление товара в чек достаточно отсканировать штрих-код сканером. *Если с таким штрих кодом найдено больше одного товара то программа предоставит выбор (обычно так бывает если один товар пришёл из разных партий.) *Если не найдено товара с таким штрих-кодом - всплывет соответствующее сообщение После сканирования товара по умолчанию в чек добавится одна позиция. Для изменения количества нажмите "enter" и введите количество. Повторное сканирование товара добавит к количеству +1 Если у покупателя имеется дисконтная карта - сканируйте её для предоставление скидки. В программе появится соответствующая надпись',
      text_2:
        'Также возможно в ручном режиме добавлять товар в чек.\n' +
        'Для этого нажмите кнопку добавить(зеленый плюс)',
      image: 'assets/pharmaciesImages/uchet/uchet6.jpg',
    },
    element_11: {
      title: 'Поиск товара на складе',
      text: 'В поле поиска наберите часть названия товара или его штрих-код. Поиск начнет работать по нажатию на клавишу "пробел" или "enter". В таблице отобразятся все найденные позиции. Для отображение всех остатков нажмите на кнопку "Показать все остатки"',
      image: 'assets/pharmaciesImages/uchet/uchet7.jpg',
    },
    element_12: {
      title: 'Проведение чека',
      content: {
        text_1:
          'После того как список товаров сформирован необходимо провести чек. Для этого нажмите кнопку "провести операцию" (Кнопка с зеленной галочкой) или сочетание клавиш ctrl+enter.',
        text_2: 'Появится окно проведение чека:',
        text_3:
          'После этого чек переместится в историю и будет сознан пустой чек',
        textList: [
          'Выберем способ расчета наличными или по карте',
          'В поле внесено вводим сумму внесенную клиентом. Автоматически посчитается сдача',
          'Для завершения операции нажмите кнопку "провести чек" (Кнопка с зеленной галочкой).',
        ],
      },
      image: 'assets/pharmaciesImages/uchet/uchet8.jpg',
    },
    element_13: {
      title: 'История чеков',
      text: 'Меню "Товары->история чеков" Дает возможность поиска, просмотра, печати чека. Для более детального поиска можно выставить дату, оператора и тип операции.',
    },
    element_14: {
      title: 'Фискальный регистратор\n',
      text: 'Меню "Отчетность->Фискальный регистратор" Поддерживает следующие функции:',
      textList: [
        '- Внесение суммы на остаток кассы',
        '- Забрать сумму с кассы',
        '- Отчет без гашения (x-отчет)',
        '- Отчет с гашением (z-отчет)',
      ],
      image: 'assets/pharmaciesImages/uchet/uchet9.jpg',
    },
    element_15: {
      title: 'Продажи товаров за период',
      text: 'Меню "Товары->Продажи по товарам" Предназначена для просмотра товаров, проданных за определенный период. Сразу при запуске установлен период за последнюю неделю, и соответственно продажи за этот период. При необходимость можно выставить нужный период. Вы имеете возможность распечатать этот список или сохранить в файл, а также сформировать заявку но основании данных по продажам.',
      image: 'assets/pharmaciesImages/uchet/uchet10.jpg',
    },
    element_16: {
      title: 'Формирование заявки по продажам',
      text: 'Для формирование заявки:',
      textList: [
        'Выберите требуемый период по продажам.',
        'При необходимость можно подкорректировать количество, которое будет добавлено в заявку в колонке "Кол."',
        'Выбрать автора заявки на которого будет сформирована заявка',
        'Если при формировании заявки не важен изготовитель, то ставим галочку "Без учета изготовителей"',
        'Нажимаем кнопку заказать, после чего вы сможете увидеть товар в программе "Просмотр прайсов" на вкладке товары',
      ],
    },
    element_17: {
      title: 'Инвентаризация',
      text_1: 'После проведения чека',
      textList_1: [
        'В окне продаж выбираем операцию инвентаризация',
        'Сканером штрих кодов добавляем все товары на складе в чек',
        'Чтоб не вбивать один и тот же товар, после сканирования штрих-кода предлагается ввести количество товара',
        'После того как все товары на складе введены нажимаем кнопку провести чек',
      ],
      textList_2: [
        'Чек сохранен в виде накладной в реестре накладных (по завершению инвентаризации её можно перерасценить и отправить в продажу)',
        'Товары не найденые на складе, можно посмотреть на остатках в программе.',
        'Товары найдены на складе, но нет на остатках программы представлены в таблице. Их можно оформить как накладную, расценить и отправить в продажу',
        'По завершению инвентаризации остатки необходимо очистить',
      ],
      images: {
        img_1: 'assets/pharmaciesImages/uchet/uchet11.jpg',
        img_2: 'assets/pharmaciesImages/uchet/uchet12.jpg',
      },
    },
    element_18: {
      title: 'Добавление сторонних накладных',
      text_1:
        'Предусмотрена возможность отправки накладных в продажу как полученных с помощью программы "Просмотр прайсов", так и сторонних накладных путем добавления их в реестр накладных Откроем "Просмотр прайсов"-> меню накладные-> реестр накладных',
      text_2:
        'После этого будет создана пустая накладная, и программа предложит сразу вводить товар',
      text_3: 'Для ввода товара вы можете воспользоваться сканером штрих-кодов',
      text_4:
        '* Если после ввода штрих кода ничего не нашлось программа предложит ввести наименование и производителя в ручную. Ввод товара будет добавлен в базу данных и при следующем сканировании заполнит наименование и производителя.',
      text_5: 'После ввода наименование товара вводим его характеристики',
      text_6:
        'После чего программа предложит ввести следующую позицию. По завершению ввода нажимаем кнопку выход',
      textList_1: [
        'Нажимаем кнопку "Новая"',
        'Вводим номер накладной',
        'Вводим название поставщика',
        'Нажимаем кнопку сохранить',
      ],
      textList_2: [
        'Заполняете поле штрих-код с помощью сканера, или введите с клавиатуры',
        'В базе будут найдены все товары с данным штрих кодом и выведены в таблице. Выбираем нужный нам товар (Если производитель не совпадает, его можно будет исправить)',
        'Нажимаем кнопку "Выбрать" или клавишу enter',
        'Будут автоматически заполнены поля наименование и производитель. (Вы можете исправить название или производителя)',
      ],
      textList_3: [
        'Срок годности в формате месяц/год',
        'Если товар жизненно важный ставим галочку',
        'Ваша розничная наценка',
        'Розничная цена',
        'Остаток на складе',
        'Количество товара в упаковке (В случае поштучной продажи)',
        'Нажимаем кнопку сохранить и позиция добавится в накладную.',
      ],
      images: {
        img_1: 'assets/pharmaciesImages/uchet/uchet13.jpg',
        img_2: 'assets/pharmaciesImages/uchet/uchet14.jpg',
        img_3: 'assets/pharmaciesImages/uchet/uchet15.jpg',
      },
    },
  },
};
